<template>
  <div>
    <v-overlay v-if="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-card class="mx-auto mt-5" max-width="344" v-else>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ event.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="my-5">詳細</v-list-item-subtitle>
          <v-list-item-subtitle>{{ event.detail }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-chip class="ma-2" :color="event.color">
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
