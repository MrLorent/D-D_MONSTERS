<template>
	<header>
        <div class="logo_container">
            <img src="../assets/logo.png" alt="D&D Monsters logo">
            <h1>D&D MONSTERS</h1>
        </div>
        <div class="search_container">
            <button class="clear_button" v-if="search" @click="clear_search">
                <CrossIcon/>
            </button>
            <input class="search_bar" :value="search"  @keyup.enter="on_search_changed" type="text" name="search" placeholder="Search a monster">
        </div>
    </header>
</template>

<script>
    import CrossIcon from './icons/CrossIcon.vue';
    
	export default {
		name: 'HeaderBar',
        components: {
            CrossIcon
        },
        props: {
            search: String,
        },
        methods: {
            clear_search() {
                this.$emit('update:search', "");
            },
            on_search_changed(event){
                this.$emit('update:search', event.target.value);
            }
        },
        watch: {
            search: function(new_search) {
                localStorage.setItem("search", new_search);
            },
        },
	}
</script>

<style scoped>
	header
    {
        background-color: var(--dark-grey);
        border-bottom: 1px solid var(--light-grey);
        width: 100%;
        height: var(--header-height);
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 1;
        padding: 0 15px;
    }

    .logo_container,
    .search_container
    {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .logo_container img
    {
        height: 50%;
        padding: 0 15px 0 0;
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
        border: 1px solid var(--light-blue);
    }
</style>