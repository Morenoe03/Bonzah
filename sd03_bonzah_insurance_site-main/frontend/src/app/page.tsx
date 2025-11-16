import Image from "next/image";
import Mainpage from "./components/mainpage/page";

//note to y'all, this is Next.js it is going to operate different from
//the base react that we used. I think this is the way to do page navigation.
//Every new page is just a new folder with a 'page.tsx' in it. You then edit that
//and it will make a new url for it. because I have a folder named mainpage, with
//a 'page.tsx' in it there is a url ...\mainpage that exists now. I am looking into
//navigation as we speak. For now, this will work.
export default function Home() {
  return (
    <Mainpage />
  );
}
