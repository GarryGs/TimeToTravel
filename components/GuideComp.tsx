import {CountryCard} from "@components/countryCard";

export const GuideComp = () => {
    const countryData = [
        {
            name: "Australia",
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/austa.jpg",
            points: [
                "Variety of Courses",
                "Multiple Scholarship Programs",
                "World Class Education",
                "Affordable living"
              ]
        },
        {
            name: "UK",
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/vuAS.jpg",
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
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/ierlandssd.jpg",
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
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/newzealanddd.jpg",
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
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/germanyyy.jpg",
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
            imgSrc: "https://skylineimmigration.com/wp-content/uploads/2023/05/singaporeeee.jpg",
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