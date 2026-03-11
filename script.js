Papa.parse("SARAWAK_2021_ELECTION_RESULTS.csv", {

download: true,
header: true,

complete: function(results) {

let data = results.data

// filter for N69 Kemena

let kemena = data.filter(row => row.DUN === "N69")

let labels = kemena.map(row => row.PARTY)
let votes = kemena.map(row => row.VOTES)

const ctx = document.getElementById('voteChart')

new Chart(ctx, {

type: 'bar',

data: {
labels: labels,

datasets: [{
label: 'Votes',
data: votes
}]
}

})

}

})
