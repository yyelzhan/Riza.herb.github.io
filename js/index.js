$(function () {
    function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
        $('[data-behaviour="toggle-link-iconTwo"]').on('click', toggleSubMenuTwo);
        $('[data-behaviour="toggle-link-iconThree"]').on('click', toggleSubMenuThree);
    };

    function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
    };

    function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
    };

    function toggleSubMenuTwo() {
        $(this).toggleClass('nav__link--plusTwo nav__link--minusTwo');
        $('[data-behaviour="toggle-sub-menuTwo"]').slideToggle('nav__sub-list--activeTwo');
    };

    function toggleSubMenuThree() {
        $(this).toggleClass('nav__link--plusThree nav__link--minusThree');
        $('[data-behaviour="toggle-sub-menuThree"]').slideToggle('nav__sub-list--activeThree');
    };
    init()

    $(add).on('click', function(){
        $(tab).prop('checked',true);
    })
    
    
});

