<template>
  <v-main>
    <header-view/>
    <my-account/>
    <footer-view/>
  </v-main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import MyAccount from '../components/MyAccount.vue';
import FooterView from "@/components/FooterView.vue";

export default {
  name: 'AccountView',
  components: {
    MyAccount,
    HeaderView,
    FooterView
}
}
</script>
