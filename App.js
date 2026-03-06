function openTraining(){

document.getElementById("home").classList.add("hidden")
document.getElementById("trainingScreen").classList.remove("hidden")

loadDays()

}

function openStats(){

document.getElementById("home").classList.add("hidden")
document.getElementById("statsScreen").classList.remove("hidden")

loadStats()

}

function goHome(){

document.getElementById("home").classList.remove("hidden")

document.getElementById("trainingScreen").classList.add("hidden")
document.getElementById("statsScreen").classList.add("hidden")
document.getElementById("dayScreen").classList.add("hidden")

}

function loadDays(){

let container=document.getElementById("daysContainer")

container.innerHTML=""

for(let day in TRAINING_DAYS){

let btn=document.createElement("button")

btn.className="dayButton"

btn.innerText="DÍA "+day

btn.onclick=()=>openDay(day)

container.appendChild(btn)

}

}

function openDay(day){

document.getElementById("trainingScreen").classList.add("hidden")
document.getElementById("dayScreen").classList.remove("hidden")

let data=TRAINING_DAYS[day]

document.getElementById("dayTitle").innerText=data.title

let workout=document.getElementById("workout")

workout.innerHTML=""

data.blocks.forEach(block=>{

if(block.type==="text"){

let div=document.createElement("div")
div.innerHTML="<h3>"+block.label+"</h3>"
workout.appendChild(div)

}

if(block.type==="exercise"){

let ex=document.createElement("div")
ex.className="exercise"

ex.innerHTML="<b>"+block.name+"</b>"

block.sets.forEach(set=>{

let row=document.createElement("div")
row.className="set"

row.innerHTML=`

<span>${set.kg}kg x ${set.reps}</span>

<input placeholder="real">

<button class="restButton" onclick="startRest(${set.rest})">
⏱
</button>

`

ex.appendChild(row)

})

workout.appendChild(ex)

}

})

}

function backToDays(){

document.getElementById("dayScreen").classList.add("hidden")
document.getElementById("trainingScreen").classList.remove("hidden")

}

function startRest(sec){

let time=sec

let timer=setInterval(()=>{

time--

if(time<=0){

clearInterval(timer)

alert("Descanso terminado")

}

},1000)

}

function loadStats(){

let squat=[120,130,140]
let bench=[90,100,110]
let deadlift=[150,160,170]

new Chart(document.getElementById("squatChart"),{

type:"line",

data:{
labels:["sem1","sem2","sem3"],
datasets:[{label:"Squat",data:squat}]
}

})

new Chart(document.getElementById("benchChart"),{

type:"line",

data:{
labels:["sem1","sem2","sem3"],
datasets:[{label:"Bench",data:bench}]
}

})

new Chart(document.getElementById("deadliftChart"),{

type:"line",

data:{
labels:["sem1","sem2","sem3"],
datasets:[{label:"Deadlift",data:deadlift}]
}

})

}
