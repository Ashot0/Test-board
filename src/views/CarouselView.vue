<template>
	<LayoutDefaut>
		<div class="carousel">
			<div class="carousel__wrapper">
				<CarouselBlock
					:items="itemsCapibara"
					:activeItem="activeItem"
					@update:index="syncIndex"
				/>
				<CarouselBlock
					:items="itemsPanda"
					:activeItem="activeItem"
					@update:index="syncIndex"
				/>
				<CarouselBlock
					:items="itemsDog"
					:activeItem="activeItem"
					@update:index="syncIndex"
				/>
			</div>
			<p class="carousel__text">
				{{ t("carouselText") }}
			</p>
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { ref } from "vue";
import CarouselBlock from "@/components/CarouselView/CarouselBlock.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import { itemsCapibara, itemsPanda, itemsDog } from "@/data/carousel";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const activeItem = ref(0);

const syncIndex = (index) => {
	activeItem.value = index;
};
</script>

<style scoped lang="scss">
.carousel {
	font-family: var(--jakarta);
	margin: 30px 0;
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__wrapper {
		height: fit-content;
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: center;
		width: 100%;
		@media (max-width: 1023px) {
			flex-direction: column;
		}
	}
	&__text {
		margin: auto;
		padding: 0 20px;
		max-width: 700px;
		font-family: var(--helvetica);
		text-align: center;
		letter-spacing: normal;
		@media (min-width: 1919px) {
			font-size: 24px;
			max-width: 1200px;
		}
	}
}
</style>
