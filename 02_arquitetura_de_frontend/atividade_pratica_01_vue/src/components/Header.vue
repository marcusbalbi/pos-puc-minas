<template>
  <header>
    <Menu />
  </header>
</template>
<script>
import Menu from "./Menu"
export default {
  name: "Header",
  components: {
    Menu
  }
};
</script>
<style scoped>
header {
  background: #2F558D;
  height: 300px;
}
</style>