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
    let input = cityName.value;
    displaySection(input);
});

function displaySection (input) {
    fetch(`https://wttr.in/${input}?format=j1`)
        .then((res)=>{
            return res.json();
        }).then((data)=>{ 
            let displayCity = input[0].toUpperCase() + input.slice(1).toLowerCase();
            h2.textContent = displayCity;

            area.textContent = "Area: " + data.nearest_area[0].areaName[0].value;
            region.textContent = "Region: " + data.nearest_area[0].region[0].value;
            country.textContent = "Country: " + data.nearest_area[0].country[0].value;
            currently.textContent = "Currently: " + data.current_condition[0].FeelsLikeF + "°F";
        console.log(data);
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


            // let tempInfo = document.querySelector(".tempInfo");
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




                        // console.log(weatherInfo.avgtempF)
                        // console.log(weatherInfo.maxtempF)
                        // console.log(weatherInfo.mintempF)

                        
                    // weatherInfo.date = todayTemp.textContent;
                        // console.log(weatherInfo.date)
                    
                    // console.log(avgtemp)
        // }
        
            // }

           
    
      
          

// .catch((err)=>{
//     console.log(err);
// })

let historyList = document.querySelector("#history-list");

            let historyListItem = document.createElement("li");
            historyListItem.classList.add("history-list-item");
            // historyListItem.textContent = " - " + data.current_condition[0].FeelsLikeF + "°F";
    
            let linkToInfo = document.createElement("a");
            linkToInfo.setAttribute("href", "#");
            linkToInfo.textContent = displayCity;
    
            // linkToInfo.textContent += " - " + data.current_condition[0].FeelsLikeF + "°F";
            // historyListItem.textContent = cityName.value + " - " + data.current_condition[0].FeelsLikeF + "°F";
    
            historyList.append(historyListItem);
            historyListItem.append(linkToInfo);

            

        // if(isTrue) {
        // let historyList = document.querySelector("#history-list");

        //     let historyListItem = document.createElement("li");
        //     historyListItem.classList.add("history-list-item");
        //     // historyListItem.textContent = " - " + data.current_condition[0].FeelsLikeF + "°F";
    
        //     let linkToInfo = document.createElement("a");
        //     linkToInfo.setAttribute("href", "");
        //     linkToInfo.textContent = cityName.value;
    
        //     linkToInfo.textContent += " - " + data.current_condition[0].FeelsLikeF + "°F";
        //     // historyListItem.textContent = cityName.value + " - " + data.current_condition[0].FeelsLikeF + "°F";
    
        //     historyList.append(historyListItem);
        //     historyListItem.append(linkToInfo);
     
            
        //     linkToInfo.addEventListener("click", (e)=> {
        //             e.preventDefault();
        
        //     displaySection(cityName.value);
        // //     let displayCity = cityName.value[0].toUpperCase() + cityName.value.slice(1);
        // //     h2.textContent = displayCity;
    
        // //     area.textContent = "Area: " + data.nearest_area[0].areaName[0].value;
        // //     region.textContent = "Region: " + data.nearest_area[0].region[0].value;
        // //     country.textContent = "Country: " + data.nearest_area[0].country[0].value;
        // //     currently.textContent = "Currently: " + data.current_condition[0].FeelsLikeF + "°F";
        // // console.log(data);
        //     })
        // } 
    })
    .catch((err) => {
        console.log (err);
    })

}

// linkToInfo.addEventListener("click", (e)=> {
//     e.preventDefault();
//     displaySection(diaplayCity);
// })
