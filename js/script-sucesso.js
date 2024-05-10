


//Recuperando o Objeto do localStorage.
let usuario = JSON.parse( localStorage.getItem("usuario-validado"));

//Escrevendo na mensagem de Boas Vindas o nome do Usuário:
const msgWelcome = document.querySelector("#msg-welcome");
msgWelcome.innerText = usuario.nomeCompleto;

//Criando um evento na tag a para realizar o logout do Usuário:
const userLogout = document.querySelector("#logout-user");
userLogout.addEventListener("click", ()=>{
    localStorage.removeItem("usuario-validado");
    window.location.href = "../index.html";
});