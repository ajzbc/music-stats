<script>
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

<div class="w-full min-h-screen grid">
	<a
		href={url + params}
		class="m-auto bg-spotify-green text-zinc-900 px-4 py-3 text-2xl font-bold rounded-full hover:bg-transparent hover:border-2 hover:border-spotify-green hover:text-spotify-green"
		>Connect to Spotify</a
	>
</div>
