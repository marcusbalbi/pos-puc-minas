<template>
  <section>
    <img :src="avatar" />
  </section>
</template>
<script>
export default {
  name: "ProfilePicture",
  props: {
    avatar: {
      type: String
    }
  }
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