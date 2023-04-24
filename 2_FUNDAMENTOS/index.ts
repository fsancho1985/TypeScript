// 1 - Numbers
let x: number = 10;

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.6546546

console.log(y)
console.log(typeof y)
console.log(y.toPrecision(4))

// 2 - Strings
const firstName: string = "Francisco"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Sancho"

fullName = firstName + " " + lastName

console.log(typeof fullName)

// 3 - Booleanos
let a: boolean = false
console.log(a)
console.log(typeof a)
a = true
console.log(a)
console.log(typeof a)

// 4 - Inference and annotation
let ann: string = "Teste"
let inf = "Teste2"

// ann = 1
// inf = 1

console.log(inf.charAt(2))

console.log('Testing')
