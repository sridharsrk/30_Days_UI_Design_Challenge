const canva = document.querySelector(".graph");

new Chart(canva, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [41, 29, 23, 4, 3],
            backgroundColor: [
                '#9966FF',
                '#FF6384',
                '#ef6c00',
                '#FFCE56',
                '#4BC0C0',
            ],
            hoverOffset: 3,
            cutout: '80%',
            borderColor: 'black',
            borderWidth: 2,
            spacing: 2
        }]
    }
});
