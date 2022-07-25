//Testar se o quadrado de um número é maior do que ele 
//multiplicado por 10


var numero= 20;

if((numero*numero)>(numero*10)){
    console.log('O quadrado do número é maior')
}else if((numero*numero)==(numero*10)){
    console.log('os dois são iguais')//o caso do numero 10
}else if((numero*numero)<(numero*10)){
    console.log('o quadrado do numero é menor')
}else{
    console.log('verifique o número')//caso a pessoa coloque qualquer outra coisa que seja diferente de um número
}

