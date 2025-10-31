function menuClicado(menuHamburguer){

	let contador = 0; tamanhoHamburguer = menuHamburguer.querySelectorAll('header>nav>a>span').length;

	
	if(menuHamburguer.querySelector('span').className != 'exibirSeta'){
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.add("exibirSeta");
			
			document.querySelector('header').classList.add("exibirMenu");
		}

			document.querySelector('header>nav').classList.add("exibirMenu");

			document.querySelectorAll('header>nav>ul>li').classList.add("exibirMenu");

	} else {
		for(; contador < tamanhoHamburguer; contador++){
			menuHamburguer.querySelectorAll('span')[contador].classList.remove("exibirSeta");
		}

			document.querySelector('header').classList.remove("exibirMenu");

			document.querySelector('header>nav').classList.remove("exibirMenu");

			document.querySelectorAll('header>nav>ul>li').classList.remove("exibirMenu");
	}
	
}