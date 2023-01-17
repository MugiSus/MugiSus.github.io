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
	exportPathMap() {
		const paths = {};
		vRedirectorIds.forEach(id => paths[`/v/${id}`] = {
			page: '/v/[id]',
			query: { id: id } }
		);
		return paths;
	},
    trailingSlash: true,
}

