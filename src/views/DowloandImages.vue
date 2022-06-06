<template>
    <h1>Dowloand images</h1>
    <div v-if="!photo">
      <a class="button is-loading">Loading</a>
    </div>
    <img :src="photo" alt="imagen" v-if="photo" />
  
</template>

<script lang="ts">
import SignalRConnection from "../SignalR";
import { defineComponent } from "vue";
import { ref } from "vue";
const connection = SignalRConnection.connect();
connection.start().then(()=>console.log("Start connection"));
export default defineComponent({
  setup(){
      const photo = ref("")
      connection.on("ReceiveMessage", (path) => {
        console.log(`path ${path}`)
      photo.value = path;
    });
    return{
      photo
    }
  }

});
</script>
