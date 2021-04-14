<template>
  <section>
    <h1>{{ completeName }}</h1>
    <article>
      {{ profile.bio }}
    </article>
  </section>
</template>
<script>
export default {
  name: "ProfilePicture",
  props: {
    profile: {
      type: Object,
      default: () => {
        return {
          login: "",
          name: "",
          bio: ""
        }
      }
    }
  },
  computed: {
    completeName() {
      return this.profile.login
    }
  }
};
</script>
<style scoped>
section {
  background: inherit;
  color: white;
}
section > h1 {
  font-size: 2rem;
  margin-top: 1.5rem;
}
section > article {
  margin-top: .5rem;
}
</style>