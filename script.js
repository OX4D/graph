const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Пустой массив для меток
        datasets: [{
            label: 'Модем 1',
            data: [], // Пустой массив для данных
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }, {
            label: 'Модем 2',
            data: [], // Пустой массив для данных
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

// Функция для получения случайного значения (для демонстрации)
function getRandomValue() {
    return Math.floor(Math.random() * 100);
}

// Функция для добавления новых данных в график
function addData(chart, label, data1, data2) {
    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
    }

    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data1);
    chart.data.datasets[1].data.push(data2);
    chart.update();
}

// Обновление графика каждую секунду
setInterval(() => {
    const now = new Date();
    const timeLabel = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    addData(myChart, timeLabel, getRandomValue(), getRandomValue());
}, 1000);
