// function printHello(username) {
//     console.log(`Hello ${username}`)
// }

// function printBye(username) {
//     console.log(`Bye ${username}`)
// }

// function printHowAreYou(username) {
//     console.log(`How are you ${username}`)
// }

// function doWithUser(username, callback) {
//     callback(username)
//     console.log(callback)
// }

// doWithUser("John", printHello)
// doWithUser("John", printBye)
// doWithUser("Anna", printHowAreYou)
// ================ tasks ================

// Совместно с преподавателем:
// Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в  качестве второго функцию и вызывает принятую функцию для каждого элемента массива.

// function forEach(arr, callback) { // 2
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]) // 3
//     }
// }

// function callbackForArr(elem) { // 4
//     if (elem >= 0) {
//         console.log(elem)
//     }
// }

// function pow(elem) {
//     console.log(elem**2)
// }

// const arr = [5, 68, -85, 0, 14, -6, 52]
// forEach(arr, callbackForArr) // 1
// forEach(arr, pow)

// ================ addeventlistener ================
// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка. Жмак.

// const btn = document.querySelector("button")
// function clickHandler() {
//     console.log("Clicked")
// }
// btn.addEventListener("click", clickHandler)

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.
// const btn = document.querySelector("button")
// const pCounter = document.querySelector(".counter")
// let counter = 0
// pCounter.innerText = counter
// function incr() { // 2
//     counter = counter + 1
//     pCounter.innerText = counter
// }

// btn.addEventListener("click", incr) // 1

// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на плюс в консоль выводится число, увеличивающееся на 1, а при нажатии на минус - уменьшившееся на 1.
// 1 - создать кнопку с названием plusBtn
// 2 - к кнопке plusBtn добавить обработчик события для клика
// 3 - при нажатии на plusBtn передать callback функцию которая увеличивает значение счетчика на 1 и выводит в консоли
// 4 - создать кнопку с названием minusBtn
// 5 - к кнопке minusBtn добавить обработчик события для клика
// 6 - при нажатии на minusBtn передать callback функцию которая уменьшает значение счетчика на 1 и выводит в консоли
// 7 - добавить эти кнопки в body
// let counter = 0
// function incr() {
//     counter++
//     console.log(counter)
// }
// function decr() {
//     counter--
//     console.log(counter)
// }
// const plusBtn = document.createElement("button")
// plusBtn.innerText = "Plus"
// plusBtn.addEventListener("click", incr)
// const minusBtn = document.createElement("button")
// minusBtn.innerText = "Minus"
// minusBtn.addEventListener("click", decr)
// document.body.append(plusBtn, minusBtn)

// ================ event ================
// const btn = document.querySelector("button")
// function clickHandler(event) {
//     console.log("Clicked")
//     console.log(event)
// }
// btn.addEventListener("click", clickHandler)

// Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв их в параграф. Для решения этой задачи понадобится использование объекта event.
const pElem = document.querySelector("pre")
document.addEventListener("keydown", function(event) {
    console.log(event)
    pElem.innerText += event.key
})

// function add(callback) {
//     const obj = {
//         name: "John",
//         surname: "Smtih"
//     }

//     callback(obj)
// }

// add(function(param) {
//     console.log(param);
// })