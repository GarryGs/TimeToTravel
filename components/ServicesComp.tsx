import { Card } from "@components/card"

export const ServiceComp = () => {
    const servicesData = [
        {
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-visa-aDPHoEvvL2h1J1G8ROq7Zo76hpTHkT.jpeg",
            CardTitle: "Tourist Visa",
            CardDesc: "A tourist visa is given for sightseeing. A visit visa, however, refers to a visa...",
            link: "/tourist-visa"
        },
        {
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/study-visa/Study-Visa-lgxS7P1cbNZMvuKajfIPsst1wA8fS3.jpg",
            CardTitle: "Study Visa",
            CardDesc: "A student visa is a type of non-immigrant visa. In some countries like Canada...",
            link: "/study-visa"
        },
        {
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/spouse-visa/spouse-visa-My3X7fOyTrkiV9gIHR5A7ok0F6CwYA.jpg",
            CardTitle: "Spouse Visa",
            CardDesc: "What Are the Requirements for a UK Spouse Visa or Partner Visa ...",
            link: "/spouse-visa"
        }
    ]
    return (
        <div>
            <div className="text-center">
                <h3 className=" text-center mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Time to<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Travel</span></h3>
                {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Time To <mark className="px-2 text-white bg- rounded dark:bg-blue-500">Travel</mark></h1> */}
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Best Immigration consultant in Chandigarh</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mx-12 mt-5 flex-wrap">
                {servicesData.map( (service) => {
                    return (
                        <Card key={service.CardTitle} hrefPage={service.link} imgSrc={service.imgSrc} CardTitle={service.CardTitle} CardDesc={service.CardDesc}></Card>
                    )
                })}
            </div>
        </div>
        
        
    )
}