//Testar se um número é 
//divisível por 2 ou por 7 (tente fazer usando apenas if’s)


numero=14;

if(numero%2==0){
    if(numero%7==0){
        console.log('O número não se aplica a essa condição')
    }else{
        console.log('Apenas o número 2 é divisível')
    }
}else if(numero%7==0){
    if(numero%2==0){
        console.log('O número não se aplica a essa condição')
    }else{
        console.log('Apenas o número 7 é divisível')
    }
}