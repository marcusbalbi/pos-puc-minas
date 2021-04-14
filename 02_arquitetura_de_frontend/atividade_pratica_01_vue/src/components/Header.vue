<template>
  <header>
    <Menu />
    <div class="header-content">
      <ProfilePicture class="picture" />
      <ProfileDescription class="description" />
    </div>
  </header>
</template>
<script>
import Menu from "./Menu"
import ProfilePicture from "./ProfilePicture"
import ProfileDescription from "./ProfileDescription"
export default {
  name: "Header",
  components: {
    Menu,
    ProfilePicture,
    ProfileDescription
  }
};
</script>
<style scoped>
header {
  background: #2F558D;
  height: 300px;
  display: flex;
  flex-direction: column;
}
header > .header-content {
  display: flex;
  flex: 1 1 auto;
}
header > .header-content > .picture {
  flex: 0 1 40%;
}

header > .header-content > .description {
  flex: 1 1 auto;
}
</style>