import styles from './Icon.module.css'
export default function main(props){
    return <a href={props.href} className = {styles.a}><img src={props.src} className = {styles.img}/></a>
}