import CountryCard from "./CountryCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountryData, setUrl } from "../redux/countries";

const CardsLayout = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: any) => state.countries.countries);
  const url = useSelector((state: any) => state.countries.url);
  const filter = useSelector((state: any) => state.countries.filter);
  const search_parameter = useSelector(
    (state: any) => state.countries.search_parameter
  );
  const results = useSelector((state: any) => state.countries.results);

  useEffect(() => {
    setUrl(url);
    dispatch(getCountryData(url));
  }, []);
  useEffect(() => {
    dispatch(getCountryData(url));
  }, [url]);

  return (
    <div className="w-[100%] flex flex-col items-center overflow-y-auto h-[90vh] mt-[.5rem]">
      <div className="flex flex-col sm:flex-row sm:space-x-[2rem] mt-[0rem]  text-[1.2rem] sticky top-0  z-10 backdrop-blur-[2px] ">
        <h1>
          <strong>Filter:</strong> {filter == "" ? "None" : filter}{" "}
        </h1>
        <h1>
          <strong>Search parameter: </strong>{" "}
          {search_parameter == "" ? "None" : search_parameter}
        </h1>
        <h1>
          <strong>Number of results:</strong> {results}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center space-x-[1rem] w-[100%]  2xl:w-[90%]">
        {countries.map((country: any) => {
          return (
            <CountryCard
              countryName={country.countryName}
              capital={country.capital}
              officialName={country.officialName}
              continent={country.continent}
              language={country.language}
              population={country.population}
              currency={country.currency}
              flag={country.flag}
              maps={country.maps}
              key={crypto.randomUUID()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsLayout;
