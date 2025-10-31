function menuClicado(menuHamburguer){

	let contador = 0; tamanhoHamburguer = menuHamburguer.querySelectorAll('header>nav>a>span').length;

	
	if(menuHamburguer.querySelector('span').className != 'exibirSeta'){
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.add("exibirSeta");
		}
	} else {
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.remove("exibirSeta");
		}
	}
	
}