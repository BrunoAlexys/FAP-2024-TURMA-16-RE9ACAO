import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";
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

// Dados fixos para autenticação
const FIXED_USERS: User[] = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "Admin@123",
        userType: "aluno"
    },
    {
        id: 2,
        email: "admin@gmail.com",
        password: "Admin@123",
        userType: "professor"
    },
    {
        id: 3,
        email: "admin@gmail.com",
        password: "Admin@123",
        userType: "empresa"
    },
    {
        id: 4,
        email: "admin@gmail.com",
        password: "Admin@123",
        userType: "instituição"
    }
];

const authenticateUser = async (email: string, password: string, userType: string) => {
    // Simula a verificação local com os dados fixos
    const user = FIXED_USERS.find(
        u => u.email === email && u.password === password && u.userType === userType
    );

    if (user) {
        return user;
    } else {
        console.error('Credenciais inválidas');
        return null;
    }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [alert, setAlert] = useState<AlertState | null>(null);

    const showAlert = (type: AlertState['type'], message: string) => {
        setAlert({ type, message });
    };

    const login = async (loginData: { email: string; password: string; userType: string }): Promise<boolean> => {
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
    };

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
