import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai"

const icons = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineCloseCircle />
}

export default function Notification({type="info", message, onClose}) {
    return (
        <div className={`notification ${type}`}>
            {icons[type]}
            {message}
            <AiOutlineClose color="white" />
        </div>
    )
}