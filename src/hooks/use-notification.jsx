import { useState } from "react";
import Notification from "../components/notification";

export default function useNotification(position='top-right') {
    const [notification, setNotification] = useState(null)

    function triggerNotification(notificationProps) {
        setNotification(notificationProps)
    }

    const NotificationComponent = notification ? (
        <div>
            <Notification {...notification} />
        </div>
    )
}