<template>
<div>
	<div class="footer-links">
      
        <div v-container class="container-footer">
          <div class="row01">
            <p>© - Site produzido para o ASSESSMENT - Instituto INFNET - Fernanda Slomp</p>
          </div>
          <div class="row01">
            <div class="col01">
              <ul class="footer-social-icons">
                <li class="li01">
                  <a href="https://www.linkedin.com/in/fernanda-slomp-2977721aa/" target="_blank"
                  title="Follow me on LinkedIn">
                    <i class="fab fa-linkedin fa-3x" style="col01or:#737992"></i>
                  </a>
                </li>
                <li class="li01">
                  <a href="https://github.com/Fernandaslomp" target="_blank" title="Check out my Github">
                    <i class="fab fa-github fa-3x" style="col01or:#737992"></i>
                  </a>
                </li>
                <li class="li01">
                  <a href="mailto: fernandaslomp@hotmail.com" target="_blank" title="Send me an email">
                    <i class="fas fa-envelope-square fa-3x" style="col01or:#737992"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>

</div>
</template>
    

<script>


export default {
  name: 'Footer',
  components: {
  }
}
</script>


<style >
.container-footer {
  margin-top: 20px;
  max-height: 100%;
}
.row01 p {
  margin-left: auto;
  margin-right: auto;
  width: 100em;
  text-align: center;
  font-size: 12px;
}
.footer-social-icons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  display: flex;
}

.li01 {
  float: center;
}
li a {
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  text-align: center;
  padding: 16px; 
}

li a:hover {
  top: -10px;
}


</style>