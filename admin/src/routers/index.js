import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import AdminUserEdit from '@/views/AdminUserEdit.vue'
import AdminUserList from '@/views/AdminUserList.vue'
import UserEdit from '@/views/UserEdit.vue'
import UserList from '@/views/UserList.vue'
import PicEdit from '@/views/PicEdit.vue'
import PicList from '@/views/PicList.vue'

const routes= [
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[
            { path: '/admin_users/creat', component: AdminUserEdit},
            { path: '/admin_users/edit/:id', component: AdminUserEdit,props: true},
            { path: '/admin_users/list',  component: AdminUserList},

            { path: '/users/creat', component: UserEdit},
            { path: '/users/edit/:id', component: UserEdit,props: true},
            { path: '/users/list',  component: UserList},

            { path: '/pics/creat',  component: PicEdit},
            { path: '/pics/edit/:id', component: PicEdit,props: true},
            { path: '/pics/list',  component: PicList},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router