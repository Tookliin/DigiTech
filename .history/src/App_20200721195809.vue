<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/profile">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  components:{
    
  }
}
</script>