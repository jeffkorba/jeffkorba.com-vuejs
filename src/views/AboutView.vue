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
		BS, Information and Decision Sciences</p>

		<p><strong>University of Illinois</strong> | Chicago, IL<br />
		MS, Management Information Systems</p>

	</section>

	<section class="technologies" v-show="activeTab == 'technologies'">

		<p><strong>Front-End</strong><br />
		JavaScript, Node.js, Express, Vue.js, React, Webpack, Vite, Gulp, Bootstrap</p>
	
	
		<p><strong>Back-End</strong><br />
		PHP, Laravel, WordPress, CodeIgniter, Composer</p>
	
	
		<p><strong>Databases</strong><br />
		MySQL, MariaDB, PostgreSQL, SQL Server, MongoDB</p>
	
	
		<p><strong>Virtualization</strong><br />
		Docker, Vagrant</p>
	
	
		<p><strong>Cloud Providers</strong><br />
		AWS, Azure, DigitalOcean</p>

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
