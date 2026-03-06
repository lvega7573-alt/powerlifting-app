function startTimer(seconds){

let timer=seconds

let interval=setInterval(()=>{

timer--

if(timer<=0){

clearInterval(interval)

alert("Descanso terminado")

}

},1000)

}
