"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[637],{3957:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",c=n(184),i=function(){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},2021:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"error img"})}},1748:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(3957),a=n(2982),c=n(885),i=n(2791),s=n(2449),o=n(3504),u=n(3394),l=n(2021),p=n(184),f=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],f=(0,i.useState)(!1),m=(0,c.Z)(f,2),d=m[0],h=m[1],v=(0,i.useState)(0),b=(0,c.Z)(v,2),g=b[0],x=b[1],y=(0,i.useState)(!1),j=(0,c.Z)(y,2),w=j[0],Z=j[1],k=(0,s.Z)(),_=k.loading,C=k.error,N=k.getAllComics;(0,i.useEffect)((function(){A(g,!0)}),[]);var A=function(t,e){h(!e),N(t).then(S)},S=function(t){var e=!1;t.length<8&&(e=!0),r([].concat((0,a.Z)(n),(0,a.Z)(t))),h(!1),x(g+8),Z(e)};var E=function(t){var e=t.map((function(t,e){return(0,p.jsx)("li",{className:"comics__item",children:(0,p.jsxs)(o.rU,{to:"/comics/".concat(t.id),children:[(0,p.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),(0,p.jsx)("div",{className:"comics__item-name",children:t.title}),(0,p.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return(0,p.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?(0,p.jsx)(l.Z,{}):null,O=_&&!d?(0,p.jsx)(u.Z,{}):null;return(0,p.jsxs)("div",{className:"comics__list",children:[T,O,E,(0,p.jsx)("button",{className:"btn btn__long",disabled:d,style:{display:w?"none":"block"},onClick:function(){return A(g)},children:(0,p.jsx)("div",{className:"inner",children:"LOAD MORE"})})]})},m=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.Z,{}),(0,p.jsx)(f,{})]})}},2449:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(5861),a=n(7757),c=n.n(a),i=n(885),s=n(2791),o=function(){var t=function(){var t=(0,s.useState)(!1),e=(0,i.Z)(t,2),n=e[0],a=e[1],o=(0,s.useState)(null),u=(0,i.Z)(o,2),l=u[0],p=u[1],f=(0,s.useCallback)(function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,i,s,o,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,i=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},a(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:r,headers:i});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,a(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),a(!1),p(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,error:l,request:f,clearError:(0,s.useCallback)((function(){return p(null)}),[])}}(),e=t.loading,n=t.error,a=t.request,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=3f1bbb88ac40ae60022fb40c97324675",p=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:210,t.next=3,a("".concat(u,"/characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(v));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:0,t.next=3,a("".concat(u,"/comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a("".concat(u,"/comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",b(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},b=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description for this comics",pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:n,clearError:o,getAllCharacters:p,getCharacter:m,getCharacterByName:f,getAllComics:d,getComic:h}}},2982:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(907);var a=n(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=637.478e2a4f.chunk.js.map