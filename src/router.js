import VueRouter from 'vue-router'
import Home from './components/home'
import Signup from './components/auth/signup'
import Login from './components/auth/login'

const appRoutes = {
    routes: [
        { path: '/', component: Home },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login }
    ],
    mode: 'history'
}

export default new VueRouter(appRoutes);