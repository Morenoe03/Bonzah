
const facts = [
    {fact:"Transparent pricing with no hidden fees"},
    {fact:"24/7 customer support and claims processing"},
    {fact:"Technology-driven personalized coverage"}
]

export default function aboutBonzah(){
    return(
        <div className="flex flex-row bg-white justify-center">
 
            <div className="flex container w-1/3 flex-col pt-20 pb-20">

                <div className="text-3xl font-bold font-raleway pt-4 pl-2 pr-2 pb-4">
                    Bonzah Insurance
                </div>

                <div className="pt-2 pb-2 pl-2 pr-8 text-xl font-thin leading-normal font-raleway text-gray-500">
                    Bonzah Insurance is a nationally licensed mobility-focused insurance agency specializing in comprehensive auto insurance solutions. We're redefining how drivers access and experience vehicle insurance—offering smart, flexible, and affordable coverage tailored to your unique journey.
                </div>

                <div className="pt-2 pb-2 pl-2 pr-8 text-xl font-thin leading-normal font-raleway text-[var(--color-dark-grey)]">
                    Built on innovation and trust, Bonzah Insurance combines cutting-edge technology with decade-long expertise in mobility insurance. Our mission is to deliver seamless insurance solutions that keep you covered from the first mile to full ownership
                </div>

                <div className="pt-2 pb-2 pl-2 pr-8 text-xl font-thin leading-normal font-raleway text-[var(--color-dark-grey)]">
                    Our insurance platform is powered by Bonzah's modern policy quoting and issuing system and enhanced by customer-centric technology. Whether you're behind the wheel today or taking steps toward your next vehicle, we provide the right insurance at the right time—with digital convenience and human support.
                </div>

            </div>

            <div className="flex container w-1/3 pt-20 pb-20">

                <div className="bg-gray-100 w-1/1 rounded-lg p-10">

                    <div className="text-2xl font-semibold pb-5">
                        Our Mission
                    </div>

                    <div className="text-xl font-thin leading-normal font-raleway text-[var(--color-dark-grey)] pb-5">
                        To provide exceptional auto insurance coverage through innovative technology, transparent pricing, and personalized service that exceeds our customers' expectations.
                    </div>

                    {[...facts].map((f,i)=>(
                                <div key={f.fact}>
                                    <div className="flex flex-row p-2">

                                        <svg className="w-6 h-6 text-[var(--color-pink)] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                                        </svg>

                                        <div className="text-lg text-[var(--color-dark-grey)]">
                                            {f.fact}
                                        </div>

                                    </div>
                                </div>
                            )
                        )
                    }

                </div>

            </div>

        </div>
    )
}