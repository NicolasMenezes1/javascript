function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var fano = window.document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERROR]. Por favor, Digite os dados corretamente!')
    }  else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){                          
                img.setAttribute('src', 'criançahomemrosto.png')
            img.style.width='250px' 
            img.style.height='250px'
            img.style.borderRadius='50%' 
            } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.jpg')
            img.style.width='250px'
            img.style.height='250px'
            img.style.borderRadius='50%' 
            } else if (idade < 50){
                img.setAttribute('src','adultohomem.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            } else {
                img.setAttribute('src','idosohomem.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criançamulher.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            } else if (idade < 21){
                img.setAttribute('src','jovemmulher.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            } else if (idade < 50){
                img.setAttribute('src', 'adultomulher.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            } else {
                img.setAttribute('src','idosomulher.png')
                img.style.width='250px'
                img.style.height='250px'
                img.style.borderRadius='50%' 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o genero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
 }