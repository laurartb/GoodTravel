const ctx = document.getElementById('climaChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
            label: 'Temperatura (°C)',
            data: [9, 7, 5, 9, 8, 7, 8],
            borderColor: 'var(--color-acento)',
            backgroundColor: 'var(--color-acento-transparente)',
            tension: 0.3,
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        }
    }
});