document.addEventListener('DOMContentLoaded',  (event) => {
    // const activeItems = document.querySelectorAll('[data-module="active"]');
  document.addEventListener('click',  (event) => {
    var dataset = event.target.dataset;
    var modal = null;
    var cssClass = "is-active";
    var cssBodyClass = "is-active-modal";

    if (dataset.module && dataset.module === 'modal') {

      if (!dataset.target) {
        throw new Error('add the data-target att');
      }

      modal = document.querySelector(`[data-modal=${dataset.target}]`);

      if (!modal) {
        throw new Error(`add modal DOM element with [data-modal=${dataset.target}]`)
      }

      var body = document.body;

      body.classList.toggle(cssBodyClass.split(' '))

      cssClass = dataset.class ? dataset.class : cssClass;

      modal.classList.toggle(cssClass.split(' '))
    }
  });
});