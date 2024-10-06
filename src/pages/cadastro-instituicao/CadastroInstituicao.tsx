import { SubmitHandler, useForm } from "react-hook-form";
import { schemaForm } from "../../utils/SchemaForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputType } from "../../enum/input-type";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { useNavigate } from "react-router-dom";

export const CadastroInstituicao = () => {

    const navigate = useNavigate();

    type SechemaType = z.infer<typeof schemaForm>

    const { register, handleSubmit, formState: { errors } } = useForm<SechemaType>({
        resolver: zodResolver(schemaForm)
    });

    const handleSubmitForm: SubmitHandler<SechemaType> = (data: SechemaType) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <div className="flex flex-col mb-6">
            <DiagonalSection text='Cadastro' subtext="Instituição de Ensino" />
            <div className="absolute w-[90%] mt-28 lg:ml-2 lg:mt-[245px] lg:mr-20 flex flex-col">
                <form
                    className="flex flex-col gap-6 mb-6"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    <div className="lg:hidden">
                        <Input
                            type={InputType.Text}
                            label="Nome da Empresa"
                            error={errors.name?.message}
                            register={{ ...register("name") }}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full">
                            <Input
                                type={InputType.Text}
                                label="Nome da Empresa"
                                error={errors.name?.message}
                                register={{ ...register("name") }}
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.CNPJ}
                                label="CNPJ"
                                placeholder="12.345.678/0001-90"
                                error={errors.cnpj?.message}
                                register={{ ...register("cnpj") }}
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.Phone}
                                label="Telefone"
                                placeholder="(00) 0 0000-0000"
                                error={errors.phone?.message}
                                register={{ ...register("phone") }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Email}
                                label="Email"
                                error={errors.email?.message}
                                register={{ ...register("email") }}
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Email}
                                label="Confirmar Email"
                                error={errors.confirmEmail?.message}
                                register={{ ...register("confirmEmail") }}
                            />
                        </div>
                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full">
                            <Input
                                type={InputType.UF}
                                label="UF"
                                error={errors.uf?.message}
                                register={{ ...register("uf") }}
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.CEP}
                                label="CEP"
                                placeholder="00000-000"
                                error={errors.cep?.message}
                                register={{ ...register("cep") }}
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.Text}
                                label="Cidade"
                                error={errors.city?.message}
                                register={{ ...register("city") }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Bairro"
                                error={errors.neighborhood?.message}
                                register={{ ...register("neighborhood") }}
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Rua"
                                error={errors.road?.message}
                                register={{ ...register("road") }}
                            />
                        </div>

                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Password}
                                label="Senha"
                                error={errors.password?.message}
                                register={{ ...register("password") }}
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Password}
                                label="Confirmar senha"
                                error={errors.confirmPassword?.message}
                                register={{ ...register("confirmPassword") }}
                            />
                        </div>

                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex items-center lg:justify-end justify-center mt-4">
                        <div>
                            <Button children="Cancelar" variant="transparent" onClick={() => navigate('/')} />
                        </div>

                        <div>
                            <Button children="Cadastrar" variant="solid" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};