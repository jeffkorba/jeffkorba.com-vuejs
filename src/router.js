import { createRouter, createWebHistory } from 'vue-router';

import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			meta: {
				title: import.meta.env.VITE_APP_TITLE + ' | Systems Architect'
			}
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
			meta: {
				title: 'About | ' + import.meta.env.VITE_APP_TITLE
			}
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
			meta: {
				title: 'Contact | ' + import.meta.env.VITE_APP_TITLE
			}
		}
	]
})

export default router;
