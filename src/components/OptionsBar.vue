<template>
	<div class="options_container">
        <div class="filters">
            <label for="monster_sort">Sort by : </label>
            <select v-model="monster_sort_type" @input="send_sort_request" id="monster_sort">
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
        data() {
            return {
                monster_sort_type: "A-Z_name",
            }
        },
        send_sort_request(){
            console.log(this.monster_sort_type);
            this.$emit('sort_requested', this.monster_sort_type);
        },
	}
</script>

<style scoped>
	.options_container
    {
        border-bottom: 1px solid var(--light-grey);
        height: var(--options-height);
        padding: 0 15px;
    }

    .filters
    {
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>