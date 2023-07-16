<script>
export default {

	data() {

		return {

			activeTab: 'summary'
		}
	},

	methods: {

		setTabActive(activeTab) {
		
			this.activeTab = activeTab;
		}
	}
}
</script>

<template>

	<h2>About Me</h2>

	<hr />

	<nav class="nav nav-pills flex-column flex-sm-row mb-4">

		<a class="flex-sm-fill text-sm-center nav-link" v-on:click="setTabActive('summary')" v-bind:class="{active: activeTab == 'summary'}">Summary</a>
		<a class="flex-sm-fill text-sm-center nav-link" v-on:click="setTabActive('education')" v-bind:class="{active: activeTab == 'education'}">Education</a>
		<a class="flex-sm-fill text-sm-center nav-link" v-on:click="setTabActive('technologies')" v-bind:class="{active: activeTab == 'technologies'}">Technologies</a>
	
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

		<p><strong>Languages</strong><br />
		<small>HTML, CSS, JavaScript, PHP, SQL</small></p>
	
		<p><strong>Frameworks/Libraries</strong><br />
		<small>Laravel, CodeIgniter, Guzzle, Node.js, Vue.js, React, Webpack, Vite, Gulp, Axios, Express, Bootstrap</small></p>

		<p><strong>Web Servers</strong><br />
		<small>Nginx, Apache, IIS</small></p>
	
		<p><strong>Databases</strong><br />
		<small>MySQL/MariaDB, PostgreSQL, SQL Server, MongoDB</small></p>
	
		<p><strong>Virtualization</strong><br />
		<small>Docker, Vagrant, VirtualBox</small></p>
	
		<p><strong>Cloud Providers</strong><br />
		<small>AWS, Azure, DigitalOcean</small></p>

	</section>

</template>

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
