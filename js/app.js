document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    const beta = event.beta || 0; // Угол наклона устройства по оси X
    const gamma = event.gamma || 0; // Угол наклона устройства по оси Y

    const moveX = (gamma - 90) * -0.5; // Пересчет для оси X
    const moveY = (beta - 90) * -1; // Пересчет для оси Y

    document.documentElement.style.setProperty('--move-x', `${moveX}deg`);
    document.documentElement.style.setProperty('--move-y', `${moveY}deg`);
}