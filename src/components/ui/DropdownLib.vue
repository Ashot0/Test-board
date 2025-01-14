<template>
	<VDropdown class="home-dropdown" :distance="6">
		<button class="home-dropdown__button ui-button">
			<span v-if="dropdownOption">{{ dropdownOption }}</span>
			<span v-else>{{ t("openDropdown") }}</span>
		</button>
		<template #popper>
			<div class="home-dropdown__content">
				<ul class="home-dropdown__list">
					<li
						class="home-dropdown__option"
						v-for="option in props.dropdownOptions"
						:key="option.name"
						@click="selectOption(option.value)"
					>
						{{ option.name }}
					</li>
				</ul>
			</div>
		</template>
	</VDropdown>
</template>

<script setup>
// import { options } from "floating-vue";
import { ref, defineProps } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const isDropdownOpen = ref(false);
const dropdownOption = ref(null);

const props = defineProps({
	dropdownOptions: Object,
});

const selectOption = (option) => {
	dropdownOption.value = option;
	isDropdownOpen.value = false;
};
</script>

<style lang="scss">
.home-dropdown {
	&__button {
	}

	&__content {
		background: white;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}

	&__list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	&__option {
		padding: 10px;
		cursor: pointer;
		&:hover {
			background-color: #f0f0f0;
		}
	}
}
</style>
