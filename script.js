const MAIN_CONTAINER = document.getElementById("root");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    getData(data);
  });

function getData(data) {
  console.log(data);
  const countryDiv = document.createElement("table");
  const row = document.createElement("tr");

  const headings = [
    "COUNTRY",
    "FLAG",
    "CAPITAL",
    "POPULATION",
    "REGION",
    "AREA",
    "TIMEZONE",
  ];
  for (heading of headings) {
    const th = document.createElement("th");
    th.textContent = heading;
    th.style.border = "1px solid black";
    th.style.padding = "10px";
    row.append(th);
    countryDiv.append(row);
  }
  countryDiv.style.border = "1px solid black";
  countryDiv.style.width = "100%";

  for (country of data) {
    const currentRow = document.createElement("tr");
    const td1 = initColumn(country.name.common);
    const td2 = initColumn(country.flag);
    const td3 = initColumn(country.capital);
    const td4 = initColumn(country.population);
    const td5 = initColumn(country.region);
    const td6 = initColumn(country.area);
    const td7 = initColumn(country.timezones);
    currentRow.append(td1, td2, td3, td4, td5, td6, td7);
    countryDiv.append(currentRow);
  }

  MAIN_CONTAINER.append(countryDiv);
}
function initColumn(text) {
  const td = document.createElement("td");
  td.textContent = text;
  td.style.border = "1px solid black";
  td.style.padding = "10px";
  td.style.textAlign = "center";
  return td;
}
