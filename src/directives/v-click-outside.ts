export const vClickOutside = {
  // mounted: (el: any) => el.focus(),

  mounted(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log(el);

    // el.__ClickOutsideHandler__ = (event: Event) => {
    //   if (!(el === event.target || el.contains(event.target))) {
    //     console.log(el);
    //     console.log(binding.value);
    //   }
    // };
    // document.body.addEventListener("click", el.__ClickOutsideHandler__);
  },
};
