<script>
	import ShopItem from '/src/components/ShopItem.svelte';

	import { page } from '$app/stores';
	import { DataStore } from '/src/stores.js';

	const id = $page.url.pathname.replace(/\D/g, '');
</script>

<div>
	{#each $DataStore as item}
		{#if item.id === parseInt(id)}
			<ShopItem {item} describe={true} />
		{/if}
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: minmax(auto, 750px);
		grid-template-rows: auto;
		align-items: center;
		margin-top: 20px;
		gap: 10px 20px;
		justify-content: center;
		justify-items: center;
	}
</style>
