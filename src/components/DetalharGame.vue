<template>
  <div>
  <section id="about" class="about">
      <div class="container" style="margin-top: 30px" >
		<h3> {{gameinfo.title}} </h3>
        <div class="row no-gutters">
          <img :src="gameinfo.thumbnail" class="col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start">
          <div class="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
				<h4>Descrição</h4>
				<p>
                {{gameinfo.short_description}}
              </p>
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="fas fa-desktop fa-lg mb-3"> Plataforma</i> <p>{{gameinfo.platform}}</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box"> 
					<p class="h5 mb-2"> <b-icon icon="tools"></b-icon>  Desenvolvedor</p> {{gameinfo.developer}}
                   
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
					<i class="fas fa-upload fa-lg mb-3"> Editor</i> <p>{{gameinfo.publisher}}</p>

                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
					<a :href="gameinfo.freetogame_profile_url" target="_blank"> <i class="fas fa-external-link-alt fa-lg mb-3"> Link para o jogo </i></a>
                    <p>{{ gameinfo.freetogame_profile_url }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
<b-card bg-variant="light" @submit="onSubmit">
	<b-form>
    <b-form-group 
      label-cols-lg="3"
      label="Editar"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Nome:"
        label-align-sm="right"
        label-for="nested-street"
      >
        <b-form-input v-model="gameinfo.title" id="nested-street"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Descrição:"
        label-align-sm="right"
        label-for="nested-city"
      >
        <b-form-input v-model="gameinfo.short_description" id="nested-city"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Plataforma:"
        label-align-sm="right"
        label-for="nested-state"
      >
        <b-form-input v-model="gameinfo.platform" id="nested-state"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Desenvolvedor:"
        label-align-sm="right"
        label-for="nested-country"
      >
        <b-form-input v-model="gameinfo.developer" id="nested-country"></b-form-input>
      </b-form-group>

	<b-form-group label-cols-sm="7"> <b-button type="submit" variant="primary">Submit</b-button></b-form-group>

    </b-form-group>
	
	</b-form>
  </b-card>

  
</div>
</template>



<script>
export default {
  name: 'detalharGame',
  data(){
      return { 
		id : this.$route.params.id,
		gameinfo : this.$route.params.gameinfo
        //   mostrar : this.$route.params.mostrar 
		}
	
  },
  methods: {
	onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.gameinfo))
    },
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
