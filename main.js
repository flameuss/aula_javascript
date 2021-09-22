// #####manipulando elementos da página
function clicou(){
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
 // console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar!");

}


function redirecionar(){
  window.open("https://globallabs.academy/");
 // window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
  //.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
 // alert("trocar texto");
 elemento.innerHTML ="Obrigado por passar o mouse";
}

function voltar(elemento){
  // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML ="Passe o mouse aqui";
}

function load(){
  alert("Página carregada!");
}
function funcaoChange(elemento){
  console.log(elemento.value)
}
// #### Desenvolva páginas web com JavaScript

// function validaIdade(idade){
//   var validar;
//   if(idade >=18){
//       validar = true

//   }else{
//       validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual é a sua idade ?");
// console.log(validaIdade(idade));

// function soma(n1,n2){
// return n1+n2;
// }

// function setReplace(frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome)
// }
// alert(soma(5,10));
// alert(setReplace("vai Japão", "Japão", "Brasil" ));


// ## Introdução ao JavaScript
// var nome = "Luis Henrique";
// var idade = 29;
// var idade2 = 10;
// var n1 = 9;
// var n2 = 2;
// var frase = "japão é o melhor time do mundo !!!";
// alert( nome + " tem " + idade + " anos ");
// alert(idade +idade2);
// console.log(nome);
// console.log(idade+idade2);
// console.log(frase);
// console.log(n1*n2);
// console.log(frase.replace("japão","Brasil"));
// alert(frase.replace("japão","Brasil"));
// alert(frase.toLowerCase());
// alert(frase.toUpperCase());

// ## Array e Dicionário

// var lista = ["maçã","pera","laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "))
// var fruta = {nome:"maçã",cor:"vermelha"}
// console.log(fruta.nome);
// console.log(fruta.cor);
// var frutas = [{nome:"maçã",cor:"vermelha"}, {nome:"uva",cor:
// "roxa"}]
// console.log(frutas[0].nome);
// console.log(frutas[1].cor);


// ## Laço de repetição e date

// var idade = 18;
// var idade = prompt ("Qual sua idade ");
// if (idade >= 18){
// alert("Maior de idade!");
// }else{
//   alert("Menor de idade!");
// }

// var count = 0;
// while(count <= 5){
//   console.log(count);
//   alert(count);
//   count ++;
// };

// var count;
// for(count = 0; count <= 5; count ++){
//   alert(count);
// };

// var d = new Date();
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getDay()+1);
// alert(d.getMonth()+1);
