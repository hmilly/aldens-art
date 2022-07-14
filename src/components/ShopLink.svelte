<script>
	import ShopItem from '../components/ShopItem.svelte';
	export let item;

	
	
</script>

<a href={`/collection/${item.id}`}>
	<div>
		<ShopItem {item} />
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}
	a:hover {
		transition: 0.1s;
		box-shadow: 2px 2px 4px 4px rgb(48, 67, 154);
	}
	div {
		display: grid;
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		background-color: rgba(0, 0, 0, 0.335);
		text-decoration: none;
	}
</style>
