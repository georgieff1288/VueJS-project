<template>
  <div class="container">

    <div class="title">
        <h1>
            Please <router-link to="/login">Login</router-link> to start a chat!
        </h1> 
		<br>
		<h1>
			Don't have an account yet? <router-link to="/signup">Sign-up</router-link> right now.
		</h1>
    </div>  
        
    <div class="title" >
        <h1>
            Welcome, userEmail. You can start a chat.
        </h1>
    </div>   
      
</div>
</template>

<script>

export default {         
    
}
</script>

<style scoped>
.container{
    height: 100%;
    overflow:hidden;
    background: rgba(255,255,255);
}

.title {
    margin: auto;    
    margin-top: 40px;
    width: 50%;
}

h1{
    height: 2em;
}

a {
    text-decoration: none;
}  
</style>