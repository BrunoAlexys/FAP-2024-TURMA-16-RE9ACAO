export type Parceiro = {
    id: number,
    name: string,
    description: string,
    tipo: number,
    cursos: curso[],
    professor: Professor[],
    alunos: Aluno[]
}

type curso = {
    id: number,
    titulo: string,
    img: string,
    comentario: string
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