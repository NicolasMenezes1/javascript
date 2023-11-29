// A sintaxe chave {}. Determina que é um objeto


var obj = {
    nome:'Nícolas',
    idade:'22',
    profissao: 'Engenheiro',
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

// Para acessar uma propriedade de um objeto (Abaixo). A notação de ponto que torna poss´vel acessar a informação necessaria. obj.nome

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao)

console.log('O meu nome é ' + obj.nome)

obj.nome = 'Marcela'

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;
console.log(obj)