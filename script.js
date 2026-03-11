const voteChart = document.getElementById('voteChart');

new Chart(voteChart, {

type: 'bar',

data: {

labels: ['GPS','PH','PSB','Others'],

datasets: [{
label: 'Votes',
data: [12000,4500,3000,1000]

}]

},

options: {

responsive:true

}

});
