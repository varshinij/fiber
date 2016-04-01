/*The production setting builds the result folder  */

var path = require('path'); // Loa1d module path
var webpack = require('webpack'); // Load module webpack


module.exports = {// export the configuration object

  entry: { //The entry point for the bundle
    app : [ //list of entry points
      './lib/index.js'],
  },
  output: { //output of the compilation
    path: path.join(__dirname, './public/js/'), //determines the location on disk the files are written to
    filename: `app.js`, //Specifies the name of each output file on disk
    publicPath: '/js/' //public URL address of the output files when referenced in a browser
  },
  plugins: [
    new webpack.DefinePlugin({ //Define free variables
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({ //Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode
    }),
  ],
  node: {
    fs: "empty"
  },
  resolve: { //resolving of modules
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react') //replace with these files
    },
    extensions: ['', '.js'] //An array of extensions that should be used to resolve modules
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules') //A directory in which webpack should look for modules that weren’t found in
  },
  module: {
    loaders: [ //loaders required
    {
    {
      test: /\.js$/, // "test" is used to match the file extension js
      loaders: ['react-hot', 'babel'], // the "loader" react-hot and babel
      exclude: /node_modules/, // used to exclude exceptions node/modules/
      include: [path.join(__dirname,'./lib')] // "include" is used to match the directory lib
    },
    {
      test: /\.xml$/, // "test" is used to match the file extension xml
      loader: "raw" // the "loader" raw
    },
    {
      test: /\.json$/, //"test" is used to match the file extension json
      loaders: ['json-loader'] // the loader json-loader
    },
    {
      test: /\.css?$/, // "test" is used to match the file extension css
      loaders: ['style', 'raw'], // the loader style and raw
      include: __dirname //"include " to match the directory
          }]
  }
};
