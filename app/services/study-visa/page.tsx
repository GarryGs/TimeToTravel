import { ServiceHeading } from "@components/serviceHeading";

const StudyProps = {
    imageUrl: "https://www.nextworldimmigrations.com/img/study-visa-home.png",
    title: "Study Visa",
}

export default function () {
    return <div>
        <ServiceHeading props={StudyProps}></ServiceHeading>
        {/* Canada Study Visa Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <img 
                className="object-cover w-full h-auto rounded-xl" 
                src="/canada.webp" 
                alt="Study in Canada" 
            />
            <div className="flex flex-col gap-10">
                <h1 className="text-3xl xl:text-4xl font-extrabold">Canada Study Visa</h1>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">Navigating the Application Process for a Canada Study Visa</h2>
                    <p className="text-base text-slate-700">
                        Canada has become a sought-after destination for students globally. To pursue your studies in Canada, obtaining a Canadian study visa is essential. This guide will explore the application process and the requirements for securing a study visa.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold">Applying for a Canada Study Visa</h2>
                    <p className="text-base text-slate-700">
                        The study visa enables individuals to enroll at a Designated Learning Institution (DLI) in Canada. If you are a foreign national seeking a study permit, it's crucial to understand the eligibility criteria that must be fulfilled when submitting your application.
                    </p>
                </div>
            </div>
                    <p className="text-base text-slate-700 col-span-1 xl:col-span-2">
                        Moreover, students must adhere to specific conditions throughout their time in Canada.
                    </p>
            <p className="text-base text-slate-700 col-span-1 xl:col-span-2">
                The application process for a study permit involves several steps, and processing times can vary significantly depending on your home country. Therefore, it's advisable to begin this process as early as possible to ensure that your permit is approved in time for the start of your academic program. Most Canadian post-secondary institutions offer programs that commence in September, January, or May, although some may have additional intake periods.
            </p>
        </div>

        {/* UK Study Visa Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 mx-6 xl:mx-60 my-16 gap-10">
            <div className="flex flex-col gap-10">
                <h1 className="text-3xl xl:text-4xl font-extrabold">UK Study Visa</h1>
                <div className="flex flex-col gap-5">
                    <p className="text-base text-slate-700">
                        International students accepted into a British educational institution must apply for a UK Study Visa.
                    </p>
                    <h2 className="text-2xl font-bold">What is the eligibility for a UK Study Visa?</h2>
                    <div className="flex flex-col gap-10">
                        <p className="text-base text-slate-700">
                            If you're 16 or older and want to study in the UK, you can apply for a UK Study Visa, provided that:
                        </p>
                        <ul className="text-base list-disc pl-5">
                            <li>A licensed student sponsor has offered you a place on a course.</li>
                            <li>You have enough money to support yourself as well as pay for your studies. The cost will vary based on your financial circumstances.</li>
                            <li>You are fluent in English (speaking, reading, writing, and listening).</li>
                            <li>Have consent from your parents if you're 16 or 17. You'll need to demonstrate evidence of this when you apply.</li>
                        </ul>
                    </div>
                    <p className="text-base text-slate-700">
                        If you're 16 or 17 years old and wish to attend an independent school in the UK, you might be eligible for a Child Student visa.
                    </p>
                </div>
            </div>
            <img 
                className="object-cover w-full h-auto rounded-2xl" 
                src="/uk.png" 
                alt="Study in UK" 
            />
        </div>
    </div>
}