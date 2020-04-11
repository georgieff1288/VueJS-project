import VueRouter from 'vue-router'
import Home from './components/home'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import UserProfile from './components/user-profile'
import CreateChatroom from './components/create-chatroom'
import ChatroomsList from './components/chatrooms-list'
import Chatroom from './components/chatroom-component/chatroom'
import {auth} from './firebase'

function authGuard(to, from, next) {
    auth.onAuthStateChanged(user => user ? next() : next('/login'));
}

const appRoutes = {
    routes: [
        { path: '/', component: Home },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login },
        { path: '/settings', component: UserProfile, beforeEnter: authGuard },
        { path: '/createchatroom', component: CreateChatroom, beforeEnter: authGuard },
        { path: '/chatrooms', component: ChatroomsList, beforeEnter: authGuard },
        { path: '/chatroom/:id', component: Chatroom, beforeEnter: authGuard }
    ],
    mode: 'history'
}

export default new VueRouter(appRoutes);