function contar() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('ERRO')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}

let num = [3,5,6,9,25,4,4,8,12,57]
num.sort()

console.log(Math.max(...num)) 
console.log(Math.min(...num)) 
console.log(num.indexOf(3))

function ArrayAvg(num) {
    let i = 0, summ = 0, ArrayLen = num.length;
    while (i < ArrayLen) {
        summ = summ + num[i++];
}
    return summ / ArrayLen;
}

let a = ArrayAvg(num);
console.log(a)



