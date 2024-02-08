const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Пустой массив для меток
        datasets: [{
            label: 'Модем 1',
            data: [], // Пустой массив для данных
            fill: true,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 1, // Тонкие линии
            tension: 0.3,
            pointRadius: 1 // Меньшие точки
        }, {
            label: 'Модем 2',
            data: [], // Пустой массив для данных
            fill: true,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            borderWidth: 1, // Тонкие линии
            tension: 0.3,
            pointRadius: 1 // Меньшие точки
        }]
    },
    options: {
        tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function(tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label;
                }
            }
        },
        // Другие настройки...
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

// Обновление графика каждые 500 миллисекунд для более частого обновления
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

    myChart.update({
        preservation: true
    });
}, 1000); // Изменено с 1000 на 500 мс для более быстрого обновления
