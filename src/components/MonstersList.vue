<template>
	<ul id="monsters_list">
        <MonsterCard name="Patrick le Dragon"/>
        <MonsterCard name="Patrick le Dragon"/>
        <MonsterCard name="Patrick le Dragon"/>
        <MonsterCard name="Patrick le Dragon"/>
    </ul>
</template>

<script>
    import MonsterCard from './MonsterCard.vue'

	export default {
		name: 'MonstersList',
        components: {
            MonsterCard
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