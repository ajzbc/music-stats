<script>
	import { session, page } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	// https://stackoverflow.com/a/44169739/10997917
	var hash_params = $page.url.hash
		.slice(1)
		.split('&')
		.reduce(function (res, item) {
			var parts = item.split('=');
			res[parts[0]] = parts[1];
			return res;
		}, {});

	onMount(async () => {
		$session.access_token = hash_params.access_token;
		if (browser) {
			document.cookie = `access_token=${hash_params.access_token}; Max-Age=${hash_params.expires_in}; SameSite=Strict; Path=/;`;
		}
		goto('/');
	});
</script>

<div class="mx-auto mt-auto">
	<p class="m-auto text-2xl">Redirecting...</p>
</div>
