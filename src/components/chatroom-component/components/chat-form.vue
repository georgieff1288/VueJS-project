<template>
  <div>
    <form class="chatForm"  @submit.prevent="send">
        <input
        v-model="message"
        name="message"
        class="chatInput"/>
    </form>
  </div>
</template>

<script>
import {sendMessage, getCurrenUserByUid} from '../../../services/firestore'
import {getCurrentUserUid} from '../../../services/auth'

export default {
  data() {
    return {
      message: "",
      chatroomId:"",
      user:""
    };
  },  
  methods:{
    send(){
      if(this.message){
        sendMessage(this.message, this.chatroomId, this.user.displayName)
        this.message = '';
      }      
    }
  },
  created(){
    this.chatroomId = this.$route.params.id;
    this.$bind("user", getCurrenUserByUid(getCurrentUserUid()));
  }
}
</script>

<style scoped>
.chatInput{
    flex: 10;
    font-size: 1.3em;
    font-family: 'Open Sans', sans-serif;
    background-color: rgb(230, 240, 255);
    color: rgb(0, 0, 0);
    transition: 0.1s ease-out;
    padding-left: 80px;
    width: 100%;
    height: 40px;
}

.chatForm{
    width: 1140px;
}
</style>