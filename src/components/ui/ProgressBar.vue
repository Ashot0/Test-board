<template>
	<div class="progress-bar">
		<p class="progress-bar__text">
			Условное указание числа заполненности прогресс бара от 0 до 300 :
		</p>

		<input
			v-model="barNum"
			class="progress-bar__input"
			type="number"
			@input="limitBar"
		/>

		<div class="progress-bar__bar-wrapper">
			<div class="progress-bar__bar" :style="`width: ${barNum}px`"></div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
	num: Number,
});

const barNum = ref(props.num);

const limitBar = (event) => {
	const value = parseInt(event.target.value, 10);
	if (value > 300) {
		barNum.value = 300;
	} else if (value < 0) {
		barNum.value = 0;
	} else {
		barNum.value = value;
	}
};
</script>

<style lang="scss" scoped>
.progress-bar {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Arial, sans-serif;
	padding: 20px;
	background-color: #f7f9fc;
	border-radius: 12px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	max-width: 400px;
	margin: 50px auto;

	&__text {
		max-width: 300px;
		text-align: center;
		font-size: 1.2em;
		font-weight: normal;
	}

	&__input {
		width: 100px;
		flex: 1;
		padding: 8px 12px;
		font-size: 16px;
		border: 2px solid var(--in-color);
		border-radius: 6px;
		margin-right: 10px;
		outline: none;
		transition: border-color 0.3s;
		&:focus {
			border-color: var(--middle-light-red-color);
		}
	}

	&__bar-wrapper {
		width: 300px;
		height: 20px;
		overflow: hidden;
		border-radius: 8px;
		border: 1px solid var(--dark-red-color);
	}

	&__bar {
		border-radius: 8px;
		max-width: 300px;
		width: 0;
		height: 20px;
		background-color: var(--red-color);
		filter: drop-shadow(0px 0px 20px var(--red-color));
		transition: width 0.5s;
	}
}
</style>
