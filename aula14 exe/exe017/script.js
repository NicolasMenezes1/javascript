function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else{
        var n = Number(num.value)
        tab.innerHTML = '' //Para limpar a caixa antes de exibir o código for

        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //Para aperecer as informações na tela 
       }
    }
}