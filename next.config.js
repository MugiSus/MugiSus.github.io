/** @type {import('next').NextConfig} */

const vRedirectorIds = [
	"22aq",
]

module.exports = {
    reactStrictMode: true,
	webpack: function (config) {
		config.module.rules.push(
			{
				test: /\.ya?ml$/,
				use: 'js-yaml-loader',
			},
		)
		return config
	},
	// async exportPathMap() {
	// 	const paths = {
	// 		'/': { page: '/' },
	// 		'/about': { page: '/about' },
	// 	};
	// 	vRedirectorIds.forEach(id => paths[`/v/${id}`] = {
	// 		page: '/v/[id]',
	// 		query: { id: id } }
	// 	);
	// 	return paths;
	// },
    trailingSlash: true,
}

