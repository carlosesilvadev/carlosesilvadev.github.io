/*
Exibe e esconde o submenu de tipo de moradia para locação e compra ao escolher a cidade no menu superior.
*/
document.querySelector('header nav ul li div ul li a').addEventListener('mouseenter', () => {
    document.querySelector('header nav ul li>ul').style.display = 'block';
});

document.querySelector('header nav ul li').addEventListener('mouseleave', () => {
    document.querySelector('header nav ul li>ul').style.display = 'none';
});

document.querySelector('header nav ul li#comprar div ul li a').addEventListener('mouseenter', () => {
    document.querySelector('header nav ul li#comprar>ul').style.display = 'block';
});

document.getElementById('comprar').addEventListener('mouseleave', () => {
    document.querySelector('header nav ul li#comprar>ul').style.display = 'none';
});


/*Expande o menu ao clicar no botão de hamburguer*/
document.getElementsByClassName('menuHamburguer')[0].addEventListener('click', function(){
	document.getElementsByTagName('header')[0].classList.add('exibirMenu');
});

/*Esconde o menu ao clicar no botão de hamburguer*/

document.getElementsByClassName('menuHamburguerComX')[0].addEventListener('click', function(){
	document.getElementsByTagName('header')[0].classList.remove('exibirMenu');
});


/*EventListener para ficar escutando os botões de busca ou anuncio de imóveis para ajustar a classe de posicionamento do span com fundo branco.*/
document.getElementById('esquerda').addEventListener('click', function(){
    document.querySelector('main section form div span').classList.remove('moverParaDireita');
    document.querySelector('main section form div span').classList.add('moverParaEsquerda');
});

document.getElementById('direita').addEventListener('click', function(){
    document.querySelector('main section form div span').classList.remove('moverParaEsquerda');
    document.querySelector('main section form div span').classList.add('moverParaDireita');
});

/*API REST DO IBGE PARA ENCONTRAR CIDADES DO BRASIL ENQUANTO O USUARIO DIGITA A CIDADE*/

const input = document.getElementById('cidade');
const suggestions = document.getElementById('suggestions');

let cidades = [];

// Carregar todas as cidades do IBGE na primeira digitação (pode ser otimizado)
async function carregarCidades() {
    if (cidades.length > 0) return cidades; // já carregadas

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    const data = await response.json();

    cidades = data.map(cidade => ({
        nome: cidade.nome,
        /*uf: cidade.microrregiao.mesorregiao.UF.sigla*/
    }));

    return cidades;
}

input.addEventListener('input', async () => {
    const query = input.value.trim().toLowerCase();
    if (query.length < 2) {
        suggestions.innerHTML = '';
        return;
    }

    await carregarCidades();

    const resultados = cidades.filter(c => c.nome.toLowerCase().startsWith(query)).slice(0, 10);

    suggestions.innerHTML = '';
    resultados.forEach(c => {
        const li = document.createElement('li');
        li.textContent = `${c.nome}`;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            input.value = c.nome;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
    });
});
