const screens=document.querySelectorAll(".screen")

function showScreen(id){

screens.forEach(s=>s.classList.remove("active"))

document.getElementById(id).classList.add("active")

}

document.getElementById("btnTraining").onclick=()=>{

showScreen("trainingDays")

}

document.getElementById("btnStats").onclick=()=>{

showScreen("stats")
drawChart()

}

document.getElementById("backHome1").onclick=()=>showScreen("home")
document.getElementById("backHome2").onclick=()=>showScreen("home")
document.getElementById("backDays").onclick=()=>showScreen("trainingDays")


// CREAR 14 DIAS

const daysContainer=document.getElementById("daysContainer")

for(let i=1;i<=14;i++){

const btn=document.createElement("button")

btn.className="dayButton"

btn.innerText="Día "+i

btn.onclick=()=>openWorkout(i)

daysContainer.appendChild(btn)

}


// WORKOUT SIMPLE

function openWorkout(day){

showScreen("workout")

document.getElementById("workoutTitle").innerText="Entrenamiento Día "+day

document.getElementById("exerciseContainer").innerHTML=

`
Squat 5x5<br>
Peso objetivo: 140kg<br><br>

<input placeholder="Peso real">
`

}


// TIMER

let rest=120
let interval

document.getElementById("startTimer").onclick=()=>{

clearInterval(interval)

let time=rest

interval=setInterval(()=>{

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("timer").innerText=
min+":"+String(sec).padStart(2,"0")

time--

if(time<0) clearInterval(interval)

},1000)

}


// CHART

function drawChart(){

new Chart(document.getElementById("progressChart"),{

type:"line",

data:{

labels:["Sem1","Sem2","Sem3","Sem4"],

datasets:[{

label:"Fuerza",

data:[100,110,125,140]

}]

}

})

}
