const alunosDaProva = [
    { nome: 'Carlos', nota: 9 },
    { nome: 'Henrique', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'joão', nota: 7 },
    { nome: 'Jhonatan', nota: 10 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Suelen', nota: 2 },
    { nome: 'Sabrina', nota: 4 },
    { nome: 'Luiz', nota: 3 }
];


function identificaAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const identificaAlunosReprovados = (alunos) => {
    return alunos.filter(function(aluno) {
        return aluno.nota < 6
    });
};

const alunosAprovados = identificaAlunosAprovados(alunosDaProva);
console.log("Os alunos que Foram aprovados são:");
console.log(alunosAprovados);

const alunosReprovados = identificaAlunosReprovados(alunosDaProva);
console.log("Os alunos que foram reprovados são:");
console.log(alunosReprovados);
