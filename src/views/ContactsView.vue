<template>
  <v-main>
    <header-view/>
    <my-contacts/>
    <footer-view/>
  </v-main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import MyContacts from '../components/MyContacts.vue';
import FooterView from "@/components/FooterView.vue";

export default {
  components: {
    HeaderView,
    MyContacts,
    FooterView
  }

}
</script>

<style>
.v-main__wrap {
  display: flex; 
  flex-direction: column;
}
</style>