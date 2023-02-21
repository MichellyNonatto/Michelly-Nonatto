const btnCopiar = document.getElementById("copiar");
const campoTexto = 'michellynonato15@gmail.com';
const playModal = document.getElementById("modal");
const closeModal = document.getElementById("modal__btn");
let nivel = document.getElementsByClassName("skills__card-texto");

btnCopiar.addEventListener('click', (texto) => {
    texto.preventDefault();
    navigator.clipboard.writeText(campoTexto);

    playModal.classList.toggle('active');
});

closeModal.addEventListener('click', () => {
    playModal.classList.remove('active');
})

for (i = 0; i < nivel.length; i++) {
    if (nivel[i].outerText == "iniciante") {
        nivel[i].style.color = "yellow"
    } else if (nivel[i].outerText == "estudante") {
        nivel[i].style.color = "greenyellow"
    } else if (nivel[i].outerText == "intusiasta") {
        nivel[i].style.color = "green"
    }
}

/*
iniciante - já vi sobre porém não aprofundei sobre o assunto
estudante - já vi e estudo sobre o assunto
intusiasta - estudo e fiz projetos próprios sobre o assunto
*/