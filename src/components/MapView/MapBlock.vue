<template>
	<div ref="mapRef" style="width: 100%; height: calc(100vh - 125px)"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import { mapItems } from "@/data/mapItems";

const mapRef = ref(null);

const initMap = async () => {
	const loader = new Loader({
		apiKey: "AIzaSyAiCCezYTERA8iBw-A_ZFJba6WQ-G3lE4U",
		version: "weekly",
		libraries: ["marker"],
	});

	const google = await loader.load();

	const map = new google.maps.Map(mapRef.value, {
		center: { lat: 46.443794, lng: 30.75605 },
		zoom: 2.5,
		mapId: "dab19d39a8313fed",
	});

	const addStyle = (item, icon) => {
		item.style.width = "75px";
		item.style.height = "75px";
		item.style.backgroundImage = `url(${icon})`;
		item.style.backgroundSize = "cover";
	};

	const addMarker = (positionLat, positionLng, content) => {
		new google.maps.marker.AdvancedMarkerElement({
			map,
			position: { lat: positionLat, lng: positionLng },
			content: content,
		});
	};

	mapItems.forEach((element) => {
		const divElement = document.createElement("div");
		addStyle(divElement, element.icon);
		addMarker(element.position.lat, element.position.lng, divElement);
	});
};

onMounted(initMap);
</script>

<style lang="scss" scoped></style>
