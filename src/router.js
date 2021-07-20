import { createWebHistory, createRouter } from "vue-router";

import ListadeClientes from "./components/ListadeClientes.vue";
import AddCliente from "./components/AddCliente.vue";
import BuscarClientes from "./components/BuscarClientes.vue";
import Cliente from "./components/Cliente.vue";

const routes = [
    {
        path: "/",
        name:"clientes",
        alias: "/cliente",
        component: ListadeClientes,

        children: [
            {
                path: "/cliente/:id",
                name: "cliente-detalhes",
                component: Cliente,
                props: true
            }
        ]
    },

    {
        path: "/add",
        name: "add",
        component: AddCliente
    },

    {
        path: "/buscar",
        name: "buscar",
        component: BuscarClientes
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;