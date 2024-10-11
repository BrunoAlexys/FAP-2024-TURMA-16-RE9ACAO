import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";
import axios from "axios";
import { AlertState } from "../types/AlertState";
import Alert from "../components/alerts/alertDesktop";
import AlertMobile from "../components/alerts/alertMobile";

type AuthProviderProps = {
    children: ReactNode;
};

interface AuthContextType {
    user: User | null;
    login: (userData: { email: string; password: string; userType: string }) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authenticateUser = async (email: string, password: string, userType: string) => {
    try {
        const response = await axios.get(`http://localhost:3001/${userType === 'instituição' ? 'instituicao' : userType}`, {
            params: {
                email,
                password
            }
        });

        const user = response.data;
        if (user && user.length > 0) {
            const foundUser = user[0];
            if (foundUser.email === email && foundUser.password === password) {
                return foundUser;
            } else {
                console.error('Email ou senha incorretos');
                return null;
            }
        } else {
            console.error('Usuário não encontrado');
            return null;
        }
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        return null;
    }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [alert, setAlert] = useState<AlertState | null>(null);

    const showAlert = (type: AlertState['type'], message: string) => {
        setAlert({ type, message });
    };


    const login = async (loginData: { email: string, password: string, userType: string }): Promise<boolean> => {
        try {
            const userData = await authenticateUser(loginData.email, loginData.password, loginData.userType);

            if (userData) {
                setUser(userData);
                return true;
            } else {
                showAlert('error', 'Credenciais inválidas');
                return false;
            }
        } catch (error) {
            console.error('Erro durante a autenticação:', error);
            showAlert('error', 'Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
            return false;
        }
    };

    const closeAlert = () => {
        setAlert(null);
    }

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {alert && (
                <>
                    <div className="hidden lg:block">
                        <Alert type={alert.type} text={alert.message} onClose={closeAlert} />
                    </div>
                    <div className="lg:hidden">
                        <AlertMobile type={alert.type} message={alert.message} onClose={closeAlert} />
                    </div>
                </>
            )}
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
};
