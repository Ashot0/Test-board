<template>
	<div>
		<!-- Кнопка для активации дропдауна -->
		<button
			ref="dropdownActivator"
			@click="toggleDropdown"
			class="dropdown-button"
		>
			Открыть дропдаун
		</button>

		<!-- Сам дропдаун -->
		<Dropdown
			v-model="isDropdownOpen"
			:placement="'bottom-start'"
			:offset="[0, 10]"
			class="dropdown-container"
		>
			<!-- Содержимое дропдауна -->
			<template #dropdown>
				<div class="dropdown-content">
					<ul>
						<li @click="selectOption('Опция 1')">Опция 1</li>
						<li @click="selectOption('Опция 2')">Опция 2</li>
						<li @click="selectOption('Опция 3')">Опция 3</li>
					</ul>
				</div>
			</template>
		</Dropdown>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { Dropdown } from "floating-vue";

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
	isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
	console.log("Выбрано:", option);
	isDropdownOpen.value = false;
};
</script>

<style>
.dropdown-button {
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
}

.dropdown-container {
	background: white;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-content ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.dropdown-content li {
	padding: 10px;
	cursor: pointer;
}

.dropdown-content li:hover {
	background-color: #f0f0f0;
}
</style>
