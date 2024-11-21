import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { CadastroAluno } from "./cadastro-aluno-desktop/CadastroAluno";
import { CadastroAlunoMobile } from "./cadastro-aluno-mobile/CadastroAlunoMobile";

export const CadastrosAluno = () => {
    return (
        <div className="flex flex-col h-full">
            <DiagonalSection text="Cadastro" subtext="Aluno" />
            <div className="hidden lg:block flex-1">
                <CadastroAluno />
            </div>
            <div className="lg:hidden h-full flex-1">
                <CadastroAlunoMobile />
            </div>
        </div>
    );
};
