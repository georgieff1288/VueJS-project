<template>
  <div>
    <form class="createChatroom" @submit.prevent="create">        
      <h2 >Create chatroom</h2>
      <template v-if="$v.chatroomName.$error">
        <span v-if="!$v.chatroomName.minLength">Name must be at least 6 characters</span>
      </template>            
        <input
          v-model="chatroomName"
          @blur="$v.chatroomName.$touch" 
          placeholder="Enter chatroom name"
          name="chatroomName"
          class="formInput"/>
        <button :disabled="$v.$invalid" class="btn" id="btn-create">
                Create
        </button>        
    </form>
  </div>
</template>

<script>
import {createChatroom} from '../services/firestore'
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      chatroomName: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    chatroomName: {
      required,
      minLength: minLength(6)
      }
  },
  methods:{    
    create(){
        createChatroom(this.chatroomName)
    }
  }
}
</script>

<style scoped>
 .createChatroom{
    display: block;
    background-color: rgba(255,255,255,0.85);
    width: 400px;
    height: 150px;
    margin: auto;
    margin-top: 40px;
    text-align: center;
    padding: 20px 30px;
  }

  .formInput{
    margin: auto;
    width: 70%;
    height: 30px;
    border-radius:4px;
    background:rgb(235, 227, 227);
    border: rgb(209, 198, 198) 1px solid;
    padding: 8px;
    font-size:1em;
  }
  
  .btn{
    height: 44px;
    width: 50%;
    margin: auto;
    margin-top: 16px;
    border: none;
    background:rgb(105, 118, 156);
    color: rgb(255, 255, 255);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
  }

  #btn-create:disabled{
    background-color:rgb(238, 238, 238);
    color: rgb(153, 153, 153);
  }

  span{
    font-size: small;
    color: rgb(243, 35, 35);
  }
</style>