import axios from "axios";

const state = {
  games: []
};

const getters = { //como acessar o estado global - apenas olha
	allGames: state => state.games,
};

const actions = { // como preenche o estado global
	getGames({ commit }) {
		const options = {
			method: 'GET',
			url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
			headers: {
			'x-rapidapi-key': 'key', //coloque aqui sua key rapidapi
			'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
			}
		};
	
		axios.request(options).then((response) => {
			commit('getGames', response.data);
		});
	},
	addGame({ commit }, game){
		game.id = 109
		commit('addGame', game);
	},
	deleteGame({commit}, id){
		commit('deleteGame', id);
	}
  
};
 
const mutations = { //chama pra escrever no estado
deleteGame: (state, id) => (state.games = state.games.filter(u => u.id !== id)),
addGame: (state, data) => state.games.push(data),
getGames: (state, data) => (state.games = data),
  
};

export default {
    state,
    actions,
    getters,
    mutations
  };
