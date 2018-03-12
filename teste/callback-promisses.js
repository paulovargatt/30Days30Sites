const http = require('http')

const getTurma = (letra, callback) => {
const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            

        })
    })
}

let nomes = []
    getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))

    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
        console.log(nomes)
    
    });
  });
})

