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
  const country = document.createElement("table");
  const row = document.createElement("tr");

  //   const countryName = data.map((e) => {
  //     return e.name.common;
  //   });

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
    country.append(row);
  }
  country.style.border = "1px solid black";
  country.style.width = "100px";

  MAIN_CONTAINER.append(country);
}
