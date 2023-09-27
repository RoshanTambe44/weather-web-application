var input = document.getElementById("input")
var city = document.getElementById("city")


function add()

{
   
    if (input.value === "")
    {
        alert("Enter your city name")
    }

    else{
        city.textContent = input.value

    }
}


const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apikey = "4ffa94f3d992f8921960d1b9ccff5857"

async function checkwether  (city)  {
        
        const response = await fetch( apiurl + city + `&appid=${apikey}`)
        const data = await response.json() 
        if(response.status == 404)
        {

            
            document.querySelector(".error").style.display = "block"
            document.querySelector(".main2").style.display = "none"
            

        }
        else
        {
            document.querySelector(".error").style.display = "none"
            document.querySelector(".main2").style.display = "block"
        }

        

        console.log(data)
                
    
        document.querySelector(".cast h1").innerHTML = Math.round(data.main.temp)  + "°C" ; 
        document.querySelector(".p1").innerHTML =data.main.humidity;
        document.querySelector(".p2").innerHTML =data.wind.speed + "km/h";
        document.querySelector(".p").innerHTML =data.weather[0].main;


        
    if(data.weather[0].main == "Clouds"){
        console.log("succes")
        document.querySelector(".img").src ="cloud.png"
    

}
}

document.querySelector("#btn").addEventListener("click", function(){
        checkwether(input.value)
       
})




 
