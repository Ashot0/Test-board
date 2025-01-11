<template>
	<div @click="emit('closeModal')" class="home-modal__wrapper">
		<div @click.stop class="home-modal">
			<p class="home-modal__text">{{ t("modalExample") }}</p>
			<div class="home-modal__btns">
				<button
					class="home-modal__button"
					@click="chooseContinue"
					type="button"
				>
					ОK
				</button>
				<button class="home-modal__button" @click="chooseCancel" type="button">
					{{ t("cancel") }}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineEmits } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const emit = defineEmits(["closeModal"]);
const chooseContinue = () => {
	console.log("Continue");
	emit("closeModal");
};
const chooseCancel = () => {
	console.log("Cancel");
	emit("closeModal");
};
</script>

<style lang="scss" scoped>
.home-modal {
	width: 250px;
	height: 150px;
	background-color: white;
	border-radius: 20px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&__wrapper {
		z-index: 60;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__text {
		text-align: center;
		font-size: 1.5em;
		font-weight: normal;
	}

	&__btns {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	&__button {
		width: 75px;
		height: 25px;
		border-radius: 5px;
		border: 1px solid black;
		text-transform: uppercase;
		background-color: var(--light-pink-color);
		font-weight: 500;
		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
