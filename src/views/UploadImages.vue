<template>
  <div>
    <h1>Subir una imagen</h1>

    <form @submit="HandleSubmit">
      <label for="avatar">Choose a profile picture :</label>
      <input
        type="file"
        id="avata"
        accept="image/png, image/jpeg"
        @change="UploadImage"
      />
      <input type="submit" value="Subir Imagen" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InitialForm from "../interface/form";
import SendForm from "../services/Http";
import { UploadImageAPI } from "../router/PathAPI";
import SignalRConnection from "../SignalR";

const form: InitialForm = {
  name: "",
  photo: "",
};
const Conection = SignalRConnection.connect();
Conection.start().then(()=>console.log("conexion start"))
export default defineComponent({
  data() {
    return {
      form: form,
    };
  },
  methods: {
    UploadImage(e: any) {
      this.form = {
        name: e.target.files[0].name.replace(/\s+/g, ""),
        photo: e.target.files[0],
      };
      console.log(this.form);
    },
    async HandleSubmit(e: Event) {
      e.preventDefault();
      const res = await SendForm(UploadImageAPI, this.form);
      await Conection.invoke("SendMessage", res).catch((e) => console.log(e));
     
    },
  },
});
</script>
