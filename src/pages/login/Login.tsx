import { useState } from "react";
import { Button } from "../../components/button/button";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import Logo from './assets/logo.png';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

export const Login = () => {

    const [selectedOption, setSelectedOption] = useState('Aluno');
    const navigate = useNavigate();
    const options = ['Aluno', 'Professor', 'Empresa', 'Instituição'];
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { login: authenticate } = useAuth();

    const handleLogin = async () => {
        await authenticate({ login, password });
        navigate('/dashbord');
    }

    const handleRegisterRedirect = () => {
        const option = selectedOption.toLowerCase();
        if (option === 'aluno') {
            navigate('/cadastro-aluno');
        } else if (option === 'professor') {
            navigate('/cadastro-professor');
        } else if (option === 'empresa') {
            navigate('/cadastro-empresa');
        } else if (option === 'instituição') {
            navigate('/cadastro-instituicao');
        } else {
            alert('Selecione uma opção válida');
        }
    };


    return (
        <div className="flex justify-center">
            <DiagonalSection text="Login" />

            <div className="absolute flex mt-[150px] md:mt-[200px] lg:mt-[245px] w-full">
                <div className="flex flex-col justify-center items-center flex-1 gap-4 lg:border-r-2 border-gray-400">
                    <div>
                        <img src={Logo} alt="Logo da empresa" width={250} />
                    </div>

                    <div className="mt-4">
                        <select
                            className="bg-colorMenuPrimary p-2 w-48 rounded-lg text-white appearance-none relative custom-select"
                            value={selectedOption}
                            onChange={e => {
                                const value = e.target.value;
                                console.log('Valor selecionado no select:', value); // Verificar o valor selecionado
                                setSelectedOption(value);
                            }}
                        >
                            {options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>

                    </div>

                    <div className="md:w-1/2 lg:w-[60%] flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-bold ml-4">Login</label>
                            <input
                                type="text"
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                                className="border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2 focus:border-colorMenuPrimary"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-bold ml-4">Senha</label>
                            <input
                                type="text"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none focus:border-2 focus:border-colorMenuPrimary"
                            />
                            <a href="#" className="text-xs ml-4">Esqueceu sua senha?</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button type="button" variant="solid" children="Login" size="large" onClick={handleLogin} />
                        <button className="text-[10px]" onClick={handleRegisterRedirect}>ou cadastre-se</button>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-6 flex-1 text-center py-8">
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

