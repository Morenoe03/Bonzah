
export default function getInsurance({insurances = [""], companyName = "Gieco"}){

    const purchaseInsurance = (insruanceType = "car") => {
        var tmp = 0;
        
    }

    return(
        <div className="bg-white p-10">
            <div className="flex flex-wrap bg-[var(--color-pink)] justify-self-center rounded-xl shadow-xl">

                <div className="flex flex-col flex-wrap">

                    <div className="text-black font-bold text-4xl text-center p-10">
                        Get Insurance from {companyName}
                    </div>
                
                    <div className="flex flex-wrap">
                        {[...insurances].map((type,i) => (
                            <div key = {type} className="p-10  justify-self-center">
                                <button className="transform bg-white border-1 shadow-xl w-60 h-20 rounded-xl transition duration-300 hover:bg-[var(--color-light-pink)] hover:scale-105 hover:shadow-4xl"
                                    onClick={() => {purchaseInsurance(type)}}>
                                    {type} insurance
                                </button>
                            </div>
                        ))} 
                    </div>

                </div>

            </div>
        </div>
    )
}
