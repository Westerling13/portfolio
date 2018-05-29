var catalog_link = document.querySelector(".catalog-link");
var catalog_popup = document.querySelector(".catalog-navigation");

var search_link = document.querySelector(".search-link");
var search_popup = document.querySelector(".search-modal");

var signin_link = document.querySelector(".sign-in-link");
var signin_popup = document.querySelector(".sign-in-modal");
var signin_form = signin_popup.querySelector("form");
var email = signin_popup.querySelector("[name=email]");
var password = signin_popup.querySelector("[name=password]");

var basket_link = document.querySelector(".basket-link");
var basket_popup = document.querySelector(".basket-list");

var feedback_button = document.querySelector(".feedback-button");
var feedback_popup = document.querySelector(".feedback-modal-wrapper");
var feedback_close = document.querySelector(".modal-close");
var feedback_form = document.querySelector(".feedback-form");
var feedback_name = document.querySelector(".feedback-name");
var feedback_email = document.querySelector(".feedback-email");
var feedback_textarea = document.querySelector(".feedback-textarea");

catalog_link.addEventListener("mouseenter", function (evt) {
  catalog_popup.classList.add("modal-show");
  catalog_link.classList.add("catalog-link-hover");
});

catalog_popup.addEventListener("mouseleave", function (evt) {
  catalog_popup.classList.remove("modal-show");
  catalog_link.classList.remove("catalog-link-hover");
});

signin_link.addEventListener("mouseenter", function (evt) {
  signin_popup.classList.add("modal-show");
  signin_link.classList.add("sign-in-link-hover");
});

signin_popup.addEventListener("mouseleave", function (evt) {
  signin_popup.classList.remove("modal-show");
  signin_link.classList.remove("sign-in-link-hover");
  signin_popup.classList.remove("modal-error");
});

signin_form.addEventListener("submit", function (evt) {
  if (!email.value || !password.value) {
    evt.preventDefault();
    signin_popup.classList.remove("modal-error");
    signin_popup.offsetWidth = signin_popup.offsetWidth;
    signin_popup.classList.add("modal-error");
  }
});

search_link.addEventListener("mouseenter", function (evt) {
  search_popup.classList.add("modal-show");
  search_link.classList.add("search-link-hover");
});

search_popup.addEventListener("mouseleave", function (evt) {
  search_popup.classList.remove("modal-show");
  search_link.classList.remove("search-link-hover");
});

if (basket_popup) {
  basket_link.addEventListener("mouseenter", function (evt) {
    basket_popup.classList.add("modal-show");
});

  basket_popup.addEventListener("mouseleave", function (evt) {
    basket_popup.classList.remove("modal-show");
  });
};

if (feedback_popup) {
  feedback_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_popup.classList.add("modal-show");
});

  feedback_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (feedback_popup.classList.contains("modal-show")) {
       feedback_popup.classList.remove("modal-show");
    }
  }
});

feedback_form.addEventListener("submit", function (evt) {
  if (!feedback_name.value || !feedback_email.value || !feedback_textarea.value) {
    evt.preventDefault();
    feedback_popup.classList.remove("modal-error");
    feedback_popup.offsetWidth = feedback_popup.offsetWidth;
    feedback_popup.classList.add("modal-error");
  }
});
};
