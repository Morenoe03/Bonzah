import Image from "next/image";

export default function title({companyName = "Gieco", logo = "/partners/geico.jpg"}){

    {/*Temp*/}
    return(
        <div className="flex p-20 flex-col">
            <div className="flex justify-center"> 
                <Image
                    src={logo}
                    alt={"Company Logo"}
                
                    width = {200}
                    height = {200}

                    priority

                    className="border-2 border-black rounded-lg shadow-lg"
                />
            </div>

            <div className="text-center text-black font-raleway text-7xl font-bold">
                {companyName}
            </div>

            

        </div>
    );
}