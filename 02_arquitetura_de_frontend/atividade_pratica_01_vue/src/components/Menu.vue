<template>
  <nav>
    <ul>
      <li><router-link to="/">Perfil</router-link></li>
      <li><router-link to="/repositories">Repositorios</router-link></li>
      <li><router-link to="/followers">Seguidores</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Menu"
};
</script>
<style scoped>
nav {
  background: inherit;
  height: 50px;
}
nav > ul {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  list-style: none;
}
nav > ul > li {
  color: #FFFFFF;
  font-size: 1.2rem;
  margin-left: 0.8rem;
}
a:link, a:visited, a:active {
  text-decoration: none;
  color: #FFFFFF;
}

a:hover {
  color: #C0C0C0;
}

</style>