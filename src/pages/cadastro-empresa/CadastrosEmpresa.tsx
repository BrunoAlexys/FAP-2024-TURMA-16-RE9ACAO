import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { CadastroEmpresa } from "./cadastro-empresa-desktop/CadastroEmpresa";
import { CadastroEmpresaMobile } from "./cadastro-empresa-mobile/CadastroEmpresaMobile";


export const CadastrosEmpresa = () => {
    return (
        <div className="flex flex-col h-full">
            <DiagonalSection text="Cadastro" subtext="Empresarial" />
            <div className="hidden lg:block flex-1">
                <CadastroEmpresa />
            </div>
            <div className="lg:hidden h-full flex-1">
                <CadastroEmpresaMobile />
            </div>
        </div>
    );
};
