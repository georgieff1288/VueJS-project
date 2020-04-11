<template>
  <div id="messageContainer" v-bind:class="displayName == message.sender ? 'ownMessage': 'notOwnMessage'">
    <div class="messageData">
        <span class="sender">
        {{message.sender}}
        </span>
    <span class="timestamp">
        {{message.timeSent}}
        </span>
    </div>
    <div class="messageContent">
    {{message.message}}
    </div>
</div>

</template>

<script>
import { getCurrentUserData } from '../../../../services/firestore'

export default {
    props:{
        message:Object
    },
    data(){
        return{
            displayName:''
        }
    },
    created(){
        getCurrentUserData().onSnapshot(userData =>{
            this.displayName = userData.data().displayName
        })
    }
}
</script>

<style scoped>
#messageContainer{
    display: flex;
    height: auto;
    width: 70%;
    min-width: 400px;
    border-radius: 5px;
    align-items:stretch;
    background-color: rgb(238, 238, 238);
}

.ownMessage{
    margin-right: 30px;
    float: right;
}

.notOwnMessage{
    margin-left: 10px;
    float: left;
}

.messageData{
    flex: 1;
    padding: 10px;
    font-size: 0.7em;
}

.sender{
    display: block;
    color: rgb(34, 34, 34);
    font-weight: bold;
}

.isOwnSender{
    color: rgb(225, 245, 254);
}

.timestamp {
    color: rgb(85, 85, 85);
    font-style: italic;
}

.isOwnTimestamp{
    color: rgb(79, 195, 247);
}

.messageContent{
    height: auto;
    flex: 9;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.isOwnMessageContent{
    background-color: rgb(227, 242, 253);
    color: rgb(1, 87, 155);
}
</style>