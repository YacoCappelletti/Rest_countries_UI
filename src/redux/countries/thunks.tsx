import { getData } from "../../utils/getData";
import { setCountries, setResults } from "./countriesSlice";

export const getCountryData = (
  url: string,
  parameter1: string = "",
  parameter2: string = ""
) => {
  return async (dispatch: any) => {
    const data = await getData(url, parameter1, parameter2);
    dispatch(setCountries(data));
    dispatch(setResults(data.length));
  };
};
