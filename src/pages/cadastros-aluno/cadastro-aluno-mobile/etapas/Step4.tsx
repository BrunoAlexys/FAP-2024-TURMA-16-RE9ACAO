import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormStudentMobile } from "../../../../types/FormStudentMobile";

interface Step1Props{
    register: UseFormRegister<FormStudentMobile>;
    errors: FieldErrors<FormStudentMobile>;
}

export const Step4: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step4">
        <Input
            type={InputType.Text}
            label="Curso"
            error={errors}
            register={register}
            name="course"
            placeholder="Digite o curso que está matriculado"
        />
        <Input
            type={InputType.Text}
            label="Príodo"
            error={errors}
            register={register}
            name="period"
            placeholder="Informe o período"
        />
        <Input 
            type={InputType.Text}
            label="Matrícula"
            error={errors}
            register={register}
            name="registration"
            placeholder="Número da matrícula"
        />
    </div>
  )
}
