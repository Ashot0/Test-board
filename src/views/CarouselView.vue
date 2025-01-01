<template>
	<LayoutDefaut>
		<div class="carousel">
			<h2 class="carousel__title">{{ t("carouselTextTitle1") }}</h2>
			<div class="carousel__wrapper">
				<div class="carousel__slider">
					<swiper
						effect="cube"
						:grabCursor="true"
						:cube-effect="cubeEffectOptions"
						:pagination="true"
						:modules="modules"
						class="mySwiper"
						@swiper="setFirstSwiper"
						:controller="{ control: secondSwiper }"
					>
						<swiper-slide :key="item.name" v-for="item in itemsCapibara">
							<img :src="item.img" />
						</swiper-slide>
					</swiper>
				</div>
				<div class="carousel__slider">
					<swiper
						effect="cube"
						:grabCursor="true"
						:cube-effect="cubeEffectOptions"
						:pagination="true"
						:modules="modules"
						class="mySwiper"
						@swiper="setSecondSwiper"
						:controller="{ control: firstSwiper }"
					>
						<swiper-slide :key="item.name" v-for="item in itemsPanda">
							<img :src="item.img" />
						</swiper-slide>
					</swiper>
				</div>
			</div>
			<p class="carousel__text">
				{{ t("carouselText2") }}
			</p>
		</div>
		<div class="carousel">
			<h2 class="carousel__title">
				{{ t("carouselTextTitle2") }}
			</h2>
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
import { ref, toRaw } from "vue";
import { useI18n } from "vue-i18n";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
import CarouselBlock from "@/components/CarouselView/CarouselBlock.vue";
import { itemsCapibara, itemsPanda, itemsDog } from "@/data/carousel";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Controller } from "swiper/modules";

const { t } = useI18n();
const activeItem = ref(0);

const cubeEffectOptions = {
	shadow: true,
	slideShadows: true,
	shadowOffset: 20,
	shadowScale: 0.94,
};
const modules = [EffectCube, Pagination, Controller];

const firstSwiper = ref(null);
const secondSwiper = ref(null);
const setFirstSwiper = (swiper) => {
	firstSwiper.value = toRaw(swiper);
};
const setSecondSwiper = (swiper) => {
	secondSwiper.value = toRaw(swiper);
};

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
	&__title {
		font-weight: 500;
		text-align: center;
		font-size: 24px;
		@media (min-width: 1023px) {
			font-size: 32px;
		}
	}
	&__wrapper {
		height: fit-content;
		display: flex;
		gap: 20px;
		align-items: center;
		justify-content: space-around;
		width: 100%;
		padding: 0 20px 20px 20px;
		@media (max-width: 1023px) {
			flex-direction: column;
		}
	}
	&__slider {
		width: 45%;
		@media (max-width: 1023px) {
			width: 95%;
		}
		.swiper {
			aspect-ratio: 1 1;
			width: 100%;
		}
		.swiper-slide {
			background-position: center;
			background-size: cover;
			img {
				display: block;
				width: 100%;
			}
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
