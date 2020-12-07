
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
