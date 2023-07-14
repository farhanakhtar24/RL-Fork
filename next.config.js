/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"firebasestorage.googleapis.com",
			"picsum.photos",
			"png.pngtree.com",
		],
	},
};

module.exports = nextConfig;
