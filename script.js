//com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 OKAY")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    resolve("P2 OKAY")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P3 OKAY")
})

const AllPromise = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

//com race

const b1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("B1 OKAY")
    }, 3000)
})

const b2 = new Promise((resolve, reject) => {
    resolve("B2 OKAY")
})

const b3 = new Promise((resolve, reject) => {
    resolve("B3 OKAY")
})

const RacePromise = Promise.race([b1, b2, b3]).then((data) => {
    console.log(data)
})