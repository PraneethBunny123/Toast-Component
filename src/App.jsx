import Notification from './components/notification'
import './App.css'
import useNotification from './hooks/use-notification'

export default function App() {
    const {NotificationComponent, triggerNotification} = useNotification('top-right')

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
            {NotificationComponent}
        </div>
    )
}
