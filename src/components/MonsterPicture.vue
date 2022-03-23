<template>
    <div class="frame" v-html="svg_picture"></div>
</template>

<script>
    import {get_random_monster_svg} from '../services/api/controllers/monsters_controllers.js';

    export default {
        name: 'MonsterPicture',
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
    .frame
	{
		width: 100%;
		height: 100%;
        box-sizing: border-box;
		padding: 15px;
	}

	>>> svg
	{
		height: 100%;
	}
</style>