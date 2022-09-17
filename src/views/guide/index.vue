<template>
  <div>
    <el-card>

    </el-card>
  </div>
</template>

<script>
  import {Loading} from 'element-ui';

  export default {
    data() {
      return {
        options: {},
        loadingInstance: undefined,
      }
    },
    created() {
      this.loadingInstance = Loading.service(this.options)
    }
  }
</script>

<style scoped>

</style>