<script lang="ts">
	let { modal = $bindable(), children } = $props();
</script>

<dialog bind:this={modal} onclose={() => history.back()}>
	{@render children?.()}
</dialog>

<style>
	dialog {
		border: none;
		border-radius: 8px;
	}

	dialog::backdrop {
		background-color: hsl(0 0% 0% / 40%);
	}
</style>
