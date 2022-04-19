<template>
    <section id="monsters_gallery">
        <OptionsBar
            v-model:monsters_sort_type="monsters_sort_type"
            v-model:reversed="reversed"
        />
        <div class="monsters_list">
            <div class="error_404" v-if="sort_monsters_data.length === 0">
                <p class="visual">¯\_(ツ)_/¯</p>
                <p class="text">Sorry, no monster matches your research...</p>
            </div>
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
            <button @click="get_more_monsters_data">MORE</button>
        </div>
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
        props: {
            search: String,
        },
        methods: {
            async get_monsters_data(monster_rank, number_of_monsters) {
                /* Get text content from D&D api*/
                this.monsters_loaded = await get_monsters_data(monster_rank, number_of_monsters);
                
                /* Set the monsters picture to the loader by default */
                this.monsters_loaded.map(async element => {
                    element['color'] = this.alignments_classification[(element.alignment).toLowerCase()];
                    element['picture_svg'] = loader_icon;
                    
                    /* Get picture content from Pixel encounter monster api */
                    element['picture_svg'] = await get_random_monster_svg();
                    
                    /* Get all the alignements of the monsters */
                    if(!this.monsters_alignments.includes(element['alignment'])) {
                        this.monsters_alignments.push(element['alignment']);
                    }
                });

                this.monsters_data = this.monsters_data.concat(this.monsters_loaded);
            },
            async get_more_monsters_data() {
                this.get_monsters_data(this.monster_rank, 20);
                this.monster_rank++;
            },
            async retrieve_alignment_classification(){
                this.alignments_classification = await get_alignments_data();
            },
        },
        data() {
            return {
                monsters_loaded: [],
                monsters_data: [],
                monster_rank: 0,
                monsters_alignments: [],
                alignments_classification: {},

                // SORTING PARAMETERS
                monsters_sort_type: localStorage.getItem("monsters_sort_type") || "name",
                reversed: localStorage.getItem("reversed") || "off",
            }
        },
        computed: {
            sort_monsters_data() {
                const field = this.monsters_sort_type;
                const reversed = this.reversed === "on" ? -1 : 1;

                const filter_func = (a) =>
                    a.name.toLowerCase().includes(this.search.toLowerCase());
                const string_comparator = (a, b) => a[field].localeCompare(b[field]) * reversed;
                const number_comparator = (a, b) => (b[field] - a[field]) * reversed < 0;
                const comparator = ['name','alignment'].includes(field) ? string_comparator : number_comparator;
                
                return this.monsters_data
                    .filter(filter_func)
                    .sort(comparator);
            } 
        },
        created: function() {
            this.retrieve_alignment_classification().then(() => {
                this.get_monsters_data(this.monster_rank, 40);
                this.monster_rank = 2;
            });
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

    .error_404
    {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .error_404 .visual
    {
        color: var(--light-blue);
        font-size: 5em;
        margin: 10% 0 2.5% 0;
    }

    .error_404 .text
    {
        font-size: 1.5em;
        font-weight: 500;
        letter-spacing: 0.025em;
    }
</style>