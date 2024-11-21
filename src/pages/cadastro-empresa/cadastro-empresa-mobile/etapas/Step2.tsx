import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormCompanyMobile } from "../../../../types/FormCompanyMobile";

interface Step1Props{
    register: UseFormRegister<FormCompanyMobile>;
    errors: FieldErrors<FormCompanyMobile>;
}

export const Step2: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step2">
        <Input
            type={InputType.Email}
            label="E-mail"
            error={errors}
            register={register}
            name="email"
            placeholder="Digite o e-mail"
        />
        <Input
            type={InputType.Email}
            label="Confirmar e-mail"
            error={errors}
            register={register}
            name="confirmEmail"
            placeholder="Confirme o e-mail"
        />
        <Input
            type={InputType.Phone}
            label="Telefone"
            error={errors}
            register={register}
            name="phone"
            placeholder="(00) 00000-0000"
        />
    </div>
  )
}
