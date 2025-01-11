<template>
	<div class="home-popup">
		<p class="home-popup__text">{{ t("popupExample") }}</p>
		<button class="home-popup__button" type="button" @click="closePopup">
			{{ t("close") }}
		</button>
	</div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const emit = defineEmits(["closePopup"]);
const closePopup = () => {
	console.log("close");
	emit("closePopup");
};
</script>

<style lang="scss" scoped>
.home-popup {
	z-index: 50;
	position: absolute;
	top: 46px;
	transform: translate(-50%);
	left: 50%;
	width: 300px;
	height: 250px;
	border-radius: 25px;
	background-color: var(--light-pink-color);
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	&__text {
		text-align: center;
		font-size: 1.5em;
		font-weight: normal;
	}

	&__button {
		width: 100px;
		height: 25px;
		border-radius: 5px;
		color: var(--red-color);
		text-transform: uppercase;
		border: 1px solid var(--red-color);
		background-color: white;
		font-weight: 600;
		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
