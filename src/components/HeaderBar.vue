<template>
	<header>
        <div class="logo_container">
            <h1>D&D MONSTERS</h1>
        </div>
        <div class="search_container">
            <button class="clear_button" v-if="search" @click="clear_search">
                <CrossIcon/>
            </button>
            <input class="search_bar" v-model="search"  @keyup.enter="send_search_request" type="text" name="search" placeholder="Search a monster">
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
        methods: {
            clear_search() {
                this.search = "";
            },
            send_search_request(){
                this.emitter.emit('search_requested', this.search);
            },
        },
        data() {
            return {
                search: "",
            }
        },
	}
</script>

<style scoped>
	header
    {
        border-bottom: 1px solid var(--light-grey);
        width: 100%;
        height: var(--header-height);
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
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
</style>