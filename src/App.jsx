import Notification from './components/notification'
import './App.css'
import useNotification from './hooks/use-notification'

export default function App() {
    const {NotificationComponent, triggerNotification} = useNotification('top-right')

    return (
        <div>
            <button onClick={() => triggerNotification({
                type: "info", 
                message: "Success", 
                duration: 3000, 
                onclose: () => {}
            })}>Trigger Success</button>
            {NotificationComponent}
        </div>
    )
}
