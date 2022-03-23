<template>
    <section id="monsters_gallery">
        <div class="gallery_options">
            <div class="top_options">
                <div class="logo_container">
                    <h1>D&D MONSTERS</h1>
                </div>
                <div class="search_container">
                    <button class="clear_button" v-if="search" @click="clean_search">
                        <CrossIcon/>
                    </button>
                    <input class="search_bar" v-model="search" type="text" name="search" placeholder="Search a monster">
                </div>
            </div>
            <div class="bottom_options">
                <div class="filters">
                    <label for="monster_sort">Sort by : </label>
                    <select v-model="monster_sort_type" id="monster_sort">
                        <option value="A-Z_name">Names (A - Z)</option>
                        <option value="Z-A_name">Names (Z - A)</option>
                        <option value="A-Z_alignment">Alignment (A - Z)</option>
                        <option value="Z-A_alignment">Alignment (Z - A)</option>
                    </select>
                </div>
            </div>
        </div>
        <ul class="monsters_list">
            <MonsterCard
                v-for="monster in sort_monsters_data"
                :key="monster.id"
                :name="monster.name"
                :alignment="monster.alignment"/>
        </ul>
    </section>
</template>

<script>
    import CrossIcon from '../assets/CrossIcon.vue'
    import MonsterCard from './MonsterCard.vue';
    import { get_monsters_data } from '../services/api/controllers/dnd_controllers.js';

    export default {
        name: 'MonstersList',
        components: {
            // ICONS
            CrossIcon,

            // COMPONENTS
            MonsterCard,
        },
        methods: {
            async retrieve_monsters_data() {
                this.monsters_data = await get_monsters_data();
            },
            clean_search() {
                this.search = "";
            },
        },
        data() {
            return {
                monsters_data: [],
                search: "",
                monster_sort_type: "A-Z_name",
            }
        },
        computed: {
            sort_monsters_data() {
                const field = ["A-Z_name", "Z-A_name"].includes(this.monster_sort_type) ? "name" : "alignment";
                const reversed = ["Z-A_name", "Z-A_alignment"].includes(this.monster_sort_type);
                
                const filter_func = (a) =>
                    a.name.toLowerCase().includes(this.search.toLowerCase()) || a.alignment.toLowerCase().includes(this.search.toLowerCase());
                const comparator = (a, b) => a[field].localeCompare(b[field]);
                
                let filtered_monsters = this.monsters_data.filter(filter_func);
                let sorted_monsters = filtered_monsters.sort(comparator);
                if (reversed) sorted_monsters = sorted_monsters.reverse()
                
                return sorted_monsters;
            } 
        },
        created: function() {
            this.retrieve_monsters_data()
        },
    }
</script>

<style scoped>
    #monsters_gallery {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding: var(--header-height) 0 0 0;
    }

    .gallery_options
    {
        background-color: var(--dark-grey);
        width: 100%;
        height: var(--header-height);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
    }

    .top_options,
    .bottom_options
    {
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid var(--light-grey);
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .top_options
    {
        height: 60%;
        justify-content: space-between;
    }

    .logo_container,
    .search_container
    {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .clear_button
    {
        cursor: pointer;
        background: var(--light-grey);
        border: 1px solid var(--light-grey);
        width: 40px;
        height: 40px;
        box-sizing: border-box;
    }

    .search_bar
    {
        background-color: var(--black);
        color: var(--white);
        font-size: 1em;
        border: 1px solid var(--light-grey);
        border-radius: 1px;
        height: 40px;
        box-sizing: border-box;
        padding: 5px 7.5px;
    }

    .search_bar::placeholder
    {
        color: var(--discret-font-color);
        opacity: 1;
    }

    .search_bar:focus {
        outline: none;
        border: 1px solid var(--green);
    }

    .bottom_options
    {
        height: 40%;
    }

    .filters
    {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .monsters_list {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;
        padding: 15px;
    }

    .monsters_list::-webkit-scrollbar
    {
        width: 0;
    }
</style>