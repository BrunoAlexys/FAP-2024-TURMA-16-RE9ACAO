import { DiagonalSection } from "../../../components/diagonal-section/DiagonalSection";

import { Etapa1 } from "./etapas/Etapa1";
import { Etapa2 } from "./etapas/Etapa2";
import { Etapa3 } from "./etapas/Etapa3";
import { Etapa4 } from "./etapas/Etapa4";
import { Etapa5 } from "./etapas/Etapa5";

import { useForms } from "../../../hooks/useForms";

export const CadastroAlunoMobile = () => {
    const formComponents = [
        <Etapa1 />,
        <Etapa2 />,
        <Etapa3 />,
        <Etapa4 />,
        <Etapa5 />,
    ];

    const { curStep, curComponent, changeStep, isLastStep, isFirstStep } =
        useForms(formComponents);

    return (
        <div className="flex flex-col">
            <DiagonalSection text="Cadastro" subtext="Aluno" />
            <form
                className="mt-28"
                onSubmit={(e) => changeStep(curStep + 1, e)}
            >
                <div className="min-h-[400px]" id="inputsContainer">
                    {curComponent}
                </div>
                <div id="actions" className="flex justify-around items-center">
                    {!isFirstStep && (
                        <button
                            className="text-colorMenuPrimary font-medium"
                            type="button"
                            onClick={() => changeStep(curStep - 1)}
                        >
                            Voltar
                        </button>
                    )}
                    {!isLastStep ? (
                        <button
                            className="bg-colorMenuPrimary text-white rounded-xl py-2 px-4 font-medium"
                            type="submit"
                        >
                            Avançar
                        </button>
                    ) : (
                        <button
                            className="bg-colorMenuPrimary text-white rounded-xl py-2 px-4 font-medium"
                            type="button"
                        >
                            Enviar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};