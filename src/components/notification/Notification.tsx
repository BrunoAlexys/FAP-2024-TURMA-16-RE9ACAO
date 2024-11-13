import { useEffect, useRef, useState } from "react";
import { ButtonMenu } from "../button-menu/ButtonMenu";
import clsx from "clsx";
import axios from "axios";
import { NotificacaoItem } from "../notificacao-itens/NotificacaoItens";
import { NotificationPopup } from "../pop-up/popUpNotificacao";

interface NotificationsProps {
    id: number;
    name: string;
    description: string;
    time: string;
    img: string;
    isRead: boolean;
}

export const Notification = () => {
    const [notification, setNotification] = useState(false);
    const [notifications, setNotifications] = useState<NotificationsProps[]>([]);
    const [temNotificacao, setTemNotificacao] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState<NotificationsProps | null>(null);

    useEffect(() => {
        axios.get("http://localhost:3001/notifications")
            .then((response) => {
                setNotifications(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleMarkAsRead = async (notificationId: number) => {
        try {
            const updatedNotifications = notifications.map(notification => {
                if (notification.id === notificationId) {
                    return { ...notification, isRead: true };
                }
                return notification;
            });
    
            const updatedNotification = updatedNotifications.find(notification => notification.id === notificationId);
    
            if (updatedNotification) {
                await axios.put(`http://localhost:3001/notifications/${notificationId}`, updatedNotification);
            }
    
            setNotifications(updatedNotifications);
        } catch (error) {
            console.error(error);
        }
    }

    const prevNotifications = useRef<NotificationsProps[]>([]);

    const hasUnreadNotifications = (notifications: NotificationsProps[]) => {
        return notifications.some((notification)=> !notification.isRead)
    }

    useEffect(()=>{
        if(notifications !== prevNotifications.current){
            setTemNotificacao(hasUnreadNotifications(notifications))
            prevNotifications.current = notifications
        }
    }, [notifications])

    const handleNotificationClick = (notification: NotificationsProps) => {
        setSelectedNotification(notification);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedNotification(null);
    };

    return (
        <div className="hidden lg:block">
            <div className={clsx(
                'fixed right-0 bottom-0 w-[320px] h-[80vh] bg-colorBackground rounded-tl-2xl transition-all duration-500 ease-in-out',
                notification ? 'translate-x-0' : 'translate-x-[320px]'
            )}>
                <div className="flex items-center justify-center w-full h-[80px] rounded-tl-2xl bg-gradient-to-r from-colorMenuPrimary to-colorMenuSecondary">
                    <h2 className="text-xl font-bold text-white">Notificações</h2>
                </div>
                <div className="h-[calc(70vh-10px)] overflow-y-auto flex flex-col gap-2 p-2">
                    {notifications.map((notification) => (
                        <NotificacaoItem 
                            key={notification.id}
                            titulo={notification.name}
                            time={notification.time}
                            descricao={notification.description}
                            imagem={notification.img}
                            isRead={notification.isRead}
                            onClick={() => {
                                handleNotificationClick(notification)
                                handleMarkAsRead(notification.id)
                            }} // Atualizado para abrir o popup
                        />
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

            {showPopup && selectedNotification && (
                <NotificationPopup
                    onClose={closePopup}
                    titulo={selectedNotification.name}
                    time={selectedNotification.time}
                    descricao={selectedNotification.description}
                    imagem={selectedNotification.img}
                />
            )}
        </div>
    );
};
