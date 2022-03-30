<template>
  <v-app>
     <Header/>
    <v-main>
      <!-- <HomeView/> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import HomeView from './views/HomeView.vue'
export default {
  name: 'App',
  components:{
    Header,
    HomeView
  },
  data: () => ({
    //
  }),
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
