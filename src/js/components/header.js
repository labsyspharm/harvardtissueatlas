/**
 * Manage header bar.
 * 
 */


const $ = require('jquery');

let $header = null;


function initHeader() {
    // Set up a scroll watcher
    initScrollWatch();

    // Init the menu elements within the header
    initDesktopMenu();
    initMobileMenu();
    initBreadcrumb();
}


function initScrollWatch() {
    let $win = $(window),
        isScrolled = false;

    $win.scroll((event) => {
        let pos = $win.scrollTop();
        if ((pos > 0) & !isScrolled) {
            $header.addClass('js-is-scrolled');
            isScrolled = true;
        } else if ((pos == 0) && isScrolled) {
            $header.removeClass('js-is-scrolled');
            isScrolled = false;
        }
    });
}


/**
 * Init our top menu. 
 */
function initDesktopMenu() {

    // Set up hover actions on the top nav bar.  We look for any menu
    // items that have a 'has-subnav' class on them, which indicates
    // they have a dropdown panel associated with them.
    let $navItems;
    // $navItems = $('.menu-header.has-subnav');
    $navItems = $('#site-navigation .nav-bar__item.has-subnav');
    $.each($navItems, (index, el) => {
        let $el = $(el),
            $panelOuter = $el.find('.nav-bar__panel-outer'),
            $panel = $el.find('.nav-bar__panel'),
            fadeoutTimer = null;

        $el.hoverIntent({
            over: function() {
                // Bump the layer up a step, to ensure it sits on top of any other
                // panel that still may be open
                $panelOuter.css('z-index', 12);

                if (fadeoutTimer !== null) {
                    clearTimeout(fadeoutTimer);
                }
                $panelOuter.addClass('is-active');
                $panel.addClass('is-active');

                // Show a dark overlay (sits underneath the dropdown)
                // overlay.showOverlay($header);
            },
            out: function() {
                // Drop the layer down a step, in case a new panel is requested
                $panelOuter.css('z-index', 11);

                $panel.removeClass('is-active');

                // We need to put the removal of the 'is-active' class on the 
                // outer wrapper element on a delay, so that the fade out anim
                // on the inner panel (css-based) has time to complete
                fadeoutTimer = setTimeout(() => {
                    $panelOuter.removeClass('is-active');
                    clearTimeout(fadeoutTimer);
                }, 500);

                // Hide the dark overlay (sits underneath the dropdown)
                // overlay.hideOverlay($header);
            },
            timeout: 100
        });
    });
}

function initMobileMenu() {
    // console.log("initMobileMenu()");
    // Set up a listener on the burger menu
    let $burger = $header.find('.site-header__menu-icon-link'),
        $mobileNav = $('.nav-bar-mobile'),
        $close = $mobileNav.find('.site-header__menu-icon-close-link');

    $burger.click((event) => {
        event.preventDefault();
        $(event.target).toggleClass('js-close');    // Trigger 'close' version of icon
        $('html').toggleClass('no-scroll');         // Prevent scrolling on page content
        $header.toggleClass('js-force-dropshadow'); // Ensure dropshadow is visible, in case user is still at page top
        $mobileNav.toggleClass('js-is-open');
    });

    $close.click((event) => {
        event.preventDefault();
        $(event.target).toggleClass('js-close');    // Trigger 'close' version of icon
        $('html').toggleClass('no-scroll');         // Prevent scrolling on page content
        $header.toggleClass('js-force-dropshadow'); // Ensure dropshadow is visible, in case user is still at page top
        $mobileNav.toggleClass('js-is-open');
    });
}

function initBreadcrumb() {
    // Underline nav item that corresponds to current page (desktop).
    let $pageModule = $('body').data('page-module'),
        $navItems = $('.nav-bar__item');
        // $navLinks = $('.nav-bar__link');
        // $subnavLinks = $('.subnav-bar__link');
        
    $.each($navItems, (index, el) => {
        // Does the current page match a top level nav item?
        let $navItem = $(el),
            $navLink = $navItem.find('.nav-bar__link'),
            $navId = $navLink.data('id'),
            // $subnavLinks = $navItem.find('.subnav-bar__link');
            $subnavLinks = $navItem.find('a');

        if ($pageModule.indexOf($navId) >= 0) {
            $navItem.addClass('nav_item is-selected');
            $navLink.addClass('nav_link is-selected');
        }

        $.each($subnavLinks, (index, el2) => {
            // Does the current page match a subnav item?
            let $subnavLink = $(el2),
                $subnavId = $subnavLink.data('id'),
                $landingPageModule = $pageModule + '-landing';

            if (($pageModule.indexOf($subnavId) >= 0) ||  ($landingPageModule.indexOf($subnavId) >= 0)) {
                $navLink.addClass('nav_link is-selected');
                $subnavLink.addClass('subnav_link is-selected');
            }
        });
    });

    // $.each($subnavLinks, (index, el) => {
    //     let $el = $(el),
    //         $navId = $el.data('id');

    //     if ($navId == $pageModule) {
    //         $el.addClass('is-selected');
    //     }
    // });
}

exports.init = function ($el) {
    $header = $el;

    initHeader();
};