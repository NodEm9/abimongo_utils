/* eslint-disable @typescript-eslint/no-require-imports */
const webpack = require('webpack');
const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { VERSION } = require('ts-node');

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	target: "node",
	output: {
		filename: "abimongo-utils.js",
		path: path.resolve(__dirname, "dist"),
		library: {
			name: "abimongo_utils",
			type: "umd", // Universal Module Definition
			umdNamedDefine: true, // Named UMD module
		},
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
				mainFields: ['browser', 'main'],
			},
		},
		plugins: [new TsconfigPathsPlugin()],
	},
	optimization: {
		providedExports: true,
		usedExports: false,
		"sideEffects": false,
		// "mangleExports": "false",
	},
	externals: {
		 streamroller: 'commonjs streamroller', // Exclude streamroller from the bundle
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			'process.env.TS_NODE': JSON.stringify(VERSION),
		}),
		new webpack.ProvidePlugin({
			window: path.resolve(__dirname, 'shim/window.js')
		})
	],
}