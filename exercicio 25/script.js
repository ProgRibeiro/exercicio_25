import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Aluno {
    String nome;
    int nota;

    public Aluno(String nome, int nota) {
        this.nome = nome;
        this.nota = nota;
    }

    public String getNome() {
        return nome;
    }

    public int getNota() {
        return nota;
    }

    @Override
    public String toString() {
        return nome + " - Nota: " + nota;
    }
}

public class Main {
    public static void main(String[] args) {
        List<Aluno> alunos = new ArrayList<>();
        alunos.add(new Aluno("João", 5));
        alunos.add(new Aluno("Maria", 8));
        alunos.add(new Aluno("Ana", 6));
        alunos.add(new Aluno("Pedro", 9));
        alunos.add(new Aluno("Lucas", 4));
        alunos.add(new Aluno("Marta", 7));
        alunos.add(new Aluno("Carla", 6));
        alunos.add(new Aluno("Paulo", 3));
        alunos.add(new Aluno("Sofia", 10));
        alunos.add(new Aluno("Bruno", 2));

        List<Aluno> alunosAprovados = alunos.stream()
                .filter(aluno -> aluno.getNota() >= 6)
                .collect(Collectors.toList());

        alunosAprovados.forEach(System.out::println);
    }
}
