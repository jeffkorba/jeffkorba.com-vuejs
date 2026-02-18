<template>

	<header>

		<div class="desktop d-none d-sm-none d-md-none d-lg-block">

			<div class="container">

				<div class="row">

					<div class="col-6 d-flex align-items-center">

						<div class="logo">

							<a href="/">Jeff Korba</a>

						</div>

					</div>

					<div class="col-6 d-flex align-items-center justify-content-end">
						<nav>
							<ul>
								<li><RouterLink to="/" @click="setTabActive('home')" :class="{active: activeTab == 'home'}">Home</RouterLink></li>
								<li><RouterLink to="/about" @click="setTabActive('about')" :class="{active: activeTab == 'about'}">About</RouterLink></li>
								<li><RouterLink to="/contact" @click="setTabActive('contact')" :class="{active: activeTab == 'contact'}">Contact</RouterLink></li>
							</ul>
						</nav>

					</div>

				</div>

			</div>

		</div>

		<div class="mobile d-lg-none">
				
			<div class="logo mt-1 ms-3">

				<a href="/">Jeff Korba</a>

			</div>

			<div class="menu-toggle" @click="toggleMenu()">

				<span v-show="!isMenuActive"><i class="fas fa-bars fa-2x"></i></span>

				<span v-show="isMenuActive"><i class="fas fa-xmark fa-2x"></i></span>

			</div>

			<nav :class="{active: isMenuActive}">

				<ul>

					<li><RouterLink to="/" @click="setTabActive('home')" :class="{active: activeTab == 'home'}">Home</RouterLink></li>
					<li><RouterLink to="/about" @click="setTabActive('about')" :class="{active: activeTab == 'about'}">About</RouterLink></li>
					<li><RouterLink to="/contact" @click="setTabActive('contact')" :class="{active: activeTab == 'contact'}">Contact</RouterLink></li>

				</ul>

			</nav>

		</div>

	</header>

</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const Route = useRoute();

const activeTab = ref(Route.name);
const isMenuActive = ref(false);

function setTabActive(tabName) {
		
	activeTab.value = tabName;
	isMenuActive.value = false;
}

function toggleMenu () {

	isMenuActive.value = !isMenuActive.value;
}
</script>

<style lang="scss" scoped>
header {

	.logo {

		display: inline-flex;
		align-items: center;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 200;

		a {

			color: #fff;
			text-decoration: none;
		
			&:hover {
			
				text-decoration: none;
			}
		}
	}
	.desktop {

		position: fixed;
		top: 0;
		background-color: rgba(0, 0, 0, .85);
		width: 100%;
		color: #fff;
	
		nav {

			ul {

				display: inline-flex;
				list-style: none;
				margin: 0;
				padding: .5rem;

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

						&:hover, &.active {

							background-color: #fff;
							color: #000;
						}
					}
				}
			}
		}
	}

	.mobile {

		position: fixed;
		width: 100%;
		height: 60px;
		z-index: 1100;
		background-color: #000;
		top: 0;
		left: 0;
		right: 0;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, .25);

		.menu-toggle {

			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			height: inherit;
			width: 60px;
			user-select: none;
			color: #fff;
			cursor: pointer;
		}

		.logo {

			position: absolute;
			top: 0;
			left: 0;

			img {
				width: 60px;
				height: 60px;
			}
		}	

		nav {

			display: block;
			position: fixed;
			width: 100vw;
			height: 100vh;
			top: 60px;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: 1100;
			background-color: rgba(0, 0, 0, .75);
			visibility: hidden;
			opacity: 0;
			transition: all .25s ease-in-out;

			&.active {

				visibility: visible;
				opacity: 1;

				ul {

					transform: translateX(0);
				}
			}

			ul {

				list-style: none;
				background-color: rgba(0, 0, 0, .90);
				position: fixed;
				top: 60px;
				left: 0;
				width: 85%;
				height: 100vh;
				transform: translateX(-100%);
				padding: 1rem;
				transition: all .25s ease-in-out;

				li {

					width: 100%;

					&:not(:last-of-type) {

						border-bottom: 1px solid rgba(255, 255, 255, .25);
					}

					&:hover, &.active {

						a {

							background-color: rgba(255, 255, 255, .10);
							color: #fff;
							font-weight: 500;
							text-decoration: none;
							border-left: 5px solid #fff;
						}
					}

					a {

						display: block;
						color: #fff;
						width: 100%;
						height: 100%;
						padding: 1rem;
						font-size: 1.5rem;
					}
				}
			}
		}
	}
}
</style>