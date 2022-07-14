<script>
	import { UserData } from '../stores.js';

	const handleDelete = (name) => {
		UserData.update((user) => {
			return user.filter((u) => u.name !== name);
		});
	};
</script>

<svelte:head>
	<title>Owner login</title>
</svelte:head>

<div>
	{#each $UserData as u}
		<ul>
			<button on:click={() => handleDelete(u.name)}>x</button>
			<li>{u.name}</li>
			<li>{u.email}</li>
			<li>{u.number}</li>
			<li>{u.comment}</li>
		</ul>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-template-rows: auto;
		margin: 20px;
		grid-gap: 40px;
	}
	ul {
		position: relative;
		list-style-type: none;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, auto);
		padding: 10px;
		border: solid rgba(128, 128, 128, 0.4) 1px;
		background-color: rgba(2, 4, 27, 0.342);
		border-radius: 5px;
	}
	ul:hover {
		border: solid grey 1px;
		cursor: text;
	}
	li {
		padding: 10px;
	}
	li:last-child {
		font-style: italic;
	}
	button {
		position: absolute;
		right: 0;
		margin: 2px;
		padding: 0 6px;
		font-weight: bolder;
		background: rgb(183, 0, 0);
		border: 3px solid black;
	}
	button:hover {
		cursor: pointer;
	}
</style>
