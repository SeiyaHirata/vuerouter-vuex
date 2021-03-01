<template>
  <div class="home">
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-spacer></v-spacer>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :type="type"
        :events="events"
        :event-overlap-threshold="30"
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
  computed: {
    events: {
      get() {
        return this.$store.state.event.events;
      }
    }
  }
};
</script>
