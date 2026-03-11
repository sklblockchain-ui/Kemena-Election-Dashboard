// -----------------------------
// ELECTION RESULTS
// -----------------------------

Papa.parse("SARAWAK_2021_ELECTION_RESULTS.csv", {

download: true,
header: true,

complete: function(results) {

let row = results.data[0]

let parties = [
"GPS",
"PH",
"PSB",
"PBK",
"ASPIRASI"
]

let votes = [
row["GPS VOTE"],
row["PH VOTE"],
row["PSB CANDIDATE VOTE"],
row["PBK VOTE"],
row["ASPIRASI VOTE"]
]

const ctx = document.getElementById("voteChart")

new Chart(ctx, {

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


// -----------------------------
// ETHNIC COMPOSITION
// -----------------------------

Papa.parse("SARAWAK_2021_DUN_COMPOSITION.csv", {

download: true,
header: true,

complete: function(results) {

let row = results.data[0]

let ethnicLabels = [
"Malay/Melanau",
"Chinese",
"Iban",
"Bidayuh",
"Orang Ulu",
"Others"
]

let ethnicData = [
row["MALAY/MELANAU (%)"],
row["CHINESE (%)"],
row["IBAN (%)"],
row["BIDAYUH (%)"],
row["ORANG ULU (%)"],
row["OTHERS (%)"]
]

const ctx2 = document.getElementById("ethnicChart")

new Chart(ctx2, {

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
