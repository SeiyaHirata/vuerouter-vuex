<template>
  <div>
    <v-dialog v-model="createEventDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">予定を追加</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="タイトル"
                  v-model="eventName"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-menu
                  v-model="startMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="startDate"
                      label="開始日"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="startDate"
                    :max="endDate"
                    @input="startMenu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-col cols="6">
                <v-menu
                  v-model="endMenu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="endDate"
                      label="終了日"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    @input="endMenu = false"
                    :min="startDate"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <v-menu close-on-content-click :nudge-width="200" offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    :color="eventLabelColor"
                    dark
                    rounded
                    v-bind="attrs"
                    v-on="on"
                  >
                    ラベルの色
                  </v-btn>
                </template>

                <v-sheet elevation="10" rounded="xl">
                  <div class="pa-4">
                    <v-chip-group v-model="selectColorNo" mandatory column>
                      <v-chip
                        v-for="color in colors"
                        :key="color"
                        :color="color"
                        text-color="white"
                        filter
                      >
                        {{ color }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-sheet>
              </v-menu>
              <v-col cols="12">
                <v-text-field label="詳細" v-model="eventDetail"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="closeDialog">
            閉じる
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createEvent"
            :disabled="inputCheck"
          >
            作成
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CreateEventDialog",
  data() {
    return {
      eventName: "",
      eventDetail: "",
      selectColorNo: 0,
      startDate: "",
      endDate: "",
      startMenu: false,
      endMenu: false,
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
        "red"
      ]
    };
  },
  computed: {
    createEventDialog: {
      get() {
        return this.$store.state.createEventDialog;
      },
      set(value) {
        this.$store.dispatch("switchCreateEventDialog", value);
      }
    },
    eventLabelColor: {
      get() {
        return this.colors[this.selectColorNo];
      }
    },
    inputCheck: {
      get() {
        return !this.eventName || !this.startDate || !this.endDate;
      }
    }
  },
  methods: {
    closeDialog() {
      this.eventName = "";
      this.startDate = "";
      this.endDate = "";
      this.eventDetail = "";
      this.$store.dispatch("switchCreateEventDialog", false);
    },
    createEvent() {
      const payload = {
        eventNo: this.$store.state.event.events.length + 1,
        name: this.eventName,
        start: this.startDate,
        end: this.endDate,
        color: this.eventLabelColor,
        detail: this.eventDeteil,
        timed: false
      };
      this.$store.dispatch("event/createEvent", payload);
      this.closeDialog();
    }
  }
};
</script>
