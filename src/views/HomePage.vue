<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login nang ina mo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login nang ina mo</ion-title>
        </ion-toolbar>
      </ion-header>

      
    
      <div id="container">
        <ion-avatar class="avatar ion-padding-top">
          <img src="../assets/logo.jpeg">
        </ion-avatar>
        <ion-item>
          <ion-icon :src = "call" ></ion-icon>
          <ion-input type="tel" placeholder="Phone Number" maxlength="11"></ion-input>
        </ion-item>

        <ion-item>
          <ion-icon :src = "lockClosed" ></ion-icon>
          <ion-input type="password" placeholder="Password"></ion-input>
        </ion-item>

        <ion-button shape="round" expand="full">Login</ion-button>
        <ion-button shape="round" href ="/terms" expand="full" color="medium" fill="outline">Sign up</ion-button>

       

          <ion-text color="secondary">    
            <a href='/forgot_pass'> Forgot Password ?</a>
          </ion-text>

  
      </div>
      
     
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/vue';
import { defineComponent } from 'vue';
import { call, lockClosed } from 'ionicons/icons';

export default defineComponent({
  components: {  
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText
  },setup(){
    return{
      call,
      lockClosed
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.avatar{
  margin: auto;
  height: 150px;
  width: 150px;
}


#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>