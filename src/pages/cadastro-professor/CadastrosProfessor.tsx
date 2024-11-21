import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { CadastroProfessor } from "./cadastro-professor-desktop/CadastroProfessor";
import { CadastroProfessorMobile } from "./cadastro-professor-mobile/CadastroProfessorMobile";


export const CadastrosProfessor = () => {
    return (
        <div className="flex flex-col h-full">
            <DiagonalSection text="Cadastro" subtext="Professor" />
            <div className="hidden lg:block flex-1">
                <CadastroProfessor />
            </div>
            <div className="lg:hidden h-full flex-1">
                <CadastroProfessorMobile />
            </div>
        </div>
    );
};
