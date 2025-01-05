<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />
		<div v-show="!loader" class="home">HomePage</div>
	</LayoutDefaut>
</template>

<script setup>
import { ref } from "vue";
import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
const loader = ref(true);
const onImagesLoaded = () => {
	loader.value = false;
};
</script>

<style scoped lang="scss">
.home {
	font-family: var(--jakarta);
}
</style>
