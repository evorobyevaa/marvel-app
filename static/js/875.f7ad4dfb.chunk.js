"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[875],{2021:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n.p+"static/media/error.42292aa12b6bc303ce99.gif",t=n(184),c=function(){return(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"error img"})}},3841:function(e,r,n){n.r(r),n.d(r,{default:function(){return E}});var a=n(885),t=n(2791),c=n(3394),s=n(2021),i=n(2449),l=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=n(184),u=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki;return(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{className:"randomchar__img",src:t,alt:"Random Character"}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:n}),(0,o.jsx)("p",{className:"randomchar__descr",children:a}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{className:"btn btn__main",href:c,children:(0,o.jsx)("div",{className:"inner",children:"HOMEPAGE"})}),(0,o.jsx)("a",{className:"btn btn__second",href:s,children:(0,o.jsx)("div",{className:"inner",children:"WIKI"})})]})]})]})},h=function(){var e=(0,t.useState)({}),r=(0,a.Z)(e,2),n=r[0],h=r[1],d=(0,i.Z)(),m=d.loading,f=d.error,p=d.getCharacter,x=d.clearError;(0,t.useEffect)((function(){v();var e=setInterval(v,6e4);return function(){clearInterval(e)}}),[]);var _=function(e){h(e)},v=function(){x();var e=Math.floor(400*Math.random()+1011e3);p(e).then(_)},j=f?(0,o.jsx)(s.Z,{}):null,b=m?(0,o.jsx)(c.Z,{}):null,N=m||f?null:(0,o.jsx)(u,{char:n});return(0,o.jsxs)("div",{className:"randomchar",children:[j,b,N,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today! ",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{className:"btn btn__main",onClick:v,children:(0,o.jsx)("div",{className:"inner",children:"TRY IT"})}),(0,o.jsx)("img",{className:"randomchar__decoration",src:l,alt:"Random Decoration"})]})]})},d=n(2982),m=function(e){var r=(0,t.useState)([]),n=(0,a.Z)(r,2),l=n[0],u=n[1],h=(0,t.useState)(!1),m=(0,a.Z)(h,2),f=m[0],p=m[1],x=(0,t.useState)(210),_=(0,a.Z)(x,2),v=_[0],j=_[1],b=(0,t.useState)(!1),N=(0,a.Z)(b,2),g=N[0],k=N[1],Z=(0,i.Z)(),y=Z.loading,w=Z.error,C=Z.getAllCharacters;(0,t.useEffect)((function(){E(v,!0)}),[]);var E=function(e,r){p(!r),C(e).then(S)},S=function(e){var r=!1;e.length<9&&(r=!0),u((function(r){return[].concat((0,d.Z)(r),(0,d.Z)(e))})),p((function(e){return!1})),j((function(e){return e+9})),k((function(e){return r}))},I=(0,t.useRef)([]),T=function(e){I.current.forEach((function(e){return e.classList.remove("char__item-selected")})),I.current[e].classList.add("char__item-selected"),I.current[e].focus()};var A=function(r){var n=r.map((function(r,n){return(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return I.current[n]=e},onClick:function(){e.onCharSelected(r.id),T(n)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(r.id),T(n))},children:[(0,o.jsx)("img",{className:"char__img",src:r.thumbnail,alt:r.name}),(0,o.jsx)("div",{className:"char__name",children:r.name})]},r.id)}));return(0,o.jsx)("ul",{className:"char__list",children:n})}(l),O=w?(0,o.jsx)(s.Z,{}):null,R=y&&!f?(0,o.jsx)(c.Z,{}):null;return(0,o.jsxs)("div",{className:"char__catalog",children:[O,R,A,(0,o.jsx)("button",{className:"btn btn__long",disabled:f,style:{display:g?"none":"block"},onClick:function(){return E(v)},children:(0,o.jsx)("div",{className:"inner",children:"LOAD MORE"})})]})},f=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},p=function(e){var r=e.char,n=r.name,a=r.description,t=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basic",children:[(0,o.jsx)("img",{className:"char__info-img",src:t,alt:n}),(0,o.jsxs)("div",{className:"char__wrapper",children:[(0,o.jsx)("p",{className:"char__info-name",children:n}),(0,o.jsxs)("div",{className:"char__info-btns",children:[(0,o.jsx)("a",{className:"btn btn__main",href:c,children:(0,o.jsx)("div",{className:"inner",children:"HOMEPAGE"})}),(0,o.jsx)("a",{className:"btn btn__second",href:s,children:(0,o.jsx)("div",{className:"inner",children:"WIKI"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:a}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics for this character",i.map((function(e,r){if(!(r>9))return(0,o.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},x=function(e){var r=(0,t.useState)(null),n=(0,a.Z)(r,2),l=n[0],u=n[1],h=(0,i.Z)(),d=h.loading,m=h.error,x=h.getCharacter,_=h.clearError;(0,t.useEffect)((function(){v()}),[e.charId]);var v=function(){_();var r=e.charId;r&&x(r).then(j)},j=function(e){u(e)},b=l||d||m?null:(0,o.jsx)(f,{}),N=m?(0,o.jsx)(s.Z,{}):null,g=d?(0,o.jsx)(c.Z,{}):null,k=d||m||!l?null:(0,o.jsx)(p,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[b,N,g,k]})},_=n(5705),v=n(132),j=n(3504),b=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],l=(0,i.Z)(),u=l.loading,h=l.error,d=l.getCharacterByName,m=l.clearError,f=function(e){c(e)},p=h?(0,o.jsx)("div",{className:"char__search-critical-error",children:(0,o.jsx)(s.Z,{})}):null,x=n?n.length>0?(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,o.jsx)(j.rU,{to:"/characters/".concat(n[0].id),className:"btn btn__second",children:(0,o.jsx)("div",{className:"inner",children:"To page"})})]}):(0,o.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,o.jsxs)("div",{className:"char__search-form",children:[(0,o.jsx)(_.J9,{initialValues:{charName:""},validationSchema:v.Ry({charName:v.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,m(),d(r).then(f)},children:(0,o.jsxs)(_.l0,{children:[(0,o.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,o.jsxs)("div",{className:"char__search-wrapper",children:[(0,o.jsx)(_.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,o.jsx)("button",{type:"submit",className:"btn btn__main",disabled:u,children:(0,o.jsx)("div",{className:"inner",children:"find"})})]}),(0,o.jsx)(_.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),x,p]})},N=n(5671),g=n(3144),k=n(136),Z=n(3668),y=function(e){(0,k.Z)(n,e);var r=(0,Z.Z)(n);function n(){var e;(0,N.Z)(this,n);for(var a=arguments.length,t=new Array(a),c=0;c<a;c++)t[c]=arguments[c];return(e=r.call.apply(r,[this].concat(t))).state={error:!1},e}return(0,g.Z)(n,[{key:"componentDidCatch",value:function(e,r){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)("h2",{children:(0,o.jsx)(s.Z,{})}):this.props.children}}]),n}(t.Component),w=y,C=n.p+"static/media/vision.067d4ae1936d64a577ce.png",E=function(){var e=(0,t.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(w,{children:(0,o.jsx)(h,{})}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(w,{children:(0,o.jsx)(m,{onCharSelected:function(e){c(e)}})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(w,{children:(0,o.jsx)(x,{charId:n})}),(0,o.jsx)(w,{children:(0,o.jsx)(b,{})})]})]}),(0,o.jsx)("img",{className:"main__decoration",src:C,alt:"vision"})]})}},2449:function(e,r,n){n.d(r,{Z:function(){return l}});var a=n(5861),t=n(7757),c=n.n(t),s=n(885),i=n(2791),l=function(){var e=function(){var e=(0,i.useState)(!1),r=(0,s.Z)(e,2),n=r[0],t=r[1],l=(0,i.useState)(null),o=(0,s.Z)(l,2),u=o[0],h=o[1],d=(0,i.useCallback)(function(){var e=(0,a.Z)(c().mark((function e(r){var n,a,s,i,l,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},t(!0),e.prev=4,e.next=7,fetch(r,{method:n,body:a,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return l=e.sent,t(!1),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(4),t(!1),h(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{loading:n,error:u,request:d,clearError:(0,i.useCallback)((function(){return h(null)}),[])}}(),r=e.loading,n=e.error,t=e.request,l=e.clearError,o="https://gateway.marvel.com:443/v1/public/",u="apikey=3f1bbb88ac40ae60022fb40c97324675",h=function(){var e=(0,a.Z)(c().mark((function e(){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,t("".concat(o,"/characters?limit=9&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(o,"characters?name=").concat(r,"&").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(o,"characters/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",x(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(c().mark((function e(){var r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,t("".concat(o,"/comics?limit=8&offset=").concat(r,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(_));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(o,"/comics/").concat(r,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",_(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},_=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description for this comics",pageCount:e.pageCount?"".concat(e.pageCount," pages"):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:r,error:n,clearError:l,getAllCharacters:h,getCharacter:m,getCharacterByName:d,getAllComics:f,getComic:p}}}}]);
//# sourceMappingURL=875.f7ad4dfb.chunk.js.map