import path from 'path'
import { fileURLToPath} from 'url'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default () => ({
  entry: {
    employees: './src/employees.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
        name:'vendor',
        chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: isProduction ? 'production' : 'development',
  plugins: [
    // Add Webpack plugins here if needed (e.g., HtmlWebpackPlugin)
  ],
});