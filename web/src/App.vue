<template>
  <allmenu></allmenu>
  <RouterView />
</template>

<script>
export default {
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0;')
  }
}
</script>
<style>
</style>
