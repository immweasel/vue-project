<template>
  <div>
    <v-main>
      <header-view/>
      <review-view/>
      <footer-view/>
    </v-main>
  </div>
</template>

<script>

import ReviewView from '@/components/ReviewView.vue';
import HeaderView from "../components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  components: {
    ReviewView,
    HeaderView,
    FooterView
  }
}
</script>

<style>

</style>