import { useEffect, useState } from "react";
import { NotificacaoItem } from "../../components/notificacao-itens/NotificacaoItens";
import axios from "axios";

export const NotificacoesMobile = () => {
    interface NotificationsProps {
        id: number;
        name: string;
        description: string;
        time: string;
        img: string;
        isRead: boolean;
    }

    const [notifications, setNotifications] = useState<NotificationsProps[]>([]);

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
                onClick={()=>handleMarkAsRead(notification.id)}
              />
            ))}
        </div>
    );
};
