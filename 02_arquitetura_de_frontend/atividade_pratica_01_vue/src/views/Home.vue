<template>
  <section>
    <h1>Perfil</h1>
    <ul>
      <li><span>Empresa: </span> {{ profile.company }}</li>
      <li><span>Localização: </span> {{ profile.location }}</li>
      <li><span>Email: </span> {{ profile.email || "Não Informado" }}</li>
      <li><span>Website: </span> <a :href="profile.blog" >{{ profile.blog }}</a></li>
      <li><span>Github: </span><a :href="profile.html_url" >{{ profile.login }}</a></li>
      <li><span>Twitter: </span><a :href="twitter_url" >{{ profile.twitter_username }}</a></li>
    </ul>
  </section>
</template>
<script>
import { GithubService } from '../api/GithubService';
export default {
  name: "Home",
  data () {
    return {
      profile: {
      }
    }
  },
  async mounted() {
    const githubService = new GithubService();

    const {data} = await githubService.getUserInfo();
    this.profile = {...data}
  },
  computed: {
    twitter_url () {
      return `https://twitter.com/${this.profile.twitter_username}`
    }
  }
};
</script>
<style scoped>
section > ul {
  margin-top: 1.5rem;
}
section > ul > li {
  padding: 0.2rem;
}
section > ul > li > span {
  font-weight: bold;
}
</style>