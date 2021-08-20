// Code common to all site pages lives here


const $             = require('jquery'); 
const header        = require('./components/header');



function initHeader() {
    let $header = $('.site-header');
    if ($header.length) {
        header.init($header);
    }
}

exports.init = function() {
    // Do common initialization...
    initHeader();
};
