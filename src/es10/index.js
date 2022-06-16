let array1 = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

//nivel de profundidad, método que nos permite aplanar arreglos
console.log(array1.flat(1));

let array = [1, 2, 3, 4, 5];
//lo mismo que flat con el beneficio de que primero manipula la data para luego aplanar
console.log(array.flatMap((value) => [value, value * 2]));

let hello = "         hello World       ";
console.log(hello);
//permite quitar los espacios al inicio o final dependiendo de la funcion
console.log(hello.trimStart());
console.log(hello.trimEnd());

// ahora puedes utilizarlo sin necesidad de especificar como cath(error) sino directamente usarlo en el scope del catch
try {
} catch {
  error;
}

let entries = [
  ["name", "oscar"],
  ["age", 32],
];
// podemos convertir una matriz clave/valor a un objeto
console.log(Object.fromEntries(entries));

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
//permite regresar la descripcion opcaional del symbol
console.log(symbol.description);
