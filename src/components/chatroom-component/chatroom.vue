<template>
    <div class="container">
        <div class="mainContent">
            <div class="userListWrapper">
                <UsersList />
            </div>
            <div class="feedWrapper">
                <MessageFeed />
            </div>
        </div>          
        <div class="chatFormWrapper">
            <ChatForm />
        </div>
    </div>
</template>

<script>
import UsersList from './components/users-list'
import ChatForm from './components/chat-form'
import MessageFeed from './components/message-feed'

export default {
    components:{UsersList, ChatForm, MessageFeed}
}
</script>

<style scoped>
.mainContent{
    display: flex;
    height: 419px;
}

.userListWrapper {
    background-color: rgb(255, 255, 255);
    display: flex;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
    flex: 1;
    order: 1;
    padding:20px 0px 40px 30px;
    border-right: 1px solid rgb(0, 0, 0);
    overflow-y: scroll;
}

.feedWrapper {
    background-color: rgb(252, 252, 252);
    background: rgb(153, 194, 255);
    font-family: "Open Sans", sans-serif;
    font-size: 1.2em;
    flex: 5;
    order: 2;
    overflow-y: scroll;
    padding:20px 0px 0px 24px;
}

.chatFormWrapper {
    display: flex;
    height: 40px;    
    background-color: rgb(182, 230, 245);
    border-top: 1px solid rgb(0, 0, 0);
    width: 100%;
}

#scroll-style::-webkit-scrollbar-track
{
	border-radius: 10px;
	background-color: rgb(255, 255, 255);
}

app-user-list {
    width: 100%;
}
</style>