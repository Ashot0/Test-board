<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />
		<div v-show="!loader" class="map-view">
			<MapBlock />
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { ref } from "vue";

import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import MapBlock from "@/components/MapView/MapBlock.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";

const loader = ref(true);

const onImagesLoaded = async () => {
	loader.value = false;
};
</script>

<style scoped lang="scss">
.map-view {
	font-family: var(--jakarta);
	height: 100%;
	position: relative;
}
</style>
