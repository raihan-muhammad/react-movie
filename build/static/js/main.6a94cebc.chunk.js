(this["webpackJsonpbelajar-react"]=this["webpackJsonpbelajar-react"]||[]).push([[0],{40:function(e,a,t){e.exports=t(72)},45:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(16),l=t.n(c),o=(t(45),t(15)),i=t(73),s=t(74),m=t(75),u=t(76),p=t(77),d=t(78),h=t(79),E=t(80),v=t(85),f=t(84),b=t(86),g=t(81),w=t(82),x=function(e){var a=e.text,t=Object(n.useState)(!1),c=Object(o.a)(t,2),l=c[0],x=c[1];return r.a.createElement("div",null,r.a.createElement(i.a,{color:"light",light:!0,expand:"md"},r.a.createElement(s.a,null,r.a.createElement(m.a,{href:"/"},"MovieSearch"),r.a.createElement(u.a,{onClick:function(){return x(!l)}}),r.a.createElement(p.a,{isOpen:l,navbar:!0},r.a.createElement(d.a,{className:"mr-auto",navbar:!0},r.a.createElement(h.a,null,r.a.createElement(E.a,{href:"/components/"},a)),r.a.createElement(h.a,null,r.a.createElement(E.a,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")),r.a.createElement(v.a,{nav:!0,inNavbar:!0},r.a.createElement(f.a,{nav:!0,caret:!0},"Options"),r.a.createElement(b.a,{right:!0},r.a.createElement(g.a,null,"Option 1"),r.a.createElement(g.a,null,"Option 2"),r.a.createElement(g.a,{divider:!0}),r.a.createElement(g.a,null,"Reset")))),r.a.createElement(w.a,null,"Simple Text")))))},O=t(25),j=t.n(O),k=t(38),y=t(83),S=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],u=i[1],p=function(){var e=Object(k.a)(j.a.mark((function e(){var a,t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=86ff7111","&s=").concat(m));case 2:return a=e.sent,e.next=5,a.json();case 5:if(t=e.sent,console.log(t),n=document.getElementById("hasil"),void 0===t.Search){e.next=12;break}t.Search.map((function(e){n.innerHTML+='<div class="card mt-4">\n  <img src="'.concat(e.Poster,'" class="card-img-top" alt="...">\n  <div class="card-body">\n    <h5 class="card-title">').concat(e.Title,'</h5>\n    <p class="card-text">').concat(e.Year,'</p>\n    <a href="#" class="btn btn-primary">Go somewhere</a>\n  </div>\n</div>')})),e.next=13;break;case 12:return e.abrupt("return","Loading...");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(y.a,{type:"text",name:"cari",id:"cari",className:"mt-4",placeholder:"Cari Film",onKeyUp:function(e){u(e.target.value),c(!0),p()}}),!1!==t?r.a.createElement("section",{id:"hasil"}):null))};var B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{text:"Home"}),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(71);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a94cebc.chunk.js.map