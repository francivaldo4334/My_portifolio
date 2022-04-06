import styles from "./Skill.module.css"

export default function Skill(props){
    return (
        <div className={styles.div_skill}>
            <img src= {props.src}/>
            <h4>
                {props.text}
            </h4>
        </div>
    )
}