import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { StudentScheme } from "../../../../utils/StudentScheme";
import { FormStudent } from "../../../../types/FormStudent";
import { useForm } from "react-hook-form";

export const Etapa5 = () => {

    const {
        register,
        formState: { errors },
    } = useForm<FormStudent>({
        resolver: zodResolver(StudentScheme),
    });

    return (
        <div className="flex flex-col gap-10" id="etapa3">
            <Input
                type={InputType.Password}
                label="Senha"
                error={errors}
                register={register}
                name="password"
            />
            <Input
                type={InputType.Password}
                label="Confirmar Senha"
                error={errors}
                register={register}
                name="confirmPassword"
            />
        </div>
    );
};
