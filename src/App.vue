<template>

	<Header />

	<main>

		<div class="container">
			
			<div class="overlay">

				<div class="row g-0">

					<div class="col-12 col-lg-5">

						<img src="/static/images/jeff-korba.jpg" alt="Jeff Korba" class="img-fluid" />
						
					</div>

					<div class="col-12 col-lg-7 d-flex">

						<article>
						
							<RouterView />
						
						</article>

					</div>

				</div>

			</div>

		</div>

	</main>

	<Footer />

</template>

<script setup>
import { onMounted } from 'vue';

import Header from '@/views/partials/layouts/Header.vue';
import Footer from '@/views/partials/layouts/Footer.vue';

const background = [
	'background1', 'background2', 'background3', 'background4', 'background5', 'background6'
];

const randomNumber = Math.ceil(Math.random() * background.length) - 1;

onMounted(() => {

	document.body.classList.add('background', background[randomNumber]);
})
</script>

<style lang="scss">
body {

	&.background {
	
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
	}

	&.background1 {
	
		background-image: url('/static/images/chicago-9223e86e3a02f3abefa43ac44cb02a27.jpg');
	}

	&.background2 {
	
		background-image: url('/static/images/chicago-191876.jpg');
	}

	&.background3 {
	
		background-image: url('/static/images/chicago-690364.jpg');
	}

	&.background4 {
	
		background-image: url('/static/images/chicago-1791002.jpg');
	}

	&.background5 {
	
		background-image: url('/static/images/chicago-1804479.jpg');
	}

	&.background6 {
	
		background-image: url('/static/images/chicago-skyline-night.jpg');
	}
}

main {

	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 4rem 0;
	color: #fff;

	.overlay {
	
		background-color: rgba(0, 0, 0, .85);
		border-radius: 4px;
		box-shadow: 4px 4px 16px rgba(0, 0, 0, .25);
	}

	img {

		border-radius: 4px;
		object-fit: cover;
		min-height: 100%;
	}

	article {

		width: 100%;
	}
}
</style>
