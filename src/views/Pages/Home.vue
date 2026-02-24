<template>

	<div class="profile mb-4">
		<h1>Jeff Korba</h1>
		<hr />
		<h3>Systems <strong>Architect</strong></h3>
	</div>

	<div class="social mb-4">

		<ul>
			<li><a href="https://www.linkedin.com/in/jeffkorba" target="_blank"><FontAwesomeIcon :icon="faLinkedin" size="2x" /></a></li>
			<li><a href="https://github.com/jeffkorba" target="_blank"><FontAwesomeIcon :icon="faGithub" size="2x" /></a></li>
			<li><a href="https://codepen.io/jeffkorba" target="_blank"><FontAwesomeIcon :icon="faCodepen" size="2x" /></a></li>
			<li><a href="https://twitter.com/jeffkorba" target="_blank"><FontAwesomeIcon :icon="faTwitter" size="2x" /></a></li>
			<li><a href="https://www.instagram.com/jeffkorba" target="_blank"><FontAwesomeIcon :icon="faInstagram" size="2x" /></a></li>
		</ul>

	</div>

	<div class="summary mb-4">

		Hey there, I'm Jeff Korba, a systems architect that specializes in building web applications in PHP and JavaScript.
		If you'd like to checkout some of my work feel free to click the link below.

	</div>

	<div class="portfolio">

		<a href="https://korbaconsulting.com" target="_blank" class="btn btn-light mt-2">View Portfolio Site</a>

	</div>

</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<style lang="scss" scoped>
.summary {

	font-size: 1.25rem;
}

.social {

	ul {

		display: inline-flex;
		list-style: none;
		margin: 0;
		padding: 0;

		li {

			justify-content: start;
			margin-right: 1px;
	
			a {
			
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #000;
				color: #fff;
				width: 64px;
				height: 64px;
				border-radius: 4px;
				text-decoration: none;

				&:hover {

					background-color: #fff;
					color: #000;
				}
			}
		}
	}
}
</style>
