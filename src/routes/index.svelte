<script context="module">
	export async function load({ session }) {
		if (!session.access_token) {
			return { redirect: '/login', status: 302 };
		}
		return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { get } from '../lib/api';

	import Tabs from '../lib/components/Tabs.svelte';
	import { types, time_periods, tracksMap, artistMap } from '../lib/types';

	import LogoutIcon from '../lib/components/LogoutIcon.svelte';

	let type = 'tracks';
	let time_period = 'short_term';

	import Item from '../lib/components/Item.svelte';

	let results = [];

	$: get(`top/${type}?time_range=${time_period}&limit=50`, $session.access_token).then(
		(response) =>
			(results = type == 'tracks' ? response.items.map(tracksMap) : response.items.map(artistMap))
		// console.log(response)
	);

	let me = {};
	onMount(async () => {
		let response = await get('', $session.access_token);
		me = response;
	});

	function logout() {
		if (browser) {
			document.cookie = 'access_token=';
			goto('/login');
		}
	}
</script>

<header class="w-full bg-black p-4">
	<div class="max-w-4xl mx-auto">
		<div class="mb-3 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
			<a href=".">
				<h1 class="text-3xl font-medium">Spotify Stats</h1>
			</a>

			{#if me.display_name}
				<div class="flex gap-2 items-center">
					<img src={me.images[0].url} alt="profile" class="h-10 rounded-full" />
					<p class="text-xl">{me.display_name}</p>
					<button on:click={logout} class="ml-2">
						<LogoutIcon />
					</button>
				</div>
			{/if}
		</div>
	</div>
</header>

<header class="w-full bg-black p-4 sticky top-0 shadow-2xl">
	<div class="max-w-4xl mx-auto flex flex-col justify-between sm:flex-row">
		<Tabs tabs={types} bind:active={type} />
		<Tabs tabs={time_periods} bind:active={time_period} />
	</div>
</header>

<div class="mt-4 mb-20 p-4">
	<div class="flex flex-col gap-4 max-w-4xl mx-auto ">
		{#each results as item}
			<Item {item} {type} />
		{/each}
	</div>
</div>
