let API_URL = "https://restcountries.com/v3.1/region/europe"; //Given API URL
  let CountriesData = []; //stores the fetched data of all countries
  let filteredData = []; //stores only the filterd data
  let currentpage = 1; //track current page
  let itemperpage = 10; //shows 10 cards of countries per page

  //Fetching countries from the given API URL
  async function fetchCountries() {
    try {
      let res = await fetch(API_URL);
      let CountriesData = await res.json();
      filteredData = [...CountriesData]; //copying the data of all countries initially so that original data should not get rendered
      renderCountries(); // acts as display function on page loads
    } catch (error) {
      Console.error("Error while fetching Countries", error); //console the error if URL not works or any error appears
    }
  }
  // Rendering countries as well as summary based on the current page

  function renderCountries() {
    let container = document.getElementById("countries-container");
    container.innerHTML = "";
    //Pagination calulation
    let start = (currentpage - 1) * itemperpage;
    let end = start + itemperpage;
    let pagedata = filteredData.slice(start, end);
    //country cards to be displayed on the UI
    pagedata.map((country) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} Flag">
            <h3>${country.name.common}</h3>
            <p><strong>Capital:</strong>${
              country.capital ? country.capital[0] : "N/A"
            }</p>
            <p><strong>Population:</strong>${country.population.toLocaleString()}</p>
            `;
      container.appendChild(card);
    });
    updatesummary(pagedata);
  }
  //Updating summary using the Reduce High order function
  function updatesummary(data) {
    let summary = document.getElementById("summary");
    let totalcountries = data.length;
    let totalpopulation = data.reduce(
      (sum, country) => sum + country.population,
      0
    );
    //Displaying summary
    summary.innerHTML = `
        <p><strong>Countries Displayed:</strong>${totalcountries}</p>
        <p><strong>Total Population:</strong>${totalpopulation.toLocaleString()}</p>
        `;
  }
  //sorting fuctionality
  document.getElementById("sort").addEventListener("change", (e) => {
    let value = e.target.value;
    if (value === "name-asc") {
      filteredData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (value == "name-desc") {
      filteredData.sort((a, b) => b.name.common.localeCompare(a.name.common));
    } else if (value == "pop-asc") {
      filteredData.sort((a, b) => a.population - b.population);
    } else if (value == "pop-desc") {
      filteredData.sort((a, b) => b.population - a.population);
    }
    currentpage = 1; //reset to page 1 if the user click on sort function after navigating without sorting to another page so it is neccessary to display the sorted data from the first page
    renderCountries();
  });
  // filter functionality
  document.getElementById("search").addEventListener("input", (e) => {
    let searchedinput = e.target.value.toLowerCase();
    filteredData = CountriesData.filter((country) =>
      country.name.common.toLowerCase().includes(searchedinput)
    );
    currentpage = 1;
    renderCountries();
  });
  //   pagination previous button
  document.getElementById("prev").addEventListener("click", () => {
    if (currentpage > 1) {
      currentpage--;
      renderCountries();
    }
  });
  //   Pagination Next Button
  document.getElementById("next").addEventListener("click", () => {
    if (currentpage * itemperpage < filteredData.length) {
      currentpage++;
      renderCountries();
    }
  });
  //  Intializing the API Call
  fetchCountries();