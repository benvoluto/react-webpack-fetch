module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|public\/)/,
		loader: "babel",
		query:
			{
				presets: ['es2015','react']
			}
	},
	{
		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		loader: "file"
	},
	{
		test: /\.(woff|woff2)$/,
		exclude: /node_modules/,
		loader: "url?prefix=font/&limit=5000"
	},
	{
		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		loader: "url?limit=10000&mimetype=application/octet-stream"
	},
	{
		test: /\.png/,
		exclude: /node_modules/,
		loader: "url-loader?limit=10000&mimetype=image/png"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /node_modules/,
		loader: "url?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /\.gif/,
		exclude: /node_modules/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		exclude: /node_modules/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	}
];
