<script>
	import ShopLink from '../components/ShopLink.svelte';
	import { DataStore } from '../stores.js';
</script>

<svelte:head>
	<title>Collection</title>
</svelte:head>

<h1>Current collection</h1>
<div>
	{#each $DataStore as data (data.id)}
		<ShopLink item={data} />
	{/each}
</div>

<style>
	h1 {
		padding: 20px;
	}
	div {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(auto, 450px));
		gap: 30px;
		padding: 20px;
		grid-template-rows: auto;
		justify-content: center;
	}
</style>
