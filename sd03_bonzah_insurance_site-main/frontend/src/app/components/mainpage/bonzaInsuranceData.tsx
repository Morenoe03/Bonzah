export default function bonzaInsuranceData(){

    const infoBlocks = [
        {blockName : "block1", fact : "10+", header : "INSURANCE PARTNERS", subHeader : "Trusted insurance companies" },
        {blockName : "block2", fact : "100,000+", header : "CLIENTS", subHeader : "Protected drivers" },
        {blockName : "block3", fact : "10+", header : "YEARS IN MOBILITY INSURANCE", subHeader : "Experience you can trust" }
    ]
    return(
        <>
            <div className="container-w-mx bg-white flex flex-col">

                <div className="flex justify-center pt-20 pb-6 text-black font-raleway text-4xl font-bold text-center">
                    Bonzah Insurance
                </div>

                <div className="flex justify-center pb-20 color-dark-grey text-2xl font-thin text-center">
                    Trusted by drivers nationwide with a decade of mobility insurance expertise
                </div>

            </div>

            <div className="container-w-mx flex flex-row flex-wrap justify-center bg-white pb-20">
                {[...infoBlocks].map((block,i) => (
                    <div key={block.blockName} className="p-10">

                        <div className="box-content transform w-70 h-50 bg-gray-50 justify-self-end rounded-xl shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">

                            <div className="flow-root flex justify-self-center text-pink-600 text-5xl font-bold pt-10 pb-4" >
                               {block.fact}
                            </div>

                            <div className="flow-root flex justify-self-center text-black text-sm font-semibold">
                                {block.header}
                            </div>

                            <div className="flow-root flex justify-self-center text-gray-400">
                                {block.subHeader}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}