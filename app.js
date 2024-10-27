function fibonacci(x, x1 = 0, x2 = 1, count = 0) {
  //  x = aquí se define el numero de veces que se imprime la serie
  //  x1 = 1er número de la secuencia '0'
  //  x2 = 2do número de la secuencia '1'
  //  count = contador inicializado a 0, se incrementa en cada llamada recursiva
  //
  // si el contador es mayor a x la función se termina
  if (count > x) {
    return
  }
  //
  // Imprimir el primer valor de la secuencia
  console.log('Fibonacci ' + count + ': ' + x1)
  //
  //Aplicando la recursividad
  fibonacci(x, x2, x1 + x2, count + 1)
  // x = x
  // x2 = x1
  // x1 + x2 = x2(suma de los dos numeros anteriores)
  // count = se incrementa  en 1
}

// fibonacci(8)
// siguiendo la logica implementada, la secuencia de seria esta:
//  8-0-1-0
//  8-1-1-1
//  8-1-2-2
//  8-2-3-3
//  8-3-5-4
//  8-5-8-5
//  8-8-13-6
//  8-13-21-7
//  8-21-34-8
//
//  tener en cuenta que en la consola solo se mostrara el valor de x1
//  0,1,1,2,3,5,8,13,21

function numeroPrimo(x, divisor = 2) {
  // 1ra condición: retornara false dado que los numeros o iguales a 1 no son primos
  if (x <= 1) {
    return false
    // 2da condición: si x es igual al (divisor = 2) retornara true
    // esto porque x no es divisible por ningun numero menor que el mismo
  } else if (x === divisor) {
    return true
    // 3ra condición: si x es divisible por el divisor sin dejar residuo(division del %(modulo))
    // retorna false dado que x tiene un divisor adicionar aparte de 1 y el mismo.
  } else if (x % divisor === 0) {
    return false
    // 4ta condición: si el cuadrado(multiplicación de divisor * divisor) es mayor que x
    // retorna true dado que no se ha encontrado divisores menores o iguales a la raiz cuadrada
    // de x.
  } else if (divisor * divisor > x) {
    return true
    // recursividad: si ninguno de las condiciones anteriores se cumple, la función se llama a síó misma
    // incrementando el divisor en 1 y corrobora de nueco si x es divisible por el nuevo divisor
  } else {
    return numeroPrimo(x, divisor + 1)
  }
}


// para importar este modulo realizar:
// 1-) npm install readline-sync
// 2-) npm init -y : esto genera el archivo package.json en nuestro directorio
// 3-) acceder al archivo package.json y agregar el modulo despues de la linea main:
//      "type": "module"
// 4-) agregar la dependencia:
//    "dependencies":{
//      "readline-sync": "^1.4.10"
//    }
// 5-) npm install para instalr las dependencias
import readlineSync from 'readline-sync'

let opcion
do {
  console.log('********** Menu de opciones **********')
  console.log('+-------------------------------------+')
  console.log('| 1. Secuencia de Fibonacci           |')
  console.log('| 2. Verificar si un numero es primo  |')
  console.log('| 3. Salir                            |')
  console.log('+-------------------------------------+')
  // usamos el modulo importado con el atributo question
  opcion = readlineSync.question('Seleccione una opcion del menu: ')
  // usamos switch para dar dinamismo al menu de opciónes
  switch (opcion) {
    // en el caso 1 definimos una nueva variable para capturar el numero de la secuencia a realizar
    case '1':
      const sFibonacci = readlineSync.question(
        'Ingrese el numero para calcular la secuencia fibonacci: '
      )
      // mostramos el resultado usando la interpolacion
      console.log(
        `Serie fibonacci del ${sFibonacci} es ${fibonacci(parseInt(sFibonacci))}`
      )
      break
    // en el caso 2  definimos una variable para captura capturar el numero a verificar
    case '2':
      const nPrimo = readlineSync.question(
        'Ingrese el numero para  verficar si es primo: '
      )
      // definimos una nueva variable de nombre resultado, usando interpolación y operador ternario
      // nos paoyamos para mostrar si es primo o no es primo
      const resultado = numeroPrimo(parseInt(nPrimo)) ? 'es primo' : 'no es primo'
      console.log(`El numero ${nPrimo} ${resultado}`)
      break
    case '3':
      console.log('Saliendo del programa...')
      break
    default:
      console.log('La opcion ingresada no es valida, presione enter para continuar...')
      readlineSync.question()
      break;
  }
} while (opcion != 3);
