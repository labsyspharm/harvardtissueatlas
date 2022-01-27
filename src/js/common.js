// Code common to all site pages lives here


const $                 = require('jquery'); 
const header            = require('./components/header');
const DetailsExpander   = require('./components/details-expander');



function initHeader() {
    let $header = $('.site-header');
    if ($header.length) {
        header.init($header);
    }
}

function initDetailsElements() {
    document.querySelectorAll('details').forEach((el) => {
        new DetailsExpander(el);
    });
}

exports.init = function() {
    // Do common initialization...
    initHeader();
    initDetailsElements();
};
