const API_KEY = '24f430cbe5a4082fc9607634474feac7';

const searchTemperature = () => {
    const cityTag = document.getElementById('city');
    const city = cityTag.value;
    cityTag.value = ''
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemp = temperature => {
    setInnerText('city-name', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}