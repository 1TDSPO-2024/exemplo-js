"use strict";

// Lista de usuários:
let listaUsuarios = [
    { nomeCompleto: "José das Couve", emailUsuario: "jo@email.com", senhaUsuario: "123456" },
    { nomeCompleto: "Joaquim Neves", emailUsuario: "ju@email.com", senhaUsuario: "123456" },
    { nomeCompleto: "Manoel Sinfrim", emailUsuario: "mo@email.com", senhaUsuario: "123456" },
    { nomeCompleto: "Maria Lua", emailUsuario: "ma@email.com", senhaUsuario: "123456" },
    { nomeCompleto: "Laura do Carmo", emailUsuario: "la@email.com", senhaUsuario: "123456" },
];

// Função de validação
function validacao(inputEmail, inputSenha) {
    let msgStatus = document.querySelector(".valida");

    for (let x = 0; x < listaUsuarios.length; x++) {
        if (inputEmail.value === listaUsuarios[x].emailUsuario && inputSenha.value === listaUsuarios[x].senhaUsuario) {
            msgStatus.setAttribute("class", "sucesso");
            msgStatus.innerText = "Login realizado com sucesso!";

            // Guardando o objeto validado no localStorage:
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));

            setTimeout(function() {
                msgStatus.setAttribute("class", "valida");
                msgStatus.innerText = "";
                window.location.href = "../status/sucesso.html";
            }, 3000);
            return false;
        }
    }
    msgStatus.setAttribute("class", "erro");
    msgStatus.innerText = "Login ou senha inválidos!";
    setTimeout(function() {
        msgStatus.setAttribute("class", "valida");
        msgStatus.innerText = "";
        window.location.href = "../status/erro.html";
    }, 3000);
    return false;
}

// Máscara para o CPF
let inputCpf = document.getElementById("idCpf");

inputCpf.addEventListener("input", (e) => {
    let cpf = e.target.value;

    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = cpf;
});
