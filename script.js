let cityName = document.querySelector("#input-text");
let displaySectionContent = document.querySelector("#display-section");
let threeDaysWeather = document.querySelector("#three-days-weather");
let form = document.querySelector("form");
let todayTemp = document.createElement("div");
let tomorrowTemp = document.createElement("div");
let dayAfterTemp = document.createElement("div");

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let input = cityName.value;
    
    displaySection(input,true);
    form.reset();
});

function displaySection (inputCity,ShouldDisplay) {
    let url = `https://wttr.in/${inputCity}?format=j1`
    fetch(url)
        .then((res)=>res.json())
        .then((data) => {
            let displayCity = inputCity.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

            // cityName.value = " ";

            displaySectionContent.innerHTML = `
                <h2>${displayCity}</h2>
                <p class="display-info">
                <span><strong>Area: </strong>${data.nearest_area[0].areaName[0].value}</span>
                <span><strong>Region: </strong>${data.nearest_area[0].region[0].value}</span>
                <span><strong>Country: </strong>${data.nearest_area[0].country[0].value}</span>
                <span><strong>Currently: </strong>Feels Like ${data.current_condition[0].FeelsLikeF}°F</span>
                </p>
            `
            threeDaysWeather.append(todayTemp, tomorrowTemp, dayAfterTemp);

            todayTemp.innerHTML = `
                                <h3>Today</h3> 
                                <ul>
                                <span><li>Average Temperature: ${data.weather[0].avgtempF}°F</li></span>
                                <span><li>Max Temperature:  ${data.weather[0].maxtempF}°F</li></span>
                                <span><li>Min Temperature: ${data.weather[0].mintempF}°F</li></span>
                                </ul>`

            tomorrowTemp.innerHTML = `
                                    <h3>Tomorrow</h3>
                                    <ul>
                                    <span><li>Average Temperature: ${data.weather[1].avgtempF}°F</li></span>
                                    <span><li>Max Temperature:  ${data.weather[1].maxtempF}°F</li></span>
                                    <span><li>Min Temperature: ${data.weather[1].mintempF}°F</li></span>
                                    </ul>`


            dayAfterTemp.innerHTML = `
                                    <h3>Day After Tomorrow</h3>
                                    <ul>
                                    <span><li>Average Temperature: ${data.weather[2].avgtempF}°F</li></span>
                                    <span><li>Max Temperature:  ${data.weather[2].maxtempF}°F</li></span>
                                    <span><li>Min Temperature: ${data.weather[2].mintempF}°F</li></span>
                                    </ul>`

            
            let historyList = document.querySelector(".history ul");
            if(ShouldDisplay){
            // let historyList = document.querySelector("ul");

                let historyListItem = document.createElement("li");
                let feelLikeF = document.createElement("span");
                feelLikeF.textContent = " - " + data.current_condition[0].FeelsLikeF + "°F";
        
                let linkToInfo = document.createElement("a");
                linkToInfo.setAttribute("href", "#");
                linkToInfo.textContent = displayCity;
                
                // historyListItem.append(linkToInfo, feelLikeF);
                // historyList.append(historyListItem);   

            
            
                linkToInfo.addEventListener("click", (e)=> {
                    let city = e.target.innerText;
                    displaySection(city, false);
    
                })
                historyListItem.append(linkToInfo, feelLikeF);
                historyList.append(historyListItem);  
            }

        })
        .catch((err) => {
            console.log (err);
        })
    }

