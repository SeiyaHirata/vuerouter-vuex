import Vue from "vue";
import Vuex from "vuex";

import { event } from "@/store/event.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // modulesには他ファイルなどでstoreを定義した時に使用
  modules: {
    event
  },
  // stateは参照専用、直接変更はNG
  state: {
    isOpenSideBar: true,
    createEventDialog: false,
    editEventDialog: false
  },
  // mutationsはstateを変更のみを行う
  mutations: {
    updateIsOpenSideBar(state, value) {
      state.isOpenSideBar = value;
    },
    updateCreateEventDialog(state, value) {
      state.createEventDialog = value;
    },
    switchEditEventDialog(state, value) {
      state.editEventDialog = value;
    }
  },
  actions: {
    switchSideBar({ commit }, payload) {
      // commit("mutations名", 引数)でmutations名を実行できる
      commit("updateIsOpenSideBar", payload);
    },
    switchCreateEventDialog({ commit }, payload) {
      commit("updateCreateEventDialog", payload);
    },
    switchEditEventDialog({ commit }, payload) {
      commit("switchEditEventDialog", payload);
    }
  }
});
