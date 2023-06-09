<template>
  <v-container>
    <v-select
      input
      type="text"
      :value="searchByScore"
      @input="setScore"
      :items="scores"
      clearable
      label="Filter by score"
    ></v-select>
  </v-container>
</template>
<script>
export default {
  name: "FilterByScore",

  data: () => ({
    variant: "default",
  }),
  computed: {
    users() {
      return this.$store.state.users;
    },
    searchByScore() {
      return this.$store.state.searchByScore;
    },
    scores() {
      return this.$store.getters.scores;
    },
  },
  methods: {
    setScore(e) {
      this.$store.commit("setScore", e);
    },
  },
};
</script>
