<template>
  <div class="root">
    <Header />
    <router-view class="content" />
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>