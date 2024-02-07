var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['11:50:00', '11:50:10', '11:50:20', '11:50:30', '11:50:40', '11:50:50', '11:51:00', '11:51:10', '11:51:20', '11:51:30', '11:51:40', '11:51:50'],
        datasets: [{
            label: 'Модем 1',
            data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 80, 90, 100],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }, {
            label: 'Модем 2',
            data: [85, 69, 70, 61, 76, 65, 80, 70, 90, 100, 110, 120],
            fill: false,
            borderColor: 'red',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Mb'
                }
            }
        },
        legend: {
            labels: {
                usePointStyle: true,
            }
        }
    }
});
