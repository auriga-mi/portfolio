<template>
  <!-- 
      Bonjour et bienvenue sur mon portfolio
      Si vous passez par ici c'est que vous lisez mon code (peut-être) afin de regarder sa structure !
      J'ai principalement créé cette composition Vue afin de pouvoir la tester via webdriver.io et vous donner un aperçu de certaines de mes compétences ! 
  -->
  <div>
    <!-- J'intègre le contenu dynamiquement dans ma modal au moment de l'afficher tirant partie de la réactivité de vue -->
    <n-modal 
      v-model:show="showModal"
      :title="modalTitle"
      id="modalTest"
      size="huge"
      preset="card"
      style="width: 600px;"
    >

        <span v-html="modalContent"></span>
    </n-modal>
    <!-- Ici on centre notre div principale -->
    <div class="center-vertically">
      <div class="wrapper rounded">
          <n-progress
            type="circle"
            style="width:240px; margin-left: -20px;"
            :show-indicator="false"
            status="success"
            :percentage="percentage"
          />
          <img src="@/assets/arnaud.jpg" alt="Arnaud Pissot's photo" width="200" height="200" class="rounded" style="margin-left: -220px; position:relative; top:-14px;">
          <Transition name="fade" mode="out-in">
            <h2 v-if="showName" id="nameTest" style="margin-left: 20px;">Arnaud Pissot - QC Tester</h2>
            <h2 v-else style="opacity:0;">-</h2>
          </Transition>
          <Transition name="fade" mode="out-in">
            <p v-if="showName" style="margin-left: 20px; margin-top: -20px;">ISTQB certified</p>
            <p v-else style="opacity:0; margin-top: -20px;">-</p>
          </Transition>
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <n-button v-if="percentage>=15" id="istqb" class="floatingObject" @click="showModal=true; setModal('ISTQB');"></n-button>
      <div v-else id="istqb" class="floatingObject" style="opacity:0;"></div>
    </Transition>
    <Transition name="fade" mode="out-in">
      <n-button v-if="percentage>=35" id="postman" class="floatingObject" @click="showModal=true; setModal('Postman');"></n-button>
      <div v-else id="postman" class="floatingObject" style="opacity:0;"></div>
    </Transition>
    <Transition name="fade" mode="out-in">
      <n-button v-if="percentage>=50" id="hurl" class="floatingObject" @click="showModal=true; setModal('Hurl');"></n-button>
      <div v-else id="hurl" class="floatingObject" style="opacity:0;"></div>
    </Transition>
    <Transition name="fade" mode="out-in">
      <n-button v-if="percentage>=65" id="webdriverio" class="floatingObject" @click="showModal=true; setModal('Webdriverio');"></n-button>
      <div v-else id="webdriverio" class="floatingObject" style="opacity:0;"></div>
    </Transition>
    <Transition name="fade" mode="out-in">
      <n-button v-if="percentage>=80" id="bash" class="floatingObject" @click="showModal=true; setModal('Bash');"></n-button>
      <div v-else id="bash" class="floatingObject" style="opacity:0;"></div>
    </Transition>
  </div>
</template>

<script>
//
// Bonjour et bienvenue sur mon portfolio
// Si vous passez par ici c'est que vous lisez mon code (peut-être) afin de regarder sa structure !
// J'ai principalement créé cette composition Vue afin de pouvoir la tester via webdriver.io et vous donner un aperçu de certaines de mes compétences !
// 
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    // Fonction pour augmenter le pourcentage
    // On part de 0 et on ajoute +2% toutes les 50ms
    // Le pourcentage sert de trigger pour différentes animations
    const percentageRef = ref(0);
    var loading = setInterval(incrementPercentage, 50);
    function incrementPercentage() {
      if (percentageRef.value >= 100){
        clearInterval(loading);
        return;
      }
      percentageRef.value+=2;
    }
    return {
      percentage: percentageRef,
      showModal: ref(false),
      modalTitle: "",
      modalContent: ""
    }
  },
  computed: {
    // J'ai créé une seule méthode pour montrer son utilisation
    showName() {
      return this.percentage >= 10 ? true : false;
    }
  },
  methods: {
    setModal: function (paragraph) {
      switch(paragraph) {
        case "ISTQB":
          this.modalTitle = "Testeur Certifié ISTQB";
          this.modalContent = "Je suis testeur logiciel depuis 9 ans, durant ces années j'ai mis à profit ces compétences dans le domaine du test manuel :<br>- Vérification de critères d'acceptation<br>- Conception de cas de tests avec leurs jeux de données associés<br>- Mise en place d'un outil de gestion des exigences et du patrimoine de tests<br>- Définition et documentation des procédures de test de l'entreprise<br>- Développement de mon sens critique et de mon intuition<br>- Formation et coordination des testeurs au sein de l'entreprise";
          break;
        case "Postman":
          this.modalTitle = "Postman";
          this.modalContent = "J'ai une connaissance de l'outil Postman dans les tests d'API mais j'ai toujours pratiqué postman dans sa version gratuite sur mes propres suites.";
          break;
        case "Hurl":
          this.modalTitle = "Tests d'API via Hurl";
          this.modalContent = "Hurl est mon outil de tests d'API préféré ! <br>Il peut être intégré facilement dans des pipelines CI/CD avec un minimum d'effort.<br><br>Autre coup de coeur :<br>C'est un outil développé en Open Source par des français des équipes d'Orange !";
          break;
        case "Webdriverio":
          this.modalTitle = "Tests fonctionnels automatisés avec Webdriver.IO";
          this.modalContent = "Webdriver.io est mon framework d'automatisation des tests fonctionnels préféré :)<br><br>Il offre une grande polyvalence avec node.js et supporte des frameworks comme Electron qui dispose de peu de candidats pour l'automatisation des tests sur des versions de production.";
          break;
        case "Bash":
          this.modalTitle = "Bash et Administration système";
          this.modalContent = "Je suis passionné par l'administration système, dans le cadre de mon travail et de mes hobbies :<br>- J'héberge ce site sur mon infrastructure personnelle<br>- J'automatise des tâches et tests en bash<br>- J'ai une connaissance avancée dans différents systèmes (Linux, macOS, Windows)";
          break;
        default:
          console.error("Le paragraphe demandé n'existe pas ;)");
      }
    }
  }
});
</script>

<style scoped>
  .center-vertically {
    position: absolute;
    text-align: center;
    margin: auto;
    width: 100%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .wrapper {
    display: inline-block;
  }

  .rounded {
    border-radius: 50%;
  }

  .fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  .floatingObject {
    height: 50px;
    width: 50px;
    border-radius: 20%;
    background-color: #f0f0f0;
    background-position: center;
    background-repeat: no-repeat;
  }

  #istqb {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-190px, 0px);
    transform: translate(-190px, 0px);
    background-image: url("../assets/ISTQB.png");
    background-size: 45px;
  }

  #postman {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-180px, -150px);
    transform: translate(-180px, -150px);
    background-image: url("../assets/postman.png");
    background-size: 50px;
  }

  #hurl {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-30px, -235px);
    transform: translate(-30px, -235px);
    background-image: url("../assets/hurl.png");
    background-size: 50px;
  }

  #webdriverio {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(130px, -150px);
    transform: translate(130px, -150px);
    background-image: url("../assets/webdriverio.png");
    background-size: 50px;
  }

  #bash {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(140px, -0px);
    transform: translate(140px, -0px);
    background-image: url("../assets/bash.png");
    background-size: 50px;
  }
</style>