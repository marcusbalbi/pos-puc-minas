<template>
  <section>
    <h1>Seguidores</h1>
    <ul>
      <li v-for="follower in followers" :key="follower.node_id" ><a :href="follower.html_url" target="_blank" >{{ follower.login }}</a></li>
    </ul>
  </section>
</template>
<script>
import { GithubService } from '../api/GithubService';
export default {
  name: "Followers",
    data () {
    return {
      followers: []
    }
  },
  async mounted() {
    const githubService = new GithubService();

    const {data} = await githubService.getUserFollowers();
    this.followers = [...data]
  },
}
</script>
<style scoped>
section > ul {
  margin-top: 1.5rem;
}
section > ul > li {
  padding: 0.2rem;
}
</style>