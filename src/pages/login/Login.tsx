import { useEffect, useState } from "react";
import { Button } from "../../components/button/button";
import { DiagonalSection } from "../../components/diagonal-section/DiagonalSection";
import Logo from './assets/logo.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { FormLogin } from "../../types/FormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginScheme } from "../../utils/LoginScheme";
import { AlertState } from "../../types/AlertState";
import AlertMobile from "../../components/alerts/alertMobile";

export const Login: React.FC = () => {
    const location = useLocation();

    const options = ['Aluno', 'Professor', 'Empresa', 'Instituição'];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormLogin>({
        resolver: zodResolver(LoginScheme)
    });

    const [alertMobile, setAlertMobile] = useState<AlertState | null>(null);

    const showAlert = (type: AlertState['type'], message: string) => {
        setAlertMobile({ type, message });
    };

    const closeAlert = () => {
        setAlertMobile(null);
    }

    const handleLogin = async (data: FormLogin) => {
        const isAuthenticated = await authenticate({
            email: data.email,
            password: data.password,
            userType: selectedOption.toLowerCase()
        });

        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            reset();
        }
    };


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
            showAlert('error', 'Opção inválida');
        }
    };

    useEffect(() => {
        if (location.state?.cadastroRealizado) {
            showAlert("sucesso", "Cadastro realizado com sucesso!");
        }
    }, [location.state]);

    return (
        <div className="flex justify-center">
            {alertMobile && (
                <>
                    <AlertMobile type={alertMobile.type} message={alertMobile.message} onClose={closeAlert} />
                </>
            )}

            <DiagonalSection text="Login" />

            <div className="absolute flex mt-[150px] sm:mt-[120px] sm:pb-8 md:mt-[250px] lg:mt-[220px] xl:mt-[210px]  w-full">
                <div className="flex flex-col justify-center items-center flex-1 gap-2 lg:border-r-2 border-gray-400">
                    <div>
                        <img src={Logo} alt="Logo da empresa" className="w-[200px] md:w-[350px] xl:w-[260px]" />
                    </div>

                    <div className="mt-4">
                        <select
                            className="bg-colorMenuPrimary p-2 w-48 md:w-56 md:p-3 font-medium rounded-lg text-white appearance-none relative custom-select"
                            value={selectedOption}
                            onChange={e => {
                                const value = e.target.value;
                                console.log('Valor selecionado no select:', value);                                setSelectedOption(value);
                            }}
                        >
                            {options.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>

                    </div>

                    <form onSubmit={handleSubmit(handleLogin)} className="sm:w-[70%] md:w-1/2 lg:w-[60%] flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-bold ml-4 md:text-2xl">Login</label>
                            <input
                                type="text"
                                className={`border-2 border-colorMenuSecondary rounded-full px-4 py-2 w-full focus:outline-none ${errors.email ? 'border-red-500' : 'focus:border-colorMenuPrimary'}`}
                                {...register('email')}
                            />
                            {errors.email && <span className="text-red-500 ml-4 text-xs">{errors?.email?.message}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xl font-bold ml-4 md:text-2xl">Senha</label>
                            <input
                                type="password"
                                className={`border-2 border-colorMenuSecondary rounded-full px-4  py-2 w-full focus:outline-none ${errors.password ? 'border-red-500' : 'focus:border-colorMenuPrimary'}`}
                                {...register('password')}
                            />
                            {errors.password && <span className="text-red-500 ml-4 text-xs">{errors?.password?.message}</span>}
                            <button
                                className="text-xs ml-4 font-normal md:text-lg"
                                onClick={() => navigate('/recuperacaop1')}
                            >
                                Esqueceu sua senha?
                            </button>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <Button type="submit" variant="solid" children="Login" className="h-9 w-32 text-lg md:h-11 md:w-36 md:text-xl" />
                            <button className="text-xs font-normal md:text-lg xl:text-sm " onClick={handleRegisterRedirect}>ou cadastre-se</button>
                        </div>
                    </form>
                </div>

                <div className="hidden lg:flex flex-col gap-6 flex-1 text-center py-8">
                    <h2 className="text-3xl font-semibold mb-4">Quem somos?</h2>
                    <p className="text-gray-600 text-2xl mx-20">
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

