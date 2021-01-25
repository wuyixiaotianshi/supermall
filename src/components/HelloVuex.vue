<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.getPowerCount}}</h2>
  </div>
</template>

<script type="text/javascript">
    export default {
        name: 'HelloVuex',
        data() {
            return {

            }
        },
        components: {}
    }
</script>

<style scoped>

</style>