import { zodResolver } from "@hookform/resolvers/zod";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection"
import { schemaForm } from "../../utils/SchemaForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { InputType } from "../../enum/input-type";

export const CadastroProfessor = () => {

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
            <DiagonalSection text='Cadastro' subtext="Professor" />
            <div className="mt-72 mx-10">
                <form
                    className="flex flex-col gap-8"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >


                    <div className="flex gap-20">

                        <div>
                            <Input
                                type={InputType.Text}
                                label="Nome do Aluno"
                                error={errors.name?.message}
                                register={{ ...register('name') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.CPF}
                                label="CPF"
                                placeholder="123.456.789-01"
                                error={errors.cpf?.message}
                                register={{ ...register('cpf') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Phone}
                                label="Telefone"
                                placeholder="(00) 0 0000-0000"
                                error={errors.phone?.message}
                                register={{ ...register('phone') }}
                            />
                        </div>
                    </div>
                    <div className="flex gap-20">

                        <Input
                            type={InputType.Email}
                            label="Email"
                            error={errors.email?.message}
                            register={{ ...register('email') }}
                        />

                        <Input
                            type={InputType.Email}
                            label="Confirmar Email"
                            error={errors.confirmEmail?.message}
                            register={{ ...register('confirmEmail') }}
                        />

                    </div>

                    <div className="flex gap-20">
                        <div>
                            <Input
                                type={InputType.UF}
                                label="UF"
                                error={errors.uf?.message}
                                register={{ ...register('uf') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.CEP}
                                label="CEP"
                                placeholder="00000-000"
                                error={errors.cep?.message}
                                register={{ ...register('cep') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Text}
                                label="Cidade"
                                error={errors.city?.message}
                                register={{ ...register('city') }}
                            />
                        </div>
                    </div>

                    <div className="flex gap-20">
                        <div>
                            <Input
                                type={InputType.Text}
                                label="Bairro"
                                error={errors.neighborhood?.message}
                                register={{ ...register('neighborhood') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Text}
                                label="Rua"
                                error={errors.road?.message}
                                register={{ ...register('road') }}
                            />
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div>
                            <Input
                                type={InputType.Text}
                                label="Curso"
                                error={errors.curso?.message}
                                register={{ ...register("curso") }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Text}
                                label="Período"
                                error={errors.periodo?.message}
                                register={{ ...register("periodo") }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Text}
                                label="Matrícula"
                                error={errors.registration?.message}
                                register={{ ...register("registration") }}
                            />
                        </div>

                    </div>

                    <div className="flex gap-20">
                        <div>
                            <Input
                                type={InputType.Password}
                                label="Senha"
                                error={errors.password?.message}
                                register={{ ...register('password') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.Password}
                                label="Confirmar senha"
                                error={errors.confirmPassword?.message}
                                register={{ ...register('confirmPassword') }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 mr-10">
                        <div>
                            <Button children="Cancelar" variant="transparent" />
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