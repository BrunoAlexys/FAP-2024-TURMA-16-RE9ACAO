import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";
import axios from "axios";

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
        const response = await axios.get(`http://localhost:3001/${userType}`, {
            params: {
                email,
                password
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
    }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (logindata: { email: string, password: string, userType: string }): Promise<boolean> => {
        try {
            const userData = await authenticateUser(logindata.email, logindata.password, logindata.userType);

            if (userData) {
                setUser(userData);
                return true; // Autenticação bem-sucedida
            } else {
                alert('Credenciais inválidas');
                return false; // Autenticação falhou
            }
        } catch (error) {
            console.error('Erro durante a autenticação:', error);
            alert('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
            return false; // Erro durante a autenticação
        }
    };



    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
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
