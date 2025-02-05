import { ServiceHeading } from "@components/serviceHeading";

const TouristProps = {
    imageUrl: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-visa-heading-d0efTT75v38ZORIKPINn16ahokoI0S.jpg",
    title: "Tourist Visa",
}

export default function TouristVisa() {
    return <>
        <ServiceHeading props={TouristProps}></ServiceHeading>
        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <img 
            className="object-cover w-full h-auto rounded-xl" 
            src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-uk-k7jhHYM7ryuqcbBoat3vX6LnsCoxoP.png" 
            alt="Uk tourist" 
            />
            <div className="flex flex-col gap-10 mx-5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">United Kingdom Immigration & Visa Services</h1>
                <p className="text-base text-slate-700">The UK is one of the top destinations for higher education, particularly popular with Indian students due to the similarities in education systems and the chance to develop strong English language skills. Studying in the UK offers a unique advantage for learning and enhancing English proficiency, an asset in the global job market.</p>
                <p className="text-base text-slate-700">The UK Standard Visitor Visa allows for a range of activities, including tourism, business, and short-term study (for courses lasting up to 6 months). Generally, this visa permits stays of up to 6 months, though it may be extended in specific cases, such as for medical treatment.</p>
            </div>
            <p className="col-span-2 text-base text-slate-700">A tourist visa typically specifies the length of stay, valid travel dates, permitted number of visits, and work eligibility. Many clients have shared success stories about their experiences with Time To Travel Consultants, a top immigration consultant . Choosing our services can increase your chances of obtaining a UK visa with ease and efficiency.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <div className="flex flex-col gap-10 mx-5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">Canada Tourist Visa</h1>
                <p className="text-base text-slate-700">Canada's warm approach to immigration makes it a popular choice for travelers. Known for its multiculturalism, stunning natural beauty, and rich history, Canada is a fascinating country to explore.</p>
                <p className="text-base text-slate-700">Obtaining a Canada Tourist Visa is straightforward, although some applications are denied due to incomplete forms or incorrect documentation. Time To Travel Consultants, one of the best tourist visa consultants, has helped many people achieve their travel dreams.</p>
                <p className="text-base text-slate-700">A Canadian tourist visa outlines the length of stay, allowed visits, and the individual's rights during the visit. With our expert support, the path to visa stamping becomes seamless and hassle-free, letting you focus on your journey.</p>
            </div>
            
            <img 
            className="object-cover w-full h-auto rounded-xl" 
            src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-canada-drltwCwuAD5gMfwBbuQDTFJe0kqxjV.png" 
            alt="canada tourist" 
            />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <img 
                className="object-cover w-full h-auto rounded-xl" 
                src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-australia-LeKQmrQkBMbahKs64lWSEtrfv0xrrN.png" 
                alt="Australia tourist" 
            />

            <div className="flex flex-col gap-10 mx-5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">Australia Immigration & Visa Services</h1>
                <p className="text-base text-slate-700">Australia, with its scenic landscapes and world-class universities, is a preferred destination for both tourists and students. For those interested in Australian immigration, it's an opportunity to experience an entire continent with vibrant cultural and educational offerings.</p>
                <p className="text-base text-slate-700">To visit Australia, most travelers need a Tourist Visa or Visitor Visa, which grants short-term entry. Australian citizens and New Zealand nationals are exempt from this visa requirement, as they can enter under the Visa on Arrival (VOA) program. Citizens of 45 eligible countries can apply for an Electronic Travel Authority (ETA) or E-Visitor Visa for tourism or business trips, while others may apply for a Visitor Visa for longer stays.</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <div className="flex flex-col gap-10 mx-5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">Schengen Visa - General Information</h1>
                <p className="text-base text-slate-700">The Schengen Visa is required for nationals of specific third countries entering any of the 26 Schengen Area countries for stays up to 90 days within a 180-day period, as outlined in Council Regulation 539/2001.</p>
                <p className="text-base text-slate-700">The Schengen Area encompasses Belgium, Czech Republic, Denmark, Estonia, Finland, France, Iceland, Italy, Lithuania, Latvia, Liechtenstein, Luxembourg, Hungary, Malta, Germany, Netherlands, Norway, Poland, Portugal, Austria, Greece, Slovakia, Slovenia, Spain, Sweden, and Switzerland.</p>
                <p className="text-base text-slate-700">Clients have reported success stories after working with Time To Travel Consultants, one of the top visa consultants. We assist clients throughout the visa application process to increase their chances of approval. It's advisable to apply at least 15 days before travel to ensure timely processing.</p>
            </div>

            <img 
                className="object-cover w-full h-auto rounded-xl" 
                src="https://w5lyingog1fowzo0.public.blob.vercel-storage.com/tourist-visa/tourist-schengen-HmzQl6LbzqSIoKGc7C7IeQKhVxXxC6.avif" 
                alt="Schengen tourist" 
            />
        </div>
        
    </>
}

