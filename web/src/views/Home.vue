<template>
  <div class="home">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      headTitle: '主页'
    }
  },
  methods: {

  }
}
</script>

<style>

.home{
  margin:0;
}
</style>