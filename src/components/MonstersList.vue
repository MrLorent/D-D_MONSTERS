<template>
	<ul id="monsters_list">
        <MonsterCard
            v-for="monster in monsters_data"
            :key="monster.id"
            :name="monster.name"/>
    </ul>
</template>

<script>
    import MonsterCard from './MonsterCard.vue';

    import { get_monsters_data } from "../services/api/controllers/dnd_controllers.js";

	export default {
		name: 'MonstersList',
        components: {
            MonsterCard
        },
        data() {
            return {
                monsters_data: []
            }
        },
        created: function() {
            this.retrieve_monsters_data()
        },
        methods: {
            async retrieve_monsters_data() {
                this.monsters_data = await get_monsters_data();
            }
        }
	}
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

	#monsters_list {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: var(--header-height) 0 var(--footer-height) 0;
    }
</style>