import styles from './ItemServ.module.css'

export default function Skill(props){
    return (
        <div className={styles.d}>
            <img src= {props.src}/>
            <h4>
                {props.text}
            </h4>
        </div>
    )
}