// const arr = [5, 2, -9, "hello", 0, true, false]
// console.log(arr[59]) // undefined
// console.log(arr[3]) // "hello"

// arr[3] = 156
// arr[2] = arr
// arr[7] = "World"

// arr.push("World")
// arr.push(9989)
// arr.push("World", 9989) // add elems from end to array
// const lastElem = arr.pop() // get last elem from array and delete it
// console.log(arr)
// console.log(lastElem)

// ================= //
// const emptyArr = []
// emptyArr.push(1, 5, 6, "asdfg", true)
// console.log(emptyArr)

// ================= //

// Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]
// const arr = [1, 4, 2, 5, 3]
// const emptyArr = []
// emptyArr.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
// console.log(emptyArr)

// ================= //
// 1) i = 0; 0 < 10; i = 0 + 1
// 2) i = 1; 1 < 10; i = 1 + 1
// ...
// 9) i = 9; 9 < 10; i = 9 + 1
// 10) i = 10; 10 < 10; i = 10 + 1 // else
for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}