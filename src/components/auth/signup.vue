<template>
  <div >
    <div class="signUpCard">
      <form @submit.prevent="register">
        <h2 class="heading">Sign Up</h2>

        <label class="label">Email</label>
        <template v-if="$v.email.$error">
          <br/><span v-if="!$v.email.email">Please enter valid email</span>
        </template> 
        <input 
          type="email"  
          v-model="email"
          @blur="$v.email.$touch"
          placeholder="Enter your email address" 
          class="formInput"/>

        <label class="label">Password</label>
        <template v-if="$v.password.$error">
          <br/><span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
        </template>      
        <input     
          type="password"   
          v-model="password"
          @blur="$v.password.$touch"
          placeholder="Choose a password" 
          class="formInput"/>

        <label class="label">Confirm password</label>
        <template v-if="$v.confirmPassword.$error">
          <br/><span v-if="!$v.confirmPassword.sameAs">Password and confirm password does not match</span>
        </template>       
        <input
          type="password" 
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch"
          placeholder="Confirm password" 
          class="formInput"/>
  
        <label class="label">Username</label>
        <template v-if="$v.displayName.$error">
          <br/><span v-if="!$v.displayName.minLength">Username must be at least 3 characters</span> 
        </template> 
        <input 
          v-model="displayName"
          @blur="$v.displayName.$touch"           
          placeholder="Enter a username" 
          class="formInput"/>
  
        <button :disabled="$v.$invalid" class="btn" id="btn-signUp">
                Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {signUp} from '../../services/auth'
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

function sameAs(field) {
  return function (value) {
    return this[field] === value;
  }
}

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword:"",
      displayName:""
    };
  },
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email
      },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword:{
      sameAs: sameAs('password')
    },
    displayName:{
      required,
      minLength: minLength(3)
    }
  },
  methods: {
    async register() {
      const data = {
        email: this.email,
        password: this.password,
        displayName: this.displayName
      }   
      await signUp(data)
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
  font-weight: bold;
}

span{
  font-size: small;
  color: rgb(243, 35, 35);
}
</style>