<template>
  <b-row style="display:block; width: 100%; padding: 36px;">
	<h1>Adicionar Game</h1>
	<b-row>
      <label for="feedback-title">Nome do Jogo</label>
      <b-form-input  placeholder="Insira o nome do game" v-model="title" :state="validation" id="feedback-user"></b-form-input>
      <b-form-invalid-feedback :state="validation">
        O nome do jogo precisa ter entre 5-30 caracteres
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Está ok!
      </b-form-valid-feedback>
	<label for="input-with-list">Escolha o gênero</label>
    <b-form-input v-model="genre" list="input-list" id="input-with-list"></b-form-input>
    <b-form-datalist  id="input-list" :options="options"></b-form-datalist>
	<br> <br>
	<b-button variant="primary" @click="createGame()">Save</b-button>
	</b-row> 
	</b-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AdicionarGame',
  data() {
	return {
		options: ['MOBA', 'Shooter', 'MMORPG', 'Sports', 'Battle Royale', 'Strategy', 'platform'],
		title: "", genre: ""
	}
	
  },
  methods:{
	...mapActions(["addGame"]),
	createGame(){
		let game = {
		"title" : this.title,
		// "username" : "",
		"genre": this.genre

	}
	this.addGame(game)
	alert('Adicionado')
	}
  },computed: {
      validation() {
        return this.title.length > 4 && this.title.length < 30
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
