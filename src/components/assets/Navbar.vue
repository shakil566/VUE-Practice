<template>
    <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link :to="{name:'contact'}">Contact</router-link> | 
      <router-link :to="{name:'posts'}">Posts</router-link>
    </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  nav {
    background-color: rgb(125 125 125);
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin: 0px;
    padding: 25px;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding:7px;
}
nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}
  </style>
  