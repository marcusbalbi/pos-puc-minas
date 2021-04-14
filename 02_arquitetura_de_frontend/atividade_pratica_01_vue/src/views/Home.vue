<template>
  <section>
    <h1>Perfil</h1>
    <ul>
      <li><span>Empresa:</span> A4PM</li>
      <li><span>Localização:</span> Nova Friburgo RJ Brazil</li>
      <li><span>Email:</span> balbimarcus@gmail.com</li>
      <li><span>LinkedIn:</span> https://www.linkedin.com/in/marcus-balbi/</li>
      <li><span>Twitter:</span> https://twitter.com/marcusbalbi</li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "Home",
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