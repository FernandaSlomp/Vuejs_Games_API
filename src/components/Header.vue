<template>
  <div id="header" class="float-left">
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark ">
<router-link class="nav-link" to="/games">
  <a class="navbar-brand" href="#"> HOME</a>
  </router-link>
</nav>
</div>
</template>

<script>
export default {
	name: 'Header'

}
</script>

<style>
#header {
    position: relative;
    width: 100%;
    margin: 0px 0px 0px -2%;
	border: black 10px;  
};


</style>