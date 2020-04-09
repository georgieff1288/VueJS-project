<template>
  <div class="container">
    <div class="title" v-if="!userEmail">
        <h1>Please <router-link to="/login">Login</router-link> to start a chat!</h1>
        <br>
        <h1>Don't have an account yet? <router-link to="/signup">Sign-up</router-link> right now.</h1>
    </div>

    <div class="title" v-if="userEmail">
        <h1>Welcome, {{userEmail}}. You can start a chat.</h1>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'

export default {
    mounted(){
        this.getEmail();
    },
    methods:{
        getEmail(){auth.onAuthStateChanged(user=>{
            if(user){
                this.userEmail = user.email
            }
        })}
    },
    data(){
        return{
            userEmail:''
        }
    }
}
</script>

<style scoped>
.container{
    height: 100%;
    overflow:hidden;
    background: rgba(255,255,255);
}

.title{
    margin: auto;    
    margin-top: 40px;
    width: 70%;
    text-align: center;
}

h1{
    height: 2em;
}

a{
    text-decoration: none;
}
</style>