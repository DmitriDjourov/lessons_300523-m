// const user = {
//     userName: "John",
//     lastName: "Doe", 
//     age: 35,
//     "car name": "BMW",
    // carName: "BMW"
// }
// 1
// console.log(user)
// console.log(user["lastName"])
// console.log(user["age"])
// console.log(user["userName"])
// 2
// console.log(user.lastName)
// console.log(user.age)
// console.log(user.userName)
// console.log(user["car name"])

// user.lastName = "Smith"
// user.profession = "developer"
// console.log(user)

// =============== //
// Создать объект с названием и ценой продукта и вывести данные в консоль.
// const product = {
//     name: "Macbook",
//     price: 4000
// }

// console.log(`Product name: ${product.name}`)
// console.log(`Product price: ${product.price}`)

// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.
const products = [
    {
        title: "Macbook",
        price: 4000,
        type: "Laptop"
    },
    {
        title: "Blender",
        price: 1000,
        type: "Kitchen"
    },
    {
        title: "Bicycle",
        price: 1500,
        type: "Sport"
    }
]

for(let i = 0; i < products.length; i++) {
    const {title, price, type} = products[i]
    console.log(`Title of product: ${title}`)
    console.log(`Pric of product: ${price}`)
    console.log(`Type of product: ${type}`)
    console.log("==================")
}

// const user = {
//     'first name': 'John',
//     lastName: 'Dow',
//     profession: 'Programmer',
//     salary: 4000,
//     age: 30,
//     active: true,
//     address: {
//         country: "Germany",
//         city: "Berlin"
//     }
// }
// // desctructurization
// const {salary, age, lastName} = user
// console.log(age)
// // console.log(active)
