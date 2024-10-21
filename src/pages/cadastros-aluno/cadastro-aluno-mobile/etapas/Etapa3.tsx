import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { StudentScheme } from "../../../../utils/StudentScheme";
import { FormStudent } from "../../../../types/FormStudent";
import { useForm } from "react-hook-form";

export const Etapa3 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormStudent>({
        resolver: zodResolver(StudentScheme),
    });

    return (
        <div className="flex flex-col" id="etapa3">
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
            />
            <Input
                type={InputType.Text}
                label="Bairro"
                error={errors}
                register={register}
                name="neighborhood"
            />
            <Input
                type={InputType.CEP}
                label="CEP"
                error={errors}
                register={register}
                name="cep"
                placeholder="00000-000"
            />
        </div>
    );
};
