import { error } from '@sveltejs/kit';

export async function load({ url, fetch }) {
	const limit = Number(url.searchParams.get('limit')) || 10;
	const skip = Number(url.searchParams.get('skip')) || 0;

	async function getUsers(limit: number = 10, skip: number = 0) {
		if (limit > 100) {
			throw error(400, 'Bad request');
		}
		const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}&total=100`);
		const data = await res.json();
		return data;
	}
	return { users: await getUsers(limit, skip) };
}
