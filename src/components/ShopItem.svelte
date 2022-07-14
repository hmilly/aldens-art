<script>
	import { DataStore } from '../stores.js';
	import { page } from '$app/stores';
	export let item;
	export let describe = false;

	const url = $page.url.pathname.match(/[0-9]/)
		? $page.url.pathname.replace('/collection', '').replace(/[0-9]/g, item.link)
		: item.link;

	const updateSold = (id) => {
		DataStore.update((currentData) => {
			const newArr = currentData;
			newArr[id - 1].reserved = true;
			return newArr;
		});
	};
</script>

<img src={url} alt={item.name} />
<div>
	<h4>{item.name}</h4>
	{#if describe}
		<p>{item.description}</p>
	{/if}

	<section>
		<p>Price {item.price}</p>
		<button on:click|preventDefault={updateSold(item.id)} class={item.reserved ? 'red' : 'green'}>
			{#if item.reserved}
				Reserved
			{:else}
				Reserve
			{/if}
		</button>
	</section>
</div>

<style>
	img {
		padding: 5px;
		justify-self: center;
		align-self: center;
		height: auto;
		width: 100%;
	}
	div {
		background-color: rgba(0, 0, 0, 0.335);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		padding: 15px;
		gap: 10px;
		align-items: start;
	}
	h4 {
		padding: 5px 0;
		text-align: center;
	}
	section {
		display: flex;
		flex-direction: row;
		height: 40px;
		align-items: center;
		justify-content: space-around;
	}
	button {
		cursor: pointer;
		border: solid 1px white;
		width: 50%;
		height: 100%;
	}
	.green {
		background-color: green;
		color: white;
		text-shadow: -2px 2px 10px rgb(17, 17, 17);
	}

	.red {
		background-color: red;
		color: white;
		text-shadow: -2px 2px 10px rgb(5, 5, 5);
	}
</style>
