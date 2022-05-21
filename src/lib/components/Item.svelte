<script>
	export let item = {};
	export let type;
	export let i = 1;
</script>

<div class="flex gap-4 group {type == 'tracks' ? 'sm:items-center' : 'items-center'} relative">
	<span
		class="absolute left-0 translate-x-[-3rem] text-2xl font-bold font-mono select-none text-right w-8"
		>{i + 1}</span
	>
	<a href={type == 'tracks' ? item?.album?.link : item.link} target="_blank">
		<img
			src={item.art}
			alt="{item.name} cover"
			class="h-24 w-24 sm:h-32 sm:w-32 group-hover:shadow-lg group-hover:shadow-spotify-green
            {type == 'tracks' ? 'rounded-lg' : 'rounded-full'} "
		/>
	</a>
	<div class="flex-1">
		{#if type == 'tracks'}
			<a href={item.link} target="_blank" class="text-xl sm:text-2xl block mb-1 font-medium"
				>{item.name}</a
			>
			{#if item.artists}
				{#each item.artists as artist, i}
					<a
						href={artist.link}
						target="_blank"
						class="text-lg sm:text-xl text-spotify-green hover:underline"
						>{i == 0 ? '' : ', '} {artist.name}</a
					>
				{/each}
			{/if}
		{:else if type == 'artists'}
			<a href={item.link} target="_blank" class="text-xl sm:text-2xl block mb-1 font-medium"
				>{item.name}</a
			>
		{/if}
	</div>
</div>
