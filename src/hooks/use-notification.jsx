import { useCallback, useState } from "react";
import Notification from "../components/notification";

export default function useNotification(position='bottom-left') {
    const [notification, setNotification] = useState(null)
    
    let timer;

    const triggerNotification = useCallback((notificationProps) => {
        clearTimeout(timer)
        setNotification(notificationProps)
        timer = setTimeout(() => {
            setNotification(null)
        }, notificationProps.duration)
    }, [])

    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <Notification {...notification} />
        </div>
    ) : null;

    return {NotificationComponent, triggerNotification}
}