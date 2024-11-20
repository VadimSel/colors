/*! For license information please see build.js.LICENSE.txt */
(()=>{"use strict";var n={173:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,"#cart {\n  position: absolute;\n  width: 0px;\n  height: 100%;\n  background: white;\n  z-index: 25;\n  top: 0;\n  right: 0;\n  transition: width 250ms;\n}\n\n#cart.open {\n  width: 600px;\n}\n\n#cart.openMobile {\n  width: 100vw;\n}\n\n#cartContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  padding: 40px;\n}\n\n#cartHeaderAndContent {\n  max-height: 820px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#cartHeaderAndContentHeader {\n  max-height: 166px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n#cartHeader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#cartTitle {\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: -0.04em;\n  color: var(--main-color-black);\n  text-transform: capitalize;\n}\n\n#closeCartButton {\n  background: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n\n#cartContentHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n#itemsCount {\n  font-weight: 400;\n}\n\n#itemsCountDelete {\n  font-weight: 300;\n  background: none;\n  opacity: 0.4;\n}\n\n#cartContentItems {\n  max-height: 655px;\n  overflow: auto;\n  height: 100vh;\n}\n\n#cartFooter {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--main-color-black);\n}\n\n#cartTotalPriceContent {\n  display: flex;\n  flex-direction: column;\n}\n\n#priceText {\n  font-size: 16px;\n}\n\n#cartTotalPrice {\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: -0.02em;\n}\n\n#createOrderButton {\n  background: var(--main-color-green);\n  width: 240px;\n  height: 56px;\n  border-radius: 4px;\n}\n\n.cartItem {\n  height: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cartItem:not(:last-child) {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.cartItemImage {\n  width: 96px;\n  height: 96px;\n  margin-top: -10px;\n  margin-right: 8px;\n}\n\n.cartItemInfo {\n  width: 165px;\n  height: 68px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 16px;\n  color: var(--main-color-black);\n  flex-grow: 1;\n}\n\n.cartItemName {\n  font-weight: 300;\n  letter-spacing: 0.02em;\n}\n\n.cartItemPrice {\n  font-weight: 600;\n}\n\n.cartItemCount {\n  display: flex;\n  align-items: center;\n  gap: 19px;\n  flex-grow: 1;\n  max-width: 165px;\n}\n\n.cartItemCountMinus, .cartItemCountPlus {\n  width: 40px;\n  height: 24px;\n  border-radius: 4px;\n  background: var(--main-color-grey);\n}\n\n.cartItemCountMinus.disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.cartItemCountMinus img, .cartItemCountPlus img {\n  width: 16px;\n}\n\n.cartItemDelete {\n  background: none;\n  opacity: 0.2;\n}\n\n@media (max-width: 768px) {\n  #openCart {\n    display: none;\n  }\n\n  #openCartMobile {\n    display: block;\n    background: var(--main-color-green);\n    height: 24px;\n    width: 24px;\n    border-radius: 50%;\n  }\n\n  #cart {\n    width: 0px;\n    max-height: 100vh;\n  }\n\n  #createOrderButton {\n    width: 140px;\n  }\n\n  .cartItemImage {\n    width: 76px;\n    height: 76px;\n    margin-right: 11px;\n  }\n\n  .cartItem {\n    padding-top: 8px;\n  }\n\n  .cartItemInfo {\n    font-size: 12px;\n    margin-bottom: 8px;\n  }\n\n  .cartItemCount {\n    max-width: 100px;\n    margin-right: 8px;\n  }\n}",""]);const c=a},507:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,".header {\n  height: 104px;\n  margin: 0 auto;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n#modalBackground.open {\n  opacity: 1;\n  z-index: 15;\n}\n\n.logoContainer {\n  max-width: 367px;\n  flex-grow: 1;\n  display: flex;\n}\n\n#logo {\n  height: 26px;\n  display: flex;\n  flex-basis: 255px;\n}\n\n.textLinks {\n  list-style-type: none;\n  display: flex;\n  gap: 24px;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: var(--main-color-black);\n  text-decoration: none;\n  flex-grow: 1;\n  max-width: 1066px;\n}\n\n.iconLinksContainer, .iconLinks {\n  display: flex;\n  gap: 24px;\n}\n\n.iconLinksContainer {\n  flex-grow: 1;\n  max-width: 224px;\n}\n\n#openCartMobile {\n  display: none;\n}\n\n#openCart {\n  background: var(--main-color-green);\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n\n.phoneNumberContainer {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 263px;\n  color: var(--main-color-black);\n}\n\n#phoneNumber {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n#phoneText {\n  opacity: 0.3;\n  font-size: 14px;\n}\n\n.burgerMenu {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .header {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    max-width: 325px;\n  }\n\n  .burgerMenu {\n    background: none;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n\n  .logoContainer {\n    flex-grow: 0;\n  }\n\n  .textLinks {\n    display: none;\n  }\n\n  .iconLinksContainer {\n    flex-grow: 0;\n  }\n\n  .phoneNumberContainer {\n    display: none;\n  }\n\n  .iconLinks {\n    display: none;\n  }\n}",""]);const c=a},315:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,".main {\n  display: flex;\n}\n\n.mainContent {\n  flex-grow: 1;\n  max-width: 1510px;\n  margin-bottom: 125px;\n  position: relative;\n}\n\n/* ------------------- Product Items ------------------- */\n\n.mainSection {\n  height: 100%;\n  padding-top: 131px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));\n}\n\n.productsCount {\n  position: absolute;\n  z-index: 10;\n  top: 72px;\n  left: 0;\n  color: var(--main-color-black);\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n#sortTextButton {\n  position: absolute;\n  top: 72px;\n  right: 64px;\n  color: var(--main-color-black);\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: none;\n}\n\n#sortTextButton > img {\n  padding: 0.5px 0 0 3px;\n}\n\n.productCart {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  width: 278px;\n  height: 376px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.productImageContainer {\n  margin: auto;\n}\n\n.productImage {\n  margin-top: -16px;\n}\n\n.productInfo {\n  height: 76px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 16px;\n  margin-bottom: 16px;\n  color: var(--main-color-black);\n}\n\n.productName {\n  font-weight: 300;\n  letter-spacing: 0.02em;\n  height: 46px;\n}\n\n.priceAndButton {\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.productPrice {\n  font-weight: 600;\n  margin: auto 0;\n}\n\n.addProduct {\n  width: 80px;\n  height: 32px;\n  border-radius: 8px;\n  background: var(--main-color-green);\n  transition: transform 30ms;\n}\n\n.addProduct:active {\n  background: var(--main-color-green-dark);\n  transform: scale(0.96);\n}\n\n.mobileTitle {\n  display: none;\n}\n\n.filtersText {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .mainContent {\n    height: 100%;\n    position: relative;\n    margin-bottom: 24px;\n    max-width: 325px;\n    margin: 0 auto;\n  }\n\n  .sideTextMobile {\n    display: flex;\n    font-size: 10px;\n    letter-spacing: 0.06em;\n    gap: 8px;\n    text-transform: uppercase;\n    opacity: 0.3;\n    color: var(--main-color-black);\n    margin-top: 16px;\n  }\n\n  .mobileTitle {\n    display: block;\n    font-size: 36px;\n    letter-spacing: -0.04em;\n    color: var(--main-color-black);\n    margin: 48px 0;\n  }\n\n  .productsCount {\n    display: none;\n  }\n\n  .filtersTextAndButton {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 24px;\n  }\n\n  #modal {\n    top: 159px;\n    right: 0;\n  }\n\n  .filtersText {\n    display: block;\n  }\n\n  #sortTextButton {\n    position: static;\n  }\n\n  .mainSection {\n    padding-top: 0;\n    overflow: hidden;\n    grid-template-columns: repeat(2, 156px);\n    justify-content: space-between;\n  }\n\n  .productCartContainer {\n    width: 156px;\n    height: 304px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  }\n\n  .productCart {\n    width: 156px;\n    height: 270px;\n    margin-bottom: 0;\n    border: 0;\n    display: block;\n  }\n\n  .productImageContainer {\n    margin: 0 0 16px 0;\n  }\n\n  .productImage {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    margin-top: 0;\n  }\n\n  .productInfo {\n    margin: 0;\n    color: var(--main-color-black);\n    font-size: 16px;\n  }\n\n  .productName {\n    font-weight: 300;\n    letter-spacing: 0.02em;\n    margin: 0 0 20px 0;\n  }\n\n  .priceAndButton {\n    height: 100%;\n  }\n\n  .productPrice {\n    font-weight: 600;\n  }\n\n  .addProduct { \n    width: 40px;\n    height: 24px;\n    border-radius: 6px;\n    background: var(--main-color-grey);\n    transition: all 50ms;\n  }\n\n  .addProduct > img {\n    width: 16px;\n  }\n\n  .addProduct:active {\n    background: var(--main-color-grey-dark);\n    transform: scale(0.94);\n  }\n}",""]);const c=a},383:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,"#modalBackground {\n  opacity: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.7);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  transition: all 250ms;\n}\n\n#modalBackground.open {\n  opacity: 1;\n  z-index: 15;\n}\n\n#modal {\n  position: absolute;\n  width: 280px;\n  height: 0;\n  top: 72px;\n  right: 22px;\n  background: white;\n  z-index: 20;\n  overflow: hidden;\n  transition: height 250ms;\n}\n\n#modal.open {\n  height: 192px;\n}\n\n#modalOptions li {\n  height: 48px;\n  padding-left: 24px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n#modalOptions li:hover {\n  background: var(--main-color-green);\n}",""]);const c=a},119:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,'.sidebar {\n  width: 367px;\n  font-size: 12px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.sidebar.open {\n  height: 318px;\n}\n\n.sidebarToggleContent {\n  width: 165px;\n  height: 150px;\n  margin-left: 64px;\n  margin-top: 72px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebarSliderItem {\n  white-space: nowrap;\n}\n\n.toggle {\n  display: none;\n}\n\n.toggleWord {\n  padding-left: 48px;\n  color: var(--main-color-black);\n}\n\n.toggle + label {\n  position: relative;\n  display: flex;\n  width: 36px;\n  height: 22px;\n  background: var(--main-color-grey);\n  border-radius: 40px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  align-items: center;\n}\n\n.toggle + label::before {\n  content: "";\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  top: 7px;\n  left: 7px;\n  border-radius: 50%;\n  background: black;\n  transition: transform 0.3s ease;\n}\n\n.toggle:checked + label::before {\n  transform: translateX(14px)\n}\n\n.toggle:checked + label {\n  background: var(--main-color-green);\n}\n\n.burgerMenu {\n  display: none;\n}\n\n.sidebarLine {\n  display: none;\n}\n\n/* ------------------- Mobile ------------------- */\n\n@media (max-width: 768px) {\n  .sidebar {\n    position: fixed;\n    height: 0px;\n    width: 100%;\n    border-radius: 24px 24px 0 0;\n    background: white;\n    bottom: 0;\n    z-index: 16;\n    transition: height 250ms;\n  }\n\n  .sidebarLine {\n    display: block;\n    margin: 12px auto 38px auto;\n  }\n\n  .sidebarToggleContent {\n    margin-left: 24px;\n    margin-top: 0;\n  }\n\n  .burgerMenu {\n    background: none;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n}',""]);const c=a},435:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,".sideTextMobile {\n  display: none;\n}\n\n.sliderContainer {\n  position: relative;\n  overflow: hidden;\n}\n\n.slider {\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n}\n\n.sliderButton {\n  background: none;\n}\n\n.sliderSlide {\n  width: 100%;\n  height: 560px;\n  flex-shrink: 0;\n  object-fit: cover;\n}\n\n.pagination {\n  background: rgba(0, 0, 0, 0.400);\n  width: 124px;\n  height: 32px;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  position: absolute;\n  z-index: 10;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.dot {\n  opacity: 0.4;\n  transition: opacity 0.3s;\n  width: 6px;\n}\n\n.dot.active {\n  opacity: 1;\n}\n\n.arrowContainer {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  z-index: 10;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  padding: 0 48px 0 48px;\n}\n\n.slideContent {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n}\n\n.slideSideText {\n  position: absolute;\n  top: 6.3%;\n  left: 9.5%;\n  transform: translate(-50%, -50%);\n  font-size: 10px;\n  letter-spacing: 0.06em;\n  display: flex;\n  gap: 8px;\n  color: white;\n  opacity: 0.4;\n  text-transform: uppercase;\n}\n\n.slideTitle {\n  font-size: 72px;\n  letter-spacing: -0.02em;\n  margin-bottom: 24px;\n}\n\n.slideText {\n  font-size: 16px;\n  letter-spacing: 0.02em;\n}\n\n/* ------------------- Mobile ------------------- */\n\n@media (max-width: 768px) {\n  .slider {\n    display: none;\n  }\n}",""]);const c=a},874:(n,t,e)=>{e.d(t,{A:()=>p});var r=e(601),o=e.n(r),i=e(314),a=e.n(i),c=e(417),s=e.n(c),l=new URL(e(167),e.b),u=a()(o()),d=s()(l);u.push([n.id,`*{padding: 0;margin: 0;border: 0;}\n*,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}\n:focus,:active{outline: none;}\na:focus,a:active{outline: none;}\nnav,footer,header,aside{display: block;}\nhtml,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}\ninput,button,textarea{font-family:inherit;}\ninput::-ms-clear{display: none;}\nbutton{cursor: pointer;}\nbutton::-moz-focus-inner {padding:0;border:0;}\na,a:visited{text-decoration: none;}\na:hover{text-decoration: none;}\nul li{list-style: none;}\nimg{vertical-align: top;}\nh1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}\n\n@font-face {\n  font-family: "Inter";\n  src: url(${d});\n  font-weight: 100 900;\n  font-style: normal;\n}\n\n:root {\n  --main-color-black: "1F2020";\n  --main-color-grey: #F2F2F2;\n  --main-color-grey-dark: #CDCDCD;\n  --main-color-green: #7BB899;\n  --main-color-green-dark: #6a9781;\n}\n\nbody {\n  font-family: "Inter", sans-serif;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}`,""]);const p=u},365:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,".container {\n  position: relative;\n  max-width: 1920px;\n  margin: 0 auto;\n  overflow: hidden;\n}",""]);const c=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=e(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},167:(n,t,e)=>{n.exports=e.p+"a0e477f2f1f9d2376fde.woff2"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),c=e(659),s=e.n(c),l=e(56),u=e.n(l),d=e(540),p=e.n(d),f=e(113),m=e.n(f),g=e(507),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;function x(n){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(n)}function y(){y=function(){return t};var n,t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(n,t,e){n[t]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{l({},"")}catch(n){l=function(n,t,e){return n[t]=e}}function u(n,t,e,r){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:T(n,e,c)}),a}function d(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",m="executing",g="completed",h={};function b(){}function v(){}function w(){}var I={};l(I,a,(function(){return this}));var k=Object.getPrototypeOf,C=k&&k(k(z([])));C&&C!==e&&r.call(C,a)&&(I=C);var A=w.prototype=b.prototype=Object.create(I);function E(n){["next","throw","return"].forEach((function(t){l(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,i,a,c){var s=d(n[o],n,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==x(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(n){e("next",n,a,c)}),(function(n){e("throw",n,a,c)})):t.resolve(u).then((function(n){l.value=n,a(l)}),(function(n){return e("throw",n,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(n,r){function o(){return new t((function(t,o){e(n,r,t,o)}))}return i=i?i.then(o,o):o()}})}function T(t,e,r){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=S(c,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var l=d(t,e,r);if("normal"===l.type){if(o=r.done?g:f,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=g,r.method="throw",r.arg=l.arg)}}}function S(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function M(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function P(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(j,this),this.reset(!0)}function z(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(x(t)+" is not iterable")}return v.prototype=w,o(A,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=l(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,w):(n.__proto__=w,l(n,s,"GeneratorFunction")),n.prototype=Object.create(A),n},t.awrap=function(n){return{__await:n}},E(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new L(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},E(A),l(A,s,"Generator"),l(A,a,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),h},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),M(e),h}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;M(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:z(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}},t}function b(n,t,e,r,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}function v(){var n;return n=y().mark((function n(){var t;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://673470a4a042ab85d11a2d4a.mockapi.io/products");case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})),v=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){b(i,r,o,a,c,"next",n)}function c(n){b(i,r,o,a,c,"throw",n)}a(void 0)}))},v.apply(this,arguments)}var w=e(874),I={};I.styleTagTransform=m(),I.setAttributes=u(),I.insert=s().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=p(),o()(w.A,I),w.A&&w.A.locals&&w.A.locals;var k=e(365),C={};C.styleTagTransform=m(),C.setAttributes=u(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=p(),o()(k.A,C),k.A&&k.A.locals&&k.A.locals;var A=e(435),E={};E.styleTagTransform=m(),E.setAttributes=u(),E.insert=s().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=p(),o()(A.A,E),A.A&&A.A.locals&&A.A.locals;var L=[{src:"assets/img/Rectangle 645.webp",alt:"slide"},{src:"assets/img/Rectangle 645.webp",alt:"slide"},{src:"assets/img/Rectangle 645.webp",alt:"slide"},{src:"assets/img/Rectangle 645.webp",alt:"slide"},{src:"assets/img/Rectangle 645.webp",alt:"slide"},{src:"assets/img/Rectangle 645.webp",alt:"slide"}],T=[{src:"assets/img/chevron-left.svg",alt:"leftArrow"},{src:"assets/img/chevron-right.svg",alt:"rightArrow"}],S=[{src:"./assets/img/Ellipse 264.svg",alt:"dot"}],j=e(315),M={};function P(n,t,e){t.innerHTML=n.map((function(n){return'<div class="productCartContainer">\n\t\t\t<div class="productCart" data-id="'.concat(n.id,'" data-quantity="').concat(n.quantity,'">\n\t\t\t\t<div class="productImageContainer">\n\t\t\t\t\t<img class="productImage" src="').concat(n.image,'" alt="').concat(n.name,'" />\n\t\t\t\t</div>\n\t\t\t\t<div class="productInfo">\n\t\t\t\t\t<h3 class="productName">').concat(n.name,'</h3>\n\t\t\t\t\t<div class="priceAndButton">\n\t\t\t\t\t\t<p class="productPrice">').concat(n.price,' ₽</p>\n\t\t\t\t\t\t<button class="addProduct">\n\t\t\t\t\t\t\t<img src="assets/img/plus.svg" alt="plus"/>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>')})).join(""),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".sideTextMobile").innerHTML=e.map((function(n,t){return"<span>".concat(n,"</span> ").concat(t<e.length-1?'<img src="assets/img/Ellipse 47.svg"/>':"")})).join("")}))}M.styleTagTransform=m(),M.setAttributes=u(),M.insert=s().bind(null,"head"),M.domAPI=a(),M.insertStyleElement=p(),o()(j.A,M),j.A&&j.A.locals&&j.A.locals;var z=e(119),B={};B.styleTagTransform=m(),B.setAttributes=u(),B.insert=s().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=p(),o()(z.A,B),z.A&&z.A.locals&&z.A.locals;var q=["новинки","есть в наличии","контрактные","эксклюзивные","распродажа"],O=e(383),N={};function F(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}N.styleTagTransform=m(),N.setAttributes=u(),N.insert=s().bind(null,"head"),N.domAPI=a(),N.insertStyleElement=p(),o()(O.A,N),O.A&&O.A.locals&&O.A.locals;var H,_=[{text:"сначала дорогие",sortValue:"highPriceFirst"},{text:"сначала недорогие",sortValue:"lowPriceFirst"},{text:"сначала популярные",sortValue:"popularFirst"},{text:"сначала новые",sortValue:"newFirst"}],R={openModalButton:document.getElementById("sortTextButton"),modal:document.getElementById("modal"),modalOptions:document.getElementById("modalOptions")},D=R.openModalButton,G=R.modal,U=R.modalOptions,V=e(173),$={};$.styleTagTransform=m(),$.setAttributes=u(),$.insert=s().bind(null,"head"),$.domAPI=a(),$.insertStyleElement=p(),o()(V.A,$),V.A&&V.A.locals&&V.A.locals;var Y,Q=[],W={cart:document.getElementById("cart"),renderCartContentItems:document.getElementById("cartContentItems")},X=W.cart,J=W.renderCartContentItems,K=["главная","продукты","краски"],Z={mainSection:document.querySelector(".mainSection"),modalBackground:document.getElementById("modalBackground"),sidebar:document.querySelector(".sidebar")},nn=Z.mainSection,tn=Z.modalBackground,en=Z.sidebar;(function(){return v.apply(this,arguments)})().then((function(n){P(Y=n,nn)})),document.querySelector(".textLinks").innerHTML=["продукты","цвета","вдохновение","советы","найти магазин"].map((function(n){return'<li>\n      <a href="#">'.concat(n,"</a>\n    </li>")})).join(""),document.querySelector(".iconLinks").innerHTML=[{label:"Поиск",src:"assets/img/search.svg",alt:"search"},{label:"Профиль",src:"assets/img/profile.svg",alt:"profile"},{label:"Избранное",src:"assets/img/heart.svg",alt:"heart"}].map((function(n){return'<li>\n\t\t\t<img aria-label="'.concat(n.label,'"\n\t\t\t\tsrc="').concat(n.src,'"\n\t\t\t\talt="').concat(n.alt,'" />\n\t\t\t</li>')})).join(""),function(n){document.querySelector(".slider").innerHTML=L.map((function(n){return'<img class="sliderSlide" src="'.concat(n.src,'" alt="').concat(n.alt,'" />')})).join(""),document.querySelector(".arrowContainer").innerHTML=T.map((function(n){return'<button class="sliderButton"><img class="slide" src="'.concat(n.src,'" alt="').concat(n.alt,'" /></button>')})).join("");var t=0;function e(n){var e=document.querySelectorAll(".sliderSlide").length;n<0&&(n=e-1),n>=e&&(n=0),document.querySelector(".slider").style.transform="translateX(-".concat(100*n,"%)"),t=n,document.querySelectorAll(".dot").forEach((function(n,e){n.classList.toggle("active",e===t)}))}document.querySelector(".arrowContainer .sliderButton:nth-child(1)").addEventListener("click",(function(){e(t-1)})),document.querySelector(".arrowContainer .sliderButton:nth-child(2)").addEventListener("click",(function(){e(t+1)})),document.querySelector(".pagination").innerHTML=L.map((function(n,e){return'<img class="dot '.concat(e===t&&"active",'" src="').concat(S[0].src,'" alt="dot" />')})).join(""),document.querySelector(".slideSideText").innerHTML=n.map((function(t,e){return"<span>".concat(t,"</span> ").concat(e<n.length-1?'<img src="assets/img/Ellipse 264.svg"/>':"")})).join("")}(K),function(n,t){document.querySelector(".sidebarToggleContent").innerHTML=q.map((function(n,t){return'<div class="sidebarSliderItem">\n\t\t\t\t<input type="checkbox" id="toggle'.concat(t,'" class="toggle"/>\n\t\t\t\t<label for="toggle').concat(t,'"><span class="toggleWord">').concat(n,"</span></label>\n\t\t\t</div>")})).join(""),document.querySelector(".burgerMenu").addEventListener("click",(function(){[n,t].forEach((function(n){n.classList.add("open")}))}))}(en,tn),P(Y,nn,K),function(n,t,e,r){function o(o,i){if("open"===o)[G,n].forEach((function(n){return n.classList.add("open")}));else if("close"===o){if(i){H=i.target.getAttribute("data-sortValue");var a=i.target.textContent;!function(n,t){var o;e((o=r,function(n){if(Array.isArray(n))return F(n)}(o)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(o)||function(n,t){if(n){if("string"==typeof n)return F(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?F(n,t):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(t,e){return"highPriceFirst"===n?e.price-t.price:t.price-e.price}))),D.innerHTML="".concat(t,'<img src="assets/img/Frame 10.svg" />')}(H,a)}[G,n,cart,t].forEach((function(n){n.classList.remove("open")}))}}U.innerHTML=_.map((function(n){return'<li class="modalOption" data-sortValue="'.concat(n.sortValue,'">').concat(n.text,"</li>")})).join(""),D.addEventListener("click",(function(){return o("open")})),U.addEventListener("click",(function(n){return o("close",n)})),n.addEventListener("click",(function(){return o("close")}))}(tn,en,(function(n){P(Y=n,nn,K)}),Y),function(n,t){function e(){var n,t,e,r;n=Q.reduce((function(n,t){return parseInt(n)+parseInt(t.quantity)}),0),t=function(n){var t=n%10;return"".concat(n,1===t&&11!==n?" товар":t>=2&&t<=4&&(n<10||n>20)?" товара":" товаров")},document.getElementById("itemsCount").innerText=t(n),document.getElementById("openCart").innerText=n,document.getElementById("openCartMobile").innerText=n,e=Q.reduce((function(n,t){return n+parseFloat(t.price)*parseInt(t.quantity)}),0),r=new Intl.NumberFormat("ru-RU").format(e),document.getElementById("cartTotalPrice").innerText="".concat(r," ₽"),J.innerHTML=Q.map((function(n){var t=1==n.quantity&&"disabled";return'<li class="cartItem" data-id="'.concat(n.id,'">\n          <img class="cartItemImage" src="').concat(n.image,'" alt="item" />\n          <div class="cartItemInfo">\n            <p class="cartItemName">').concat(n.name,'</p>\n            <p class="cartItemPrice">').concat(n.price,'</p>\n          </div>\n          <div class="cartItemCount">\n            <button class="cartItemCountMinus ').concat(t,'">\n              <img src="assets/img/minus.svg" alt="minus" />\n            </button>\n            <p class="cartItemCountQuantity">').concat(n.quantity,'</p>\n            <button class="cartItemCountPlus">\n              <img src="assets/img/plus.svg" alt="plus" />\n            </button>\n          </div>\n          <button class="cartItemDelete">\n            <img src="assets/img/x.svg" alt="delete" />\n          </button>\n        </li>')})).join("")}function r(n,t){var e=Q.find((function(t){return t.id===n}));if(e){var r=parseInt(e.quantity)+parseInt(t);e.quantity=r>0?r.toString():"1"}}document.getElementById("openCart").addEventListener("click",(function(){[X,t].forEach((function(n){n.classList.add("open")}))})),document.getElementById("openCartMobile").addEventListener("click",(function(){X.classList.add("openMobile"),t.classList.add("open"),document.documentElement.style.overflow="hidden"})),document.getElementById("closeCartButton").addEventListener("click",(function(){[X,t].forEach((function(n){n.classList.remove("open","openMobile")})),document.documentElement.style.overflow="auto"})),J.addEventListener("click",(function(n){var t=n.target.closest(".cartItemDelete"),o=n.target.closest(".cartItem").dataset.id;if(n.target.closest(".cartItemCountMinus"))r(o,-1);else if(n.target.closest(".cartItemCountPlus"))r(o,1);else if(t){var i=Q.findIndex((function(n){return n.id===o}));t&&-1!==i&&Q.splice(i,1)}e()})),n.addEventListener("click",(function(n){var t=n.target.closest(".addProduct");if(t){var o=t.closest(".productCart"),i=o.dataset.id,a=parseInt(o.dataset.quantity),c=o.querySelector(".productName").textContent,s=o.querySelector(".productPrice").textContent,l=o.querySelector(".productImage").src;if(Q.find((function(n){return n.id===i})))r(i,a);else{var u={id:i,name:c,price:s,image:l,quantity:a.toString()};Q.push(u)}e()}})),document.getElementById("itemsCountDelete").addEventListener("click",(function(){Q=[],e()}))}(nn,tn)})();