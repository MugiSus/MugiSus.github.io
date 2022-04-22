/** @type {import('next').NextConfig} */

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
    basePath: process.env.GITHUB_ACTIONS ? "/mugisus.com" : "",
    trailingSlash: true,
}
