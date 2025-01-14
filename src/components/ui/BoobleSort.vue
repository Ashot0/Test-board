<template>
	<div class="home-booble-sort">
		<p class="home-booble-sort__title">{{ t("bubbleSort") }}</p>

		<p class="home-booble-sort__text">
			{{ t("sourceArray") }}:
			<span class="home-booble-sort__text_numbers">{{ numbers }}</span>
		</p>

		<form @submit.prevent="addElement" class="home-booble-sort__form">
			<input
				v-model="inputElement"
				class="home-booble-sort__input"
				type="number"
			/>
			<button class="home-booble-sort__btn" @click="addElement" type="button">
				{{ t("addElement") }}
			</button>
		</form>

		<button class="home-booble-sort__button" @click="bubbleSort">
			{{ t("sort") }}
		</button>

		<p class="home-booble-sort__text" v-show="sortedNumbers.length > 0">
			{{ t("sortedArray") }}:
			<span class="home-booble-sort__text_numbers">{{ sortedNumbers }}</span>
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
	gap: 10px;
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

	&__title {
		font-size: 24px;
		color: var(--light-gray-border);
		text-align: center;
	}

	&__text {
		padding: 5px;
		display: flex;
		align-items: start;
		justify-content: center;
		border-radius: 4px;
		max-height: 5rem;
		overflow: auto;
		border: 2px solid var(--in-color);
		padding: 5px;
		line-height: 1.5rem;
		&_numbers {
			font-weight: 600;
			margin-left: 10px;
		}
	}

	&__form {
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__input {
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

	&__btn {
		border-radius: 5px;
		padding: 5px;
		font-weight: 500;
		background-color: var(--red-color);
		color: white;
		border: 1px solid white;
		transition: all 0.5s;
		&:hover {
			background-color: var(--light-pink-color);
			opacity: 0.8;
			border: 1px solid black;
			color: black;
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
