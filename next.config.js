const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');
require('dotenv').config()

const nextJsConfig = {
    webpack: (config, {dev, isServer}) => {
         // Fixes npm packages that depend on `fs` module
            if (!isServer) {
              config.node = {
                console: true,
                fs: 'empty',
                net: 'empty',
                tls: 'empty'
              }
            }
         return config
    },
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    },
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/blog2': { page: '/blog2' },
            '/blog-details': { page: '/blog-details' },
            '/error': { page: '/error' },
        }
    }
}

module.exports = withPlugins([
    nextJsConfig,
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico', 'mp4'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withCSS],[withFonts],[withSass],[withVideos]
]);