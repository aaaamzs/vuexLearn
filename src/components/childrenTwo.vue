<template>
  <div class="hello">
        <h2>children2</h2>
        <span>子组件向父组件传值：</span>
        <input type="text" v-model="childrenValue">
        <button @click="funChild">传值</button>
        <br>
        <span>绑定兄弟组件值（vuex）：</span>
        <input type="text" v-model="$store.state.globalData">
  </div>
</template>

<script>
export default {
  name: "childrenTwo",
  data() {
    return {
      msg: "Welcome to my project",
      childrenValue:''
    };
  },
  methods:{
      funChild(){
          this.$emit('childByValue',this.childrenValue);
        //   this.$store.commit('isGlobal',5);
          this.$store.dispatch('getGlobal',6) 
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
