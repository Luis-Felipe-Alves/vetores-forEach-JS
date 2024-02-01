let vetor = [1,2,3,4,5];
let novoVetor = vetor.map(elemento => elemento+2);
let soma = 0;

//Vamos usar o forEach com uma função anônima passada como argumento:

vetor.forEach((nota, indice) => {
    console.log(nota, indice);    
    soma += nota;
    
});

vetor.forEach(function(){
    console.log('oi!');
})

//No método forEach, a função anônima É O PRÓPRIO parâmetro/argumento obrigatório ao método.

//Agora usaremos o forEach com uma chamada de função, chamada CALLBACK:

function imprimeValor(nome, indice){
    console.log(nome, indice);
}
vetor.forEach(imprimeValor);
