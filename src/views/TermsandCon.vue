<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Terms and Conditions</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Terms and Condition</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container_terms">
 


        <!-- <ion-item>
          <ion-label>I Agree to the Terms and Conditions</ion-label>
          <ion-checkbox color="primary" slot="start" id="agreed"></ion-checkbox>
        </ion-item> -->
      </div>
      <div id="signup_btn">
        <ion-button shape="round" @click="sign_up">Sign Up</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { call, lockClosed } from "ionicons/icons";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  async mounted() {
        
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        subHeader: "Subtitle",
        message: `This appointment and scheduling system allocates slots on a first come, first served basis.
        Users accept the responsibility for supplying, checking, and
        verifying the accuracy and correctness of the information they
        provide on this system in connection with their application.
        Incorrect or inaccurate information supplied may result in
        forfeiture of passport application.
        Users accept the responsibility for supplying, checking, and
          verifying the accuracy and correctness of the information they
          provide on this system in connection with their application.
          Incorrect or inaccurate information supplied may result in
          forfeiture of passport application.
        `,
        buttons: ["agree", "disagree"],
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log("onDidDismiss resolved with role", role);
    
  },
  methods: {
    sign_up() {
      this.$router.push("/signup");
    },
  },
  setup() {
    return {
      call,
      lockClosed,
    };
  },
});
</script>

<style scoped>
#signup_btn {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 90%;
}
#container_terms {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 10%;
}
.avatar {
  margin: auto;
  height: 150px;
  width: 150px;
}

#container_terms strong {
  font-size: 20px;
  line-height: 26px;
}

#container_terms p {
  font-size: 16px;
  line-height: 22px;
  text-align: justify;

  color: #8c8c8c;

  margin: 0;
}

#container_terms ion-label {
  color: #8c8c8c;
}
#container_terms ion-button {
  margin-bottom: 10%;
}

#container_terms a {
  text-decoration: none;
}
</style>