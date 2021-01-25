<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
    {{message}}
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Home",
  data() {
    return {
      message: "你好啊",
      path: "/home/news",
    };
  },
  // 创建实例的时候回调的函数
  created() {
    console.log("创建");
  },
  activated() {
    console.log("activated");
    //重复进入相同路由
    this.$router.push(this.path).catch(error => error);
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log(this.$route.path);
    
    this.path = this.$route.path;
    next()
  },
};
</script>

<style  scoped>
</style>
