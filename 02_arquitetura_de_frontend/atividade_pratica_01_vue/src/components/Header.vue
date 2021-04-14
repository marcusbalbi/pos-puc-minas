<template>
  <header>
    <Menu />
    <div class="header-content">
      <ProfilePicture :avatar="profile.avatar_url" class="picture" />
      <ProfileDescription :profile="profile" class="description" />
    </div>
  </header>
</template>
<script>
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";
import ProfileDescription from "./ProfileDescription";
import { GithubService } from "../api/GithubService";
export default {
  name: "Header",
  components: {
    Menu,
    ProfilePicture,
    ProfileDescription,
  },
  data() {
    return {
      profile: {},
    };
  },
  async mounted() {
    const githubService = new GithubService();

    const {data} = await githubService.getUserInfo();
    this.profile = {...data}
  },
};
</script>
<style scoped>
header {
  background: #2f558d;
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
