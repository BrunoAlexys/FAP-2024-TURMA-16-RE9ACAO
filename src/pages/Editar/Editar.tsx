import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { InputEdit } from "../../components/input-edite/InputEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormStudent } from "../../types/FormStudent";

export const Editar = () => {

    const navigate = useNavigate();
    const [student, setStudent] = useState<FormStudent | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3001/aluno', {
            params: {
                id: 'dd36'
            }
        })
            .then((response) => {
                console.log(response.data)
                setStudent(response.data)
            })
            .catch((error) => {
                throw new Error(error)
            });
    }, []);

    return (
        <div className="flex flex-col gap-12">
            <div className="mt-24 flex flex-col gap-3">
                <h1 className="text-3xl font-bold">Configurações de Perfil</h1>
                <div className="border-2 border-b-black"></div>
            </div>
            <div className="flex gap-40">
                <div className="w-[60%]">
                    <form className="flex flex-col gap-3">
                        <div>
                            <InputEdit
                                type="text"
                                label="Nome"
                                value={student?.name as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="CPF"
                                value={student?.cpf as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Email"
                                value={student?.email as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Telefone"
                                value={student?.phone as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="UF"
                                value={student?.uf as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Cidade"
                                value={student?.city as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Bairro"
                                value={student?.neighborhood as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="Rua"
                                value={student?.street as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="text"
                                label="CEP"
                                value={student?.cep as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="password"
                                label="Senha Atual"
                                value={student?.password as string}
                            />
                        </div>
                        <div>
                            <InputEdit
                                type="password"
                                label="Nova Senha"
                                value={''}
                            />
                        </div>
                    </form>
                </div>
                <div className="w-[40%] flex flex-col gap-2 items-center">
                    <h3 className="font-semibold">Alterar foto de perfil</h3>
                    <div className="w-52 h-52 rounded-full bg-gray-300"></div>
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button children="Cancelar" variant="transparent" type="button" onClick={() => navigate('/configuracao')} />
                <Button children="Salvar" variant="solid" type="submit" />
            </div>
        </div>
    );
};