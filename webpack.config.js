const path = require("path");
const MiniCssExtract = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =
{
	mode: "development",
	entry: "./src/public/main.js",
	output:
	{
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
	},
	devtool: process.env.NODE_ENV == "production" ? "source-map" : "inline-source-map",
	module:
	{
		rules:
		[
			{ oneOf: [
				{
					test: /\.css$/,
					include:
					[
						path.resolve(__dirname, "src/public/components")
					],
					use:
					[
						"to-string-loader",
						"css-loader"
					]
				},
				{
					test: /\.css$/,
					use:
					[
						{
							loader: MiniCssExtract.loader
						},
						"css-loader"
					]
				},
			] },
			{
				test: /\.html$/,
				loader: "html-loader"
			}
		]
	},
	plugins:
	[
		new MiniCssExtract({
			filename: "[name].css"
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/public/index.html"
		}),
	]
};