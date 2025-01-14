<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />
		<div v-show="!loader" class="home">
			<div class="home__block">
				<HomeModal
					v-if="openCloseModal"
					@close-modal="openCloseModalFunc"
					:text="null"
					:title="null"
				/>
				<button class="home__button" type="button" @click="openCloseModalFunc">
					{{ t("openModal") }}
				</button>
			</div>
			<div class="home__block">
				<button type="button" @click="openCreateNewFolder">
					Create new folder
				</button>
				<HomeModalLib />
			</div>
			<div class="home__block">
				<HomePopup v-if="openClosePopup" @close-popup="openClosePopupFunc" />
				<button class="home__button" type="button" @click="openClosePopupFunc">
					{{ t("openPopup") }}
				</button>
			</div>
			<div class="home__block">
				<HomeDropdown />
			</div>
			<div class="home__block">
				<HomeDropdownLib />
			</div>
			<div class="home__block">
				<HomeProgressBar />
			</div>
			<div class="home__block">
				<HomeBoobleSort />
			</div>
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { useModal } from "vue-final-modal";
import HomeModal from "@/components/HomePage/HomeModal.vue";
import { ref } from "vue";
import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import HomePopup from "@/components/HomePage/HomePopup.vue";
import HomeDropdown from "@/components/HomePage/HomeDropdown.vue";
import { useI18n } from "vue-i18n";
import HomeProgressBar from "@/components/HomePage/HomeProgressBar.vue";
import HomeBoobleSort from "@/components/HomePage/HomeBoobleSort.vue";
import HomeModalLib from "@/components/HomePage/HomeModalLib.vue";
import HomeDropdownLib from "@/components/HomePage/HomeDropdownLib.vue";
const { t } = useI18n();

const loader = ref(true);
const onImagesLoaded = () => {
	loader.value = false;
};

const openCloseModal = ref(false);
const openCloseModalFunc = () => {
	openCloseModal.value = !openCloseModal.value;
};
const { open: openCreateNewFolder, close: closeCreateNewFolder } = useModal({
	component: HomeModalLib,
	attrs: {
		onCreated() {
			closeCreateNewFolder();
		},
	},
});

const openClosePopup = ref(false);
const openClosePopupFunc = () => {
	openClosePopup.value = !openClosePopup.value;
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
		padding: 10px 40px;
		margin: 10px 0;
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
