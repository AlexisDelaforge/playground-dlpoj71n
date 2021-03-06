﻿let exercice = require('./vitesse_lumiere.js');
let assert = require('assert');

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(arraysEqual(exercice.vitesseLumiere.apply(null, test.values), test.answer)){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


try {
  assert.equal(success, tests.length);
  printMessage('Standard Output', 'C\'est une réussite ! ');
  success++;
} catch (error) {
  printMessage('Standard Output💡', 'Encore un petit effort.🤔');
  console.log('\nTECHIO> success false')
  console.error("Tous les tests ne sont pas justes !");
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[110,400,600],
      answer:vitesseLumiereAnswer(110,400,600)
    },
    {
      name:"Test 1",
      values:[147,440,659],
      answer:vitesseLumiereAnswer(147,440,659)
    },
    {
      name:"Test 2",
      values:[560,529,575],
      answer:vitesseLumiereAnswer(560,529,575)
    },
    {
      name:"Test 3",
      values:[580,553,562],
      answer:vitesseLumiereAnswer(580,553,562)
    },
    {
      name:"Test 4",
      values:[193,340,468],
      answer:vitesseLumiereAnswer(193,340,468)
    },
    {
      name:"Test 5",
      values:[560,538,590],
      answer:vitesseLumiereAnswer(560,538,590)
    },
    {
      name:"Test 6",
      values:[305,357,456],
      answer:vitesseLumiereAnswer(305,357,456)
    },
    {
      name:"Test 7",
      values:[411,493,536],
      answer:vitesseLumiereAnswer(411,493,536)
    },
    {
      name:"Test 8",
      values:[557,548,585],
      answer:vitesseLumiereAnswer(557,548,585)
    },
    {
      name:"Test 9",
      values:[293,305,583],
      answer:vitesseLumiereAnswer(293,305,583)
    }
  ]

  return tests;
}

function vitesseLumiereAnswer(x, y, z)
{
  let i = 0
  while ((10*x)>y && i<=10000){
    i++;// ++ permet de rajouter 1 a la valeur de I//
    x=(y*z)%10000;
    y=(3*z)%10000;
    z=(7*z)%10000;
  }
  if (i>10000){
    x=-1;
    y=-1;
    z=-1;
  }
  return [x, y, z];
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
