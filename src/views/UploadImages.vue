<template>
    <div>
        <h1>Subir una imagen</h1>

        <form @submit="HandleSubmit">
            <label for="avatar">Choose a profile picture :</label>
            <input type="file" id="avata" accept="image/png, image/jpeg"  @change="UploadImage"/>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return{
            form:{
                name:"",
                avatar:""
            }
        }
    },
    methods:{
        UploadImage(e:any){
                console.log(e.target.files[0])
        },
        HandleSubmit(e:Event){
          e.preventDefault();  
        }
    }
})
</script>
