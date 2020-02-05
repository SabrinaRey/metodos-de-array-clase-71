const numeros = [6, 1, 34, 94, 3, 17];

const sumaTotal = numeros.reduce((total, num)=> {
    return total +num
})

console.log(sumaTotal)
// deberia mostrar 155

const numerosDos = [6, 1, 34, 94, 3, 17];

const multiplicacion = numerosDos.reduce((producto, nums)=> {
    return producto * nums
})

console.log(multiplicacion)

// deberia mostrar 977976


const notasDeTPs = [4, 7, 8, 5, 10];

const promedio = notasDeTPs.reduce((acc, curr) => {
    return acc + curr
})

console.log(promedio/notasDeTPs.length)
// deberia mostrar 6.8

const librosDeJS = [
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Composing Software',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript: The Good Parts',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    'JavaScript Allongé: The Six Edition'
  ];

  const stringLibros = librosDeJS.reduce((acc, curr)=> {
    return acc + `<li>${curr}</li>`

  }, "")

  console.log(stringLibros)

  const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

  const sumaEdad = personas.reduce((acc, curr) => {
      return acc +curr.edad
  }, 0)

  console.log(sumaEdad)


// deberia mostrar 59


const datos = [2, -4, 6, 0, 5, -1];

const positivos = datos.filter((num)=>{
       if(num >= 0) {
           return num
       }
})

console.log(positivos)

const doblesPositivos = positivos.map((num)=>{
    return num * 2
})
console.log(doblesPositivos)

const total = doblesPositivos.reduce((acc,curr)=>{
    return acc + curr
})
console.log(total)