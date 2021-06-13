const withLess = require('@zeit/next-less');
const withCss = require("@zeit/next-css");
const withFonts = require('next-fonts');
const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {

  webpack(config, ...args) {

    config = withLess().webpack(config, ...args);
    config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: {
                  "primary-color": "#FFD300",
                 
                },
                javascriptEnabled: true,
                sourceMap: true,
              },
            },
          },
        ],
      });

    config = withCss().webpack(config, ...args);

   
  
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // config for images
 
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'static',
      },
    });



    // config for url images
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config = withFonts().webpack(config, ...args);

    if (!args.isServer) {
      config.node = {
        fs: 'empty'
      }
    }


    return config;
  },
  target: 'serverless'
};
