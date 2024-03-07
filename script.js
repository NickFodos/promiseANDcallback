//Fetch request na API do github
//Fetch API
const UserName = "NickFodos"
fetch(`https://api.github.com/users/${UserName}`, {
    method: 'GET',
    headers: {
        Accept: 'Application/vnd.github.v3+json',
    },
}).then((resposta) => {

    console.log(typeof resposta)

    console.log(resposta)

    return resposta.json()

}).then((data) => {

    console.log(`Seu nome é ${data.name}`)

}).catch((err) => {

    console.log(`Houve um erro: ${err}`)
})