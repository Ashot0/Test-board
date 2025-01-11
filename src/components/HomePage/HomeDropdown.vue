<template>
	<div class="dropdown">
		<button
			class="dropdown__button"
			type="button"
			@click="openCloseDropdownFunc"
		>
			<span v-if="!activeOption">{{ t("openDropdown") }}</span>
			<span v-else>{{ activeOption }}</span>
		</button>
		<ul v-if="openCloseDropdown" class="dropdown__options">
			<li class="dropdown__option" @click="chooseOption('option 1')">
				option 1
			</li>
			<li class="dropdown__option" @click="chooseOption('option 2')">
				option 2
			</li>
			<li class="dropdown__option" @click="chooseOption('option 3')">
				option 3
			</li>
			<li class="dropdown__option" @click="chooseOption('option 4')">
				option 4
			</li>
			<li class="dropdown__option" @click="chooseOption('option 5')">
				option 5
			</li>
			<li class="dropdown__option" @click="chooseOption('option 6')">
				option 6
			</li>
			<li class="dropdown__option" @click="chooseOption('option 7')">
				option 7
			</li>
			<li class="dropdown__option" @click="chooseOption('option 8')">
				option 8
			</li>
			<li class="dropdown__option" @click="chooseOption('option 9')">
				option 9
			</li>
			<li class="dropdown__option" @click="chooseOption('option 10')">
				option 10
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const openCloseDropdown = ref(false);
const openCloseDropdownFunc = () => {
	openCloseDropdown.value = !openCloseDropdown.value;
};

const activeOption = ref(null);
const chooseOption = (option) => {
	console.log(option);
	activeOption.value = option;
	openCloseDropdownFunc();
};
</script>

<style lang="scss" scoped>
.dropdown {
	position: relative;
	width: 250px;
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
	&__options {
		position: absolute;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 20px;
		width: 100%;
		overflow: hidden;
	}
	&__option {
		cursor: pointer;
		padding: 10px 40px;
		background-color: var(--red-color);
		&:hover {
			opacity: 0.9;
		}
	}
}
</style>
