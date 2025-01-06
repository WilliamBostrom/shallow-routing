<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<title>Shallow Routing</title>
</svelte:head>

<header>
	<h1>Shallow Routing</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/users">Users</a>
	</nav>
</header>

{@render children()}

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	header nav {
		display: flex;
		gap: 20px;
	}

	header nav a {
		text-decoration: none;
		color: inherit;
		font-size: 1.2rem;
	}

	:global(::-webkit-scrollbar) {
		display: none;
	}

	:global(html, body) {
		height: 100%;
	}

	:global(html) {
		color: hsl(200 10% 98%);
		background-color: hsl(200 10% 10%);
	}

	:global(img) {
		max-inline-size: 100%;
		display: block;
		border-radius: 8px;
	}

	/* :global(body) {
		height: 100%;
		display: grid;
		place-content: center;
		place-items: center;
	} */
</style>
