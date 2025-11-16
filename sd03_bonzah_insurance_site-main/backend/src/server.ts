import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

//connection pool
const pool = mysql.createPool({
  host: (process.env.DB_HOST || '127.0.0.1').trim(),
  port: Number(process.env.DB_PORT || 3307),
  user: (process.env.DB_USER || 'appuser').trim(),
  password: (process.env.DB_PASSWORD || 'apppass_example').trim(),
  database: (process.env.DB_NAME || 'com402').trim(),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Ensure posts table exists
async function ensurePostsTable() {
  try {
    await pool.execute(
      `CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        images JSON NULL,
        body TEXT NOT NULL,
        publish_date DATETIME NOT NULL,
        last_edit_date DATETIME NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
    );
    console.log('Ensured posts table exists');
  } catch (err) {
    console.error('Failed to ensure posts table:', err);
  }
}

// row
interface ReviewRow extends RowDataPacket {
  id: number;
  rating: number | null;
  text: string;
  author: string;
  date: string | null;
  company: string | null;
}

// Post row type
interface PostRow extends RowDataPacket {
  id: number;
  title: string;
  author: string;
  images: string | null;
  body: string;
  publish_date: string;
  last_edit_date: string;
}

// Helper to convert DB row -> API response
function mapPostRowToResponse(row: PostRow) {
  let images: string[] = [];
  try {
    if (row.images) images = JSON.parse(row.images);
  } catch (e) {
    images = [];
  }

  return {
    id: row.id,
    title: row.title,
    author: row.author,
    images,
    body: row.body,
    publishDate: new Date(row.publish_date).toISOString(),
    lastEditDate: new Date(row.last_edit_date).toISOString(),
  };
}

async function ensureReviewsTable() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      rating INT NULL,
      text TEXT NOT NULL,
      author VARCHAR(255) NOT NULL,
      date DATETIME NULL,
      company VARCHAR(255) NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
  console.log('Ensured reviews table exists');

}

// call both at startup
(async () => {
  try {
    const c = await pool.getConnection();
    await c.query('SELECT 1');
    c.release();
    console.log('DB connectivity OK from app');

    await ensurePostsTable();
    await ensureReviewsTable();

    const PORT = Number(process.env.PORT || 3001);
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (e) {
    console.error('Startup failure:', e);
    process.exit(1);
  }
})();

// Get all reviews (with optional filters)
app.get('/reviews', async (req, res) => {
  console.log('GET /reviews hit');
  const { rating, author, text, date, company } = req.query; // 👈 include company in query params

  try {
    let sql = 'SELECT id, rating, text, author, date, company FROM reviews';
    const conditions: string[] = [];
    const params: any[] = [];

    if (rating !== undefined) {
      conditions.push('rating = ?');
      params.push(Number(rating));
    }
    if (author) {
      conditions.push('author LIKE ?');
      params.push(`%${author}%`);
    }
    if (text) {
      conditions.push('text LIKE ?');
      params.push(`%${text}%`);
    }
    if (date) {
      conditions.push('DATE(date) = ?');
      params.push(date);
    }
    if (company) {
      conditions.push('company LIKE ?');
      params.push(`%${company}%`);
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }

    console.log('Final SQL:', sql, params);
    const [rows] = await pool.query<ReviewRow[]>(sql, params);
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get a review by ID
app.get('/reviews/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`GET /reviews/${id} hit`);
  try {
    const [rows] = await pool.query<ReviewRow[]>(
      'SELECT id, rating, text, author, date, company FROM reviews WHERE id = ?',
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Create a new review
app.post('/reviews', async (req, res) => {
  const { rating, text, author, date, company } = req.body;
  console.log('POST /reviews hit', req.body);

  if (!text || !author) {
    return res.status(400).json({ error: 'Missing required fields: text, author' });
  }

  const ratingNum = rating === undefined || rating === null ? null : Number(rating);
  if (ratingNum !== null && Number.isNaN(ratingNum)) {
    return res.status(400).json({ error: 'rating must be a number or null' });
  }

  try {
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO reviews (rating, text, author, date, company)
       VALUES (?, ?, ?, ?, ?)`,
      [ratingNum, text, author, date ?? null, company ?? null]
    );

    res.status(201).json({
      id: result.insertId,
      rating: ratingNum,
      text,
      author,
      date: date ?? null,
      company: company ?? null,
    });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database insert failed' });
  }
});

// Update a review by ID
app.put('/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { title, rating, text, author, date, company } = req.body;
  console.log(`PUT /reviews/${id} hit`, req.body);

  const ratingNum = rating === undefined || rating === null ? null : Number(rating);
  if (ratingNum !== null && Number.isNaN(ratingNum)) {
    return res.status(400).json({ error: 'rating must be a number or null' });
  }

  try {
    const [result] = await pool.execute<ResultSetHeader>(
      'UPDATE reviews SET rating = ?, text = ?, author = ?, date = ?, company = ? WHERE id = ?',
      [ratingNum, text, author, date ?? null, company ?? null, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Review not found' });

    res.json({
      id: Number(id),
      rating: ratingNum,
      text,
      author,
      date: date ?? null,
      company: company ?? null,
    });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database update failed' });
  }
});


// Delete a review by ID
app.delete('/reviews/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /reviews/${id} hit`);
  try {
    const [result] = await pool.execute<ResultSetHeader>(
      'DELETE FROM reviews WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ error: 'Review not found' });

    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Database delete failed' });
  }
});

// Get all posts
app.get('/posts', async (req, res) => {
  console.log('GET /posts hit');
  try {
    const [rows] = await pool.query<PostRow[]>('SELECT id, title, author, images, body, publish_date, last_edit_date FROM posts ORDER BY publish_date DESC');
    const mapped = rows.map(mapPostRowToResponse);
    res.json(mapped);
  } catch (err) {
    console.error('DB error (get posts):', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Get a post by id
app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`GET /posts/${id} hit`);
  try {
    const [rows] = await pool.query<PostRow[]>('SELECT id, title, author, images, body, publish_date, last_edit_date FROM posts WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(mapPostRowToResponse(rows[0]));
  } catch (err) {
    console.error('DB error (get post):', err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// Create a post
app.post('/posts', async (req, res) => {
  console.log('POST /posts hit', req.body);
  const { title, author, images, body, publishDate, lastEditDate } = req.body;

  if (!title || !author || !body) {
    return res.status(400).json({ error: 'Missing required fields: title, author, body' });
  }

  const imagesArr: string[] = Array.isArray(images) ? images : [];
  const publish = publishDate ? new Date(publishDate) : new Date();
  const lastEdit = lastEditDate ? new Date(lastEditDate) : publish;

  try {
    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO posts (title, author, images, body, publish_date, last_edit_date) VALUES (?, ?, ?, ?, ?, ?)',
      [title, author, JSON.stringify(imagesArr), body, publish, lastEdit]
    );

    res.status(201).json({
      id: (result as ResultSetHeader).insertId,
      title,
      author,
      images: imagesArr,
      body,
      publishDate: publish.toISOString(),
      lastEditDate: lastEdit.toISOString(),
    });
  } catch (err) {
    console.error('DB error (create post):', err);
    res.status(500).json({ error: 'Database insert failed' });
  }
});

// Update a post
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`PUT /posts/${id} hit`, req.body);
  const { title, author, images, body, publishDate, lastEditDate } = req.body;

  if (!title || !author || !body) {
    return res.status(400).json({ error: 'Missing required fields: title, author, body' });
  }

  const imagesArr: string[] = Array.isArray(images) ? images : [];
  const publish = publishDate ? new Date(publishDate) : new Date();
  const lastEdit = lastEditDate ? new Date(lastEditDate) : publish;

  try {
    const [result] = await pool.execute<ResultSetHeader>(
      'UPDATE posts SET title = ?, author = ?, images = ?, body = ?, publish_date = ?, last_edit_date = ? WHERE id = ?',
      [title, author, JSON.stringify(imagesArr), body, publish, lastEdit, id]
    );

    if ((result as ResultSetHeader).affectedRows === 0) return res.status(404).json({ error: 'Post not found' });

    res.json({ id: Number(id), title, author, images: imagesArr, body, publishDate: publish.toISOString(), lastEditDate: lastEdit.toISOString() });
  } catch (err) {
    console.error('DB error (update post):', err);
    res.status(500).json({ error: 'Database update failed' });
  }
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  console.log(`DELETE /posts/${id} hit`);
  try {
    const [result] = await pool.execute<ResultSetHeader>('DELETE FROM posts WHERE id = ?', [id]);
    if ((result as ResultSetHeader).affectedRows === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('DB error (delete post):', err);
    res.status(500).json({ error: 'Database delete failed' });
  }
});
