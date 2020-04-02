<template>
  <div class="navBar">
    <div id="logo"></div>
    <div id="heading"><a routerLink="/">Chat App </a></div>
    <div class="links">    
        <span>
            <a >Login</a>
        </span>
        <span>
           <a >Sign Up</a>
        </span>
        <span>
            <span >Hello, userEmail</span>
        </span>
        <span>
            <a >Chatrooms</a>
        </span>
        <span>
            <a >Create chatroom</a>
        </span>
        <span>
            <a >Settings</a>
        </span>
          <span>
            <a >Logout</a>
        </span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.navBar{
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgb(54, 152, 218);
}



#heading{
    flex: 4;
    padding: 24px 0px 8px 10px;
    height: 60px;
    font-size: 1.8em;
    font-weight: bold;
}

.links{
    padding-top: 32px;
    padding-right: 30px;
    white-space: nowrap;
    display: block;
}

#heading > a{
    text-decoration: none;
    color: rgb(0, 0, 0);
}

.links a{
    color: #555;
    text-decoration: none;
    transition: ease-in 0.2s;
    padding-right: 12px;
    overflow: hidden;
}



#userEmail {
    padding-right: 16px;
    font-weight: bold;
}
</style>