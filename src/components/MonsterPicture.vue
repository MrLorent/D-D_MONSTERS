<template>
    <div class="frame" ref="frame">
        <LoadingIcon/>
    </div>
</template>

<script>
    import LoadingIcon from '../assets/LoadingIcon.vue'
    import {get_random_monster_svg} from '../services/api/controllers/monsters_controllers.js';

    export default {
        name: 'MonsterPicture',
        components: {
            LoadingIcon
        },
        methods: {
			async retrieve_picture_url() {
				const monster_svg = await get_random_monster_svg();
                this.$refs.frame.innerHTML = monster_svg;
			}
		},
		created: function(){
			this.retrieve_picture_url();
		},
    }
</script>

<style scoped>
    .frame
	{
		width: 100%;
		height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
		padding: 20px;
	}

	>>> svg
	{
		height: 100%;
	}
</style>