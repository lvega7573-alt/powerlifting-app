function goHome(){

document.getElementById("home").classList.remove("hidden")

document.getElementById("trainingScreen").classList.add("hidden")
document.getElementById("statsScreen").classList.add("hidden")
document.getElementById("dayDetail").classList.add("hidden")

}

function openTraining(){

document.getElementById("home").classList.add("hidden")

document.getElementById("trainingScreen").classList.remove("hidden")

loadDays()

}

function loadDays(){

let container=document.getElementById("daysList")

container.innerHTML=""

Object.keys(TRAINING_DAYS).forEach(day=>{

let btn=document.createElement("button")

btn.className="dayBtn"

btn.innerText=TRAINING_DAYS[day].title

btn.onclick=()=>openDay(day)

container.appendChild(btn)

})

}

function openDay(day){

let data=TRAINING_DAYS[day]

let html=`<h2>${data.title}</h2>`

data.exercises.forEach(ex=>{

html+=`<div class="exercise"><h3>${ex.name}</h3>`

ex.sets.forEach((s,i)=>{

html+=`
<div class="setRow">

<span>${s.kg}kg x ${s.reps}</span>

<input placeholder="real">

<button class="timerBtn" onclick="startTimer(${s.rest})">⏱</button>

<span class="done">✔</span>

</div>
`

})

html+=`</div>`

})

html+=`<button class="backBtn" onclick="openTraining()">Volver</button>`

document.getElementById("trainingScreen").classList.add("hidden")

let detail=document.getElementById("dayDetail")

detail.innerHTML=html

detail.classList.remove("hidden")

}
