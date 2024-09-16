numero = Number(prompt("Informe o número: "));
contPrimo = 0;
cont = numero;

while(cont>=1){
    if(numero % cont == 0){
        contPrimo++;
    }
    cont--;
}

contPrimo == 2 ? console.log("É primo!") : console.log("Não é primo!");
