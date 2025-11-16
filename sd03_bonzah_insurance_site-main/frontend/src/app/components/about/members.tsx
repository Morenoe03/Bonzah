import Image from "next/image";

export default function members(){

    const VIPs = [
        {name:"John Possumato",title:"CEO, Bonzah Insurance",notes:"20+ years in insurance industry leadership with expertise in digital transformation and customer experience",picture:"/partners/defaultPic.jpg"},
        {name:"Adam Potash",title:"COO, Bonzah Insurance",notes:"Former tech executive with deep expertise in AI data analytics and building scalable insurance platforms",picture:"/partners/defaultPic.jpg"},
        {name:"Brandon Rockow",title:"Founder, Bonzah Inc.",notes:"Insurance claims specialist focused on streamlining processes and improving customer satisfaction",picture:"/partners/defaultPic.jpg"}
    ]

    return(

        <div className="flex-col justify-center"> 

            <div className="text-5xl font-bold font-raleway pt-10 justify-self-center">
                Leadership Team
            </div>

            <div className="text-2xl font-raleway font-thin pt-10 pb-10 justify-self-center text-[var(--color-dark-grey)] ">
                Meet the experienced professionals that are driving inovation in auto insurance.
            </div>

            <div className=" flex flex-row flex-wrap justify-center">

                {[...VIPs].map((p,i) => (
                    <div key={p.name} className="p-10">

                        <div className="transform flex flex-col bg-white w-100 h-80 rounded-xl border border-gray-300 shadow-md justify-center transition duration-300 hover:scale-105 hover:shadow-xl">

                            <div className="pt-4 pl-2 pr-2 justify-center">

                                <Image 
                                    src={p.picture}
                                    alt={p.name}

                                    width={100}
                                    height={100}

                                    priority

                                    className="w-30 h-30 rounded-full p- border border-gray-200 justify-self-center"
                                />

                                <div className="pt-2 text-black font-bold text-xl font-raleway justify-self-center">
                                    {p.name}
                                </div>

                                <div className="pt-1 text-[var(--color-medium)] justify-self-center">
                                    {p.title}
                                </div>
                                
                                <div className="flex pt-2 text-sm text-[var(--color-dark-grey)] text-raleway pb-4 justify-self-center text-center">
                                    {p.notes}
                                </div>

                            </div>


                        </div>
                    </div>
                ))}

            </div>

        </div>

    )
}