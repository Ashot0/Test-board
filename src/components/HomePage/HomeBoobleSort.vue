<template>
	<div class="home-booble-sort">
		<p class="home-booble-sort__title">{{ t("bubbleSort") }}</p>
		<p class="home-booble-sort__text">{{ t("sourceArray") }}:{{ numbers }}</p>
		<p class="home-booble-sort__text">
			<input
				v-model="inputElement"
				class="home-booble-sort__input"
				type="number"
			/>
			<button class="home-booble-sort__btn" @click="addElement" type="button">
				{{ t("addElement") }}
			</button>
		</p>
		<button class="home-booble-sort__button" @click="bubbleSort">
			{{ t("sort") }}
		</button>
		<p class="home-booble-sort__text" v-show="sortedNumbers.length > 0">
			{{ t("sortedArray") }}: {{ sortedNumbers }}
		</p>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const numbers = ref([]);
const sortedNumbers = ref([]);
const inputElement = ref(null);

const addElement = () => {
	if (inputElement.value !== null) {
		numbers.value.push(inputElement.value);
	}
	inputElement.value = null;
};
const bubbleSort = () => {
	const arr = [...numbers.value];
	let n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	sortedNumbers.value = arr;
};
</script>

<style scoped lang="scss">
.home-booble-sort {
	top: 0;
	left: 0;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 10px;
	&__title {
		font-size: 20px;
		text-align: center;
	}
	&__text {
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		border: 1px solid var(--dark-red-color);
	}

	&__btn {
		border-radius: 5px;
		padding: 5px;
		border: 1px solid black;
		background-color: var(--light-pink-color);
		font-weight: 500;
		&:hover {
			opacity: 0.8;
		}
	}
	&__button {
		width: 100%;
		padding: 10px 40px;
		border-radius: 20px;
		background-color: var(--red-color);
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		&:hover {
			opacity: 0.9;
		}
		&:active {
			opacity: 0.7;
		}
		&:disabled {
			background-color: var(--grey-color);
			opacity: 0.9;
			cursor: default;
		}
	}
}
</style>
