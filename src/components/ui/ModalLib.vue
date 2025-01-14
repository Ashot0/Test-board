<template>
	<VueFinalModal
		v-model="isVisible"
		class="home-modal-lib"
		content-class="home-modal-lib__content"
		@update:model-value="(val) => emit('update:modelValue', val)"
	>
		<h1 class="home-modal-lib__title">{{ props.title }}</h1>
		<p class="home-modal-lib__text">
			{{ props.text }}
		</p>
		<div class="home-modal-lib__btns">
			<button class="home-modal-lib__button" @click="confirm">OK</button>
			<button class="home-modal-lib__button" @click="props.closeModal">
				{{ t("cancel") }}
			</button>
		</div>
	</VueFinalModal>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const props = defineProps(["title", "text", "closeModal"]);
const emit = defineEmits(["update:modelValue", "confirm"]);

const isVisible = ref(true);

const confirm = () => {
	emit("confirm");
};
</script>

<style lang="scss">
.home-modal-lib {
	display: flex;
	justify-content: center;
	align-items: center;
	&__content {
		font-family: var(--jakarta);
		display: flex;
		padding: 0 20px 20px;
		margin-top: 0.5rem;
		flex-direction: column;
		border-radius: 0.5rem;
		border-width: 1px;
		max-width: 36rem;
		background-color: #ffffff;
		justify-content: space-between;
		gap: 1px;
		border: 1px solid black;
	}
	&__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	&__btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 20px;
	}
	&__button {
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		margin-top: 0.25rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border: 1px solid black;
	}
}
</style>
