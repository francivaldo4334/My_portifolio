import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return  (
    <div>
        <div className={styles.background_img}>
          <div className={styles.logo}>
            <img src="./images/logo.png"/>
            <h1>
            Mobile Developer<br/>
            <span>Francivaldo Costa</span>
            </h1>
          </div>
        </div>
        <div className={styles.div_body}>
            <div className={styles.img_perfil}>
               <img src="./images/logo.png"/>
            </div>
            <div className={styles.div_bottom}>
                <h1>Sobre Mim</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...<br/> It is a long established fact that a reader will be distracted by the ...
                </p>
                <h1>Contato</h1>
                <div className={styles.contat_types}>
                    <img src="./images/ic_phone.png"/>
                    <p>(86)981266564</p>
                    <img src="./images/ic_email.png"/>
                    <p>frncvldreisdev@gmail.com</p>
                    <img src="./images/ic_local.png"/>
                    <p>luis_correia,piaui,brasil</p>
                </div>
                <h1>Abilidades</h1>
              </div>
        </div>
    </div>

  )
}