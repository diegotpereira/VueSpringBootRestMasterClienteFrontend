<template >
    <div leave-class="list row">
        <div class="col-md-6">
            <h3>Lista de Clientes</h3>
            <ul>
                <li v-for="(cliente, index) in clientes" :key="index">
                    <router-link :to="{
                        name: 'cliente-detalhes',
                        params: {cliente: cliente, id: cliente.id}
                    }">
                       {{cliente.nome}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshLista"></router-view>
        </div>
    </div>
</template>
<script>

import http from "../http-common";

export default {
    name: "clientes-lista",
    data() {
        return {
            clientes: []
        };
    },

    methods: {
        recuperarClientes() {
            http.get("/clientes").then(response => {
                this.clientes = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },

        refreshLista() {
            this.recuperarClientes();
        }
    },

    mounted() {
        this.recuperarClientes();
    }
};
</script>
<style>
    
</style>