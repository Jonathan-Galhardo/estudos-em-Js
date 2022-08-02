function calculoIMC(){
    //RECEBENDO DADOS DO USUÁRIO 
    let nome = document.getElementById('nome')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')



    //TRATANDO OS DADOS RECEBIDOS
    altura1 = parseFloat(altura)
    peso1 = parseFloat(peso)
    altura1 = (altura1/100)

    //CALCULO DO IMC 
    let imc = peso / (altura * altura)

    //CRIANDO VARIAVEL PARA COMPARAÇÃO 
    let classificacao = ''

    //TESTAGEM LÓGICA
    if (imc < 16){
        classificacao = ' Baixo peso muito grave'
    } else if (imc > 15 && imc < 16.99){
        classificacao = ' Baixo peso grave'
    } else if (imc > 17 && imc < 18.49) {
        classificacao = ' Baixo peso'
    } else if (imc > 18.5 && imc < 24.99){
        classificacao = ' Peso Normal grave'
    } else if (imc > 25 && imc < 29.99) {
        classificacao = ' Sobrepeso'
    } else if (imc > 30 && imc < 34.99) {
        classificacao = ' Obesidade Grau I'
    } else if (imc > 35 && imc < 39.99) {
        classificacao = ' Obesidade Grau II'
    } else {
        classificacao = ' Obesidade Grau III'
    }

    //RETORNO NA TELA DO USUÁRIO
    resultado.innerHtml =  (`Olá ${nome}, sua altura é ${altura1}m, e seu peso é ${peso}Kg.<br> Seu IMC é:   ${imc.toFixed(2)}  
    <br> Sua classificação é:  ${classificacao}`)


    document.write(`Olá ${nome}, sua altura é ${altura1}m, e seu peso é ${peso1}Kg.<br> Seu IMC é:   ${imc.toFixed(2)}  
    <br> Sua classificação é:  ${classificacao}`)
}