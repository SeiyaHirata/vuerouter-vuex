<template>
  <div>
    <!-- router-linkをクリックするとtoに設定したページに遷移できる -->
    <router-link to="/">ホームに戻る</router-link>
    <router-link to="/event/1">イベント1</router-link>
    <router-link to="/event/2">イベント2</router-link>
    <router-link to="/event/3">イベント3</router-link>
    <h1>イベントナンバー{{ eventNo }}</h1>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
  computed: {
    eventNo: {
      get() {
        return this.$route.params["eventNo"]; // URLのeventNoを取得
      }
    }
  }
};
</script>
