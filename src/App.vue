<template>
  <el-container id="app">
    <el-aside id="aside" width="200px">
      <left-aside />
    </el-aside>
    <el-main id="main">
      <router-view></router-view>
      <main-section-edit />
    </el-main>
  </el-container>
</template>

<script>
  import LeftAside from "@/components/LeftAside"
  import MainSection from "@/components/MainSection"
  import MainSectionEdit from "@/components/MainSection/edit"

  export default {
    name: 'App',
    components: {
      LeftAside,
      MainSection,
      MainSectionEdit
    },
    mounted() {
    },
  };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#aside{
  width: 200px;
}
#main{
  width: 100%;
}
</style>
