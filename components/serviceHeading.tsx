interface ServiceHeadingProps {
    imageUrl: string,
    title: string
}

export const ServiceHeading = ({props}: {props: ServiceHeadingProps}) => {
    return <>
        <section className="bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply"
                 style={{ backgroundImage: `url(${props.imageUrl})`}}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-8 lg:py-10">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.title}</h1>
            </div>
        </section>
    </>
}