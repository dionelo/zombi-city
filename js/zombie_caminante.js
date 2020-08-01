const ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov)
}

ZombieCaminante.prototype = Object.create(Enemigo.prototype)
ZombieCaminante.prototype.constructor = ZombieCaminante


