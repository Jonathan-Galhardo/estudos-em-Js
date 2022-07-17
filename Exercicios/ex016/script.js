function contar() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        window.alert('ERRO')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(paso.value)

        for(let c = i; c <= f; c = c + p){
            res.innerHTML = c
        }
    }

}


/*
for(var n1 = 1; n1 <= n2; n1 + n2){
    resultado.innerHTML = nc
}*/

