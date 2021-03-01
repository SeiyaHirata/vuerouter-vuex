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
    createTaskDialog: false
  },
  // mutationsはstateを変更のみを行う
  mutations: {
    updateIsOpenSideBar(state, value) {
      state.isOpenSideBar = value;
    },
    updateCreateTaskDialog(state, value) {
      state.createTaskDialog = value;
    }
  },
  actions: {
    switchSideBar({ commit }, payload) {
      // commit("mutations名", 引数)でmutations名を実行できる
      commit("updateIsOpenSideBar", payload);
    },
    switchCreateTaskDialog({ commit }, payload) {
      commit("updateCreateTaskDialog", payload);
    }
  }
});
