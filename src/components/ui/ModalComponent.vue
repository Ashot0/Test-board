<template>
	<div @click="emit('closeModal')" class="home-modal__wrapper">
		<div @click.stop class="home-modal">
			<h2 class="home-modal__title">{{ title }}</h2>

			<p class="home-modal__text">{{ props.text }}</p>

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
import { defineEmits, defineProps, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
	text: String,
	title: String,
});

const title = computed(() => props.title || t("modalExample"));

const emit = defineEmits(["closeModal", "confirm"]);

const chooseContinue = () => {
	emit("closeModal");
	emit("confirm");
};
const chooseCancel = () => {
	emit("closeModal");
};
</script>

<style lang="scss" scoped>
.home-modal {
	display: flex;
	padding: 20px;
	margin-top: 0.5rem;
	flex-direction: column;
	border-radius: 0.5rem;
	border-width: 1px;
	max-width: 36rem;
	background-color: #ffffff;
	justify-content: space-between;
	gap: 1rem;
	border: 1px solid black;

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

	&__title {
		font-size: 1.5em;
		font-weight: normal;
		margin: 0;
	}

	&__text {
	}

	&__btns {
		display: flex;
		justify-content: flex-end;
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
