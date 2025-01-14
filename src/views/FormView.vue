<template>
	<LayoutDefaut>
		<LoaderDefault @loaded="onImagesLoaded" />
		<div v-show="!loader" class="form">
			<FormBlock />
		</div>
	</LayoutDefaut>
</template>

<script setup>
import { ref } from "vue";

import LoaderDefault from "@/components/LayoutDefault/LoaderDefault.vue";
import FormBlock from "@/components/FormView/FormBlock.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";

const loader = ref(true);
const onImagesLoaded = () => {
	loader.value = false;
};
</script>

<style scoped lang="scss">
.form {
	font-family: var(--jakarta);
	padding: 20px 0;
}
</style>
