let time=0
let timerInterval

function startTimer(){

clearInterval(timerInterval)

time=0

timerInterval=setInterval(()=>{
time++

let min=Math.floor(time/60)
let sec=time%60

document.getElementById("timer").innerText=
String(min).padStart(2,"0")+":"+
String(sec).padStart(2,"0")

},1000)

}

function saveSet(){

let target=document.getElementById("target").value
let actual=document.getElementById("actual").value

let log={
date:new Date(),
target:target,
actual:actual,
rest:time
}

let history=JSON.parse(localStorage.getItem("training"))||[]

history.push(log)

localStorage.setItem("training",JSON.stringify(history))

alert("Serie guardada")

}

function showTab(tab){

document.getElementById("workout").style.display="none"
document.getElementById("stats").style.display="none"

document.getElementById(tab).style.display="block"

}

function loadCharts(){

let history=JSON.parse(localStorage.getItem("training"))||[]

let actuals=history.map(h=>h.actual)

new Chart(document.getElementById("benchChart"),{
type:"line",
data:{
labels:history.map((_,i)=>i+1),
datasets:[{label:"Peso levantado",data:actuals}]
}
})

}

loadCharts()
