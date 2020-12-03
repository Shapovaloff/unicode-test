export default function openMobileMenu() {
    const breakpoint = window.matchMedia('(min-width:768px)');
  
    const button = document.querySelector('.language-select__open-btn');
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
      button.classList.remove('language-select__open-btn--active');
    };
  
    const openMenu = () => {
      menu.style.transition = 'max-height 0.2s';
      menu.style.maxHeight = 'calc(100vh - 100px)';
      bodyPage.style.overflowY = 'hidden';
      button.classList.add('language-select__open-btn--active');
    };

    button.addEventListener('click', function () {
        if (button.classList.contains('language-select__open-btn--active')) {
            console.log(1)
            closeMenu();
        } else {
            console.log(2)
            openMenu();
        }
    })
  
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
      if (button.classList.contains('language-select__open-btn--active')) {
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

function languageToggle() {
    const buttonLanguage = document.querySelector('.language-select__open-btn');
    const languageList = document.querySelector('.language-select__list');
    const buttonLanguageFlag = buttonLanguage.querySelector('.language-select__flag');
    const buttonLanguageArrow = buttonLanguage.querySelector('.language-select__arrow');
  
    const toggle = () => {
      languageList.classList.toggle('language-select__list--active');
      buttonLanguage.classList.toggle('language-select__open-btn--active');
      if (languageList.style.maxHeight) {
        languageList.style.transition = 'max-height 0.2s';
        languageList.style.maxHeight = null;
      } else {
        languageList.style.transition = 'max-height 0.2s';
        languageList.style.maxHeight = languageList.scrollHeight + 'px';
      }
    };
  
    buttonLanguage.addEventListener('click', () => {
      toggle();
    });
  
    document.addEventListener('click', (evt) => {
      const targetClick = evt.target;
      const itsMenu = targetClick === languageList || languageList.contains(targetClick);
      const itsHamburger = targetClick === buttonLanguage;
      const itsFlag = targetClick === buttonLanguageFlag;
      const itsArrow = targetClick === buttonLanguageArrow;
  
      const menuIsActive = languageList.classList.contains('language-select__list--active');
      if (!itsMenu && !itsHamburger && menuIsActive && !itsFlag && !itsArrow) {
        toggle();
      }
    });
  }

  languageToggle();
