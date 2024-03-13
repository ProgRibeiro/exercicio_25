
class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}


let alunos = [
    new Aluno("João", 5),
    new Aluno("Maria", 8),
    new Aluno("Ana", 6),
    new Aluno("Pedro", 9),
    new Aluno("Lucas", 4),
    new Aluno("Marta", 7),
    new Aluno("Carla", 6),
    new Aluno("Paulo", 3),
    new Aluno("Sofia", 10),
    new Aluno("Bruno", 2)
];


function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


let alunosAprovados = filtrarAprovados(alunos);


console.log("Alunos aprovados:");
alunosAprovados.forEach(aluno => console.log(`${aluno.nome} - Nota: ${aluno.nota}`));

