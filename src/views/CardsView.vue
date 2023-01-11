<template>
  <v-main>
    <card-view/>
    <card-view-2/>
    <card-view-3/>
  </v-main>
</template>

<script>
import CardView from '@/components/CardView.vue';
import CardView2 from '@/components/CardView2.vue';
import CardView3 from '@/components/CardView3.vue';

export default {
  components: {
    CardView,
    CardView2,
    CardView3
  }

}
</script>

<style>

</style>