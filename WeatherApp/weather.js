// let searchBtn=document.querySelector('.search')
// let formTag=document.querySelector('.form')
// let iconDiv=document.querySelector('.icon');
// let weatherInfo=document.querySelector('.info');
// let url="https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=237cf59b7f53048368f2fd6271f57981&units=metric"

let formTag=document.querySelector('.form');
let input=document.getElementById("city");
let searchBtn=document.getElementById("search")
let iconDiv=document.querySelector('.icon');
let weatherInfo=document.querySelector('.info');
formTag.addEventListener('submit',(e)=>{
    e.preventDefault()

    let city=input.value
    console.log(city)
        if(!city.trim()){
             alert("Write a city before searching")   
        }
        else{
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=237cf59b7f53048368f2fd6271f57981&units=metric`).then((res)=>{
                if (res.status==200){
                             return res.json()   
                } 
                else{
                   alert("Enter Valid City Name")
                }
                }).then((data)=>{
                        if(data){
                                console.log(data)
                                let hidden=document.querySelector(".hidden")
                                hidden.classList.remove('hidden')
                                displayWeather(data)
                               
                        }
                }).catch((err)=>{
                        console.log(err)
                })
        }
        // iconDiv.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSng5iGr1TB2UmRnLdjzCBVlhVuJ2nPzi1y9A&s" class="h-[80px] mx-[auto]" alt="">
        // <h4 class="mt-2" id="city-name"></h4>
        // <h3 id="temp"></h3>`
        // weatherInfo.innerHTML=`<div class="ms-4 mb-2">
        //     <h3>Humidity:</h3>
        //     <h3 id="hum"></h3>
        // </div>
        // <div class="me-4 mb-2">
        //     <h3>Wind speed</h3>
        //     <h3 id="ws"></h3>
        // </div>`        
})

function displayWeather(data){
    document.getElementById("city-name").innerHTML=data.name
    document.getElementById("temp").innerHTML=`${data.main.temp} ℃`
    document.getElementById("ws").innerHTML=`${data.wind.speed} km/hr`
    document.getElementById("hum").innerHTML=`${data.main.humidity}`
    
}