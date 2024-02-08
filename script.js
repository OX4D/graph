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
            borderWidth: 1, // Тонкие линии
            tension: 0.3,
            pointRadius: 0.1 // Меньшие точки
        }, {
            label: 'Модем 2',
            data: [], // Пустой массив для данных
            fill: false,
            borderColor: 'red',
            borderWidth: 1, // Тонкие линии
            tension: 0.3,
            pointRadius: 0.1 // Меньшие точки
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
    if (chart.data.labels.length > 50) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
        chart.data.datasets[1].data.shift();
    }

    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data1);
    chart.data.datasets[1].data.push(data2);
    chart.update();
}

// Обновление графика каждые 500 миллисекунд (0.5 секунды)
setInterval(() => {
    const now = new Date();
    const timeLabel = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    addData(myChart, timeLabel, getRandomValue(), getRandomValue());

    // Удаление старых данных, если количество точек превышает 20
    if (myChart.data.labels.length > 20) {
        myChart.data.labels.shift();
        myChart.data.datasets.forEach((dataset) => {
            dataset.data.shift();
        });
    }

    myChart.update();
}, 1000);
