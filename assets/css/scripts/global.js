import Vue from "vue";

Vue.prototype.$modal = function (e) {
    document.querySelector(`#${e}`).classList.add("_active");
    document.documentElement.classList.add("_lock");
  };
  Vue.prototype.$modalHide = function (e) {
    document.querySelector(`#${e}`).classList.remove("_active");
    document.documentElement.classList.remove("_lock");
  };

  