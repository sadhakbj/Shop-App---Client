<template>
  <div id="app">
    <Navbar />
    <div class="container" style="margin-top: 40px;">
      <router-view/>
    </div>
    <Footer/>      
  </div>
</template>

<script>
import Navbar from "./components/Nav";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
