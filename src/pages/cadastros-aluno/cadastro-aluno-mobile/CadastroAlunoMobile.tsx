import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { StudentSchemaMobile } from "../../../utils/StudentSchemeMobile";
import { useState } from "react";
import { Step2 } from "./etapas/Step2";
import { Step1 } from "./etapas/Step1";
import { Step3 } from "./etapas/Step3";
import { Step4 } from "./etapas/Step4";
import { Step5 } from "./etapas/Step5";
import axios, { AxiosError } from "axios";
import { FormStudentMobile } from "../../../types/FormStudentMobile";
import { useNavigate } from "react-router-dom";

export const CadastroAlunoMobile: React.FC = () => {
  const methods = useForm<FormStudentMobile>({
    resolver: zodResolver(StudentSchemaMobile),
    mode: "onChange",
  });

  const [step, setStep] = useState(0);
  const steps = [Step1, Step2, Step3, Step4, Step5];

  const navigate = useNavigate();

  const API_URL = "http://localhost:3001/aluno";

  const onSubmit = async (data: FormStudentMobile) => {
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
        console.error("Erro ao configurar a requisição:", axiosError.message);
      }

      throw error;
    }
  };

  const CurComponent = steps[step];

  return (
    <div className="flex flex-col px-4 h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="h-full flex flex-col"
        >
          <CurComponent
            register={methods.register}
            errors={methods.formState.errors}
          />
          <div>
            {step > 0 && (
              <button type="button" onClick={() => setStep(step - 1)}>
                Voltar
              </button>
            )}
            {step < steps.length - 1 ? (
              <button type="button" onClick={() => setStep(step + 1)}>
                Avançar
              </button>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
