<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import { page } from '$app/state';
	import Modal from '$lib/components/modal.svelte';
	import Image from './photos/[id]/+page.svelte';

	let { data } = $props();

	let modal = $state<HTMLDialogElement | undefined>();

	async function showModal(e: MouseEvent) {
		e.preventDefault();
		// get URL
		const { href } = e.currentTarget as HTMLAnchorElement;

		// get result of `load` function
		const result = await preloadData(href);
		console.log(result);

		// create new history entry
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, { selected: result.data });
			modal?.showModal();
		} else {
			goto(href);
		}
	}
</script>

<Modal bind:modal>
	{#if page.state.selected}
		<Image data={page.state.selected} />
	{/if}
</Modal>

<div class="feed">
	{#each data.thumbnails as thumbnail}
		<a onclick={showModal} href="/photos/{thumbnail.id}">
			<img alt={thumbnail.alt} src={thumbnail.src} />
		</a>
	{/each}
</div>

<style>
	.feed {
		max-inline-size: 600px;
		display: grid;
		gap: 2rem;
		margin-inline: auto;
		padding-block: 2rem;
	}
</style>
