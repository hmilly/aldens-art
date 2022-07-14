<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		width: 100%;
		background-color: rgba(255, 255, 255, 0.065);
		border-radius: 2px;
	}
</style>
