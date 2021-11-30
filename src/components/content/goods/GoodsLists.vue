<template>
	<div class="goods">
		<goods-list-item v-for="item in goods" :goods_item="item" />
	</div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
	name: 'GoodsLists',
	props: {
		goods: {
			type: Array
		}
	},
	components:{
		GoodsListItem
	},
	created(){
		// console.log(this.goods);
	}
}
</script>

<style scoped>
	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
</style>