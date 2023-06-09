<template>
  <v-list three-line>
    <template v-for="(item, index) in filteredCards">
      <v-subheader
        v-if="item.header"
        :key="item.header"
        v-text="item.header"
      ></v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item v-else :key="item.title">
        <v-list-item-avatar @click="item.isShow = !item.isShow">
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          <div class="country">
            <v-list-item-subtitle
              v-if="item.isShow"
              v-html="item.country"
            ></v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
export default {
  name: "UserCards",
  data: () => ({
    items: "",
    variant: "default",
  }),
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredCards() {
      return this.$store.getters.getFiltered;
    },
    filteredByCountrys() {
      return this.$store.getters.getSearchByCountry;
    },
    filteredByScore() {
      return this.$store.getters.getSearchByScore;
    },
  },
};
</script>
