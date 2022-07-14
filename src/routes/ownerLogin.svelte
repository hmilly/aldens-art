<script>
	import OwnerPage from '../components/OwnerPage.svelte';
	let email = '';
	let password = '';
	let error = '';
	let authenticated = false;

	const handlePassword = () => {
		if (password.length < 7) {
			error = 'Password is too short';
		} else {
			email = '';
			password = '';
			authenticated = true;
		}
	};

	const handleSubmit = () => {
		email.toLowerCase().trim() === 'alden.mirrina@gmail.com' && password !== ''
			? handlePassword()
			: (error = 'Email or password does not match what is on file, please try again');
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>
	{!authenticated
		? 'Owner login'
		: 'Welcome Alden! Here are the user comments we currently have on file:'}
</h1>
<div>
	{#if !authenticated}
		<p>
			Please navigate to the home page if you are not the owner of this site, thank you for your
			interest.
		</p>
		<h3>{error}</h3>

		<form on:submit|preventDefault={handleSubmit}>
			<label for="email">Email:</label>
			<input
				type="email"
				bind:value={email}
				required
				name="email"
				placeholder="Enter your email..."
			/>
			<label for="password">Password:</label>
			<input
				type="password"
				bind:value={password}
				required
				name="password"
				placeholder="Enter your password..."
			/>
			<button>LOGIN</button>
		</form>
	{:else}
		<OwnerPage />
	{/if}
</div>

<style>
	h1,
	div {
		padding: 20px;
	}
	div {
		display: grid;
		grid-template-columns: minmax(300px, 700px);
		grid-template-rows: 80px 80px 270px;
		gap: 10px 20px;
		justify-content: center;
	}

	form {
		display: grid;
		padding: 10px;
		grid-template-columns: minmax(250px, 500px);
		grid-template-rows: repeat(2, 30px 40px) 40px;
		gap: 1px 20px;
		justify-content: center;
		align-content: space-around;
		border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to left, #3ac3d5, #3a66d5);
	}

	label,
	input {
		padding: 5px;
	}
	input {
		background: rgb(62, 227, 216);
		border-radius: 3px;
		font-weight: bold;
		border: black 1px solid;
	}
	input::placeholder {
		color: rgba(10, 10, 10, 0.697);
	}
	button {
		width: 100px;
		justify-self: end;
		background: rgb(42, 74, 161);
		font-weight: bold;
		border-radius: 2px;
		border: solid 3px rgb(43, 167, 158);
		cursor: pointer;
		color: white;
		transition: 0.1s;
	}
	button:hover {
		border: solid 8px rgb(43, 167, 158);
		transition: 0.2s;
	}
</style>
