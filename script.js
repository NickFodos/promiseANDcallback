

const myPromise = new Promise((resolve, reject) => {
    const nome = "Gojo"
    if (nome === "nomeTeste") {
        resolve('O nome indicado é identico')
    } else {
        reject('O nome indicado não é identico')
    }

})

myPromise.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
})