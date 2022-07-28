/*function parimpar(n){
    if(n%2==0){
        return 'par'
    } else {
        return 'impar'
    }
}


console.log(parimpar(12))

function soma (n1=0 , n2=0){
    return n1 + n2 
    

}

console.log(soma(5))*/

function fatorial(n) {
    let fat = 1 
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))