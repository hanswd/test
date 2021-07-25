document.addEventListener('DOMContentLoaded', (event) => {
    // const activeItems = document.querySelectorAll('[data-module="active"]');
  document.addEventListener('click', (event) => {
    var dataset = event.target.dataset;
    var parent = event.target;
    var cssClass = "is-active";

    if (dataset.module && dataset.module === 'active') {

      if (dataset.target) {
        parent = document.querySelector(`[data-parent=${dataset.target}]`);
        console.log(dataset.target)
      }

      parent = parent ? parent : event.target;
      cssClass = dataset.class ? dataset.class : cssClass;

      parent.classList.toggle(cssClass.split(' '))
    }
  });
});
