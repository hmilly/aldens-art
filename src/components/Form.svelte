<script>
	import { UserData } from '../stores.js';

	let userDetails = { name: '', email: '', number: '', comment: '' };
	let minChar = 10;
	let msg = '';
	let btnDisabled = false;

	const handleInput = () => {
		const condition = userDetails.comment.trim().length;
		if (condition <= minChar && condition > 0) {
			msg = `Comment must be at least ${minChar} characters`;
			btnDisabled = true;
		} else {
			msg = '';
			btnDisabled = false;
		}
	};

	const handleSubmit = () => {
		$UserData = [$UserData, userDetails];
		msg = 'Thanks for reaching our! We will be in contact soon!';
		userDetails = { name: '', email: '', number: '', comment: '' };
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form on:submit|preventDefault={handleSubmit}>
	<h3>
		{msg}
	</h3>
	<label for="name">Name:</label>
	<input
		type="name"
		required
		bind:value={userDetails.name}
		name="name"
		placeholder="Enter your name..."
	/>
	<label for="email">Email:</label>
	<input
		type="email"
		required
		bind:value={userDetails.email}
		name="email"
		placeholder="Enter your email..."
	/>
	<label for="number">Contact Number:</label>
	<input
		type="number"
		required
		bind:value={userDetails.number}
		name="number"
		placeholder="Enter your number..."
	/>
	<label for="text">Comment:</label>
	<textarea
		bind:value={userDetails.comment}
		on:input={handleInput}
		required
		placeholder="Enter your comment..."
	/>
	<button disabled={btnDisabled} type="submit">Sumbit</button>
</form>

<style>
	form {
		display: grid;
		padding: 10px;
		grid-template-columns: minmax(auto, 500px);
		grid-template-rows: 50px repeat(3, 30px 40px) 30px 100px 40px;
		gap: 5px;
		justify-content: center;
		align-content: space-around;
		border: 10px solid;
		border-image-slice: 1;
		border-width: 5px;
		border-image-source: linear-gradient(to left, #3ac3d5, #3a66d5);
	}

	label,
	input,
	textarea {
		padding: 5px;
		resize: none;
	}
	input,
	textarea {
		color: black;
		background: rgb(62, 227, 216);
		border-radius: 3px;
		font-weight: bold;
		border: black 1px solid;
	}
	input::placeholder, textarea::placeholder {
		color: rgba(10, 10, 10, 0.697);
	}
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	button {
		width: 100px;
		justify-self: end;
		background: rgb(42, 74, 161);
		font-weight: bold;
		border-radius: 2px;
		border: solid 3px rgb(43, 167, 158);
		cursor: pointer;
		transition: 0.1s;
	}
	button:hover {
		border: solid 8px rgb(43, 167, 158);
		transition: 0.2s;
	}
</style>
