<template>
	<LayoutDefaut>
		<div @click="addPin($event)" class="background-pin">
			<img
				class="background-pin__image"
				src="../assets/Images/BgPin.jpg"
				alt=""
			/>
			<div
				v-for="(pin, index) in pinStore.pins"
				:key="index"
				@click="deletePin($event, pin)"
				class="background-pin__pin"
				:style="{ top: `${pin.pinY}%`, left: `${pin.pinX}%` }"
			>
				📍
			</div>
		</div>
		<div class="background-pin__info-block">
			<button
				class="background-pin__fetch-btn"
				@click="pinStore.fetchPins()"
				type="button"
			>
				fetch pins
			</button>
			<p class="background-pin__text">
				{{ t("backgroundPinText") }}
			</p>
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { onMounted } from "vue";
import { usePinStore } from "@/stores/pinStore";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const pinStore = usePinStore();
function addPin(event) {
	event.stopPropagation();
	const container = event.currentTarget;
	const rect = container.getBoundingClientRect();

	const x = ((event.clientX - rect.left) / rect.width) * 100;
	const y = ((event.clientY - rect.top) / rect.height) * 100;

	pinStore.addPin(x, y);
}

const deletePin = (event, pin) => {
	event.stopPropagation();
	pinStore.deletePin(pin.id);
};

onMounted(() => {
	pinStore.fetchPins();
});
</script>
<style scoped lang="scss">
.background-pin {
	font-family: var(--jakarta);
	margin: 20px 0;
	position: relative;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	&__image {
		pointer-events: none;
		width: 100%;
		border-radius: 20px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	&__pin {
		position: absolute;
		transform: translate(-50%, -100%);
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
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
		width: 100%;
		margin: 0 0 50px 0;
	}

	&__fetch-btn {
		background-color: var(--red-color);
		padding: 20px;
		border-radius: 20px;
		color: white;
		font-weight: bold;
		text-transform: uppercase;
		&:hover {
			opacity: 0.9;
		}
		&:active {
			opacity: 0.7;
		}
	}

	&__text {
		max-width: 700px;
		@media (min-width: 1919px) {
			font-size: 24px;
			max-width: 1200px;
		}
	}
}
</style>
