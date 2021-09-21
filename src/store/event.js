import { getEventAll } from "@/service/event";

export const event = {
  namespaced: true,
  state: {
    events: []
  },
  getters: {
    event: state => eventNo => {
      return state.events.find(value => value.eventNo == eventNo);
    }
  },
  mutations: {
    updateEventsAll(state, value) {
      state.events = value;
    },
    updateEvents(state, value) {
      state.events.push(value);
    }
  },
  actions: {
    // イベント一覧取得
    async getEventAll({ commit }) {
      try {
        const response = await getEventAll();
        commit("updateEventsAll", response.data);
      } catch (error) {
        alert("エラーが発生しました");
        commit("updateEventsAll", []);
      }
    },
    createEvent({ commit }, payload) {
      commit("updateEvents", payload);
    }
  }
};
