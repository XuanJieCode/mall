<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'TabBar'
}
</script>

<style scoped>
	.tabbar {
		display: flex;
		height: 49px;
		

		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f6f6f6;
		box-shadow: 0 0 5px #999;
	}
</style>