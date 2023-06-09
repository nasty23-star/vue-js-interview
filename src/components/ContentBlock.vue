<template>
  <v-container>
    <v-row align="top" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <FilterByCountry />
        <FilterByScore />
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <UserCards />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FilterByCountry from "./FilterByCountry.vue";
import FilterByScore from "./FilterByScore.vue";
import UserCards from "./UserCards.vue";
export default {
  name: "ContentBlock",
  data: () => ({
    items: "",
    variant: "default",
  }),
  created: {},
  // если раскомментировать, то идет запрос на моковый адрес и приходит объект user
  // mounted() {
  //   this.$store.dispatch("fetchUsers");
  // },
  computed: {},
  methods: {},
  components: { FilterByCountry, FilterByScore, UserCards },
};
</script>
<style scoped>
.country {
  height: 18px;
}
.text-center {
  padding-top: 10px;
}
</style>
