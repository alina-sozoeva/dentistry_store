import { Flex } from "antd"
import styles from './ServicesCard.module.scss'


export const ServicesCard = ({ icon, color, title, onClick }) => {
    return (
        <div className={styles.card} style={{ backgroundColor: color }} onClick={onClick}>
            {icon && <span>{icon}</span>}
            <span className={!icon ? 'text-center' : ''}>{title}</span>
        </div>
    )
}