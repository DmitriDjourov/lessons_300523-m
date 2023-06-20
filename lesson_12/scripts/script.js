// console.log("Hello world!")

// ================= //

// let text = "Hello world!"
/* comment */
// const text = "Hello world!"
// console.log(text)

// ================= //

// model name car 
// let model_name_car = "BMW" // snake_case
// let modelNameCar = "BMW" // camelCase
// let model-name-car = "BMW" // kebab case // error

// let if = "for"
// A-Z a-z 0-9 $ _
// let 0a = "0a" // error
// let _test = "test"
// let $test = "test"

// ================= //

// const greeting = "Hello"
// greeting = "World" // error
// console.log(greeting)

// const stringValue = "text"
// const stringValue = 'text'
// console.log(stringValue)

// const numberValue = 30
// const numberValue = 30.56
// const numberValue = -30.56
// console.log(numberValue)

// ================= //

// const name = "John"
// const lastName = "Doe"
// concatenation
// const fullName = name + " " + lastName
// "John" + "Doe" = "JohnDoe" // "John" + " " + "Doe" = "John Doe"

// interpolation
// Hello John Doe
// const fullName = `Hello ${name} ${lastName}`
// console.log(fullName)

// number
// const numFirst = 5
// const numSecond = 10
// const sum = numFirst + numSecond
// console.log(sum)

// ================= //
// const numFirst = 5
// const numSecond = 12
// console.log(numFirst + numSecond) // сложение
// console.log(numFirst - numSecond) // вычитание
// console.log(numFirst * numSecond) // умножение
// console.log(numSecond / numFirst) // деление
// console.log(numSecond % numFirst) // остаток от деления // 12 / 5 = 2 (2) | 2 * 5 + 2 = 12
// console.log(numFirst ** numSecond) // возведение в степень

// ================= //
// const userName = prompt("Введите своё имя")
// console.log(`Hello ${userName}`)

// ================= //
const numFirst = 12
const numSecond = 5
if (numFirst < numSecond) {
    console.log("numFirst меньше numSecond")
} else if (numFirst > numSecond) {
    console.log("numSecond меньше numFirst")
} else {
    console.log("равны")
}