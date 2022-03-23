<template>
	<li class="monster_card">
		<div class="picture_container" v-html="picture_svg"></div>
		<div class="details_container">
			<h3 class="name">{{ name }}</h3>
			<p class="alignment">{{ alignment }}</p>
		</div>
	</li>
</template>

<script>
	const loader_icon = `<svg class='loader_icon' width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fill-rule='evenodd' stroke-width='2'>
            <circle cx='22' cy='22' r='1'>
                <animate attributeName='r'
                    begin='0s' dur='1.8s'
                    values='1; 20'
                    calcMode='spline'
                    keyTimes='0; 1'
                    keySplines='0.165, 0.84, 0.44, 1'
                    repeatCount='indefinite' />
                <animate attributeName='stroke-opacity'
                    begin='0s' dur='1.8s'
                    values='1; 0'
                    calcMode='spline'
                    keyTimes='0; 1'
                    keySplines='0.3, 0.61, 0.355, 1'
                    repeatCount='indefinite' />
            </circle>
            <circle cx="22" cy="22" r="1">
                <animate attributeName="r"
                    begin="-0.9s" dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite" />
                <animate attributeName='stroke-opacity'
                    begin='-0.9s' dur='1.8s'
                    values='1; 0'
                    calcMode='spline'
                    keyTimes='0; 1'
                    keySplines='0.3, 0.61, 0.355, 1'
                    repeatCount='indefinite' />
            </circle>
        </g>
    </svg>`;
	import {get_random_monster_svg} from '../services/api/controllers/monsters_controllers.js';
	
	export default {
		name: 'MonsterCard',
		props: {
			name: { type: String, required: true },
			alignment: { type: String, required: true }
		},
		data() {
			return {
				picture_svg: loader_icon
			}
		},
		methods: {
			async retrieve_picture_url() {
				this.picture_svg = await get_random_monster_svg();
			}
		},
		created: function(){
			this.retrieve_picture_url();
		},
	}
</script>

<style scoped>
	.monster_card
	{
		background-color: var(--dark-grey);
		width: calc(25% - 20px);
		height: calc(24.5vw - 20px);
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin: 10px;
		transition: 0.5 ease-in;
	}

	.picture_container
	{
		width: 100%;
		height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
		padding: 20px;
	}

	>>> svg.loader_icon
	{
		stroke: var(--green);
        width: 40%;
        height: 40%;
	}

	.details_container
	{
		background-color: var(--light-grey);
		width: 100%;
		height: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		transform: translateY(20vh);
		transition: 0.4s ease-in;
	}

	.monster_card:hover .details_container
	{
		transform: translateY(0);
		transition: 0.4s ease-out;
	}

	.name
	{
		font-size: 1.2em;
		margin: 0;
	}

	.alignment
	{
		color: var(--discret-font-color);
	}
</style>