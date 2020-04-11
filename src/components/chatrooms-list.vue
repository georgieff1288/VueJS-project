<template>
    <div class="container">
        <div v-if="chatrooms.length === 0" class="empty">
          There is no chatrooms created.
        </div>
        <span v-else>
        <div v-for="chatroom of chatrooms" :key="chatroom.id" class="chatroomList">
            <div>
                <span class="chatroomName">
                    <div>{{chatroom.name}}</div>                      
                </span>
            </div>
            <span>
                <router-link :to="'/chatroom/' + chatroom.id" class="join">Join</router-link>
            </span>
            <span v-if="userUid == chatroom.creatorUid">
                <button class="btn" v-on:click="btnDeleteChatroom(chatroom.id)">Delete</button>
            </span>          
        </div>
    </span>
    </div>
</template>

<script>
import {getChatroomsOrderedByName, deleteChatroom} from '../services/firestore'
import {getCurrentUserUid} from '../services/auth'

export default {
    data: function() {
        return {
            userUid:'',
            chatrooms: []
        };
    },
    methods: {
        btnDeleteChatroom(id){
            deleteChatroom(id)
        }
    },
    created() {
        this.userUid = getCurrentUserUid();
        this.$bind("chatrooms", getChatroomsOrderedByName());
    }
}
</script>

<style scoped>
.container{
    height: 100%;
    overflow:hidden;
    background: rgba(255,255,255);
}

.chatroomList{
    height: auto;
    padding: 10px;
    width: 40%;
    margin-top: 10px;
    margin-left: 50px;
    border-radius: 1px;
    align-items:flex-start;
    background-color: rgb(127, 106, 248);
    color: rgb(250, 250, 250);
    border-radius: 8px;
    text-align: center;
    display: inline-block;
}

.empty{
   margin-top: 30px;
   font-size: xx-large;
   text-align: center; 
}

.routerLink{
    text-decoration: none;    
    color: rgb(250, 250, 250);
}
.chatroomName{
    display: inline-block;
    color: rgb(250, 250, 250);
    font-size: large;
    margin-bottom: 5px;
}

.btn{
    border: none;
    background:rgb(255, 67, 42);
    color: rgb(255, 255, 255);
    padding: 5px 7px;
    text-align: center;
    text-decoration: none;
    font-size: small;
    border-radius: 4px;
    height: 24px;
    width: 60px;    
}
.join{
    margin-right: 5px;
    border: none;
    background:rgb(26, 131, 5);
    color: rgb(255, 255, 255);
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    font-size: small;
    border-radius: 4px;
    margin-bottom: 5px;
}
</style>