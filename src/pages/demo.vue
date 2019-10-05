<template>
  <div class="hello">
    <button @click="getPhpData">getData</button>
    <label>
      <input v-model="dataFromNode" type="text" name="">
    </label>
  </div>
</template>

<script>
  import {giveSomeJson} from '../api'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataFromNode:'empty'
    }
  },
  methods:{
    async getPhpData() {
      let result = await  giveSomeJson();
      console.log(result);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
