import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormCompanyMobile } from "../../../../types/FormCompanyMobile";

interface Step1Props{
    register: UseFormRegister<FormCompanyMobile>;
    errors: FieldErrors<FormCompanyMobile>;
}

export const Step3: React.FC<Step1Props> = ({register, errors}) => {
  return (
    <div id="step3">
        <Input
            type={InputType.UF}
            label="Selecione seu Estado"
            error={errors}
            register={register}
            name="uf"
        />
        <Input
            type={InputType.Text}
            label="Cidade"
            error={errors}
            register={register}
            name="city"
            placeholder="Digite sua cidade"
        />
        <Input 
            type={InputType.Text}
            label="Bairro"
            error={errors}
            register={register}
            name="neighborhood"
            placeholder="Digite seu Bairro"
        />
        <Input 
            type={InputType.Text}
            label="Rua"
            error={errors}
            register={register}
            name="street"
            placeholder="Digite sua rua"
        />
        <Input 
            type={InputType.CEP}
            label="Cep"
            error={errors}
            register={register}
            name="cep"
            placeholder="00000-000"
        />
    </div>
  )
}
