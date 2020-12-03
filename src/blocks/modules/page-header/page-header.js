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
