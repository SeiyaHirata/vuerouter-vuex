export const event = {
  namespaced: true,
  state: {
    events: [
      {
        eventNo: 1,
        name: "Vue&TS勉強会",
        start: "2021-03-21",
        end: "2021-03-23",
        color: "blue",
        detail: "",
        timed: false
      },
      {
        eventNo: 2,
        name: "Vue.js応用勉強会",
        start: "2021-03-07",
        end: "2021-03-07",
        color: "green",
        detail: "",
        timed: false
      }
    ]
  },
  getters: {
    event: state => eventNo => {
      return state.events.find(value => value.eventNo == eventNo);
    }
  },
  mutations: {
    updateEvents(state, value) {
      state.events.push(value);
    }
  },
  actions: {
    createEvent({ commit }, payload) {
      commit("updateEvents", payload);
    }
  }
};
