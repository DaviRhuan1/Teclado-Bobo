"use strict";const sons={A:"sounds/cartoon-jump-6462.mp3",S:"sounds/failure-drum-sound-effect-2-7184.mp3",D:"sounds/funny-cartoon-cry-144756.mp3",F:"sounds/funny-reaction-120318.mp3",G:"sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3",H:"sounds/man-scream-121085.mp3",J:"sounds/my-good-120319.mp3",K:"sounds/pipe-117724.mp3",L:"sounds/very-infectious-laughter-117727.mp3"},criarDiv=e=>{const t=document.createElement("div");t.classList.add("key"),t.textContent=e,t.id=e,document.getElementById("container").appendChild(t)},exibir=e=>Object.keys(e).forEach(criarDiv),tocarSom=e=>{new Audio(sons[e]).play()},adicionarEfeito=e=>document.getElementById(e).classList.add("active"),removerEfeito=e=>{const t=document.getElementById(e);t.addEventListener("transitionend",(()=>t.classList.remove("active")))},ativarDiv=e=>{const t="click"==e.type?e.target.id:e.key.toUpperCase();sons.hasOwnProperty(t)&&(adicionarEfeito(t),tocarSom(t),removerEfeito(t))};exibir(sons),document.getElementById("container").addEventListener("click",ativarDiv),document.addEventListener("keydown",ativarDiv);const navbarToggle=document.getElementById("navbar-toggle"),navbarLinks=document.getElementById("navbar-links");function adicionarTarefa(){const e=document.getElementById("tarefa"),t=e.value.trim();if(""!==t){const n=document.getElementById("lista-tarefas"),a=document.createElement("li");a.innerHTML=`\n          ${t} \n          <button class="delete">Remover</button>\n      `,a.querySelector(".delete").addEventListener("click",(function(){n.removeChild(a)})),n.appendChild(a),e.value=""}}navbarToggle.addEventListener("click",(()=>{navbarLinks.classList.toggle("active"),navbarToggle.classList.toggle("active")})),document.getElementById("adicionar").addEventListener("click",adicionarTarefa),document.getElementById("tarefa").addEventListener("keyup",(function(e){"Enter"===e.key&&adicionarTarefa()}));