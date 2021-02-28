import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  // stateは参照専用、直接変更はNG
  state: {
    isOpenSideBar: true
  },
  // mutationsはstateを変更のみを行う
  mutations: {
    updateIsOpenSideBar(state, value) {
      state.isOpenSideBar = value;
    }
  },
  //
  actions: {
    switchSideBar({ commit }, payload) {
      // commit("mutations名", 引数)でmutations名を実行できる
      commit("updateIsOpenSideBar", payload);
    }
  }
});
