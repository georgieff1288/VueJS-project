<template>
  <div class="feed">
    <div v-for="message of messages" :key="message.id" class="message">
      <Message :message="message" />     
    </div>
  </div>
</template>

<script>
import Message from './message/message'
import{getLastMessages} from '../../../services/firestore'

export default {
  components:{Message},
  data: function(){
    return{
      messages: []
    }
  },     
  created(){
    this.$bind('messages', getLastMessages(this.$route.params.id));
  }
}
</script>

<style scoped>
.feed{
    display: flex;
    flex-direction: column;
}

.message{
    flex-direction: column;
    margin: 10px 0;
}
</style>