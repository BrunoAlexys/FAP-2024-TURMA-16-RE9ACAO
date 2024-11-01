import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { Step2 } from "./etapas/Step2";
import { Step1 } from "./etapas/Step1";
import { Step3 } from "./etapas/Step3";

import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { FormCompanyMobile } from "../../../types/FormCompanyMobile";
import { Step4 } from "./etapas/Step4";
import { FormInstitutionMobile } from "../../../types/FormInstituitionMobile";
import { InstitutionSchemaMobile } from "../../../utils/InstitutionSchemeMobile";

export const CadastroInstituicaoMobile: React.FC = () => {
    const methods = useForm<FormInstitutionMobile>({
        resolver: zodResolver(InstitutionSchemaMobile),
        mode: "onChange",
    });

    const [step, setStep] = useState(0);
    const steps = [Step1, Step2, Step3, Step4];
    const fieldNames: { [key: number]: (keyof FormCompanyMobile)[] } = {
        0: ["name", "cnpj"],
        1: ["email", "confirmEmail", "phone"],
        2: ["uf", "cep", "city", "neighborhood", "street"],
        3: ["password", "confirmPassword"],
    };

    const navigate = useNavigate();
    const API_URL = "http://localhost:3001/aluno";

    const onSubmit = async (data: FormCompanyMobile) => {
        try {
            const response = await axios.post(API_URL, data);
            if (response.status === 201) {
                navigate("/", { state: { cadastroRealizado: true } });
            } else {
                console.log("error", "Erro ao enviar o formulário");
                throw new Error("Erro ao enviar o formulário");
            }
            methods.reset();
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error(
                    "Erro na resposta do servidor:",
                    axiosError.response.data
                );
            } else if (axiosError.request) {
                console.error("Erro na requisição:", axiosError.request);
            } else {
                console.error(
                    "Erro ao configurar a requisição:",
                    axiosError.message
                );
            }
            throw error;
        }
    };

    const CurComponent = steps[step];

    const handleNextStep = async () => {
        console.log("Validando campos da etapa:", fieldNames[step]);
        const isValid = await methods.trigger(fieldNames[step]);
        console.log("Campos válidos:", isValid);

        if (step === 1) {
            const data = methods.getValues();
            if (data.email !== data.confirmEmail) {
                methods.setError("confirmEmail", {
                    type: "manual",
                    message: "Os emails não correspondem",
                });
                methods.setError("email", {
                    type: "manual",
                    message: "Os emails não correspondem",
                });
                return;
            }
        }

        if (isValid) {
            setStep(step + 1);
        }
    };

    const handleKeyDown = async (
        event: React.KeyboardEvent<HTMLFormElement>
    ) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (step < steps.length - 1) {
                await handleNextStep();
            } else {
                methods.handleSubmit(onSubmit)();
            }
        }
    };

    return (
        <div className="flex flex-col px-4 h-full">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    onKeyDown={handleKeyDown}
                    className="h-full flex flex-col"
                >
                    <div className="h-full">
                        <CurComponent
                            register={methods.register}
                            errors={methods.formState.errors}
                        />
                    </div>
                    <div className="relative bottom-2 flex justify-around items-center">
                        {step > 0 && (
                            <button
                                className="font-medium text-colorMenuPrimary"
                                type="button"
                                onClick={() => setStep(step - 1)}
                            >
                                Voltar
                            </button>
                        )}
                        {step < steps.length - 1 ? (
                            <button
                                className="text-white bg-colorMenuPrimary px-4 py-2 rounded-2xl font-medium"
                                type="button"
                                onClick={handleNextStep}
                            >
                                Avançar
                            </button>
                        ) : (
                            <button
                                className="text-white bg-colorMenuPrimary px-4 py-2 rounded-2xl font-medium"
                                type="submit"
                            >
                                Enviar
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};
