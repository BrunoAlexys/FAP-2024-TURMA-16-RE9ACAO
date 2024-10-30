import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { CadastroInstituicao } from "./cadastro-instituicao-desktop/CadastroInstituicao";
import { CadastroInstituicaoMobile } from "./cadastro-instituicao-mobile/CadastroInstitucaoMobile";


export const CadastrosInstituicao = () => {
    return (
        <div className="flex flex-col h-full">
            <DiagonalSection text="Cadastro" subtext="Instituição de ensino" />
            <div className="hidden lg:block flex-1">
                <CadastroInstituicao />
            </div>
            <div className="lg:hidden h-full flex-1">
                <CadastroInstituicaoMobile />
            </div>
        </div>
    );
};
