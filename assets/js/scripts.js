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

let paixoes = "desenvolvimento de sites", contadorLetra = 0;

window.onload = function digitandoTexto(){
			document.querySelector('span#apaixonado').innerHTML += paixoes.charAt(contadorLetra);
			contadorLetra++;

			setTimeout(digitandoTexto,50);

			/*if(contadorLetra >= document.querySelector('span#apaixonado').innerHTML.length){
				removendoTexto();
			}

			function removendoTexto(){
				document.querySelector('#apaixonado').innerHTML = paixoes.slice(0,contadorLetra);
				contadorLetra--;

				setTimeout(removendoTexto,50);
			}*/
}