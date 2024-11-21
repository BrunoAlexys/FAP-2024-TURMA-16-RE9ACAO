import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../../components/input/input";
import { InputType } from "../../../../enum/input-type";
import { FormTeacherMobile } from "../../../../types/FormTeacherMobile";

interface Step1Props {
    register: UseFormRegister<FormTeacherMobile>;
    errors: FieldErrors<FormTeacherMobile>;
}

export const Step4: React.FC<Step1Props> = ({ register, errors }) => {
    return (
        <div id="step4">
            <Input
                type={InputType.Text}
                label="Formação"
                error={errors}
                register={register}
                name="formation"
                placeholder="Digite sua formação"
            />
            <Input
                type={InputType.Text}
                label="Curso"
                error={errors}
                register={register}
                name="course"
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
