<template>
  <v-container class="container">
    <v-select
      input
      type="text"
      :value="searchByCountry"
      @input="setSearch"
      :items="countrys"
      clearable
      label="Filter by country"
    ></v-select>
  </v-container>
</template>
<script>
export default {
  name: "FilterByCountry",

  data: () => ({
    variant: "default",
  }),
  computed: {
    searchByCountry() {
      return this.$store.state.searchByCountry;
    },
    user() {
      return this.$store.state.users.user;
    },
    countrys() {
      return this.$store.getters.countrys;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    setSearch(e) {
      this.$store.commit("setSearch", e);
    },
  },
};
</script>
<style></style>
