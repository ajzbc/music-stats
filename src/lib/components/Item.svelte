<script>
	import { fade } from 'svelte/transition';
	import Icon from './Icon.svelte';

	export let item = {};
	export let i = 1;
	export let type;
</script>

<div
	class="group flex gap-4 {type == 'tracks' ? 'sm:items-center' : 'items-center'} relative"
	in:fade={{ duration: 100 }}
>
	<span
		class="font-mono absolute left-0 w-8 translate-x-[-3rem] select-none text-right text-2xl font-bold"
		>{i + 1}</span
	>
	<a
		href={type == 'tracks' ? item?.album?.link : item.link}
		target="_blank"
		rel="noreferrer"
		class="relative"
	>
		<img
			src={item.art}
			alt="{item.name} cover"
			class="h-24 w-24 transition ease-in-out group-hover:shadow-lg group-hover:shadow-spotify-green sm:h-32 sm:w-32
            {type == 'tracks' ? '' : 'rounded-full'} "
		/>
		<div class="absolute bottom-0 right-0 rounded-tl-lg bg-black p-0.5">
			<Icon icon="spotify" classes="h-6 w-6 text-spotify-green" />
		</div>
	</a>
	<div class="flex-1">
		{#if type == 'tracks'}
			<a
				href={item.link}
				target="_blank"
				rel="noreferrer"
				class="mb-1 block text-xl font-medium sm:text-2xl">{item.name}</a
			>
			{#if item.artists}
				{#each item.artists as artist, i}
					{i == 0 ? '' : ', '}
					<a
						href={artist.link}
						target="_blank"
						rel="noreferrer"
						class="text-lg text-spotify-green hover:underline sm:text-xl">{artist.name}</a
					>
				{/each}
			{/if}
		{:else if type == 'artists'}
			<a
				href={item.link}
				target="_blank"
				rel="noreferrer"
				class="mb-1 block text-xl font-medium sm:text-2xl">{item.name}</a
			>
		{/if}
	</div>
</div>
