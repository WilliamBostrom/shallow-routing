<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props<{ data: { users: any } }>();

	let pageSize = 10;
	let totalItems = $derived(data.users.total);
	//Ta bort Math min här för att få totala antal sidor från api
	let totalPages = $derived(Math.min(10, Math.ceil(totalItems / pageSize)));
	let currentPage = $derived((Number(page.url.searchParams.get('skip')) || 0) / pageSize);
</script>

<div>
	<h1>Users</h1>
	{#each data.users.users as user}
		<p>{user.id} - {user.email}</p>
	{/each}
</div>

<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a
			href="/users?limit={pageSize}&skip={pageSize * idx}"
			class={currentPage === idx ? 'activated' : ''}
		>
			{idx + 1}
		</a>
	{/each}
</div>

<style>
	.pagination {
		display: flex;
		align-items: center;
		gap: 10px;
		padding-top: 10px;
	}

	.pagination a:hover {
		color: #0ac9f4;
	}

	.pagination a.activated {
		color: #61d4ed;
	}
</style>
