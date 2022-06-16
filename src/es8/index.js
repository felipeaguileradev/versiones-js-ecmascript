//TRANSFORMACIONES
const data = {
  frontend: "Felipe",
  backend: "Dante",
  design: "Matias",
};
//genera una matris con un objeto
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
  frontend: "Felipe",
  backend: "Dante",
  design: "Matias",
};
//traer los valores
const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding
const string = "hello";
console.log(string.padStart(7, "h"));
console.log(string.padEnd(12, "-"));

//trailing-comas, al final de un objeto se puede colocar una coma, esto significa que puede haber un valor o no

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
