const loadcountryapi =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displaycountries(data))
}
// displaying all countries
const displaycountries = countries =>{
 const countriesHTML = countries.map(country => getcountry(country))
 

 //display div to html

   const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join('');
}
const getcountry = (country) =>{
    console.log(country)
        return `
        <div class ="country-div">
          <img src="${country.flags.png}">
        <h2> </h2>
        <h4>population:${country.population} </h4>
         <h4>region: ${country.region}</h4>
          <h4>capital:${country.capital} </h4>

        </div>
        `
        
    
}
loadcountryapi()