import {CountryCard} from "@components/countryCard";

export const GuideComp = () => {
    const countryData = [
        {
            name: "Australia",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/australia-guide-d838lELlhVExiItVeTqP9T0GqPtqRe.jpg",
            points: [
                "Variety of Courses",
                "Multiple Scholarship Programs",
                "World Class Education",
                "Affordable living"
              ]
        },
        {
            name: "UK",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/uk-guide-bKOffwBVZ8ux3akhg76TnPc1Ho7f8d.jpg",
            points: [
                "Academic Excellence",
                "Superior Courses",
                "Internationally Recognised Universities",
                "Post Study job opportunities",
                "Diverse Culture",
                "Good Quality of life"
            ]
        },
        {
            name: "Ireland",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/ireland-guide-1h36Y2ygxIjKb5fOzMgBfiaMrgStO7.jpg",
            points: [
                "New age technology courses",
                "Multiple work opportunities",
                "Globally recognised universities",
                "Affordable cost of living",
                "Ample Scholarship programs",
                "Earn while seeking higher education",
            ]
        },
        {
            name: "New Zealand",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/newzealand-guide-EE1HqoECWsXOxcGCOKLqX1q9VurAsX.jpg",
            points: [
                "Affordable tuition fee",
                "Great Scholarships programs",
                "Good scope for PH.D. scholars",
                "Emphasis on innovation and research",
                "2nd Safest country to live in according to Global Peace index 2022",
            ]
        },
        {
            name: "Germany",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/germany-guide-hKiYzU4c7epFkkErIU9NILajHau7Tm.jpg",
            points: [
                "New age technology courses",
                "Multiple work opportunities",
                "Globally recognised universities",
                "Affordable cost of living",
                "Ample Scholarship programs",
                "Earn while seeking higher education",
            ]
        },
        {
            name: "Singapore",
            imgSrc: "https://w5lyingog1fowzo0.public.blob.vercel-storage.com/destinations-guide/singapore-guide-I7PymAlu88Mbn9lruEbE1yiG5ftg8o.jpg",
            points: [
                "Affordable tuition fee",
                "Great Scholarships programs",
                "Good scope for PH.D. scholars",
                "Emphasis on innovation and research",
                "2nd Safest country to live in according to Global Peace index 2022",
            ]
        }
    ]

    return (
        <div className="bg-slate-200">
            <div className="m-8 p-5 lg:m-32 lg:p-20 justify-items-center">
                <h3 className="text-center mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Destination</span> Guides</h3>

                <div className="grid justify-items-center grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-3">
                    {countryData.map( (country) => {
                        return (
                            <CountryCard key={country.name} countryName={country.name} backgroundImage={country.imgSrc} countryPoints={country.points}></CountryCard>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}