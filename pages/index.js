import styles from '../styles/Home.module.css'
import ItemLink from '../components/ItemLInk'
import skill from '../components/Skill'
import Skill from '../components/Skill'

export default function Home() {
  return  (
    <div>
         <div className={styles.menu}>
            <img className={styles.logo} src="./images/logo.png"/>
            <div>
                <ItemLink src ="./images/ic_whatsapp.png" h3 = "(86)981266564"/>
                <ItemLink src ="./images/ic_local.png" h3 = "luis_correia,piaui,brasil"/>
                <img className={styles.btn_menu} src="./images/ic_menu.png"/>
            </div>
         </div>
         <section style={{backgroundImage:"url('./images/background.png')"}} className={styles.hero_box}>
            <h1>
            Francivaldo Costa
            </h1>
            <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...
            </h3>
        </section>
        <section className={styles.about}>
            <div>
                <h1>
                  Sobre Min
                </h1>
                <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. ... It is a long established fact that a reader will be distracted by the ...
                </h3>
            </div>
            <img/>
        </section>
        <section className={styles.skills}>
            <h1>
              Ablidades
            </h1>
            <div>
              <div className={styles.div_skill_container}>
                  <Skill src ="./images/ic_java.png" text = "linguagem de programação Java"/>
                  <Skill src ="./images/ic_nodejs.png" text = "plataforma node-js"/>
                  <Skill src ="./images/ic_nextjs.png" text = "framework next-js"/>
                  <Skill src ="./images/ic_android.png" text = "criação de apps android"/>
                  <Skill src ="./images/ic_javascript.png" text = "linguagem de programação javaScript"/>
              </div>
              <div className={styles.div_skill_container}>
                  <Skill src ="./images/ic_design.png" text = "UX/UI design"/>
                  <Skill src ="./images/ic_android-studio.png" text = "experiencia com Android Studio"/>
                  <Skill src ="./images/ic_json.png" text = "documentos json"/>
                  <Skill src ="./images/ic_game.png" text = "criação de jogos mobile"/>
                  <Skill src ="./images/ic_firebase.png" text = "plataforma firebase"/>
              </div>
            </div>
        </section>
        <section className={styles.more}>
            <h1>
              Mais informações:
            </h1>
            <ItemLink src="./images/ic_github.png" h3 = "Link: https://github.com/francivaldo4334" a="https://github.com/francivaldo4334"/>
            <ItemLink src="./images/ic_playStore.png" h3 = "Link: https://play.google.com/store/apps/developer?id=Francivaldo" a="https://play.google.com/store/apps/developer?id=Francivaldo"/>
            <ItemLink src="./images/ic_email.png" h3 = "Email: frncvldreisdeveloper@gmail.com"/>
        </section>
    </div>

  )
}