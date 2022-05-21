const base = 'https://api.spotify.com/v1/me';

async function send({ method, path, token }) {
	const opts = { method, headers: {} };

	opts.headers['Accept'] = 'application/json';
	opts.headers['Content-Type'] = 'application/json';
	opts.headers['Authorization'] = `Bearer ${token}`;

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}
