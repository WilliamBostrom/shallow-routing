<script lang="ts">
	import { page } from '$app/state';
	let { data } = $props<{ data: { products: any } }>();

	$inspect(data.products);
	let pageSize = 10;
	let totalItems = $derived(data.products.total);
	let totalPages = $derived(Math.min(10, Math.ceil(totalItems / pageSize)));
	// let totalPages = $derived(Math.ceil(totalItems / pageSize));
	let currentPage = $derived(Number(page.params.page) - 1);
</script>

<h1>Products</h1>
{#each data.products.products as product}
	<p>{product.id} - {product.title}</p>
{/each}

<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a href="/products/{idx + 1}" class={currentPage === idx ? 'activated' : ''}>
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
	a {
		text-decoration: none;
		color: blue;
	}
	.pagination a:hover {
		color: #0ac9f4;
	}

	.activated {
		color: #61d4ed;
	}
</style>
