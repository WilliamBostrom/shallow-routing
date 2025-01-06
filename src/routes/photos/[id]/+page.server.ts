export async function load({ fetch, params }) {
	const id = +params.id;
	const response = await fetch(`/api/images`);
	const images = await response.json();
	return { image: images.find((image: { id: number }) => image.id === id) };
}
