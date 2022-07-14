<script>
	import Form from '../components/Form.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About the artist</h1>
<div>
	<p>Firstly, welcome to Aldens Art! Thanks for visiting!</p>
	<p>
		Alden currently resides in Greenwich and creates art as a hobby along with working full time at
		a busy London station.
	</p>
	<p>He hails from the philippines which is where he says a lot of his inspiration comes from.</p>
	<p>
		In future work, you can expect to see shore lines, beach scenes and nature - as well as
		colourful scenes.
	</p>
	<p>
		He also works on comission, so if you like what you see and would like him to create something
		for you, please get intouch below to see if it would be feasable.
	</p>
	<p>Thanks again for visiting and may you have a happy day.</p>
	<Form />
</div>

<style>
	h1,
	div {
		padding: 20px 10px;
	}
	div {
		display: grid;
		grid-template-columns: minmax(260px, 700px);
		grid-template-rows: 1fr;
		gap: 10px;
		justify-content: center;
	}
	p:nth-child(even) {
		background-color: rgba(13, 13, 90, 0.212);
	}
</style>
