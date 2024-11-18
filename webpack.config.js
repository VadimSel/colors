const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "build"),
		clean: true,
	},

  plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets/img"),
					to: path.resolve(__dirname, "build/assets/img"),
				},
				{
					from: path.resolve(__dirname, "src/fonts"),
					to: path.resolve(__dirname, "build/fonts")
				}
			],
		}),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
		],
	},
};
