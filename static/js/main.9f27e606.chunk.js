(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(5),i=n(1),b=n(4),r=n.n(b),d=(n(10),n(0)),l=function(t){var e=t.tabs,n=t.selectedTabId,a=t.handleTab,c=e.find((function(t){return t.id===n}));return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("div",{className:"tabs__buttons",children:e.map((function(t){return Object(d.jsx)("button",{type:"button",className:r()("tabs__tab",{"tabs__tab--selected":t.id===n}),onClick:function(){return a(t)},children:t.title},t.id)}))}),c&&Object(d.jsx)("p",{className:"tabs__content",children:c.content})]})},o=(n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=o.length>0?o[0]:null,u=function(){var t=Object(i.useState)(j),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(d.jsx)("div",{className:"app",children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{className:"app__header",children:["Selected tab is \xa0",n.title]}),Object(d.jsx)(l,{tabs:o,selectedTabId:n.id,handleTab:function(t){n&&t.id!==n.id&&a(t)}})]}):Object(d.jsx)("p",{children:"Invalid array from server"})})};c.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9f27e606.chunk.js.map