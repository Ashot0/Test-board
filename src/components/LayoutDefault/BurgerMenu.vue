<template>
	<div class="burger-menu">
		<nav class="burger-menu__navbar">
			<button
				@click="navigateAndClose('/')"
				:class="activeLink('/') ? 'burger-menu__link_active' : ''"
				class="burger-menu__link"
			>
				{{ t("Home") }}
			</button>

			<button
				@click="navigateAndClose('/bg-pin')"
				:class="activeLink('/bg-pin') ? 'burger-menu__link_active' : ''"
				class="burger-menu__link"
			>
				{{ t("BgPin") }}
			</button>

			<button
				@click="navigateAndClose('/carousel')"
				:class="activeLink('/carousel') ? 'burger-menu__link_active' : ''"
				class="burger-menu__link"
			>
				{{ t("Carousel") }}
			</button>

			<button
				@click="navigateAndClose('/form')"
				:class="activeLink('/form') ? 'burger-menu__link_active' : ''"
				class="burger-menu__link"
			>
				{{ t("Form") }}
			</button>

			<button
				@click="navigateAndClose('/map')"
				:class="activeLink('/map') ? 'burger-menu__link_active' : ''"
				class="burger-menu__link"
			>
				{{ t("Map") }}
			</button>
		</nav>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { defineEmits } from "vue";

import { useI18n } from "vue-i18n";

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const emit = defineEmits(["close"]);

const navigateAndClose = async (path) => {
	await router.push(path);
	emit("close");
};

function activeLink(link) {
	let activate = false;
	if (link === route.path) {
		activate = true;
	}
	return activate;
}
</script>

<style lang="scss" scoped>
.burger-menu {
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	background-color: rgba(0, 0, 0, 0.95);

	&__navbar {
		margin-top: 100px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}

	&__link {
		font-weight: bold;
		text-transform: uppercase;
		color: white;
		background: none;
		max-width: 100%;

		&_active {
			color: var(--light-pink-color);
			filter: drop-shadow(0 0 5px var(--red-color));
		}
	}
}
</style>
