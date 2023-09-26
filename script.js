"use strict";

const sons = {
  A: `sounds/cartoon-jump-6462.mp3`,
  S: `sounds/failure-drum-sound-effect-2-7184.mp3`,
  D: `sounds/funny-cartoon-cry-144756.mp3`,
  F: `sounds/funny-reaction-120318.mp3`,
  G: `sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`,
  H: `sounds/man-scream-121085.mp3`,
  J: `sounds/my-good-120319.mp3`,
  K: `sounds/pipe-117724.mp3`,
  L: `sounds/very-infectious-laughter-117727.mp3`,
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra =
    evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

/* Barra de Navegação */
const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
  const inputTarefa = document.getElementById("tarefa");
  const tarefa = inputTarefa.value.trim();

  if (tarefa !== "") {
    const listaTarefas = document.getElementById("lista-tarefas");
    const novaTarefa = document.createElement("li");
    novaTarefa.innerHTML = `
          ${tarefa} 
          <button class="delete">Remover</button>
      `;

    novaTarefa.querySelector(".delete").addEventListener("click", function () {
      listaTarefas.removeChild(novaTarefa);
    });

    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = "";
  }
}

// Adicionar tarefa quando o botão "Adicionar" é clicado
document.getElementById("adicionar").addEventListener("click", adicionarTarefa);

// Adicionar tarefa quando a tecla Enter é pressionada no campo de entrada
document.getElementById("tarefa").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

// window.addE...;
