<template>
  <div class="hello">
    <div>
        <h2>children1</h2>
        <span>接收父组件的传值：</span>
        <span>{{inputFather}}</span>
        <br>
        <span>绑定兄弟组件值（vuex）：</span>
        <input type="text" v-model="$store.state.globalData">
      </div>
  </div>
</template>

<script>
export default {
  name: "childrenOne",
   props:{
        inputFather: String,
        required: true
    },
  data() {
    return {
      msg: "Welcome to my project"
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
