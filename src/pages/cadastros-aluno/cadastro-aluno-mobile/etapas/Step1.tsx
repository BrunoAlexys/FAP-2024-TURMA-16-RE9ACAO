import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormStudentMobile } from "../../../../types/FormStudentMobile";

interface Step1Props{
    register: UseFormRegister<FormStudentMobile>;
    errors: FieldErrors<FormStudentMobile>;
}

export const Step1: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step1">
        <Input
            type={InputType.Text}
            label="Nome"
            error={errors}
            register={register}
            name="name"
            placeholder="Digite seu nome"
        />
        <Input
            type={InputType.CPF}
            label="CPF"
            error={errors}
            register={register}
            name="cpf"
            placeholder="Digite seu CPF"
        />
    </div>
  )
}
