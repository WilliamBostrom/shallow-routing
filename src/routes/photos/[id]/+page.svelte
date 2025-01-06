<script lang="ts">
	let { data } = $props<{ data: { image?: { id: number; alt: string; src: string } } }>();
</script>

<div class="center">
	<img alt={data.image.alt} src={data.image.src} />
</div>
