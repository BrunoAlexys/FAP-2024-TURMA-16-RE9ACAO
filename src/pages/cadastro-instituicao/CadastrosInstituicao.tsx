import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection"
import { CadastroInstituicao } from "./cadastro-instituicao-desktop/CadastroInstituicao"

export const CadastrosInstituicao = () => {
    return (
        <div>
            <DiagonalSection text="Cadastro" subtext="Instituição" />

            <div id="mobile" className="lg:hidden h-full flex-1">
            </div>
            <div id="desktop" className="hidden lg:block flex-1">
                <CadastroInstituicao />
            </div>
        </div>
    )
}
