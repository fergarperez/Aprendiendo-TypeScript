let a = "Hola"

// Funciones

function hola(name: string) {
  console.log("Hola" + name)
}

function object({ name, age }: { name: string, age: string }) {
  console.log("Hola" + name, "Tienes" + age + "Años")
}

// 2a forma

// No hace falta tipar la func, ya lo hace directamente
function object2(persona: { name: string, age: string }): string  {
  console.log("Hola" + persona.name, "Tienes" + persona.age + "Años")
  return persona.name
}

// Los metodos de los arrays, saben los typos que tiene cada elemento

const array = ["1", "1"]

array.forEach(item => {
  // sabe que item es un string
})

// Type Alias

type Persona = {
  name: string,
  age: number,
  readonly isActive?: boolean // Esto significa que es una propiedad opcional
  // readonly es como un const, una vez definido no puede ser mutado
}

function createPerson(name: string, age: number): Persona {
  return { name, age }
}

// Union types, puede ser un string o un number 
const b: string | number;

// Arrays

const arr: string[] = []
const lang: (string | number)[] = ["hola", 2]
