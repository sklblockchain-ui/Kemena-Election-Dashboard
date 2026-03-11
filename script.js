// =========================
// LOAD ELECTION RESULTS
// =========================

Papa.parse("SARAWAK_2021_ELECTION_RESULTS.csv",{

download:true,
header:true,

complete:function(results){

let row=results.data[0]

// cards
document.getElementById("winner").innerText=row["WINNING PARTY (2021)"]
document.getElementById("majority").innerText=row["WINNING MAJORITY"]
document.getElementById("turnout").innerText=row["TURNOUT (%)"]+"%"

// vote chart

let parties=[
"GPS",
"PH",
"PSB",
"PBK",
"ASPIRASI"
]

let votes=[
row["GPS VOTE"],
row["PH VOTE"],
row["PSB CANDIDATE VOTE"],
row["PBK VOTE"],
row["ASPIRASI VOTE"]
]

new Chart(document.getElementById("voteChart"),{

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


// =========================
// LOAD DEMOGRAPHIC DATA
// =========================

Papa.parse("SARAWAK_2021_DUN_COMPOSITION.csv",{

download:true,
header:true,

complete:function(results){

let row=results.data[0]

// urban rural

document.getElementById("urban").innerText=row["URBAN-RURAL CLASSIFICATION (2021)"]

// ethnic chart

let ethnicLabels=[
"Malay/Melanau",
"Chinese",
"Iban",
"Bidayuh",
"Orang Ulu",
"Others"
]

let ethnicData=[
row["MALAY/MELANAU (%)"],
row["CHINESE (%)"],
row["IBAN (%)"],
row["BIDAYUH (%)"],
row["ORANG ULU (%)"],
row["OTHERS (%)"]
]

new Chart(document.getElementById("ethnicChart"),{

type:"pie",

data:{
labels:ethnicLabels,
datasets:[{
data:ethnicData
}]
}

})


// age chart

let ageLabels=[
"21-29",
"30-39",
"40-49",
"50-59",
"60-69",
"70-79",
"80-89",
"90+"
]

let ageData=[
row["21-29 (%)"],
row["30-39 (%)"],
row["40-49 (%)"],
row["50-59 (%)"],
row["60-69 (%)"],
row["70-79 (%)"],
row["80-89 (%)"],
row["ABOVE 90 (%)"]
]

new Chart(document.getElementById("ageChart"),{

type:"bar",

data:{
labels:ageLabels,
datasets:[{
label:"%",
data:ageData
}]
}

})


// gender chart

new Chart(document.getElementById("genderChart"),{

type:"doughnut",

data:{
labels:["Male","Female"],
datasets:[{
data:[
row["MALE ELECTORS (%)"],
row["WOMEN ELECTORS (%)"]
]
}]
}

})

}

})
