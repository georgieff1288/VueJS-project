<template>
    <div class="container">
        <div class="chatroomName">{{chatroom.name}}</div>    
        <div class="regUsers" >Users        
            <ul v-for="user of users" :key="user.id" class="userList">
                <li :class="user.status">
                {{user.displayName}}
                </li> 
            </ul>        
        </div>    
    </div>

</template>

<script>
import {getChatroomById, getUsers} from '../../../services/firestore'

export default {
    created(){
        this.$bind("chatroom", getChatroomById(this.$route.params.id));
        this.$bind("users", getUsers());
    },
    data: function() {
        return {
            chatroom:'',
            users: []
        };
    }
}
</script>

<style scoped>
.container{ 
    font-size: 1rem; 
    display: flex;
    flex-direction: column;
}

.chatroomName{
    height: auto;
    padding: 5px;
    margin-bottom: 15px;
    margin-right: 5px;
    width: 90%;
    font-weight: 900;   
    background-color: rgb(146, 109, 233);
    color: rgb(250, 250, 250);
    border-radius: 8px;
}

.regUsers{    
    font-weight: bold;  
}

.userList{
    height: auto;
    padding: 0px;
    width: 90%;
    align-items:flex-start; 
}
.online{
    font-weight: 900;    
    color: rgb(25, 189, 39);
}

.offline{
    font-weight: 900;  
    color: rgb(221, 23, 33);
}
</style>