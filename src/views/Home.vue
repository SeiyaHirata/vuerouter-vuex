<template>
  <div class="home">
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        fab
        dense
        small
        class="ma-2"
        @click="switchCreateEventDialog(true)"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type"
        :events="events"
        :event-overlap-threshold="30"
        @click:event="toEventPage"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      type: "month",
      types: ["month", "week", "day", "4day"],
      value: ""
    };
  },
  async created() {
    this.$store.dispatch("event/getEventAll");
  },
  computed: {
    events: {
      get() {
        return this.$store.state.event.events;
      }
    }
  },
  methods: {
    switchCreateEventDialog(value) {
      this.$store.dispatch("switchCreateEventDialog", value);
    },
    toEventPage(value) {
      this.$router.push(`/event/${value.event.eventNo}`);
    }
  }
};
</script>
