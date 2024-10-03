import { Button } from "../../components/button/button";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import { Input } from "../../components/input/input";
import { InputType } from "../../enum/input-type";
import Logo from './assets/logo.png';

export const Login = () => {
    const options = ['Aluno', 'Professor', 'Empresa', 'Instituição de Ensino'];

    return (
        <div>
            <DiagonalSection text="Login" />

            <div className="flex mt-[275px] mx-6">
                <div className="flex flex-col justify-center items-center flex-1 gap-4 border-r-2 border-gray-400">
                    <div>
                        <img src={Logo} alt="Logo da empresa" width={250} />
                    </div>

                    <div className="mt-4">
                        <select className="bg-colorMenuPrimary p-2 rounded-lg text-white appearance-none relative custom-select">
                            {options.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <div>
                            <Input label="Login" type={InputType.Text} />
                        </div>
                        <div>
                            <Input label="Senha" type={InputType.Password} />
                            <a href="#" className="text-xs ml-4">Esqueceu sua senha?</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button type="button" variant="solid" children="Login" size="large" />
                        <a href="#" className="text-[10px]">ou cadastre-se</a>
                    </div>
                </div>

                <div className="flex flex-col gap-6 flex-1 text-center py-8">
                    <h2 className="text-3xl font-semibold mb-4">Quem somos?</h2>
                    <p className="text-gray-600 text-2xl mx-10">
                        <strong className="block font-bold text-black">A Re9Ação - Soluções Integradas</strong>
                        é uma empresa com sede em Recife e atuação nacional. Oferecemos serviços
                        personalizados que agregam valor e satisfação aos clientes, com foco em
                        resultados, eficiência e compromisso.
                    </p>
                </div>
            </div>
        </div>
    );
};

