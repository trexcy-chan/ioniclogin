<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/signup"></ion-back-button>
        </ion-buttons>
        <ion-title>Admin Sign Up</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Admin Sign Up</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-avatar class="avatar ion-padding-top">
          <img src="../assets/logo.jpeg" />
        </ion-avatar>
        <ion-item>
          <ion-icon :src="person"></ion-icon>
          <ion-label position="undefined">Name</ion-label>
          <ion-input type="text" v-model="txtname" placeholder="Name"></ion-input>
        </ion-item>

        <ion-item>
          <ion-icon :src="home"></ion-icon>
          <ion-label>Purok</ion-label> 
          <ion-select>
            <ion-select-option value="01">Riverside</ion-select-option>
            <ion-select-option value="02">Sulondon</ion-select-option>
            <ion-select-option value="03">Seaside</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-icon :src="people"></ion-icon>
          <ion-label>User Type</ion-label> 
          <ion-select>
            <ion-select-option value="01">Barangay Admin</ion-select-option>
            <ion-select-option value="02">Purok Admin</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>  
          <ion-icon :src="key"></ion-icon>
          <ion-label position="undefined">PIN</ion-label>
          <ion-input type="password" placeholder="PIN" maxlength="5"></ion-input>
        </ion-item>

        <ion-item>  
          <ion-icon :src="person"></ion-icon>
          <ion-label position="undefined">Position</ion-label>
          <ion-input type="text" placeholder="Position"></ion-input>
        </ion-item>

        <ion-item>  
          <ion-icon :src="call"></ion-icon>
          <ion-label position="undefined">Phone Number</ion-label>
          <ion-input type="tel" placeholder="Phone Number" maxlength="11"></ion-input>
        </ion-item>

        <ion-item>
          <ion-icon :src="lockClosed"></ion-icon>
          <ion-label position="undefined">Password</ion-label>
          <ion-input type="password" v-model="txtpassword" placeholder="Password"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-icon :src="lockClosed"></ion-icon>
          <ion-label position="undefined">Verify Password</ion-label>
          <ion-input type="password" v-model="txtveripass" placeholder="Verify Password"></ion-input>
        </ion-item>

        <ion-item>
            <ion-checkbox color="primary"></ion-checkbox>
            <ion-label>
             &nbsp; I Agree to Terms and Conditions
              </ion-label>
        </ion-item>

        <ion-button shape="round" expand="full" @click="Register">Submit</ion-button>

      <ion-text color="secondary">  
            <a href='/signup_admin'> Sign Up as Admin</a>
        </ion-text>

         

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
  IonBackButton,
  IonButton,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { call, person, lockClosed, home, people, key } from "ionicons/icons";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButton,
    IonInput,
  },
  data() {
    return {
      txtname: "",
      txtpassword: "",
      txtveripass: "",
    };
  },
  methods: {
    Register() {
      if (this.txtname == "") {
        alert("Please input a valid name!");
      } else if (this.txtpassword.length < 8){
        alert("Please enter atleast 8 characters!");
      } else if(this.txtveripass != this.txtpassword)
      alert("Did not match!");
      else {
        alert("success");
      }
    },
  },
  setup() {
    return {
      call,
      person,
      lockClosed,
      home,
      people,
      key
    };
  },
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
.avatar {
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