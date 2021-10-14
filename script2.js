let cityName = document.querySelector("#input-text");

let form = document.querySelector("#page-header");
let h2 = document.querySelector("#display-city");
let area = document.querySelector("#area");
let region = document.querySelector("#region");
let country = document.querySelector("#country");
let currently = document.querySelector("#currently");
let displaySectionContent = document.querySelector("#display-section");
let todayTemp = document.querySelector("#todayTemp");
let tomorrowTemp = document.querySelector("#tomorrowTemp");
let dayAfterTemp = document.querySelector("#dayAfterTemp");
let displayCity;
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let input = cityName.value;
    displaySection(input,true);
});

function displaySection (input,ShouldDisplay) {
    let url = `https://wttr.in/${input}?format=j1`
    fetch(url)
        .then((res)=>res.json())
        .then((data)=>{ 
            // let displayCity = input[0].toUpperCase() + input.slice(1).toLowerCase();
            displayCity = input.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            h2.textContent = displayCity;
            area.textContent = "Area: " + data.nearest_area[0].areaName[0].value;
            region.textContent = "Region: " + data.nearest_area[0].region[0].value;
            country.textContent = "Country: " + data.nearest_area[0].country[0].value;
            currently.textContent = "Currently: Feels Like " + data.current_condition[0].FeelsLikeF + "°F";

            

        // console.log(data);
            cityName.value = " ";
            
            todayTemp.innerHTML = `<span><li>Average Temperature: ${data.weather[0].avgtempF}°F</li></span>
                                <span><li>Max Temperature:  ${data.weather[0].maxtempF}°F</li></span>
                                <span><li>Min Temperature: ${data.weather[0].mintempF}°F</li></span>`

            tomorrowTemp.innerHTML = `<span><li>Average Temperature: ${data.weather[1].avgtempF}°F</li></span>
                                    <span><li>Max Temperature:  ${data.weather[1].maxtempF}°F</li></span>
                                    <span><li>Min Temperature: ${data.weather[1].mintempF}°F</li></span>`


            dayAfterTemp.innerHTML = `<span><li>Average Temperature: ${data.weather[2].avgtempF}°F</li></span>
                                    <span><li>Max Temperature:  ${data.weather[2].maxtempF}°F</li></span>
                                    <span><li>Min Temperature: ${data.weather[2].mintempF}°F</li></span>`

    

                               

            // let tempInfo = document.querySelectorAll(".tempInfo");
            // let today = document.querySelector("#todayTemp");
            // let tomorrow = document.querySelector("#tomorrowTemp");
            // let dayAfterTomorrow = document.querySelector("dayAfterTemp");

            // let threeDaysWeahther = [today,tomorrow,dayAfterTomorrow];

            // for (let oneDayWeather of threeDaysWeahther) {
            //     for (let weatherInfo of data.weather) {
            //         // console.log(weatherInfo)
            //         tempInfo.innerHTML(`<li>Average Temperature: ${weatherInfo.avgtempF}</li>
            //         <li>Max Temperature: ${weatherInfo.maxtempF}</li>
            //         <li>Min Temperature: ${weatherInfo.mintempF}</li>`)

                    // weatherInfo.date = todayTemp.textContent;
                        // console.log(weatherInfo.date)
                    
        // }
        
            // }
// .catch((err)=>{
//     console.log(err);
// })
        if(ShouldDisplay){
            let historyList = document.querySelector("#history-list");

            let historyListItem = document.createElement("li");
            let feelLikeF = document.createElement("span");
            feelLikeF.textContent = " - " + data.current_condition[0].FeelsLikeF + "°F";
    
            let linkToInfo = document.createElement("a");
            linkToInfo.setAttribute("href", "#");
            linkToInfo.textContent = displayCity;
    
            historyListItem.append(linkToInfo, feelLikeF);
            historyList.append(historyListItem);

        // }    

        
        
            linkToInfo.addEventListener("click", (e)=> {
                e.preventDefault();
        
                displaySection(input, false);
 
            })
        }
    })
    .catch((err) => {
        console.log (err);
    })

}

// linkToInfo.addEventListener("click", (e)=> {
//     e.preventDefault();
//     displaySection(displayCity);
// })
