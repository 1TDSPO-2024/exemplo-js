"use strict";
// n = "Jonhson";
// console.log(n);
// var eval = "nome reservado";
// console.log(eval);

// Comentário de linha
/*
  Comentário de bloco
*/
// console.log("Hello World!");
// console.error("Erro");
// console.warn("Aviso");
// console.info("Informação");

//Recuperando o botão submit com a função getElementById(id) e guardando ele em uma constante.
//const btn = document.getElementById("btnSubmit");
//Atrelar um evento ao botão, no caso, ao clicar no botão, ele vai executar a função.

// btn.addEventListener("click", function(){
  //     console.log(this);
  // });
  
  // btn.addEventListener("click", ()=>{
    //     console.log(this);
    // });
    
// Hoisting
//var nome = "Joaquim";

//if(true)
//{
//    let nome = "João";
//}

//console.log(nome);
// teste = "ANTES";
// console.log(teste);
// var teste;


// Declaração de variáveis (var, let, const):
// Usando var
// var x = 10;
// console.log(x);

// // Usando let
// let y = 20;
// console.log(y);

// // Usando const (constante, valor não pode ser alterado)
// const z = 30;
// console.log(z);
// // z = 20;

// Tipos de dados em JavaScript:

// // Number
// let num = 10;
// console.log(num);

// // String
// let str = "Olá, mundo!";
// console.log(str.charAt(0));
// console.log(str.indexOf("Olá"));

// // Boolean
// let bool = true;
// console.log(bool);

// // Array
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6,7,8,9,10];
// console.log(arr1);
// console.table(arr1);
// // Mesclar Arrays
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// // Mesclar Arrays com SPREAD
// let arr4 = [...arr1, ...arr2];
// console.log(arr4);

// // Object
// let obj = { nome: "João", idade: 25, devedor: true};
// console.log(obj);
// console.table(obj);
// console.log(obj.nome);
// console.log(obj.idade);
// console.log(obj.devedor);
// console.log(obj["nome"]);
// //Quero carregar um atributo do objeto utilizando uma variável
// let atributo = "idade";
// console.log("ATRIBUTO VARIADO : " + obj[atributo]);

// //Adicionando um nova propriedade ao objeto OBJ e utilizando o operador SPREAD para preencher
// obj = {...obj, cidade: "São Paulo", estado: "SP"};
// console.log(obj);

// //DESTRUCTURING
// const pessoa = {nome : 'Maria', idade: 34, cidade: 'Florianópolis'};

// const {nome, idade, cidade} = pessoa;
// console.log(nome);
// console.log(idade);
// console.log(cidade);


// // EXERCÍCIOS

// // Conversão entre tipos de dados:

// // Converter string para número
// let strNumero = "10";
// let numero = parseInt(strNumero);
// console.log(numero); // Saída: 10 (número)

// // Converter número para string
// let numeroStr = 20;
// let strNumero2 = numeroStr.toString();
// console.log(strNumero2); // Saída: "20" (string)

// // Converter para booleano
// let valor = 0;
// let booleano = Boolean(valor);
// console.log(booleano); // Saída: false (0 é considerado false)

// EXERCÍCIOS

// Exercício 1 - Declarando Variáveis:
// Declare três variáveis diferentes (x, y, z) usando var, let e const, respectivamente. Em seguida, imprima o valor de cada variável no console.
// var x = 10;
// let y = 20;
// const z = 30;

// console.log(x);
// console.log(y);
// console.log(z);

// // Exercício 2 - Tipos de Dados:
// // Declare variáveis representando diferentes tipos de dados (número, string, booleano, array e objeto) e imprima cada uma delas no console.
// let num = 10;
// let str = "string";
// let bool = true;
// let arr = [1, 2, 3];
// let obj = {nome : "João", idade: 25};
// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(arr);
// console.log(obj);

// // Exercício 3 - Conversão de String para Número:
// // Converta a string "25" em um número e imprima no console.
// let strNumero = "25.5";
// let numero = parseFloat(strNumero);
// console.log(numero);

// // Exercício 4 - Conversão de Número para String:
// // Converta o número 30 em uma string e imprima no console.
// let numeroStr = 30;
// console.log(numeroStr.toString());

// // Exercício 5 - Conversão para Booleano:
// // Converta o valor 0 para um booleano e imprima no console.
// let valor = 1;
// let booleano = Boolean(valor);
// console.log(booleano);

// EXERCÍCIOS

// Exercício 1 - Variáveis e Hoisting:
// Qual será o valor de nome após a execução do código abaixo?
// "use strict";
// var nome = "Joaquim";
// if (true) {
//     let nome = "João";
// }
// console.log(nome);

// Exercício 2 - Declaração de Variáveis:
// Declare uma variável estrito utilizando let sem atribuir um valor. Imprima o valor de estrito no console.
// let estrito;
// console.log(estrito); // Saída: undefined

// Exercício 3 - Tipos de Dados:
// Qual é o tipo de dado da variável str?
// let str = "Olá, mundo!";


// Exercício 4 - Mesclar Arrays:
// Crie um novo array chamado arrConcatenado que seja a concatenação dos arrays arr1 e arr2. Imprima arrConcatenado no console.


// Exercício 5 - Acesso a Propriedades de Objetos:
// Acesse a propriedade idade do objeto obj e imprima seu valor no console.
// let obj = { nome: "João", idade: 25, devedor: true };
// console.log(obj.idade); // Saída: 25

// Exercício 6 - Atributo Variável de Objetos:
// Atribua a string "São Paulo" à propriedade cidade do objeto obj. Imprima obj no console.


// Exercício 7 - Conversão de String para Número:
// Converta a string "10" em um número e imprima o resultado no console.

// Exercício 8 - Estrutura Condicional com Operadores:
// Qual será a saída do código abaixo?
// let idade = 20;
// let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(result);

// Exercício 9 - Estrutura Condicional Tradicional:
// Qual será a saída do código abaixo?
// let age = 20;

// if (age >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// Exercício 10 - Mesclar Arrays com Spread:
// Crie um novo array chamado arr4 que seja a concatenação dos arrays arr1 e arr2 utilizando o operador spread. Imprima arr4 no console.


//Lista de usuário

let listaUsuarios = {
  {nomeCompleto: "José das Couve",emailUsuario:"jo@email.com",senhaUsuario:"123456"}
  {nomeCompleto: "Joaquim Neves",emailUsuario:"ju@email.com",senhaUsuario:"123456"}
  {nomeCompleto: "Manoel Sinfrim",emailUsuario:"mo@email.com",senhaUsuario:"123456"}
  {nomeCompleto: "Maria Lua",emailUsuario:"ma@email.com",senhaUsuario:"123456"}
  {nomeCompleto: "Laura do Carmo",emailUsuario:"la@email.com",senhaUsuario:"123456"}
}


// Manipulação do DOM

function validacao(input1,input2){

  //Criando uma estrutura de decisão para validar os dados do FORM contra os dados do OBJETO usuário:

  for (let x = 0; x < listaUsuarios.length; x++){
      if((listaUsuarios[x].emailUsuario == input1.value) && (listaUsuarios[x].senhaUsuario == input2.value))
      console.log 
  }
  listaUsuarios.forEach(function(usuario){
    console.log(usuario.nomeCompleto)
 
  if((usuario.emailUsuario == input1.value) && (usuario.senhaUsuario == input2.value)){
    console.log("Login efetuado com sucesso!");
 
  }
  
  
});
return false;
}


