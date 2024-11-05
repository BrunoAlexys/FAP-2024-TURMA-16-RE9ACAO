import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/input/input";
import { InputType } from "../../../enum/input-type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InstituionScheme } from "../../../utils/InstitutionScheme";
import { FormInstituion } from "../../../types/FormInstituion";
import axios, { AxiosError } from "axios";
import { Button } from "../../../components/button/button";
import { useState } from "react";
import { AlertState } from "../../../types/AlertState";
import Alert from "../../../components/alerts/alertDesktop";


export const CadastroInstituicao = () => {

    const navigate = useNavigate();
    const API_URL = 'http://localhost:3001/instituicao';

    const [alert, setAlert] = useState<AlertState | null>(null);

    const showAlert = (type: AlertState['type'], message: string) => {
        setAlert({ type, message });
    };

    const closeAlert = () => {
        setAlert(null);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInstituion>({
        resolver: zodResolver(InstituionScheme)
    });

    const onSubmit = async (data: FormInstituion) => {
        try {
            const response = await axios.post(API_URL, data);
            if (response.status === 201) {
                showAlert('sucesso', 'Instituição cadastrada com sucesso!');
            } else {
                showAlert('error', 'Erro ao enviar o formulário');
                throw new Error('Erro ao enviar o formulário');
            }
            reset();
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error('Erro na resposta do servidor:', axiosError.response.data);
            } else if (axiosError.request) {
                console.error('Erro na requisição:', axiosError.request);
            } else {
                console.error('Erro ao configurar a requisição:', axiosError.message);
            }

            throw error;
        }
    };

    return (
        <div className="flex flex-col mb-6">
            {alert && (
                <>
                    <Alert type={alert.type} text={alert.message} onClose={closeAlert} />
                </>
            )}
            <div className="absolute w-[90%] lg:mr-20 flex flex-col">
                <form
                    className="flex flex-col gap-6 mb-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full">
                            <Input
                                type={InputType.Text}
                                label="Nome"
                                error={errors}
                                register={register}
                                name="name"
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.CNPJ}
                                label="CNPJ"
                                error={errors}
                                register={register}
                                name="cnpj"
                                placeholder="00.000.000/0000-00"
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.Phone}
                                label="Telefone"
                                error={errors}
                                register={register}
                                name="phone"
                                placeholder="(00) 00000-0000"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Email"
                                error={errors}
                                register={register}
                                name="email"
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Confirmar Email"
                                error={errors}
                                register={register}
                                name="confirmEmail"
                            />
                        </div>
                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full">
                            <Input
                                type={InputType.UF}
                                label="UF"
                                error={errors}
                                register={register}
                                name="uf"
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.CEP}
                                label="CEP"
                                error={errors}
                                register={register}
                                name="cep"
                                placeholder="00000-000"
                            />
                        </div>

                        <div className="lg:w-full">
                            <Input
                                type={InputType.Text}
                                label="Cidade"
                                error={errors}
                                register={register}
                                name="city"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Bairro"
                                error={errors}
                                register={register}
                                name="neighborhood"
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Text}
                                label="Rua"
                                error={errors}
                                register={register}
                                name="street"
                            />
                        </div>

                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Password}
                                label="Senha"
                                error={errors}
                                register={register}
                                name="password"
                            />
                        </div>

                        <div className="lg:w-full lg:flex-1">
                            <Input
                                type={InputType.Password}
                                label="Confirmar Senha"
                                error={errors}
                                register={register}
                                name="confirmPassword"
                            />
                        </div>

                        <div className="lg:flex-1 lg:block hidden"></div>
                    </div>

                    <div className="flex items-center lg:justify-end justify-center mt-4">
                        <div>
                            <Button children="Cancelar" variant="transparent" type="button" onClick={() => navigate('/')} />
                        </div>

                        <div>
                            <Button children="Cadastrar" variant="solid" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};