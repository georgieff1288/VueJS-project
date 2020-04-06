import VueRouter from 'vue-router'
import Home from './components/home'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import UserProfile from './components/user-profile'

const appRoutes = {
    routes: [
        { path: '/', component: Home },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login },
        { path: '/settings', component: UserProfile }
    ],
    mode: 'history'
}

export default new VueRouter(appRoutes);