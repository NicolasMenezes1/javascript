function verificar(){
    var num = prompt('Digite um número: ')
    var p = document.getElementById('p')

    if(num%2 == 0){
    p.innerHTML = `O número ${num} que foi digitado é <strong>PAR</strong>!`
    } else {
    p.innerHTML = `O número ${num} que foi digitado é <strong>IMPAR!</strong>`
    }
}