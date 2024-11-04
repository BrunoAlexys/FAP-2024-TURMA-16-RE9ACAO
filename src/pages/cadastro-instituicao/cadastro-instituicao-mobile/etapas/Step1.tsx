import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormInstitutionMobile } from "../../../../types/FormInstituitionMobile";

interface Step1Props{
    register: UseFormRegister<FormInstitutionMobile>;
    errors: FieldErrors<FormInstitutionMobile>;
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
            placeholder="Digite o nome da instituição"
        />
        <Input
            type={InputType.CNPJ}
            label="CNPJ"
            error={errors}
            register={register}
            name="cnpj"
            placeholder="Digite o CNPJ da instituição"
        />
    </div>
  )
}
