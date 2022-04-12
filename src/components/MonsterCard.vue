<template>
	<div class="monster_card" :style="monster_color">
		<div class="picture_container" v-html="picture_svg">
		</div>
		<div class="details_container">
			<div class="caracteristics">
				<h3 class="name">{{ name }}</h3>
				<p class="alignment">{{ alignment }}</p>
			</div>
			<div class="statistics">
				<p class="stat type"><span class="label">Type : </span>{{ type }}</p>
				<p class="stat size"><span class="label">Size : </span>{{ size }}</p>
				<p class="stat strength"><span class="label">Strength : </span>{{ strength }}</p>
				<p class="stat dexterity"><span class="label">Dexterity : </span>{{ dexterity }}</p>
				<p class="stat constitution"><span class="label">Constitution : </span>{{ constitution }}</p>
				<p class="stat intelligence"><span class="label">Intelligence : </span>{{ intelligence }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MonsterCard',
		props: {
			picture_svg: { type: String, required: true },
			color: { type: String, required: true },
			name: { type: String, required: true },
			alignment: { type: String, required: true },
			type: { type: String, required: true },
			size: { type: String, required: true },
			strength: { type: Number, required: true },
			dexterity: { type: Number, required: true },
			constitution: { type: Number, required: true },
			intelligence: { type: Number, required: true },
		},
		computed: {
			monster_color() {
				return {
					'--monster-color': this.color,
				};
			}
		}
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

	>>> .loader_icon {
        stroke: var(--light-blue);
        width: 40%;
        height: 40%;
    }

	>>> svg
	{
		height: 100%;
	}

	>>> svg > rect:first-child {
		display: none;
	}

	>>> svg rect
	{
		fill: var(--monster-color);
	}


	.details_container
	{
		background-color: var(--light-grey);
		font-weight: bold;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		position: absolute;
		top: 0;
		padding: 15px;
		transform: translateY(200%);
		transition: 0.4s ease-in;
	}

	.monster_card:hover .details_container
	{
		transform: translateY(0);
		transition: 0.4s ease-out;
	}

	.caracteristics
	{
		width: 100%;
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
		padding: 5%;
	}

	.name
	{
		font-size: 2vw;
		text-align: center;
		padding: 0 0 5px 0;
		margin: 0;
	}

	.alignment
	{
		color: var(--monster-color);
	}

	.statistics
	{
		width: 100%;
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 2.5%;
	}

	.stat
	{
		color: var(--monster-color);
		padding: 5px 0 0 0;
	}

	.label
	{
		color: var(--white);
	}
</style>