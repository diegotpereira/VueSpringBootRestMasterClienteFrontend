<template>
     <div id="app" class="container-fluid">
       <div class="site-info">
         <h1>DTP SOFTWARE</h1>
         <h2>Vue Spring Boot Full Stack</h2>
       </div>
       <nav >
         <router-link class="btn btn-primary" to="/">Lista de Clientes</router-link>
         <router-link class="btn btn-primary" to="/add">Novo Cliente</router-link>
         <router-link class="btn btn-primary" to="/buscar">Buscar Clientes</router-link>
       </nav>
       <br />
       <router-view/>
     </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-left: 5px;
}

.container-fluid {
  text-align: center;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
