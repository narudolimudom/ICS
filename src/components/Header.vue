<template>
<div >
    <v-container fluid class="header"> 
        <v-row>
            <v-col  cols="12" md="12">
<header>
      
        <nav class="menu-bar">
          <div class="bell-icon">
            <img src="../assets/bell-icon.svg" alt="">
          </div>
          <div class="avatar-box">
             <img src="../assets/avatar.svg" alt="">
             <p class="user-name">Akkarapol</p>
             <p class="dropdown"> <i class="arrow down"></i></p>
          </div>
            
          
        </nav>
      
    </header>
            </v-col>
            <v-col>
        <div id="sidenav">
    <img class="logo"  src="../assets/ics_logo.svg">
    <v-divider class="divider"></v-divider>
    <div class="place-box">
      <router-link class="place-icon" to="/">
    <img class="place-icon" src="../assets/place.svg">
    </router-link>
     <p>Place</p>
     <v-divider class="divider"></v-divider>
     </div>
     
</div>
            </v-col>
        </v-row>
    </v-container>
    

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.header{
  padding: 0;
  box-sizing: border-box;
}



.bell-icon{
  margin-right: 30px;
  margin-top: 5px;
}
.menu-bar {
  width: 100%;
  height: 60px;
  background-color: #134B8A;
  display: flex;
  justify-content: end;
  box-sizing: border-box;
  /* border: solid red 3px; */
  align-items: center;
}


.user-box img {
  border-radius: 50%;
}

.avatar-box {
  display: flex;
  align-items: center;
  /* border: solid red 2px; */
  
  
}
.user-name {
  margin-top: 15px;
  margin-left: 16px;
  font-size: 14px;
  color: #ffff;

}
.dropdown{
  margin-top: 11px;
  margin-left: 20px;
  font-size: 14px;
  color: #ffff;
  cursor: pointer;
}



.arrow {
  border: solid #ffff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-right: 38px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
header {
  display: flex;
  justify-items: space-between;
  /* align-items: center; */
  /* border: solid red 3px; */
}


#sidenav {
height: 1456px;
width: 90px;
/* position: fixed; */
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
z-index: 2;
background-color: white;
overflow-x: hidden;
padding-top: 10px;
border-radius: 0px 50px 50px 0px;
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
/* border: red solid 3px; */
/* margin-top: -7rem; */
text-align: center;
float:left;
margin-top: -0.5rem;
}

@media (max-width: 768px) {
    #sidenav {
        display: none;
    }
}

.logo{
  
  margin-top: 25px;
}
.divider{
  margin-top: 18px;
}

.place-icon{
  margin-top: 26px;
}

.place-box{

  text-align: center;

}

.place-box p{
  font-size: 12px;
  font-weight: 500;
}


.place-icon{
  text-decoration: none;
}

</style>