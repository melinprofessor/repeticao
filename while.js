let contador = 1;
let contador1 = 1

//o while precisa de uma variavel para controlar o processo
// de repetição todo processo é verificado na condição "contador <= 10"
// só vai entrar dentro do while quando a condição for verdadeira
// while(contador <= 10) {
//     console.log(contador)
//     // variavel sendo incrementada
//     contador += 1;
// }


// tabuada

while(contador <= 10) {
    while(contador1 <= 10) {
        console.log(`${contador} x ${contador1} = ${contador * contador1}`)
        contador1++;
    }
    contador1 = 0;
    contador++;
}




// Monstrar todas as letras
// const alfabeto = [null,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// while(contador1 <= alfabeto.length) {
//     console.log(alfabeto[contador1]);
//     contador1 +=1
// }

