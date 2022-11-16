prompt = require('prompt-sync');
var labirinto = [
  [99, 99, 99, 99, 99, 33, 44, 99, 99, 99, 99, 99, 99, 44, 44, 99, 99, 99, 99, 99],
  [99, 88, 44, 44, 44, 44, 44, 44, 44, 44, 44, 88, 44, 44, 44, 44, 44, 44, 44, 99],
  [99, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 99],
  [99, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 88, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 88, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 88, 99, 99, 44, 88, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 88, 44, 99, 99, 44, 44, 44, 88, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 44, 44, 44, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 77, 99],
  [99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 77, 99],
  [99, 44, 44, 99, 99, 77, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 99, 99, 77, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99, 99, 44, 44, 99],
  [99, 44, 44, 88, 44, 44, 44, 44, 44, 44, 44, 44, 88, 44, 44, 44, 44, 44, 44, 99],
  [99, 88, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 88, 99],
  [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99],
  [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
]

var clc = require("cli-color");   
var contador = 0;
var compra = 0;

function colorir(text) {
  if(text == 99 ) {
    return clc.bgGreen	('   ');  
  } else if (text == 77) {
     return clc.bgRed( '   ');
  } else if (text == 44) {
     return clc.bgWhite( '   ');
  }  else if (text == 88) {
     return clc.bgBlue(' $ '); 
  } else {
    return clc.	bgBlueBright(' 😊');
  }
  }

function mostrarLabirinto() {
  console.clear();
for (let linha of labirinto) {
  var linhaFormatada = []
  for (let item of linha ) {
    linhaFormatada.push(colorir(item));
  }
console.log(linhaFormatada.toString().replaceAll(',',''));
  }
}
var x = 0;
var y = 5;

function desce() {
  if(labirinto[x + 1][y] == 88){
    compra++
  }
  if(labirinto[x + 1][y] !== 77 && labirinto[x + 1][y] !== 99) {
  labirinto[x][y] = 44 
  x = x + 1;
 labirinto[x][y] = 33
    contador++
  }
}

function sobe() {
  if(labirinto[x - 1][y] == 88){
    compra++
  }
  if(labirinto[x - 1][y] !== 99 && x - 1 > 0 && labirinto[x - 1][y] !== 77 ) {
    labirinto[x][y] = 44
    x = x - 1;
    labirinto[x][y] = 33
    contador++
  }
}

 function direita() {
  if(labirinto[x][y + 1] == 88){
     compra++
  }
  if(labirinto[x][y + 1] !== 99 && labirinto[x][y + 1] !== 77 ){
labirinto[x][y] = 44
  y = y + 1;
  labirinto[x][y] = 33
  contador++
  }
}

function esquerda() {
  if(labirinto[x][y - 1] == 88){
    compra++
  }
  if(labirinto[x][y - 1] !== 99 && y - 1 >= 0 && labirinto[x][y - 1] !== 77 ){
   labirinto[x][y] = 44
    y = y - 1;
    labirinto[x][y] = 33
    conta
