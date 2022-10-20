// Write your solution here!
const cats = [];
cats [0] = "Milo";
cats [1] = "Otis";
cats [2] = "Garfield";

function destructivelyAppendCat() {
cats.push("Ralph");
return cats
}

function destructivelyPrependCat() {
cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
  }

function prependCat(name) {
    // cats.unshift(name);
    var newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
//  cats.slice();
 var newArray = cats.slice();
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
// cats.shift();
var newArray = cats.slice();
newArray.shift();
return newArray;
}