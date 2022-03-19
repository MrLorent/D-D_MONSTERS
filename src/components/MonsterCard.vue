<template>
	<li class="monster_card">
		<div class="picture_container" v-html="svg_picture"></div>
		<div class="details_container">
			<h3 class="name">{{ name }}</h3>
		</div>
	</li>
</template>

<script>
	import {get_random_monster_svg} from '../services/api/controllers/monsters_controllers.js'
	
	export default {
		name: 'MonsterCard',
		props: {
			name: { type: String, required: true }
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
		width: 25%;
		height: 25vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.picture_container
	{
		height: 75%;
	}

	>>> svg
	{
		height: 100%;
	}

	.details_container
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