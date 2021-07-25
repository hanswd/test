const mix = require('laravel-mix')
mix.pug = require('laravel-mix-pug');
require('laravel-mix-clean');
require('laravel-mix-svg-sprite');



mix.js('src/js/app.js', 'dist/js')
   .sass('src/sass/app.sass', 'dist/css')
   .copyDirectory('src/images', 'dist/images')
   .copyDirectory('src/fonts', 'dist/fonts')
   .pug('src/*.pug', '../dist', {seeds:'src/seed'})
   .setPublicPath('dist')
   .browserSync({
      proxy: false,
      port:'3000',
      server: {baseDir: 'dist'}   
   })
   .options({
      processCssUrls: false,
      autoprefixer: { remove: false }
   })
   .clean({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
      cleanAfterEveryBuildPatterns: ['!images/**/*', '!fonts/**/*', '!**/*.html', '!**/*.pug'],
      verbose: true,
      dry: false
   })
   .svgSprite(
      'src/images/icons', 
      'sprite.svg' 
   )
   if (!mix.inProduction()) {
      mix
         .webpackConfig({devtool: "source-map"})
         .browserSync({
            proxy: false,
            port:'3000',
            server: {baseDir: 'dist'},  
            watch: true
          })
         .sourceMaps()
   }
     

