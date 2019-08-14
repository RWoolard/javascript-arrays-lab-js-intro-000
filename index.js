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
  var newKittens = [...kittens, name];
  return newKittens;
}

var prependKitten = (name) => {
  var newKittens = [name, ...kittens];
  return newKittens;
}

var removeLastKitten = () => {
  var newKittens = kittens;
  return newKittens.pop();
}

var removeFirstKitten = () => {
  var newKittens = kittens;
  return newKittens.shift();
}