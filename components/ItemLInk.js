import styles from './ItemLInk.module.css'

function Item(props){
    return (
        <div className={styles.item}>
            <img src={props.src}/>
            <a href={props.a}>
                <h3>{props.h3}</h3>
            </a>
        </div>
    )
}
export default Item;