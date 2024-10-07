import { CadastroAluno } from "./cadastro-aluno-desktop/CadastroAluno";
import { CadastroAlunoMobile } from "./cadastro-aluno-mobile/CadastroAlunoMobile";

export const CadastrosAluno = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <CadastroAluno />
            </div>
            <div className="lg:hidden">
                <CadastroAlunoMobile />
            </div>
        </div>
    );
};
