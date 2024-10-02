import { SubmitHandler, useForm } from "react-hook-form";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { Input } from "../../components/input/input";
import { InputType } from "../../enum/input-type";
import { Button } from "../../components/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schemaForm } from "../../utils/SchemaForm";

export const CadastroEmpresa = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<SechemaType>({
        resolver: zodResolver(schemaForm)
    });

    type SechemaType = z.infer<typeof schemaForm>

    const handleSubmitForm: SubmitHandler<SechemaType> = (data: SechemaType) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <div className="flex flex-col mb-6">
            <DiagonalSection text='Cadastro' subtext="Empresarial" />
            <div className="mt-72 mx-10">
                <form
                    className="flex flex-col gap-8"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
                    <div>
                        <Input
                            type={InputType.Text}
                            label="Nome da Empresa"
                            error={errors.name?.message}
                            register={{ ...register('name') }}
                        />
                    </div>

                    <div className="flex gap-20">
                        <div>
                            <Input
                                type={InputType.Email}
                                label="Email"
                                error={errors.email?.message}
                                register={{ ...register('email') }}
                            />
                        </div>

                        <div>
                            <Input
                                type={InputType.CNPJ}
                                label="CNPJ"
                                placeholder="12.345.678/0001-90"
                                error={errors.cnpj?.message}
                                register={{ ...register('cnpj') }}
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

                    <div>
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