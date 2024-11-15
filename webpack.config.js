const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "build.js",
		path: path.resolve(__dirname, "dist"),
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
					to: path.resolve(__dirname, "dist/assets/img"),
				},
			],
		}),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},

      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/i,
      //   type: "asset/resource", // Встроенная загрузка Webpack для изображений
      //   generator: {
      //     filename: "assets/img/[name][ext][query]", // Путь к файлам в папке dist
      //   },
      //   include: path.resolve(__dirname, 'src/assets/img'),
      // },

			// {
			// 	test: /\.css$/i,
			// 	use: ["style-loader", "css-loader"],
			// },

			// {
			// 	test: /\.(png|jpg|jpeg|gif|svg)$/,
			// 	type: "asset/resource",
			// },

      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource"
      // }
		],
	},
};
