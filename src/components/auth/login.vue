<template>
  <div>
    <div class="loginCard">
      <form @submit.prevent="logIn">
        <h2 class="heading">Log In</h2>
      
        <template v-if="$v.email.$error">
        <br/><span v-if="!$v.email.email">Please enter valid email</span>
        </template>
        <input 
          type="email" 
          v-model="email"
          @blur="$v.email.$touch"
          placeholder="Enter your email address"
          class="formInput"/>
        
        <template v-if="$v.password.$error">
        <br/><span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
        </template>
        <input type="password"
          v-model="password"
          @blur="$v.password.$touch" 
          placeholder="Enter your password"
          class="formInput"/>
        
        
        <button :disabled="$v.$invalid" class="btn" id="btn-login">
                Log In
        </button>
      </form>      
    </div>
  </div>
</template>

<script>
import {login} from '../../services/auth'
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
data() {
    return {
      email: "",
      password: ""
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
    }
  },
  methods:{    
    async logIn(){
      const data = {
        email: this.email,
        password: this.password
      }
      await login(data)
    }
  }
}
</script>

<style scoped>
.container{
  overflow:hidden;
  background: rgba(255,255,255);
}

.loginCard{
  display: block;
  background-color: rgba(255,255,255,0.85);
  width: 700px;
  height: 420px;
  margin: auto;
  text-align: center;
  padding: 80px 30px;
  overflow: hidden;
}

.formInput{
  margin: auto;
  margin-top: 16px;
  display: block;
  width: 60%;
  height: 30px;
  border-radius:4px;
  background:rgb(235, 227, 227);
  border: rgb(209, 198, 198) 1px solid;
  padding: 8px;
  font-size:1em;
}

.btn{
  height: 54px;
  width: 60%;
  margin: auto;
  margin-top: 16px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
}



#btn-login:disabled{
  background-color:rgb(238, 238, 238);
  color: rgb(153, 153, 153);
}

#btn-login{
    background-color:rgb(74, 72, 117);
}

span{
  font-size: small;
  color: rgb(243, 35, 35);
}

h2{
    height: 2em;
}

a {
    text-decoration: none;
}
</style>