<template>

	<h2>About Me</h2>

	<hr />

	<nav class="nav nav-pills flex-column flex-sm-row mb-4">

		<a class="flex-sm-fill text-sm-center nav-link" @click="setTabActive('summary')" :class="{active: activeTab == 'summary'}">Summary</a>
		<a class="flex-sm-fill text-sm-center nav-link" @click="setTabActive('education')" :class="{active: activeTab == 'education'}">Education</a>
		<a class="flex-sm-fill text-sm-center nav-link" @click="setTabActive('technologies')" :class="{active: activeTab == 'technologies'}">Technologies</a>
	
	</nav>

	<section class="summary" v-show="activeTab == 'summary'">

		<p>My development experience includes over 20 years of building web applications in both front-end and back-end environments.</p>
		<p>I've led and mentored teams on topics such as data modeling, system architecture, design patterns, and requirements gathering.</p>
		<p>My current focuses are microservice architecture and AI-driven development.</p>

	</section>

	<section class="education" v-show="activeTab == 'education'">

		<p><strong>University of Illinois</strong> | Chicago, IL<br />
		<small>BS, Information and Decision Sciences</small></p>

		<p><strong>University of Illinois</strong> | Chicago, IL<br />
		<small>MS, Management Information Systems</small></p>

	</section>

	<section class="technologies" v-show="activeTab == 'technologies'">

		<p><strong>HTML/CSS</strong> | <small>Sass, Bootstrap, Tailwind CSS, Skeleton</small></p>
	
		<p><strong>JavaScript</strong> | <small>Node.js, Vue.js, React, Axios, Express, Chart.js, Gulp, Webpack, Vite</small></p>

		<p><strong>PHP</strong> | <small>Laravel, CodeIgniter, WordPress, Guzzle, Composer</small></p>

		<p><strong>Web Servers</strong> | <small>Nginx, Apache, IIS</small></p>
	
		<p><strong>Databases</strong> | <small>MySQL/MariaDB, PostgreSQL, SQL Server, MongoDB</small></p>
	
		<p><strong>Virtualization</strong> | <small>Docker, Vagrant, VirtualBox</small></p>
	
		<p><strong>Cloud Providers</strong> | <small>AWS, Azure, DigitalOcean</small></p>

	</section>

</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('summary');

function setTabActive(tabName) {
		
	activeTab.value = tabName;
}
</script>

<style lang="scss" scoped>
.nav-link {

	color: #fff;
	cursor: pointer;

	&.active {
		background-color: #fff;
		color: #000;
	}
}
</style>
