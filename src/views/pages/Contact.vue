<template>

	<h2>Let's Connect</h2>

	<hr />

	<ul>
		<li>
			<div class="icon"><FontAwesomeIcon :icon="faLink" /></div>
			<a href="https://korbaconsulting.com" target="_blank">korbaconsulting.com</a>
		</li>
		<li>
			<div class="icon"><FontAwesomeIcon :icon="faLinkedin" /></div>
			<a href="https://www.linkedin.com/in/jeffkorba" target="_blank">linkedin.com/in/jeffkorba</a>
		</li>
	</ul>

</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<style lang="scss" scoped>
ul {
	
	list-style: none;
	margin: 0;
	padding: 0;

	li {

		margin-bottom: 1rem;;

		.icon {
		
			display: inline-block;
			width: 1rem;
			margin-right: 1rem;
		}
	
	}
}
</style>
