<template>
	<div class="carousel-block">
		<div class="carousel-block__items">
			<div
				v-for="(item, index) in props.items"
				:key="index"
				class="carousel-block__item"
				:class="{
					'carousel-block__item_active': props.activeItem === index,
					'carousel-block__item_unactive': props.activeItem !== index,
				}"
			>
				<img class="carousel-block__image" :src="item.img" alt="" srcset="" />
			</div>
		</div>

		<div class="carousel-block__buttons">
			<button
				:disabled="props.activeItem === 0"
				@click="prevItem"
				type="button"
				class="carousel-block__button"
			>
				Prev
			</button>
			<button
				:disabled="props.activeItem === props.items.length - 1"
				@click="nextItem"
				type="button"
				class="carousel-block__button"
			>
				Next
			</button>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
	items: Array,
	activeItem: Number,
});
const emit = defineEmits(["update:index"]);

const changeIndex = (newIndex) => {
	emit("update:index", newIndex);
};

const wait = ref(false);

const prevItem = () => {
	if (props.activeItem !== 0 && !wait.value) {
		wait.value = true;
		changeIndex(props.activeItem - 1);
		setTimeout(() => {
			wait.value = false;
		}, 700);
	}
};

const nextItem = () => {
	if (props.activeItem < props.items.length - 1 && !wait.value) {
		wait.value = true;
		changeIndex(props.activeItem + 1);
		setTimeout(() => {
			wait.value = false;
		}, 700);
	}
};
</script>

<style lang="scss" scoped>
.carousel-block {
	width: 600px;
	position: relative;

	&__items {
		display: flex;
		justify-content: center;
		max-width: 600px;
		border-radius: 12px;
		overflow: hidden;
	}

	&__item {
		overflow: hidden;
		max-width: 600px;
		max-width: 100vh;
		height: 600px;
		position: relative;

		&_active {
			width: 100%;
			transition: all 0.7s;
		}

		&_unactive {
			width: 0%;
			transition: all 0.7s;
		}
	}

	&__image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__buttons {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
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

	@media (max-width: 1919px) {
		width: 400px;
		&__items {
			max-width: 400px;
		}

		&__item {
			max-width: 400px;
			height: 400px;
		}
	}

	@media (max-width: 1023px) {
		width: 600px;
		&__items {
			max-width: 600px;
		}

		&__item {
			max-width: 600px;
			height: 600px;
		}
	}

	@media (max-width: 640px) {
		width: 400px;
		&__items {
			max-width: 400px;
		}

		&__item {
			max-width: 400px;
			height: 400px;
		}
	}

	@media (max-width: 480px) {
		width: 250px;

		&__items {
			max-width: 250px;
		}

		&__item {
			max-width: 250px;
			height: 250px;
		}
	}
}
</style>
