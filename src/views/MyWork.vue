<template>
  <div class="about">
    <n-card title="Mes projets">
    <n-tabs type="line" animated>
      <n-tab-pane name="portfolio" tab="Portfolio">
        Mon portfolio est un simple exemple technique en <a href="https://vuejs.org/" target="_blank">Vuejs</a> utilisant <a href="https://www.naiveui.com/" target="_blank">naiveUI</a> disponible sur mon <a href="https://github.com/auriga-mi/portfolio" target="_blank">github</a><br>
        La première page de ce site est testée avec Webdriver.io à des fins de démonstration.<br><br>
        <n-image-group>
            <n-image
              height="200"
              src="/imgs/portfolio.png"
              style="margin-right: 10px;"
            />
            <n-image
              height="200"
              src="/imgs/webdriverio.gif"
              style="margin-right: 10px;"
            />
            <n-image
              height="200"
              src="/imgs/spec-report.png"
              style="margin-right: 10px;"
            />
        </n-image-group>
      </n-tab-pane>
      <n-tab-pane name="homeassistant" tab="Home Assistant">
        Installation, configuration et administration d'un serveur <a href="https://www.home-assistant.io/" target="_blank">Home Assistant</a> sur un hyperviseur <a href="https://www.proxmox.com/" target="_blank">ProxMox</a><br>
        Gestion d'un réseau domotique pour le chauffage, les lumières, suivi de consommation et autres appareils.<br><br>
        <n-image-group>
            <n-image
              height="200"
              src="/imgs/home-assistant1.png"
              style="margin-right: 10px;"
            />
            <n-image
              height="200"
              src="/imgs/home-assistant2.png"
              style="margin-right: 10px;"
            />
        </n-image-group>
      </n-tab-pane>
      <n-tab-pane name="logo" tab="Mon logo">
        Graphiste de formation, j'ai des appétences en UI/UX et en création graphique.<br>
        Mon style graphique se s'inspîre généralement de la géométrie et de l'espace vers des designs épurés, c'est pourquoi mon logo se base sur la <a href="https://fr.wikipedia.org/wiki/Cocher_(constellation)" target="_blank">constellation du Cocher</a>.<br><br>
        <n-image
          height="200"
          style="background-color: #cccccc; padding: 20px;"
          src="/imgs/logo.png"
        />
      </n-tab-pane>
    </n-tabs>
  </n-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { NImage, NImageGroup } from "naive-ui";

export default defineComponent({
  components: {
    NImage,
    NImageGroup
  }
});
</script>

<style scoped>
a {
  color: #18a058;
  text-decoration: none;
}
</style>
