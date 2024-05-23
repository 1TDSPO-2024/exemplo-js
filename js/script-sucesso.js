//Recuperando o token do sessionStorage.
const tokenUser = sessionStorage.getItem("token");
if (tokenUser) {

  let usuario = JSON.parse(localStorage.getItem("usuario-logado"));
  //Escrevendo na mensagem de Boas Vindas o nome do Usuário:
  const msgWelcome = document.querySelector("#msg-welcome");
  msgWelcome.innerText = usuario.nomeCompleto;

  //Criando um evento na tag a para realizar o logout do Usuário:
  const userLogout = document.querySelector("#logout-user");
  userLogout.addEventListener("click", () => {
    localStorage.removeItem("usuario-logado");
    sessionStorage.removeItem("token");
    window.location.href = "../index.html";
  });
}else{
    window.location.href = "../status/erro.html";
}
 