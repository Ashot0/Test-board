<template>
	<VueFinalModal
		class="home-modal-lib"
		content-class="home-modal-lib__content"
		@update:model-value="(val) => emit('update:modelValue', val)"
	>
		<h1 class="home-modal-lib__title">
			{{ title }}
		</h1>
		<slot />
		<button class="home-modal-lib__button" @click="emit('confirm')">
			Confirm
		</button>
	</VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import { defineProps, defineEmits } from "vue";
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
});
console.log(props);

const emit = defineEmits(["update:modelValue", "confirm"]);
</script>
<style lang="scss">
.home-modal-lib {
	display: flex;
	justify-content: center;
	align-items: center;
	&__content {
		display: flex;
		padding: 1rem;
		margin-left: 1rem;
		margin-right: 1rem;
		margin-top: 0.5rem;
		flex-direction: column;
		border-radius: 0.5rem;
		border-width: 1px;
		max-width: 36rem;
		background-color: #ffffff;
	}
	&__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}
	&__button {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		margin-top: 0.25rem;
		border-radius: 0.5rem;
		border-width: 1px;
	}
}
</style>
