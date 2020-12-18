import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaGames from './components/ListaGames'
import DetalharGame from './components/DetalharGame'



Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Games',
            component: ListaGames
		},
		{
			path: '/games',
			name: 'Games',
            component: ListaGames
		},
		{
			path: '/games/:id',
			name: 'detalharGame',
            component: DetalharGame
		},
		
    ]
});
