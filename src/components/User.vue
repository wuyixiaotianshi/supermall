<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户信息</p>
    <p>{{userId}}</p>
    <p>{{$route.params.userId}}</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "User",
  // created() {
  //   document.title = "用户";
  // },
  computed: {
    userId() {
      return this.$route.params.userId;
      // console.log(this.$route.params.id);
    },
  },
};
</script>

<style  scoped>
</style>
