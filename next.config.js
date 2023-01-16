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
	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/i',
	// 			destination: 'https://virtualcard-mugisus.vercel.app',
	// 			permanent: true,
	// 		},
	// 	]
	// },
    trailingSlash: true,
}
