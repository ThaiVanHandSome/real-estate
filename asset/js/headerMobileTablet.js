import exitForm from "./handleLogin.js";

const btnMenu = $('.header__menu');
const btnClose = $('.app__menu-close');
const btnSearch = $('.header__search');
const overlay = $('.app__overlay');
const menu = $('.app__menu');
const search = $('.app__search');
const subMenu = $('.header__item-menu');
const itemHaveMenu = $('.header__item-have-menu');
const subMenuIcon = $('.header__item-icon');

const icon = {
    "open": '<i class="fa-solid fa-angle-down"></i>',
    "close": '<i class="fa-solid fa-angle-up"></i>'
}

function closeBtnCloseAndOverlay() {
    btnClose.classList.remove('btnCloseAppear');
    overlay.classList.remove('overlayAppear');
    if(isSearch) {
        btnClose.classList.remove('whiteClose'); 
    }
}

function openBtnCloseAndOverlay() {
    btnClose.classList.add('btnCloseAppear');
    overlay.classList.add('overlayAppear');
    if(isSearch) {
        btnClose.classList.add('whiteClose');
    }
}

function closeMenu() {
    menu.classList.remove('menuAppear');
    closeBtnCloseAndOverlay();
}

function closeSearch() {
    search.classList.remove('searchAppear');
    closeBtnCloseAndOverlay();
}


var isSearch = false;
btnMenu.onclick = function() {
    isSearch = false;
    menu.classList.add('menuAppear');
    openBtnCloseAndOverlay();
};

btnSearch.onclick = function() {
    isSearch = true;
    search.classList.add('searchAppear');
    openBtnCloseAndOverlay();
}

function closeMenuOrSearch() {
    if(!isSearch){
        closeMenu();
    }
    else{
        closeSearch();
    }
}

btnClose.onclick = function() {
    closeMenuOrSearch();
}


overlay.onclick = function() {
    closeMenuOrSearch();
    exitForm();
}

// Xử lí khi nhấn vào item có chứa menu
var isOpen = false;
itemHaveMenu.onclick = function() {
    if(isOpen === false){
        if(subMenu.classList.remove('subMenuClose')) {
            subMenu.classList.remove('subMenuClose')
        }
        subMenu.classList.add('subMenuAppear');
        subMenuIcon.style.transform = 'rotate(180deg)'
    }
    else{
        subMenu.classList.remove('subMenuAppear');
        subMenu.classList.add('subMenuClose');
        subMenuIcon.style.transform = 'rotate(360deg)'
    }
    isOpen = !isOpen;
};