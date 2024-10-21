import { useForm } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormStudent } from "../../../../types/FormStudent";
import { StudentScheme } from "../../../../utils/StudentScheme";

export const Etapa2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormStudent>({
        resolver: zodResolver(StudentScheme),
    });

    return (
        <div className="flex flex-col gap-10" id="etapa2">
            <Input
                type={InputType.Email}
                error={errors}
                label="E-mail"
                name="email"
                register={register}
            />
            <Input
                type={InputType.Email}
                error={errors}
                label="Confirmar E-mail"
                name="confirmEmail"
                register={register}
            />
            <Input
              type={InputType.Phone}
              error={errors}
              register={register}
              label="Telefone"
              name="phone"
              placeholder="(00) 00000-0000"
            />
        </div>
    );
};
