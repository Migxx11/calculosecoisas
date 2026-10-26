alert (`Seja muito bem-vindo ao meu site.`);

let numeroprimario = Number(prompt("Digite um número: "));
let numerosecundario = Number(prompt("Agora, Digite outro número para sermos felizes: "));

let resultado =numeroprimario + numerosecundario;
let resultadodois =numeroprimario - numerosecundario;
let resultadotres =numeroprimario * numerosecundario;
let resultadoquatro =numeroprimario / numerosecundario;

alert(`O resultado do ${numeroprimario} com o ${numerosecundario} da ${resultado}
já se for menos, vai dar ${resultadodois} se for multiplicação ${resultadotres}, e por fim, se for divisão, vai dar ${resultadoquatro}`);