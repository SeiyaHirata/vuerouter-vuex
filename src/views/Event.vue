<template>
  <div>
    <v-overlay v-if="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-card class="mx-auto mt-5" max-width="344" v-else>
      <v-card-text>
        <p class="display-1 text--primary">
          {{ event.name }}
        </p>
        <div class="text--primary">開始日 {{ event.start }}</div>
        <div class="text--primary">終了日 {{ event.end }}</div>
        <p class="display-1 text--primary">
          詳細
        </p>
        <div class="text--primary">
          {{ event.detail ? event.detail : "詳細なし" }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-chip class="ma-2 white--text" :color="event.color">
          {{ event.color }}
        </v-chip>
        <router-link to="/">ホームに戻る</router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
  async created() {
    const id = this.$route.params["id"];
    this.$store.dispatch("event/getEvent", id);
  },
  computed: {
    event: {
      get() {
        return this.$store.state.event.event;
      }
    },
    isLoading: {
      get() {
        return this.$store.state.event.isLoading;
      }
    }
  }
};
</script>
