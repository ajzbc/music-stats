<script>
	export let tabs = [
		{
			text: 'One',
			value: 'one'
		},
		{
			text: 'Two',
			value: 'two'
		}
	];
	export let active = tabs[0].value;
</script>

<ul
	class="mr-auto rounded-lg border-2 border-spotify-green border-opacity-30 p-1 first:mb-2 sm:mr-0 sm:first:mb-0"
>
	{#each tabs as tab}
		<li class="inline-flex">
			<button
				class="
                    {active == tab.value ? 'active' : ''}
                    rounded-md px-2 py-1 text-lg font-semibold text-spotify-green
                "
				on:click={() => (active = tab.value)}
			>
				{tab.text}
			</button>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.active {
		@apply bg-spotify-green text-black;
	}
</style>
