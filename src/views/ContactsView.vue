<template>
  <v-main>
    <header-view/>
    <my-contacts/>
  </v-main>
</template>

<script>
import HeaderView from "../components/HeaderView.vue";
import MyContacts from '../components/MyContacts.vue';

export default {
  components: {
    HeaderView,
    MyContacts
  }

}
</script>

<style>

</style>