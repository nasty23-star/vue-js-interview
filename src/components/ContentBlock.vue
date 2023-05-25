<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-select
            v-model="variant"
            :items="items"
            clearable
            label="Filter by country"
        ></v-select>

        <v-select
            v-model="variant"
            :items="items"
            clearable
            label="Filter by score"
        ></v-select>
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
        <div v-if="isFiltering" class="text-center">
      <v-progress-circular
        :size="30"
        color="primary"
        indeterminate
      ></v-progress-circular>
        </div>
          <v-list three-line>
            <template v-for="(item, index) in users">
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

              <v-list-item
                  v-else
                  :key="item.title"
              >
                <v-list-item-avatar @click="item.isShow = !item.isShow">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  <div class ="address"><v-list-item-subtitle v-if="item.isShow" v-html="item.address"></v-list-item-subtitle></div>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContentBlock',

    data: () => ({
      items: [
        'russia',
        'usa',
        '> 20',
        '< 10',
      ],
      variant: 'default',
      isFiltering: false,
      users: [
        { header: 'List' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          address: `<span class="text--primary">California, LA</span>`,
          isShow: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          address: `<span class="text--primary">California, SF</span>`,
          isShow: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          address: `<span class="text--primary">Florida, Tampe</span>`,
          isShow: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          address: `<span class="text--primary">Nevada, Las Vegas</span>`,
          isShow: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          address: `<span class="text--primary">Georgia, Atlanta</span>`,
          isShow: false
        },
      ],
    }),
  }
</script>
<style scoped>
.address {
  height: 18px;
}
.text-center {
  padding-top: 10px;
}
</style>
