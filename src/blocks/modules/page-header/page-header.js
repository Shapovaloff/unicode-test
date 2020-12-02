function calculateRightBound(item) {
  return item.offsetLeft + item.offsetWidth;
}
function moveItemIntoList(item, list) {
  list.insertBefore(item, list.firstElementChild);
}

function collapsibleDropdownList() {
  const headerMenuWrapper = document.querySelector('.js-dropdown-menu');
  const menuItems = Array.prototype.slice.call(headerMenuWrapper.querySelectorAll('.js-dropdown-menu-item'));
  const dropdownMenuButton = headerMenuWrapper.querySelector('.js-dropdown-menu-button');
  const outOfBoundsItems = [];

  for (let i = menuItems.length - 1; i >= 0; i--) {
    if (calculateRightBound(menuItems[i]) > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      outOfBoundsItems.push(menuItems[i]);
    } else {
      i = -1;
    }
  }

  if (outOfBoundsItems.length) {
    dropdownMenuButton.classList.add('js-enabled');
    const hiddenItemsList = dropdownMenuButton.querySelector('.js-dropdown-menu-list');
    outOfBoundsItems.forEach((item) => {
      moveItemIntoList(item, hiddenItemsList);
    });

    const buttonRightBound = dropdownMenuButton.offsetLeft + dropdownMenuButton.offsetWidth;
    if (buttonRightBound > headerMenuWrapper.offsetLeft + headerMenuWrapper.clientWidth) {
      moveItemIntoList(dropdownMenuButton.previousElementSibling, hiddenItemsList);
    }

    headerMenuWrapper.classList.add('js-enabled');
  } else {
    dropdownMenuButton.remove();
  }

  dropdownMenuButton.classList.add('js-processed');
  headerMenuWrapper.classList.add('js-processed');
}

collapsibleDropdownList();

export default function openMobileMenu() {
  const breakpoint = window.matchMedia('(min-width:768px)');

  const button = document.querySelector('.page-header__menu-toggle');
  const menu = document.querySelector('.page-header__navigation');
  const buttonLanguage = document.querySelector('.menu-item-wrapper__link');
  const menuBackList = document.querySelector('.menu-back__list');
  const menuBtnLanguage = document.querySelector('.js-language-btn');
  const bodyPage = document.querySelector('body');
  const mainNavigation = document.querySelector('.main-navigation');

  const closeMenu = () => {
    menu.style.transition = 'max-height 0.2s';
    menu.style.maxHeight = 0;
    bodyPage.style.overflowY = 'scroll';
    button.classList.remove('page-header__menu-toggle--active');
  };

  const openMenu = () => {
    menu.style.transition = 'max-height 0.2s';
    menu.style.maxHeight = 'calc(100vh - 100px)';
    bodyPage.style.overflowY = 'hidden';
    button.classList.add('page-header__menu-toggle--active');
  };

  const removeClassLang = () => {
    menuBackList.classList.remove('menu-back__list--active');
    mainNavigation.style.overflowY = 'scroll';
  };

  const openMenuLang = () => {
    menuBackList.style.transition = 'transform 0.2s';
    menuBackList.classList.add('menu-back__list--active');
    mainNavigation.style.overflowY = 'hidden';

    if (menuBackList.classList.contains('menu-back__list--active')) {
      menuBtnLanguage.addEventListener('click', removeClassLang);
    } else {
      menuBtnLanguage.removeEventListener('click', removeClassLang);
    }
  };

  const clickButton = () => {
    if (button.classList.contains('page-header__menu-toggle--active')) {
      closeMenu();
      buttonLanguage.removeEventListener('click', openMenuLang);
    } else {
      openMenu();
      buttonLanguage.addEventListener('click', openMenuLang);
    }
  };

  const breakpointChecker = () => {
    if (breakpoint.matches === true) {
      button.removeEventListener('click', clickButton);
      bodyPage.style.overflowY = 'scroll';
      menu.style.maxHeight = menu.scrollHeight + 'px';
    } else if (breakpoint.matches === false) {
      button.addEventListener('click', clickButton);
      menu.style.maxHeight = 0;
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

openMobileMenu();
