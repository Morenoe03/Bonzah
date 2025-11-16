export default function FAQ(){

    //when you want to add a question to the FAQ's just throw in a new question with a question, 'q', and an answer, 'a'.
    const questions = [
        {q: "What does Bonzah do?", a: "Bonzah Insurance is an AI-powered insurance comparison platform that helps you find the best auto insurance rates by comparing quotes from top insurance companies." }, 
        {q: "Is Bonzah legit?" , a: "Yes, Bonzah Insurance is a legitimate, licensed insurance broker. We're registered in all 50 states and work with major insurance carriers to provide authentic quotes and coverage options."},
        {q:"Is Bonzah Insurance a licensed insurace agency?",a:"Yes, Bonzah Insurance is a fully licensed insurance agency and broker in all 50 states. We maintain all necessary licenses and regulatory compliance to provide insurance services."},
        {q:"Does it cost money to shop for insurance with Bonzah Insurance?",a:"No, Bonzah Insurance's service is completely free for consumers. We're compensated by insurance companies when you purchase a policy, so there's no cost to you for comparing quotes."},
        {q:"What information do you need so I can compare car insurance quotes?",a:"To provide accurate quotes, we'll need basic information like your vehicle details, driving history, current coverage, and personal information such as age and location."},
        {q:"Will using Bonzah Insurance impact my credit score?",a:"No, using Bonzah Insurance will not impact your credit score. We may perform a soft credit check for some quotes, but this doesn't affect your credit rating."},
        {q:"Is my personal information protected?",a:"Yes, we take data security seriously. Your personal information is encrypted and protected according to industry standards, and we never sell your data to third parties."}
    ];

    const upDVal = "m19.5 8.25-7.5 7.5-7.5-7.5";
    const downDVal = "m19.5 8.25-7.5 7.5-7.5-7.5";

    return(
        <>
            <div className="container-w-mx p-10 bg-white flex flex-col">

                <div className="flex text-3xl font-bold text-gray-900 mb-4 justify-center">
                    FAQs
                </div>

                {[...questions].map((quest,i)=>(
                    
                    <div key={quest.q +""+i} className="p-2">

                        <div className="flex justify-center"> 

                            <button  type="button" className="transform flex flex-col container max-w-4xl h-20 overflow-hidden border-gray-200 rounded-lg border-1 p-5 transition duration-300 shadow:md hover:scale-105 hover:shadow-xl focus:h-auto">

                                <div className=" grid grid-cols-6">

                                    <div className="col-span-5 font-raleway text-xl font-semibold justify-self-start">
                                        {quest.q}
                                    </div>

                                    <div className="text-gray-600 justify-self-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 justify-self-end">
                                            <path id={"path" + i} strokeLinecap="round" className="" strokeLinejoin="round" d={downDVal} />
                                        </svg>
                                    </div>
                                    
                                </div>

                                <div className="text-gray-500 text-md pt-10 "> 
                                    {quest.a}
                                </div>

                            </button>
                        </div>
                    </div>

                ))}
            
            </div>
        </>
    );
}