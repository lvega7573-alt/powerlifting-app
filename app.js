const home = document.getElementById("home")
const training = document.getElementById("training")
const workout = document.getElementById("workout")
const stats = document.getElementById("stats")

function goHome(){
home.classList.remove("hidden")
training.classList.add("hidden")
workout.classList.add("hidden")
stats.classList.add("hidden")
}

function openTraining(){

home.classList.add("hidden")
training.classList.remove("hidden")

const container = document.getElementById("daysContainer")
container.innerHTML=""

for(let i=1;i<=14;i++){

const btn = document.createElement("button")

btn.innerText="Día "+i
btn.className="dayBtn"

btn.onclick=()=>loadDay(i)

container.appendChild(btn)

}

}

function loadDay(day){

training.classList.add("hidden")
workout.classList.remove("hidden")

const data = TRAINING_DAYS[day]

workout.innerHTML = `<h2>${data.title}</h2>`

data.blocks.forEach(block=>{

if(block.type==="text"){

workout.innerHTML += `<h3>${block.label}</h3>`

}

if(block.type==="exercise"){

let html=`<div class="exerciseCard">
<h3>${block.name}</h3>`

block.sets.forEach((set,i)=>{

html+=`
<div class="setRow">

<span>${set.kg}kg</span>

<span>${set.reps}</span>

<span>${set.rest}s</span>

</div>
`

})

html+=`</div>`

workout.innerHTML+=html

}

})

workout.innerHTML+=`<button class="backBtn" onclick="goHome()">Volver</button>`

}

function openStats(){

home.classList.add("hidden")
stats.classList.remove("hidden")

}
