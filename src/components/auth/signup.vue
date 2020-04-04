<template>
  <div >
    <div class="signUpCard">
     <form @submit.prevent="signup">
      <h2 class="heading">Sign Up</h2>

     <label class="label">Email</label>
     <br/><span>Please enter valid email</span> 
       <input 
         type="email"  
         v-model="email"
         placeholder="Enter your email address" 
         class="formInput"/>
         
         
  
      <label class="label">Password</label>
      <br/><span>Password must be at least 6 characters</span>      
        <input     
          type="password"   
          v-model="password"
          placeholder="Choose a password" 
          class="formInput"/>

      <label class="label">Confirm password</label>
      <br/><span>Password and confirm password does not match</span>       
        <input
          type="password" 
          v-model="confirmPassword"
          placeholder="Confirm password" 
          class="formInput"/>
  
      <label class="label">Username</label>
      <br/><span>Username must be at least 3 characters</span> 
        <input 
          v-model="displayName"           
          placeholder="Enter a username" 
          class="formInput"/>
  
        <button class="btn" id="btn-signUp">
                Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
data() {
    return {
      email: "",
      password: "",
      confirmPassword:"",
      displayName:""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "home" });
        });
    }
  }
};
</script>

<style scoped>
.container{
  overflow:hidden;
  background:rgb(253, 254, 255);
}

.signUpCard{
  display: block;
  background-color: rgba(255,255,255,0.85);
  width: 600px;
  height: 450px;
  margin: auto;
  padding: 10px 0px;
}

.formInput{
  display: block;
  width: 100%;
  height: 30px;
  border-radius:4px;
  background:#ecf0f1;
  border: rgb(204, 204, 204) 1px solid;
  padding: 8px;
  font-size:1em;
  margin-bottom: 18px;
}

.btn{
  height: 44px;
  margin-top: 15px;
  border: none;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  width: 103%;
}

#btn-signUp{
    background-color:rgb(42, 40, 69);
}


#btn-signUp:disabled{
    background-color:rgb(238, 238, 238);
    color: rgb(153, 153, 153);
}

h2{
    text-align: center;
    height: 2em;
}

a {
    text-decoration: none;
}

.label{
    font-size: 0.9em;
}

span{
  font-size: small;
  color: rgb(243, 35, 35);
}
</style>