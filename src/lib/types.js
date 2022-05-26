export let types = [
	{
		text: 'Tracks',
		value: 'tracks'
	},
	{
		text: 'Artists',
		value: 'artists'
	}
];

export let time_periods = [
	{
		text: '1 Month',
		value: 'short_term'
	},
	{
		text: '6 Months',
		value: 'medium_term'
	},
	{
		text: 'All Time',
		value: 'long_term'
	}
];

export const artistMap = (item) => {
	return {
		name: item.name,
		art: item.images && item.images.length > 0 ? item.images[1].url : '/default.png',
		link: item.external_urls.spotify
	};
};

export const tracksMap = (item) => {
	return {
		name: item.name,
		album: {
			name: item.album.name,
			link: item.album.external_urls.spotify
		},
		artists: item.artists.map(artistMap),
		art:
			item.album.images && item.album.images.length > 0 ? item.album.images[1].url : '/default.png',
		link: item.external_urls.spotify
	};
};
