




/*
let num1 = 10;
let num2 = 20;
let resultado;

resultado = num1 + num2

alert(" O resultado é: " + resultado)

num1 = parseInt(prompt("digite o primeiro número da soma "));
num2 = parseInt(prompt("Digite o segundo número da soma "))

resultado = num1 + num2;

alert(" O resultado é:" + resultado);
*/ 

/*
let anoNascimento;
let anoAtual;
let resultado;
let idadeCachorro;
let nome;
let qualCaulculo;

//entrada de dados pelo usuario
nome = prompt("Qual seu nome?");
anoNascimento = parseInt(prompt("Qual o ano de nasmento?"));
anoAtual = parseInt(prompt("Qual o ano atual?"));

//primeiro desafio 
resultado = anoAtual - anoNascimento;

//SEGU8NDO DESAFIO
idadeCachorro = resultado * 7; 

//terceiro desafio

//quarto desafio
qualCaulculo = parseInt(prompt("Digite 1 pra idade humana ou 2 pra idade canina"));

//mostrar resultado 
if(qualCaulculo ==1){
    alert(nome + ",a idade é: " + resultado)
}
else if(qualCaulculo ==2){
    alert(nome + ", a idade em anos caninos é: " + idadeCachorro);
}else {
    alert(nome + ", por favor digite um numero valido.");
}
*/
//DESAFIO ULTIMATO//

//Fazer uma calculadora que verifica quantos pontos um estudante
//precisa para passar de ano no ultimo trimestre.

//Dicas: o estudante precisa informar as notas do primeiro e segundo trimestre 
//com esses dados, a calculadora precisa informar as motas do primeiro e segundo trimestre
//de ano do terceiro trimestre . Se o estudante ja estiver aprovado no segundo trimestre,
//mandar uma mensagem de parabéns!

//utilazar como média o valor 6.

let nota1trimestre;
let nota2trimestre;
let resultado;
 
nota1trimestre = parseInt(prompt("Qual a nota do 1 trimestre?"));
nota2trimestre = parseInt(prompt("Qual a nota do 2 trimestre?"));

resultado = 180 - (nota1trimestre+nota2trimestre);

if(resultado >= 0){
    alert("Precisa de" + resultado +" para passar.");
} else {
    alert("Parabéns! você ja ta aprovado!");
}





