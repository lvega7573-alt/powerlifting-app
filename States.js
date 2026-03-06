function openStats(){

document.getElementById("home").classList.add("hidden")

document.getElementById("statsScreen").classList.remove("hidden")

drawCharts()

}

function drawCharts(){

let ctx=document.getElementById("volumeChart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Semana1","Semana2"],

datasets:[{

label:"Volumen total",

data:[12000,9000]

}]

}

})

}
