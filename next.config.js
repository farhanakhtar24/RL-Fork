/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"firebasestorage.googleapis.com",
			"picsum.photos",
			"png.pngtree.com",
			"i.pinimg.com",
			"media.tenor.com",
		],
	},
	loaders: [
		{
			test: /\.mp3$/,
			loader: "file-loader",
		},
	],
};

module.exports = nextConfig;
