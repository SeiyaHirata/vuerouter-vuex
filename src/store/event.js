import {
  getEventAll,
  getEvent,
  createEvent,
  deleteEvent
} from "@/service/event";

export const event = {
  namespaced: true,
  state: {
    events: [],
    event: {},
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
    updateEvent(state, value) {
      state.event = value;
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
    async getEvent({ commit }, payload) {
      try {
        commit("updateIsLoading", true);
        const response = await getEvent(payload);
        commit("updateEvent", response.data);
      } catch (error) {
        commit("updateEvent", {});
        alert("エラーが発生しました");
      } finally {
        commit("updateIsLoading", false);
      }
    },
    async createEvent({ commit }, payload) {
      try {
        commit("updateIsLoading", true);
        const response = await createEvent(payload);
        commit("updateEvents", response.data);
        alert("イベントを作成しました！");
      } catch (error) {
        alert("エラーが発生しました");
      } finally {
        commit("updateIsLoading", false);
      }
    },
    async deleteEvent({ commit }, payload) {
      try {
        commit("updateIsLoading", true);
        await deleteEvent(payload);
        commit("updateEvent", {});
      } catch (error) {
        alert("エラーが発生しました");
        console.log(error);
      } finally {
        commit("updateIsLoading", false);
      }
    }
  }
};
