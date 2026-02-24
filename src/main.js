import '@/sass/main.scss';

import { createApp } from 'vue';
import App from '@/App.vue';
import Router from '@/router.js';

const app = createApp(App);

Router.beforeEach((to, from) => {
	
	document.title = to.meta.title;
})

app.use(Router);

app.mount('#app');