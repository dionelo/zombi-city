var ZombieCamionero = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
}

ZombieCamionero.prototype = Object.create(Enemigo.prototype);
ZombieCamionero.prototype.constructor = ZombieCamionero;
ZombieCamionero.prototype.mover = function() {

	if (this.direccion == 'izquierda' && this.x > this.rangoMov.desdeX) {
		this.x -= this.velocidad;
  } else if (this.direccion == 'izquierda') {
    this.direccion = 'abajo';
    this.sprite = 'imagenes/camion_abajo.png';
    this.ancho = 40;
    this.alto = 156;
  }

  if (this.direccion == 'abajo' && this.y < this.rangoMov.hastaY) {
    this.y += this.velocidad;
  } else if (this.direccion == 'abajo') {
    this.direccion = 'derecha';
    this.sprite = 'imagenes/camion_derecha.png';
    this.ancho = 156;
    this.alto = 40;
  }

  if (this.direccion == 'derecha' && this.x < this.rangoMov.hastaX) {
    this.x += this.velocidad;
  } else if (this.direccion == 'derecha') {
    this.direccion = 'arriba';
    this.sprite = 'imagenes/camion_arriba.png';
    this.ancho = 40;
    this.alto = 156;
  }

  if (this.direccion == 'arriba' && this.y > this.rangoMov.desdeY) {
    this.y -= this.velocidad;
  } else if (this.direccion == 'arriba') {
    this.direccion = 'izquierda';
    this.sprite = 'imagenes/camion_izquierda.png';
    this.ancho = 156;
    this.alto = 40;
  }


}

ZombieCamionero.prototype.atacar = function(jugador) {
	jugador.perderVidas(Juego.vidasInicial);
}