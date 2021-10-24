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
      maior = arr1[i];
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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  cat1Distance = Math.abs(cat1Distance);
  cat2Distance = Math.abs(cat2Distance);

  let ratoFoge = 'os gatos trombam e o rato foge'
  if(cat2Distance > cat1Distance)
    return 'cat1'
  else if(cat1Distance === cat2Distance)
    return ratoFoge
  return 'cat2'

}

// Desafio 8
function fizzBuzz(number) {
  let result = [];
  for (let index = 0; index < number.length; index++) {
    let number3 = number[index] % 3 === 0;
    let number5 = number[index] % 5 === 0;
    let numberBoth = number3 && number5;
    switch (true) {
      case numberBoth:
        result.push('fizzBuzz');
        break;      
      case number3:
        result.push('fizz');
        break;
      case number5:
        result.push('buzz');
        break;
      default:
        result.push('bug!');
    }
  }
  return result
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
