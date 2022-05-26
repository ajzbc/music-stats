<script>
	import Icon from '../lib/components/Icon.svelte';
	import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL } from '../lib/env';

	const url = new URL('https://accounts.spotify.com/authorize?');
	$: params = new URLSearchParams({
		response_type: 'token',
		show_dialog: false,
		client_id: SPOTIFY_CLIENT_ID,
		scope: 'user-top-read',
		redirect_uri: SPOTIFY_REDIRECT_URL
	});
</script>

<div class="mx-auto mt-auto text-center">
	<h1 class="mb-6 text-5xl font-medium tracking-wide">Spotify Stats</h1>
	<a
		href={url + params}
		class="group inline-flex items-center justify-center gap-2 rounded-full border-4 border-spotify-green bg-spotify-green px-4 py-2 text-2xl font-bold text-zinc-900 transition ease-in-out hover:border-spotify-green hover:border-opacity-30 hover:bg-transparent hover:text-spotify-green"
	>
		<Icon icon="spotify" classes="h-10 w-10 group-hover:scale-105" />
		<span>Connect</span>
	</a>
</div>
