import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormTeacherMobile } from "../../../../types/FormTeacherMobile";

interface Step1Props{
    register: UseFormRegister<FormTeacherMobile>;
    errors: FieldErrors<FormTeacherMobile>;
}

export const Step5: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step5">
        <Input
            type={InputType.Password}
            label="Senha"
            error={errors}
            register={register}
            name="password"
            placeholder="Crie uma senha"
        />
        <Input
            type={InputType.Password}
            label="Confirmar senha"
            error={errors}
            register={register}
            name="confirmPassword"
            placeholder="Confirme sua senha"
        />
    </div>
  )
}
