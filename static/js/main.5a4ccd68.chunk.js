(this.webpackJsonpbag_shop_ui=this.webpackJsonpbag_shop_ui||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),o=(n(14),n(2)),i=n(4),u=n(6),l=n(5),h=(n(15),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).showCatalogue=function(){},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"top-bar",children:[Object(h.jsx)("span",{className:"top-btn",children:"MAIN"}),Object(h.jsx)("span",{className:"top-btn",onClick:this.showCatalogue,children:"CATALOGUE"})]})}}]),n}(a.Component),m=(n(17),n(3)),d=n.n(m),b=n(7),j=function t(){var e=this;Object(o.a)(this,t),this._apiBase="http://127.0.0.1:8000/api/product/",this.getResource=function(){var t=Object(b.a)(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((n=t.sent).ok){t.next=5;break}throw new Error("Couldn't fetch ".concat(e,", status: ").concat(n.status));case 5:return t.next=7,n.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.getAllItems=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("".concat(e._apiBase));case 2:return n=t.sent,console.log(n),t.abrupt("return",n.data.results.map(e._transformItem));case 5:case"end":return t.stop()}}),t)}))),this.getItem=function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getResource("".concat(e._apiBase,"/").concat(n));case 2:return a=t.sent,t.abrupt("return",e._transformItem(a.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this._transformItem=function(t){return{id:t.id,product_name:t.product_name,description:t.description,thumbnail:t.thumbnail}}},f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={itemList:[]},t.bagService=new j,t.onItemListLoaded=function(e){t.setState({itemList:e}),console.log(e)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.bagService.getAllItems().then(this.onItemListLoaded),console.log("mounted")}},{key:"renderItems",value:function(t){var e=t.map((function(t){return Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("div",{className:"item__name",children:t.product_name}),Object(h.jsx)("div",{className:"item__description",children:t.description})]},t.id)}));return Object(h.jsx)("ul",{className:"item__grid",children:e})}},{key:"render",value:function(){var t=this.state.itemList,e=this.renderItems(t);return Object(h.jsxs)("div",{className:"item__list",children:[e,Object(h.jsx)("button",{className:"button",children:"LOAD MORE"})]})}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={showCatalogue:!0},t.toggleCatalogue=function(){t.setState((function(t){return{showCatalogue:!t.showCatalogue}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.showCatalogue?Object(h.jsx)(f,{}):null;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{}),t,t,t,t]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5a4ccd68.chunk.js.map