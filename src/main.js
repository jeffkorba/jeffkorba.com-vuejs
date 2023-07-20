import '@fortawesome/fontawesome-free/js/all.min.js';

import '@/assets/sass/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';

const app = createApp(App);

Router.beforeEach((to, from) => {
	
	document.title = to.meta.title;
})

app.use(Router);

app.mount('#app');