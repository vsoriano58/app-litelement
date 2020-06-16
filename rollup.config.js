
import merge from 'deepmerge';
// use createSpaConfig for bundling a Single Page App
import { createSpaConfig } from '@open-wc/building-rollup';
import cpy  from 'rollup-plugin-cpy';
 
// use createBasicConfig to do regular JS to JS bundling
// import { createBasicConfig } from '@open-wc/building-rollup';
 
const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',
 
  // if you need to support older browsers, such as IE11, set the legacyBuild
  // option to generate an additional build just for this browser
  // legacyBuild: true,
 
  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',
 
  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
});
 
export default merge(baseConfig, {
  // if you use createSpaConfig, you can use your index.html as entrypoint,
  // any <script type="module"> inside will be bundled by rollup
  input: './index.html',
 
  // alternatively, you can use your JS as entrypoint for rollup and
  // optionally set a HTML template manually
  // input: './app.js',

  plugins: [
    cpy({
     // copy over all images files
<<<<<<< HEAD
      files: ['**/*.png', '**/*.jpg', 'manifest.json', '_redirects'],
=======
      files: ['**/*.png', '**/*.jpg', 'manifest.json'],
>>>>>>> ea2586d0d91405b5f99b8e9f4a190a6a4bfb1e3d
      dest: 'dist',
      options: {
         // parents makes sure to preserve the original folder structure
         parents: true
      }
    })
  ]

});