<template>
  <div>
    <v-dialog v-model="createTaskDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">予定を追加</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeDialog">
            閉じる
          </v-btn>
          <v-btn color="blue darken-1" text>
            作成
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateTaskDialog",
  computed: {
    createTaskDialog: {
      get() {
        return this.$store.state.createTaskDialog;
      },
      set(value) {
        this.$store.dispatch("switchCreateTaskDialog", value);
      }
    }
  },
  methods: {
    closeDialog() {
      this.$store.dispatch("switchCreateTaskDialog", false);
    }
  }
};
</script>
