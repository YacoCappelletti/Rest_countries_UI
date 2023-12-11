import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setUrl,
  setFilter,
  setSearchParameter,
  setContinent,
  setLanguage,
} from "../redux/countries";

const Browser = () => {
  useSelector((state: any) => state.countries.name);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    e.preventDefault();
    dispatch(setName(e.target.name.value));
    dispatch(setUrl(`https://restcountries.com/v3.1/name/${e.target.value}`));
    dispatch(setFilter("Country Name"));
    dispatch(setSearchParameter(e.target.value));
  };

  const languages = [
    "Arabic",
    "Bengali",
    "Chinese",
    "English",
    "French",
    "German",
    "Hindi",
    "Italian",
    "Japanese",
    "Korean",
    "Portuguese",
    "Russian",
    "Spanish",
    "Turkish",
    "Vietnamese",
  ];
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleContinentChange = (e: any) => {
    dispatch(setContinent(e.target.value));
    dispatch(setFilter("Continent"));
    dispatch(setSearchParameter(e.target.value));
    dispatch(setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`));
  };
  const handleLanguageChange = (e: any) => {
    dispatch(setLanguage(e.target.value));
    dispatch(setFilter("Language"));
    dispatch(setSearchParameter(e.target.value));
    dispatch(setUrl(`https://restcountries.com/v3.1/lang/${e.target.value}`));
  };

  return (
    <div className=" w-[100%] flex flex-col justify-center space-x-[1rem] sm:flex-row align-middle   items-center sm:space-y-[0rem] space-y-[1rem] mt-[1rem]">
      <div className="sm:w-[50%] w-[40%]">
        <h1 className="text-[1.2rem]">
          {" "}
          <strong>Search by name:</strong>
        </h1>
        <form action="" className="flex">
          <input
            type="text"
            className="w-[100%]"
            name="name"
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="">
        <h2 className="text-[1.2rem]">
          <strong>Continent</strong>
        </h2>
        <form action="" method="post">
          <select id="" name="" onChange={handleContinentChange}>
            <option value="default">-----</option>
            {continents.map((continent, index) => {
              return (
                <option key={index} value={continent}>
                  {continent}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="">
        <h2 className="text-[1.2rem]">
          <strong>Language</strong>
        </h2>
        <form action="" method="post">
          <select id="language" name="" onChange={handleLanguageChange}>
            <option value="default">-----</option>
            {languages.map((language, index) => {
              return (
                <option key={index} value={language}>
                  {language}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Browser;
