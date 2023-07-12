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

	<article>

		<h2>About Me</h2>

		<hr />

		<nav class="mb-4">
			<ul>
				<li>
					<a v-on:click="setTabActive('summary')" v-bind:class="{active: activeTab == 'summary'}">Summary</a>
				</li>
				<li>
					<a v-on:click="setTabActive('education')" v-bind:class="{active: activeTab == 'education'}">Education</a>
				</li>
				<li>
					<a v-on:click="setTabActive('technologies')" v-bind:class="{active: activeTab == 'technologies'}">Technologies</a>
				</li>
			</ul>
		</nav>

		<div class="summary" v-show="activeTab == 'summary'">
			<p>My development experience includes over 20 years of building web applications in both front-end and back-end environments.</p>
			<p>I've led and mentored teams on topics such as data modeling, system architecture, design patterns, and requirements gathering.</p>
			<p>My current focuses are microservice architecture and AI-driven development.</p>
		</div>

		<div class="education" v-show="activeTab == 'education'">
			<p><strong>University of Illinois</strong> | <small>Chicago, IL</small><br />
				<small>BS, Information and Decision Sciences</small>
			</p>
			<p><strong>University of Illinois</strong> | <small>Chicago, IL</small><br />
				<small>MS, Management Information Systems</small>
			</p>
		</div>

		<div class="technologies" v-show="activeTab == 'technologies'">
			<p><strong>Front-End</strong> | <small>JavaScript, Node.js, Express, Vue.js, React, Webpack, Vite, Gulp, Bootstrap</small></p>
			<p><strong>Back-End</strong> | <small>PHP, Laravel, WordPress, CodeIgniter, Composer</small></p>
			<p><strong>Databases</strong> | <small>MySQL, MariaDB, PostgreSQL, SQL Server, MongoDB</small></p>
			<p><strong>Virtualization</strong> | <small>Docker, Vagrant</small></p>
			<p><strong>Cloud Providers</strong> | <small>AWS, Azure, DigitalOcean</small></p>
		</div>

	</article>

</template>

<style lang="scss" scoped>
nav {

	ul {

		display: inline-flex;
		list-style: none;
		margin: 0;
		padding: 0;

		li {

			&:not(:last-of-type) {
			
				margin-right: .25rem;
			}
	
			a {
			
				display: flex;
				padding: .5rem 1rem;
				color: #fff;
				text-decoration: none;
				border-radius: 4px;
				cursor: pointer;

				&:hover, &.active {

					background-color: #fff;
					color: #000;
				}
			}
		}
	}
}
</style>
