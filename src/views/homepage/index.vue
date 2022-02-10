<template>
  <div id="homepage">
    <sidebar></sidebar>
    <div id="l-side"></div>
    <div id="r-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/homepage/sidebar.vue";
export default {
  name: "homepage",
  components: {
    sidebar,
  },
};
</script>

<style scoped>
#homepage {
  width: 100%;
  min-height: 100vh;
  background: rgba(247, 248, 250, 1);
  display: flex;
  justify-content: space-between;
}
#l-side {
  width: 340px;
  min-height: 100vh;
  background: pink;
}
#r-main {
  width: calc(100% - 340px);
  min-height: 100vh;
  background: green;
}
</style>