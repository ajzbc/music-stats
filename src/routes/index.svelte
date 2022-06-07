<script context="module">
	export async function load({ session }) {
		if (!session.access_token) {
			return { redirect: '/connect', status: 302 };
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	import Icon from '../lib/components/Icon.svelte';
	import Tabs from '../lib/components/Tabs.svelte';
	import Item from '../lib/components/Item.svelte';

	import { get } from '../lib/api';
	import { types, time_periods, tracksMap, artistMap } from '../lib/types';

	let type = 'tracks';
	let time_period = 'short_term';

	let results = [];

	$: get(`top/${type}?time_range=${time_period}&limit=50`, $session.access_token).then(
		(response) =>
			(results = type == 'tracks' ? response.items.map(tracksMap) : response.items.map(artistMap))
		// console.log(response)
	);

	function logout() {
		if (browser) {
			document.cookie = 'access_token=';
			goto('/connect');
		}
	}

	$: if (browser && type && time_period) {
		document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
		results = [];
	}
</script>

<header class="w-full bg-black p-4">
	<div class="mx-auto max-w-4xl">
		<div class="mb-3 flex flex-row items-center justify-between gap-4">
			<a href=".">
				<h1 class="text-3xl font-medium">Spotify Stats</h1>
			</a>
			<button on:click={logout} class="ml-2 text-spotify-green">
				<Icon icon="logout" />
			</button>
		</div>
	</div>
</header>

<header class="sticky top-0 z-20 shadow-2xl">
	<div class="mx-auto flex max-w-4xl flex-col justify-between sm:flex-row">
		<Tabs tabs={types} bind:active={type} />
		<Tabs tabs={time_periods} bind:active={time_period} />
	</div>
</header>

<div class="mt-4 mb-16 bg-zinc-900 p-4">
	<div class="mx-auto flex max-w-4xl flex-col gap-4">
		{#each results as item, i}
			<Item {item} {i} {type} />
		{/each}
	</div>
</div>
