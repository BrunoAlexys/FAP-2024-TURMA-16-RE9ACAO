import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { StudentScheme } from "../../../../utils/StudentScheme";
import { FormStudent } from "../../../../types/FormStudent";
import { useForm } from "react-hook-form";

export const Etapa4 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormStudent>({
        resolver: zodResolver(StudentScheme),
    });

    return (
        <div className="flex flex-col gap-10" id="etapa3">
            <Input
                type={InputType.Text}
                label="Curso"
                error={errors}
                register={register}
                name="course"
            />
            <Input
                type={InputType.Text}
                label="Período"
                error={errors}
                register={register}
                name="period"
            />
            <Input
                type={InputType.Text}
                label="Matrícula"
                error={errors}
                register={register}
                name="registration"
            />
        </div>
    );
};
