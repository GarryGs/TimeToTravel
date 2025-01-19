import { ServiceHeading } from "@components/serviceHeading";

const SpouseProps = {
    imageUrl: "https://www.nextworldimmigrations.com/img/spouse-visa.png",
    title: "Spouse Visa",
};

export default function () {
    return (
        <>
            <ServiceHeading props={SpouseProps} />

            {/* Canada Spouse Visa Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-32 xl:mx-60 my-16">
                <div className="flex flex-col gap-10 px-5">
                    <h1 className="text-2xl lg:text-3xl font-extrabold">Canada Spouse Visa: Bringing Your Family to Canada</h1>
                    <div className="flex flex-col gap-5">
                        <p className="text-base text-slate-950"><strong>Important Notice: There is no mandatory six-month waiting period for bringing family members to Canada. Beware of immigration scams and fraud!</strong></p>
                        <p className="text-base text-slate-700">Canada is committed to family reunification as a key part of its immigration policies, recognizing that separation, even temporary, can be challenging for families. International students, skilled workers, and PGWP (Post-Graduation Work Permit) holders have the option to bring their family members to join them in Canada. This aligns with Canada's goal of supporting family unity, as outlined in the Immigration and Refugee Protection Act (IRPA).</p>
                    </div>
                </div>
                <img className="object-cover w-full h-auto rounded-xl" src="https://static.wixstatic.com/media/8ca6cf_2e7942a7c5584965b135a69584affeb9~mv2.png/v1/crop/x_0,y_38,w_1200,h_823/fill/w_574,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Apply%20for%20Canada%20Spousal%20Sponsorship.png" alt="Canada Spouse Visa" />
                
                <div className="my-10 flex flex-col col-span-1 lg:col-span-2 gap-5 px-5">
                    <h2 className="text-xl lg:text-2xl font-bold">Eligibility</h2>
                    <p className="text-base text-slate-700">Applicants must prove they are the spouse or common-law partner of a full-time student at a recognized institution. This includes:</p>
                    <ul className="text-base list-disc list-inside text-slate-700">
                        <li>Public post-secondary institutions (colleges, trade schools, universities)</li>
                        <li>Private post-secondary institutions in Quebec with regulations similar to public institutions</li>
                        <li>Private institutions offering degrees (e.g., bachelor's, master's) in authorized programs</li>
                    </ul>
                    <p className="text-base text-slate-700">Spouses of certain foreign students can work in Canada without an LMIA, enabling them to support themselves while in Canada.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-32 xl:mx-60 my-16">
                <img className="object-cover w-full h-auto rounded-xl" src="https://img.freepik.com/free-vector/hand-drawn-homecoming-illustration_23-2149414643.jpg" alt="Canada Spouse Visa - Homecoming Illustration" />
                <div className="flex flex-col gap-5 px-5">
                    <h2 className="text-xl lg:text-2xl font-bold">Spouses of Open Work Permit Holders (Including PGWP Holders)</h2>
                    <p className="text-base text-slate-700">If the main foreign worker holds an open work permit, such as a Post-Graduation Work Permit (PGWP) or a working holiday permit, Immigration, Refugees and Citizenship Canada (IRCC) requires further documentation to determine the spouse or common-law partner's eligibility to work. This is because IRCC cannot assess job skill levels based solely on an open work permit.</p>
                    <p className="text-base text-slate-700">For the spouse or partner applying under the C41 exemption, it's essential to demonstrate that the primary worker is employed in a role that meets specific skill criteria. The principal worker's job must fall under one of Canada's National Occupational Classification (NOC) categories at skill level 0 (managerial positions), A (professional roles), or B (technical occupations).</p>
                </div>
                <div className="flex flex-col col-span-1 lg:col-span-2 gap-5 px-5">
                    <p className="text-base text-slate-700">The spouse or common-law partner applicant should provide the following documentation to support their application:</p>
                    <ul className="text-base list-disc list-inside text-slate-700">
                        <li>A letter from the primary worker's current employer that confirms the details of their employment, or alternatively, a copy of their job offer or employment contract.</li>
                        <li>Recent pay slips from the principal worker (generally, the last three pay slips) as additional proof of current employment.</li>
                    </ul>
                    <p className="text-base text-slate-700">For further information and detailed eligibility criteria, please refer to IRCC's official guidance.</p>
                </div>
            </div>

            {/* UK Spouse Visa Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-32 xl:mx-60 my-16">
                <div className="flex flex-col gap-10 px-5">
                    <h1 className="text-2xl lg:text-4xl font-extrabold">UK Spouse Visa: Joining Your Partner in the UK</h1>
                    <div className="flex flex-col gap-5">
                        <p className="text-base text-slate-700">The UK Spouse Visa, also known as the Partner Visa, allows individuals to live with their British partner in the UK for up to 30 months. As part of the Family Visa category, it can be extended for an additional 30 months if eligibility criteria are met. This visa is the first step toward applying for Indefinite Leave to Remain (ILR) and, eventually, British citizenship.</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl lg:text-2xl font-bold">Eligibility for UK Spouse Visa</h2>
                        <p className="text-base text-slate-700">To apply for a UK Spouse Visa, you must be married to or in a civil partnership with a British citizen, a person settled in the UK, or a UK refugee. Key requirements include proof of a genuine relationship and meeting specific financial requirements.</p>
                        <p className="text-base text-slate-700">It's important to note that this visa differs from the UK Marriage Visitor Visa, which allows you to visit the UK to marry or enter a civil partnership. The Marriage Visitor Visa does not provide a pathway to remain in the UK after marriage.</p>
                    </div>
                </div>
                <img className="object-cover w-full h-auto rounded-xl" src="https://ilaglobalconsulting.com/wp-content/uploads/2024/08/family-kitas-ila-global-consulting.png" alt="UK Spouse Visa" />
            </div>
        </>
    );
}
