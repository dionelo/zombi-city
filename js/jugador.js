const Jugador = {
	sprite: 'imagenes/auto_rojo_abajo.png',
	x: 130,
	y: 40,
	ancho: 15,
	alto: 30,
	velocidad: 10,
	vidas: 5,

	mover: function(x, y, rotacion) {
		this.x += x
		this.y += y
		switch(rotacion) {
		case 'izq':
			this.sprite = 'imagenes/auto_rojo_izquierda.png'
			this.ancho = 30
			this.alto = 15
			break
		case 'der':
			this.sprite = 'imagenes/auto_rojo_derecha.png'
			this.ancho = 30
			this.alto = 15
			break
		case 'arriba':
			this.sprite = 'imagenes/auto_rojo_arriba.png'
			this.ancho = 15
			this.alto = 30
			break    
		case 'abajo':
			this.sprite = 'imagenes/auto_rojo_abajo.png'
			this.ancho = 15
			this.alto = 30
			break
		}
	},

	perderVidas: function(cantidadDeVidas) {
		this.vidas -= cantidadDeVidas
	},

	explotar: function() {
		this.sprite = 'imagenes/explosion.png'
		this.ancho = 117
		this.alto = 102
	}
}