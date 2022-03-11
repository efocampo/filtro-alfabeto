/**
 * Dada una cadena formada sólo por caracteres en minúscula, 
 * crea dos métodos que filtren todas las consonantes y vocales de la 
 * palabra dada conservando el orden original de los caracteres en el resultado.
 * @author Efren Ocampo <efocampo@gmail.com.com>
 * 
 */

//Ejecución de programa principal
var strValorInicial = 'funeraria jaramillo';

//var strValorInicial = '545454_!#{aan@'.toLowerCase();

var retornoVocales = filtrarCadenaVocales(strValorInicial);
var retornoConsonantes = filtrarCadenaConsonantes(strValorInicial);

console.log(`Retorno método filtro de vocales= ${retornoVocales.length > 0? retornoVocales: 'No se encontraron vocales'}`);
console.log(`Retorno método filtro de consonantes= ${retornoConsonantes.length>0?retornoConsonantes:'No se encontraron consonantes'}`);



/**
 * Función que extrae las consonantes de un texto en orden
 * Ej. Retorna 'fnrrjrmll' para la cadena 'funeraria jaramillo'
 * @param {*} cadena 
 * @returns 
 */
function filtrarCadenaConsonantes(cadena) {
    //Excluye vocales,espacios, caracteres especiales, números
    return cadena.replace( /[aeiou]/ig, '' ).replace(/\s+/g, '')
        .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, '')
        .replace(/[0-9]/g, '');
}

/**
 * Función que extrae las vocales de un texto en orden
 * Ej. Retorna 'ueaiaaaio' para la cadena 'funeraria jaramillo'
 * @param {String} cadena 
 * @returns {String}
 */
function filtrarCadenaVocales(cadena) {
    var strArr = cadena.split('');
    var strResultado = '';

    //Extrae las vocales y concatena el resultado en la respuesta
    for (var x = 0; x < cadena.length; x++) {
      var char = strArr[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        strResultado += strArr[x];
      }
    }
    return strResultado;
  }