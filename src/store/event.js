import { getEventAll } from "@/service/event";

export const event = {
  namespaced: true,
  state: {
    events: [],
    isLoading: false
  },
  getters: {
    event: state => id => {
      return state.events.find(value => value.id == id);
    }
  },
  mutations: {
    updateEventsAll(state, value) {
      state.events = value;
    },
    updateEvents(state, value) {
      state.events.push(value);
    },
    updateIsLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    // イベント一覧取得
    async getEventAll({ commit }) {
      try {
        commit("updateIsLoading", true);
        const response = await getEventAll();
        commit("updateEventsAll", response.data);
      } catch (error) {
        alert("エラーが発生しました");
        commit("updateEventsAll", []);
      } finally {
        commit("updateIsLoading", false);
      }
    },
    createEvent({ commit }, payload) {
      commit("updateEvents", payload);
    }
  }
};
