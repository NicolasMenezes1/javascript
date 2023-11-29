function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var hora = 18
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>=0 && hora<12){
        img.src = 'imagens/manha.png'
        document.body.style.background ='rgba(255, 187, 0, 0.514)'
    } else if (hora >=12 && hora<18){
        img.src = 'imagens/tarde.png'
        document.body.style.background ='rgb(163, 149, 111)'
        
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#001741'
    }
}
