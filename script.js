// ==============================
// LOAD ELECTION RESULTS
// ==============================

Papa.parse("SARAWAK_2021_ELECTION_RESULTS.csv", {

download: true,
header: true,

complete: function(results) {

let data = results.data

// find Kemena row
let kemena = data.find(row =>
row["STATE CONSTITUENCY NAME"] &&
row["STATE CONSTITUENCY NAME"].toLowerCase().includes("kemena")
)

if(!kemena){
console.log("Kemena not found")
return
}

// party votes

let parties = [
"GPS",
"PH",
"PSB",
"PBK",
"ASPIRASI"
]

let votes = [
kemena["GPS VOTE"],
kemena["PH VOTE"],
kemena["PSB CANDIDATE VOTE"],
kemena["PBK VOTE"],
kemena["ASPIRASI VOTE"]
]

// create chart

new Chart(document.getElementById("voteChart"), {

type: "bar",

data: {
labels: parties,
datasets: [{
label: "Votes",
data: votes
}]
}

})

}

})


// ==============================
// LOAD DEMOGRAPHIC DATA
// ==============================

Papa.parse("SARAWAK_2021_DUN_COMPOSITION.csv", {

download: true,
header: true,

complete: function(results) {

let data = results.data

// find Kemena row

let kemena = data.find(row =>
row["STATE CONSTITUENCY NAME"] &&
row["STATE CONSTITUENCY NAME"].toLowerCase().includes("kemena")
)

if(!kemena){
console.log("Kemena demographic not found")
return
}

// ethnicity chart

let ethnicLabels = [
"Malay/Melanau",
"Chinese",
"Iban",
"Bidayuh",
"Orang Ulu",
"Others"
]

let ethnicData = [
kemena["MALAY/MELANAU (%)"],
kemena["CHINESE (%)"],
kemena["IBAN (%)"],
kemena["BIDAYUH (%)"],
kemena["ORANG ULU (%)"],
kemena["OTHERS (%)"]
]

new Chart(document.getElementById("ethnicChart"), {

type: "pie",

data: {
labels: ethnicLabels,
datasets: [{
data: ethnicData
}]
}

})

}

})
