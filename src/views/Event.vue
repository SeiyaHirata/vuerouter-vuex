<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="344">
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
  computed: {
    event: {
      get() {
        return this.$store.getters.event(this.$route.params["eventNo"]);
      }
    }
  }
};
</script>
