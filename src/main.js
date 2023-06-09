import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state() {
    return {
      searchByCountry: "",
      searchByScore: "",
      countrys: ["USA", "Russia"],
      scores: [">20", "<10"],
      users: [
        { header: "List" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          country: `USA`,
          isShow: false,
          score: 5,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          country: `USA`,
          isShow: false,
          score: 25,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          country: `Russia`,
          isShow: false,
          score: 7,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          country: `Russia`,
          isShow: false,
          score: 22,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          country: `Russia`,
          isShow: false,
          score: 15,
        },
      ],
    };
  },
  actions: {
    fetchUsers({ commit }) {
      const baseURL = "https://dummyjson.com/users/1";

      axios
        .get(baseURL)
        .then((response) => {
          commit("setUsers", response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mutations: {
    setSearch(state, searchByCountry) {
      state.searchByCountry = searchByCountry;
    },
    setScore(state, searchByScore) {
      state.searchByScore = searchByScore;
    },
    setUsers(state, user) {
      state.users.push(user);
    },
  },
  getters: {
    getFiltered(state) {
      if (!state.searchByCountry && !state.searchByScore) {
        return state.users;
      }
      if (state.searchByCountry && !state.searchByScore) {
        return state.users.filter(
          (user) => user.country == state.searchByCountry
        );
      }
      if (state.searchByCountry && state.searchByScore) {
        return state.users
          .filter((user) => user.country == state.searchByCountry)
          .filter((user) =>
            state.searchByScore == ">20"
              ? user.score > 20
              : state.searchByScore == "<10"
              ? user.score < 10
              : user
          );
      }
      if (!state.searchByCountry && state.searchByScore) {
        return state.users.filter((user) =>
          state.searchByScore == ">20"
            ? user.score > 20
            : state.searchByScore == "<10"
            ? user.score < 10
            : user
        );
      }
    },
    countrys(state) {
      return state.countrys;
    },
    scores(state) {
      return state.scores;
    },
  },
});

new Vue({
  vuetify,
  store: store,
  // store,
  render: (h) => h(App),
}).$mount("#app");
