!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.querySelector(".overlay"),document.querySelector("#section--1");var r=document.querySelector(".nav"),n=document.querySelector(".header"),o=(r.getBoundingClientRect().height,n.offsetTop);window.onscroll=function(){window.pageYOffset>=o?n.classList.add("sticky"):n.classList.remove("sticky")};var a=document.querySelectorAll(".section"),i=new IntersectionObserver((function(e,r){var n=t(e,1)[0];n.isIntersecting&&(n.target.classList.remove("section--hidden"),r.unobserve(n.target))}),{root:null,threshold:.15});a.forEach((function(t){i.observe(t),t.classList.add("section--hidden")}));var c=document.querySelectorAll("img[data-src]"),s=new IntersectionObserver((function(e,r){var n=t(e,1)[0];n.isIntersecting&&(n.target.src=n.target.dataset.src,n.target.addEventListener("load",(function(){n.target.classList.remove("lazy-img")})),r.unobserve(n.target))}),{root:null,threshold:0,rootMargin:"200px"});c.forEach((function(t){return s.observe(t)}))}();
//# sourceMappingURL=index.2148810e.js.map