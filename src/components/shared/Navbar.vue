<template>
  <div class="navBar">
    <div id="logo"></div>
    <div id="heading"><router-link to="/">Chat App </router-link></div>
    <div class="links">    
        <span v-if="!loggedIn">
            <router-link to="/login">Login</router-link>
        </span>
        <span v-if="!loggedIn">
           <router-link to="/signup" >Sign Up</router-link>
        </span>
        <span v-if="loggedIn">
            <span >Hello, userEmail</span>
        </span>
        <span v-if="loggedIn">
            <router-link to="/" >Chatrooms</router-link>
        </span>
        <span v-if="loggedIn">
            <router-link to="/" >Create chatroom</router-link>
        </span>
        <span v-if="loggedIn">
            <router-link to="/" >Settings</router-link>
        </span>
          <span v-if="loggedIn">
            <a href="/"  @click="signOut">Logout</a>
        </span>
  </div>
</div>
</template>

<script>
import {logOut} from '../../services/auth'
import {auth} from '../../firebase'

export default {    
    mounted() {
        this.isLogged();
    },
    methods:{   
        isLogged(){
             auth.onAuthStateChanged(user=>{
                if(user){
                    this.loggedIn = true
                }else{
                    this.loggedIn = false
                }                
            })
        },    
        signOut() {
            logOut();
        }
    },
    data(){
        return{
            loggedIn: false
        }        
    }
}
</script>

<style scoped>
.navBar{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(54, 152, 218);
}



#heading{
    flex: 4;
    padding: 24px 0px 8px 10px;
    height: 60px;
    font-size: 1.8em;
    font-weight: bold;
}

.links{
    padding-top: 32px;
    padding-right: 30px;
    white-space: nowrap;
    display: block;
}

#heading > a{
    text-decoration: none;
    color: rgb(0, 0, 0);
}

.links span{
    font-size: large;
    color: #555;
    text-decoration: none;
    transition: ease-in 0.2s;
    padding-right: 12px;
    overflow: hidden;
}



#userEmail {
    padding-right: 16px;
    font-weight: bold;
}
</style>