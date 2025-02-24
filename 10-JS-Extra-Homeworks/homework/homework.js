// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var totalletras = {};
  var totalletra = 0;
  var str = string;
  for (i = 0; i < str.length; i++) {
    letra = str.charAt(i);
    totalletra = str.split('').reduce((acc, ch) => ch === letra ? acc + 1 : acc, 0);
    totalletras[letra] = totalletra;
  }
  return (totalletras);
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevostrmayu = "";
  var nuevostrminu = "";
  var nuevostr = "";

  for (i = 0; i < s.length; i++) {
    letra = s.charAt(i);
    if (s.charAt(i) === letra.toUpperCase()) {
      nuevostrmayu = nuevostrmayu.concat(letra);
    } else {
      nuevostrminu = nuevostrminu.concat(letra);
    }
  }
  nuevostr = nuevostrmayu + nuevostrminu;
  return nuevostr;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevapalabra = "";
  var nuevostr = "";

  palabras = str.split(" ");
  cantpalabra = palabras.length;
  
  for (i = 0; i < cantpalabra; i++) {
    longpalabra = palabras[i].length;
    for (x = longpalabra; x > 0; x--) {
      letra = palabras[i].charAt(x - 1);
      nuevapalabra = nuevapalabra + letra;
      letra = "";
    }
      nuevostr = nuevostr + nuevapalabra + " ";
      nuevapalabra = "";
  }
  return  nuevostr.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var falta = numero
  var numeroInvertido = 0
  var resto = 0

  while (falta != 0) {
    resto = Math.trunc(falta % 10);
    numeroInvertido = Math.trunc(numeroInvertido * 10 + resto);
    falta = Math.trunc(falta / 10);
  }

  if (numeroInvertido === numero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var strnew = "";

  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == "a" || cadena.charAt(i) == "b" || cadena.charAt(i) == "c") {
      continue
    } else {
      strnew = strnew + cadena.charAt(i)
    }
  }
  return strnew;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b) { return a.length - b.length });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  intersecion = [];

  for (i = 0; i < arreglo1.length; i++) {
    busco = arreglo1[i];
    
    if (arreglo2.includes(busco)) {
      intersecion.push(arreglo1[i]);
    }
  }
  return intersecion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

