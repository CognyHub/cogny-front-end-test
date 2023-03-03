import styles from  './Container.module.css'
export function Container(props) {
    return(
        <di className = {`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </di>
    )
}
