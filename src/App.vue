<template>
  <div id="app">
    <Navbar/>
    <div class="breadcrumb-next-prev">
      <button @click="Prev">Prev</button>
      <button @click="Next">Next</button>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/assets/Navbar.vue'
import Footer from '@/components/assets/Footer.vue'

  export default {
    name: 'App',
    props: {
    },
    components: {
      Navbar,
      Footer
    },
    methods:{
      Next(){
        this.$router.go(+1)
      },
      Prev(){
        this.$router.go(-1)
      }
    }
  }
  </script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.breadcrumb-next-prev{
    text-align: right;
    margin: 10px;
}
.breadcrumb-next-prev button {
  color: #fff;
  background-color: #2c3e50;
  margin: 2px;
  border-radius: 5px !important;
}
</style>
