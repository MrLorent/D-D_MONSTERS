<template>
	<div class="monster_card">
		<div class="picture_container" v-html="svg_picture"></div>
		<div class="monster_details">
			<h3 class="name">{{ monster_name }}</h3>
		</div>
	</div>
</template>

<script>
	import {get_random_monster_svg} from '../services/api/controllers/pixel_enconter_controllers.js'
	
	export default {
		name: 'MonsterCard',
		props: {
			monster_name: String
		},
		data(){
			return {
				svg_picture: SVGElement
			}
		},
		created: function(){
			this.retrieve_picture_url();
		},
		methods: {
			async retrieve_picture_url() {
				this.svg_picture = await get_random_monster_svg();
			}
		},
	}
</script>

<style scoped>
	.monster_card
	{
		width: 25vw;
		height: 25vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.picture
	{
		height: 75%;
	}

	.monster_details
	{
		width: 100%;
		height: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h3
	{
		font-size: 1.2em;
		margin: 0;
	}
</style>