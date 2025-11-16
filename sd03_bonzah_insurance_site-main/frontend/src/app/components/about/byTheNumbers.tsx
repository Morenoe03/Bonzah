export default function byTheNumbers() {
    const facts = [
        {stat:"500K+",name:"Customers Served"},
        {stat:"50",name:"States Licensed"},
        {stat:"98%",name:"Customer Satisfaction"},
        {stat:"24/7",name:"Claims Support"}
    ]

    return( 
        <div className="bg-white flex flex-col justify-center">

            <div className="text-5xl font-bold font-raleway pt-10 text-center">
                By the Numbers
            </div>

            <div className="text-2xl font-raleway font-thin pt-10 pb-10 justify-self-center text-[var(--color-dark-grey)] text-center ">
                Our commitment to excellence drives measurable results
            </div>

            <div className=" flex flex-row flex-wrap justify-center">

                {[...facts].map((f,i) => (
                    <div key={f.stat} className="p-10">
                        <div  className="transform bg-gray-100 w-60 h-40 shadow-md p-5 pt-10 rounded-xl transition duration-300 hover:scale-105 hover:shadow-xl">

                            <div className="text-center text-5xl font-bold font-raleway text-[var(--color-pink)] pb-4">
                                {f.stat}
                            </div>

                            <div className="text-center font-raleway text-md text-[var(--color-dark-grey)]">
                                {f.name}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    )

}