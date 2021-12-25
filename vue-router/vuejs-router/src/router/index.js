import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import Users from '../views/Users'



Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        component: MainPage
    },
    {
        path:'/users',
        component: Users
    },
    {
        path:'/usersDetail/:userId',
        component: () => import('../views/UsersDetail')
    }
    
]

const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach((to, from, next) =>{
    console.log("to", to.path)
    if(to.path === '/usersDetail/1'){
        next('/')
    }
    console.log("from", from)
    next();
})

export default router