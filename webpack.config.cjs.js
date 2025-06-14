const path = require('path');

module.exports = {
	entry: './src/index.ts',
	target: 'node',
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'abimongo-utils.cjs.js',
		library: {
			type: 'commonjs2',
		},
	},
	resolve: {
		extensions: ['.ts', '.js'],
		byDependency: {
			commonjs2: {
				aliasFields: ['browser', 'module'],
			},
		}
	},
	module: {
		rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }],
	},
};
