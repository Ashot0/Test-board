<template>
	<LayoutDefaut>
		<div class="form">
			<FormBlock />
		</div>
	</LayoutDefaut>
</template>

<script setup>
import FormBlock from "@/components/FormView/FormBlock.vue";
import LayoutDefaut from "@/layouts/layoutDefaut.vue";
</script>

<style scoped lang="scss">
.form {
	font-family: var(--jakarta);
	padding: 20px 0;
}
</style>
