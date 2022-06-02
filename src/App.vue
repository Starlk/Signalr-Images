<template>
    <header class="navbar is-transparent is-link text-white header">
        <nav class="navbar-menu">
          <ul class="navbar-start">
            <li v-for="route in routes" class="navbar-item  ">
            <router-link :to="route.path" class="text is-white">{{route.name}}</router-link>
            </li>
          </ul>
        </nav>
    </header>

    <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import routes from "./router/routes";
export default defineComponent({
    data(){
        return{
            routes,
        }
    }
});
</script>

<style>
.text{
    color: white;
    font-size: 1.5rem;
    padding: .5em;
}
.header{
    box-shadow: -12px 13px 38px -23px rgba(38,37,37,0.6);
    margin-bottom: 1em;
}
</style>
