import { useEffect, useRef, useState } from "react";
import { NotificacaoItem } from "../../components/notificacao-itens/NotificacaoItens";
import axios from "axios";
import clsx from "clsx";
import { NotificationPopupMobile } from "../../components/pop-up/popUpNotificacaoMobile";
import { ButtonMenu } from "../../components/button-menu/ButtonMenu";


export const NotificacoesMobile = () => {
    interface NotificationsProps {
        id: number;
        name: string;
        description: string;
        time: string;
        img: string;
        isRead: boolean;
    }

    const [notification, setNotification] = useState(false);
    const [notifications, setNotifications] = useState<NotificationsProps[]>([]);
    const [temNotificacao, setTemNotificacao] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState<NotificationsProps | null>(null);


    useEffect(() => {
        axios
            .get("http://localhost:3001/notifications")
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
        <div className="px-4 py-2 flex flex-col items-center gap-6 max-h-[calc(100vh-92px)] lg:max-h-screen overflow-auto">
            {notifications.map((notification)=>(
              <NotificacaoItem 
                key={notification.id}
                time={notification.time}
                descricao={notification.description}
                imagem={notification.img}
                titulo={notification.name}
                isRead={notification.isRead}
                onClick={()=> handleNotificationClick(notification)} 
              />
            ))}

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

            {showPopup && selectedNotification && (
                            <NotificationPopupMobile
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
