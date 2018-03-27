/*Main-menu focus*/
var itemLink = document.querySelectorAll('.item-navigation a');
var itemMenu = document.querySelector('.item-navigation');
var itemMenuFocus = function() {
  itemMenu.classList.add('focus');
}
var itemMenuOutFocus = function() {
  itemMenu.classList.remove('focus');
}

for(i=0; i<itemLink.length; i++) {
  itemLink[i].addEventListener('focus', itemMenuFocus);
  itemLink[i].addEventListener('blur', itemMenuOutFocus);
}

/*Search-focus*/
var userSearchInput = document.querySelector('.search-form input');
var userSearchForm = document.querySelector('.search-form');
var searchFocus = function() {
  userSearchForm.classList.add('focus');
}
var searchOutFocus = function() {
  userSearchForm.classList.remove('focus');
}

userSearchInput.addEventListener('focus', searchFocus);
userSearchInput.addEventListener('blur', searchOutFocus);

userSearchForm.addEventListener("submit", function (evt) {
  if (!userSearchInput.value) {
    evt.preventDefault();
    userSearchForm.classList.remove("modal-error");
    userSearchForm.offsetWidth = userSearchForm.offsetWidth;
    userSearchForm.classList.add("modal-error");
  }
});

/*Enter-focus*/
var userEnterInput = document.querySelectorAll('.enter-form input');
var userEnterForm = document.querySelector('.enter-form');
var enterLogin = userEnterForm.querySelector ('[name = enter-email]');
var enterPassword = userEnterForm.querySelector ('[name = enter-password]');
var enterFocus = function() {
  userEnterForm.classList.add('focus');
}
var enterOutFocus = function() {
  userEnterForm.classList.remove('focus');
}

for(i=0; i<userEnterInput.length; i++) {
  userEnterInput[i].addEventListener('focus', enterFocus);
  userEnterInput[i].addEventListener('blur', enterOutFocus);
}

var userEnterButton = document.querySelector('.enter-form button');
var userEnterLink = document.querySelectorAll('.enter-form-link');

userEnterButton.onfocus = enterFocus;
userEnterButton.onblur = enterOutFocus;

for(i=0; i<userEnterLink.length; i++) {
  userEnterLink[i].addEventListener('focus', enterFocus);
  userEnterLink[i].addEventListener('blur', enterOutFocus);
}

userEnterForm.addEventListener("submit", function (evt) {
  if (!enterLogin.value || !enterPassword.value) {
    evt.preventDefault();
    userEnterForm.classList.remove("modal-error");
    userEnterForm.offsetWidth = userEnterForm.offsetWidth;
    userEnterForm.classList.add("modal-error");
  }
});

/*Cart*/
var cartProductButton = document.querySelectorAll('.delete-button .cart-button');
var cart = document.querySelector('.cart-content');
var cartOrderButton = document.querySelector('.cart-content .order-button');

var cartFocus = function() {
  cart.classList.add('focus');
}

var cartOutFocus = function() {
  cart.classList.remove('focus');
}

for(i=0; i<cartProductButton.length; i++) {
  cartProductButton[i].addEventListener('focus', cartFocus);
  cartProductButton[i].addEventListener('blur', cartOutFocus);
}

if(cartOrderButton) {
  cartOrderButton.addEventListener('focus', cartFocus);
  cartOrderButton.addEventListener('blur', cartOutFocus);
}

/*Subscription-form*/
var letterForm = document.querySelector('.subscription-form');

if(letterForm) {
  var letterField = letterForm.querySelector('input');
  letterForm.addEventListener("submit", function (evt) {
    if (!letterField.value) {
      evt.preventDefault();
      letterForm.classList.remove("modal-error");
      letterForm.offsetWidth = letterForm.offsetWidth;
      letterForm.classList.add("modal-error");
    }
  });
}

/*Slider*/
var firstSlide = document.querySelector('.promo-actions:nth-child(1)');
var secondSlide = document.querySelector('.promo-actions:nth-child(2)');
var thirdSlide = document.querySelector('.promo-actions:nth-child(3)');
var firstButton = document.querySelector('.slider-button:nth-child(1)');
var secondButton = document.querySelector('.slider-button:nth-child(2)');
var thirdButton = document.querySelector('.slider-button:nth-child(3)');
var body = document.querySelector('.index-body');

if (firstButton) {
  firstButton.onclick = function() {
    firstButton.classList.add('active');
    firstSlide.classList.add('active');
    secondSlide.classList.remove('active');
    thirdSlide.classList.remove('active');
    secondButton.classList.remove('active');
    thirdButton.classList.remove('active');
    body.classList.add('first-slide');
    body.classList.remove('second-slide');
    body.classList.remove('third-slide');
  }
}

if (secondButton) {
  secondButton.onclick = function() {
    secondButton.classList.add('active');
    secondSlide.classList.add('active');
    firstSlide.classList.remove('active');
    thirdSlide.classList.remove('active');
    firstButton.classList.remove('active');
    thirdButton.classList.remove('active');
    body.classList.add('second-slide');
    body.classList.remove('first-slide');
    body.classList.remove('third-slide');
  }
}

if (thirdButton) {
  thirdButton.onclick = function() {
    thirdButton.classList.add('active');
    thirdSlide.classList.add('active');
    firstButton.classList.remove('active');
    firstSlide.classList.remove('active');
    secondButton.classList.remove('active');
    secondSlide.classList.remove('active');
    body.classList.add('third-slide');
    body.classList.remove('first-slide');
    body.classList.remove('second-slide');
  }
}

/*Modal-Feedback*/
var feedback = document.querySelector('.feedback-button');
var feedbackModal = document.querySelector('.modal-feedback');
var feedbackOverlay = document.querySelector('.modal-overlay');
var feedbackClose = document.querySelector('.modal-close');
var modalForm = document.querySelector('.feedback-form');

if (feedback) {
  feedback.onclick = function(evt) {
    evt.preventDefault();
	  feedbackModal.classList.add('active');
    feedbackOverlay.classList.add('active');
    modalLogin.focus();
  }
  feedback.onkeypress = function(evt) {
    evt.preventDefault();
	  feedbackModal.classList.add('active');
    feedbackOverlay.classList.add('active');
  }
  feedbackClose.onclick = function(evt) {
    evt.preventDefault();
    feedbackModal.classList.remove('active');
    feedbackOverlay.classList.remove('active');
  }
}
if (modalForm) {
  var modalLogin = modalForm.querySelector('[name = feedback-name]');
  var modalPassword = modalForm.querySelector('[name = feedback-email]');
  var modalText = modalForm.querySelector('[name = feedback-text]');
  modalForm.addEventListener("submit", function (evt) {
    if (!modalLogin.value || !modalPassword.value || !modalText.value) {
      evt.preventDefault();
      modalForm.classList.remove("modal-error");
      modalForm.offsetWidth = modalForm.offsetWidth;
      modalForm.classList.add("modal-error");
    }
  })
}
