function newFuntion(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

//es6 valores por defecto
function newFuntion2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
//es6 concatenar
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit, \n neque molestias velit cumque quod veniam laborum illo cum eius magnam perspiciatis\n, laboriosam eum incidunt dolorem aperiam amet reiciendis? Molestiae.";
//es6 multilínea
let lorem2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Natus quaerat soluta alias distinctio ab aspernatur? Deserunt eum aliquam
  fugit, iure, dignissimos mollitia itaque natus omnis beatae quibusdam, cum esse eaque?`;
console.log(lorem2);

let person = {
  name: "oscar",
  age: 32,
  country: "MX",
};
console.log(person.name, person.age, person.country);

//es6 desestructuración
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["oscar", "julian", "ricardo"];
let team2 = ["valeria", "yesica", "camila"];
//operador de propagacion, spread Operator
let education = ["david", ...team1, ...team2];
console.log(education);

{
  var global = "global var";
}

{
  let globalLet = "global Let";
  console.log(globalLet);
}

console.log(global);

const a = "b";
// a = 'a'
console.log(a);

let name = "felipe";
let age = 28;
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

const names = [
  {
    name: "felipe",
    age: 28,
  },
  {
    name: "Yesica",
    age: 22,
  },
];

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfName2 = names.map((item) => console.log(item.name));

const listOfName3 = (name, age, country) => {
  //codigo a usar
};

const listOfName4 = (name) => {
  //...
};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("HEy");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 3));

import hello from "./module";
console.log(hello());

//generator
function* helloWorld() {
  if (true) {
    yield "hello";
  }
  if (true) {
    yield "world";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
