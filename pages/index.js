import styles from '../styles/Home.module.css'
import ItemLink from '../components/ItemLInk'
import Skill from '../components/Skill'
import Icon from '../components/Icon'
import ItemServ from '../components/ItemServ'
function myFunction() {
  /* Get the text field */
  var copyText = "5586981266564";
  navigator.clipboard.writeText(copyText);
  console.log("hellow");

  /* Alert the copied text */
  alert("Numero copiado: " + copyText);
}
export default function Home() {
  return  (
    <div>
         <div className={styles.navigation_bar}>
              <ul>
              <li><a href="#hero">inicio</a></li>
                <li><a href='#about'>sobre</a></li>
                <li><a href='#skills'>habilidades</a></li>
                <li><a href='#more'>serviços</a></li>
              </ul>
         </div>
         <section className={styles.hero_box} id="hero">
           <div>
           <img src="./images/image_perfil.jpg"/>
            <h1>Francivaldo Costa Reis<p/><span>desenvolvedor de software</span></h1>
            <div>
              <Icon href="https://www.instagram.com/francivaldo.programador" src="./images/ic_instagram.svg"/>
              <button  onClick={myFunction}>
              <Icon src="./images/ic_whatsapp.svg"/>
              </button>
            
              <Icon href="https://www.linkedin.com/feed/?trk=seo-authwall-base_google-one-tap-submit" src="./images/ic_linkedin.svg"/>
              <Icon href="https://www.facebook.com/francivaldo.costa.758399" src="./images/ic_facebook.svg"/>
            </div>
           </div>
        </section>
        <section className={styles.about} id="about">
                <h1>
                  Sobre Min
                </h1>
                <div>
                  <img src="./images/image_perfil.jpg"/>
                  <h3>
                  Programador de Luís Correia-PI, concentrando todos os seus esforços para criar soluções para a sociedade. Um dia ele espera fazer algo que impressione sua mãe.</h3>
                </div>
        </section>
        <section className={styles.skills} id="skills">
            <h1>
            Habilidades
            </h1>
            <div>
              <Skill src ="./images/ic_java.svg" text = "Linguagem de programação Java."/>
              <Skill src ="./images/ic_android.svg" text = "Criação de aplicativos androide."/>
              <Skill src ="./images/ic_game.svg" text = "Criação de jogos para celulares."/>
              <Skill src ="./images/ic_firebase.svg" text = "Plataforma Firebase."/>
              <Skill src ="./images/ic_json.svg" text = "Documentos Json."/>
              <Skill src ="./images/ic_android_studio.svg" text = "Experiencia com Android Studio."/>
              <Skill src ="./images/ic_design_1.svg" text = "UX/UI design."/>
              <Skill src ="./images/ic_site.svg" text = "Desenvolvimento de sites."/>
            </div>
        </section>
        <section className={styles.more} id="more">
            <ItemServ src ="./images/ic_smartphone.svg" text = "Desenvolvimento de aplicativos para androide."/>
            <ItemServ src ="./images/ic_playstore.svg" text = "postagem de aplicativos na play store"/>
            <ItemServ src ="./images/ic_design.svg" text = "design de aplicativos,sites e design grafico"/>
            <ItemServ src ="./images/ic_marketing.svg" text = "(EM BREVE)serviço de markenting digital em instagram,facebook e whatsapp"/>
            
        </section>
        <div className={styles.div_bottom}>
          <ItemLink a="https://play.google.com/store/apps/developer?id=Francivaldo" src="./images/ic_playstore_1.svg" h3="Meus projetos na play-store." />
          <ItemLink a="https://goo.gl/maps/UTacLqQqo5DTnbhC8" src="./images/ic_local.svg" h3="Brasil,Luis Correia-PI,n 1850" />
        </div>
    </div>
  )
}