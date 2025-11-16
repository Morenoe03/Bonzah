
export default function aboutUs({aboutUs = "About us text \n \n About us Text \n \n About us Text"}){

    return(

        <div className="bg-white flex flex-col pt-10 pb-10 lg:pl-50 lg:pr-50 md:pl-25 md:pr-25 sm:pl-5 sm:pr-5">

            <div className="text-center text-black font-raleway text-6xl font-bold pb-5">
                About us
            </div>

            <p className="text-[var(--color-dark-grey)] pl-10 pr-10 break-normal whitespace-pre-line sm:pl-2 sm:pr-2">
                {aboutUs}
            </p>

        </div>
    );

}