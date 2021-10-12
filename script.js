let cityName = document.querySelector("#input-text");

let form = document.querySelector("#page-header");
let h2 = document.querySelector("#display-city");
let area = document.querySelector("#area");
let region = document.querySelector("#region");
let country = document.querySelector("#country");
let currently = document.querySelector("#currently");
let todayTemp = document.querySelector("#todayTemp");
let tomorrowTemp = document.querySelector("#tomorrowTemp");
let dayAfterTemp = document.querySelector("#dayAfterTemp");


form.addEventListener("submit", (event)=> {
event.preventDefault();

fetch(`https://wttr.in/${cityName.value}?format=j1`)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        let displayCity = cityName.value[0].toUpperCase() + cityName.value.slice(1);
        h2.textContent = displayCity;

        area.textContent = "Area: " + data.nearest_area[0].areaName[0].value;
        region.textContent = "Region: " + data.nearest_area[0].region[0].value;
        country.textContent = "Country: " + data.nearest_area[0].country[0].value;
        currently.textContent = "Currently: " + data.current_condition[0].FeelsLikeF + "°F";
    console.log(data);
        // cityName.value = " ";

        // for (let weatherInfo of data.weather) {
        //     console.log(weatherInfo)
            


        //         console.log(weatherInfo.avgtempF)
        //         console.log(weatherInfo.maxtempF)
        //         console.log(weatherInfo.mintempF)

                
        //     // weatherInfo.date = todayTemp.textContent;
        //         console.log(weatherInfo.date)
            
        //     // console.log(avgtemp)
        // }
        let historyList = document.querySelector("#history-list");

        let historyListItem = document.createElement("li");
        historyListItem.classList.add("history-list-item");

        let linkToInfo = document.createElement("a");
        linkToInfo.setAttribute("href", "");

        // historyListItem.textContent = cityName.value + " - " + data.current_condition[0].FeelsLikeF + "°F";

        historyList.append(historyListItem);
        historyListItem.append(linkToInfo);

        linkToInfo.textContent = cityName.value
        
        
        
}).catch((err)=>{
    console.log(err);
}); 
})

// let historyList = document.querySelector("history-list");

// let historyListItem = document.createElement("li");
// historyListItem = classList.add("historyListItem");

// historyListItem.textContent = cityName.value + "-" + data.current_conditon[0].FeelsLikeF;





















// let cityName = document.querySelector("#input-text")
// console.log(cityName.value)

// let form = document.querySelector("#page-header")

// form.addEventListener("submit", (event)=> {
//     event.preventDefault();


// })
