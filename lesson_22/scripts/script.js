// const pElem = document.querySelector("p")
// console.log(pElem.classList) // print all classes
// pElem.classList.remove("second_class") // remove second_class
// pElem.classList.add("third_class") // add new class third_class
// console.log(pElem.classList.contains("first_class")) // check if class exists
// pElem.classList.toggle("test_class") // if exists remove class, not exists add class

// const pElem = document.createElement("p") // <p></p>
// pElem.classList.add("first_class") // <p class="first_class"></p>
// document.body.append(pElem)

// ============== tasks ==============
// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
// const numberCardsDiv = document.querySelector(".number_cards")
// for (let i = 0; i < 10; i++) {
//     const cardDiv = document.createElement("div") // <div></div>
//     cardDiv.innerText = i // <div>{i}</div>
//     cardDiv.classList.add("card") // <div class="card">{i}</div>
//     numberCardsDiv.append(cardDiv)
//     cardDiv.addEventListener("click", function () {
//         // cardDiv.classList.add("active") // on click add class active
//         cardDiv.classList.toggle("active")
//     })
// }

// ============== style ==============
// const divElem = document.createElement("div") // <div></div>
// divElem.style.width = "150px" // <div style="width: 150px;"></div>
// divElem.style.height = "150px"
// divElem.style.backgroundColor = "green"
// divElem.style.border = "5px solid black"
// document.body.append(divElem)

// Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется
const divElem = document.createElement("div") // <div></div>
divElem.style.width = "150px" // <div style="width: 150px;"></div>
divElem.style.height = "150px"
divElem.style.border = "1px solid black"
divElem.style.margin = "5px"
document.body.append(divElem)
// red green blue
// #ffffff
// rgb(255, 100, 250) [0-255]
// Math.random() [0 1)
// Math.random() * 255 [0-255) float
// Math.ceil(Math.random() * 255) [0-255] int
// 1 вариант
// divElem.addEventListener("mouseover", function () {
//     // console.log("i am here")
//     const red = Math.ceil(Math.random() * 255)
//     const green = Math.ceil(Math.random() * 255)
//     const blue = Math.ceil(Math.random() * 255)
//     console.log(red, green, blue)
//     const backgroundColor = `rgb(${red}, ${green}, ${blue})`
//     console.log(backgroundColor)
//     divElem.style.backgroundColor = backgroundColor
// })

// divElem.addEventListener("mouseout", function () {
//     divElem.style.backgroundColor = "white"
// })

// 2 вариант
function setRandColor() {
    // console.log("i am here")
    const red = Math.ceil(Math.random() * 255)
    const green = Math.ceil(Math.random() * 255)
    const blue = Math.ceil(Math.random() * 255)
    console.log(red, green, blue)
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`
    console.log(backgroundColor)
    divElem.style.backgroundColor = backgroundColor
}
divElem.addEventListener("mouseover", setRandColor)
divElem.addEventListener("mouseout", setRandColor)

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
// rgb(128, 128, 0)
// rgb(128, 128, 5)
// rgb(128, 128, 10)
// rgb(128, 128, 15)
// ...
// rgb(128, 128, 255)