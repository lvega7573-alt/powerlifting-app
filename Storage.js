function saveSet(day,exercise,set,weight){

let data=JSON.parse(localStorage.getItem("training"))||{}

if(!data[day])data[day]={}

data[day][exercise+"_"+set]=weight

localStorage.setItem("training",JSON.stringify(data))

}
