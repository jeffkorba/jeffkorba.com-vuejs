import { createRouter, createWebHistory } from 'vue-router';

import About from '@/views/Pages/About.vue';
import Contact from '@/views/Pages/Contact.vue';
import Home from '@/views/Pages/Home.vue';

const router = createRouter({
	history: createWebHistory(),
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
