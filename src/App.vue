<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
  import Login from './pages/Login/Login'
  import BaseInform from './pages/Admin/AdminIndex'
  export default {
    components: {
      Login,
      BaseInform
    }
  }
</script>
<style scoped>

</style>
