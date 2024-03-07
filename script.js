try {
    const callback = (Ver) => {
        console.log(`Sua idade é: ${Ver}`)
    }
    const VerIdade = new Promise((resolve, reject) => {
        const idade = 18
        if (idade >= 18) {
            resolve("PERMITIDA!!")
        } else {
            reject("NÃO PERMITIDA!!")
        }
    })
    VerIdade.then(callback).catch((err) => {
        callback()
        console.log(`Houve um erro no codigo: ${err}`)
    })
} catch (err) {
    console.log(`Houve um erro no codigo: ${err}`)
} 