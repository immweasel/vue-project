<template>
  <v-footer class="d-flex flex-column">
      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} <p class="bron">Бронирование ресторанов</p>
      </div>
  </v-footer>
</template>

<script>
  export default {
  }
</script>

<style>
.px-4 {
  margin: 0;
  font-size: 15px;
  margin-top: 10px;
}

.d-flex {
  bottom: 0;
}

.bron {
  margin: 0;
  font-size: 15px;
}

</style>