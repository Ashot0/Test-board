<template>
	<div class="layout-default">
		<LayoutDefaultHeader class="layout-default__header" />

		<main class="layout-default__main">
			<slot />
		</main>
		<footer class="layout-default__footer">
			<a href="https://ashot0.github.io/Portfolio.2.0-public/#/">
				Created by Illia Golovan
			</a>
		</footer>
	</div>
</template>

<script setup>
import LayoutDefaultHeader from "../components/LayoutDefault/LayoutDefaultHeader.vue";
</script>

<style lang="scss">
.layout-default {
	font-family: var(--jakarta);
	display: flex;
	flex-direction: column;
	&__header {
		position: fixed;
		width: 100%;
	}

	&__main {
		margin-top: 90px;
		min-height: calc(100vh - 125px);
		background-color: white;
		padding: 0 35px;
		@media (max-width: 1024px) {
			padding: 0 5px;
		}
	}
	&__footer {
		background-color: var(--grey-color);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 35px;
		a {
			color: black;
		}
	}
}
</style>
