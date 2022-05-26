<script>
	import '../app.css';

	import Icon from '../lib/components/Icon.svelte';
</script>

<slot />

<footer class="mt-auto flex items-center justify-center gap-4 p-4 pb-8 text-xl">
	<a href="//ajzbc.com" target="_blank">
		<Icon icon="at" />
		<span>ajzbc</span>
	</a>
	<a href="//github.com/ajzbc/spotify-stats" target="_blank">
		<Icon icon="github" />
		<span>source</span>
	</a>
</footer>

<style lang="postcss">
	a {
		@apply flex items-center justify-center gap-1 text-spotify-green;
	}

	a span {
		@apply text-white;
	}
</style>
