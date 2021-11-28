<template>
	<div class="navbar">
		<div class="nav_left">
			<slot name="left"></slot>
		</div>

		<div class="nav_center">
			<slot name="center"></slot>
		</div>

		<div class="nav_right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
	display: flex;
	height: 44px;
	line-height: 44px;
	text-align: center;
	box-shadow: 0 0 5 rgba(100, 100, 100, 0.3);
}
.nav_left,.nav_right {
	width: 60px;
	/* background-color: cadetblue; */
}
.nav_center {
	flex: 1;
	/* background-color: pink; */
}
</style>