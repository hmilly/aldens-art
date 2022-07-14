<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/collection'}>
				<a sveltekit:prefetch href="/collection">Collection</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		border: 10px solid;
		width: 98%;
		height: 100%;
		max-width: 1200px;
		margin: 2px;
		border-image-slice: 1;
		border-width: 5px;
		border-radius: 5px;
		border-image-source: linear-gradient(to left, #3ac3d5, #3a66d5);
	}
	nav,
	ul,
	li {
		height: 100%;
		width: 100%;
	}
	ul {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1.5fr 1fr;
		grid-template-rows: 1fr;
		justify-content: space-evenly;
		justify-items: center;
		align-items: center;
	}
	a {
		display: flex;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
		text-decoration: none;
		text-transform: uppercase;
		transition: 0.2s;
		letter-spacing: 1px;
	}
	a:hover {
		cursor: pointer;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.active {
		background: rgb(58, 195, 213);
		background: linear-gradient(180deg, rgba(58, 195, 213, 0.5) 0%, rgba(58, 148, 213, 0.5) 100%);
	}
</style>
