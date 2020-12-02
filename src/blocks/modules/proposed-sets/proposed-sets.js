import Swiper from 'swiper';

export default function asideMobile() {
  const blogContainer = document.querySelector('.page-content__side');
  const breakpoint = window.matchMedia('(min-width:1024px)');
  let mySwiper;

  function enableSwiper() {
    if (blogContainer) {
      mySwiper = new Swiper(blogContainer, {
        direction: 'horizontal',
        spaceBetween: 8,
        grabCursor: true,
        slidesPerView: 'auto',
      });
    }
  }

  const breakpointChecker = () => {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

asideMobile()