!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={token:""};function o(e){var t=document.getElementById("kibiras");t.innerHTML="",t.append(e)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElement(e);for(var r in t)n.setAttribute(r,t[r]);for(var o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];return i.forEach((function(e){var t=document.createTextNode(e);n.append(t)})),n}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=i("form",{class:"form form-login",method:"POST"});return e.forEach((function(e){var t=i("input",e);t.addEventListener("change",(function(){e.value=t.value})),r.append(t)})),t.forEach((function(e){var t=i("button",e,e.title);r.append(t)})),r.addEventListener("submit",n),r}function u(){var e=i("main",{},"Main page");return fetch("http://rest.stecenka.lt/api/sveikinimai",{headers:{"Content-type":"application/json",Authorization:r.token}}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),e}function c(){return a(f,p,l)}function l(e){e.preventDefault();var t={};f.forEach((function(e){t[e.name]=e.value})),fetch("http://rest.stecenka.lt/login",{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json()})).then((function(e){e&&(localStorage.setItem("token",e),r.token="Bearer "+e,o(u()))}))}var f=[{class:"input input--white",placeholder:"Email",name:"email",type:"email"},{placeholder:"Password",name:"password",type:"password"}],p=[{type:"submit",name:"login",title:"Prisijungti"}];var s;(s=localStorage.getItem("token"))&&(r.token="Bearer "+s,1)?o(u()):o(c())}]);