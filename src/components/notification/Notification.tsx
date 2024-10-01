import { useEffect, useState } from "react";
import { ButtonMenu } from "../button-menu/ButtonMenu";
import clsx from "clsx";
import axios from "axios";

interface NotificationsProps {
    id: number;
    name: string;
    description: string;
}

export const Notification = () => {
    const [notification, setNotification] = useState(false);
    const [notifications, setNotifications] = useState<NotificationsProps[]>([]);
    const [temNotificacao, setTemNotificacao] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/notifications")
            .then((response) => {
                setNotifications(response.data);
                if (response.data.length > 0) {
                    setTemNotificacao(true);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="hidden lg:block">
            <div className={clsx(
                'fixed right-0 bottom-0 w-[320px] h-[80vh] bg-colorBackground rounded-tl-2xl transition-all duration-500 ease-in-out',
                notification ? 'translate-x-0' : 'translate-x-[320px]'
            )}>
                <div className="flex items-center justify-center w-full h-[80px] rounded-tl-2xl bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary">
                    <h2 className="text-xl font-bold text-white">Notificações</h2>
                </div>
                <div className="h-[calc(70vh-80px)] overflow-y-auto">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="flex items-start gap-3 p-2 border-b-2 border-gray-500/15"
                        >
                            <div className="w-12 h-12 rounded-full bg-white"></div>
                            <div>
                                <h3 className="text-lg font-bold">{notification.name}</h3>
                                <p className="text-base font-medium">{notification.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <ButtonMenu
                    tipo="notificacao"
                    temNotificacao={temNotificacao}
                    menu={notification}
                    toggleMenu={() => setNotification(!notification)}
                    target="button"
                    buttonStyle={clsx(
                        'top-40 left-[-56px] rotate-180',
                        notification ? 'opacity-65' : ''
                    )}
                />
            </div>
        </div>
    );
};