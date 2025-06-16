import { useState } from "react";
import Notification from "../components/notification";
import '../components/notification.css'

export default function useNotification(position='top-right') {
    const [notification, setNotification] = useState(null)

    function triggerNotification(notificationProps) {
        setNotification(notificationProps)
        setTimeout(() => {
            setNotification(null)
        }, notificationProps.duration)
    }

    const NotificationComponent = notification ? (
        <div className={`${position}`}>
            <Notification {...notification} />
        </div>
    ) : null;

    return {NotificationComponent, triggerNotification}
}