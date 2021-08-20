// BABEL POLYFILL FOR OLD BROWSER SUPPORT
// NOTE: Try to avoid using full 'babel-polyfill' package.  Instead, try to 
// isolate required polyfills and load them individually out of 'core-js'.
// (provides significant file size savings)
// require('core-js/fn/symbol/for');
// require('core-js/fn/symbol/iterator');

// Picturefill polyfill, for <picture> support in old browsers
require('picturefill');

// Also load up any jQuery plugins we want globally accessible
// IMPORTANT: jQuery must ALREADY BE LOADED via WP's enqueue
// process.  We don't include jQuery here ourselves (we shim it,
// via browserify-shim), as some plugins that require it may 
// have already loaded, so the load is left to WP to manage.
require('jquery');
require('jquery-hoverintent');
require('jquery.easing');
// require('slick-carousel');
// require('lity');

// Load our page-level modules (for dependency inspection/loading)
// require('./pages/home');
// require('./pages/research');
// require('./pages/cores');
// require('./pages/event');


// Execute common/global code
const common = require('./common');

initModule(common);


// Inspect the body element and see what page module is there.
// If one exists, initialize the page script it references.
// NOTE: value of our 'data-page-module' attribute on body tag should
// match name of module.
const body = document.body;

if (body.hasAttribute('data-page-module')) {
    let pageModuleName = body.getAttribute('data-page-module'),
        pageModule = null;
        
    if (pageModuleName !== '') {
        try {
            pageModule = require('./pages/' + pageModuleName);
            initModule(pageModule);
        } catch (ex) {
            console.log ('module "' + pageModuleName + '" could not be loaded');
        }
    }
}

function initModule(mod) {
    if ((mod !== null) && (typeof mod !== 'undefined') && (typeof mod.init === 'function')) {
        mod.init();
    }
}
