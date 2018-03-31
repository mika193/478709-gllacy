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
/*Ice-Cream Overlay*/

var iceCreamList = document.querySelectorAll('.ice-cream-item');
var iceCreamListFocus = function() {
  this.classList.add('focused');
  var iceCreamButton = this.querySelector('.item-button');
  iceCreamButton.classList.add('active');
}
var iceCreamListOutFocus = function() {
  this.classList.remove('focused');
  var iceCreamButton = this.querySelector('.item-button');
  iceCreamButton.classList.remove('active');
}

for(var i=0; i < iceCreamList.length; i++) {
  iceCreamList[i].addEventListener("focus", iceCreamListFocus, true);
  iceCreamList[i].addEventListener("blur", iceCreamListOutFocus, true);
}

/*Range*/
var price = document.querySelector('.price');
if(price) {
  var priceRange = document.querySelector('.price-range');
  var thumbElemLeft = document.querySelector('.min-price-button');
  var thumbElemRight = document.querySelector('.max-price-button');
  var priceFatLine = document.querySelector('.price-range-fat');
  var priceFatLineWidth = priceFatLine.offsetWidth;
  var rangeCoords = getCoords(priceRange);
  var minPrice = document.getElementById('min-price');
  var maxPrice = document.getElementById('max-price');

  function roundTo50(num) {
    return Math.round(num/50)*50;
  }

  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  function getCoordsRight(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      right: box.right + pageXOffset
    };
  }

  function minValue(position) {
    var minPriceValue = position*5;
    minPrice.value = roundTo50(minPriceValue);
  }

  function maxValue(position) {
    var maxValue = position*5;
    maxPrice.value = roundTo50(maxValue);
  }

  function priceFatLinePosition (position) {
    priceFatLineWidth = thumbElemRight.offsetLeft-thumbElemLeft.offsetLeft;
    priceFatLine.style.left = position + 'px';
    priceFatLine.style.width = priceFatLineWidth + 'px';
  }

  /*Range-key-press*/
  thumbElemLeft.onkeypress = function(event) {
    var target = event.keyCode;
    var leftPosition = thumbElemLeft.offsetLeft;
    var rightPosition = thumbElemRight.offsetLeft;

    if(target =='37') {
      leftPosition = leftPosition - 7;
      if (leftPosition < 0) {leftPosition = 0}
    }

    if(target =='39') {
      leftPosition = leftPosition + 7;
      if (leftPosition >= (rightPosition-thumbElemLeft.offsetWidth-2)) {
        leftPosition = rightPosition-thumbElemLeft.offsetWidth-2;
      }
    }

    thumbElemLeft.style.left = leftPosition + 'px';
    minValue(leftPosition);
    priceFatLinePosition(leftPosition);
  }

  thumbElemRight.onkeypress = function(event) {
    var targetRight = event.keyCode;
    var leftPosition = thumbElemLeft.offsetLeft;
    var rightPosition = thumbElemRight.offsetLeft;

    if(targetRight =='37') {
      rightPosition = rightPosition - 7;
      if (rightPosition < (leftPosition+thumbElemRight.offsetWidth+2)) {
        rightPosition = leftPosition+thumbElemRight.offsetWidth+2
      }
    }

    if(targetRight =='39') {
      rightPosition = rightPosition + 7;
      if (rightPosition >= (priceRange.offsetWidth-thumbElemLeft.offsetWidth)) {
        rightPosition = priceRange.offsetWidth-thumbElemLeft.offsetWidth;
      }
    }

    thumbElemRight.style.left = rightPosition + 'px';
    maxValue(rightPosition);
    priceFatLinePosition();
  }

  /*Range-left*/
  thumbElemLeft.onmousedown = function(e) {
    var thumbCoords = getCoords(thumbElemLeft);
    var thumbCoordsRight = getCoords(thumbElemRight);
    var shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = function(e) {
      var newLeft = e.pageX - shiftX - rangeCoords.left;
      if (newLeft < 0) {
        newLeft = 0;
      }

      var rightEdge = thumbCoordsRight.left - rangeCoords.left-thumbElemRight.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumbElemLeft.style.left = newLeft + 'px';
      var leftCorner = thumbElemLeft.offsetLeft;
      minValue (leftCorner);
      priceFatLinePosition(leftCorner);
    }

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  thumbElemLeft.ondragstart = function() {
    return false;
  };

  /*Range-right */
  thumbElemRight.onmousedown = function(e) {
    var thumbCoords = getCoordsRight(thumbElemLeft);
    var thumbCoordsRight = getCoords(thumbElemRight);
    var rangeCoordsRight = getCoordsRight(priceRange);
    var shiftX = e.pageX - thumbCoordsRight.left;
    var leftLimt = thumbCoords.right - rangeCoords.left;

    document.onmousemove = function(e) {
      var leftCord = e.pageX - shiftX - rangeCoords.left;
      if (leftCord < leftLimt) {
        leftCord = leftLimt;
      }

      var rightCord = rangeCoordsRight.right - rangeCoords.left-thumbElemRight.offsetWidth;
      if (leftCord > rightCord) {
        leftCord = rightCord;
      }

      thumbElemRight.style.left = leftCord + 'px';
      maxValue(leftCord);
      priceFatLinePosition();
    }

    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  thumbElemRight.ondragstart = function() {
    return false;
  };
}
