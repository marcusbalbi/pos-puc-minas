<template>
  <section>
    <h1>Repositorios</h1>
    <ul>
      <li v-for="repo in repos" :key="repo.node_id" ><a :href="repo.html_url" target="_blank" >{{ repo.name }}</a></li>
    </ul>
  </section>
</template>
<script>
import { GithubService } from '../api/GithubService';
export default {
  name: "Repositories",
    data () {
    return {
      repos: {
      }
    }
  },
  async mounted() {
    const githubService = new GithubService();

    const {data} = await githubService.getUserRepositories();
    this.repos = {...data}
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