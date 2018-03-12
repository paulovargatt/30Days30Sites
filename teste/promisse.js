function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepois(3,'Olá e tals')
    .then(frase => frase.concat('?!?'))
    .then(outra => console.log('rabo'))
    .catch(e => console.log(e))