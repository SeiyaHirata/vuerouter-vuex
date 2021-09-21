<template>
  <v-app>
    <CreateTaskDialog />
    <Sidebar />
    <v-app-bar app color="primary" dark>
      {{ isOpenSideBar }}
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn icon @click="switchDark">
        <!-- アイコンサイト https://pictogrammers.github.io/@mdi/font/2.0.46/ -->
        <v-icon>{{
          isDark ? "mdi-weather-night" : "mdi-weather-sunny"
        }}</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="switchSideBar"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import CreateTaskDialog from "@/components/CreateTaskDialog.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    CreateTaskDialog
  },
  data() {
    return {};
  },
  computed: {
    isOpenSideBar: {
      get() {
        return this.$store.state.isOpenSideBar;
      }
    },
    isDark: {
      get() {
        return this.$vuetify.theme.dark;
      }
    }
  },
  methods: {
    switchSideBar() {
      const isOpenSideBar = this.$store.state.isOpenSideBar;
      this.$store.dispatch("switchSideBar", !isOpenSideBar);
    },
    switchDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
