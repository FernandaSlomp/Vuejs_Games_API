<template>
<b-row>
	<AdicionarGame/>
	<br>
<h1>Games Grátis!</h1>

<b-container fluid >
	<span>Busca por gênero:</span>
<b-form-input list="input-list" id="input-with-list" v-model="searchgenre" placeholder="Escolha o gênero..." v-on:keyup.enter="onEnter"></b-form-input>
<b-form-datalist  id="input-list" :options="options"></b-form-datalist>
	<span>Busca por nome:</span>
<b-form-input id="text-search" v-model="searchtitle" placeholder="Escreva o nome..." v-on:keyup.enter="onEnter2"></b-form-input>
</b-container>
<b-card-group deck style="margin-top:1em">
              <b-card 
                v-for="game in result || allGames"
				:key="game.id"
                style="min-width: 16rem; max-width: 16rem;"
                border-variant="primary"
                :header="game.title"
                header-bg-variant="dark"
                header-text-variant="white"
                align="center">
        <b-card-img :src="game.thumbnail" alt="Image" class="rounded-0"></b-card-img>
		<br><br>
		<b-card-text><h5>Gênero:</h5>{{ game.genre}}</b-card-text>
		<b-card-text><h5>Data de lançamento:</h5> {{ game.release_date | formatarData() }} </b-card-text> 
		<b-card-text ><h5>Descrição:</h5>{{ game.short_description}}</b-card-text>

		<router-link tag="p" :to="{
              name: 'detalharGame',
              params: {
                id: game.id,
                gameinfo: game
              },
            }"
				> 
			<a class="btn btn-mn mx-1 btn-outline-dark" href="#">INFOS</a>
		</router-link>
		<b-button variant="outline-danger">
          <b-icon-trash2-fill @click="deleteGame(game.id)"></b-icon-trash2-fill>
        </b-button>
		
		
      </b-card> 
          </b-card-group >
      </b-row>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import AdicionarGame from './AdicionarGame'



export default {
	name: 'ListaGames',
	components: {AdicionarGame},
	data(){
		return {searchgenre : "",
				searchtitle : "",
				result : null,
				options: ['MOBA', 'Shooter', 'MMORPG', 'Sports', 'Battle Royale', 'Strategy', 'title'],
		}
	},
	computed: mapGetters(["allGames"]),
	filters: {
    formatarData: function(data) {
		if(parseInt(data)){
			var dataFormatada = data.split('-').reverse();
			dataFormatada = dataFormatada.join('/')
			return dataFormatada
		}
		
    },
  },
	methods: {
		...mapActions (["getGames", "deleteGame"]),
		onEnter: function() {
			this.result = this.allGames.filter(x => x.genre.includes(this.searchgenre) )
			if (this.result.length == 0){
			this.result = this.allGames
			}
		},
		onEnter2: function() {
			this.result = this.allGames.filter(x => x.title.includes(this.searchtitle) )
			if (this.result.length == 0){
			this.result = this.allGames
			}
		}
	},
	created(){
		this.getGames();
	}
}
</script>

<style>

</style>