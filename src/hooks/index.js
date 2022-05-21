import * as cookie from 'cookie';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const access_token = cookies.access_token;
	event.locals.access_token = access_token ? access_token : null;
	return await resolve(event);
}

export function getSession({ locals }) {
	return {
		access_token: locals.access_token
	};
}
