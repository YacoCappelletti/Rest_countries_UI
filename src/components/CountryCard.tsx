interface CountryCardProps {
  countryName: string;
  officialName: string;
  capital: string;
  continent: string;
  language: any;
  population: string;
  currency: string;
  flag: string;
  maps: string;
}
//interface CountryCardProps {}

const CountryCard: React.FC<CountryCardProps> = ({
  countryName,
  capital,
  officialName,
  continent,
  language,
  population,
  currency,
  flag,
  maps,
}) => {
  return (
    <>
      <div className="w-[22rem] h-[32rem] my-[2rem] border border-black  bg-white opacity-[.95]">
        <h1 className="text-center m-[.5rem] text-[1.8rem]">{countryName}</h1>

        <div className="flex items-center justify-center mb-[.5rem]  ">
          <div className=" flex flex-col space-y-[1rem]">
            <img
              src={flag}
              alt="country flag"
              className="h-[12rem] w-[20rem] border border-black "
            />

            <div className="text-center w-[100%] ">
              <a href={maps} className="text-cyan-700 ">
                <strong>- View in Google Maps - </strong>
              </a>
            </div>
          </div>
        </div>
        <div className="flex mt-[.5rem] justify-around  p-[1rem] space-x-[.5rem] ">
          <div className="w-[50%] space-y-[.5rem] mb-[1rem]">
            <p>
              <strong>Capital:</strong> {capital}
            </p>
            <p>
              <strong>Language: </strong> {language}
            </p>
            <p>
              <strong>Currency:</strong> {currency}
            </p>
          </div>
          <div className="w-[50%] space-y-[.5rem] mb-[1rem]">
            <p>
              <strong>Native name:</strong> {officialName}
            </p>
            <p>
              <strong>Continent:</strong> {continent}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
