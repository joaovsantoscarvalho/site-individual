const button = document.querySelector("button");
const interactiveText = document.getElementById("interactive-text");

button.addEventListener('click', () => {
    const corAleatoria = '#' + Math.floor(Math.random() *16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;

    interactiveText.textContent = 'Cor de fundo alterada para ${corAleatoria}'
});