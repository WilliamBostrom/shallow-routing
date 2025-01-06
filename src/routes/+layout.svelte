<svelte:head>
	<title>Shallow Routing</title>
</svelte:head>

<slot />

<style>
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

	:global(body) {
		height: 100%;
		display: grid;
		place-content: center;
		place-items: center;
	}
</style>
