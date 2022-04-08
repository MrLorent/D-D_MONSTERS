<template>
    <section id="monsters_gallery">
        <OptionsBar v-model:monsters_sort_type="monsters_sort_type"/>
        <ul class="monsters_list">
            <MonsterCard
                v-for = "monster in sort_monsters_data"
                :key = "monster.index"
                :color = "monster.color"
                :picture_svg = "monster.picture_svg"
                :name = "monster.name"
                :alignment = "monster.alignment"
                :type = "monster.type"
                :size = "monster.size"
                :strength = "monster.strength"
                :dexterity = "monster.dexterity"
                :constitution = "monster.constitution"
                :intelligence = "monster.intelligence"
            />
        </ul>
    </section>
</template>

<script>
    const loader_icon = `<svg class="loader_icon" width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd" stroke-width="2">
            <circle cx="22" cy="22" r="1">
                <animate attributeName="r"
                    begin="0s" dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                    begin="0s" dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="1">
                <animate attributeName="r"
                    begin="-0.9s" dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite" />
                <animate attributeName="stroke-opacity"
                    begin="-0.9s" dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </svg>`;
    import OptionsBar from './OptionsBar.vue';
    import MonsterCard from './MonsterCard.vue';
    import { get_monsters_data, get_alignments_data } from '../services/api/controllers/dnd_controllers.js';
    import { get_random_monster_svg } from '../services/api/controllers/monsters_controllers.js';

    export default {
        name: 'MonstersList',
        components: {
            // COMPONENTS
            OptionsBar,
            MonsterCard,
        },
        methods: {
            async retrieve_monsters_data() {
                /* Get text content from D&D api*/
                this.monsters_data = await get_monsters_data();
                
                /* Set the monsters picture to the loader by default */
                this.monsters_data.map(element => {
                    element['color'] = this.alignments_classification[(element.alignment).toLowerCase()];
                    element['picture_svg'] = loader_icon;
                    
                    /* Get all the alignements of the monsters */
                    if(!this.monsters_alignments.includes(element['alignment'])) {
                        this.monsters_alignments.push(element['alignment']);
                    }
                });
                
                /* Get the actual real pictures for the monster*/
                this.retrieve_monsters_picture();
            },
            retrieve_monsters_picture() {
                this.monsters_data.map(async (element) => {
                    /* Get picture content from Pixel encounter monster api */
                    element['picture_svg'] = await get_random_monster_svg();
                });
            },
            async retrieve_alignment_classification(){
                this.alignments_classification = await get_alignments_data();
                this.retrieve_monsters_data();
            },
        },
        data() {
            return {
                monsters_data: [],
                monsters_alignments: [],
                alignments_classification: {},
                search: localStorage.getItem("search") || "",
                monsters_sort_type: localStorage.getItem("monsters_sort_type") || "A-Z_name",
            }
        },
        computed: {
            sort_monsters_data() {
                const field = ["A-Z_name", "Z-A_name"].includes(this.monsters_sort_type) ? "name" : "alignment";
                const reversed = ["Z-A_name", "Z-A_alignment"].includes(this.monsters_sort_type);
                
                const filter_func = (a) =>
                    a.name.toLowerCase().includes(this.search.toLowerCase());
                const comparator = (a, b) => a[field].localeCompare(b[field]);
                
                let filtered_monsters = this.monsters_data.filter(filter_func);
                let sorted_monsters = filtered_monsters.sort(comparator);
                if (reversed) sorted_monsters = sorted_monsters.reverse()
                
                return sorted_monsters;
            } 
        },
        created: function() {
            this.retrieve_alignment_classification();
        },
        mounted() {
            this.emitter.on('search_requested', request => { this.search = request; });
            this.emitter.on('sort_requested', sort_type => { this.monsters_sort_type = sort_type; });
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

    .monsters_list {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;
        padding: calc(var(--options-height) + 15px) 15px 15px 15px;
    }

    .monsters_list::-webkit-scrollbar
    {
        width: 0;
    }
</style>