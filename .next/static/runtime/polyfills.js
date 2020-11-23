(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/polyfills.js"],{

/***/ "./node_modules/@next/polyfill-nomodule/dist/polyfill-nomodule.js":
/*!************************************************************************!*\
  !*** ./node_modules/@next/polyfill-nomodule/dist/polyfill-nomodule.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate, console) {!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),r=e(function(t){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)}),o=function(t){return"object"==typeof t?null!==t:"function"==typeof t},i=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t},a=function(t){try{return!!t()}catch(t){return!0}},u=!a(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),c=n.document,f=o(c)&&o(c.createElement),s=function(t){return f?c.createElement(t):{}},l=!u&&!a(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}),h=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},p=Object.defineProperty,d={f:u?Object.defineProperty:function(t,e,n){if(i(t),e=h(e,!0),i(n),l)try{return p(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y=u?function(t,e,n){return d.f(t,e,v(1,n))}:function(t,e,n){return t[e]=n,t},g={}.hasOwnProperty,b=function(t,e){return g.call(t,e)},m=0,_=Math.random(),w=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++m+_).toString(36))},S=e(function(t){var e=n["__core-js_shared__"]||(n["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),E=S("native-function-to-string",Function.toString),O=e(function(t){var e=w("src"),o=(""+E).split("toString");r.inspectSource=function(t){return E.call(t)},(t.exports=function(t,r,i,a){var u="function"==typeof i;u&&(b(i,"name")||y(i,"name",r)),t[r]!==i&&(u&&(b(i,e)||y(i,e,t[r]?""+t[r]:o.join(String(r)))),t===n?t[r]=i:a?t[r]?t[r]=i:y(t,r,i):(delete t[r],y(t,r,i)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||E.call(this)})}),j=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},x=function(t,e,n){if(j(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},P=function(t,e,o){var i,a,u,c,f=t&P.F,s=t&P.G,l=t&P.P,h=t&P.B,p=s?n:t&P.S?n[e]||(n[e]={}):(n[e]||{}).prototype,d=s?r:r[e]||(r[e]={}),v=d.prototype||(d.prototype={});for(i in s&&(o=e),o)u=((a=!f&&p&&void 0!==p[i])?p:o)[i],c=h&&a?x(u,n):l&&"function"==typeof u?x(Function.call,u):u,p&&O(p,i,u,t&P.U),d[i]!=u&&y(d,i,c),l&&v[i]!=u&&(v[i]=u)};n.core=r,P.F=1,P.G=2,P.S=4,P.P=8,P.B=16,P.W=32,P.U=64,P.R=128;var A=P,R=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},I=function(t){return Object(R(t))},T=Math.ceil,F=Math.floor,N=function(t){return isNaN(t=+t)?0:(t>0?F:T)(t)},k=Math.max,U=Math.min,M=function(t,e){return(t=N(t))<0?k(t+e,0):U(t,e)},B=Math.min,C=function(t){return t>0?B(N(t),9007199254740991):0},L=[].copyWithin||function(t,e){var n=I(this),r=C(n.length),o=M(t,r),i=M(e,r),a=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===a?r:M(a,r))-i,r-o),c=1;for(i<o&&o<i+u&&(c=-1,i+=u-1,o+=u-1);u-- >0;)i in n?n[o]=n[i]:delete n[o],o+=c,i+=c;return n},D=e(function(t){var e=S("wks"),r=n.Symbol,o="function"==typeof r;(t.exports=function(t){return e[t]||(e[t]=o&&r[t]||(o?r:w)("Symbol."+t))}).store=e}),W=D("unscopables"),G=Array.prototype;null==G[W]&&y(G,W,{});var q=function(t){G[W][t]=!0};A(A.P,"Array",{copyWithin:L}),q("copyWithin"),A(A.P,"Array",{fill:function(t){for(var e=I(this),n=C(e.length),r=arguments.length,o=M(r>1?arguments[1]:void 0,n),i=r>2?arguments[2]:void 0,a=void 0===i?n:M(i,n);a>o;)e[o++]=t;return e}}),q("fill");var $={}.toString,H=function(t){return $.call(t).slice(8,-1)},K=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==H(t)?t.split(""):Object(t)},V=Array.isArray||function(t){return"Array"==H(t)},X=D("species"),z=function(t,e){return new(function(t){var e;return V(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!V(e.prototype)||(e=void 0),o(e)&&null===(e=e[X])&&(e=void 0)),void 0===e?Array:e}(t))(e)},J=function(t,e){var n=1==t,r=2==t,o=3==t,i=4==t,a=6==t,u=5==t||a,c=e||z;return function(e,f,s){for(var l,h,p=I(e),d=K(p),v=x(f,s,3),y=C(d.length),g=0,b=n?c(e,y):r?c(e,0):void 0;y>g;g++)if((u||g in d)&&(h=v(l=d[g],g,p),t))if(n)b[g]=h;else if(h)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:b.push(l)}else if(i)return!1;return a?-1:o||i?i:b}},Y=J(5),Q=!0;"find"in[]&&Array(1).find(function(){Q=!1}),A(A.P+A.F*Q,"Array",{find:function(t){return Y(this,t,arguments.length>1?arguments[1]:void 0)}}),q("find");var Z=J(6),tt=!0;"findIndex"in[]&&Array(1).findIndex(function(){tt=!1}),A(A.P+A.F*tt,"Array",{findIndex:function(t){return Z(this,t,arguments.length>1?arguments[1]:void 0)}}),q("findIndex");var et=D("isConcatSpreadable");A(A.P,"Array",{flatMap:function(t){var e,n,r=I(this);return j(t),e=C(r.length),function t(e,n,r,i,a,u,c,f){for(var s,l,h=a,p=0,d=!!c&&x(c,f,3);p<i;){if(p in r){if(s=d?d(r[p],p,n):r[p],l=!1,o(s)&&(l=void 0!==(l=s[et])?!!l:V(s)),l&&u>0)h=t(e,n,s,C(s.length),h,u-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=s}h++}p++}return h}(n=z(r,0),r,r,e,0,1,t,arguments[1]),n}}),q("flatMap");var nt=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}},rt={},ot=D("iterator"),it=Array.prototype,at=function(t){return void 0!==t&&(rt.Array===t||it[ot]===t)},ut=function(t,e,n){e in t?d.f(t,e,v(0,n)):t[e]=n},ct=D("toStringTag"),ft="Arguments"==H(function(){return arguments}()),st=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),ct))?n:ft?H(e):"Object"==(r=H(e))&&"function"==typeof e.callee?"Arguments":r},lt=D("iterator"),ht=r.getIteratorMethod=function(t){if(null!=t)return t[lt]||t["@@iterator"]||rt[st(t)]},pt=D("iterator"),dt=!1;try{[7][pt]().return=function(){dt=!0}}catch(t){}var vt=function(t,e){if(!e&&!dt)return!1;var n=!1;try{var r=[7],o=r[pt]();o.next=function(){return{done:n=!0}},r[pt]=function(){return o},t(r)}catch(t){}return n};A(A.S+A.F*!vt(function(t){}),"Array",{from:function(t){var e,n,r,o,i=I(t),a="function"==typeof this?this:Array,u=arguments.length,c=u>1?arguments[1]:void 0,f=void 0!==c,s=0,l=ht(i);if(f&&(c=x(c,u>2?arguments[2]:void 0,2)),null==l||a==Array&&at(l))for(n=new a(e=C(i.length));e>s;s++)ut(n,s,f?c(i[s],s):i[s]);else for(o=l.call(i),n=new a;!(r=o.next()).done;s++)ut(n,s,f?nt(o,c,[r.value,s],!0):r.value);return n.length=s,n}});var yt=function(t){return K(R(t))},gt=function(t){return function(e,n,r){var o,i=yt(e),a=C(i.length),u=M(r,a);if(t&&n!=n){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},bt=gt(!0);A(A.P,"Array",{includes:function(t){return bt(this,t,arguments.length>1?arguments[1]:void 0)}}),q("includes");var mt=function(t,e){return{value:e,done:!!t}},_t=S("keys"),wt=function(t){return _t[t]||(_t[t]=w(t))},St=gt(!1),Et=wt("IE_PROTO"),Ot=function(t,e){var n,r=yt(t),o=0,i=[];for(n in r)n!=Et&&b(r,n)&&i.push(n);for(;e.length>o;)b(r,n=e[o++])&&(~St(i,n)||i.push(n));return i},jt="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),xt=Object.keys||function(t){return Ot(t,jt)},Pt=u?Object.defineProperties:function(t,e){i(t);for(var n,r=xt(e),o=r.length,a=0;o>a;)d.f(t,n=r[a++],e[n]);return t},At=n.document,Rt=At&&At.documentElement,It=wt("IE_PROTO"),Tt=function(){},Ft=function(){var t,e=s("iframe"),n=jt.length;for(e.style.display="none",Rt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Ft=t.F;n--;)delete Ft.prototype[jt[n]];return Ft()},Nt=Object.create||function(t,e){var n;return null!==t?(Tt.prototype=i(t),n=new Tt,Tt.prototype=null,n[It]=t):n=Ft(),void 0===e?n:Pt(n,e)},kt=d.f,Ut=D("toStringTag"),Mt=function(t,e,n){t&&!b(t=n?t:t.prototype,Ut)&&kt(t,Ut,{configurable:!0,value:e})},Bt={};y(Bt,D("iterator"),function(){return this});var Ct=function(t,e,n){t.prototype=Nt(Bt,{next:v(1,n)}),Mt(t,e+" Iterator")},Lt=wt("IE_PROTO"),Dt=Object.prototype,Wt=Object.getPrototypeOf||function(t){return t=I(t),b(t,Lt)?t[Lt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Dt:null},Gt=D("iterator"),qt=!([].keys&&"next"in[].keys()),$t=function(){return this},Ht=function(t,e,n,r,o,i,a){Ct(n,e,r);var u,c,f,s=function(t){if(!qt&&t in d)return d[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},l=e+" Iterator",h="values"==o,p=!1,d=t.prototype,v=d[Gt]||d["@@iterator"]||o&&d[o],g=v||s(o),b=o?h?s("entries"):g:void 0,m="Array"==e&&d.entries||v;if(m&&(f=Wt(m.call(new t)))!==Object.prototype&&f.next&&(Mt(f,l,!0),"function"!=typeof f[Gt]&&y(f,Gt,$t)),h&&v&&"values"!==v.name&&(p=!0,g=function(){return v.call(this)}),(qt||p||!d[Gt])&&y(d,Gt,g),rt[e]=g,rt[l]=$t,o)if(u={values:h?g:s("values"),keys:i?g:s("keys"),entries:b},a)for(c in u)c in d||O(d,c,u[c]);else A(A.P+A.F*(qt||p),e,u);return u};Ht(Array,"Array",function(t,e){this._t=yt(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,mt(1)):mt(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),rt.Arguments=rt.Array,q("keys"),q("values"),q("entries"),A(A.S+A.F*a(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=arguments,e=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>e;)ut(r,e,t[e++]);return r.length=n,r}});var Kt=D("species"),Vt=function(t){var e=n[t];u&&e&&!e[Kt]&&d.f(e,Kt,{configurable:!0,get:function(){return this}})};Vt("Array");var Xt=D("hasInstance"),zt=Function.prototype;Xt in zt||d.f(zt,Xt,{value:function(t){if("function"!=typeof this||!o(t))return!1;if(!o(this.prototype))return t instanceof this;for(;t=Wt(t);)if(this.prototype===t)return!0;return!1}});var Jt=function(t,e,n){for(var r in e)O(t,r,e[r],n);return t},Yt=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t},Qt=e(function(t){var e={},n={},r=t.exports=function(t,r,o,a,u){var c,f,s,l,h=u?function(){return t}:ht(t),p=x(o,a,r?2:1),d=0;if("function"!=typeof h)throw TypeError(t+" is not iterable!");if(at(h)){for(c=C(t.length);c>d;d++)if((l=r?p(i(f=t[d])[0],f[1]):p(t[d]))===e||l===n)return l}else for(s=h.call(t);!(f=s.next()).done;)if((l=nt(s,p,f.value,r))===e||l===n)return l};r.BREAK=e,r.RETURN=n}),Zt=e(function(t){var e=w("meta"),n=d.f,r=0,i=Object.isExtensible||function(){return!0},u=!a(function(){return i(Object.preventExtensions({}))}),c=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}})},f=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!b(t,e)){if(!i(t))return"F";if(!n)return"E";c(t)}return t[e].i},getWeak:function(t,n){if(!b(t,e)){if(!i(t))return!0;if(!n)return!1;c(t)}return t[e].w},onFreeze:function(t){return u&&f.NEED&&i(t)&&!b(t,e)&&c(t),t}}}),te=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t},ee=d.f,ne=Zt.fastKey,re=u?"_s":"size",oe=function(t,e){var n,r=ne(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n},ie={getConstructor:function(t,e,n,r){var o=t(function(t,i){Yt(t,o,e,"_i"),t._t=e,t._i=Nt(null),t._f=void 0,t._l=void 0,t[re]=0,null!=i&&Qt(i,n,t[r],t)});return Jt(o.prototype,{clear:function(){for(var t=te(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[re]=0},delete:function(t){var n=te(this,e),r=oe(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[re]--}return!!r},forEach:function(t){te(this,e);for(var n,r=x(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!oe(te(this,e),t)}}),u&&ee(o.prototype,"size",{get:function(){return te(this,e)[re]}}),o},def:function(t,e,n){var r,o,i=oe(t,e);return i?i.v=n:(t._l=i={i:o=ne(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[re]++,"F"!==o&&(t._i[o]=i)),t},getEntry:oe,setStrong:function(t,e,n){Ht(t,e,function(t,n){this._t=te(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?mt(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,mt(1))},n?"entries":"values",!n,!0),Vt(e)}},ae={f:{}.propertyIsEnumerable},ue=Object.getOwnPropertyDescriptor,ce={f:u?ue:function(t,e){if(t=yt(t),e=h(e,!0),l)try{return ue(t,e)}catch(t){}if(b(t,e))return v(!ae.f.call(t,e),t[e])}},fe=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},se={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=x(Function.call,ce.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return fe(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:fe},le=se.set,he=function(t,e,n){var r,i=e.constructor;return i!==n&&"function"==typeof i&&(r=i.prototype)!==n.prototype&&o(r)&&le&&le(t,r),t},pe=function(t,e,r,i,u,c){var f=n[t],s=f,l=u?"set":"add",h=s&&s.prototype,p={},d=function(t){var e=h[t];O(h,t,"delete"==t?function(t){return!(c&&!o(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(c&&!o(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return c&&!o(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof s&&(c||h.forEach&&!a(function(){(new s).entries().next()}))){var v=new s,y=v[l](c?{}:-0,1)!=v,g=a(function(){v.has(1)}),b=vt(function(t){new s(t)}),m=!c&&a(function(){for(var t=new s,e=5;e--;)t[l](e,e);return!t.has(-0)});b||((s=e(function(e,n){Yt(e,s,t);var r=he(new f,e,s);return null!=n&&Qt(n,u,r[l],r),r})).prototype=h,h.constructor=s),(g||m)&&(d("delete"),d("has"),u&&d("get")),(m||y)&&d(l),c&&h.clear&&delete h.clear}else s=i.getConstructor(e,t,u,l),Jt(s.prototype,r),Zt.NEED=!0;return Mt(s,t),p[t]=s,A(A.G+A.W+A.F*(s!=f),p),c||i.setStrong(s,t,u),s},de=(pe("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=ie.getEntry(te(this,"Map"),t);return e&&e.v},set:function(t,e){return ie.def(te(this,"Map"),0===t?0:t,e)}},ie,!0),jt.concat("length","prototype")),ve={f:Object.getOwnPropertyNames||function(t){return Ot(t,de)}},ye="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",ge="["+ye+"]",be=RegExp("^"+ge+ge+"*"),me=RegExp(ge+ge+"*$"),_e=function(t,e,n){var r={},o=a(function(){return!!ye[t]()||"​"!="​"[t]()}),i=r[t]=o?e(we):ye[t];n&&(r[n]=i),A(A.P+A.F*o,"String",r)},we=_e.trim=function(t,e){return t=String(R(t)),1&e&&(t=t.replace(be,"")),2&e&&(t=t.replace(me,"")),t},Se=_e,Ee=ve.f,Oe=ce.f,je=d.f,xe=Se.trim,Pe=n.Number,Ae=Pe,Re=Pe.prototype,Ie="Number"==H(Nt(Re)),Te="trim"in String.prototype,Fe=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,i=(e=Te?e.trim():xe(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var a,u=e.slice(2),c=0,f=u.length;c<f;c++)if((a=u.charCodeAt(c))<48||a>o)return NaN;return parseInt(u,r)}}return+e};if(!Pe(" 0o1")||!Pe("0b1")||Pe("+0x1")){Pe=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Pe&&(Ie?a(function(){Re.valueOf.call(n)}):"Number"!=H(n))?he(new Ae(Fe(e)),n,Pe):Fe(e)};for(var Ne,ke=u?Ee(Ae):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Ue=0;ke.length>Ue;Ue++)b(Ae,Ne=ke[Ue])&&!b(Pe,Ne)&&je(Pe,Ne,Oe(Ae,Ne));Pe.prototype=Re,Re.constructor=Pe,O(n,"Number",Pe)}A(A.S,"Number",{EPSILON:Math.pow(2,-52)});var Me=n.isFinite;A(A.S,"Number",{isFinite:function(t){return"number"==typeof t&&Me(t)}});var Be=Math.floor,Ce=function(t){return!o(t)&&isFinite(t)&&Be(t)===t};A(A.S,"Number",{isInteger:Ce}),A(A.S,"Number",{isNaN:function(t){return t!=t}});var Le=Math.abs;A(A.S,"Number",{isSafeInteger:function(t){return Ce(t)&&Le(t)<=9007199254740991}}),A(A.S,"Number",{MAX_SAFE_INTEGER:9007199254740991}),A(A.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991});var De=ae.f,We=function(t){return function(e){for(var n,r=yt(e),o=xt(r),i=o.length,a=0,c=[];i>a;)n=o[a++],u&&!De.call(r,n)||c.push(t?[n,r[n]]:r[n]);return c}},Ge=We(!0);A(A.S,"Object",{entries:function(t){return Ge(t)}});var qe={f:Object.getOwnPropertySymbols},$e=n.Reflect,He=$e&&$e.ownKeys||function(t){var e=ve.f(i(t)),n=qe.f;return n?e.concat(n(t)):e};A(A.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=yt(t),o=ce.f,i=He(r),a={},u=0;i.length>u;)void 0!==(n=o(r,e=i[u++]))&&ut(a,e,n);return a}});var Ke=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};A(A.S,"Object",{is:Ke});var Ve=We(!1);A(A.S,"Object",{values:function(t){return Ve(t)}});var Xe=(n.Reflect||{}).apply,ze=Function.apply;A(A.S+A.F*!a(function(){Xe(function(){})}),"Reflect",{apply:function(t,e,n){var r=j(t),o=i(n);return Xe?Xe(r,e,o):ze.call(r,e,o)}});var Je=[].slice,Ye={},Qe=Function.bind||function(t){var e=j(this),n=Je.call(arguments,1),r=function(){var o=n.concat(Je.call(arguments));return this instanceof r?function(t,e,n){if(!(e in Ye)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";Ye[e]=Function("F,a","return new F("+r.join(",")+")")}return Ye[e](t,n)}(e,o.length,o):function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}(e,o,t)};return o(e.prototype)&&(r.prototype=e.prototype),r},Ze=(n.Reflect||{}).construct,tn=a(function(){function t(){}return!(Ze(function(){},[],t)instanceof t)}),en=!a(function(){Ze(function(){})});A(A.S+A.F*(tn||en),"Reflect",{construct:function(t,e){j(t),i(e);var n=arguments.length<3?t:j(arguments[2]);if(en&&!tn)return Ze(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(Qe.apply(t,r))}var a=n.prototype,u=Nt(o(a)?a:Object.prototype),c=Function.apply.call(t,u,e);return o(c)?c:u}}),A(A.S+A.F*a(function(){Reflect.defineProperty(d.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,e,n){i(t),e=h(e,!0),i(n);try{return d.f(t,e,n),!0}catch(t){return!1}}});var nn=ce.f;A(A.S,"Reflect",{deleteProperty:function(t,e){var n=nn(i(t),e);return!(n&&!n.configurable)&&delete t[e]}}),A(A.S,"Reflect",{get:function t(e,n){var r,a,u=arguments.length<3?e:arguments[2];return i(e)===u?e[n]:(r=ce.f(e,n))?b(r,"value")?r.value:void 0!==r.get?r.get.call(u):void 0:o(a=Wt(e))?t(a,n,u):void 0}}),A(A.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return ce.f(i(t),e)}}),A(A.S,"Reflect",{getPrototypeOf:function(t){return Wt(i(t))}}),A(A.S,"Reflect",{has:function(t,e){return e in t}});var rn=Object.isExtensible;A(A.S,"Reflect",{isExtensible:function(t){return i(t),!rn||rn(t)}}),A(A.S,"Reflect",{ownKeys:He});var on=Object.preventExtensions;A(A.S,"Reflect",{preventExtensions:function(t){i(t);try{return on&&on(t),!0}catch(t){return!1}}}),A(A.S,"Reflect",{set:function t(e,n,r){var a,u,c=arguments.length<4?e:arguments[3],f=ce.f(i(e),n);if(!f){if(o(u=Wt(e)))return t(u,n,r,c);f=v(0)}if(b(f,"value")){if(!1===f.writable||!o(c))return!1;if(a=ce.f(c,n)){if(a.get||a.set||!1===a.writable)return!1;a.value=r,d.f(c,n,a)}else d.f(c,n,v(0,r));return!0}return void 0!==f.set&&(f.set.call(c,r),!0)}}),se&&A(A.S,"Reflect",{setPrototypeOf:function(t,e){se.check(t,e);try{return se.set(t,e),!0}catch(t){return!1}}});var an=D("match"),un=function(t){var e;return o(t)&&(void 0!==(e=t[an])?!!e:"RegExp"==H(t))},cn=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},fn=d.f,sn=ve.f,ln=n.RegExp,hn=ln,pn=ln.prototype,dn=/a/g,vn=/a/g,yn=new ln(dn)!==dn;if(u&&(!yn||a(function(){return vn[D("match")]=!1,ln(dn)!=dn||ln(vn)==vn||"/a/i"!=ln(dn,"i")}))){ln=function(t,e){var n=this instanceof ln,r=un(t),o=void 0===e;return!n&&r&&t.constructor===ln&&o?t:he(yn?new hn(r&&!o?t.source:t,e):hn((r=t instanceof ln)?t.source:t,r&&o?cn.call(t):e),n?this:pn,ln)};for(var gn=function(t){t in ln||fn(ln,t,{configurable:!0,get:function(){return hn[t]},set:function(e){hn[t]=e}})},bn=sn(hn),mn=0;bn.length>mn;)gn(bn[mn++]);pn.constructor=ln,ln.prototype=pn,O(n,"RegExp",ln)}Vt("RegExp"),u&&"g"!=/./g.flags&&d.f(RegExp.prototype,"flags",{configurable:!0,get:cn});var _n=function(t){return function(e,n){var r,o,i=String(R(e)),a=N(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},wn=_n(!0),Sn=function(t,e,n){return e+(n?wn(t,e).length:1)},En=RegExp.prototype.exec,On=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==st(t))throw new TypeError("RegExp#exec called on incompatible receiver");return En.call(t,e)},jn=RegExp.prototype.exec,xn=String.prototype.replace,Pn=jn,An=function(){var t=/a/,e=/b*/g;return jn.call(t,"a"),jn.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),Rn=void 0!==/()??/.exec("")[1];(An||Rn)&&(Pn=function(t){var e,n,r,o,i=this;return Rn&&(n=new RegExp("^"+i.source+"$(?!\\s)",cn.call(i))),An&&(e=i.lastIndex),r=jn.call(i,t),An&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Rn&&r&&r.length>1&&xn.call(r[0],n,function(){var t=arguments;for(o=1;o<arguments.length-2;o++)void 0===t[o]&&(r[o]=void 0)}),r});var In=Pn;A({target:"RegExp",proto:!0,forced:In!==/./.exec},{exec:In});var Tn=D("species"),Fn=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Nn=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}(),kn=function(t,e,n){var r=D(t),o=!a(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)}),i=o?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[Tn]=function(){return n}),n[r](""),!e}):void 0;if(!o||!i||"replace"===t&&!Fn||"split"===t&&!Nn){var u=/./[r],c=n(R,r,""[t],function(t,e,n,r,i){return e.exec===In?o&&!i?{done:!0,value:u.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),f=c[1];O(String.prototype,t,c[0]),y(RegExp.prototype,r,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}};kn("match",1,function(t,e,n,r){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=i(t),a=String(this);if(!o.global)return On(o,a);var u=o.unicode;o.lastIndex=0;for(var c,f=[],s=0;null!==(c=On(o,a));){var l=String(c[0]);f[s]=l,""===l&&(o.lastIndex=Sn(a,C(o.lastIndex),u)),s++}return 0===s?null:f}]});var Un=Math.max,Mn=Math.min,Bn=Math.floor,Cn=/\$([$&`']|\d\d?|<[^>]*>)/g,Ln=/\$([$&`']|\d\d?)/g;kn("replace",2,function(t,e,n,r){return[function(r,o){var i=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,i,o):n.call(String(i),r,o)},function(t,e){var a=r(n,t,this,e);if(a.done)return a.value;var u=i(t),c=String(this),f="function"==typeof e;f||(e=String(e));var s=u.global;if(s){var l=u.unicode;u.lastIndex=0}for(var h=[];;){var p=On(u,c);if(null===p)break;if(h.push(p),!s)break;""===String(p[0])&&(u.lastIndex=Sn(c,C(u.lastIndex),l))}for(var d,v="",y=0,g=0;g<h.length;g++){p=h[g];for(var b=String(p[0]),m=Un(Mn(N(p.index),c.length),0),_=[],w=1;w<p.length;w++)_.push(void 0===(d=p[w])?d:String(d));var S=p.groups;if(f){var E=[b].concat(_,m,c);void 0!==S&&E.push(S);var O=String(e.apply(void 0,E))}else O=o(b,c,m,_,S,e);m>=y&&(v+=c.slice(y,m)+O,y=m+b.length)}return v+c.slice(y)}];function o(t,e,r,o,i,a){var u=r+t.length,c=o.length,f=Ln;return void 0!==i&&(i=I(i),f=Cn),n.call(a,f,function(n,a){var f;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":f=i[a.slice(1,-1)];break;default:var s=+a;if(0===s)return n;if(s>c){var l=Bn(s/10);return 0===l?n:l<=c?void 0===o[l-1]?a.charAt(1):o[l-1]+a.charAt(1):n}f=o[s-1]}return void 0===f?"":f})}});var Dn=D("species"),Wn=Math.min,Gn=[].push,qn=!a(function(){});kn("split",2,function(t,e,n,r){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!un(t))return n.call(r,t,e);for(var o,i,a,u=[],c=0,f=void 0===e?4294967295:e>>>0,s=new RegExp(t.source,(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":"")+"g");(o=In.call(s,r))&&!((i=s.lastIndex)>c&&(u.push(r.slice(c,o.index)),o.length>1&&o.index<r.length&&Gn.apply(u,o.slice(1)),a=o[0].length,c=i,u.length>=f));)s.lastIndex===o.index&&s.lastIndex++;return c===r.length?!a&&s.test("")||u.push(""):u.push(r.slice(c)),u.length>f?u.slice(0,f):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):o.call(String(i),n,r)},function(t,e){var a=r(o,t,this,e,o!==n);if(a.done)return a.value;var u=i(t),c=String(this),f=function(t,e){var n,r=i(u).constructor;return void 0===r||null==(n=i(r)[Dn])?e:j(n)}(0,RegExp),s=u.unicode,l=new f(qn?u:"^(?:"+u.source+")",(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(qn?"y":"g")),h=void 0===e?4294967295:e>>>0;if(0===h)return[];if(0===c.length)return null===On(l,c)?[c]:[];for(var p=0,d=0,v=[];d<c.length;){l.lastIndex=qn?d:0;var y,g=On(l,qn?c:c.slice(d));if(null===g||(y=Wn(C(l.lastIndex+(qn?0:d)),c.length))===p)d=Sn(c,d,s);else{if(v.push(c.slice(p,d)),v.length===h)return v;for(var b=1;b<=g.length-1;b++)if(v.push(g[b]),v.length===h)return v;d=p=y}}return v.push(c.slice(p)),v}]}),kn("search",1,function(t,e,n,r){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=i(t),a=String(this),u=o.lastIndex;Ke(u,0)||(o.lastIndex=0);var c=On(o,a);return Ke(o.lastIndex,u)||(o.lastIndex=u),null===c?-1:c.index}]}),pe("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return ie.def(te(this,"Set"),t=0===t?0:t,t)}},ie);var $n={f:D},Hn=d.f,Kn=function(t){var e=r.Symbol||(r.Symbol=n.Symbol||{});"_"==t.charAt(0)||t in e||Hn(e,t,{value:$n.f(t)})},Vn=ve.f,Xn={}.toString,zn="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Jn={f:function(t){return zn&&"[object Window]"==Xn.call(t)?function(t){try{return Vn(t)}catch(t){return zn.slice()}}(t):Vn(yt(t))}},Yn=Zt.KEY,Qn=ce.f,Zn=d.f,tr=Jn.f,er=n.Symbol,nr=n.JSON,rr=nr&&nr.stringify,or=D("_hidden"),ir=D("toPrimitive"),ar={}.propertyIsEnumerable,ur=S("symbol-registry"),cr=S("symbols"),fr=S("op-symbols"),sr=Object.prototype,lr="function"==typeof er&&!!qe.f,hr=n.QObject,pr=!hr||!hr.prototype||!hr.prototype.findChild,dr=u&&a(function(){return 7!=Nt(Zn({},"a",{get:function(){return Zn(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=Qn(sr,e);r&&delete sr[e],Zn(t,e,n),r&&t!==sr&&Zn(sr,e,r)}:Zn,vr=function(t){var e=cr[t]=Nt(er.prototype);return e._k=t,e},yr=lr&&"symbol"==typeof er.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof er},gr=function(t,e,n){return t===sr&&gr(fr,e,n),i(t),e=h(e,!0),i(n),b(cr,e)?(n.enumerable?(b(t,or)&&t[or][e]&&(t[or][e]=!1),n=Nt(n,{enumerable:v(0,!1)})):(b(t,or)||Zn(t,or,v(1,{})),t[or][e]=!0),dr(t,e,n)):Zn(t,e,n)},br=function(t,e){i(t);for(var n,r=function(t){var e=xt(t),n=qe.f;if(n)for(var r,o=n(t),i=ae.f,a=0;o.length>a;)i.call(t,r=o[a++])&&e.push(r);return e}(e=yt(e)),o=0,a=r.length;a>o;)gr(t,n=r[o++],e[n]);return t},mr=function(t){var e=ar.call(this,t=h(t,!0));return!(this===sr&&b(cr,t)&&!b(fr,t))&&(!(e||!b(this,t)||!b(cr,t)||b(this,or)&&this[or][t])||e)},_r=function(t,e){if(t=yt(t),e=h(e,!0),t!==sr||!b(cr,e)||b(fr,e)){var n=Qn(t,e);return!n||!b(cr,e)||b(t,or)&&t[or][e]||(n.enumerable=!0),n}},wr=function(t){for(var e,n=tr(yt(t)),r=[],o=0;n.length>o;)b(cr,e=n[o++])||e==or||e==Yn||r.push(e);return r},Sr=function(t){for(var e,n=t===sr,r=tr(n?fr:yt(t)),o=[],i=0;r.length>i;)!b(cr,e=r[i++])||n&&!b(sr,e)||o.push(cr[e]);return o};lr||(O((er=function(){if(this instanceof er)throw TypeError("Symbol is not a constructor!");var t=w(arguments.length>0?arguments[0]:void 0),e=function(n){this===sr&&e.call(fr,n),b(this,or)&&b(this[or],t)&&(this[or][t]=!1),dr(this,t,v(1,n))};return u&&pr&&dr(sr,t,{configurable:!0,set:e}),vr(t)}).prototype,"toString",function(){return this._k}),ce.f=_r,d.f=gr,ve.f=Jn.f=wr,ae.f=mr,qe.f=Sr,u&&O(sr,"propertyIsEnumerable",mr,!0),$n.f=function(t){return vr(D(t))}),A(A.G+A.W+A.F*!lr,{Symbol:er});for(var Er="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Or=0;Er.length>Or;)D(Er[Or++]);for(var jr=xt(D.store),xr=0;jr.length>xr;)Kn(jr[xr++]);A(A.S+A.F*!lr,"Symbol",{for:function(t){return b(ur,t+="")?ur[t]:ur[t]=er(t)},keyFor:function(t){if(!yr(t))throw TypeError(t+" is not a symbol!");for(var e in ur)if(ur[e]===t)return e},useSetter:function(){pr=!0},useSimple:function(){pr=!1}}),A(A.S+A.F*!lr,"Object",{create:function(t,e){return void 0===e?Nt(t):br(Nt(t),e)},defineProperty:gr,defineProperties:br,getOwnPropertyDescriptor:_r,getOwnPropertyNames:wr,getOwnPropertySymbols:Sr});var Pr=a(function(){qe.f(1)});A(A.S+A.F*Pr,"Object",{getOwnPropertySymbols:function(t){return qe.f(I(t))}}),nr&&A(A.S+A.F*(!lr||a(function(){var t=er();return"[null]"!=rr([t])||"{}"!=rr({a:t})||"{}"!=rr(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=arguments,i=[t],a=1;arguments.length>a;)i.push(r[a++]);if(n=e=i[1],(o(e)||void 0!==t)&&!yr(t))return V(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!yr(e))return e}),i[1]=e,rr.apply(nr,i)}}),er.prototype[ir]||y(er.prototype,ir,er.prototype.valueOf),Mt(er,"Symbol"),Mt(Math,"Math",!0),Mt(n.JSON,"JSON",!0),Kn("asyncIterator");var Ar=_n(!1);A(A.P,"String",{codePointAt:function(t){return Ar(this,t)}});var Rr=function(t,e,n){if(un(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(R(t))},Ir=D("match"),Tr=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Ir]=!1,!"/./"[t](e)}catch(t){}}return!0},Fr="".endsWith;A(A.P+A.F*Tr("endsWith"),"String",{endsWith:function(t){var e=Rr(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,r=C(e.length),o=void 0===n?r:Math.min(C(n),r),i=String(t);return Fr?Fr.call(e,i,o):e.slice(o-i.length,o)===i}});var Nr=String.fromCharCode,kr=String.fromCodePoint;A(A.S+A.F*(!!kr&&1!=kr.length),"String",{fromCodePoint:function(t){for(var e,n=arguments,r=[],o=arguments.length,i=0;o>i;){if(e=+n[i++],M(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?Nr(e):Nr(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}}),A(A.P+A.F*Tr("includes"),"String",{includes:function(t){return!!~Rr(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}});var Ur=_n(!0);Ht(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=Ur(e,n),this._i+=t.length,{value:t,done:!1})});var Mr=function(t){var e=String(R(this)),n="",r=N(t);if(r<0||Infinity==r)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},Br=function(t,e,n,r){var o=String(R(t)),i=o.length,a=void 0===n?" ":String(n),u=C(e);if(u<=i||""==a)return o;var c=u-i,f=Mr.call(a,Math.ceil(c/a.length));return f.length>c&&(f=f.slice(0,c)),r?f+o:o+f},Cr=n.navigator,Lr=Cr&&Cr.userAgent||"",Dr=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Lr);A(A.P+A.F*Dr,"String",{padStart:function(t){return Br(this,t,arguments.length>1?arguments[1]:void 0,!0)}});var Wr=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Lr);A(A.P+A.F*Wr,"String",{padEnd:function(t){return Br(this,t,arguments.length>1?arguments[1]:void 0,!1)}}),A(A.S,"String",{raw:function(t){for(var e=arguments,n=yt(t.raw),r=C(n.length),o=arguments.length,i=[],a=0;r>a;)i.push(String(n[a++])),a<o&&i.push(String(e[a]));return i.join("")}}),A(A.P,"String",{repeat:Mr});var Gr="".startsWith;A(A.P+A.F*Tr("startsWith"),"String",{startsWith:function(t){var e=Rr(this,t,"startsWith"),n=C(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return Gr?Gr.call(e,r,n):e.slice(n,n+r.length)===r}}),Se("trimLeft",function(t){return function(){return t(this,1)}},"trimStart"),Se("trimRight",function(t){return function(){return t(this,2)}},"trimEnd");var qr=Object.assign,$r=!qr||a(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=qr({},t)[n]||Object.keys(qr({},e)).join("")!=r})?function(t,e){for(var n=arguments,r=I(t),o=arguments.length,i=1,a=qe.f,c=ae.f;o>i;)for(var f,s=K(n[i++]),l=a?xt(s).concat(a(s)):xt(s),h=l.length,p=0;h>p;)f=l[p++],u&&!c.call(s,f)||(r[f]=s[f]);return r}:qr,Hr=Zt.getWeak,Kr=J(5),Vr=J(6),Xr=0,zr=function(t){return t._l||(t._l=new Jr)},Jr=function(){this.a=[]},Yr=function(t,e){return Kr(t.a,function(t){return t[0]===e})};Jr.prototype={get:function(t){var e=Yr(this,t);if(e)return e[1]},has:function(t){return!!Yr(this,t)},set:function(t,e){var n=Yr(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=Vr(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}};var Qr={getConstructor:function(t,e,n,r){var i=t(function(t,o){Yt(t,i,e,"_i"),t._t=e,t._i=Xr++,t._l=void 0,null!=o&&Qt(o,n,t[r],t)});return Jt(i.prototype,{delete:function(t){if(!o(t))return!1;var n=Hr(t);return!0===n?zr(te(this,e)).delete(t):n&&b(n,this._i)&&delete n[this._i]},has:function(t){if(!o(t))return!1;var n=Hr(t);return!0===n?zr(te(this,e)).has(t):n&&b(n,this._i)}}),i},def:function(t,e,n){var r=Hr(i(e),!0);return!0===r?zr(t).set(e,n):r[t._i]=n,t},ufstore:zr};function Zr(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})}e(function(t){var e,r=J(0),i=te,a=!n.ActiveXObject&&"ActiveXObject"in n,u=Zt.getWeak,c=Object.isExtensible,f=Qr.ufstore,s=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},l={get:function(t){if(o(t)){var e=u(t);return!0===e?f(te(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return Qr.def(te(this,"WeakMap"),t,e)}},h=t.exports=pe("WeakMap",s,l,Qr,!0,!0);i&&a&&(e=Qr.getConstructor(s,"WeakMap"),$r(e.prototype,l),Zt.NEED=!0,r(["delete","has","get","set"],function(t){var n=h.prototype,r=n[t];O(n,t,function(n,i){if(o(n)&&!c(n)){this._f||(this._f=new e);var a=this._f[t](n,i);return"set"==t?this:a}return r.call(this,n,i)})}))}),pe("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return Qr.def(te(this,"WeakSet"),t,!0)}},Qr,!1,!0);var to=setTimeout;function eo(t){return Boolean(t&&void 0!==t.length)}function no(){}function ro(t){if(!(this instanceof ro))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],fo(t,this)}function oo(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,ro._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void ao(e.promise,t)}io(e.promise,r)}else(1===t._state?io:ao)(e.promise,t._value)})):t._deferreds.push(e)}function io(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof ro)return t._state=3,t._value=e,void uo(t);if("function"==typeof n)return void fo((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,uo(t)}catch(e){ao(t,e)}var r,o}function ao(t,e){t._state=2,t._value=e,uo(t)}function uo(t){2===t._state&&0===t._deferreds.length&&ro._immediateFn(function(){t._handled||ro._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)oo(t,t._deferreds[e]);t._deferreds=null}function co(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function fo(t,e){var n=!1;try{t(function(t){n||(n=!0,io(e,t))},function(t){n||(n=!0,ao(e,t))})}catch(t){if(n)return;n=!0,ao(e,t)}}ro.prototype.catch=function(t){return this.then(null,t)},ro.prototype.then=function(t,e){var n=new this.constructor(no);return oo(this,new co(t,e,n)),n},ro.prototype.finally=Zr,ro.all=function(t){return new ro(function(e,n){if(!eo(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(e){i(t,e)},n)}r[t]=a,0==--o&&e(r)}catch(t){n(t)}}for(var a=0;a<r.length;a++)i(a,r[a])})},ro.resolve=function(t){return t&&"object"==typeof t&&t.constructor===ro?t:new ro(function(e){e(t)})},ro.reject=function(t){return new ro(function(e,n){n(t)})},ro.race=function(t){return new ro(function(e,n){if(!eo(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=t.length;r<o;r++)ro.resolve(t[r]).then(e,n)})},ro._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){to(t,0)},ro._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var so=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"Promise"in so?so.Promise.prototype.finally||(so.Promise.prototype.finally=Zr):so.Promise=ro;var lo={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(lo.arrayBuffer)var ho=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],po=ArrayBuffer.isView||function(t){return t&&ho.indexOf(Object.prototype.toString.call(t))>-1};function vo(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function yo(t){return"string"!=typeof t&&(t=String(t)),t}function go(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return lo.iterable&&(e[Symbol.iterator]=function(){return e}),e}function bo(t){this.map={},t instanceof bo?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function mo(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function _o(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function wo(t){var e=new FileReader,n=_o(e);return e.readAsArrayBuffer(t),n}function So(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function Eo(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:lo.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:lo.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:lo.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():lo.arrayBuffer&&lo.blob&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=So(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):lo.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||po(t))?this._bodyArrayBuffer=So(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):lo.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},lo.blob&&(this.blob=function(){var t=mo(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?mo(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(wo)}),this.text=function(){var t,e,n,r=mo(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,n=_o(e=new FileReader),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},lo.formData&&(this.formData=function(){return this.text().then(xo)}),this.json=function(){return this.text().then(JSON.parse)},this}bo.prototype.append=function(t,e){t=vo(t),e=yo(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},bo.prototype.delete=function(t){delete this.map[vo(t)]},bo.prototype.get=function(t){return t=vo(t),this.has(t)?this.map[t]:null},bo.prototype.has=function(t){return this.map.hasOwnProperty(vo(t))},bo.prototype.set=function(t,e){this.map[vo(t)]=yo(e)},bo.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},bo.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),go(t)},bo.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),go(t)},bo.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),go(t)},lo.iterable&&(bo.prototype[Symbol.iterator]=bo.prototype.entries);var Oo=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function jo(t,e){var n,r,o=(e=e||{}).body;if(t instanceof jo){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new bo(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new bo(e.headers)),this.method=(r=(n=e.method||this.method||"GET").toUpperCase(),Oo.indexOf(r)>-1?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function xo(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function Po(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new bo(e.headers),this.url=e.url||"",this._initBody(t)}jo.prototype.clone=function(){return new jo(this,{body:this._bodyInit})},Eo.call(jo.prototype),Eo.call(Po.prototype),Po.prototype.clone=function(){return new Po(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new bo(this.headers),url:this.url})},Po.error=function(){var t=new Po(null,{status:0,statusText:""});return t.type="error",t};var Ao=[301,302,303,307,308];Po.redirect=function(t,e){if(-1===Ao.indexOf(e))throw new RangeError("Invalid status code");return new Po(null,{status:e,headers:{location:t}})};var Ro=self.DOMException;try{new Ro}catch(t){(Ro=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),Ro.prototype.constructor=Ro}function Io(t,e){return new Promise(function(n,r){var o=new jo(t,e);if(o.signal&&o.signal.aborted)return r(new Ro("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,r={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new bo,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e)};r.url="responseURL"in i?i.responseURL:r.headers.get("X-Request-URL"),n(new Po("response"in i?i.response:i.responseText,r))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.onabort=function(){r(new Ro("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&lo.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),o.signal&&(o.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",a)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})}Io.polyfill=!0,self.fetch||(self.fetch=Io,self.Headers=bo,self.Request=jo,self.Response=Po),function(t){var e=function(){try{return!!Symbol.iterator}catch(t){return!1}}(),n=function(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n},r=function(t){return encodeURIComponent(t).replace(/%20/g,"+")},o=function(t){return decodeURIComponent(String(t).replace(/\+/g," "))};(function(){try{var e=t.URLSearchParams;return"a=1"===new e("?a=1").toString()&&"function"==typeof e.prototype.set}catch(t){return!1}})()||function(){var o=function(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var e=typeof t;if("undefined"===e);else if("string"===e)""!==t&&this._fromString(t);else if(t instanceof o){var n=this;t.forEach(function(t,e){n.append(e,t)})}else{if(null===t||"object"!==e)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var r=0;r<t.length;r++){var i=t[r];if("[object Array]"!==Object.prototype.toString.call(i)&&2===i.length)throw new TypeError("Expected [string, any] as entry at index "+r+" of URLSearchParams's input");this.append(i[0],i[1])}else for(var a in t)t.hasOwnProperty(a)&&this.append(a,t[a])}},i=o.prototype;i.append=function(t,e){t in this._entries?this._entries[t].push(String(e)):this._entries[t]=[String(e)]},i.delete=function(t){delete this._entries[t]},i.get=function(t){return t in this._entries?this._entries[t][0]:null},i.getAll=function(t){return t in this._entries?this._entries[t].slice(0):[]},i.has=function(t){return t in this._entries},i.set=function(t,e){this._entries[t]=[String(e)]},i.forEach=function(t,e){var n;for(var r in this._entries)if(this._entries.hasOwnProperty(r)){n=this._entries[r];for(var o=0;o<n.length;o++)t.call(e,n[o],r,this)}},i.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),n(t)},i.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},i.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),n(t)},e&&(i[Symbol.iterator]=i.entries),i.toString=function(){var t=[];return this.forEach(function(e,n){t.push(r(n)+"="+r(e))}),t.join("&")},t.URLSearchParams=o}();var i=t.URLSearchParams.prototype;"function"!=typeof i.sort&&(i.sort=function(){var t=this,e=[];this.forEach(function(n,r){e.push([r,n]),t._entries||t.delete(r)}),e.sort(function(t,e){return t[0]<e[0]?-1:t[0]>e[0]?1:0}),t._entries&&(t._entries={});for(var n=0;n<e.length;n++)this.append(e[n][0],e[n][1])}),"function"!=typeof i._fromString&&Object.defineProperty(i,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(t){if(this._entries)this._entries={};else{var e=[];this.forEach(function(t,n){e.push(n)});for(var n=0;n<e.length;n++)this.delete(e[n])}var r,i=(t=t.replace(/^\?/,"")).split("&");for(n=0;n<i.length;n++)r=i[n].split("="),this.append(o(r[0]),r.length>1?o(r[1]):"")}})}(void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:t),function(t){var e,n,r;if(function(){try{var e=new t.URL("b","http://a");return e.pathname="c d","http://a/c%20d"===e.href&&e.searchParams}catch(t){return!1}}()||(e=t.URL,r=(n=function(e,n){"string"!=typeof e&&(e=String(e));var r,o=document;if(n&&(void 0===t.location||n!==t.location.href)){(r=(o=document.implementation.createHTMLDocument("")).createElement("base")).href=n,o.head.appendChild(r);try{if(0!==r.href.indexOf(n))throw new Error(r.href)}catch(t){throw new Error("URL unable to set base "+n+" due to "+t)}}var i=o.createElement("a");if(i.href=e,r&&(o.body.appendChild(i),i.href=i.href),":"===i.protocol||!/:/.test(i.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:i});var a=new t.URLSearchParams(this.search),u=!0,c=!0,f=this;["append","delete","set"].forEach(function(t){var e=a[t];a[t]=function(){e.apply(a,arguments),u&&(c=!1,f.search=a.toString(),c=!0)}}),Object.defineProperty(this,"searchParams",{value:a,enumerable:!0});var s=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==s&&(s=this.search,c&&(u=!1,this.searchParams._fromString(this.search),u=!0))}})}).prototype,["hash","host","hostname","port","protocol"].forEach(function(t){!function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:!0})}(t)}),Object.defineProperty(r,"search",{get:function(){return this._anchorElement.search},set:function(t){this._anchorElement.search=t,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(r,{toString:{get:function(){var t=this;return function(){return t.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(t){this._anchorElement.href=t,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(t){this._anchorElement.pathname=t},enumerable:!0},origin:{get:function(){return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(this._anchorElement.port!={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol]&&""!==this._anchorElement.port?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(t){},enumerable:!0},username:{get:function(){return""},set:function(t){},enumerable:!0}}),n.createObjectURL=function(t){return e.createObjectURL.apply(e,arguments)},n.revokeObjectURL=function(t){return e.revokeObjectURL.apply(e,arguments)},t.URL=n),void 0!==t.location&&!("origin"in t.location)){var o=function(){return t.location.protocol+"//"+t.location.hostname+(t.location.port?":"+t.location.port:"")};try{Object.defineProperty(t.location,"origin",{get:o,enumerable:!0})}catch(e){setInterval(function(){t.location.origin=o()},100)}}}(void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:t);var To=Object.getOwnPropertySymbols,Fo=Object.prototype.hasOwnProperty,No=Object.prototype.propertyIsEnumerable,ko=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,o=arguments,i=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var u in n=Object(o[a]))Fo.call(n,u)&&(i[u]=n[u]);if(To){r=To(n);for(var c=0;c<r.length;c++)No.call(n,r[c])&&(i[r[c]]=n[r[c]])}}return i};Object.assign=ko}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../console-browserify/index.js */ "./node_modules/console-browserify/index.js")))

/***/ }),

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/node-libs-browser/node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*global window, global*/
var util = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js")
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js")
function now() { return new Date().getTime() }

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    delete times[label]
    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/client/polyfills.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/client/polyfills.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @next/polyfill-nomodule */ "./node_modules/@next/polyfill-nomodule/dist/polyfill-nomodule.js");

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/util/util.js":
/*!******************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/util/util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, console) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/node-libs-browser/node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../console-browserify/index.js */ "./node_modules/console-browserify/index.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[["./node_modules/next/dist/client/polyfills.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=polyfills.js.map