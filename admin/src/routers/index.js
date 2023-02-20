import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import UserEdit from '@/views/UserEdit.vue'
import UserList from '@/views/UserList.vue'

const routes= [
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[
            { path: '/users/creat', component: UserEdit},
            { path: '/users/edit/:id', component: UserEdit,props: true},
            { path: '/users/list',  component: UserList},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router