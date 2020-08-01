const Enemigo = function (sprite, x, y, ancho, alto, velocidad, rangoMov) {
	this.sprite = sprite
	this.x = x
	this.y = y
	this.ancho = ancho
	this.alto = alto
	this.velocidad = velocidad
	this.rangoMov = rangoMov
	this.atacando = false
}

Enemigo.prototype.mover = function() {
	if (Math.random() < 0.5) {
		this.x -= this.velocidad
		this.y -= this.velocidad
	} else {
		this.y += this.velocidad
		this.x -= this.velocidad
	}

	if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
		this.velocidad *= -1
	}
  
	if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
		this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2
	}
}

Enemigo.prototype.atacar = function (jugador) {
	jugador.perderVidas(1)
}

Enemigo.prototype.comenzarAtaque = function (jugador) {
	if (!this.atacando) {
		this.atacar(jugador)
	}
	this.atacando = true
}

Enemigo.prototype.dejarDeAtacar = function () {
 	this.atacando = false
}