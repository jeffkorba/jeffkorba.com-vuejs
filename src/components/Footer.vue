<script>
export default {
	data () {
		return {
			copyright: '&copy; ' + new Date().getFullYear() + ' Jeff Korba'
		}
	}
}
</script>

<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="copyright" v-html="copyright"></div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {

	position: fixed;
	bottom: 0;
	width: 100%;
	color: #fff;

	.copyright {

		padding: 1rem 1.5rem;
		display: inline-flex;
		align-items: center;
		background-color: rgba(0, 0, 0, .85);
		border-radius: 4px 4px 0 0;
	}
}
</style>