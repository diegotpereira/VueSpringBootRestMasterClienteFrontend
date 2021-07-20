<template>
    <div v-if="this.cliente">
        <h3>Cliente</h3>
        <div>
            <label>Nome: </label> {{this.cliente.nome}}
        </div>
        <div>
            <label>Idade: </label> {{this.cliente.idade}}
        </div>
        <div>
            <label>Ativo: </label> {{this.cliente.ativo}}
        </div>

        <span v-if="this.cliente.ativo" v-on:click="atualizarAtivo(false)" class="button is-small btn-primary">
            Inativo
        </span>
        <span v-else v-on:click="atualizarAtivo(true)" class="button is-small btn-primary">
            Ativo
        </span>

        <span class="button is-small btn-danger" v-on:click="excluirCliente()">
            Excluir
        </span>
    </div>

    <div v-else>
        <br/>
        <p>Por favor clique em um cliente...</p>
    </div>
</template>
<script>

import http from "../http-common";
export default {
    
    name: "cliente",
    props: ["cliente"],

//     computed: {
//     id() {
//       return this.$route.params.id;
//     },
//   },

    methods: {
        atualizarAtivo(status) {
            var data = {
                id: this.cliente.id,
                nome: this.cliente.nome,
                idade: this.cliente.idade,
                ativo: status
            };

            http.put("/cliente/" + this.cliente.id, data)
                .then(response => {
                    console.log(response.data);
                    // this.cliente.ativo = response.data.status; verificar
                    
                })
                .catch(e => {
                    console.log(e);
                });
        },

        excluirCliente() {
            http.delete("/cliente/" + this.cliente.id)
                .then(response => {
                    console.log(response.data);
                    this.$emit("refreshData");
                    this.$router.push('/');
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }
};
</script>
<style>
    
</style>