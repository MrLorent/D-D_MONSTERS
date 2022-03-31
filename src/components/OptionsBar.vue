<template>
	<div class="options_container">
        <div class="filters">
            <label for="monster_sort">Sort by : </label>
            <select :value="monsters_sort_type" @input="on_monsters_sort_type_changed" id="monster_sort">
                <option value="A-Z_name">Names (A - Z)</option>
                <option value="Z-A_name">Names (Z - A)</option>
                <option value="A-Z_alignment">Alignment (A - Z)</option>
                <option value="Z-A_alignment">Alignment (Z - A)</option>
            </select>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'OptionsBar',
        props: {
            monsters_sort_type: String,
        },
        watch: {
            monsters_sort_type(new_monsters_sort_type) {
                localStorage.setItem("monsters_sort_type", new_monsters_sort_type);
            },
        },
        methods: {
            on_monsters_sort_type_changed(event){
                this.$emit('update:monsters_sort_type', event.target.value);
            }
        },
	}
</script>

<style scoped>
	.options_container
    {
        background-color: var(--dark-grey);
        border-bottom: 1px solid var(--light-grey);
        width: 100%;
        height: var(--options-height);
        box-sizing: border-box;
        position: absolute;
        top: var(--header-height);
        z-index: 1;
        padding: 0 15px;
    }

    .filters
    {
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>