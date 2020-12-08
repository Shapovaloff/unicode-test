import tippy, { delegate } from 'tippy.js';
import ClipboardJS from 'clipboard';

// TODO: move inside separate utils file
const UINode = document.querySelector('#js-char-popup-ui'); // место для отрисовки попапа в html
const touchScreen = ('ontouchstart' in document.documentElement); // это означает что сейчас мобильное устройство
const popupArea = document.querySelector('#js-char-popup-area'); // Весь блок с эелементами на которые будет наводится мышка


// Функция заменяет символы на unicod
function escapeHTML(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isCopiedSymbol(num) {
  return !(num < 32
      || num === 127
      || (num >= 128 && num < 160)
      || (num >= 55296 && num <= 57343)
      || num === 1564);
}

function prepareContent(reference) {
  const data = JSON.parse(reference.getAttribute('data-template'));

  if (data) {
    const symbolNum = data.html_code.match(/\d+/g);
    /* eslint-disable indent */
    const content = `<div id="js-char-popup-template" class="char">
        <div class="char__content">
          <div class="char__header">
            ${data.image ? `<img class="char__image" src="${data.image}" alt="${data.symbol}">`
              : `<span class="vchar ${data.css_class ? data.css_class : ''}">${data.symbol}</span>`}
          </div>

          <div class="desc">
            <a href="${data.url}">${data.title}</a>
          </div>

          <div class="char__codes">
            <div class="char__code-names">
              <div class="char__unicode-num">${UINode.dataset.unicodeNumber}:</div>
              <div class="char__html-code">${UINode.dataset.htmlCode}:</div>
            </div>
            <div class="char__code-values">
              <div class="unicode-num"><span class="code">${escapeHTML(data.number)}</span></div>
              <div class="html-code"><span class="code">${escapeHTML(data.html_code)}</span></div>
            </div>
          </div>
        </div>
        
        
        ${isCopiedSymbol(symbolNum)
          ? `<div class="char__copy">
            <input type="button" class="b-copy-char-button b-copy-char-button--block symbol-copy"
              data-goal="copy_symbol"
              data-clipboard-text="${data.symbol}"
              data-symbol="${data.symbol}"
              value="${UINode.dataset.buttonText}">
          </div>` : ''}
      </div>`;
    /* eslint-enable indent */
    return content;
  }

  return false;
}

function characterPopup() {
  if (UINode && popupArea) {
    if (touchScreen) {
      popupArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-char-popup-item') || event.target.parentNode.classList.contains('js-char-popup-item')) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }
    
    if (window.innerWidth < 768) {
      const tippyInstance = tippy(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        trigger: 'manual',
        appendTo: () => document.body,
        content(reference) {
          return prepareContent(reference);
        },

        onShow() {         
          setTimeout(() => {
            const button = document.querySelector('.b-copy-char-button');
            let clipboard = new ClipboardJS(button);
            const openTooltip = () => {
              const symbol = button.dataset.clipboardText;
              
              let popup = document.querySelector('.set-v2-popup')
              let symbolCopy = popup.querySelector('.set-v2-popup-symbol');
              symbolCopy.textContent = symbol;
              popup.classList.add('set-v2-popup--active');
              
              setTimeout(() => {
                popup.classList.remove('set-v2-popup--active')
              }, 900)
            };

            if (button) {
              button.addEventListener('click', openTooltip)
            }
            
            }, 50);
        },
        onHide() {
          const button = document.querySelector('.b-copy-char-button');
          if (button) {
            // button.removeEventListener('click', openTooltip)
          }
        },
      });

      const overlayFragment = document.createRange().createContextualFragment('<div class="js-char-popup-overlay" style="display: none;"></div>');
      document.body.appendChild(overlayFragment);
      const overlay = document.body.querySelector('.js-char-popup-overlay');

      const hideTippy = function() {
        tippyInstance.hide();
        overlay.style.display = 'none';
      };

      overlay.addEventListener('click', hideTippy);

      const showTippy = function(reference) {
        tippyInstance.setContent(prepareContent(reference));
        overlay.style.display = 'block';
        tippyInstance.show();
      };

      popupArea.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-char-popup-item')) {
          showTippy(event.target);
        } else if (event.target.parentNode.classList.contains('js-char-popup-item')) {
          showTippy(event.target.parentNode);
        }
      });
    } else {
      delegate(popupArea, {
        theme: 'light-border',
        interactive: true,
        arrow: false,
        allowHTML: true,
        placement: 'right-start',
        target: '.js-char-popup-item',
        delay: [400, 200],
        duration: 200,
        appendTo: () => document.body,
        content(reference) {
          return prepareContent(reference);
        },
        onShow() {         
          setTimeout(() => {
            const button = document.querySelector('.b-copy-char-button');
            let clipboard = new ClipboardJS(button);
            const openTooltip = () => {
              const symbol = button.dataset.clipboardText;
              
              let popup = document.querySelector('.set-v2-popup')
              let symbolCopy = popup.querySelector('.set-v2-popup-symbol');
              symbolCopy.textContent = symbol;
              popup.classList.add('set-v2-popup--active');
              
              setTimeout(() => {
                popup.classList.remove('set-v2-popup--active')
              }, 900)
            };

            if (button) {
              button.addEventListener('click', openTooltip)
            }

            }, 50);
        },
        onHide() {
          const button = document.querySelector('.b-copy-char-button');
          if (button) {
            // button.removeEventListener('click', openTooltip)
          }
        },
      });
    }
  }
}

characterPopup();