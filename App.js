function showScreen(id){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

function goHome(){
showScreen("home")
}

function openTraining(){

showScreen("training")

const container=document.getElementById("daysContainer")

container.innerHTML=""

Object.keys(TRAINING_DAYS).forEach(day=>{

const btn=document.createElement("button")

btn.className="dayButton"

btn.innerText="Día "+day

btn.onclick=()=>openWorkout(day)

container.appendChild(btn)

})

}

function openWorkout(day){

showScreen("workout")

const dayData=TRAINING_DAYS[day]

document.getElementById("dayTitle").innerText=dayData.title

const container=document.getElementById("workoutContainer")

container.innerHTML=""

dayData.blocks.forEach(block=>{

if(block.type==="text"){

const div=document.createElement("div")

div.innerText=block.label

container.appendChild(div)

}

if(block.type==="exercise"){

const card=document.createElement("div")

card.className="exerciseCard"

const title=document.createElement("h3")

title.innerText=block.name

card.appendChild(title)

block.sets.forEach(set=>{

const row=document.createElement("div")

row.className="setRow"

const target=document.createElement("span")

target.innerText=set.kg+"kg x "+set.reps

const input=document.createElement("input")

input.placeholder="real"

const timer=document.createElement("button")

timer.className="timerButton"

timer.innerText="rest"

timer.onclick=()=>startTimer(set.rest)

row.appendChild(target)
row.appendChild(input)
row.appendChild(timer)

card.appendChild(row)

})

container.appendChild(card)

}

})

}

function startTimer(seconds){

let time=seconds

const interval=setInterval(()=>{

time--

if(time<=0){

clearInterval(interval)

alert("Descanso terminado")

}

},1000)

}

function openStats(){

showScreen("stats")

createCharts()

}

function createCharts(){

const ctx=document.getElementById("squatChart")

new Chart(ctx,{
type:"line",
data:{
labels:["Semana1","Semana2","Semana3"],
datasets:[{
label:"Sentadilla",
data:[150,160,170]
}]
}
})

}
