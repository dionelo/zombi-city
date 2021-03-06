const ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  	Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov)
	this.direccion = direccion
}

ZombieConductor.prototype = Object.create(Enemigo.prototype)
ZombieConductor.prototype.constructor = ZombieConductor

ZombieConductor.prototype.mover = function() {
	if (this.direccion == 'v') {
		this.y += this.velocidad
  	} else if (this.direccion == 'h') {
		this.x -= this.velocidad
	}

	if ((this.y > this.rangoMov.desdeY) || (this.x < this.rangoMov.hastaX)){
    	this.velocidad *= -1
  	}

  	if ((this.y < this.rangoMov.hastaY) || (this.x > this.rangoMov.desdeX)) {
    	this.velocidad *= -1
  	}
}

ZombieConductor.prototype.atacar = function(jugador) {
	jugador.perderVidas(Juego.vidasInicial)
}