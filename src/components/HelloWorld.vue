<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div>
        <h2>父组件</h2>
        <span>父组件向子组件（children1）传值：</span>
        <input type="text" v-model="FatherToData" >
        <br>
        <span>接收子组件（children2）的传值：</span>
        <span>{{fromChildrenTwoData}}</span>
      </div>
      <childrenOne class="dis_i_b" :inputFather = 'FatherToData'></childrenOne>
      <childrenTwo class="dis_i_b" @childByValue='funChildByValue'></childrenTwo>
    </div>
  </div>
</template>

<script>
import childrenOne from "./childrenOne"
import childrenTwo from "./childrenTwo"

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to my project",
      FatherToData:'',
      fromChildrenTwoData:''
    };
  },
  components:{
    childrenOne,
    childrenTwo
  },
  methods:{
    funChildByValue(childValue){
      this.fromChildrenTwoData = childValue;
    }
  }
};
</script>

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
.dis_i_b{
  display: inline-block;
  width: 45%;
  margin-top: 25px;

}
</style>
