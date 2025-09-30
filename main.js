const button = document.getElementById('mudarCorBtn');

button.addEventListener('click', () => {
    const corAleatoria = '#' + Math.floor(Math.random() *16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
});