// ================================
// LOAD ELECTION RESULTS
// ================================

Papa.parse("SARAWAK_2021_ELECTION_RESULTS.csv", {

download: true,
header: true,

complete: function(results) {

let data = results.data

// find the row containing Kemena
let kemenaRow = data.find(row =>
Object.values(row).join(" ").toLowerCase().includes("kemena")
)

if(!kemenaRow){
console.log("Kemena row not found")
return
}

// automatically detect vote columns
let parties = []
let votes = []

Object.keys(kemenaRow).forEach(col => {

if(col.toLowerCase().includes("vote")){

parties.push(col.replace(" VOTE",""))
votes.push(Number(kemenaRow[col]))

}

})

const ctx = document.getElementById("voteChart")

new Chart(ctx,{
type:"bar",

data:{
labels:parties,
datasets:[{
label:"Votes",
data:votes
}]
}

})

}

})


// ================================
// LOAD ETHNIC COMPOSITION
// ================================

Papa.parse("SARAWAK_2021_DUN_COMPOSITION.csv", {

download:true,
header:true,

complete:function(results){

let data = results.data

let kemenaRow = data.find(row =>
Object.values(row).join(" ").toLowerCase().includes("kemena")
)

if(!kemenaRow){
console.log("Kemena composition not found")
return
}

let labels=[]
let values=[]

Object.keys(kemenaRow).forEach(col=>{

if(col.includes("%")){

labels.push(col.replace(" (%)",""))
values.push(Number(kemenaRow[col]))

}

})

const ctx2=document.getElementById("ethnicChart")

new Chart(ctx2,{
type:"pie",

data:{
labels:labels,
datasets:[{
data:values
}]
}

})

}

})
