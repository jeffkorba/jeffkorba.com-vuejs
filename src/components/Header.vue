<script>
export default {

	data() {

		return {

			activeTab: 'home'
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

	<header>

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
							<li><RouterLink to="/" v-on:click="setTabActive('home')" v-bind:class="{active: activeTab == 'home'}">Home</RouterLink></li>
							<li><RouterLink to="/about" v-on:click="setTabActive('about')" v-bind:class="{active: activeTab == 'about'}">About</RouterLink></li>
							<li><RouterLink to="/contact" v-on:click="setTabActive('contact')" v-bind:class="{active: activeTab == 'contact'}">Contact</RouterLink></li>
						</ul>
					</nav>
				</div>

			</div>
		</div>

	</header>

</template>

<style lang="scss" scoped>
header {

	position: fixed;
	top: 0;
	background-color: rgba(0, 0, 0, .85);
	width: 100%;
	color: #fff;

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
</style>