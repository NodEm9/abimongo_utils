/* eslint-disable @typescript-eslint/no-require-imports */
const webpack = require('webpack');
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { plugins } = require('../abimongo_core/webpack.node.config');
const { VERSION } = require('ts-node');

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	target: "node",
	devtool: "source-map",
	output: {
		filename: "abimongo-utils.js",
		path: path.resolve(__dirname, "dist"),
		library: "abimongo-utils",
		libraryTarget: "umd",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "webpack-remove-debug", // remove "debug" package
			},
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /^node_modules/
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
			byDependency: {
			esm: {
				mainFields: ['browser', 'module', 'main'],
			},
			commonjs2: {
				aliasFields: ['browser', 'module'],
			},
		},
		plugins: [new TsconfigPathsPlugin()],
	},
	optimization: {
		providedExports: true,
		usedExports: false,
		"sideEffects": false,
		"mangleExports": "size",
	},
	plugins: [
		...plugins,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			// 'process.env.VERSION': JSON.stringify('1.0.0'),
			// 'process.env.TS_NODE': JSON.stringify(VERSION),
		}),
	],
}