import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";
import axios from "axios";

type AuthProviderProps = {
    children: ReactNode;
};

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authenticateUser = async (login: string, password: string) => {
    const response = await axios.get("http://localhost:3001/users", {
        params: {
            login,
            password
        }
    });

    return response.data;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (logindata: { login: string, password: string }) => {
        const userData = await authenticateUser(logindata.login, logindata.password);
        if (userData) {
            setUser(userData);
        } else {
            alert('Credenciais invalidas');
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
