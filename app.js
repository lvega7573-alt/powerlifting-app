
function goHome(){

hideAll()

document.getElementById("home").classList.remove("hidden")

}

function showTraining(){

hideAll()

document.getElementById("trainingScreen").classList.remove("hidden")

renderDays()

}

function showStats(){

hideAll()

document.getElementById("statsScreen").classList.remove("hidden")

drawCharts()

}

function hideAll(){

document.getElementById("home").classList.add("hidden")
document.getElementById("trainingScreen").classList.add("hidden")
document.getElementById("workoutScreen").classList.add("hidden")
document.getElementById("statsScreen").classList.add("hidden")

}

function renderDays(){

let container=document.getElementById("daysContainer")

container.innerHTML=""

trainingDays.forEach(day=>{

let btn=document.createElement("button")

btn.className="dayBtn"

btn.innerText=day.name

btn.onclick=()=>openDay(day)

container.appendChild(btn)

})

}

function openDay(day){

hideAll()

document.getElementById("workoutScreen").classList.remove("hidden")

document.getElementById("dayTitle").innerText=day.name

let container=document.getElementById("exerciseContainer")

container.innerHTML=""

day.exercises.forEach(ex=>{

let div=document.createElement("div")

div.innerHTML=`
<p>${ex.name}</p>
<p>Series: ${ex.sets}</p>
<p>Peso objetivo: ${ex.weight} kg</p>
<input placeholder="Peso real">
`

container.appendChild(div)

})

}

let timer=0
let interval

function startRest(){

timer=120

interval=setInterval(()=>{

timer--

document.getElementById("time").innerText=timer

if(timer==0) clearInterval(interval)

},1000)

}

function drawCharts(){

new Chart(document.getElementById("benchChart"),{

type:"line",

data:{

labels:["D1","D5","D10","D14"],

datasets:[{

label:"Bench",

data:[130,140,150,160]

}]

}

})

new Chart(document.getElementById("squatChart"),{

type:"line",

data:{

labels:["D1","D5","D10","D14"],

datasets:[{

label:"Squat",

data:[160,170,180,190]

}]

}

})

new Chart(document.getElementById("deadliftChart"),{

type:"line",

data:{

labels:["D1","D5","D10","D14"],

datasets:[{

label:"Deadlift",

data:[170,185,200,210]

}]

}

})

}
