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
	exportPathMap: function() {
		const paths = {};
		vRedirectorIds.forEach(id => paths[`/show/${id}`] = {
			page: '/show/[id]',
			query: { id: id } }
		);
		return paths;
	},
    trailingSlash: true,
}

