import Notification from './components/notification'
import './components/notification.css'
import useNotification from './hooks/use-notification'

export default function App() {
    const {NotificationComponent, triggerNotification} = useNotification('bottom-left')

    return (
        <div>
            <button onClick={() => triggerNotification({
                type: "success", 
                message: "The test was successfull", 
                duration: 3000, 
                onclose: () => {}
            })}>
                Trigger Success
            </button>
            <button onClick={() => triggerNotification({
                type: "error", 
                message: "The test was failed", 
                duration: 3000, 
                onclose: () => {}
            })}>
                Trigger Error
            </button>
            <button onClick={() => triggerNotification({
                type: "info", 
                message: "The test was new!", 
                duration: 3000, 
                onclose: () => {}
            })}>
                Trigger info
            </button>
            <button onClick={() => triggerNotification({
                type: "warning", 
                message: "The test is warning", 
                duration: 3000, 
                onclose: () => {}
            })}>
                Trigger warning
            </button>
            {NotificationComponent}
        </div>
    )
}
