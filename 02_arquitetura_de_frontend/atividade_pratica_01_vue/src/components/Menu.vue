<template>
  <nav>
    <ul>
      <li>Perfil</li>
      <li>Repositorios</li>
      <li>Estrelas</li>
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
</style>