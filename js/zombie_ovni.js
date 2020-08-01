var ZombieOvni = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

ZombieOvni.prototype = Object.create(Enemigo.prototype);
ZombieOvni.prototype.constructor = ZombieOvni;


ZombieOvni.prototype.atacar = function(jugador) {
  jugador.perderVidas(0);
}