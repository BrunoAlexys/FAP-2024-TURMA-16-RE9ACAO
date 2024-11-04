import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Alert from "../../../components/alerts/alertDesktop";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { InputType } from "../../../enum/input-type";
import { AlertState } from "../../../types/AlertState";
import { FormCompany } from "../../../types/FormCompany";
import { CompanyScheme } from "../../../utils/CompanyScheme";


export const CadastroEmpresa = () => {

    const navigate = useNavigate();
    const API_URL = 'http://localhost:3001/empresa';

    const [alert, setAlert] = useState<AlertState | null>(null);

    const showAlert = (type: AlertState['type'], message: string) => {
        setAlert({ type, message });
    };

    const closeAlert = () => {
        setAlert(null);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormCompany>({
        resolver: zodResolver(CompanyScheme)
    });

    const onSubmit = async (data: FormCompany) => {
        try {
            const response = await axios.post(API_URL, data);
            if (response.status === 201) {
                showAlert('sucesso', 'Empresa cadastrada com sucesso!');
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
        <div className="flex flex-col items-center ">
            {alert && (
                <>
                    <Alert type={alert.type} text={alert.message} onClose={closeAlert} />
                </>
            )}
            <div className="absolute w-[90%] lg:ml-2 lg:mr-20 flex flex-col">
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
