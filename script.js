function scrollToSection() {
    document.getElementById("info").scrollIntoView({
        behavior: "smooth"
    });
}

// TIMELINE ANIMATION
window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (pos < screen - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateX(0)";
        }
    });
});

// GRAFICA
const ctx = document.getElementById('graficaSolar').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2018','2019','2020','2021','2022','2023'],
        datasets: [{
            label: 'MW instalados',
            data: [50,80,120,200,350,600],
        }]
    }
});