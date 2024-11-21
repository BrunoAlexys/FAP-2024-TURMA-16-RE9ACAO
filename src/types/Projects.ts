export type Task = {
    id: string;
    titulo: string;
    comentario: string;
}

type Professor = {
    id: string;
    name: string;
    img: string;
}

type Aluno = {
    id: string;
    name: string;
    img: string;
}

export type Project = {
    id: number,
    name: string,
    description: string,
    tipo: number,
    tasks: Task[],
    professor: Professor[],
    alunos: Aluno[]
}