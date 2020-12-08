const breakpoint = window.matchMedia('(min-width:768px)');

if (breakpoint) {
  const buttonLanguage = document.querySelector('.js-language-button');
  const languageList = document.querySelector('.js-language-list');
  
  const openMobileMenu = function () {
    buttonLanguage.classList.add('js-language-button--active');
    languageList.classList.add('js-language-list--active');
  }
  
  const closeMobileMenu = function () {
    buttonLanguage.classList.remove('js-language-button--active');
    languageList.classList.remove('js-language-list--active');
  }
  
  buttonLanguage.addEventListener('click', function () {
    if (buttonLanguage.classList.contains('js-language-button--active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
  
  document.addEventListener('click', (evt) => {
    const targetClick = evt.target;
    const itsMenu = targetClick === languageList || languageList.contains(targetClick);
    const itsHamburger = targetClick === buttonLanguage;
  
    const menuIsActive = languageList.classList.contains('js-language-list--active');
    if (!itsMenu && !itsHamburger && menuIsActive) {
      closeMobileMenu();
    }
  });  
}

const breakpointMobile = window.matchMedia('(max-width:768px)');

export default function openMobileMenu() {
    // const breakpoint = window.matchMedia('(min-width:768px)');
    const toggleMenu = document.querySelector('.js-toggle-menu');
    const menuNavigation = document.querySelector('.js-menu-navigation');
    const body = document.querySelector('body');
    const btnToLang = document.querySelector('.js-btn-mobile-lang');
    const languageBlock = document.querySelector('.js-language-mobile');
    const languageList = document.querySelector('.language-select');
    const languageBtn = document.querySelector('.js-language-btn');

    const openMenu = function () {
      toggleMenu.classList.add('js-toggle-menu--active');
      menuNavigation.classList.add('js-menu-navigation--active');
      body.style.overflow = 'hidden';
    }

    const closeMenu = function () {
      toggleMenu.classList.remove('js-toggle-menu--active');
      menuNavigation.classList.remove('js-menu-navigation--active');
      body.style.overflow = 'auto';
    }

    toggleMenu.addEventListener('click', function () {
      if (toggleMenu.classList.contains('js-toggle-menu--active')) {
        closeMenu();
      } else {
        openMenu();
      }      
    });

    btnToLang.addEventListener('click', function () {
      if (menuNavigation.classList.contains('js-menu-navigation--active')) {
        languageBlock.classList.add('js-language-mobile--active');
        languageList.style.transform = 'none';
      }
    });

    languageBtn.addEventListener('click', function () {
      if (languageBlock.classList.contains('js-language-mobile--active')) {
        languageBlock.classList.remove('js-language-mobile--active');
        languageList.style.transform = 'translateX(103%)';
      }
    });
  }

  if (breakpointMobile) {
    openMobileMenu();
  }

