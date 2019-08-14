var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

var appendKitten = (name) => {
  var newKittens = kittens.push(name);
}

var prependKitten = (name) => {
  var newKittens = kittens.unshift(name);
}

