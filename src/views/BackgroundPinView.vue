<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />
		<div v-show="!loader" @click="addPin" class="background-pin">
			<img
				class="background-pin__image"
				src="../assets/Images/BgPin.jpg"
				alt=""
			/>
			<div
				v-for="(pin, index) in pinStore.pins"
				:key="index"
				@click="(event) => deletePin(event, pin)"
				class="background-pin__pin"
				:style="{ top: `${pin.pinY}%`, left: `${pin.pinX}%` }"
			>
				📍
			</div>
		</div>
		<div v-show="!loader" class="background-pin__info-block">
			<p class="background-pin__text">
				{{ t("backgroundPinText") }}
			</p>
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { usePinStore } from "@/stores/pinStore";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const pinStore = usePinStore();

const loader = ref(true);

const onImagesLoaded = () => {
	loader.value = false;
};

function addPin(event) {
	event.stopPropagation();
	const container = event.currentTarget;
	const rect = container.getBoundingClientRect();

	const x = ((event.clientX - rect.left) / rect.width) * 100;
	const y = ((event.clientY - rect.top) / rect.height) * 100;

	pinStore.addPin(x, y);
}

function deletePin(event, pin) {
	event.stopPropagation();
	pinStore.deletePin(pin.id);
}

onMounted(() => {
	pinStore.fetchPins();
	setInterval(pinStore.fetchPins, 3000);
});
</script>

<style scoped lang="scss">
.background-pin {
	font-family: var(--jakarta);
	margin: 20px 0;
	position: relative;
	cursor: pointer;
	user-select: none;

	&__image {
		pointer-events: none;
		width: 100%;
		border-radius: 20px;
		user-select: none;
	}

	&__pin {
		position: absolute;
		transform: translate(-50%, -100%);
		user-select: none;
		height: 24px;
		font-size: 24px;

		@media (max-width: 1023px) {
			height: 12px;
			font-size: 12px;
		}
	}

	&__info-block {
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-bottom: 50px;
	}

	&__text {
		text-align: center;
		max-width: 700px;

		@media (min-width: 1919px) {
			font-size: 24px;
			max-width: 1200px;
		}
	}
}
</style>
