import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/pages/About.vue';
import Contact from '@/views/pages/Contact.vue';
import Home from '@/views/pages/Home.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: import.meta.env.VITE_APP_TITLE + ' | Systems Architect'
			}
		},
		{
			path: '/about',
			name: 'about',
			component: About,
			meta: {
				title: 'About | ' + import.meta.env.VITE_APP_TITLE
			}
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
			meta: {
				title: 'Contact | ' + import.meta.env.VITE_APP_TITLE
			}
		}
	]
})

export default router;
