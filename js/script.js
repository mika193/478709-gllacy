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

/* Map */
var mapBlock = document.getElementById('map');
if(mapBlock) {
  ymaps.ready(init);
  var myMap;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.93949241, 30.32830090],
      zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.93863106, 30.32305450], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140],
      iconShadow: true,
      iconShadowLayout: 'default#image',
      iconShadowImageHref: 'img/pin-shadow.png',
      iconShadowImageSize: [182, 110],
      iconShadowImageOffset: [0, -110]
    });

    myMap.geoObjects.add(myPlacemark);
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

!function(root, factory) {
  "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
  define([], function() {
      return root.svg4everybody = factory();
  }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
  // only CommonJS-like environments that support module.exports,
  // like Node.
  module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
  /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
  function embed(parent, svg, target) {
      // if the target exists
      if (target) {
          // create a document fragment to hold the contents of the target
          var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
          // conditionally set the viewBox on the svg
          viewBox && svg.setAttribute("viewBox", viewBox);
          // copy the contents of the clone into the fragment
          for (// clone the target
          var clone = target.cloneNode(!0); clone.childNodes.length; ) {
              fragment.appendChild(clone.firstChild);
          }
          // append the fragment into the svg
          parent.appendChild(fragment);
      }
  }
  function loadreadystatechange(xhr) {
      // listen to changes in the request
      xhr.onreadystatechange = function() {
          // if the request is ready
          if (4 === xhr.readyState) {
              // get the cached html document
              var cachedDocument = xhr._cachedDocument;
              // ensure the cached html document based on the xhr response
              cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""),
              cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
              xhr._embeds.splice(0).map(function(item) {
                  // get the cached target
                  var target = xhr._cachedTarget[item.id];
                  // ensure the cached target
                  target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)),
                  // embed the target into the svg
                  embed(item.parent, item.svg, target);
              });
          }
      }, // test the ready state change immediately
      xhr.onreadystatechange();
  }
  function svg4everybody(rawopts) {
      function oninterval() {
          // while the index exists in the live <use> collection
          for (// get the cached <use> index
          var index = 0; index < uses.length; ) {
              // get the current <use>
              var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
              if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)),
              svg && src) {
                  if (polyfill) {
                      if (!opts.validate || opts.validate(src, svg, use)) {
                          // remove the <use> element
                          parent.removeChild(use);
                          // parse the src and get the url and id
                          var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                          console.log(url);
                          // if the link is external
                          if (url.length) {
                              // get the cached xhr request
                              var xhr = requests[url];
                              // ensure the xhr request exists
                              xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(),
                              xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                              xhr._embeds.push({
                                  parent: parent,
                                  svg: svg,
                                  id: id
                              }), // prepare the xhr ready state change event
                              loadreadystatechange(xhr);
                          } else {
                              // embed the local id into the svg
                              embed(parent, svg, document.getElementById(id));
                          }
                      } else {
                          // increase the index when the previous value was not "valid"
                          ++index, ++numberOfSvgUseElementsToBypass;
                      }
                  }
              } else {
                  // increase the index when the previous value was not "valid"
                  ++index;
              }
          }
          // continue the interval
          (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
      }
      var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
      polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
      // create xhr requests object
      var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
      // conditionally start the interval if the polyfill is active
      polyfill && oninterval();
  }
  function getSVGAncestor(node) {
      for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
      return svg;
  }
  return svg4everybody;
});

	svg4everybody();
