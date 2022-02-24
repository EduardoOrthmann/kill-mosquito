let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let criaMosquitoTempo = 1500;

let dificuldade = window.location.search;
dificuldade = dificuldade.replace('?', '');

if (dificuldade === 'normal') {
	criaMosquitoTempo = 1500;
} else if (dificuldade === 'dificil') {
	criaMosquitoTempo = 1000;
} else if (dificuldade === 'muito_dificil') {
	criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight;
	largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

// função de cronometro que que ao chegar a 0 sem ter perdido todos
// os corações você ganha o jogo
const cronometro = setInterval(function () {
	tempo -= 1;
	
	if (tempo < 0) {
		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = 'vitoria.html';
	} else {
		document.getElementById('cronometro').innerHTML = tempo;
	}
	
}, 1000);

function posicaoRandom() {
	
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();
		
		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html';
		} else {
			document.getElementById('vida' + vidas).src = 'img/coracao_vazio.png';
			vidas++;
		}
	}
	
	let y = Math.floor(Math.random() * altura) - 90;
	let x = Math.floor(Math.random() * largura) - 90;
	
	y = y < 0 ? 0 : y;
	x = x < 0 ? 0 : x;
	
	const mosquito = document.createElement('img');
	mosquito.src = 'img/mosquito.png';
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
	mosquito.style.left = x + 'px';
	mosquito.style.top = y + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function () {
		this.remove();
	};
	
	document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
	let classe = Math.floor(Math.random() * 3);
	
	switch (classe) {
		case 0:
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}
}

function ladoAleatorio() {
	let classe = Math.floor(Math.random() * 2);
	
	switch (classe) {
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';
	}
}





