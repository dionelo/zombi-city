const Juego = {
	anchoCanvas: 961,
	altoCanvas: 577,
	jugador: Jugador,
	vidasInicial: Jugador.vidas,
	// Si el jugador gano
	ganador: false,

	obstaculosCarretera: [
		// Vallas
		new Obstaculo('imagenes/valla_horizontal.png', 170, 370, 30, 30, 1),
		new Obstaculo('imagenes/valla_horizontal.png', 140, 370, 30, 30, 1),
		new Obstaculo('imagenes/valla_horizontal.png', 820, 190, 30, 30, 1),
		new Obstaculo('imagenes/valla_horizontal.png', 850, 190, 30, 30, 1),
		new Obstaculo('imagenes/valla_horizontal.png', 280, 130, 30, 30, 1),
		new Obstaculo('imagenes/valla_vertical.png', 700, 120, 30, 30, 1),
		new Obstaculo('imagenes/valla_vertical.png', 385, 200, 30, 30, 1),
		new Obstaculo('imagenes/valla_vertical.png', 480, 480, 30, 30, 1),
		new Obstaculo('imagenes/valla_vertical.png', 480, 450, 30, 30, 1),
		// Baches
		new Obstaculo('imagenes/bache.png', 130, 200, 30, 30, 1),
		new Obstaculo('imagenes/bache.png', 765, 430, 30, 30, 1),
		new Obstaculo('imagenes/bache.png', 300, 240, 30, 30, 1),
		new Obstaculo('imagenes/bache.png', 330, 480, 30, 30, 1),
		new Obstaculo('imagenes/bache.png', 500, 75, 30, 30, 1),
		// Auto verde
		new Obstaculo('imagenes/auto_verde_abajo.png', 545, 240, 15, 30, 2),
		new Obstaculo('imagenes/auto_verde_derecha.png', 350, 385, 30, 15, 2),
		new Obstaculo('imagenes/auto_verde_derecha.png', 800, 85, 30, 15, 2),
		new Obstaculo('imagenes/auto_verde_derecha.png', 400, 130, 30, 15, 2)
	],

	bordes: [
		// Bordes
		new Obstaculo('', 0, 5, 961, 18, 0),
		new Obstaculo('', 0, 559, 961, 18, 0),
		new Obstaculo('', 0, 5, 18, 572, 0),
		new Obstaculo('', 943, 5, 18, 572, 0),
		// Veredas
		new Obstaculo('', 18, 23, 51, 536, 2),
		new Obstaculo('', 69, 507, 690, 52, 2),
		new Obstaculo('', 587, 147, 173, 360, 2),
		new Obstaculo('', 346, 147, 241, 52, 2),
		new Obstaculo('', 196, 267, 263, 112, 2),
		new Obstaculo('', 196, 23, 83, 244, 2),
		new Obstaculo('', 279, 23, 664, 56, 2),
		new Obstaculo('', 887, 79, 56, 480, 2)
	],
  
	enemigos: [
		new ZombieCaminante('imagenes/zombie1.png', 70, 256, 10, 10, 1, {desdeX: 10, hastaX: 800, desdeY: 200, hastaY: 600}),
		new ZombieCaminante('imagenes/zombie2.png', 550, 456, 15, 15, 0.5, {desdeX: 400, hastaX: 600, desdeY: 100, hastaY: 600}),
		new ZombieCaminante('imagenes/zombie3.png', 320, 156, 14, 14, 1, {desdeX: 30, hastaX: 420, desdeY: 100, hastaY: 500}),
		new ZombieCaminante('imagenes/zombie4.png', 610, 311, 11, 11, 0.5, {desdeX: 400, hastaX: 810, desdeY: 300, hastaY: 600}),
		new ZombieCaminante('imagenes/zombie1.png', 180, 543, 13, 13, 1.5, {desdeX: 20, hastaX: 700, desdeY: 200, hastaY: 550}),
		new ZombieCaminante('imagenes/zombie2.png', 220, 472, 12, 12, 1, {desdeX: 100, hastaX: 600, desdeY: 50, hastaY: 600}),
		new ZombieCaminante('imagenes/zombie3.png', 90, 256, 10, 10, 1.5, {desdeX: 30, hastaX: 620, desdeY: 100, hastaY: 500}),
		new ZombieCaminante('imagenes/zombie4.png', 510, 55, 10, 10, 2, {desdeX: 100, hastaX: 810, desdeY: 50, hastaY: 500}),
		new ZombieConductor('imagenes/tren_horizontal.png', 500, 322, 90, 30, 5, {desdeX: 850, hastaX: 20, desdeY: 322, hastaY: 322}, 'h'),
		new ZombieConductor('imagenes/tren_vertical.png', 644, 100, 30, 90, 3, {desdeX: 644, hastaX: 644, desdeY: 500, hastaY: 10}, 'v'),
		new ZombieConductor('imagenes/tren_vertical.png', 678, 0, 30, 90, 4, {desdeX: 678, hastaX: 678, desdeY: 300, hastaY: 0}, 'v'),
		new ZombieConductor('imagenes/auto_verde_derecha.png', 790, 400, 30, 15, 2.5, {desdeX: 760, hastaX: 860, desdeY: 400, hastaY: 400}, 'h'), 
		new ZombieCamionero('imagenes/camion_izquierda.png', 400, 90, 156, 40, 2.5, {desdeX: 70, hastaX: 500, desdeY: 90, hastaY: 400}, 'izquierda'),
		new ZombieOvni('imagenes/plato.png', 700, 372, 50, 27, 1, {desdeX: 650, hastaX: 900, desdeY: 50, hastaY: 400})
	]

}

// Se cargan los recursos de las imagenes
Juego.iniciarRecursos = function() {
	Resources.load([
		'imagenes/mapa.png',
		'imagenes/mensaje1.png',
		'imagenes/mensaje2.png',
		'imagenes/mensaje_gameover.png',
		'imagenes/Splash.png',
		'imagenes/bache.png',
		'imagenes/tren_horizontal.png',
		'imagenes/tren_vertical.png',
		'imagenes/valla_horizontal.png',
		'imagenes/valla_vertical.png',
		'imagenes/zombie1.png',
		'imagenes/zombie2.png',
		'imagenes/zombie3.png',
		'imagenes/zombie4.png',
		'imagenes/auto_rojo_abajo.png',
		'imagenes/auto_rojo_arriba.png',
		'imagenes/auto_rojo_derecha.png',
		'imagenes/auto_rojo_izquierda.png',
		'imagenes/auto_verde_abajo.png',
		'imagenes/auto_verde_derecha.png',
		'imagenes/plato.png',
		'imagenes/camion_arriba.png',
		'imagenes/camion_abajo.png',
		'imagenes/camion_izquierda.png',
		'imagenes/camion_derecha.png', 
		'imagenes/explosion.png'
	])
	Resources.onReady(this.introduccion.bind(Juego))
}

// Agregar los bordes de las veredas a los obstaculos de la carretera
Juego.obstaculos = function() {
  	return this.obstaculosCarretera.concat(this.bordes)
}

Juego.introduccion = function() {
	const boton = document.getElementById('boton')
	Dibujante.inicializarCanvas(this.anchoCanvas, this.altoCanvas)
	Dibujante.dibujarImagen('imagenes/mensaje1.png', 0, 5, 961, 577)
	boton.style.visibility = 'visible'
	continuar = function() {
		Dibujante.borrarAreaDeJuego()
		Dibujante.dibujarImagen('imagenes/mensaje2.png', 0, 5, 961, 577)
		boton.value = '< Jugar >'
		boton.setAttribute('onclick', 'Juego.comenzar()')
	} 
}

Juego.comenzar = function() {
	document.getElementById('boton').style.visibility = 'hidden'
	Dibujante.inicializarCanvas(this.anchoCanvas, this.altoCanvas)
	this.buclePrincipal()
}

Juego.buclePrincipal = function() {
	this.update()
	this.dibujar()
	window.requestAnimationFrame(this.buclePrincipal.bind(this))
}

Juego.update = function() {
  	this.calcularAtaques()
  	this.moverEnemigos()
}

Juego.capturarMovimiento = function(tecla) {
	let movX = 0
	let movY = 0
	let velocidad = this.jugador.velocidad
	let rotacion = tecla

  	// El movimiento esta determinado por la velocidad del jugador
  	if (tecla == 'izq') {
    	movX = -velocidad
  	}
	if (tecla == 'arriba') {
		movY = -velocidad
	}
	if (tecla == 'der') {
		movX = velocidad
	}
	if (tecla == 'abajo') {
		movY = velocidad
	}

	if (this.chequearColisiones(movX + this.jugador.x, movY + this.jugador.y)) {
		this.jugador.mover(movX, movY, rotacion);
	}
}

Juego.dibujar = function() {
	Dibujante.borrarAreaDeJuego()
	this.dibujarFondo()

	if(!this.ganador){
		Dibujante.dibujarEntidad(Jugador);
		//this.elFin();

		this.obstaculosCarretera.forEach(function(obstaculo) {
			Dibujante.dibujarEntidad(obstaculo)
		})

		this.enemigos.forEach(function(enemigo) {
			Dibujante.dibujarEntidad(enemigo)
		})

		// Linea de llegada
		Dibujante.dibujarRectangulo('red', 765, 500, 117, 6)

		// Vida del jugador
		let tamanio = this.anchoCanvas / this.vidasInicial
		Dibujante.dibujarRectangulo('white', 0, 0, this.anchoCanvas, 8)
		for (let i = 0; i < this.jugador.vidas; i++) {
			let x = tamanio * i
			Dibujante.dibujarRectangulo('red', x, 0, tamanio, 8)
		}
	}
}

Juego.moverEnemigos = function() {
	this.enemigos.forEach(function(enemigo) {
		enemigo.mover()
	})
}

Juego.calcularAtaques = function() {
	this.enemigos.forEach(function(enemigo) {
		if (this.intersecan(enemigo, this.jugador, this.jugador.x, this.jugador.y)) {
			enemigo.comenzarAtaque(this.jugador)
		} else {
			enemigo.dejarDeAtacar()
		}
	}, this)
}

Juego.chequearColisiones = function(x, y) {
	let puedeMoverse = true
	this.obstaculos().forEach(function(obstaculo) {
		if (this.intersecan(obstaculo, this.jugador, x, y)) {
			obstaculo.chocar()
			puedeMoverse = false
		}
	}, this)
	return puedeMoverse
}

/* Este metodo chequea si los elementos 1 y 2 si cruzan en x e y
 x e y representan la coordenada a la cual se quiere mover el elemento2*/
Juego.intersecan = function(elemento1, elemento2, x, y) {
	const izquierda1 = elemento1.x
	const derecha1 = izquierda1 + elemento1.ancho
	const techo1 = elemento1.y
	const piso1 = techo1 + elemento1.alto
	const izquierda2 = x
	const derecha2 = izquierda2 + elemento2.ancho
	const techo2 = y
	const piso2 = y + elemento2.alto

	return ((piso1 >= techo2) && (techo1 <= piso2) &&
		(derecha1 >= izquierda2) && (izquierda1 <= derecha2))
}

Juego.dibujarFondo = function() {
	const boton = document.getElementById('boton')
	// Mensaje de game over
	if (this.terminoJuego()) {
		Jugador.explotar()
		Dibujante.dibujarImagen('imagenes/mapa.png', 0, 5, this.anchoCanvas, this.altoCanvas) 
		setTimeout(function() {
		boton.value = '< Perdiste amiguito, pero podes jugar de nuevo. >'
		boton.setAttribute('onclick', 'window.location.reload()')
		boton.style.visibility = 'visible'
		}, 5000) 
	}
	// Mensaje de gano el juego
	else if (this.ganoJuego()) {
		this.ganador = true
		Dibujante.dibujarImagen('imagenes/Splash.png', 190, 113, 500, 203)
		boton.value = '< Ganaste. Re bien. Todos tus problemas estan resueltos. >'
		boton.setAttribute('onclick', 'window.location.reload()')
		boton.style.visibility = 'visible'
	} else {
    	Dibujante.dibujarImagen('imagenes/mapa.png', 0, 5, this.anchoCanvas, this.altoCanvas)
  	}
}

Juego.terminoJuego = function() {
  	return this.jugador.vidas <= 0
}

Juego.ganoJuego = function() {
  	return (this.jugador.y + this.jugador.alto) > 530
}

Juego.iniciarRecursos()

// Activa las lecturas del teclado al presionar teclas
document.addEventListener('keydown', function(e) {
	const allowedKeys = {
		37: 'izq',
		38: 'arriba',
		39: 'der',
		40: 'abajo'
	}
	Juego.capturarMovimiento(allowedKeys[e.keyCode])
})
