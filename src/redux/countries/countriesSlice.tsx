import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "https://restcountries.com/v3.1/all",
  countries: [],
  name: "",
  language: "",
  continent: "",
  filter: "",
  search_parameter: "",
  results: 0,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setUrl(state, action) {
      state.url = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setContinent(state, action) {
      state.continent = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearchParameter(state, action) {
      state.search_parameter = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
  },
});

export const {
  setCountries,
  setUrl,
  setLanguage,
  setContinent,
  setName,
  setFilter,
  setSearchParameter,
  setResults,
} = countriesSlice.actions;
export default countriesSlice.reducer;
