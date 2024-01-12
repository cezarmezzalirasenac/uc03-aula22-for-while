const readline = require('readline-sync');

// for 
// enquanto uma determinada condição for verdadeira, faça algo

// quero que o contador comece em zero e incremente de 1 em 1 até 10

// para ( inicializacao da variável de controle; condição de repetição; incremento (ou decremento))

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// na primeira iteração, ou seja, na primeira vez que a repetição for executada
// vai criar e inicializar uma variável de controle.
// em seguida, vai validar a condição de execução, sendo verdadeiro, vai executar
// o código dentro do bloco do for e incrementar a variável de controle.
// caso a condição seja falsa, vai sair da repetição

for (let contador = 0; contador <=3; contador = contador + 1) {
  console.log("Passou "+contador+" vezes");
}

for (let i = 0; i <= 3; i++) {
  console.log("Passou " + i + " vezes");
}


// while - enquanto
let contador = 0;

while (contador <= 10) {
  console.log("Passou " + contador + " vezes");
  contador++;
}

let nome;

// expressões que podem ser validadas como verdadeiro ou falso 
// mas não são verdadeiro e falso
// truthy - 1 (ou numero maior que zero), != undefined 
// falsy - undefined, 0, "", false, NaN, null

// condição abaixo nega o valor do nome

// nome == undefined && nome == "" && nome == false
// !nome - faz todas as validações da linha acima
while(!nome){ 
  console.log("Nome inválido");
  nome = readline.question("Informe um nome");
}
