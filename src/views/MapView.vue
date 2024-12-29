<template>
	<LayoutDefaut>
		<div class="map-view">
			<MapBlock />
		</div>
	</LayoutDefaut>
</template>

<script setup>
import MapBlock from "@/components/MapView/MapBlock.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
</script>

<style scoped lang="scss">
.map-view {
	font-family: var(--jakarta);
}
</style>
