<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />

		<div v-show="!loader" class="home">
			<!-- Home Modal Block -->
			<div class="home__block">
				<HomeModal
					v-if="openCloseModal"
					@close-modal="openCloseModalFunc"
					@confirm="confirm"
					:text="loremText"
					:title="null"
				/>
				<button
					class="home__button ui-button"
					type="button"
					@click="openCloseModalFunc"
				>
					{{ t("openModal") }}
				</button>
			</div>

			<!-- Modal Library Block -->
			<div class="home__block">
				<button class="ui-button" type="button" @click="openModalLib">
					{{ t("openModal") }}
				</button>
			</div>

			<!-- Popup Block -->
			<div class="home__block">
				<PopupComponent
					v-if="openClosePopup"
					@close-popup="openClosePopupFunc"
					:text="loremText"
				/>
				<button
					class="home__button ui-button"
					type="button"
					@click="openClosePopupFunc"
				>
					{{ t("openPopup") }}
				</button>
			</div>

			<!-- Dropdown Block -->
			<div class="home__block">
				<DropdownLib :dropdownOptions="dropdownOption" />
			</div>

			<!-- Progress Bar Block -->
			<div class="home__block">
				<ProgressBar :num="60" />
			</div>

			<!-- Bubble Sort Block -->
			<div class="home__block">
				<BoobleSort />
			</div>
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { useModal } from "vue-final-modal";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// Components
import HomeModal from "@/components/ui/ModalComponent.vue";
import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import PopupComponent from "@/components/ui/PopupComponent.vue";
import ProgressBar from "@/components/ui/ProgressBar.vue";
import BoobleSort from "@/components/ui/BoobleSort.vue";
import ModalLib from "@/components/ui/ModalLib.vue";
import DropdownLib from "@/components/ui/DropdownLib.vue";

const { t } = useI18n();

// State
const loader = ref(true);
const openCloseModal = ref(false);
const openClosePopup = ref(false);
const loremText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nostrum!";

// Dropdown Options
const dropdownOption = [
	{ name: t("option") + " 1", value: t("option") + " 1" },
	{ name: t("option") + " 2", value: t("option") + " 2" },
	{ name: t("option") + " 3", value: t("option") + " 3" },
];

// Methods
const onImagesLoaded = () => {
	loader.value = false;
};

const openCloseModalFunc = () => {
	openCloseModal.value = !openCloseModal.value;
};

const openClosePopupFunc = () => {
	openClosePopup.value = !openClosePopup.value;
};

const openModalLib = () => {
	const { open, close } = useModal({
		component: ModalLib,
		attrs: {
			title: t("modalExample"),
			text: loremText,
			closeModal() {
				close();
			},
			"onUpdate:modelValue": (val) => {
				if (!val) close();
			},
			onConfirm: () => {
				console.log("Confirmation action performed.");
				close();
			},
		},
	});
	open();
};

const confirm = () => {
	console.log("Confirmation action performed.");
};
</script>

<style scoped lang="scss">
.home {
	font-family: var(--jakarta);
	width: 100%;
	height: 100%;
	padding: 20px 0;
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 200px;
	gap: 20px;
	align-items: center;
	justify-items: center;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 640px) {
		grid-template-columns: repeat(1, 1fr);
	}

	&__block {
		position: relative;
	}

	&__button {
	}
}
</style>
