import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {//要设置的全局访问的state对象
    globalData:0,  //要设置的初始属性值
}
const getters = {   //实时监听state值的变化(最新状态)
    changeGlobal(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.globalData
    }
};
const mutations = {
    isGlobal(state,sum) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.globalData+=sum;
    },
};
const actions = {
    getGlobal(context,num){   //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性,num为要变化的形参
        context.commit('isGlobal',num)
     }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
 
export default store;