<template>
  <!-- 参考 -->
  <!-- https://vuetifyjs.com/ja/components/navigation-drawers/ -->
  <div>
    <v-navigation-drawer app v-model="isOpenSideBar" right>
      <v-list-item>
        <v-list-item-title class="title"> TODO </v-list-item-title>
      </v-list-item>
      <v-divider />

      <!-- 参考 -->
      <!-- https://vuetifyjs.com/ja/components/list-item-groups/ -->
      <v-list-item-group color="primary">
        <v-list rounded>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>mdi-plus</v-icon>
                アイテムボタン</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>アイテム</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isOpenSideBar: {
      get() {
        return this.$store.state.isOpenSideBar;
      },
      set(value) {
        this.$store.dispatch("switchSideBar", value);
      }
    }
  },
  methods: {}
};
</script>
