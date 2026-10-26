alert (`Ola, Seja Bem-Vindo a Suas notas`)

let html = Number(prompt("Digite Suas Notas de HTML (somente numeros de 1 A 10)"));
let css = Number(prompt("Digite Suas Notas de Notas CSS (somente numeros de 1 A 10)"));
let java = Number(prompt("Digite Suas Notas de Notas de JavaScript (somente numeros 1 A 10)"));

let resultado = (html+css+java)/3

alert (`No total juntando a nota de ${html} com a de ${css} e de ${java} no total sua média vai ser ${resultado}`);