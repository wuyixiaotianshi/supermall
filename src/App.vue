<template>
  <div id="app">
    <p>
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <!-- <router-link v-bind:to="'/user/'+userId">用户</router-link> -->
      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>
      <!-- <router-link :to="{path:'/profile',query:{
      age:19,height:163,weight:100
    }}">档案</router-link> -->

    </p>
    
    <!-- Profile不添加缓存，多个用逗号分开 -->
    <keep-alive exclude="Profile">
       <router-view />
    </keep-alive>

    <div>
      <p>app内容</p>
      <h2>{{$store.state.counter}}</h2>
      <h2>{{$store.getters.getPowerCount}}</h2>
      <button @click="inc">+</button>
      <button @click="dec">-</button>
      <button @click="addCount(5)">+5</button>
      <button @click="addCount(10)">+10</button>

      <p>hellovuex内容</p>
      <hello-vuex></hello-vuex>
    </div>
    <div>
    <!-- 超过20岁的 -->
    <button @click="addStu">添加学生</button>
      <h3>{{$store.getters.more20stu}}</h3>
      <h3>有{{$store.getters.more20stucount}}人</h3>
      <hr>
      <h3>{{$store.getters.moreAgestu(21)}}</h3>
      <!-- <h3>{{$store.getters.moreAgestu(17).length}}</h3> -->
      <!-- <h3>{{$store.getters.moreAgestuLen }}</h3> -->
    </div>
    <button @click="modifyStu">修改</button>
    <h3>{{$store.state.info}}</h3>

    <p>以下是模块的内容</p>
    <!-- 获取模块的内容只要加上模块的名称即可 -->
    <h3>{{$store.state.a.name}}</h3>
    <button @click="add">改变名称</button>
  </div>
</template>

<script>
    import HelloVuex from "components/HelloVuex.vue"
    export default {
        name: "App",
        data() {
            return {
                userId: "lisi",
            };
        },
        methods: {
            userClick() {
                this.$router.push("/user/" + this.userId);
            },
            profileClick() {
                this.$router.push({
                    path: "/profile",
                    query: {
                        age: 19,
                        height: 163,
                        weight: 100,
                    },
                });
            },
            inc() {
                this.$store.commit('increment')
            },
            dec() {
                this.$store.commit('decrement')
            },

            // 加上任意指定的数字
            addCount(count) {
                // 普通的提交风格
                // this.$store.commit('addCounter', count)
                // 第二种提交风格,返回的count是一个对象
                this.$store.commit({
                    type: 'addCounter',
                    count
                })
            },

            // 添加学生
            addStu() {
                // 添加学生的信息
                const stu = {
                    id: 134,
                    name: 'lili',
                    age: 31
                };
                this.$store.commit('addStu', stu)
            },
            modifyStu() {
                this.$store.commit('modifyStu')
            },

            add() {
                this.$store.commit('add')
            }
        },
        components: {
            HelloVuex
        }
    };
</script>

<style>

</style>