(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(15),a(16),a(7)),u=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Seneca Words"))},s=a(6),i=s.b.div({enter:{opacity:1},exit:{opacity:0}}),m=function(e){return r.a.createElement(s.a,null,e.loaded&&[r.a.createElement(i,{key:"quote"},r.a.createElement("p",{className:"quote__text"},e.quote.message),r.a.createElement("p",{className:"quote__author"},"- ",e.quote.author))])},f=function(e){return r.a.createElement("section",{className:"quote"},r.a.createElement(m,{quote:e.quote,loaded:e.loaded}))},E=a(3),h=a(4),p=function(e){var t=e.quote,a=e.handleClick,n="https://twitter.com/intent/tweet?hashtags=stoics&related=quotes&text=".concat(t.message," - ").concat(t.author),o="whatsapp://send?text=".concat(t.message," - ").concat(t.author);return r.a.createElement("section",{className:"toolbar"},r.a.createElement("a",{href:n,className:"link link-twitter float-left",title:"tweet it!",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:E.b})),r.a.createElement("a",{href:o,className:"link link-whatsapp float-left",title:"Share to whatsapp!",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:E.c})),r.a.createElement("button",{className:"btn btn-get float-right",onClick:a},"Get Quote"))},d=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Learn coding at:")),r.a.createElement("span",null,r.a.createElement("a",{className:"link link-freeCodeCamp",href:"https://www.freecodecamp.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{icon:E.a})," freeCodeCamp.org")),r.a.createElement("small",{className:"copyright"},"2019\xa9Yosua Setyo Nugroho"))},g=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],m=s[1];Object(n.useEffect)(function(){E()},[]);var E=function(){fetch("https://seneca-words.glitch.me/api/quotes").then(function(e){return e.json()}).then(function(e){o(e),m(!0)}).catch(function(e){return console.error("Error: ",e)})};return r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement(f,{quote:a,loaded:i}),r.a.createElement(p,{quote:a,handleClick:function(){m(!1),E()}}),r.a.createElement(d,null))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cef73f63.chunk.js.map