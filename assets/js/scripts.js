function menuClicado(menuHamburguer){

	let contador = 0; tamanhoHamburguer = menuHamburguer.querySelectorAll('header>nav>a>span').length;

	/*Verifica se não existe a class exibirSeta no primeiro span e em caso positivo é realizado a varredura em cada span e adicionado a classe exibirMenu e atribui essa mesma classe para os elementos nav e todos os li da lista do menu*/
	if(menuHamburguer.querySelector('span').className != 'exibirSeta'){
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.add("exibirSeta");
		}
			
			document.querySelector('header').classList.add("exibirMenu");

			document.querySelector('header>nav').classList.add("exibirMenu");

			document.querySelector('header>nav>ul>li').classList.add("exibirMenu");

	} else {

	/*Caso contrário realiza o mesmo processo acima, mas ao invés de adicionar a classe realiza a remoção da classe exibirSeta.*/
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.remove("exibirSeta");
		}

			document.querySelector('header').classList.remove("exibirMenu");

			document.querySelector('header>nav').classList.remove("exibirMenu");

			document.querySelector('header>nav>ul>li').classList.remove("exibirMenu");
	}
	
}

let paixoes = ["desenvolvimento de sites","criação de componentes web","suporte e manutenção de sites","desenvolvimento com bibliotecas e utilitários","desenvolvimento web"], contadorLetra = 0; iPalavra=0;

//Criado uma função des espera que retorna uma Promise com setTimeout para pausar por alguns segundos.
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Criado uma função assíncrona para o loop iterar entre as letras das palavras, e sempre que iterar chama a funcao esperar por 50 milisegundos.
async function digitandoTexto() {

	for(;iPalavra<paixoes.length;){
    		for(let iLetra = 0; iLetra < paixoes[iPalavra].length; iLetra++){
		    	await esperar(50);
			document.querySelector('span#apaixonado').innerHTML += paixoes[iPalavra].charAt(iLetra);
    		}
		await esperar(2000);
 		await removendoLetras();
	}

/*
  for (let i = 0; i < paixoes.length; i++) {

    	// Pausa a execução do loop por 50 milissegundos
    	await esperar(50);

	document.querySelector('span#apaixonado').innerHTML += paixoes.charAt(i);
  }

*/
  removendoLetras();
}

digitandoTexto();


async function removendoLetras() {
  await esperar(2000);
console.log(paixoes[iPalavra]);
  for (let iRemove = paixoes[iPalavra].length; iRemove >= 0; iRemove--) {
    await esperar(50);
    document.querySelector('#apaixonado').innerHTML = paixoes[iPalavra].slice(0,iRemove);
  }
iPalavra++
}