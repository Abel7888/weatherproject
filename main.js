//api key == the apikey we got

var APIKey = "a56e390a1d9c466d7758de1e022114bb"
submitButton()

//creating a function connect to api data by zipcode

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(document.getElementsByClassName("city-zip").value)
    // console.log(document.getElementsByClassName("city-zip")[1].value)
    doAPICall(document.getElementsByClassName("city-zip")[0].value)
}

//function to connecting to submit button

function submitButton(){
    let button = document.getElementById("submit")
    button.addEventListener("click",(e)=>handleSubmit(e))
}

// connecting to the openweathermap api with the APIkey we created at the top
// used axious instead fetch cause it worked

async function doAPICall(location){
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`);
    console.log(response)
    response = response.data

  
//get data from api by city name
    let city = document.getElementById("city");
    city.innerText = response['name']
//display temp in F
    let temp = document.getElementById("temp");
    temp.innerText = `${Math.round((((response['main']['temp'])-273.15)*1.8)+32)}\u00B0F`
    
    
// display high temp
    let high = document.getElementById("high");
    high.innerText =  `High: ${Math.round((((response['main']['temp_max'])-273.15)*1.8)+32)}\u00B0F`
//display low temp
    let low = document.getElementById("low");
    low.innerText =  `Low: ${Math.round((((response['main']['temp_min'])-273.15)*1.8)+32)}\u00B0F`
    
    let forecast = document.getElementById("forecast");
    forecast.innerText = response['weather'][0]['main']
    
    let humidity = document.getElementById("humidity");
    humidity.innerText = "Humidity: "+response['main']['humidity']
    
}