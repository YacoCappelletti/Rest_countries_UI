
export const getData = async (url:string, parameter1:string ='', parameter2:string='') => {

    const response = await fetch(url + parameter1 + parameter2); //Checkear
    const data = await response.json();

    const filteredData = data.map((country:any) => {
       return {
            countryName: country.name.common ,
            officialName: country.name.official,
            capital: country.capital !== undefined ? country.capital[0] : 'No capital',
            continent: country.region,
            language:country.languages != undefined ? country.languages[Object.keys(country.languages)[0]] : 'No language',
            population: country.population,
            currency: country.currencies != undefined ? country.currencies[Object.keys(country.currencies)[0]].name : 'No currency',
            flag: country.flags.png,
            maps: country.maps.googleMaps
        }
       })

       return filteredData;
    }



    


export default getData;