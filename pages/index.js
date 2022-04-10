import styles from '../styles/Home.module.css'
import ItemLink from '../components/ItemLInk'
import skill from '../components/Skill'
import Skill from '../components/Skill'
import Image from 'next/image'
function onClick(){
  const button = document.getElementById('myButton');
  button.addEventListener('click', function(e) {
    console.log('button was clicked');
  });
}
export default function Home() {
  return  (
    <div>
         <div className={styles.menu}>
            <img className={styles.logo} src="./images/logo.png"/>
              <div className={styles.menulist}style={{}}>
                      <ul>
                      <li><a href="#hero">Home</a></li>
                        <li><a href='#about'>Sobre</a></li>
                        <li><a href='#skills'>Abilidades</a></li>
                        <li><a href='#more'>Mais</a></li>
                      </ul>
              </div> 
         </div>
         <section style={{backgroundImage:"url('./images/background.png')"}} className={styles.hero_box} id="hero">
            <h1>
            Francivaldo Costa
            </h1>
            <h3>
            Programador de Luis Correia-PI, concentrando todos os seus esforços para criar soluções para a sociedade . Um dia ele espera fazer algo que impressione sua mãe.
            </h3>
        </section>
        <section className={styles.about} id="about">
            <div>
                <h1>
                  Sobre Min
                </h1>
                <h3>
                    Hola eu meu nome é <code>Francivaldo Costa Reis</code> sou um Programador de sites e aplicativos android.<p/>
                    Eu tenho o desejo de sempre ser melhor, uma características essencial para alguem que quer sempre entregar o melhor para os outros.
                </h3>
            </div>
              <img src="./images/image_perfil.jpg"/>
        </section>
        <section className={styles.skills} id="skills">
            <h1>
              Ablidades
            </h1>
            <div>
              <div className={styles.div_skill_container}>
                  <Skill src ="./images/ic_java.png" text = "linguagem de programação Java"/>
                  <Skill src ="./images/ic_android.png" text = "criação de apps android"/>
                  <Skill src ="./images/ic_game.png" text = "criação de jogos mobile"/>
                  <Skill src ="./images/ic_firebase.png" text = "plataforma firebase"/>
                  <Skill src ="./images/ic_json.png" text = "documentos json"/>
              </div>
              <div className={styles.div_skill_container}>
                  <Skill src ="./images/ic_android-studio.png" text = "experiencia com Android Studio"/>
                  <Skill src ="./images/ic_design.png" text = "UX/UI design"/>
                  <Skill src ="./images/ic_javascript.png" text = "linguagem de programação javaScript"/>
                  <Skill src ="./images/ic_nodejs.png" text = "plataforma node-js"/>
                  <Skill src ="./images/ic_nextjs.png" text = "framework next-js"/>
              </div>
            </div>
        </section>
        <section className={styles.more} id="more">
            <h1>
              Mais informações:
            </h1>
            <ItemLink src="./images/ic_playStore.png" h3 = "Link: https://play.google.com/store/apps/developer?id=Francivaldo" a="https://play.google.com/store/apps/developer?id=Francivaldo"/>
            <ItemLink src="./images/ic_github.png" h3 = "Link: https://github.com/francivaldo4334" a="https://github.com/francivaldo4334"/>
            <ItemLink src="./images/ic_email.png" h3 = "Email: frncvldreisdeveloper@gmail.com"/>
            <ItemLink src ="./images/ic_whatsapp.png" h3 = "(86)981266564"/>
        </section>
    </div>

  )
}