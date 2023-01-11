<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="250"
      src="@/assets/fb0b00623a6a588b6b6a86dee573184b.jpg"
    ></v-img>

    <v-card-title>Pravda Italia</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.9"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.9 (500)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Restaurant
      </div>

      <div>Концепция ресторана PRAVDA – это симбиоз итальянской кухни с уклоном на современный московский акцент</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Свободные столики</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>17:30</v-chip>

        <v-chip>19:30</v-chip>

        <v-chip>20:00</v-chip>

        <v-chip>21:00</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
      Зарезервировать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>

<style>

</style>