<template>
  <div>
    <v-overlay v-if="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-card class="mx-auto mt-5" max-width="344" v-else>
      <EditEventDialog
        :name="event.name"
        :detail="event.detail"
        :color="event.color"
        :start="event.start"
        :end="event.end"
      />
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
        <v-btn
          color="primary"
          fab
          dense
          small
          outlined
          class="ma-2"
          @click="switchEditEventDialog(true)"
        >
          <v-icon>mdi-grease-pencil</v-icon>
        </v-btn>
        <v-btn
          color="red"
          fab
          dense
          small
          outlined
          class="ma-2"
          @click="deleteConfirmDialog = true"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <router-link to="/">ホームに戻る</router-link>
      </v-card-actions>
      <v-dialog v-model="deleteConfirmDialog" max-width="400">
        <v-card>
          <v-card-title>
            <div>本当に削除してよろしいですか？</div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="deleteConfirmDialog = false">
              閉じる
            </v-btn>
            <v-btn @click="deleteEvent" text color="red darken-1">削除</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import EditEventDialog from "@/components/EditEventDialog.vue";

export default {
  name: "Event",
  components: { EditEventDialog },
  data() {
    return {
      deleteConfirmDialog: false
    };
  },
  async created() {
    const id = this.$route.params["id"];
    await this.$store.dispatch("event/getEvent", id);
    this.$store.dispatch("event/getEventAll");
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
  },
  methods: {
    async deleteEvent() {
      const id = this.$route.params["id"];
      await this.$store.dispatch("event/deleteEvent", id);
      this.$router.push("/");
    },
    switchEditEventDialog(value) {
      this.$store.dispatch("switchEditEventDialog", value);
    }
  }
};
</script>
