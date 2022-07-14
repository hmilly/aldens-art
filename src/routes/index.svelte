<script>
	import { fade } from 'svelte/transition';
	import { DataStore } from '../stores.js';
	let max = $DataStore.length;
	let count = Math.floor(Math.random() * max) + 1;

	setInterval(() => {
		count === max ? (count = 1) : count++;
	}, 5000);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Home page</h1>
<div class="home">
	<p>Welcome to Aldens Art! Thanks for visiting!</p>
	<p>
		Below is a carousel of whats currently on offer in the shop. Please use the links provided to browse the current collection.
	</p>
	<section>
		{#each $DataStore as data (data.id)}
			{#if data.id === count}
				<img
					src={data.link}
					alt={data.name}
					transition:fade|local={{ delay: 300, duration: 200 }}
				/>
			{/if}
		{/each}
	</section>
</div>

<style>
	h1,
	div {
		padding: 20px;
	}

	div {
		display: grid;
		grid-template-columns: minmax(auto, 700px);
		grid-template-rows: auto 50px 1fr;
		height: 70vh;
		gap: 20px;
		justify-content: center;
		justify-items: center;
	}

	section {
		display: grid;
		position: relative;
		grid-template-columns: minmax(auto, 800px);
		grid-template-rows: auto;
		justify-items: center;
	}

	img {
		position: absolute;
		max-width: 100%;
		margin-top: 40px;
		max-height: 100%;
	}
</style>
