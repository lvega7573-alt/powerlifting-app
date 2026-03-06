
const plan = [
{
day:"Día 1 – Sentadilla pesada",
sets:[
{target:105,reps:5},
{target:105,reps:5},
{target:105,reps:5},
{target:105,reps:5},
{target:105,reps:5},

{target:120,reps:3},
{target:120,reps:3},
{target:120,reps:3},
{target:120,reps:3},

{target:132,reps:2},
{target:132,reps:2},
{target:132,reps:2}
]
},

{
day:"Día 2 – Banca volumen",
sets:[
{target:90,reps:4},
{target:90,reps:4},
{target:90,reps:4},
{target:90,reps:4},
{target:90,reps:4},
{target:90,reps:4},

{target:97,reps:3},
{target:97,reps:3},
{target:97,reps:3},
{target:97,reps:3}
]
},

{
day:"Día 3 – Deadlift",
sets:[
{target:120,reps:4},
{target:120,reps:4},
{target:120,reps:4},
{target:120,reps:4},
{target:120,reps:4},

{target:110,reps:3},
{target:110,reps:3},
{target:110,reps:3},
{target:110,reps:3}
]
},

{
day:"Día 4 – Speed squat",
sets:[
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2},
{target:95,reps:2}
]
},

{
day:"Día 5 – Banca pesada",
sets:[
{target:104,reps:3},
{target:104,reps:3},
{target:104,reps:3},
{target:104,reps:3},
{target:104,reps:3},

{target:110,reps:2},
{target:110,reps:2},
{target:110,reps:2}
]
},

{
day:"Día 6 – Deadlift pesado",
sets:[
{target:128,reps:3},
{target:128,reps:3},
{target:128,reps:3},
{target:128,reps:3},

{target:140,reps:2},
{target:140,reps:2},
{target:140,reps:2}
]
},

{
day:"Día 8 – Squat peak",
sets:[
{target:128,reps:3},
{target:128,reps:3},
{target:128,reps:3},
{target:128,reps:3},

{target:136,reps:2},
{target:136,reps:2},
{target:136,reps:2},

{target:144,reps:1},
{target:144,reps:1},
{target:144,reps:1}
]
},

{
day:"Día 9 – Bench peak",
sets:[
{target:104,reps:3},
{target:104,reps:3},
{target:104,reps:3},
{target:104,reps:3},

{target:113,reps:2},
{target:113,reps:2},
{target:113,reps:2},

{target:120,reps:1},
{target:120,reps:1},
{target:120,reps:1}
]
},

{
day:"Día 10 – Deadlift peak",
sets:[
{target:136,reps:3},
{target:136,reps:3},
{target:136,reps:3},
{target:136,reps:3},

{target:148,reps:2},
{target:148,reps:2},
{target:148,reps:2},

{target:156,reps:1},
{target:156,reps:1}
]
},

{
day:"Día 11 – Técnica",
sets:[
{target:95,reps:3},
{target:95,reps:3},
{target:95,reps:3},

{target:78,reps:3},
{target:78,reps:3},
{target:78,reps:3},

{target:102,reps:2},
{target:102,reps:2},
{target:102,reps:2}
]
},

{
day:"Día 12 – Activación",
sets:[
{target:136,reps:1},
{target:136,reps:1},
{target:136,reps:1},

{target:110,reps:1},
{target:110,reps:1},
{target:110,reps:1}
]
}

]

function openTraining(){

document.getElementById("home").classList.add("hidden")
document.getElementById("training").classList.remove("hidden")

renderDays()

}

function openStats(){

document.getElementById("home").classList.add("hidden")
document.getElementById("stats").classList.remove("hidden")

loadStats()

}

function goHome(){

document.getElementById("training").classList.add("hidden")
document.getElementById("stats").classList.add("hidden")

document.getElementById("home").classList.remove("hidden")

}

function renderDays(){

const container=document.getElementById("daysList")
container.innerHTML=""

plan.forEach((d,i)=>{

let html=`<div class='day'><h3>${d.day}</h3>`

d.sets.forEach((s,j)=>{

html+=`
<div class="series">

<span>${s.target}kg x ${s.reps}</span>

<input placeholder="real">

<button onclick="startTimer()">⏱</button>

<span class="done">✔</span>

</div>
`

})

html+="</div>"

container.innerHTML+=html

})

}

let timer

function startTimer(){

let start=Date.now()

clearInterval(timer)

timer=setInterval(()=>{

let now=Date.now()

let sec=Math.floor((now-start)/1000)

console.log(sec)

},1000)

}

function loadStats(){

document.getElementById("seriesDone").innerText=
document.querySelectorAll(".done").length

}
