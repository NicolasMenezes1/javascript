function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var hora = 18
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>=0 && hora<12){
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#E9B26C'
    } else if (hora >=12 && hora<18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FECF89'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#001741'
    }
}


