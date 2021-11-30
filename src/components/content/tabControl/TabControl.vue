<template>
	<div class="tab_control">
		<div v-for="(item,index) in titles" class="tab_control_item" @click="cotrolItemClick(index)" :key="item">
			<span :class="{control_active:index == currentIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TanControl",
	data(){
		return{
			currentIndex: 0
		}
		
	},
	props: {
		titles:{
			type:Array,
		}
	},
	methods: {
		cotrolItemClick(index){
			this.currentIndex = index;
			this.$emit('tabClick',index);
		}
	}
}
</script>

<style scoped>
.tab_control{
	display: flex;
	position: sticky;
	top: 44px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
	font-weight: 400;
	background-color: #fff;
	z-index: 3;
}
.tab_control_item {
	flex: 1;
}
.tab_control_item span {
	padding: 5px;
}
.control_active {
	border-bottom: 3px solid;
	color: rgb(247, 140, 158);
	font-weight: 600;
}
</style>