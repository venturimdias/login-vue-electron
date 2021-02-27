<template>
  <div class="home flex">
    <nav>
        <router-link to="/login">Login</router-link> 
        <router-link to="/Cadastrar">Cadastrar</router-link> 
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style scoped>
.home{
  height:100vh;
  align-items:center;
  justify-content: center;
  flex-direction: column;
}
.home nav a{
  display: inline-flex;
  padding:1rem 2.5rem;
  background:var(--bg-degrade);
  color:var(--branco);
  text-decoration: none;
  margin:0 .5rem;
}
</style>