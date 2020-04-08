import VueRouter from 'vue-router'
import Home from './components/home'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import UserProfile from './components/user-profile'
import CreateChatroom from './components/create-chatroom'
import ChatroomsList from './components/chatrooms-list'

const appRoutes = {
    routes: [
        { path: '/', component: Home },
        { path: '/signup', component: Signup },
        { path: '/login', component: Login },
        { path: '/settings', component: UserProfile },
        { path: '/createchatroom', component: CreateChatroom },
        { path: '/chatrooms', component: ChatroomsList }
    ],
    mode: 'history'
}

export default new VueRouter(appRoutes);