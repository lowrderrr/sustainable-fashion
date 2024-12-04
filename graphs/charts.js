const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return `Value: ${tooltipItem.raw}`;
                }
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Values'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Categories'
            }
        }
    },
    zoom: {
        pan: {
            enabled: true,
            mode: 'xy' // Enable panning in both x and y axes
        },
        zoom: {
            enabled: true,
            mode: 'xy', // Enable zoom in both x and y axes
            speed: 0.1
        }
    }
};
