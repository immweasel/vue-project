<template>
  <v-main>
    <header-view/>
    <my-account/>
  </v-main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import MyAccount from '../components/MyAccount.vue';

export default {
  name: 'AccountView',
  components: {
    MyAccount,
    HeaderView
}
}
</script>