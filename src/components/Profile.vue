<template>
  <div>
    <p>我是Profile组件1</p>
    <p>我今年{{$route.query.age}}岁</p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Profile",
  data() {
    return {};
  },
   created() {
    console.log("Profile创建");
  },
  components: {},
};
</script>

<style  scoped>
</style>
