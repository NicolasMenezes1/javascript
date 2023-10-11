let characterId = document.getElementById('characterId')    //  Identifiquei o elemento input que está com id characterId
let btnGo = document.getElementById('btn-go')               //  Identifiquei o elemento button que está com id btn-go
let content = document.getElementById('content')            //  Identifiquei o elemento content que está com id content - Ele serve para preencher o nosso objeto
let image = document.getElementById('img')                  //  Identifiquei o elemento img com o id img
let btnReset = document.getElementById('btn-reset')
let containerResult = document.getElementById('result-style')

//  Requisitar uma API. criei um let para fazer uma requisão de API através da função fatch, e esse let recebe uma função como valor  
let fetchApi = (value) => {                 
    let result = fetch(`https://rickandmortyapi.com/api/character/${value}`).then ((res) => res.json()).then((data) => {

        return data // esse return vai retornar o data e guardar dentro do result
    }) // Esse fatch vai ir lá na API e trazer o resultado que eu pedir, e o let result vai guardar esse resultado. O then vem depois que a promise me entregar o que eu quero (Seguinifica Então) 

    return result
}

let keys = ['name', 'status' , 'species', 'gender', 'origin', 'episode']
let buildResult = (result) => {
   return keys.map((key) => document.getElementById (key))
        .map((elem) => {
            if(elem.checked && typeof(result[elem.name]) !== 'object'){
                let newElem = document.createElement('p')
                newElem.innerHTML = `${elem.name}: ${result[elem.name]}`
                content.appendChild(newElem)
            }
        })       
}





 //  Quando eu clicar no botão (btnGo) o evento de click vai starta alguma função
 btnGo.addEventListener('click', async (event) => {    
    event.preventDefault()  // Não vai deixar atualizar a página  // Não vai deixar atualizar a página                 
    let result = await fetchApi(characterId.value)
   // content.textContent = `${JSON.stringify(result, undefined,  2)}` //tranforma o json em string
  
    buildResult(result)
    image.src = `${result.image}` // pegue o valor de image da propria string

})


