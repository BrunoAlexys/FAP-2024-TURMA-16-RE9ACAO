import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormCompanyMobile } from "../../../../types/FormCompanyMobile";

interface Step1Props{
    register: UseFormRegister<FormCompanyMobile>;
    errors: FieldErrors<FormCompanyMobile>;
}

export const Step4: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step4">
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
