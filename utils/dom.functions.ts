export const translateBar = (e: any) => {
  var active: any = document.querySelector("#bar_active");
  if (e && active) {
    active.style.transform = `translateX(${e.offsetLeft}px)`;
  }
};
export const translateBarMobile = (e: any) => {
  var active: any = document.querySelector("#bar_active_mobile");
  if (e && active) {
    active.style.transform = `translateY(${e.offsetTop}px)`;
  }
};
