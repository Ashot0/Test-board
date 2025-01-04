<template>
	<header class="header">
		<img class="header__logo" src="@/assets/logo.png" alt="" />
		<nav class="header__navbar">
			<router-link class="header__link" to="/">{{ t("Home") }}</router-link>
			<router-link class="header__link" to="/bg-pin">{{
				t("BgPin")
			}}</router-link>
			<router-link class="header__link" to="/carousel">{{
				t("Carousel")
			}}</router-link>
			<router-link class="header__link" to="/form">{{ t("Form") }}</router-link>
			<router-link class="header__link" to="/map">{{ t("Map") }}</router-link>
		</nav>

		<BurgerMenu v-if="burgerMenu" class="header__burger" @close="burgerClose" />
		<div class="header__btns">
			<button class="header__btn" @click="locale = 'en'" type="button">
				EN
			</button>
			<button class="header__btn" @click="locale = 'ru'" type="button">
				RU
			</button>
			<button class="header__btn" @click="locale = 'ua'" type="button">
				UA
			</button>
			<button @click="burgerSwitch" class="header__burger-btn" type="button">
				<img v-if="burgerMenu" src="@/assets/Icon/cross.png" alt="" srcset="" />
				<img v-else src="@/assets/Icon/burger-menu.png" alt="" srcset="" />
			</button>
		</div>
	</header>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import BurgerMenu from "./BurgerMenu.vue";
const { t, locale } = useI18n();
const burgerMenu = ref(false);

const burgerSwitch = () => {
	burgerMenu.value = !burgerMenu.value;
};
const burgerClose = () => {
	burgerMenu.value = false;
};
</script>

<style lang="scss" scoped>
.header {
	z-index: 50;
	height: 90px;
	opacity: 0.9;
	background-color: var(--grey-color);
	padding: 35px 5%;
	display: flex;
	align-items: center;
	gap: 70px;
	&__logo {
		max-height: 35px;
	}
	&__navbar {
		display: flex;
		gap: 35px;
		@media (max-width: 1024px) {
			display: none;
		}
	}
	&__link {
		font-weight: bold;
		text-transform: uppercase;
		color: var(--dark-font-color);

		&.router-link-exact-active {
			color: var(--red-color);
		}
	}
	&__btns {
		display: flex;
		gap: 20px;
		position: absolute;
		right: 20px;
	}
	&__btn {
		padding: 5px 10px;
		margin: 10px 0;
		border-radius: 20px;
		background-color: var(--red-color);
		color: white;
		font-size: 10px;
		&:hover {
			opacity: 0.9;
		}
		&:active {
			opacity: 0.7;
		}
	}
	&__burger {
		left: 0;
		z-index: 7;
		@media (min-width: 1023px) {
			display: none;
		}
	}
	&__burger-btn {
		position: relative;
		z-index: 10;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		object-fit: cover;
		background-color: var(--grey-color);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		@media (min-width: 1023px) {
			display: none;
		}
	}
}
</style>
