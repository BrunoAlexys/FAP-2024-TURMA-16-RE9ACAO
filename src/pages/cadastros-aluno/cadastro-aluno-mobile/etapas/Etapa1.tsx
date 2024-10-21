import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { useForm } from "react-hook-form";
import { FormStudent } from "../../../../types/FormStudent";
import { StudentScheme } from "../../../../utils/StudentScheme";

export const Etapa1 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormStudent>({
        resolver: zodResolver(StudentScheme),
    });

    return (
        <div className="flex flex-col gap-10" id="etapa1">
            <Input
                type={InputType.Text}
                label="Nome"
                error={errors}
                register={register}
                name="name"
            />
            <Input
              type={InputType.CPF}
              label="CPF"
              error={errors}
              register={register}
              name="cpf"
              placeholder="000.000.000-00"
            />
        </div>
    );
};
