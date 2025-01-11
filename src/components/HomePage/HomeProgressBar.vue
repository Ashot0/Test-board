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
import { ref } from "vue";
const barNum = ref(0);

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
	&__text {
		max-width: 300px;
		text-align: center;
		font-size: 1.2em;
		font-weight: normal;
	}

	&__input {
		width: 100px;
		border: 1px solid var(--red-color);
		padding: 3px 10px;
		border-radius: 12px;
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
		height: 20px;
		background-color: var(--red-color);
	}
}
</style>
