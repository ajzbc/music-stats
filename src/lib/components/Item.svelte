<script>
	export let item = {};
	export let type;
</script>

<div class="flex sm:items-center gap-4 group">
	<a href={item.link} target="_blank">
		<img
			src={item.art}
			alt="{item.album} Cover"
			class="h-32 w-32 {type == 'tracks'
				? 'rounded-lg'
				: 'rounded-full'} group-hover:shadow-lg group-hover:shadow-spotify-green"
		/>
	</a>
	<div class="flex-1">
		{#if type == 'tracks'}
			<a href={item.link} target="_blank" class="text-2xl block mb-1 font-medium">{item.name}</a>
			{#if item.artists}
				{#each item.artists as artist, i}
					<a href={artist.link} target="_blank" class="text-xl text-spotify-green hover:underline"
						>{i == 0 ? '' : ', '} {artist.name}</a
					>
				{/each}
			{/if}
		{:else if type == 'artists'}
			<a href={item.link} target="_blank" class="text-2xl block mb-1 font-medium">{item.name}</a>
		{/if}
	</div>
</div>
