<template>
	<li class="monster_card">
		<div class="picture_container" v-html="picture_svg">
		</div>
		<div class="details_container">
			<h3 class="name">{{ name }}</h3>
			<p class="alignment">{{ alignment }}</p>
		</div>
	</li>
</template>

<script>
	export default {
		name: 'MonsterCard',
		props: {
			picture_svg: { type: String, required: true },
			name: { type: String, required: true },
			alignment: { type: String, required: true },
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

	>>> .loader_icon {
        stroke: var(--green);
        width: 40%;
        height: 40%;
    }

	>>> svg
	{
		height: 100%;
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