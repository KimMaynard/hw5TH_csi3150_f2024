const usedCars = [
  {
    img: "./img/2018_toyotaCamry.png",
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    img: "./img/2016_hondaCivic.png",
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    img: "./img/2017_fordFusion.png",
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    img: "./img/2019_nissanAltima.png",
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    img: "./img/2015_chevroletMalibu.png",
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    img: "./img/2016_volkswagenPassat.png",
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    img: "./img/2020_hyundaiElantra.png",
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    img: "./img/2014_subaruOutback.png",
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    img: "./img/2017_mazdaCx-5.png",
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    img: "./img/2018_kiaSorento.png",
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  // Five more entries:
  {
    img: "./img/2015_dodgeChallenger.png",
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    img: "./img/2017_cadillacXt5.png",
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    img: "./img/2018_jaguarFpace.png",
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    img: "./img/2019_teslaModelS.png",
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    img: "./img/2020_porscheCayenne.png",
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    img: "./img/2017_lexusEs.png",
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    img: "./img/2016_bmwSseries.png",
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
];

// module.exports = usedCars;

function search() {
  const minYear = document.getElementById("car-year-input-min").value;
  const maxYear = document.getElementById("car-year-input-max").value;
  // retrieve selected options for "car make" and create an array with those values in it
  const carMake = Array.from(
    document.getElementById("car-make").selectedOptions
  ).map(function (selectedMake) {
    return selectedMake.value;
  });
  const maxMileage = document.getElementById("car-mileage-input").value;
  const maxPrice = document.getElementById("car-price-input").value;
  // retrieve selected options for "car color" and create an array with those values in it
  const carColor = Array.from(
    document.getElementById("car-color").selectedOptions
  ).map(function (selectedColor) {
    return selectedColor.value;
  });

  //filter through the "usedCars" array and create a new array that contains all the cars that match the user's input
  let matchedCars = usedCars.filter(function (input) {
    return (
      (!minYear || input.year >= minYear) &&
      (!maxYear || input.year <= maxYear) &&
      (!carMake.length || carMake.includes(input.make)) &&
      (!maxMileage || input.mileage <= maxMileage) &&
      (!maxPrice || input.price <= maxPrice) &&
      (!carColor.length || carColor.includes(input.color))
    );
  });

  // display results that match user criteria
  showResults(matchedCars);
}

function showResults(matchedCars) {
  const results = document.getElementById("result-display");
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }

  if (matchedCars.length === 0) {
    matchedCars.innerHTML =
      "<p> There are no results that match the criteria. </p>";
    return;
  }

  matchedCars.forEach(function (input) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${input.img}" alt="">
      <h1>${input.year} ${input.make} ${input.model}</h1>
      <p>$${input.price}</p>
      <p>Mileage: ${input.mileage}</p>
      <p>Gas Mileage: ${input.gasMileage}</p>
    `;
    results.appendChild(productCard);
  });
}

function clearResults() {
  location.reload();
}
