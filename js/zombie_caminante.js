/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */

var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
  necesarios */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */
ZombieCaminante.prototype = Object.create(Enemigo.prototype);
ZombieCaminante.prototype.constructor = ZombieCaminante;


