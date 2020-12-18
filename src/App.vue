<template>
<div>
  <b-container>
	<link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
	<Header/>
    <router-view />
	<Footer/>
  </b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Footer from './components/Footer';
import Header from './components/Header';



export default {
  name: "app",
  components: {
	Header,
	Footer
    
  }
};
</script>


<style>
body{
	background: url('/pexels-cottonbro-3945655.jpg');
	background-size: 100% 2%;
}
</style>
