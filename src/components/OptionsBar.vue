<template>
	<div class="options_container">
        <div class="sort_container">
            <div class="sort_selector">
                <label for="monster_sort">Sort by : </label>
                <select :value="monsters_sort_type" @input="on_monsters_sort_type_changed" id="monster_sort">
                    <option value="name">Names</option>
                    <option value="alignment">Alignments</option>
                    <option value="strength">Strength</option>
                    <option value="dexterity">Dexterity</option>
                    <option value="constitution">Constitution</option>
                    <option value="intelligence">Intelligence</option>
                </select>
            </div>
            <div class="reverse_toggle">
                <label for="reversed">Reverse order</label>
                <input :value="reversed" @input="on_reversed_changed" type="checkbox" id="reversed" :checked="reversed === 'on'">
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'OptionsBar',
        props: {
            monsters_sort_type: String,
            reversed : String,
        },
        methods: {
            on_monsters_sort_type_changed(event){
                this.$emit('update:monsters_sort_type', event.target.value);
            },
            on_reversed_changed(){
                this.$emit('update:reversed', this.reversed == "off" ? "on" : "off");
            },
        },
        watch: {
            monsters_sort_type(new_monsters_sort_type) {
                localStorage.setItem("monsters_sort_type", new_monsters_sort_type);
            },
            reversed(new_reversed){
                localStorage.setItem("reversed", new_reversed);
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
        display: flex;
        align-items: center;
        position: absolute;
        top: var(--header-height);
        z-index: 1;
        padding: 0 15px;
    }

    .sort_container
    {
        display: flex;
        align-items: center;
    }

    .sort_selector
    {
        display: flex;
        align-items: center;
    }

    .reverse_toggle
    {
        display: flex;
        align-items: center;
    }

    #reversed
    {
        margin: 0;
    }

</style>