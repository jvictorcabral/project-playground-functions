// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ', ' + arr[0];
}

// Desafio 5
function footballPoints(wins, tied) {
  return wins * 3 + tied;
}

// Desafio 6
function highestCount(arr1) {
  let maior = arr1[0];
  let count = 0;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] > maior) {
      maior = arr1[i]
    }
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
