<template>
  <v-main>
    <router-view/>
    <header-view/>
    <cards-view/>
    <footer-view/>
  </v-main>
</template>

<script>

import HeaderView from "../components/HeaderView.vue";
import CardsView from "./CardsView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  components: {
    HeaderView,
    CardsView,
    FooterView
  }
}
</script>

<style>

</style>