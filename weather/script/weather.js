const cityForm = document.querySelector("form");

const details = document.querySelector(".details");

const img = document.querySelector("img.time");

const icon = document.querySelector(".icon img");

const card = document.querySelector(".card");

const forecast = new Forecast();

const updateUI = (data) => {
  const citydetail = data.citydetail;
  const weather = data.weather;

  details.innerHTML = `
    <h5 class="my-3">${citydetail.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-3 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
    `;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  //console.log(weather)
  let imgsrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";

  img.setAttribute("src", imgsrc);

  //icon

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute("src", iconSrc);
};
/*
const updateCity = async (city) => {
    const citydetail = await getCity(city);
    const weather = await getWeather(citydetail.Key);

    

    return { citydetail, weather};

}*/

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityForm.place.value.trim();
  cityForm.reset();

  forecast
    .updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));

  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
