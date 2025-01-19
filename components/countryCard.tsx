export const CountryCard = ({
    countryName,
    countryPoints,
    backgroundImage,
  }: {
    countryName: string,
    countryPoints: string[];
    backgroundImage: string;
  }) => {
    return (
        <div className="relative grid w-80 h-90 max-w-lg flex-col items-center justify-center text-center overflow-hidden rounded-lg bg-white shadow-lg">
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Darker gradient for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
          </div>

          <div className="relative z-10 mt-10 p-6 md:p-12">
            {/* Title styling for better readability */}
            <h2 className="mb-4 text-base font-bold text-white md:text-2xl">
              Study in {countryName}
            </h2>

            {/* List with bullet points */}
            <ul className="list-disc list-inside space-y-2 text-xs text-white md:text-base">
              {countryPoints.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
    );
  };
  