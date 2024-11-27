<template>
  <div class="about">
    <n-card title="Me contacter">
      <a href="https://www.linkedin.com/in/arnaud-pissot-a7512710b/" target="_blank"><LogoLinkedin style="height: 25px; margin-right: 10px;" /><span style="vertical-align: top;">LinkedIn</span></a><br>
      <a href="mailto:arnaud.pissot.auriga@gmail.com"><Mail style="height: 25px; margin-right: 10px;" /><span style="vertical-align: top;">arnaud.pissot.auriga@gmail.com</span></a>
    </n-card>
    <n-card title="Mon CV" style="margin-top:10px;">
            <a href="/files/CV_arnaud_pissot.pdf" target="_blank"><Download style="height: 30px; margin-right: 10px;" /><span style="vertical-align: 0.5em;">Télécharger</span></a><br>
      <n-image
        height="600"
        src="/imgs/CV_arnaud_pissot.png"
      />
    </n-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  LogoLinkedin as LogoLinkedin,
  Mail as Mail,
  Download as Download,
} from "@vicons/ionicons5";

export default defineComponent({
  components: {
    LogoLinkedin,
    Mail,
    Download
  }
});
</script>

<style scoped>
a {
  color: #18a058;
  text-decoration: none;
}
</style>
