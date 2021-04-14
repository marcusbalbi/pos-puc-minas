<template>
  <section>
    <img src="https://avatars.githubusercontent.com/u/1749375?v=4" />
  </section>
</template>
<script>
export default {
  name: "ProfilePicture"
};
</script>
<style scoped>
section {
  background: inherit;
  display: flex;
  justify-content: center;
}
section > img {
  height: 200px;
  align-self: center;
  border-radius: 50%;
}
</style>