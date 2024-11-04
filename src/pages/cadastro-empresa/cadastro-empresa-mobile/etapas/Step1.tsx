import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormCompanyMobile } from "../../../../types/FormCompanyMobile";

interface Step1Props{
    register: UseFormRegister<FormCompanyMobile>;
    errors: FieldErrors<FormCompanyMobile>;
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
            placeholder="Digite o nome da empresa"
        />
        <Input
            type={InputType.CNPJ}
            label="CNPJ"
            error={errors}
            register={register}
            name="cnpj"
            placeholder="Digite o CNPJ da empresa"
        />
    </div>
  )
}
