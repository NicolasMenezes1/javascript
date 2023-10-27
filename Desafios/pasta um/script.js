/* Primeiro passo:
Identificar meus elementos. */

let characterId = document.getElementById('characterId') //Capturar o valor que eu vou colocar na barrinha 
let btnGo = document.getElementById('btn-go') //Capturar o botão, para criar o evento de click e começar a função
let btnReset = document.getElementById('btn-reset') //Capturar o botão, para criar a função de limpar a página 
let content = document.getElementById('content') // para aparecer o objeto inteiro visualmente na tela
let conteinerResult = document.getElementById('result-style') // para aparecer o objeto inteiro visualmente na tela
let img = document.getElementById('img') // Capturar a imagem 

/* Segundo passo
Basico para requisitar API */

let fetchApi = (value) => { // esse let recebe uma função como valor, o parmetro value é o que eu vou escrever e pegar na caixa 
     let result = fetch(`https://rickandmortyapi.com/api/character/${value}`) // Criei esse let para guardar o resultado da minha fetch. A função fetch é a que vai lá na API e falar ''Ei API, Traz tal resultado''. Dentro da Função fetch, eu coloco a URL da API que eu quero usar. 
     .then ((res) => res.json()) //O primeiro res é a resposta da função fetch (depois eu transformo ela para objeto,json) 
     .then ((data) => { //a data são os dados que ele puxou. Aqui vai trazer os objetos (os dados do jeito que eu quero )
        return data //esse return vai retornar o valor de data (que são os dados da api) e vai ficar armazenado em result
// o then serve para esperar a resposta para então fazer alguma coisa. Eu peço alguma coisa, espero e ai então eu faço isso, ai então eu faço aquilo, 
     }) 
     return result //toda vez que rodar a função ele vai retornar o valor de result
}

/* Quarto passo
Fazer os filtros de informações funcionarem */ 
    let keys = ['name', 'status', 'species', 'gender', 'origin', 'episode'] // ao inves de fazer getelementbyid, eu faço esse array com todas as chaves e faço o getelementbyid uma vez só
    let newKeys = {
        name: 'Nome',
        status: 'Status',
        species: 'Espécie',
        gender: 'Gênero',
        origin: 'Planeta de Origem',
        episode: 'Episódios',
    }
    
    let buildResult = (result) => { //essa função vai ser disparada quando eu clicar em pesquisar, eu preciso receber o result (o resultado da consulta da API).
    return keys.map((key) => document.getElementById(key)) //o map me retorna outro array 
    .map((elem) => {
        if(elem.checked === true && (Array.isArray(result[elem.name])) === true){
            let arrayResult = result[elem.name].join('\r\n')
            console.log(arrayResult);
            let newElem = document.createElement('p')
            newElem.innerHTML = `${newKeys[elem.name]}: ${arrayResult}`
            content.appendChild(newElem)
        } else if(elem.checked === true && (elem.name === 'origin')){
            let newElem = document.createElement('p')
            newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name].name}`
            content.appendChild(newElem)
        } else if(elem.checked === true && typeof(result[elem.name]) !== 'object'){
            let newElem = document.createElement('p')
            newElem.innerHTML = `${newKeys[elem.name]}: ${result[elem.name]}`
            content.appendChild(newElem)
        }
    })
} //colocar o valor de forma dinâmica

    /* Terceiro passo
configurar o borão */


btnGo.addEventListener('click', async (event)=> { // o async é para fala que a função é assincrona, significa que não vai acontecer em tempo real, ele tem que esperar a resposta 
    event.preventDefault() // esse event não deixa a págica dar refresh sozinho 
    if(characterId.value === ''){
        return content.innerHTML = 'É necessário fazer um filtro.'
    }
    
    
    let result = await fetchApi(characterId.value) // guardando o valor que eu colocar na barra. mas tbm já deixo a função fetchapi funcionando, pois ela já vai saber o valor. await é para esperar o fetchApi acontecer e dar o retorno  
    // content.textContent = JSON.stringify(result, undefined, 2)//eu tenho que transformar o json em string. Porque lá em cima eu transformei ele em json
    // Se eu colocar apenas o result, os dados vão aparecer em uma linha só tudo um do lado do outro.
    // o 2 dá um espaço entre as chave 
    if(content.firstChild === null){
        conteinerResult.className = 'result-style'
        img.src = result.image //na API ele já tem um valor com imagem, eu só coloquei como se fosse um .value  
        buildResult(result)
    } else {
        conteinerResult.className = 'result-style'
        content.innerHTML = '' //isso faz zerar ou clicar de novo
        img.src = result.image //na API ele já tem um valor com imagem, eu só coloquei como se fosse um .value  
        buildResult(result)
    }
}) 

btnReset.addEventListener('click', () => location.reload());

