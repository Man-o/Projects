function displayTime(){
    let dateTime=new Date()
    let hour=dateTime.getHours()
    let ampm=document.getElementById("ampm")
    var name=true
     if (hour>=12){
         hour=hour-12
         name=false
         ampm.innerHTML="PM"
     }
     else{
        name=true
     }

    let min=zero(dateTime.getMinutes())
    let sec=zero(dateTime.getSeconds())
    const days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
    let day=days[dateTime.getDay()]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month=months[dateTime.getMonth()]
    let date=dateTime.getDate()
    document.getElementById("hours").innerHTML=zero(hour)
    document.getElementById("minutes").innerHTML=min
    document.getElementById("seconds").innerHTML=sec
    document.getElementById("day").innerHTML=day
    document.getElementById("month").innerHTML=month
    document.getElementById("date").innerHTML=date

}
function zero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,0) //250 miliseconds 1sec-4tyms update