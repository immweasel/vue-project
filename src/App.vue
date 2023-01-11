<template>
  <v-app>
    <v-main>
      <router-view/>
      <header-view/>
      <home-view/>
      <CardsView/>
      <contacts-view/>
      <!-- <reviews-view/> -->
    </v-main>
  </v-app>
</template>

<script>

import HeaderView from "./components/HeaderView.vue";
import HomeView from './views/HomeView.vue';
import ContactsView from "./views/ContactsView.vue";
import CardsView from "./views/CardsView.vue";
// import ReviewsView from "./views/ReviewsView.vue";


export default {
  components: {
    HeaderView,
    HomeView,
    ContactsView,
    CardsView,
    // ReviewsView
  }
};

<style>

</style>