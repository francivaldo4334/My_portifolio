import styles from './ItemLInk.module.css'

function Item(props){
    return (
        <div className={styles.item}>
            <img src={props.src}/>
            <a href={props.a}>
                <h4>{props.h3}</h4>
            </a>
        </div>
    )
}
export default Item;