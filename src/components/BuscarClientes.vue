<template>
    <div class="searchform">
        <h3>Buscar Por Idade</h3>
        <div class="form-group">
            <input type="number" class="form-control" id="idade" required v-model="idade" name="idade">
        </div>

        <div class="btn-group">
            <button v-on:click="buscarClientes" class="btn btn-success">Buscar</button>
        </div>

        <ul class="buscar-resultado">
            <li v-for="(cliente, index) in clientes" :key="index">
                <h5>{{cliente.nome}} ({{cliente.idade}})</h5>
            </li>
        </ul>
    </div>
</template>
<script>

import http from "../http-common";

export default {
    name: "buscar-cliente",
    data() {
        return {
            idade: 0,
            clientes: []
        };
    },

    methods: {
        buscarClientes() {
            http.get("/clientes/idade/" + this.idade)
                .then(response => {
                    this.clientes = response.data;
                    console.log(response.data);
                })

                .catch(e => {
                    console.log(e);
                });
        }
    }
};
</script>
<style>
  
  .searchform {

      max-width: 300px;
      margin:  auto;
  }

  .buscarResultado {
      margin-top: 20px;
      text-align: left;
  }
</style>
