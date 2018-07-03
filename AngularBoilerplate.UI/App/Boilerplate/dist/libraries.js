/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
;/*!
 * ASP.NET SignalR JavaScript Library v2.3.0
 * http://signalr.net/
 *
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 *
 */
(function(n,t,i){function w(t,i){var u,f;if(n.isArray(t)){for(u=t.length-1;u>=0;u--)f=t[u],n.type(f)==="string"&&r.transports[f]||(i.log("Invalid transport: "+f+", removing it from the transports list."),t.splice(u,1));t.length===0&&(i.log("No transports remain within the specified transport array."),t=null)}else if(r.transports[t]||t==="auto"){if(t==="auto"&&r._.ieVersion<=8)return["longPolling"]}else i.log("Invalid transport: "+t.toString()+"."),t=null;return t}function b(n){return n==="http:"?80:n==="https:"?443:void 0}function a(n,t){return t.match(/:\d+$/)?t:t+":"+b(n)}function k(t,i){var u=this,r=[];u.tryBuffer=function(i){return t.state===n.signalR.connectionState.connecting?(r.push(i),!0):!1};u.drain=function(){if(t.state===n.signalR.connectionState.connected)while(r.length>0)i(r.shift())};u.clear=function(){r=[]}}var f={nojQuery:"jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",noTransportOnInit:"No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",errorOnNegotiate:"Error during negotiation request.",stoppedWhileLoading:"The connection was stopped during page load.",stoppedWhileNegotiating:"The connection was stopped during the negotiate request.",errorParsingNegotiateResponse:"Error parsing negotiate response.",errorDuringStartRequest:"Error during start request. Stopping the connection.",stoppedDuringStartRequest:"The connection was stopped during the start request.",errorParsingStartResponse:"Error parsing start response: '{0}'. Stopping the connection.",invalidStartResponse:"Invalid start response: '{0}'. Stopping the connection.",protocolIncompatible:"You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",sendFailed:"Send failed.",parseFailed:"Failed at parsing response: {0}",longPollFailed:"Long polling request failed.",eventSourceFailedToConnect:"EventSource failed to connect.",eventSourceError:"Error raised by EventSource",webSocketClosed:"WebSocket closed.",pingServerFailedInvalidResponse:"Invalid ping response when pinging server: '{0}'.",pingServerFailed:"Failed to ping server.",pingServerFailedStatusCode:"Failed to ping server.  Server responded with status code {0}, stopping the connection.",pingServerFailedParse:"Failed to parse ping server response, stopping the connection.",noConnectionTransport:"Connection is in an invalid state, there is no transport active.",webSocketsInvalidState:"The Web Socket transport is in an invalid state, transitioning into reconnecting.",reconnectTimeout:"Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",reconnectWindowTimeout:"The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."};if(typeof n!="function")throw new Error(f.nojQuery);var r,h,o=t.document.readyState==="complete",e=n(t),c="__Negotiate Aborted__",u={onStart:"onStart",onStarting:"onStarting",onReceived:"onReceived",onError:"onError",onConnectionSlow:"onConnectionSlow",onReconnecting:"onReconnecting",onReconnect:"onReconnect",onStateChanged:"onStateChanged",onDisconnect:"onDisconnect"},v=function(n,i){if(i!==!1){var r;typeof t.console!="undefined"&&(r="["+(new Date).toTimeString()+"] SignalR: "+n,t.console.debug?t.console.debug(r):t.console.log&&t.console.log(r))}},s=function(t,i,r){return i===t.state?(t.state=r,n(t).triggerHandler(u.onStateChanged,[{oldState:i,newState:r}]),!0):!1},y=function(n){return n.state===r.connectionState.disconnected},l=function(n){return n._.keepAliveData.activated&&n.transport.supportsKeepAlive(n)},p=function(i){var f,e;i._.configuredStopReconnectingTimeout||(e=function(t){var i=r._.format(r.resources.reconnectTimeout,t.disconnectTimeout);t.log(i);n(t).triggerHandler(u.onError,[r._.error(i,"TimeoutException")]);t.stop(!1,!1)},i.reconnecting(function(){var n=this;n.state===r.connectionState.reconnecting&&(f=t.setTimeout(function(){e(n)},n.disconnectTimeout))}),i.stateChanged(function(n){n.oldState===r.connectionState.reconnecting&&t.clearTimeout(f)}),i._.configuredStopReconnectingTimeout=!0)};if(r=function(n,t,i){return new r.fn.init(n,t,i)},r._={defaultContentType:"application/x-www-form-urlencoded; charset=UTF-8",ieVersion:function(){var i,n;return t.navigator.appName==="Microsoft Internet Explorer"&&(n=/MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent),n&&(i=t.parseFloat(n[1]))),i}(),error:function(n,t,i){var r=new Error(n);return r.source=t,typeof i!="undefined"&&(r.context=i),r},transportError:function(n,t,r,u){var f=this.error(n,r,u);return f.transport=t?t.name:i,f},format:function(){for(var t=arguments[0],n=0;n<arguments.length-1;n++)t=t.replace("{"+n+"}",arguments[n+1]);return t},firefoxMajorVersion:function(n){var t=n.match(/Firefox\/(\d+)/);return!t||!t.length||t.length<2?0:parseInt(t[1],10)},configurePingInterval:function(i){var f=i._.config,e=function(t){n(i).triggerHandler(u.onError,[t])};f&&!i._.pingIntervalId&&f.pingInterval&&(i._.pingIntervalId=t.setInterval(function(){r.transports._logic.pingServer(i).fail(e)},f.pingInterval))}},r.events=u,r.resources=f,r.ajaxDefaults={processData:!0,timeout:null,async:!0,global:!1,cache:!1},r.changeState=s,r.isDisconnecting=y,r.connectionState={connecting:0,connected:1,reconnecting:2,disconnected:4},r.hub={start:function(){throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");}},typeof e.on=="function")e.on("load",function(){o=!0});else e.load(function(){o=!0});r.fn=r.prototype={init:function(t,i,r){var f=n(this);this.url=t;this.qs=i;this.lastError=null;this._={keepAliveData:{},connectingMessageBuffer:new k(this,function(n){f.triggerHandler(u.onReceived,[n])}),lastMessageAt:(new Date).getTime(),lastActiveAt:(new Date).getTime(),beatInterval:5e3,beatHandle:null,totalTransportConnectTimeout:0};typeof r=="boolean"&&(this.logging=r)},_parseResponse:function(n){var t=this;return n?typeof n=="string"?t.json.parse(n):n:n},_originalJson:t.JSON,json:t.JSON,isCrossDomain:function(i,r){var u;return(i=n.trim(i),r=r||t.location,i.indexOf("http")!==0)?!1:(u=t.document.createElement("a"),u.href=i,u.protocol+a(u.protocol,u.host)!==r.protocol+a(r.protocol,r.host))},ajaxDataType:"text",contentType:"application/json; charset=UTF-8",logging:!1,state:r.connectionState.disconnected,clientProtocol:"1.5",reconnectDelay:2e3,transportConnectTimeout:0,disconnectTimeout:3e4,reconnectWindow:3e4,keepAliveWarnAt:2/3,start:function(i,h){var a=this,v={pingInterval:3e5,waitForPageLoad:!0,transport:"auto",jsonp:!1},d,y=a._deferral||n.Deferred(),b=t.document.createElement("a"),k,g;if(a.lastError=null,a._deferral=y,!a.json)throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");if(n.type(i)==="function"?h=i:n.type(i)==="object"&&(n.extend(v,i),n.type(v.callback)==="function"&&(h=v.callback)),v.transport=w(v.transport,a),!v.transport)throw new Error("SignalR: Invalid transport(s) specified, aborting start.");return(a._.config=v,!o&&v.waitForPageLoad===!0)?(a._.deferredStartHandler=function(){a.start(i,h)},e.bind("load",a._.deferredStartHandler),y.promise()):a.state===r.connectionState.connecting?y.promise():s(a,r.connectionState.disconnected,r.connectionState.connecting)===!1?(y.resolve(a),y.promise()):(p(a),b.href=a.url,b.protocol&&b.protocol!==":"?(a.protocol=b.protocol,a.host=b.host):(a.protocol=t.document.location.protocol,a.host=b.host||t.document.location.host),a.baseUrl=a.protocol+"//"+a.host,a.wsProtocol=a.protocol==="https:"?"wss://":"ws://",v.transport==="auto"&&v.jsonp===!0&&(v.transport="longPolling"),a.url.indexOf("//")===0&&(a.url=t.location.protocol+a.url,a.log("Protocol relative URL detected, normalizing it to '"+a.url+"'.")),this.isCrossDomain(a.url)&&(a.log("Auto detected cross domain url."),v.transport==="auto"&&(v.transport=["webSockets","serverSentEvents","longPolling"]),typeof v.withCredentials=="undefined"&&(v.withCredentials=!0),v.jsonp||(v.jsonp=!n.support.cors,v.jsonp&&a.log("Using jsonp because this browser doesn't support CORS.")),a.contentType=r._.defaultContentType),a.withCredentials=v.withCredentials,a.ajaxDataType=v.jsonp?"jsonp":"text",n(a).bind(u.onStart,function(){n.type(h)==="function"&&h.call(a);y.resolve(a)}),a._.initHandler=r.transports._logic.initHandler(a),d=function(i,o){var c=r._.error(f.noTransportOnInit);if(o=o||0,o>=i.length){o===0?a.log("No transports supported by the server were selected."):o===1?a.log("No fallback transports were selected."):a.log("Fallback transports exhausted.");n(a).triggerHandler(u.onError,[c]);y.reject(c);a.stop();return}if(a.state!==r.connectionState.disconnected){var p=i[o],h=r.transports[p],v=function(){d(i,o+1)};a.transport=h;try{a._.initHandler.start(h,function(){var i=r._.firefoxMajorVersion(t.navigator.userAgent)>=11,f=!!a.withCredentials&&i;a.log("The start request succeeded. Transitioning to the connected state.");l(a)&&r.transports._logic.monitorKeepAlive(a);r.transports._logic.startHeartbeat(a);r._.configurePingInterval(a);s(a,r.connectionState.connecting,r.connectionState.connected)||a.log("WARNING! The connection was not in the connecting state.");a._.connectingMessageBuffer.drain();n(a).triggerHandler(u.onStart);e.bind("unload",function(){a.log("Window unloading, stopping the connection.");a.stop(f)});i&&e.bind("beforeunload",function(){t.setTimeout(function(){a.stop(f)},0)})},v)}catch(w){a.log(h.name+" transport threw '"+w.message+"' when attempting to start.");v()}}},k=a.url+"/negotiate",g=function(t,i){var e=r._.error(f.errorOnNegotiate,t,i._.negotiateRequest);n(i).triggerHandler(u.onError,e);y.reject(e);i.stop()},n(a).triggerHandler(u.onStarting),k=r.transports._logic.prepareQueryString(a,k),a.log("Negotiating with '"+k+"'."),a._.negotiateRequest=r.transports._logic.ajax(a,{url:k,error:function(n,t){t!==c?g(n,a):y.reject(r._.error(f.stoppedWhileNegotiating,null,a._.negotiateRequest))},success:function(t){var i,e,h,o=[],s=[];try{i=a._parseResponse(t)}catch(c){g(r._.error(f.errorParsingNegotiateResponse,c),a);return}if(e=a._.keepAliveData,a.appRelativeUrl=i.Url,a.id=i.ConnectionId,a.token=i.ConnectionToken,a.webSocketServerUrl=i.WebSocketServerUrl,a._.pollTimeout=i.ConnectionTimeout*1e3+1e4,a.disconnectTimeout=i.DisconnectTimeout*1e3,a._.totalTransportConnectTimeout=a.transportConnectTimeout+i.TransportConnectTimeout*1e3,i.KeepAliveTimeout?(e.activated=!0,e.timeout=i.KeepAliveTimeout*1e3,e.timeoutWarning=e.timeout*a.keepAliveWarnAt,a._.beatInterval=(e.timeout-e.timeoutWarning)/3):e.activated=!1,a.reconnectWindow=a.disconnectTimeout+(e.timeout||0),!i.ProtocolVersion||i.ProtocolVersion!==a.clientProtocol){h=r._.error(r._.format(f.protocolIncompatible,a.clientProtocol,i.ProtocolVersion));n(a).triggerHandler(u.onError,[h]);y.reject(h);return}n.each(r.transports,function(n){if(n.indexOf("_")===0||n==="webSockets"&&!i.TryWebSockets)return!0;s.push(n)});n.isArray(v.transport)?n.each(v.transport,function(t,i){n.inArray(i,s)>=0&&o.push(i)}):v.transport==="auto"?o=s:n.inArray(v.transport,s)>=0&&o.push(v.transport);d(o)}}),y.promise())},starting:function(t){var i=this;return n(i).bind(u.onStarting,function(){t.call(i)}),i},send:function(n){var t=this;if(t.state===r.connectionState.disconnected)throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");if(t.state===r.connectionState.connecting)throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");return t.transport.send(t,n),t},received:function(t){var i=this;return n(i).bind(u.onReceived,function(n,r){t.call(i,r)}),i},stateChanged:function(t){var i=this;return n(i).bind(u.onStateChanged,function(n,r){t.call(i,r)}),i},error:function(t){var i=this;return n(i).bind(u.onError,function(n,r,u){i.lastError=r;t.call(i,r,u)}),i},disconnected:function(t){var i=this;return n(i).bind(u.onDisconnect,function(){t.call(i)}),i},connectionSlow:function(t){var i=this;return n(i).bind(u.onConnectionSlow,function(){t.call(i)}),i},reconnecting:function(t){var i=this;return n(i).bind(u.onReconnecting,function(){t.call(i)}),i},reconnected:function(t){var i=this;return n(i).bind(u.onReconnect,function(){t.call(i)}),i},stop:function(i,h){var a=this,v=a._deferral;if(a._.deferredStartHandler&&e.unbind("load",a._.deferredStartHandler),delete a._.config,delete a._.deferredStartHandler,!o&&(!a._.config||a._.config.waitForPageLoad===!0)){a.log("Stopping connection prior to negotiate.");v&&v.reject(r._.error(f.stoppedWhileLoading));return}if(a.state!==r.connectionState.disconnected)return a.log("Stopping connection."),t.clearTimeout(a._.beatHandle),t.clearInterval(a._.pingIntervalId),a.transport&&(a.transport.stop(a),h!==!1&&a.transport.abort(a,i),l(a)&&r.transports._logic.stopMonitoringKeepAlive(a),a.transport=null),a._.negotiateRequest&&(a._.negotiateRequest.abort(c),delete a._.negotiateRequest),a._.initHandler&&a._.initHandler.stop(),delete a._deferral,delete a.messageId,delete a.groupsToken,delete a.id,delete a._.pingIntervalId,delete a._.lastMessageAt,delete a._.lastActiveAt,a._.connectingMessageBuffer.clear(),n(a).unbind(u.onStart),s(a,a.state,r.connectionState.disconnected),n(a).triggerHandler(u.onDisconnect),a},log:function(n){v(n,this.logging)}};r.fn.init.prototype=r.fn;r.noConflict=function(){return n.connection===r&&(n.connection=h),r};n.connection&&(h=n.connection);n.connection=n.signalR=r})(window.jQuery,window),function(n,t,i){function s(n){n._.keepAliveData.monitoring&&l(n);u.markActive(n)&&(n._.beatHandle=t.setTimeout(function(){s(n)},n._.beatInterval))}function l(t){var i=t._.keepAliveData,u;t.state===r.connectionState.connected&&(u=(new Date).getTime()-t._.lastMessageAt,u>=i.timeout?(t.log("Keep alive timed out.  Notifying transport that connection has been lost."),t.transport.lostConnection(t)):u>=i.timeoutWarning?i.userNotified||(t.log("Keep alive has been missed, connection may be dead/slow."),n(t).triggerHandler(f.onConnectionSlow),i.userNotified=!0):i.userNotified=!1)}function e(n,t){var i=n.url+t;return n.transport&&(i+="?transport="+n.transport.name),u.prepareQueryString(n,i)}function h(n){this.connection=n;this.startRequested=!1;this.startCompleted=!1;this.connectionStopped=!1}var r=n.signalR,f=n.signalR.events,c=n.signalR.changeState,o="__Start Aborted__",u;r.transports={};h.prototype={start:function(n,r,u){var f=this,e=f.connection,o=!1;if(f.startRequested||f.connectionStopped){e.log("WARNING! "+n.name+" transport cannot be started. Initialization ongoing or completed.");return}e.log(n.name+" transport starting.");n.start(e,function(){o||f.initReceived(n,r)},function(t){return o||(o=!0,f.transportFailed(n,t,u)),!f.startCompleted||f.connectionStopped});f.transportTimeoutHandle=t.setTimeout(function(){o||(o=!0,e.log(n.name+" transport timed out when trying to connect."),f.transportFailed(n,i,u))},e._.totalTransportConnectTimeout)},stop:function(){this.connectionStopped=!0;t.clearTimeout(this.transportTimeoutHandle);r.transports._logic.tryAbortStartRequest(this.connection)},initReceived:function(n,i){var u=this,f=u.connection;if(u.startRequested){f.log("WARNING! The client received multiple init messages.");return}u.connectionStopped||(u.startRequested=!0,t.clearTimeout(u.transportTimeoutHandle),f.log(n.name+" transport connected. Initiating start request."),r.transports._logic.ajaxStart(f,function(){u.startCompleted=!0;i()}))},transportFailed:function(i,u,e){var o=this.connection,h=o._deferral,s;this.connectionStopped||(t.clearTimeout(this.transportTimeoutHandle),this.startRequested?this.startCompleted||(s=r._.error(r.resources.errorDuringStartRequest,u),o.log(i.name+" transport failed during the start request. Stopping the connection."),n(o).triggerHandler(f.onError,[s]),h&&h.reject(s),o.stop()):(i.stop(o),o.log(i.name+" transport failed to connect. Attempting to fall back."),e()))}};u=r.transports._logic={ajax:function(t,i){return n.ajax(n.extend(!0,{},n.signalR.ajaxDefaults,{type:"GET",data:{},xhrFields:{withCredentials:t.withCredentials},contentType:t.contentType,dataType:t.ajaxDataType},i))},pingServer:function(t){var e,f,i=n.Deferred();return t.transport?(e=t.url+"/ping",e=u.addQs(e,t.qs),f=u.ajax(t,{url:e,success:function(n){var u;try{u=t._parseResponse(n)}catch(e){i.reject(r._.transportError(r.resources.pingServerFailedParse,t.transport,e,f));t.stop();return}u.Response==="pong"?i.resolve():i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse,n),t.transport,null,f))},error:function(n){n.status===401||n.status===403?(i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode,n.status),t.transport,n,f)),t.stop()):i.reject(r._.transportError(r.resources.pingServerFailed,t.transport,n,f))}})):i.reject(r._.transportError(r.resources.noConnectionTransport,t.transport)),i.promise()},prepareQueryString:function(n,i){var r;return r=u.addQs(i,"clientProtocol="+n.clientProtocol),r=u.addQs(r,n.qs),n.token&&(r+="&connectionToken="+t.encodeURIComponent(n.token)),n.data&&(r+="&connectionData="+t.encodeURIComponent(n.data)),r},addQs:function(t,i){var r=t.indexOf("?")!==-1?"&":"?",u;if(!i)return t;if(typeof i=="object")return t+r+n.param(i);if(typeof i=="string")return u=i.charAt(0),(u==="?"||u==="&")&&(r=""),t+r+i;throw new Error("Query string property must be either a string or object.");},getUrl:function(n,i,r,f,e){var h=i==="webSockets"?"":n.baseUrl,o=h+n.appRelativeUrl,s="transport="+i;return!e&&n.groupsToken&&(s+="&groupsToken="+t.encodeURIComponent(n.groupsToken)),r?(o+=f?"/poll":"/reconnect",!e&&n.messageId&&(s+="&messageId="+t.encodeURIComponent(n.messageId))):o+="/connect",o+="?"+s,o=u.prepareQueryString(n,o),e||(o+="&tid="+Math.floor(Math.random()*11)),o},maximizePersistentResponse:function(n){return{MessageId:n.C,Messages:n.M,Initialized:typeof n.S!="undefined"?!0:!1,ShouldReconnect:typeof n.T!="undefined"?!0:!1,LongPollDelay:n.L,GroupsToken:n.G}},updateGroups:function(n,t){t&&(n.groupsToken=t)},stringifySend:function(n,t){return typeof t=="string"||typeof t=="undefined"||t===null?t:n.json.stringify(t)},ajaxSend:function(t,i){var h=u.stringifySend(t,i),c=e(t,"/send"),o,s=function(t,u){n(u).triggerHandler(f.onError,[r._.transportError(r.resources.sendFailed,u.transport,t,o),i])};return o=u.ajax(t,{url:c,type:t.ajaxDataType==="jsonp"?"GET":"POST",contentType:r._.defaultContentType,data:{data:h},success:function(n){var i;if(n){try{i=t._parseResponse(n)}catch(r){s(r,t);t.stop();return}u.triggerReceived(t,i)}},error:function(n,i){i!=="abort"&&i!=="parsererror"&&s(n,t)}})},ajaxAbort:function(n,t){if(typeof n.transport!="undefined"){t=typeof t=="undefined"?!0:t;var i=e(n,"/abort");u.ajax(n,{url:i,async:t,timeout:1e3,type:"POST"});n.log("Fired ajax abort async = "+t+".")}},ajaxStart:function(t,i){var h=function(n){var i=t._deferral;i&&i.reject(n)},s=function(i){t.log("The start request failed. Stopping the connection.");n(t).triggerHandler(f.onError,[i]);h(i);t.stop()};t._.startRequest=u.ajax(t,{url:e(t,"/start"),success:function(n,u,f){var e;try{e=t._parseResponse(n)}catch(o){s(r._.error(r._.format(r.resources.errorParsingStartResponse,n),o,f));return}e.Response==="started"?i():s(r._.error(r._.format(r.resources.invalidStartResponse,n),null,f))},error:function(n,i,u){i!==o?s(r._.error(r.resources.errorDuringStartRequest,u,n)):(t.log("The start request aborted because connection.stop() was called."),h(r._.error(r.resources.stoppedDuringStartRequest,null,n)))}})},tryAbortStartRequest:function(n){n._.startRequest&&(n._.startRequest.abort(o),delete n._.startRequest)},tryInitialize:function(n,t,i){t.Initialized&&i?i():t.Initialized&&n.log("WARNING! The client received an init message after reconnecting.")},triggerReceived:function(t,i){t._.connectingMessageBuffer.tryBuffer(i)||n(t).triggerHandler(f.onReceived,[i])},processMessages:function(t,i,r){var f;u.markLastMessage(t);i&&(f=u.maximizePersistentResponse(i),u.updateGroups(t,f.GroupsToken),f.MessageId&&(t.messageId=f.MessageId),f.Messages&&(n.each(f.Messages,function(n,i){u.triggerReceived(t,i)}),u.tryInitialize(t,f,r)))},monitorKeepAlive:function(t){var i=t._.keepAliveData;i.monitoring?t.log("Tried to monitor keep alive but it's already being monitored."):(i.monitoring=!0,u.markLastMessage(t),t._.keepAliveData.reconnectKeepAliveUpdate=function(){u.markLastMessage(t)},n(t).bind(f.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t.log("Now monitoring keep alive with a warning timeout of "+i.timeoutWarning+", keep alive timeout of "+i.timeout+" and disconnecting timeout of "+t.disconnectTimeout))},stopMonitoringKeepAlive:function(t){var i=t._.keepAliveData;i.monitoring&&(i.monitoring=!1,n(t).unbind(f.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t._.keepAliveData={},t.log("Stopping the monitoring of the keep alive."))},startHeartbeat:function(n){n._.lastActiveAt=(new Date).getTime();s(n)},markLastMessage:function(n){n._.lastMessageAt=(new Date).getTime()},markActive:function(n){return u.verifyLastActive(n)?(n._.lastActiveAt=(new Date).getTime(),!0):!1},isConnectedOrReconnecting:function(n){return n.state===r.connectionState.connected||n.state===r.connectionState.reconnecting},ensureReconnectingState:function(t){return c(t,r.connectionState.connected,r.connectionState.reconnecting)===!0&&n(t).triggerHandler(f.onReconnecting),t.state===r.connectionState.reconnecting},clearReconnectTimeout:function(n){n&&n._.reconnectTimeout&&(t.clearTimeout(n._.reconnectTimeout),delete n._.reconnectTimeout)},verifyLastActive:function(t){if((new Date).getTime()-t._.lastActiveAt>=t.reconnectWindow){var i=r._.format(r.resources.reconnectWindowTimeout,new Date(t._.lastActiveAt),t.reconnectWindow);return t.log(i),n(t).triggerHandler(f.onError,[r._.error(i,"TimeoutException")]),t.stop(!1,!1),!1}return!0},reconnect:function(n,i){var f=r.transports[i];if(u.isConnectedOrReconnecting(n)&&!n._.reconnectTimeout){if(!u.verifyLastActive(n))return;n._.reconnectTimeout=t.setTimeout(function(){u.verifyLastActive(n)&&(f.stop(n),u.ensureReconnectingState(n)&&(n.log(i+" reconnecting."),f.start(n)))},n.reconnectDelay)}},handleParseFailure:function(t,i,u,e,o){var s=r._.transportError(r._.format(r.resources.parseFailed,i),t.transport,u,o);e&&e(s)?t.log("Failed to parse server response while attempting to connect."):(n(t).triggerHandler(f.onError,[s]),t.stop())},initHandler:function(n){return new h(n)},foreverFrame:{count:0,connections:{}}}}(window.jQuery,window),function(n,t){var r=n.signalR,u=n.signalR.events,f=n.signalR.changeState,i=r.transports._logic;r.transports.webSockets={name:"webSockets",supportsKeepAlive:function(){return!0},send:function(t,f){var e=i.stringifySend(t,f);try{t.socket.send(e)}catch(o){n(t).triggerHandler(u.onError,[r._.transportError(r.resources.webSocketsInvalidState,t.transport,o,t.socket),f])}},start:function(e,o,s){var h,c=!1,l=this,a=!o,v=n(e);if(!t.WebSocket){s();return}e.socket||(h=e.webSocketServerUrl?e.webSocketServerUrl:e.wsProtocol+e.host,h+=i.getUrl(e,this.name,a),e.log("Connecting to websocket endpoint '"+h+"'."),e.socket=new t.WebSocket(h),e.socket.onopen=function(){c=!0;e.log("Websocket opened.");i.clearReconnectTimeout(e);f(e,r.connectionState.reconnecting,r.connectionState.connected)===!0&&v.triggerHandler(u.onReconnect)},e.socket.onclose=function(t){var i;this===e.socket&&(c&&typeof t.wasClean!="undefined"&&t.wasClean===!1?(i=r._.transportError(r.resources.webSocketClosed,e.transport,t),e.log("Unclean disconnect from websocket: "+(t.reason||"[no reason given]."))):e.log("Websocket closed."),s&&s(i)||(i&&n(e).triggerHandler(u.onError,[i]),l.reconnect(e)))},e.socket.onmessage=function(t){var r;try{r=e._parseResponse(t.data)}catch(u){i.handleParseFailure(e,t.data,u,s,t);return}r&&(n.isEmptyObject(r)||r.M?i.processMessages(e,r,o):i.triggerReceived(e,r))})},reconnect:function(n){i.reconnect(n,this.name)},lostConnection:function(n){this.reconnect(n)},stop:function(n){i.clearReconnectTimeout(n);n.socket&&(n.log("Closing the Websocket."),n.socket.close(),n.socket=null)},abort:function(n,t){i.ajaxAbort(n,t)}}}(window.jQuery,window),function(n,t){var i=n.signalR,u=n.signalR.events,e=n.signalR.changeState,r=i.transports._logic,f=function(n){t.clearTimeout(n._.reconnectAttemptTimeoutHandle);delete n._.reconnectAttemptTimeoutHandle};i.transports.serverSentEvents={name:"serverSentEvents",supportsKeepAlive:function(){return!0},timeOut:3e3,start:function(o,s,h){var c=this,l=!1,a=n(o),v=!s,y;if(o.eventSource&&(o.log("The connection already has an event source. Stopping it."),o.stop()),!t.EventSource){h&&(o.log("This browser doesn't support SSE."),h());return}y=r.getUrl(o,this.name,v);try{o.log("Attempting to connect to SSE endpoint '"+y+"'.");o.eventSource=new t.EventSource(y,{withCredentials:o.withCredentials})}catch(p){o.log("EventSource failed trying to connect with error "+p.Message+".");h?h():(a.triggerHandler(u.onError,[i._.transportError(i.resources.eventSourceFailedToConnect,o.transport,p)]),v&&c.reconnect(o));return}v&&(o._.reconnectAttemptTimeoutHandle=t.setTimeout(function(){l===!1&&o.eventSource.readyState!==t.EventSource.OPEN&&c.reconnect(o)},c.timeOut));o.eventSource.addEventListener("open",function(){o.log("EventSource connected.");f(o);r.clearReconnectTimeout(o);l===!1&&(l=!0,e(o,i.connectionState.reconnecting,i.connectionState.connected)===!0&&a.triggerHandler(u.onReconnect))},!1);o.eventSource.addEventListener("message",function(n){var t;if(n.data!=="initialized"){try{t=o._parseResponse(n.data)}catch(i){r.handleParseFailure(o,n.data,i,h,n);return}r.processMessages(o,t,s)}},!1);o.eventSource.addEventListener("error",function(n){var r=i._.transportError(i.resources.eventSourceError,o.transport,n);this===o.eventSource&&(h&&h(r)||(o.log("EventSource readyState: "+o.eventSource.readyState+"."),n.eventPhase===t.EventSource.CLOSED?(o.log("EventSource reconnecting due to the server connection ending."),c.reconnect(o)):(o.log("EventSource error."),a.triggerHandler(u.onError,[r]))))},!1)},reconnect:function(n){r.reconnect(n,this.name)},lostConnection:function(n){this.reconnect(n)},send:function(n,t){r.ajaxSend(n,t)},stop:function(n){f(n);r.clearReconnectTimeout(n);n&&n.eventSource&&(n.log("EventSource calling close()."),n.eventSource.close(),n.eventSource=null,delete n.eventSource)},abort:function(n,t){r.ajaxAbort(n,t)}}}(window.jQuery,window),function(n,t){var r=n.signalR,e=n.signalR.events,o=n.signalR.changeState,i=r.transports._logic,u=function(){var n=t.document.createElement("iframe");return n.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"),n},f=function(){var i=null,f=1e3,n=0;return{prevent:function(){r._.ieVersion<=8&&(n===0&&(i=t.setInterval(function(){var n=u();t.document.body.appendChild(n);t.document.body.removeChild(n);n=null},f)),n++)},cancel:function(){n===1&&t.clearInterval(i);n>0&&n--}}}();r.transports.foreverFrame={name:"foreverFrame",supportsKeepAlive:function(){return!0},iframeClearThreshold:50,start:function(n,r,e){var l=this,s=i.foreverFrame.count+=1,h,o=u(),c=function(){n.log("Forever frame iframe finished loading and is no longer receiving messages.");e&&e()||l.reconnect(n)};if(t.EventSource){e&&(n.log("Forever Frame is not supported by SignalR on browsers with SSE support."),e());return}o.setAttribute("data-signalr-connection-id",n.id);f.prevent();h=i.getUrl(n,this.name);h+="&frameId="+s;t.document.documentElement.appendChild(o);n.log("Binding to iframe's load event.");o.addEventListener?o.addEventListener("load",c,!1):o.attachEvent&&o.attachEvent("onload",c);o.src=h;i.foreverFrame.connections[s]=n;n.frame=o;n.frameId=s;r&&(n.onSuccess=function(){n.log("Iframe transport started.");r()})},reconnect:function(n){var r=this;i.isConnectedOrReconnecting(n)&&i.verifyLastActive(n)&&t.setTimeout(function(){if(i.verifyLastActive(n)&&n.frame&&i.ensureReconnectingState(n)){var u=n.frame,t=i.getUrl(n,r.name,!0)+"&frameId="+n.frameId;n.log("Updating iframe src to '"+t+"'.");u.src=t}},n.reconnectDelay)},lostConnection:function(n){this.reconnect(n)},send:function(n,t){i.ajaxSend(n,t)},receive:function(t,u){var f,e,o;if(t.json!==t._originalJson&&(u=t._originalJson.stringify(u)),o=t._parseResponse(u),i.processMessages(t,o,t.onSuccess),t.state===n.signalR.connectionState.connected&&(t.frameMessageCount=(t.frameMessageCount||0)+1,t.frameMessageCount>r.transports.foreverFrame.iframeClearThreshold&&(t.frameMessageCount=0,f=t.frame.contentWindow||t.frame.contentDocument,f&&f.document&&f.document.body)))for(e=f.document.body;e.firstChild;)e.removeChild(e.firstChild)},stop:function(n){var r=null;if(f.cancel(),n.frame){if(n.frame.stop)n.frame.stop();else try{r=n.frame.contentWindow||n.frame.contentDocument;r.document&&r.document.execCommand&&r.document.execCommand("Stop")}catch(u){n.log("Error occurred when stopping foreverFrame transport. Message = "+u.message+".")}n.frame.parentNode===t.document.documentElement&&t.document.documentElement.removeChild(n.frame);delete i.foreverFrame.connections[n.frameId];n.frame=null;n.frameId=null;delete n.frame;delete n.frameId;delete n.onSuccess;delete n.frameMessageCount;n.log("Stopping forever frame.")}},abort:function(n,t){i.ajaxAbort(n,t)},getConnection:function(n){return i.foreverFrame.connections[n]},started:function(t){o(t,r.connectionState.reconnecting,r.connectionState.connected)===!0&&n(t).triggerHandler(e.onReconnect)}}}(window.jQuery,window),function(n,t){var r=n.signalR,u=n.signalR.events,e=n.signalR.changeState,f=n.signalR.isDisconnecting,i=r.transports._logic;r.transports.longPolling={name:"longPolling",supportsKeepAlive:function(){return!1},reconnectDelay:3e3,start:function(o,s,h){var a=this,v=function(){v=n.noop;o.log("LongPolling connected.");s?s():o.log("WARNING! The client received an init message after reconnecting.")},y=function(n){return h(n)?(o.log("LongPolling failed to connect."),!0):!1},c=o._,l=0,p=function(i){t.clearTimeout(c.reconnectTimeoutId);c.reconnectTimeoutId=null;e(i,r.connectionState.reconnecting,r.connectionState.connected)===!0&&(i.log("Raising the reconnect event"),n(i).triggerHandler(u.onReconnect))},w=36e5;o.pollXhr&&(o.log("Polling xhr requests already exists, aborting."),o.stop());o.messageId=null;c.reconnectTimeoutId=null;c.pollTimeoutId=t.setTimeout(function(){(function e(s,h){var g=s.messageId,nt=g===null,k=!nt,tt=!h,d=i.getUrl(s,a.name,k,tt,!0),b={};(s.messageId&&(b.messageId=s.messageId),s.groupsToken&&(b.groupsToken=s.groupsToken),f(s)!==!0)&&(o.log("Opening long polling request to '"+d+"'."),s.pollXhr=i.ajax(o,{xhrFields:{onprogress:function(){i.markLastMessage(o)}},url:d,type:"POST",contentType:r._.defaultContentType,data:b,timeout:o._.pollTimeout,success:function(r){var h,w=0,u,a;o.log("Long poll complete.");l=0;try{h=o._parseResponse(r)}catch(b){i.handleParseFailure(s,r,b,y,s.pollXhr);return}(c.reconnectTimeoutId!==null&&p(s),h&&(u=i.maximizePersistentResponse(h)),i.processMessages(s,h,v),u&&n.type(u.LongPollDelay)==="number"&&(w=u.LongPollDelay),f(s)!==!0)&&(a=u&&u.ShouldReconnect,!a||i.ensureReconnectingState(s))&&(w>0?c.pollTimeoutId=t.setTimeout(function(){e(s,a)},w):e(s,a))},error:function(f,h){var v=r._.transportError(r.resources.longPollFailed,o.transport,f,s.pollXhr);if(t.clearTimeout(c.reconnectTimeoutId),c.reconnectTimeoutId=null,h==="abort"){o.log("Aborted xhr request.");return}if(!y(v)){if(l++,o.state!==r.connectionState.reconnecting&&(o.log("An error occurred using longPolling. Status = "+h+".  Response = "+f.responseText+"."),n(s).triggerHandler(u.onError,[v])),(o.state===r.connectionState.connected||o.state===r.connectionState.reconnecting)&&!i.verifyLastActive(o))return;if(!i.ensureReconnectingState(s))return;c.pollTimeoutId=t.setTimeout(function(){e(s,!0)},a.reconnectDelay)}}}),k&&h===!0&&(c.reconnectTimeoutId=t.setTimeout(function(){p(s)},Math.min(1e3*(Math.pow(2,l)-1),w))))})(o)},250)},lostConnection:function(n){n.pollXhr&&n.pollXhr.abort("lostConnection")},send:function(n,t){i.ajaxSend(n,t)},stop:function(n){t.clearTimeout(n._.pollTimeoutId);t.clearTimeout(n._.reconnectTimeoutId);delete n._.pollTimeoutId;delete n._.reconnectTimeoutId;n.pollXhr&&(n.pollXhr.abort(),n.pollXhr=null,delete n.pollXhr)},abort:function(n,t){i.ajaxAbort(n,t)}}}(window.jQuery,window),function(n){function r(n){return n+e}function s(n,t,i){for(var f=n.length,u=[],r=0;r<f;r+=1)n.hasOwnProperty(r)&&(u[r]=t.call(i,n[r],r,n));return u}function h(t){return n.isFunction(t)?null:n.type(t)==="undefined"?null:t}function u(n){for(var t in n)if(n.hasOwnProperty(t))return!0;return!1}function f(n,t){var i=n._.invocationCallbacks,r,f;u(i)&&n.log("Clearing hub invocation callbacks with error: "+t+".");n._.invocationCallbackId=0;delete n._.invocationCallbacks;n._.invocationCallbacks={};for(f in i)r=i[f],r.method.call(r.scope,{E:t})}function i(n,t){return new i.fn.init(n,t)}function t(i,r){var u={qs:null,logging:!1,useDefaultPath:!0};return n.extend(u,r),(!i||u.useDefaultPath)&&(i=(i||"")+"/signalr"),new t.fn.init(i,u)}var e=".hubProxy",o=n.signalR;i.fn=i.prototype={init:function(n,t){this.state={};this.connection=n;this.hubName=t;this._={callbackMap:{}}},constructor:i,hasSubscriptions:function(){return u(this._.callbackMap)},on:function(t,i){var u=this,f=u._.callbackMap;return t=t.toLowerCase(),f[t]||(f[t]={}),f[t][i]=function(n,t){i.apply(u,t)},n(u).bind(r(t),f[t][i]),u},off:function(t,i){var e=this,o=e._.callbackMap,f;return t=t.toLowerCase(),f=o[t],f&&(f[i]?(n(e).unbind(r(t),f[i]),delete f[i],u(f)||delete o[t]):i||(n(e).unbind(r(t)),delete o[t])),e},invoke:function(t){var i=this,r=i.connection,e=n.makeArray(arguments).slice(1),c=s(e,h),f={H:i.hubName,M:t,A:c,I:r._.invocationCallbackId},u=n.Deferred(),l=function(f){var e=i._maximizeHubResponse(f),h,s;n.extend(i.state,e.State);e.Progress?u.notifyWith?u.notifyWith(i,[e.Progress.Data]):r._.progressjQueryVersionLogged||(r.log("A hub method invocation progress update was received but the version of jQuery in use ("+n.prototype.jquery+") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."),r._.progressjQueryVersionLogged=!0):e.Error?(e.StackTrace&&r.log(e.Error+"\n"+e.StackTrace+"."),h=e.IsHubException?"HubException":"Exception",s=o._.error(e.Error,h),s.data=e.ErrorData,r.log(i.hubName+"."+t+" failed to execute. Error: "+s.message),u.rejectWith(i,[s])):(r.log("Invoked "+i.hubName+"."+t),u.resolveWith(i,[e.Result]))};return r._.invocationCallbacks[r._.invocationCallbackId.toString()]={scope:i,method:l},r._.invocationCallbackId+=1,n.isEmptyObject(i.state)||(f.S=i.state),r.log("Invoking "+i.hubName+"."+t),r.send(f),u.promise()},_maximizeHubResponse:function(n){return{State:n.S,Result:n.R,Progress:n.P?{Id:n.P.I,Data:n.P.D}:null,Id:n.I,IsHubException:n.H,Error:n.E,StackTrace:n.T,ErrorData:n.D}}};i.fn.init.prototype=i.fn;t.fn=t.prototype=n.connection();t.fn.init=function(t,i){var e={qs:null,logging:!1,useDefaultPath:!0},u=this;n.extend(e,i);n.signalR.fn.init.call(u,t,e.qs,e.logging);u.proxies={};u._.invocationCallbackId=0;u._.invocationCallbacks={};u.received(function(t){var f,o,e,i,s,h;t&&(typeof t.P!="undefined"?(e=t.P.I.toString(),i=u._.invocationCallbacks[e],i&&i.method.call(i.scope,t)):typeof t.I!="undefined"?(e=t.I.toString(),i=u._.invocationCallbacks[e],i&&(u._.invocationCallbacks[e]=null,delete u._.invocationCallbacks[e],i.method.call(i.scope,t))):(f=this._maximizeClientHubInvocation(t),u.log("Triggering client hub event '"+f.Method+"' on hub '"+f.Hub+"'."),s=f.Hub.toLowerCase(),h=f.Method.toLowerCase(),o=this.proxies[s],n.extend(o.state,f.State),n(o).triggerHandler(r(h),[f.Args])))});u.error(function(n,t){var i,r;t&&(i=t.I,r=u._.invocationCallbacks[i],r&&(u._.invocationCallbacks[i]=null,delete u._.invocationCallbacks[i],r.method.call(r.scope,{E:n})))});u.reconnecting(function(){u.transport&&u.transport.name==="webSockets"&&f(u,"Connection started reconnecting before invocation result was received.")});u.disconnected(function(){f(u,"Connection was disconnected before invocation result was received.")})};t.fn._maximizeClientHubInvocation=function(n){return{Hub:n.H,Method:n.M,Args:n.A,State:n.S}};t.fn._registerSubscribedHubs=function(){var t=this;t._subscribedToHubs||(t._subscribedToHubs=!0,t.starting(function(){var i=[];n.each(t.proxies,function(n){this.hasSubscriptions()&&(i.push({name:n}),t.log("Client subscribed to hub '"+n+"'."))});i.length===0&&t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");t.data=t.json.stringify(i)}))};t.fn.createHubProxy=function(n){n=n.toLowerCase();var t=this.proxies[n];return t||(t=i(this,n),this.proxies[n]=t),this._registerSubscribedHubs(),t};t.fn.init.prototype=t.fn;n.hubConnection=t}(window.jQuery,window),function(n){n.signalR.version="2.3.0"}(window.jQuery);;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*
 AngularJS v1.6.9
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(w){'use strict';function oe(a){if(B(a))u(a.objectMaxDepth)&&(Mc.objectMaxDepth=Wb(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Mc}function Wb(a){return Y(a)&&0<a}function K(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.9/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function wa(a){if(null==a||Za(a))return!1;if(I(a)||E(a)||z&&a instanceof z)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(C(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||wa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ra.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Xb(a){return function(b,d){a(d,b)}}function pe(){return++qb}function Yb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(B(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],p=g[m];d&&B(p)?fa(p)?a[m]=new Date(p.valueOf()):$a(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):Zb(p)?a[m]=p.clone():(B(a[m])||(a[m]=I(p)?[]:{}),Yb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function O(a){return Yb(a,xa.call(arguments,1),!1)}function qe(a){return Yb(a,xa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function $b(a,b){return O(Object.create(a),b)}function D(){}
function ab(a){return a}function la(a){return function(){return a}}function ac(a){return C(a.toString)&&a.toString!==ia}function x(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function B(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function fa(a){return"[object Date]"===ia.call(a)}function bc(a){switch(ia.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function C(a){return"function"===typeof a}function $a(a){return"[object RegExp]"===ia.call(a)}function Za(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Na(a){return"boolean"===typeof a}function re(a){return a&&Y(a.length)&&se.test(ia.call(a))}function Zb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function te(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function ya(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Nc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)ra.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!B(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Za(a)||bb(a))throw qa("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ia.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(C(a.cloneNode))return a.cloneNode(!0)}
var g=[],h=[];d=Wb(d)?d:NaN;if(b){if(re(b)||"[object ArrayBuffer]"===ia.call(b))throw qa("cpta");if(a===b)throw qa("cpi");I(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d)}function cc(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?cc(a.getTime(),b.getTime()):!1;if($a(a))return $a(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||Za(a)||Za(b)||I(b)||fa(b)||$a(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!C(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(xa.call(b,d))}function Ra(a,b){var d=2<arguments.length?xa.call(arguments,2):[];return!C(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Za(b)?d="$WINDOW":b&&w.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return E(a)?JSON.parse(a):a}function Sc(a,b){a=a.replace(ue,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return U(d)?b:d}function dc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Sc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function za(a){a=z(a).clone().empty();var b=z("<div>").append(a).html();try{return a[0].nodeType===Oa?L(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function ec(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,
"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),u(e)&&(f=u(f)?Tc(f):!0,ra.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function fc(a){var b=[];r(a,function(a,c){I(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function fb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ve(a,b){var d,c,e=Ha.length;for(c=0;c<e;++c)if(d=Ha[c]+b,E(d=a.getAttribute(d)))return d;return null}function we(a,b){var d,c,e={};r(Ha,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Ha,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(xe?(e.strictDi=null!==ve(d,"strict-di"),
b(d,c?[c]:[],e)):w.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){B(d)||(d={});d=O({strictDi:!1},d);var c=function(){a=z(a);if(a.injector()){var c=a[0]===w.document?"document":za(a);throw qa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=gb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;w&&e.test(w.name)&&(d.debugInfoEnabled=!0,w.name=w.name.replace(e,""));if(w&&!f.test(w.name))return c();w.name=w.name.replace(f,"");$.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};C($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ye(){w.name=
"NG_ENABLE_DEBUG_INFO!"+w.name;w.location.reload()}function ze(a){a=$.element(a).injector();if(!a)throw qa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ae,function(a,c){return(c?b:"")+a.toLowerCase()})}function Be(){var a;if(!Wc){var b=rb();(ma=x(b)?w.jQuery:b?w[b]:void 0)&&ma.fn.on?(z=ma,O(ma.fn,{scope:Sa.scope,isolateScope:Sa.isolateScope,controller:Sa.controller,injector:Sa.injector,inheritedData:Sa.inheritedData}),a=ma.cleanData,ma.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=ma._data(f,"events"))&&c.$destroy&&ma(f).triggerHandler("$destroy");a(b)}):z=V;$.element=z;Wc=!0}}function hb(a,b,d){if(!a)throw qa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&I(a)&&(a=a[a.length-1]);hb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ia(a,b){if("hasOwnProperty"===a)throw qa("badname",b);}function Xc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&C(a)?Ra(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=z(xa.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function gc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!ac(a)||I(a)||fa(a)?eb(a):a.toString()}return a}function Ce(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=K("$injector"),c=K("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||K;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],n=[],F=[],s=a("$injector","invoke","push",n),v={_invokeQueue:e,_configBlocks:n,
_runBlocks:F,info:function(a){if(u(a)){if(!B(a))throw c("aobj","value");k=a;return this}return k},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider",
"component"),config:s,run:function(a){F.push(a);return this}};h&&s(h);return v})}})}function ka(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(B(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function De(a,b){var d=[];Wb(b)&&(a=$.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(B(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ee(a){O(a,{errorHandlingConfig:oe,bootstrap:Uc,copy:pa,extend:O,merge:qe,equals:sa,
element:z,forEach:r,injector:gb,noop:D,bind:Ra,toJson:eb,fromJson:Rc,identity:ab,isUndefined:x,isDefined:u,isString:E,isFunction:C,isObject:B,isNumber:Y,isElement:Zb,isArray:I,version:Fe,isDate:fa,lowercase:L,uppercase:ub,callbacks:{$$counter:0},getTestability:ze,reloadWithDebugInfo:ye,$$minErr:K,$$csp:Ja,$$encodeUriSegment:fb,$$encodeUriQuery:ja,$$stringify:gc});ic=Ce(w);ic("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ge});a.provider("$compile",Yc).directive({a:He,input:Zc,
textarea:Zc,form:Ie,script:Je,select:Ke,option:Le,ngBind:Me,ngBindHtml:Ne,ngBindTemplate:Oe,ngClass:Pe,ngClassEven:Qe,ngClassOdd:Re,ngCloak:Se,ngController:Te,ngForm:Ue,ngHide:Ve,ngIf:We,ngInclude:Xe,ngInit:Ye,ngNonBindable:Ze,ngPluralize:$e,ngRepeat:af,ngShow:bf,ngStyle:cf,ngSwitch:df,ngSwitchWhen:ef,ngSwitchDefault:ff,ngOptions:gf,ngTransclude:hf,ngModel:jf,ngList:kf,ngChange:lf,pattern:$c,ngPattern:$c,required:ad,ngRequired:ad,minlength:bd,ngMinlength:bd,maxlength:cd,ngMaxlength:cd,ngValue:mf,
ngModelOptions:nf}).directive({ngInclude:of}).directive(vb).directive(dd);a.provider({$anchorScroll:pf,$animate:qf,$animateCss:rf,$$animateJs:sf,$$animateQueue:tf,$$AnimateRunner:uf,$$animateAsyncRun:vf,$browser:wf,$cacheFactory:xf,$controller:yf,$document:zf,$$isDocumentHidden:Af,$exceptionHandler:Bf,$filter:ed,$$forceReflow:Cf,$interpolate:Df,$interval:Ef,$http:Ff,$httpParamSerializer:Gf,$httpParamSerializerJQLike:Hf,$httpBackend:If,$xhrFactory:Jf,$jsonpCallbacks:Kf,$location:Lf,$log:Mf,$parse:Nf,
$rootScope:Of,$q:Pf,$$q:Qf,$sce:Rf,$sceDelegate:Sf,$sniffer:Tf,$templateCache:Uf,$templateRequest:Vf,$$testability:Wf,$timeout:Xf,$window:Yf,$$rAF:Zf,$$jqLite:$f,$$Map:ag,$$cookieReader:bg})}]).info({angularVersion:"1.6.9"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(cg,wb)}function jc(a){a=a.nodeType;return 1===a||!a||9===a}function fd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(kc.test(a)){d=e.appendChild(b.createElement("div"));c=(dg.exec(a)||["",""])[1].toLowerCase();
c=aa[c]||aa._default;d.innerHTML=c[1]+a.replace(eg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function V(a){if(a instanceof V)return a;var b;E(a)&&(a=Q(a),b=!0);if(!(this instanceof V)){if(b&&"<"!==a.charAt(0))throw lc("nosel");return new V(a)}if(b){b=w.document;var d;a=(d=fg.exec(a))?[b.createElement(d[1])]:(d=fd(a,b))?d.childNodes:
[];mc(this,a)}else C(a)?gd(a):mc(this,a)}function nc(a){return a.cloneNode(!0)}function yb(a,b){!b&&jc(a)&&z.cleanData([a]);a.querySelectorAll&&z.cleanData(a.querySelectorAll("*"))}function hd(a,b,d,c){if(u(c))throw lc("offargs");var e=(c=zb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&cb(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}
function oc(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),hd(a)),delete ib[d],a.ng339=void 0))}function zb(a,b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++gg,d=ib[d]={events:{},data:{},handle:void 0});return d}function pc(a,b,d){if(jc(a)){var c,e=u(d),f=!e&&b&&!B(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=Q(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",Q(c))}}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=Q(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",Q(c))}}function mc(a,
b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=z.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||
yb(a);var d=a.parentNode;d&&d.removeChild(a)}function hg(a,b){b=b||w;if("complete"===b.document.readyState)b.setTimeout(a);else z(b).on("load",a)}function gd(a){function b(){w.document.removeEventListener("DOMContentLoaded",b);w.removeEventListener("load",b);a()}"complete"===w.document.readyState?w.setTimeout(a):(w.document.addEventListener("DOMContentLoaded",b),w.addEventListener("load",b))}function kd(a,b){var d=Gb[b.toLowerCase()];return d&&ld[ya(a)]&&d}function ig(a,b){var d=function(c,d){c.isDefaultPrevented=
function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||jg;1<g&&(f=ka(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function jg(a,
b,d){d.call(a,b)}function kg(a,b,d){var c=b.relatedTarget;c&&(c===a||lg.call(a,c))||d.call(a,b)}function $f(){this.$get=function(){return O(V,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||pe)():d+":"+
a}function md(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(mg,"");return a.match(ng)||a.match(og)}function pg(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function gb(a,b){function d(a){return function(b,c){if(B(b))r(b,Xb(a));else return a(b,c)}}function c(a,b){Ia(a,"service");if(C(b)||I(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=
v.invoke(b,this);if(x(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){hb(x(a)||I(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=n.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{E(a)?(c=ic(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(n.invoke(a)):I(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw I(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(g){throw a[b]===k&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=gb.$$annotate(a,b,g);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw Ba("itkn",
l);f.push(c&&c.hasOwnProperty(l)?c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;Na(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:gb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ia(a,"constant");p[a]=b;F[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},
n=p.$injector=h(p,function(a,b){$.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),F={},s=h(F,function(a,b){var c=n.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=s;p.$injectorProvider={$get:la(s)};v.modules=n.modules=S();var y=g(a),v=s.get("$injector");v.strictDi=b;r(y,function(a){a&&v.invoke(a)});v.loadNewModules=function(a){r(g(a),function(a){a&&v.invoke(a)})};return v}function pf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",
function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ya(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Zb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&
f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||hg(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function qg(a){E(a)&&(a=a.split(" "));var b=S();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ka(a){return B(a)?a:{}}function rg(a,b,d,c){function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(s--,0===s)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}
function f(){A=null;h()}function g(){y=H();y=x(y)?null:y;sa(y,J)&&(y=J);t=J=y}function h(){var a=t;g();if(Aa!==k.url()||a!==y)Aa=k.url(),t=y,r(G,function(a){a(k.url(),y)})}var k=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,F={};k.isMock=!1;var s=0,v=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){s++};k.notifyWhenNoOutstandingRequests=function(a){0===s?a():v.push(a)};var y,t,Aa=l.href,hc=b.find("base"),A=null,H=c.history?function(){try{return m.state}catch(a){}}:
D;g();k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=t===e;if(Aa===b&&(!c.history||f))return k;var h=Aa&&La(Aa)===La(b);Aa=b;t=e;!c.history||h&&f?(h||(A=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(A=b)):(m[d?"replaceState":"pushState"](e,"",b),g());A&&(A=b);return k}return A||l.href.replace(/%27/g,"'")};k.state=function(){return y};var G=[],ba=!1,J=null;k.onUrlChange=function(b){if(!ba){if(c.history)z(a).on("popstate",
f);z(a).on("hashchange",f);ba=!0}G.push(b);return b};k.$$applicationDestroyed=function(){z(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=hc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};k.defer=function(a,b){var c;s++;c=p(function(){delete F[c];e(a)},b||0);F[c]=!0;return c};k.defer.cancel=function(a){return F[a]?(delete F[a],n(a),e(D),!0):!1}}function wf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new rg(a,c,b,
d)}]}function xf(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw K("$cacheFactory")("iid",a);var g=0,h=O({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),p=null,n=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=
m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();p=n=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return O({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Uf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Yc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=S();r(a,function(a,g){if(a in p)e[g]=p[a];else{var f=a.match(d);if(!f)throw ca("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(p[a]=e[g])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw ca("baddir",a);if(a!==a.trim())throw ca("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!I(b)&&B(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=te("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=S();this.directive=function hc(b,d){hb(b,"name");Ia(b,"directive");E(b)?(c(b),hb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(g,
f){try{var h=a.invoke(g);C(h)?h={compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw ca("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Xb(hc));return this};this.component=function A(a,b){function c(a){function e(b){return C(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:sg(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!E(a))return r(a,Xb(Ra(this,A))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,C(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,
c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};var F=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(F=a,this):F};var s=!1;this.strictComponentBindingsEnabled=function(a){return u(a)?(s=a,this):s};var v=10;this.onChangesTtl=
function(a){return arguments.length?(v=a,this):v};var y=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(y=a,this):y};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,p,R,M,T,P,q){function N(){try{if(!--Fa)throw ha=void 0,ca("infchng",v);M.$apply(function(){for(var a=[],b=0,
c=ha.length;b<c;++b)try{ha[b]()}catch(d){a.push(d)}ha=void 0;if(a.length)throw a;})}finally{Fa++}}function qc(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Ta(a,b,c){Ba.innerHTML="<span "+b+">";b=Ba.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function na(a,b){try{a.addClass(b)}catch(c){}}function da(a,b,c,d,e){a instanceof z||(a=z(a));var g=Ua(a,b,a,c,d,e);da.$$addScopeClass(a);
var f=null;return function(b,c,d){if(!a)throw ca("multilink");hb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==ya(d)&&ia.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?z(ka(f,z("<div>").append(a).html())):c?Sa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&
c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function Ua(a,b,c,d,e,g){function f(a,c,d,e){var g,k,l,m,p,n,G;if(t)for(G=Array(c.length),m=0;m<h.length;m+=3)g=h[m],G[g]=c[g];else G=c;m=0;for(p=h.length;m<p;)k=G[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(z(k),l)):l=a,n=c.transcludeOnThisElement?Ma(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Ma(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,void 0,e)}for(var h=[],k=I(a)||a instanceof z,l,m,p,n,t,G=0;G<a.length;G++){l=new qc;
11===Ca&&Da(a,G,k);m=K(a[G],[],l,0===G?d:void 0,e);(g=m.length?Y(m,a[G],l,b,c,null,[],[],g):null)&&g.scope&&da.$$addScopeClass(l.$$element);l=g&&g.terminal||!(p=a[G].childNodes)||!p.length?null:Ua(p,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(G,g,l),n=!0,t=t||g;g=null}return n?f:null}function Da(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Oa)for(;;){g=e?d.nextSibling:a[b+1];if(!g||g.nodeType!==Oa)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);
c&&g===a[b+1]&&a.splice(b+1,1)}}function Ma(a,b,c){function d(e,g,f,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=S(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?Ma(a,b.$$slots[g],c):null;return d}function K(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=ya(a);U(b,Ea(f),"E",d,e);for(var k,l,m,p,n=a.attributes,t=0,G=n&&n.length;t<G;t++){var H=!1,F=!1;k=n[t];l=k.name;m=k.value;k=Ea(l);(p=Pa.test(k))&&
(l=l.replace(od,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Qa))&&$(k[1])&&(H=l,F=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ea(l.toLowerCase());g[k]=l;if(p||!c.hasOwnProperty(k))c[k]=m,kd(a,k)&&(c[k]=!0);wa(a,b,m,k,p);U(b,k,"A",d,e,H,F)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!La)break;g=a.className;B(g)&&(g=g.animVal);if(E(g)&&""!==g)for(;a=h.exec(g);)k=Ea(a[2]),U(b,k,"C",d,e)&&(c[k]=Q(a[3])),g=g.substr(a.index+
a[0].length);break;case Oa:oa(b,a.nodeValue);break;case 8:if(!Ka)break;rc(a,b,c,d,e)}b.sort(la);return b}function rc(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ea(f[1]);U(b,h,"M",d,e)&&(c[h]=Q(f[2]))}}catch(k){}}function pd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ca("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function V(a,b,c){return function(d,e,g,f,h){e=
pd(e[0],b,c);return a(d,e,g,f,h)}}function W(a,b,c,d,e,g){var f;return a?da(b,c,d,e,g):function(){f||(f=da(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function Y(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=V(a,c,d));a.require=s.require;a.directiveName=R;if(J===s||s.$$isolateScope)a=ta(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=V(b,c,d));b.require=s.require;b.directiveName=R;if(J===s||s.$$isolateScope)b=ta(b,{isolateScope:!0});k.push(b)}}function p(a,e,g,f,l){function m(a,b,c,d){var e;
bb(a)||(d=c,c=b,b=a,a=void 0);T&&(e=M);c||(c=T?ga.parent():ga);if(d){var g=l.$$slots[d];if(g)return g(a,b,e,c,N);if(x(g))throw ca("noslot",d,za(ga));}else return l(a,b,e,c,N)}var n,s,v,y,ba,M,R,ga;b===g?(f=d,ga=d.$$element):(ga=z(g),f=new qc(ga,d));ba=e;J?y=e.$new(!0):t&&(ba=e.$parent);l&&(R=m,R.$$boundTransclude=l,R.isSlotFilled=function(a){return!!l.$$slots[a]});H&&(M=ea(ga,f,R,H,y,e,J));J&&(da.$$addScopeInfo(ga,y,!0,!(A&&(A===J||A===J.$$originalDirective))),da.$$addScopeClass(ga,!0),y.$$isolateBindings=
J.$$isolateBindings,s=qa(e,f,y,y.$$isolateBindings,J),s.removeWatches&&y.$on("$destroy",s.removeWatches));for(n in M){s=H[n];v=M[n];var P=s.$$bindings.bindToController;if(F){v.bindingInfo=P?qa(ba,f,v.instance,P,s):{};var q=v();q!==v.instance&&(v.instance=q,ga.data("$"+s.name+"Controller",q),v.bindingInfo.removeWatches&&v.bindingInfo.removeWatches(),v.bindingInfo=qa(ba,f,v.instance,P,s))}else v.instance=v(),ga.data("$"+s.name+"Controller",v.instance),v.bindingInfo=qa(ba,f,v.instance,P,s)}r(H,function(a,
b){var c=a.require;a.bindToController&&!I(c)&&B(c)&&O(M[b].instance,X(b,c,ga,M))});r(M,function(a){var b=a.instance;if(C(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(C(b.$onInit))try{b.$onInit()}catch(e){c(e)}C(b.$doCheck)&&(ba.$watch(function(){b.$doCheck()}),b.$doCheck());C(b.$onDestroy)&&ba.$on("$destroy",function(){b.$onDestroy()})});n=0;for(s=h.length;n<s;n++)v=h[n],va(v,v.isolateScope?y:e,ga,f,v.require&&X(v.directiveName,v.require,ga,M),R);var N=e;J&&(J.template||
null===J.templateUrl)&&(N=y);a&&a(N,g.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)v=k[n],va(v,v.isolateScope?y:e,ga,f,v.require&&X(v.directiveName,v.require,ga,M),R);r(M,function(a){a=a.instance;C(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,H=l.controllerDirectives,J=l.newIsolateScopeDirective,A=l.templateDirective,y=l.nonTlbTranscludeDirective,ba=!1,M=!1,T=l.hasElementTranscludeDirective,v=d.$$element=z(b),s,R,P,q=e,N,u=!1,Ib=!1,w,Da=0,D=a.length;Da<
D;Da++){s=a[Da];var Ta=s.$$start,E=s.$$end;Ta&&(v=pd(b,Ta,E));P=void 0;if(n>s.priority)break;if(w=s.scope)s.templateUrl||(B(w)?(aa("new/isolated scope",J||t,s,v),J=s):aa("new/isolated scope",J,s,v)),t=t||s;R=s.name;if(!u&&(s.replace&&(s.templateUrl||s.template)||s.transclude&&!s.$$tlb)){for(w=Da+1;u=a[w++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){Ib=!0;break}u=!0}!s.templateUrl&&s.controller&&(H=H||S(),aa("'"+R+"' controller",H[R],s,v),H[R]=s);if(w=s.transclude)if(ba=!0,
s.$$tlb||(aa("transclusion",y,s,v),y=s),"element"===w)T=!0,n=s.priority,P=v,v=d.$$element=z(da.$$createComment(R,d[R])),b=v[0],ma(g,xa.call(P,0),b),P[0].$$parentNode=P[0].parentNode,q=W(Ib,P,e,n,f&&f.name,{nonTlbTranscludeDirective:y});else{var na=S();if(B(w)){P=[];var Ua=S(),Ma=S();r(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Ua[a]=b;na[b]=null;Ma[b]=c});r(v.contents(),function(a){var b=Ua[Ea(ya(a))];b?(Ma[b]=!0,na[b]=na[b]||[],na[b].push(a)):P.push(a)});r(Ma,function(a,b){if(!a)throw ca("reqslot",
b);});for(var L in na)na[L]&&(na[L]=W(Ib,na[L],e))}else P=z(nc(b)).contents();v.empty();q=W(Ib,P,e,void 0,void 0,{needsNewScope:s.$$isolateScope||s.$$newScope});q.$$slots=na}if(s.template)if(M=!0,aa("template",A,s,v),A=s,w=C(s.template)?s.template(v,d):s.template,w=Ia(w),s.replace){f=s;P=kc.test(w)?qd(ka(s.templateNamespace,Q(w))):[];b=P[0];if(1!==P.length||1!==b.nodeType)throw ca("tplrt",R,"");ma(g,v,b);D={$attr:{}};w=K(b,[],D);var rc=a.splice(Da+1,a.length-(Da+1));(J||t)&&Z(w,J,t);a=a.concat(w).concat(rc);
fa(d,D);D=a.length}else v.html(w);if(s.templateUrl)M=!0,aa("template",A,s,v),A=s,s.replace&&(f=s),p=ja(a.splice(Da,a.length-Da),v,d,g,ba&&q,h,k,{controllerDirectives:H,newScopeDirective:t!==s&&t,newIsolateScopeDirective:J,templateDirective:A,nonTlbTranscludeDirective:y}),D=a.length;else if(s.compile)try{N=s.compile(v,d,q);var U=s.$$originalDirective||s;C(N)?m(null,Ra(U,N),Ta,E):N&&m(Ra(U,N.pre),Ra(U,N.post),Ta,E)}catch($){c($,za(v))}s.terminal&&(p.terminal=!0,n=Math.max(n,s.priority))}p.scope=t&&
!0===t.scope;p.transcludeOnThisElement=ba;p.templateOnThisElement=M;p.transclude=q;l.hasElementTranscludeDirective=T;return p}function X(a,b,c,d){var e;if(E(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw ca("ctreq",b,a);}else if(I(b))for(e=[],f=0,g=b.length;f<g;f++)e[f]=X(a,b[f],c,d);else B(b)&&(e={},r(b,function(b,g){e[g]=X(a,b,c,d)}));return e||
null}function ea(a,b,c,d,e,g,f){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=R(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=$b(a[d],{$$isolateScope:b,$$newScope:c})}function U(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=
h[p],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=$b(c,{$$start:k,$$end:l}));if(!c.$$bindings){var t=m=c,G=c.name,H={isolateScope:null,bindToController:null};B(t.scope)&&(!0===t.bindToController?(H.bindToController=d(t.scope,G,!0),H.isolateScope={}):H.isolateScope=d(t.scope,G,!1));B(t.bindToController)&&(H.bindToController=d(t.bindToController,G,!0));if(H.bindToController&&!t.controller)throw ca("noctrl",G);m=m.$$bindings=H;B(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);
m=c}}return m}function $(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function fa(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ja(a,b,d,g,f,h,k,l){var m=[],p,n,t=b[0],H=a.shift(),s=$b(H,{templateUrl:null,
transclude:null,replace:null,$$originalDirective:H}),F=C(H.templateUrl)?H.templateUrl(b,d):H.templateUrl,v=H.templateNamespace;b.empty();e(F).then(function(c){var e,G;c=Ia(c);if(H.replace){c=kc.test(c)?qd(ka(v,Q(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ca("tplrt",H.name,F);c={$attr:{}};ma(g,b,e);var J=K(e,[],c);B(H.scope)&&Z(J,!0);a=J.concat(a);fa(d,c)}else e=t,b.html(c);a.unshift(s);p=Y(a,e,d,f,b,H,h,k,l);r(g,function(a,c){a===e&&(g[c]=b[0])});for(n=Ua(b[0].childNodes,f);m.length;){c=
m.shift();G=m.shift();var y=m.shift(),A=m.shift(),J=b[0];if(!c.$$destroyed){if(G!==t){var M=G.className;l.hasElementTranscludeDirective&&H.replace||(J=nc(e));ma(y,z(G),J);na(z(J),M)}G=p.transcludeOnThisElement?Ma(c,p.transclude,A):A;p(n,c,J,g,G)}}m=null}).catch(function(a){bc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(p.transcludeOnThisElement&&(a=Ma(b,p.transclude,e)),p(n,b,c,d,a)))}}function la(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<
b.name?-1:1:a.index-b.index}function aa(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ca("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function oa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ka(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=
w.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ua(a,b){if("srcdoc"===b)return T.HTML;var c=ya(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return T.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return T.RESOURCE_URL}function wa(a,c,d,e,g){var f=ua(a,e),h=k[e]||g,l=b(d,!g,f,h);if(l){if("multiple"===e&&"select"===ya(a))throw ca("selmulti",
za(a));if(m.test(e))throw ca("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=S());var k=g[e];k!==d&&(l=k&&b(k,!0,f,h),d=k);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function ma(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<
k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&(a.context=c);break}g&&g.replaceChild(c,d);a=w.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);z.hasData(d)&&(z.data(c,z.data(d)),z(d).off("$destroy"));z.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ta(a,b){return O(function(){return a.apply(null,arguments)},a,b)}function va(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,za(d))}}function pa(a,b){if(s)throw ca("missingattr",
a,b);}function qa(a,c,d,e,g){function f(b,c,e){C(d.$onChanges)&&!cc(c,e)&&(ha||(a.$$postDigest(N),ha=[]),m||(m={},ha.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,t,G,s,F;switch(e.mode){case "@":n||ra.call(c,m)||(pa(m,g.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(E(a)||Na(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;t=c[m];E(t)?d[h]=b(t)(a):Na(t)&&(d[h]=t);l[h]=new Jb(sc,
d[h]);k.push(n);break;case "=":if(!ra.call(c,m)){if(n)break;pa(m,g.name);c[m]=void 0}if(n&&!c[m])break;G=p(c[m]);F=G.literal?sa:cc;s=G.assign||function(){t=d[h]=G(a);throw ca("nonassign",c[m],m,g.name);};t=d[h]=G(a);n=function(b){F(b,d[h])||(F(b,t)?s(a,b=d[h]):d[h]=b);return t=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,G.literal);k.push(n);break;case "<":if(!ra.call(c,m)){if(n)break;pa(m,g.name);c[m]=void 0}if(n&&!c[m])break;G=p(c[m]);var v=G.literal,y=d[h]=
G(a);l[h]=new Jb(sc,d[h]);n=a.$watch(G,function(a,b){if(b===a){if(b===y||v&&sa(b,y))return;b=y}f(h,a,b);d[h]=a},v);k.push(n);break;case "&":n||ra.call(c,m)||pa(m,g.name);G=c.hasOwnProperty(m)?p(c[m]):D;if(G===D&&n)break;d[h]=function(b){return G(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ja=/^\w/,Ba=w.document.createElement("div"),Ka=y,La=t,Fa=v,ha;qc.prototype={$normalize:Ea,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rd(a,b);c&&c.length&&P.addClass(this.$$element,c);(c=rd(b,a))&&c.length&&P.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=kd(this.$$element[0],a),f=sd[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));g=ya(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=
b=q(b,"src"===a);else if("img"===g&&"srcset"===a&&u(b)){for(var g="",f=Q(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<k;l++)var m=2*l,g=g+q(Q(f[m]),!0),g=g+(" "+Q(f[m+1]));f=Q(f[2*l]).split(/\s/);g+=q(Q(f[0]),!0);2===f.length&&(g+=" "+Q(f[1]));this[a]=b=g}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Ja.test(e)?this.$$element.attr(e,b):Ta(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);M.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ga=b.startSymbol(),Ha=b.endSymbol(),Ia="{{"===Ga&&"}}"===Ha?ab:function(a){return a.replace(/\{\{/g,Ga).replace(/}}/g,Ha)},Pa=/^ngAttr[A-Z]/,Qa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:D;da.$$addBindingClass=
n?function(a){na(a,"ng-binding")}:D;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:D;da.$$addScopeClass=n?function(a,b){na(a,b?"ng-isolate-scope":"ng-scope")}:D;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return w.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function Ea(a){return a.replace(od,"").replace(tg,function(a,d,c){return c?d.toUpperCase():d})}function rd(a,
b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function qd(a){a=z(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Oa&&""===d.nodeValue.trim())&&ug.call(a,b,1)}return a}function sg(a,b){if(b&&E(b))return b;if(E(a)){var d=td.exec(a);if(d)return d[3]}}function yf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,
c){Ia(b,"controller");B(b)?O(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!B(a.$scope))throw K("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,p;h=!0===h;k&&E(k)&&(p=k);if(E(f)){k=f.match(td);if(!k)throw ud("ctrlfmt",f);m=k[1];p=p||k[3];f=a.hasOwnProperty(m)?a[m]:Xc(g.$scope,m,!0)||(b?Xc(c,m,!0):void 0);if(!f)throw ud("ctrlreg",m);sb(f,m,!0)}if(h)return h=(I(f)?f[f.length-1]:f).prototype,l=Object.create(h||
null),p&&e(g,p,l,m||f.name),O(function(){var a=d.invoke(f,l,g,m);a!==l&&(B(a)||C(a))&&(l=a,p&&e(g,p,l,m||f.name));return l},{instance:l,identifier:p});l=d.instantiate(f,g,m);p&&e(g,p,l,m||f.name);return l}}]}function zf(){this.$get=["$window",function(a){return z(a.document)}]}function Af(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}
function Bf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function tc(a){return B(a)?fa(a)?a.toISOString():eb(a):a}function Gf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||x(a)||C(a)||(I(a)?r(a,function(a){b.push(ja(c)+"="+ja(tc(a)))}):b.push(ja(c)+"="+ja(tc(a))))});return b.join("&")}}}function Hf(){this.$get=function(){return function(a){function b(a,e,f){null===a||x(a)||(I(a)?r(a,function(a,c){b(a,e+"["+(B(a)?
c:"")+"]")}):B(a)&&!fa(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(tc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function uc(a,b){if(E(a)){var d=a.replace(vg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(vd),e;(e=c)||(e=(e=d.match(wg))&&xg[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function wd(a){var b=S(),d;E(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=L(Q(a.substr(0,d)));a=
Q(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):B(a)&&r(a,function(a,d){var f=L(d),g=Q(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function xd(a){var b;return function(d){b||(b=wd(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function yd(a,b,d,c){if(C(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Ff(){var a=this.defaults={transformResponse:[uc],transformRequest:[function(a){return B(a)&&"[object File]"!==ia.call(a)&&"[object Blob]"!==ia.call(a)&&"[object FormData]"!==ia.call(a)?
eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(vc),put:ka(vc),patch:ka(vc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){function p(b){function d(a,b){for(var c=0,
e=b.length;c<e;){var g=b[c++],f=b[c++];a=a.then(g,f)}b.length=0;return a}function e(a,b){var c,d={};r(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function g(a){var b=O({},a);b.data=yd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!B(b))throw K("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw K("$http")("badreq",b.url);var f=O({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,
jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=function(b){var c=a.headers,d=O({},b.headers),g,f,h,c=O({},c.common,c[L(b.method)]);a:for(g in c){f=L(g);for(h in d)if(L(h)===f)continue a;d[g]=c[g]}return e(d,ka(b))}(b);f.method=ub(f.method);f.paramSerializer=E(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;c.$$incOutstandingRequestCount();var h=[],p=[];b=k.resolve(f);r(y,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&
p.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=b.headers,d=yd(b.data,xd(c),void 0,b.transformRequest);x(d)&&r(c,function(a,b){"content-type"===L(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(g,g)});b=d(b,p);return b=b.finally(function(){c.$$completeOutstandingRequest(D)})}function n(c,d){function g(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():
h.$apply(d)}});return c}}function l(a,c,d,e,g){function f(){n(c,a,d,e,g)}M&&(200<=a&&300>a?M.put(N,[a,c,wd(d),e,g]):M.remove(N));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e,g){b=-1<=b?b:0;(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:xd(d),config:c,statusText:e,xhrStatus:g})}function G(a){n(a.data,a.status,ka(a.headers()),a.statusText,a.xhrStatus)}function y(){var a=p.pendingRequests.indexOf(c);-1!==a&&p.pendingRequests.splice(a,1)}var J=k.defer(),R=J.promise,M,
T,P=c.headers,q="jsonp"===L(c.method),N=c.url;q?N=m.getTrustedResourceUrl(N):E(N)||(N=m.valueOf(N));N=F(N,c.paramSerializer(c.params));q&&(N=s(N,c.jsonpCallbackParam));p.pendingRequests.push(c);R.then(y,y);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=B(c.cache)?c.cache:B(a.cache)?a.cache:v);M&&(T=M.get(N),u(T)?T&&C(T.then)?T.then(G,G):I(T)?n(T[1],T[0],ka(T[2]),T[3],T[4]):n(T,200,{},"OK","complete"):M.put(N,R));x(T)&&((T=zd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=T),e(c.method,N,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return R}function F(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function s(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=ec(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var v=g("$http");
a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var y=[];r(d,function(a){y.unshift(E(a)?l.get(a):l.invoke(a))});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(O({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(O({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=a;return p}]}function Jf(){this.$get=function(){return function(){return new w.XMLHttpRequest}}}
function If(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return yg(a,c,a.defer,b,d[0])}]}function yg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,F="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),F=a.type,g="error"===a.type?404:
200);d&&d(g,F)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,n,F,s,v){function y(){q&&q();A&&A.abort()}function t(a,b,c,e,g,f){u(G)&&d.cancel(G);q=A=null;a(b,c,e,g,f)}h=h||a.url();if("jsonp"===L(e))var Aa=c.createCallback(h),q=f(h,Aa,function(a,b){var d=200===a&&c.getResponse(Aa);t(l,a,d,"",b,"complete");c.removeCallback(Aa)});else{var A=b(e,h);A.open(e,h,!0);r(m,function(a,b){u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=
A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"===ta(h).protocol?404:0);t(l,c,b,A.getAllResponseHeaders(),a,"complete")};A.onerror=function(){t(l,-1,null,null,"","error")};A.onabort=function(){t(l,-1,null,null,"","abort")};A.ontimeout=function(){t(l,-1,null,null,"","timeout")};r(s,function(a,b){A.addEventListener(b,a)});r(v,function(a,b){A.upload.addEventListener(b,a)});n&&(A.withCredentials=!0);if(F)try{A.responseType=F}catch(H){if("json"!==
F)throw H;}A.send(x(k)?null:k)}if(0<p)var G=d(y,p);else p&&C(p.then)&&p.then(y)}}function Df(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,p,n){function t(a){try{var b=a;a=p?e.getTrusted(p,
b):e.valueOf(b);return n&&!u(a)?a:gc(a)}catch(d){c(Fa.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var r;k||(k=g(f),r=la(k),r.exp=f,r.expressions=[],r.$$watchDelegate=h);return r}n=!!n;var q,A,H=0,G=[],ba=[];r=f.length;for(var J=[],R=[];H<r;)if(-1!==(q=f.indexOf(a,H))&&-1!==(A=f.indexOf(b,q+l)))H!==q&&J.push(g(f.substring(H,q))),H=f.substring(q+l,A),G.push(H),ba.push(d(H,t)),H=A+m,R.push(J.length),J.push("");else{H!==r&&J.push(g(f.substring(H)));break}p&&1<J.length&&Fa.throwNoconcat(f);if(!k||G.length){var M=
function(a){for(var b=0,c=G.length;b<c;b++){if(n&&x(a[b]))return;J[R[b]]=a[b]}return J.join("")};return O(function(a){var b=0,d=G.length,e=Array(d);try{for(;b<d;b++)e[b]=ba[b](a);return M(e)}catch(g){c(Fa.interr(f,g))}},{exp:f,expressions:G,$$watchDelegate:function(a,b){var c;return a.$watchGroup(ba,function(d,e){var g=M(d);b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=
function(){return b};return k}]}function Ef(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function p(){n?f.apply(null,F):f(y)}var n=4<arguments.length,F=n?xa.call(arguments,4):[],s=b.setInterval,v=b.clearInterval,y=0,t=u(m)&&!m,r=(t?c:d).defer(),q=r.promise;l=u(l)?l:0;q.$$intervalId=s(function(){t?e.defer(p):a.$evalAsync(p);r.notify(y++);0<l&&y>=l&&(r.resolve(y),v(q.$$intervalId),delete g[q.$$intervalId]);t||a.$apply()},k);g[q.$$intervalId]=r;return q}
var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function wc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=fb(a[b].replace(/%2F/g,"/"));return a.join("/")}function Ad(a,b){var d=ta(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||zg[d.protocol]||null}function Bd(a,b,d){if(Ag.test(a))throw kb("badpath",a);var c="/"!==
a.charAt(0);c&&(a="/"+a);a=ta(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=ec(a.search);b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function ua(a,b){if(xc(b,a))return b.substr(a.length)}function La(a){var b=a.indexOf("#");return-1===b?a:
a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=ua(b,a);if(!E(d))throw kb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=fc(this.$$search),d=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;u(f=ua(a,c))?(g=f,g=d&&u(f=ua(d,f))?b+(ua("/",f)||f):a+g):u(f=ua(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=ua(a,c)||ua(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",x(e)&&(a=c,this.replace())):(f=ua(d,e),x(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=fc(this.$$search),
e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=wc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return La(a)===La(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===La(c)?f=c:(g=ua(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=fc(this.$$search),
e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=wc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Lb(a){return function(){return this[a]}}function Dd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Lf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Na(a))return b.enabled=a,this;if(B(a)){Na(a.enabled)&&(b.enabled=
a.enabled);Na(a.requireBase)&&(b.requireBase=a.requireBase);if(Na(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var p=c.url(),n;if(b.enabled){if(!m&&
b.requireBase)throw kb("nobase");n=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?yc:Cd}else n=La(p),m=zc;var F=n.substr(0,La(n).lastIndexOf("/")+1);l=new m(n,F,"#"+a);l.$$parseLinkUrl(p,p);l.$$state=c.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=z(a.target);"a"!==ya(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!E(e)||!x(h.attr(e))){var e=h.prop("href"),
k=h.attr("href")||h.attr("xlink:href");B(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ta(e.animVal).href);s.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(p)&&c.url(l.absUrl(),!0);var v=!0;c.onUrlChange(function(a,b){xc(a,F)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=lb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",
a,c,b,e).defaultPrevented;l.absUrl()===a&&(g?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),g=c.state(),f=l.$$replace,m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(v||m)v=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):
(m&&h(b,f,g===l.$$state?null:l.$$state),k(a,g)))})}l.$$replace=!1});return l}]}function Mf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){bc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||D;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,
b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Bg(a){return a+""}function Cg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Dg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==
a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function W(a,b,d){var c,e,f=a.isPure=Dg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){W(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:W(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:W(a.left,b,f);W(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=
a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:W(a.left,b,f);W(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:W(a.test,b,f);W(a.alternate,b,f);W(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:W(a.object,b,f);a.computed&&W(a.property,b,f);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){W(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:W(a.left,b,f);W(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){W(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;
a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){W(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(W(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===
q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return C(a.valueOf)?a.valueOf():Eg.call(a)}function Nf(){var a=S(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,g;switch(typeof b){case "string":return g=b=b.trim(),d=a[g],d||(d=new Nb(n),d=(new Mb(d,e,n)).parse(b),d.constant?d.$$watchDelegate=m:d.oneTime?d.$$watchDelegate=d.literal?l:k:d.inputs&&(d.$$watchDelegate=h),a[g]=d),p(d,c);case "function":return p(b,c);default:return p(D,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||
c)?a===b||a!==a&&b!==b:!1}function h(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=g,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function k(a,b,c,d,e){function g(a){return d(a)}function f(a,
c,d){l=a;C(b)&&b(a,c,d);u(a)&&d.$$postDigest(function(){u(l)&&k()})}var k,l;return k=d.inputs?h(a,f,c,d,e):a.$watch(g,f,c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){u(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==l&&c!==k?function(c,
e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return u(e)?c:e},d=!a.inputs;c&&c!==h?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=h,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a}));return e}var n={csp:Ja().noUnsafeEval,literals:pa(b),isIdentifierStart:C(d)&&d,isIdentifierContinue:C(c)&&c};f.$$getAst=function(a){var b=new Nb(n);return(new Mb(b,e,n)).getAst(a).ast};
return f}]}function Pf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Qf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,
b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!u&&w.length;){var a=w.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?De(c,void 0):c);bc(a.value)?b(a.value,c):b(c)}}}function h(c){!d||c.pending||2!==c.status||c.pur||(0===u&&0===w.length&&a(g),w.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=
!0,++u,a(function(){var e,f,h;h=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,p=h.length;l<p;++l){c.pur=!0;f=h[l][0];e=h[l][c.status];try{C(e)?k(f,e(c.value)):1===c.status?k(f,c.value):m(f,c.value)}catch(n){m(f,n),n&&!0===n.$$passToExceptionHandler&&b(n)}}}finally{--u,d&&0===u&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?p(a,t("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(B(b)||C(b))f=
b.then;C(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,g=0,f=e.length;g<f;g++){c=e[g][0];a=e[g][3];try{n(c,C(a)?a(d):d)}catch(h){b(h)}}})}function F(a){var b=new f;m(b,a);return b}function s(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return F(e)}return d&&
C(d.then)?d.then(function(){return b(a)},F):b(a)}function v(a,b,c,d){var e=new f;k(e,a);return e.then(b,c,d)}function q(a){if(!C(a))throw t("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){m(b,a)});return b}var t=K("$q",TypeError),u=0,w=[];O(f.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return s(b,A,a)},function(b){return s(b,F,a)},b)}});var A=v;q.prototype=f.prototype;q.defer=c;q.reject=F;q.when=v;q.resolve=A;q.all=function(a){var b=new f,c=0,d=I(a)?[]:{};r(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};q.race=function(a){var b=c();r(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return q}function Zf(){this.$get=["$window","$timeout",function(a,
b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Of(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=
null}b.prototype=a;return b}var b=10,d=K("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=
this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(t.$$phase)throw d("inprog",t.$$phase);t.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function F(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function v(){for(;A.length;)try{A.shift()()}catch(a){f(a)}e=
null}function q(){null===e&&(e=h.defer(function(){t.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);b=C(b)?b:D;if(f.$$watchDelegate)return f.$$watchDelegate(this,
b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===
a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(B(e))if(wa(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},t=0,l++);a=0;for(b in e)ra.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ra.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(B(e))if(wa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ra.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,n,r,F=b,q,A=[],y,x;p("$digest");
h.$$checkUrlChange();this===t&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(n=0;n<u.length;n++){try{x=u[n],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}u.length=0;a:do{if(n=q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):U(g)&&U(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,q),5>F&&(y=4-F,A[y]||(A[y]=[]),A[y].push({msg:C(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(D){f(D)}if(!(n=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((r||u.length)&&!F--)throw t.$$phase=null,d("infdig",b,A);}while(r||u.length);for(t.$$phase=null;H<w.length;)try{w[H++]()}catch(B){f(B)}w.length=H=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===t&&h.$$applicationDestroyed();
n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)F(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=D;this.$on=this.$watch=this.$watchGroup=function(){return D};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){t.$$phase||u.length||h.defer(function(){u.length&&t.$digest()});u.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{t.$$phase=null}}catch(b){f(b)}finally{try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],F(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,
k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||
c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m,u=t.$$asyncQueue=[],w=t.$$postDigestQueue=[],A=t.$$applyAsyncQueue=[],H=0;return t}]}function Ge(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:
a,f;f=ta(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Fg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw va("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if($a(a))return new RegExp("^"+a.source+"$");throw va("imatcher");}function Nd(a){var b=[];u(a)&&r(a,function(a){b.push(Fg(a))});return b}function Sf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&
(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?zd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw va("unsafe");};d.has("$sanitize")&&
(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw va("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw va("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=ta(e.toString()),
p,n,r=!1;p=0;for(n=a.length;p<n;p++)if(c(a[p],g)){r=!0;break}if(r)for(p=0,n=b.length;p<n;p++)if(c(b[p],g)){r=!1;break}if(r)return e;throw va("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw va("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Rf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw va("iequirks");var c=ka(oa);c.isEnabled=function(){return a};c.trustAs=
d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=ab);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(oa,function(a,b){var d=L(b);c[("parse_as_"+d).replace(Bc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Bc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Bc,wb)]=function(b){return g(a,b)}});return c}]}
function Tf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ja(),transitions:k,animations:l,android:e}}]}function Vf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==
uc}):l===uc&&(l=null);return c.get(h,O({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Gg("tpload",h,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function Wf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=$.element(a).data("$binding");c&&
r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Xf(){this.$get=["$rootScope","$browser",
"$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){C(f)||(l=k,k=f,f=D);var m=xa.call(arguments,3),p=u(l)&&!l,n=(p?c:d).defer(),r=n.promise,s;s=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[r.$$timeoutId]}p||a.$apply()},k);r.$$timeoutId=s;g[s]=n;return r}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function ta(a){Ca&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function zd(a){a=E(a)?ta(a):a;return a.protocol===Od.protocol&&a.host===Od.host}function Yf(){this.$get=la(w)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function bg(){this.$get=Pd}function ed(a){function b(d,c){if(B(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",
Qd);b("date",Rd);b("filter",Hg);b("json",Ig);b("limitTo",Jg);b("lowercase",Kg);b("number",Sd);b("orderBy",Td);b("uppercase",Lg)}function Hg(){return function(a,b,d,c){if(!wa(a)){if(null==a)return a;throw K("filter")("notarray",a);}c=c||"$";var e;switch(Cc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Mg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Mg(a,b,d,c){var e=B(a)&&d in a;!0===b?b=sa:C(b)||(b=function(a,
b){if(x(a))return!1;if(null===a||null===b)return a===b;if(B(b)||B(a)&&!ac(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!B(f)?ha(f,a[d],b,d,!1):ha(f,a,b,d,c)}}function ha(a,b,d,c,e,f){var g=Cc(a),h=Cc(b);if("string"===h&&"!"===b.charAt(0))return!ha(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return ha(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&ha(a[k],b,d,c,!0))return!0;return f?!1:ha(a,b,d,c,!1)}if("object"===
h){for(k in b)if(f=b[k],!C(f)&&!x(f)&&(g=k===c,!ha(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Cc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==
a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ng(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Dc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Dc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Og(a,b,d,c){var e=a.d,f=e.length-a.i;b=x(b)?Math.min(Math.max(d,f),c):+b;d=
b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!E(a)&&!Y(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";
else{g=Ng(h);Og(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=
a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Dc+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),
b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Ec(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Pg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Qg.exec(d))?(h=db(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Sc(f,m),c=dc(c,f,!0));r(h,function(b){k=Rg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ig(){return function(a,b){x(b)&&(b=2);return eb(a,b)}}function Jg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(U(b))return a;Y(a)&&(a=a.toString());if(!wa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Fc(a,d,d+b):0===d?Fc(a,b,a.length):Fc(a,Math.max(0,d+b),d)}}function Fc(a,b,d){return E(a)?a.slice(b,d):xa.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=ab;if(C(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(B(k)&&(k=a.index),B(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!wa(a))throw K("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=C(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(C(e.valueOf)&&(e=e.valueOf(),d(e)))break a;ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=k.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*k[d].descending*
l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Qa(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Qb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache={};
a.$$classCache[$d]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,nb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&e(this.$pending,
a,h),be(this.$pending)&&(this.$pending=void 0));Na(g)?g?(e(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Gc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Va(a,b,d,c,e,f){var g=L(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=Q(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&
c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&
b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){var e,f;if(fa(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Sg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,
MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return u(a)&&!fa(a)?d(a)||void 0:a}Hc(e,f,g,h);Va(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),r&&(a=dc(a,r)),
a});h.$formatters.push(function(a){if(a&&!fa(a))throw pb("datefmt",a);if(p(a))return(s=a)&&r&&(s=dc(s,r,!0)),m("date")(a,c,r);s=null;return""});if(u(g.min)||g.ngMin){var q;h.$validators.min=function(a){return!p(a)||x(q)||d(a)>=q};g.$observe("min",function(a){q=n(a);h.$validate()})}if(u(g.max)||g.ngMax){var y;h.$validators.max=function(a){return!p(a)||x(y)||d(a)<=y};g.$observe("max",function(a){y=n(a);h.$validate()})}}}function Hc(a,b,d,c){(c.$$hasNativeValidators=B(b[0].validity))&&c.$parsers.push(function(a){var c=
b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function de(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Tg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw pb("numfmt",b);b=b.toString()}return b})}function Wa(a){u(a)&&!Y(a)&&(a=parseFloat(a));return U(a)?void 0:a}function Ic(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,
b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ic(a):0,h=e?Ic(b):0,k=f?Ic(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return e}function Jc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===
b[f])continue a;c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):B(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);else if(B(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(h,k,l){function m(a,b){var c=[];r(a,function(a){if(0<b||t[a])t[a]=(t[a]||0)+b,t[a]===+(0<b)&&c.push(a)});
return c.join(" ")}function p(a){if(a===b){var c=w,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=w,c=m(c&&c.split(" "),-1),l.$removeClass(c);u=a}function n(a){a=c(a);a!==w&&q(a)}function q(a){if(u===b){var c=w&&w.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}w=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?e:c),y=v?n:q,t=k.data("$classCounts"),u=!0,w;t||(t=S(),k.data("$classCounts",t));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&
1})),h.$watch(f,p));h.$watch(s,y,v)}}}]}function Sb(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Qb;this.$options=Tb;this.$$updateEvents="";
this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Zd(this);Ug(this)}
function Ug(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Kc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){u(a[c])||(a[c]=b)})}function Ga(a,b){a.prop("selected",b);a.attr("selected",b)}var Mc={objectMaxDepth:5},Vg=/^\/(.+)\/([a-z]*)$/,ra=Object.prototype.hasOwnProperty,L=function(a){return E(a)?a.toLowerCase():a},ub=function(a){return E(a)?a.toUpperCase():a},Ca,z,ma,xa=[].slice,ug=[].splice,
Wg=[].push,ia=Object.prototype.toString,Pc=Object.getPrototypeOf,qa=K("ng"),$=w.angular||(w.angular={}),ic,qb=0;Ca=w.document.documentMode;var U=Number.isNaN||function(a){return a!==a};D.$inject=[];ab.$inject=[];var I=Array.isArray,se=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,Q=function(a){return E(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ja=function(){if(!u(Ja.rules)){var a=w.document.querySelector("[ng-csp]")||
w.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ja.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ja;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ja.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ha.length,c,e;for(b=0;b<d;++b)if(c=Ha[b],a=w.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},ue=/:/g,Ha=["ng-","data-ng-","ng:","x-ng-"],xe=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof w.HTMLScriptElement||b instanceof w.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
default:return!1}})}(w.document),Ae=/[A-Z]/g,Wc=!1,Oa=3,Fe={full:"1.6.9",major:1,minor:6,dot:9,codeName:"fiery-basilisk"};V.expando="ng339";var ib=V.cache={},gg=1;V._data=function(a){return this.cache[a[this.expando]]||{}};var cg=/-([a-z])/g,Xg=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},lc=K("jqLite"),fg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,kc=/<|&#?\w+;/,dg=/<([\w:-]+)/,eg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,aa={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};aa.optgroup=aa.option;aa.tbody=aa.tfoot=aa.colgroup=aa.caption=aa.thead;aa.th=aa.td;var lg=w.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Sa=V.prototype={ready:gd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},
eq:function(a){return 0<=a?z(this[a]):z(this[this.length+a])},length:0,push:Wg,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[L(a)]=a});var ld={};r("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var sd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:pc,removeData:oc,hasData:function(a){for(var b in ib[a.ng339])return!0;
return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)oc(a[b])}},function(a,b){V[b]=a});r({data:pc,inheritedData:Eb,scope:function(a){return z.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return z.data(a,"$isolateScope")||z.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(Xg,"ms-"));if(u(d))a.style[b]=d;
else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c&&a.getAttribute){var c=L(b),e=Gb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===
ya(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:jd},function(a,b){V.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&x(2===a.length&&a!==Bb&&a!==id?b:c)){if(B(b)){for(e=0;e<g;e++)if(a===pc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],
b,c);return this}});r({removeData:oc,on:function(a,b,d,c){if(u(c))throw lc("onargs");if(jc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=ig(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],Ab[b]?(h(Ab[b],kg),h(b,void 0,!0)):h(b)}},off:hd,one:function(a,b,d){a=z(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;yb(a);r(new V(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new V(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new V(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){var d=z(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new V(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;x(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:nc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:D,type:f,target:a},b.type&&(c=O(c,
b)),b=ka(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){V.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)x(f)?(f=a(this[g],b,c,e),u(f)&&(f=z(f))):mc(f,a(this[g],b,c,e));return u(f)?f:this}});V.prototype.bind=V.prototype.on;V.prototype.unbind=V.prototype.off;var Yg=Object.create(null);md.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return U(a)?
Yg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=md,ag=[function(){this.$get=[function(){return Hb}]}],ng=/^([^(]+?)=>/,og=/^[^(]*\(\s*([^)]*)\)/m,
Zg=/,/,$g=/^\s*(_?)(\S+?)\1\s*$/,mg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=K("$injector");gb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||pg(a)),Ba("strictdi",d);b=nd(a);r(b[1].split(Zg),function(a){a.replace($g,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var he=K("$animate"),sf=function(){this.$get=D},tf=function(){var a=new Hb,b=[];this.$get=
["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):I(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=qg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:D,on:D,off:D,pin:D,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||
k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},qf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw he("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=C(a)?a:null);return c};
this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,he("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(c,d,k,l){d=d&&z(d);k=k&&z(k);d=d||k.parent();b(c,d,k);return a.push(c,"enter",Ka(l))},move:function(c,d,k,l){d=d&&z(d);k=k&&z(k);d=d||k.parent();b(c,d,k);return a.push(c,"move",Ka(l))},leave:function(b,c){return a.push(b,"leave",Ka(c),function(){b.remove()})},addClass:function(b,c,d){d=Ka(d);d.addClass=jb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ka(d);d.removeClass=jb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ka(f);
f.addClass=jb(f.addClass,c);f.removeClass=jb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ka(m);m.from=m.from?O(m.from,c):c;m.to=m.to?O(m.to,d):d;m.tempClasses=jb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],vf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},uf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:D,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},rf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ca=K("$compile"),sc=new function(){};Yc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===sc};var od=/^((?:x|data)[:\-_])/i,tg=/[:\-_]+(.)/g,ud=K("$controller"),
td=/^(\S+)(\s+as\s+([\w$]+))?$/,Cf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof z&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},vd="application/json",vc={"Content-Type":vd+";charset=utf-8"},wg=/^\[|^\{(?!\{)/,xg={"[":/]$/,"{":/}$/},vg=/^\)]\}',?\n/,Kb=K("$http"),Fa=$.$interpolateMinErr=K("$interpolate");Fa.throwNoconcat=function(a){throw Fa("noconcat",a);};Fa.interr=function(a,b){return Fa("interr",a,b.toString())};var Kf=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=$.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ah=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,zg={http:80,https:443,ftp:21},kb=K("$location"),Ag=/^\s*[\\/]{2,}/,bh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Lb("$$absUrl"),
url:function(a){if(x(a))return this.$$url;var b=ah.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=ec(a);else if(B(a))a=pa(a,{}),r(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([Cd,zc,yc],function(a){a.prototype=Object.create(bh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw kb("nostate");this.$$state=x(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Xa=K("$parse"),Eg={}.constructor.prototype.valueOf,Ub=S();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var ch={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Xa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=ch[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=
a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";
q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Xa("lval");a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Xa("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Xa("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Xa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},
$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};W(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;
var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Bg,Cg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,
d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?
"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,p;c=c||D;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case q.Literal:m=this.escape(a.value);
this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();
k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===
k.stage||"s",function(){e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,
h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=
k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){r(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,
g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?
(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;
case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,
b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,
b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,
this.stringEscapeFn)+"'";if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Xa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;W(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=
b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?D:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),
this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||
(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=
[];for(var r=0;r<g.length;++r)n.push(g[r](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,
function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,
c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Ed(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);
h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,
e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,
g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,
name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;
return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===
a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var va=K("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Bc=/_([a-z])/g,Gg=K("$compile"),X=w.document.createElement("a"),Od=ta(w.location.href);Pd.$inject=["$document"];ed.$inject=["$provide"];var Wd=22,Vd=".",Dc="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var Rg={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:mb("Month"),
MMM:mb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:mb("Month",!1,!0),dd:ea("Date",2),d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),
G:Ec,GG:Ec,GGG:Ec,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Qg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Pg=/^-?\d+$/;Rd.$inject=["$locale"];var Kg=la(L),Lg=la(ub);Td.$inject=["$parse"];var He=la({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ia.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||
a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ea("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(sd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Vg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,
a)})}}}});r(["src","srcset","href"],function(a){var b=Ea("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ia.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ca&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Qb={$addControl:D,$$renameControl:function(a,b){a.$name=b},$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D,$setSubmitted:D};Pb.$inject=["$element",
"$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ia(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];
r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=Qb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Ya,Vb+" ng-submitted");this.$dirty=
!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};ae({clazz:Pb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ie=function(a){return["$timeout","$parse",
function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||D}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Ya).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",
n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var r=g?c(p.$name):D;g&&(r(a,p),e.$observe(g,function(b){p.$name!==b&&(r(a,void 0),p.$$parentForm.$$renameControl(p,b),r=c(p.$name),r(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);r(a,void 0);O(p,Qb)})}}}}}]},Ie=ie(),Ue=ie(!0),Sg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,dh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
eh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Tg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,je=/^(\d{4,})-(\d{2})-(\d{2})$/,ke=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Lc=/^(\d{4,})-W(\d\d)$/,le=/^(\d{4,})-(\d\d)$/,me=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=S();r(["date","datetime-local","month","time","week"],function(a){ce[a]=
!0});var ne={text:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c)},date:ob("date",je,Rb(je,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ke,Rb(ke,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",me,Rb(me,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Lc,function(a,b){if(fa(a))return a;if(E(a)){Lc.lastIndex=0;var d=Lc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());
return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",le,Rb(le,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hc(a,b,d,c);de(c);Va(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Wa(a);c.$validate()});if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Wa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=
function(a,b){return c.$isEmpty(b)||x(k)||ee(b,g||0,k)};d.$observe("step",function(a){k=Wa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},email:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Gc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==Q(d.ngTrim);x(d.name)&&b.attr("name",++qb);
b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=Q(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=Q(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){p=Wa(a);U(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){n=Wa(a);U(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}
function l(a){r=Wa(a);U(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Hc(a,b,d,c);de(c);Va(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?0:void 0,n=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var v=c.$render;c.$render=m&&u(q.rangeUnderflow)&&u(q.rangeOverflow)?function(){v();c.$setViewValue(b.val())}:v;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b>=p},g("min",h));e&&
(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b<=n},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||ee(b,p||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=fe(h,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===
a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:D,button:D,submit:D,reset:D,file:D},Zc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(ne[L(g.type)]||ne.text)(e,f,g,h[0],b,a,d,c)}}}}],fh=/^(true|false|\d+)$/,mf=function(){function a(a,d,c){var e=u(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return fh.test(d.ngValue)?
function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Me=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=gc(a)})}}}}],Oe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);
d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Ne=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],lf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
Pe=Jc("",!0),Re=Jc("Odd",0),Qe=Jc("Even",1),Se=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Te=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],dd={},gh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Ea("ng-"+a);dd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};gh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var We=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=
tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Xe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,p,n){var r=0,q,v,y,t=function(){v&&(v.remove(),v=null);q&&(q.$destroy(),q=null);y&&(d.leave(y).done(function(a){!1!==a&&(v=null)}),v=y,y=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!u(h)||h&&!c.$eval(h)||b()},v=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&v===r){var b=c.$new();p.template=a;a=n(b,function(a){t();d.enter(a,null,e).done(m)});q=b;y=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||v!==r||(t(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(t(),p.template=null)})}}}}],of=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ia.call(d[0]).match(/SVG/)?
(d.empty(),a(fd(e.template,w.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ye=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),kf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?Q(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?Q(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",$d="ng-invalid",Ya="ng-pristine",Vb="ng-dirty",pb=K("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);C(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){C(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:D,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Ya)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!U(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(k.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!C(k.then))throw pb("nopromise",k);f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},D):g(!0)}function f(a,b){h===k.$$currentValidationRunId&&
k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))f(a,null);else return k.$$parserValid||(r(k.$validators,function(a,b){f(b,null)}),r(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);
if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}U(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");
this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},
$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=
this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,D))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,
this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var jf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(nb);
return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];h.$$setUpdateOnEvents();c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,hh=/(\s+|^)default(\s+|$)/;Kc.prototype={getOption:function(a){return this.$$options[a]},
createChild:function(a){var b=!1;a=O({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=Q(d.replace(hh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Tb.$$options);return new Kc(a)}};Tb=new Kc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var nf=function(){function a(a,
d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Ze=Qa({terminal:!0,priority:1E3}),ih=K("ngOptions"),jh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
gf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&wa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(jh);if(!p)throw ih("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var v=a&&d(a)||b,u=q&&d(q),t=q?function(a,b){return u(c,b)}:function(a){return Pa(a)},
w=function(a,b){return t(a,C(a,b))},x=d(p[2]||p[1]),A=d(p[3]||""),H=d(p[4]||""),G=d(p[8]),z={},C=r?function(a,b){z[r]=b;z[n]=a;return z}:function(a){z[n]=a;return z};return{trackBy:q,getTrackByValue:w,getWatchables:d(G,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=C(l,h),l=t(l,h);b.push(l);if(p[2]||p[1])l=x(c,h),b.push(l);p[4]&&(h=H(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=G(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],r=C(d[p],p),u=v(c,r),p=t(u,r),y=x(c,r),F=A(c,r),r=H(c,r),u=new e(p,u,y,F,r);a.push(u);b[p]=u}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return q?pa(a.viewValue):a.viewValue}}}}}var e=w.document.createElement("option"),f=w.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=D},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],s=k.multiple;l=0;for(var v=h.children(),y=v.length;l<y;l++)if(""===v[l].value){n.hasEmptyOption=!0;n.emptyOption=v.eq(l);break}h.empty();l=!!n.emptyOption;z(e.cloneNode(!1)).val("?");var t,w=c(k.ngOptions,h,d),x=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};s?(n.writeValue=
function(a){if(t){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},w.trackBy&&d.$watchCollection(function(){if(I(q.$viewValue))return q.$viewValue.map(function(a){return w.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(t){var b=h[0].options[h[0].selectedIndex],
c=t.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(n.removeUnknownOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},n.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),t.getViewValueFromOption(a)):null},w.trackBy&&d.$watch(function(){return w.getTrackByValue(q.$viewValue)},function(){q.$render()}));
l&&(a(n.emptyOption)(d),h.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(w.getWatchables,function(){var a=t&&n.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=
t.items[b];u(c.group)?Fb(c.element.parentNode):Fb(c.element)}t=w.getOptions();var d={};t.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),x.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),x.appendChild(b),p(a,b)});h[0].appendChild(x);q.$render();q.$isEmpty(a)||(b=n.readValue(),(w.trackBy||s?sa(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],$e=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,n=f.$eval(m)||{},q={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+p+v,t=$.noop,w;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),n[c]=g.attr(h.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,u))});f.$watch(l,function(b){var c=parseFloat(b),e=U(c);e||c in n||(c=a.pluralCat(c-p));c===w||e&&U(w)||(t(),e=q[c],x(e)?(null!=
b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),t=D,k()):t=f.$watch(e,k),w=c)})}}}],af=["$parse","$animate","$compile",function(a,b,d){var c=K("ngRepeat"),e=function(a,b,c,d,e,m,p){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],p=l[2],n=l[3],q=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw c("badident",n);var u,t,w,x,z={$id:Pa};q?u=a(q):(w=function(a,b){return Pa(b)},x=function(a){return a});return function(a,d,f,g,l){u&&(t=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=
d;return u(a,z)});var m=S();a.$watchCollection(p,function(f){var g,p,q=d[0],u,y=S(),z,F,C,A,D,B,E;n&&(a[n]=f);if(wa(f))D=f,p=t||w;else for(E in p=t||x,D=[],f)ra.call(f,E)&&"$"!==E.charAt(0)&&D.push(E);z=D.length;E=Array(z);for(g=0;g<z;g++)if(F=f===D?g:D[g],C=f[F],A=p(F,C,g),m[A])B=m[A],delete m[A],y[A]=B,E[g]=B;else{if(y[A])throw r(E,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);E[g]={id:A,scope:void 0,clone:void 0};y[A]=!0}for(u in m){B=m[u];A=tb(B.clone);b.leave(A);if(A[0].parentNode)for(g=
0,p=A.length;g<p;g++)A[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(F=f===D?g:D[g],C=f[F],B=E[g],B.scope){u=q;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);B.clone[0]!==u&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,s,C,v,F,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,s,C,v,F,z)});m=y})}}}}],bf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],cf=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),df=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var q=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(q)).done(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],ef=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),ff=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),kh=K("ngTransclude"),
hf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw kh("orphan",za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Oa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&
k()}}}}],Je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],lh={$setViewValue:D,$render:D},mh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=lh;
e.multiple=!1;e.unknownOption=z(w.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ga(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ga(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ga(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ga(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=D});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ga(z(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?
c:b),Ga(z(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ia(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(r)&&(e.removeOption(q),delete e.selectValueMap[r],
d=!0);r=Pa(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:mh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ga(z(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=ka(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=D},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Le=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw K("ngPattern")("noregexp",f,a,za(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},cd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=U(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};w.angular.bootstrap?w.console&&console.log("WARNING: Tried to load AngularJS more than once."):
(Be(),Ee($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),z(function(){we(w.document,Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;/*
 AngularJS v1.7.2
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,m){'use strict';function Ea(a,b,c){if(!a)throw Pa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;V(a)&&(a=a.join(" "));V(b)&&(b=b.join(" "));return a+" "+b}function Qa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function W(a,b,c){var d="";a=V(a)?a:a&&B(a)&&a.length?a.split(/\s+/):[];t(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof z)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return z(ua(a))}if(1===a.nodeType)return z(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Ra(a,b,c){t(b,function(b){a.addClass(b,c)})}function Sa(a,b,c){t(b,function(b){a.removeClass(b,c)})}function X(a){return function(b,c){c.addClass&&(Ra(a,b,c.addClass),c.addClass=null);c.removeClass&&(Sa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
O;a.domOperation=function(){a.$$domOperationFired=!0;b();b=O};a.$$prepared=!0}return a}function ha(a,b){Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function T(a,b,c){var d=b.options||{};c=c.options||{};var g=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Ta(a.attr("class"),g,e);c.preparationClasses&&(d.preparationClasses=ca(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
g=d.domOperation!==O?d.domOperation:null;va(d,c);g&&(d.domOperation=g);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ta(a,b,c){function d(a){B(a)&&(a=a.split(" "));var b={};t(a,function(a){a.length&&(b[a]=!0)});return b}var g={};a=d(a);b=d(b);t(b,function(a,b){g[b]=1});c=d(c);t(c,function(a,b){g[b]=1===g[b]?null:-1});var e={addClass:"",removeClass:""};t(g,function(b,c){var d,g;1===b?(d="addClass",
g=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",g=a[c]||a[c+"-add"]);g&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function I(a){return a instanceof z?a[0]:a}function Ua(a,b,c){var d="";b&&(d=W(b,"ng-",!0));c.addClass&&(d=ca(d,W(c.addClass,"-add")));c.removeClass&&(d=ca(d,W(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=Y+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function ca(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),g=a.getComputedStyle(b)||{};t(c,function(a,b){var c=g[a];if(c){var N=c.charAt(0);if("-"===N||"+"===N||0<=N)c=Va(c);0===c&&(c=null);d[b]=c}});return d}function Va(a){var b=0;a=a.split(/\s*,\s*/);t(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=Q,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function La(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){t(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var Q,za,Y,Aa;void 0===S.ontransitionend&&void 0!==S.onwebkittransitionend?(Q="WebkitTransition",za="webkitTransitionEnd transitionend"):(Q="transition",za=
"transitionend");void 0===S.onanimationend&&void 0!==S.onwebkitanimationend?(Y="WebkitAnimation",Aa="webkitAnimationEnd animationend"):(Y="animation",Aa="animationend");var qa=Y+"Delay",Ba=Y+"Duration",la=Q+"Delay",Na=Q+"Duration",Pa=m.$$minErr("ng"),Wa={transitionDuration:Na,transitionDelay:la,transitionProperty:Q+"Property",animationDuration:Ba,animationDelay:qa,animationIterationCount:Y+"IterationCount"},Xa={transitionDuration:Na,transitionDelay:la,animationDuration:Ba,animationDelay:qa},Ca,va,
t,V,ya,Z,Da,ra,B,P,z,O;m.module("ngAnimate",[],function(){O=m.noop;Ca=m.copy;va=m.extend;z=m.element;t=m.forEach;V=m.isArray;B=m.isString;ra=m.isObject;P=m.isUndefined;ya=m.isDefined;Da=m.isFunction;Z=m.isElement}).info({angularVersion:"1.7.2"}).directive("ngAnimateSwap",["$animate",function(a){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,c,d,g,e){var r,G;b.$watchCollection(d.ngAnimateSwap||d["for"],function(b){r&&a.leave(r);G&&(G.$destroy(),G=null);(b||0===b)&&
e(function(b,d){r=b;G=d;a.enter(b,null,c)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function g(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;B(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(g(a(e)(b)),d.$observe("ngAnimateChildren",g))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),r=0;r<b.length;r++)b[r]();g||a(function(){g||
c()})}}var d,g;d=b.queue=[];b.waitUntilQuiet=function(b){g&&g();g=a(function(){g=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);t(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c){return e[a].some(function(a){return a(b,c)})}function g(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&g(a)});e.skip.push(function(a,b){return!a.structural&&!g(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;var d=
a.addClass,g=a.removeClass,e=b.addClass,sa=b.removeClass;return P(d)&&P(g)||P(e)&&P(sa)?!1:c(d,sa)||c(g,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,e,l,J,sa,da,v,E,h,L){function x(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function C(a,b,c){var f=[],d=k[c];d&&t(d,function(d){u.call(d.node,b)?f.push(d.callback):"leave"===c&&u.call(d.node,
a)&&f.push(d.callback)});return f}function H(a,b,c){var f=ua(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,k,w){function p(a,c,f,d){N(function(){var a=C(na,q,c);a.length?b(function(){t(a,function(a){a(e,f,d)});"close"!==f||q.parentNode||ba.off(q)}):"close"!==f||q.parentNode||ba.off(q)});a.progress(c,f,d)}function H(a){var b=e,c=h;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);Oa(e,h);ha(e,h);h.domOperation();l.complete(!a)}var h=Ca(w),e=Ga(a),q=I(e),na=q&&q.parentNode,h=oa(h),l=new da,N=x();V(h.addClass)&&(h.addClass=h.addClass.join(" "));h.addClass&&!B(h.addClass)&&(h.addClass=null);V(h.removeClass)&&(h.removeClass=h.removeClass.join(" "));h.removeClass&&!B(h.removeClass)&&(h.removeClass=null);h.from&&!ra(h.from)&&(h.from=null);h.to&&!ra(h.to)&&(h.to=null);if(!(f&&q&&Ya(q,k,w)&&D(q,h)))return H(),l;var v=0<=["enter","move","leave"].indexOf(k),u=
L(),J=u||ga.get(q);w=!J&&y.get(q)||{};var E=!!w.state;J||E&&1===w.state||(J=!K(q,na,k));if(J)return u&&p(l,k,"start"),H(),u&&p(l,k,"close"),l;v&&ta(q);u={structural:v,element:e,event:k,addClass:h.addClass,removeClass:h.removeClass,close:H,options:h,runner:l};if(E){if(d("skip",u,w)){if(2===w.state)return H(),l;T(e,w,u);return w.runner}if(d("cancel",u,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return T(e,w,u),w.runner;else if(d("join",u,w))if(2===w.state)T(e,u,{});else return Ua(e,
v?k:null,h),k=u.event=w.event,h=T(e,w,u),w.runner}else T(e,u,{});(E=u.structural)||(E="animate"===u.event&&0<Object.keys(u.options.to||{}).length||g(u));if(!E)return H(),n(q),l;var m=(w.counter||0)+1;u.counter=m;F(q,1,u);c.$$postDigest(function(){e=Ga(a);var b=y.get(q),c=!b,b=b||{},f=0<(e.parent()||[]).length&&("animate"===b.event||b.structural||g(b));if(c||b.counter!==m||!f){c&&(Oa(e,h),ha(e,h));if(c||v&&b.event!==k)h.domOperation(),l.end();f||n(q)}else k=!b.structural&&g(b,!0)?"setClass":b.event,
F(q,2),b=sa(e,k,b.options),l.setHost(b),p(l,k,"start",{}),b.done(function(a){H(!a);(a=y.get(q))&&a.counter===m&&n(q);p(l,k,"close",{})})});return l}function ta(a){a=a.querySelectorAll("[data-ng-animate]");t(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=y.get(a);if(c)switch(b){case 2:c.runner.end();case 1:y.delete(a)}})}function n(a){a.removeAttribute("data-ng-animate");y.delete(a)}function K(a,b,c){c=l[0].body;var f=I(e),d=a===c||"HTML"===a.nodeName,k=a===f,h=!1,q=ga.get(a),
C;for((a=z.data(a,"$ngAnimatePin"))&&(b=I(a));b;){k||(k=b===f);if(1!==b.nodeType)break;a=y.get(b)||{};if(!h){var p=ga.get(b);if(!0===p&&!1!==q){q=!0;break}else!1===p&&(q=!1);h=a.structural}if(P(C)||!0===C)a=z.data(b,"$$ngAnimateChildren"),ya(a)&&(C=a);if(h&&!1===C)break;d||(d=b===c);if(d&&k)break;if(!k&&(a=z.data(b,"$ngAnimatePin"))){b=I(a);continue}b=b.parentNode}return(!h||C)&&!0!==q&&k&&d}function F(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);c=(b=y.get(a))?va(b,c):c;y.set(a,c)}
var y=new J,ga=new J,f=null,q=c.$watch(function(){return 0===v.totalPendingRequests},function(a){a&&(q(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),k=Object.create(null);J=a.customFilter();var na=a.classNameFilter();h=function(){return!0};var Ya=J||h,D=na?function(a,b){var c=[a.getAttribute("class"),b.addClass,b.removeClass].join(" ");return na.test(c)}:h,Oa=X(E),u=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ba={on:function(a,
b,c){var f=ua(b);k[a]=k[a]||[];k[a].push({node:f,callback:c});z(b).on("$destroy",function(){y.get(f)||ba.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||B(arguments[0])){var f=k[a];f&&(k[a]=1===arguments.length?null:H(f,b,c))}else for(f in b=arguments[0],k)k[f]=H(k[f],b)},pin:function(a,b){Ea(Z(a),"element","not an element");Ea(Z(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,b){var c=arguments.length;
if(0===c)b=!!f;else if(Z(a)){var d=I(a);1===c?b=!ga.get(d):ga.set(d,!b)}else b=f=!!a;return b}};return ba}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,g,e,r,G){function N(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;h.set(d,a);for(var p;e;){if(p=h.get(e)){p.processed||(p=b(p));break}e=e.parentNode}(p||c).children.push(a);
return a}var c={children:[]},d,h=new r;for(d=0;d<a.length;d++){var e=a[d];h.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var h=0,e=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=h,h=0,b.push(e),e=[]);e.push(g.fn);g.children.forEach(function(a){h++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var l=[],J=X(a);return function(r,m,v){function E(a){a=a.hasAttribute("ng-animate-ref")?
[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];t(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function h(a){var b=[],c={};t(a,function(a,d){var k=I(a.element),h=0<=["enter","move"].indexOf(a.event),k=a.structural?E(k):[];if(k.length){var e=h?"to":"from";t(k,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:z(a)}})}else b.push(a)});var d={},h={};t(c,function(c,e){var g=c.from,q=c.to;if(g&&q){var C=a[g.animationID],
p=a[q.animationID],y=g.animationID.toString();if(!h[y]){var n=h[y]={structural:!0,beforeStart:function(){C.beforeStart();p.beforeStart()},close:function(){C.close();p.close()},classes:L(C.classes,p.classes),from:C,to:p,anchors:[]};n.classes.length?b.push(n):(b.push(C),b.push(p))}h[y].anchors.push({out:g.element,"in":q.element})}else g=g?g.animationID:q.animationID,q=g.toString(),d[q]||(d[q]=!0,b.push(a[g]))});return b}function L(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var h=
a[d];if("ng-"!==h.substring(0,3))for(var e=0;e<b.length;e++)if(h===b[e]){c.push(h);break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=g.get(b[c])(a);if(d)return d}}function C(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function H(){var a=r.data("$$animationRunner");!a||"leave"===m&&v.$$domOperationFired||a.end()}function p(b){r.off("$destroy",H);r.removeData("$$animationRunner");J(r,v);ha(r,
v);v.domOperation();F&&a.removeClass(r,F);r.removeClass("ng-animate");n.complete(!b)}v=oa(v);var ta=0<=["enter","move","leave"].indexOf(m),n=new e({end:function(){p()},cancel:function(){p(!0)}});if(!b.length)return p(),n;r.data("$$animationRunner",n);var K=Fa(r.attr("class"),Fa(v.addClass,v.removeClass)),F=v.tempClasses;F&&(K+=" "+F,v.tempClasses=null);var y;ta&&(y="ng-"+m+"-prepare",a.addClass(r,y));l.push({element:r,classes:K,event:m,structural:ta,options:v,beforeStart:function(){r.addClass("ng-animate");
F&&a.addClass(r,F);y&&(a.removeClass(r,y),y=null)},close:p});r.on("$destroy",H);if(1<l.length)return n;d.$$postDigest(function(){var a=[];t(l,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});l.length=0;var b=h(a),c=[];t(b,function(a){c.push({domNode:I(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),C(a,b)):
c()}})});G(N(c))});return n}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,g,e,r,G,N,l,J){function m(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++L))+"-"+a.getAttribute("class")+"-"+b}function da(h,e,p,r){var n;0<b.count(p)&&(n=c.get(p),n||(e=W(e,"-stagger"),g.addClass(h,e),n=Ja(a,h,r),n.animationDuration=
Math.max(n.animationDuration,0),n.transitionDuration=Math.max(n.transitionDuration,0),g.removeClass(h,e),c.put(p,n)));return n||{}}function v(a){x.push(a);l.waitUntilQuiet(function(){b.flush();c.flush();for(var a=G(),d=0;d<x.length;d++)x[d](a);x.length=0})}function E(c,h,e){h=b.get(e);h||(h=Ja(a,c,Wa),"infinite"===h.animationIterationCount&&(h.animationIterationCount=1));b.put(e,h);c=h;e=c.animationDelay;h=c.transitionDelay;c.maxDelay=e&&h?Math.max(e,h):e||h;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var h=X(g),L=0,x=[];return function(a,c){function d(){n()}function l(){n(!0)}function n(b){if(!(L||ba&&u)){L=!0;u=!1;f.$$skipPreparationClasses||g.removeClass(a,fa);g.removeClass(a,ca);wa(k,!1);pa(k,!1);t(x,function(a){k.style[a[0]]=""});h(a,f);ha(a,f);Object.keys(q).length&&t(q,function(a,b){a?k.style.setProperty(b,a):k.style.removeProperty(b)});if(f.onDone)f.onDone();ea&&ea.length&&a.off(ea.join(" "),y);var c=a.data("$$animateCss");c&&(r.cancel(c[0].timer),
a.removeData("$$animateCss"));z&&z.complete(!b)}}function K(a){s.blockTransition&&pa(k,a);s.blockKeyframeAnimation&&wa(k,!!a)}function F(){z=new e({end:d,cancel:l});v(O);n();return{$$willAnimate:!1,start:function(){return z},end:d}}function y(a){a.stopPropagation();var b=a.originalEvent||a;b.target===k&&(a=b.$manualTimeStamp||Date.now(),b=parseFloat(b.elapsedTime.toFixed(3)),Math.max(a-T,0)>=P&&b>=M&&(ba=!0,n()))}function ga(){function b(){if(!L){K(!1);t(x,function(a){k.style[a[0]]=a[1]});h(a,f);
g.addClass(a,ca);if(s.recalculateTimingStyles){ma=k.getAttribute("class")+" "+fa;ja=m(k,ma);A=E(k,ma,ja);$=A.maxDelay;w=Math.max($,0);M=A.maxDuration;if(0===M){n();return}s.hasTransitions=0<A.transitionDuration;s.hasAnimations=0<A.animationDuration}s.applyAnimationDelay&&($="boolean"!==typeof f.delay&&xa(f.delay)?parseFloat(f.delay):$,w=Math.max($,0),A.animationDelay=$,aa=[qa,$+"s"],x.push(aa),k.style[aa[0]]=aa[1]);P=1E3*w;S=1E3*M;if(f.easing){var d,e=f.easing;s.hasTransitions&&(d=Q+"TimingFunction",
x.push([d,e]),k.style[d]=e);s.hasAnimations&&(d=Y+"TimingFunction",x.push([d,e]),k.style[d]=e)}A.transitionDuration&&ea.push(za);A.animationDuration&&ea.push(Aa);T=Date.now();var l=P+1.5*S;d=T+l;var e=a.data("$$animateCss")||[],p=!0;if(e.length){var F=e[0];(p=d>F.expectedEndTime)?r.cancel(F.timer):e.push(n)}p&&(l=r(c,l,!1),e[0]={timer:l,expectedEndTime:d},e.push(n),a.data("$$animateCss",e));if(ea.length)a.on(ea.join(" "),y);f.to&&(f.cleanupStyles&&Ma(q,k,Object.keys(f.to)),Ia(a,f))}}function c(){var b=
a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!L)if(k.parentNode){var d=function(a){if(ba)u&&a&&(u=!1,n());else if(u=!a,A.animationDuration)if(a=wa(k,u),u)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<Z&&(A.transitionDuration&&0===U.transitionDuration||A.animationDuration&&0===U.animationDuration)&&Math.max(U.animationDelay,U.transitionDelay);e?r(b,Math.floor(e*Z*1E3),!1):b();B.resume=function(){d(!0)};B.pause=function(){d(!1)}}else n()}
var f=c||{};f.$$prepared||(f=oa(Ca(f)));var q={},k=I(a);if(!k||!k.parentNode||!J.enabled())return F();var x=[],G=a.attr("class"),D=Qa(f),L,u,ba,z,B,w,P,M,S,T,ea=[];if(0===f.duration||!N.animations&&!N.transitions)return F();var ia=f.event&&V(f.event)?f.event.join(" "):f.event,X="",R="";ia&&f.structural?X=W(ia,"ng-",!0):ia&&(X=ia);f.addClass&&(R+=W(f.addClass,"-add"));f.removeClass&&(R.length&&(R+=" "),R+=W(f.removeClass,"-remove"));f.applyClassesEarly&&R.length&&h(a,f);var fa=[X,R].join(" ").trim(),
ma=G+" "+fa,ca=W(fa,"-active"),G=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||G||fa))return F();var ja,U;0<f.stagger?(D=parseFloat(f.stagger),U={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(ja=m(k,ma),U=da(k,fa,ja,Xa));f.$$skipPreparationClasses||g.addClass(a,fa);f.transitionStyle&&(D=[Q,f.transitionStyle],ka(k,D),x.push(D));0<=f.duration&&(D=0<k.style[Q].length,D=Ka(f.duration,D),ka(k,D),x.push(D));f.keyframeStyle&&(D=[Y,f.keyframeStyle],
ka(k,D),x.push(D));var Z=U?0<=f.staggerIndex?f.staggerIndex:b.count(ja):0;(ia=0===Z)&&!f.skipBlocking&&pa(k,9999);var A=E(k,ma,ja),$=A.maxDelay;w=Math.max($,0);M=A.maxDuration;var s={};s.hasTransitions=0<A.transitionDuration;s.hasAnimations=0<A.animationDuration;s.hasTransitionAll=s.hasTransitions&&"all"===A.transitionProperty;s.applyTransitionDuration=G&&(s.hasTransitions&&!s.hasTransitionAll||s.hasAnimations&&!s.hasTransitions);s.applyAnimationDuration=f.duration&&s.hasAnimations;s.applyTransitionDelay=
xa(f.delay)&&(s.applyTransitionDuration||s.hasTransitions);s.applyAnimationDelay=xa(f.delay)&&s.hasAnimations;s.recalculateTimingStyles=0<R.length;if(s.applyTransitionDuration||s.applyAnimationDuration)M=f.duration?parseFloat(f.duration):M,s.applyTransitionDuration&&(s.hasTransitions=!0,A.transitionDuration=M,D=0<k.style[Q+"Property"].length,x.push(Ka(M,D))),s.applyAnimationDuration&&(s.hasAnimations=!0,A.animationDuration=M,x.push([Ba,M+"s"]));if(0===M&&!s.recalculateTimingStyles)return F();if(null!=
f.delay){var aa;"boolean"!==typeof f.delay&&(aa=parseFloat(f.delay),w=Math.max(aa,0));s.applyTransitionDelay&&x.push([la,aa+"s"]);s.applyAnimationDelay&&x.push([qa,aa+"s"])}null==f.duration&&0<A.transitionDuration&&(s.recalculateTimingStyles=s.recalculateTimingStyles||ia);P=1E3*w;S=1E3*M;f.skipBlocking||(s.blockTransition=0<A.transitionDuration,s.blockKeyframeAnimation=0<A.animationDuration&&0<U.animationDelay&&0===U.animationDuration);f.from&&(f.cleanupStyles&&Ma(q,k,Object.keys(f.from)),Ha(a,f));
s.blockTransition||s.blockKeyframeAnimation?K(M):f.skipBlocking||pa(k,!1);return{$$willAnimate:!0,end:d,start:function(){if(!L)return B={end:d,cancel:l,resume:null,pause:null},z=new e(B),v(ga),z}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,g,e,r,G){function N(a){return a.replace(/\bng-\S+\b/g,"")}function l(a,b){B(a)&&
(a=a.split(" "));B(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function J(c,e,g){function r(a){var b={},c=I(a).getBoundingClientRect();t(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=v.scrollTop;break;case "left":d+=v.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function G(){var c=N(g.attr("class")||""),d=l(c,n),c=l(n,c),d=a(m,{to:r(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?
d:null}function p(){m.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var m=z(I(e).cloneNode(!0)),n=N(m.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");m.addClass("ng-anchor");E.append(m);var K;c=function(){var c=a(m,{addClass:"ng-anchor-out",delay:!0,from:r(e)});return c.$$willAnimate?c:null}();if(!c&&(K=G(),!K))return p();var F=c||K;return{start:function(){function a(){c&&c.end()}var b,c=F.start();c.done(function(){c=null;if(!K&&(K=G()))return c=
K.start(),c.done(function(){c=null;p();b.complete()}),c;p();b.complete()});return b=new d({end:a,cancel:a})}}}function m(a,b,c,e){var g=da(a,O),l=da(b,O),r=[];t(e,function(a){(a=J(c,a.out,a["in"]))&&r.push(a)});if(g||l||0!==r.length)return{start:function(){function a(){t(b,function(a){a.end()})}var b=[];g&&b.push(g.start());l&&b.push(l.start());t(r,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function da(c){var d=c.element,e=c.options||
{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=ca(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return O;var v=G[0].body;c=I(g);var E=z(c.parentNode&&11===c.parentNode.nodeType||v.contains(c)?c:v);return function(a){return a.from&&a.to?m(a.from,a.to,a.classes,a.anchors):da(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function g(c){c=V(c)?c:c.split(" ");for(var d=[],e={},g=0;g<c.length;g++){var m=c[g],t=a.$$registeredAnimations[m];t&&!e[m]&&(d.push(b.get(t)),e[m]=!0)}return d}var e=X(d);return function(a,b,d,l){function m(){l.domOperation();e(a,l)}function z(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,h,L,f];break;case "addClass":b=[b,h,f];break;case "removeClass":b=[b,L,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,
b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;return O}function B(a,b,d,e,f){var g=[];t(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||O)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=z(h,a,b,d,function(a){k(!1===a)});return e})});return g}function v(a,b,d,e,f){var g=B(a,b,d,e,f);if(0===g.length){var h,l;"beforeSetClass"===f?(h=B(a,"removeClass",d,e,"beforeRemoveClass"),l=B(a,"addClass",d,e,"beforeAddClass")):
"setClass"===f&&(h=B(a,"removeClass",d,e,"removeClass"),l=B(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&t(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){t(b,function(b){a?b.cancel():b.end()})}}}var E=!1;3===arguments.length&&ra(d)&&(l=d,d=null);l=oa(l);d||(d=a.attr("class")||"",l.addClass&&(d+=" "+l.addClass),l.removeClass&&(d+=" "+l.removeClass));var h=l.addClass,L=l.removeClass,x=g(d),C,H;if(x.length){var p,
I;"leave"===b?(I="leave",p="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),p=b);"enter"!==b&&"move"!==b&&(C=v(a,b,l,x,I));H=v(a,b,l,x,p)}if(C||H){var n;return{$$willAnimate:!0,end:function(){n?n.end():(E=!0,m(),ha(a,l),n=new c,n.complete(!0));return n},start:function(){function b(c){E=!0;m();ha(a,l);n.complete(c)}if(n)return n;n=new c;var d,e=[];C&&e.push(function(a){d=C(a)});e.length?e.push(function(a){m();a(!0)}):m();H&&e.push(function(a){d=H(a)});n.setHost({end:function(){E||((d||
O)(void 0),b(void 0))},cancel:function(){E||((d||O)(!0),b(!0))}});c.chain(e,b);return n}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){t(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&
d.push(m.start());c.all(d,function(a){g.complete(a)});var g=new c({end:a(),cancel:a()});return g}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;(function(){
///<reference path="../typings/angularjs/angular.d.ts"/>
/*
 * decorates $compileProvider so that we have access to routing metadata
 */
function compilerProviderDecorator($compileProvider, $$directiveIntrospectorProvider) {
    var directive = $compileProvider.directive;
    $compileProvider.directive = function (name, factory) {
        $$directiveIntrospectorProvider.register(name, factory);
        return directive.apply(this, arguments);
    };
}
/*
 * private service that holds route mappings for each controller
 */
var DirectiveIntrospectorProvider = (function () {
    function DirectiveIntrospectorProvider() {
        this.directiveBuffer = [];
        this.directiveFactoriesByName = {};
        this.onDirectiveRegistered = null;
    }
    DirectiveIntrospectorProvider.prototype.register = function (name, factory) {
        if (angular.isArray(factory)) {
            factory = factory[factory.length - 1];
        }
        this.directiveFactoriesByName[name] = factory;
        if (this.onDirectiveRegistered) {
            this.onDirectiveRegistered(name, factory);
        }
        else {
            this.directiveBuffer.push({ name: name, factory: factory });
        }
    };
    DirectiveIntrospectorProvider.prototype.$get = function () {
        var _this = this;
        var fn = function (newOnControllerRegistered) {
            _this.onDirectiveRegistered = newOnControllerRegistered;
            while (_this.directiveBuffer.length > 0) {
                var directive = _this.directiveBuffer.pop();
                _this.onDirectiveRegistered(directive.name, directive.factory);
            }
        };
        fn.getTypeByName = function (name) { return _this.directiveFactoriesByName[name]; };
        return fn;
    };
    return DirectiveIntrospectorProvider;
})();
/**
 * @name ngOutlet
 *
 * @description
 * An ngOutlet is where resolved content goes.
 *
 * ## Use
 *
 * ```html
 * <div ng-outlet="name"></div>
 * ```
 *
 * The value for the `ngOutlet` attribute is optional.
 */
function ngOutletDirective($animate, $q, $rootRouter) {
    var rootRouter = $rootRouter;
    return {
        restrict: 'AE',
        transclude: 'element',
        terminal: true,
        priority: 400,
        require: ['?^^ngOutlet', 'ngOutlet'],
        link: outletLink,
        controller: (function () {
            function class_1() {
            }
            return class_1;
        })(),
        controllerAs: '$$ngOutlet'
    };
    function outletLink(scope, element, attrs, ctrls, $transclude) {
        var Outlet = (function () {
            function Outlet(controller, router) {
                this.controller = controller;
                this.router = router;
            }
            Outlet.prototype.cleanupLastView = function () {
                var _this = this;
                if (this.previousLeaveAnimation) {
                    $animate.cancel(this.previousLeaveAnimation);
                    this.previousLeaveAnimation = null;
                }
                if (this.currentScope) {
                    this.currentScope.$destroy();
                    this.currentScope = null;
                }
                if (this.currentElement) {
                    this.previousLeaveAnimation = $animate.leave(this.currentElement);
                    this.previousLeaveAnimation.then(function () { return _this.previousLeaveAnimation = null; });
                    this.currentElement = null;
                }
            };
            Outlet.prototype.reuse = function (instruction) {
                var next = $q.when(true);
                var previousInstruction = this.currentInstruction;
                this.currentInstruction = instruction;
                if (this.currentController && this.currentController.$routerOnReuse) {
                    next = $q.when(this.currentController.$routerOnReuse(this.currentInstruction, previousInstruction));
                }
                return next;
            };
            Outlet.prototype.routerCanReuse = function (nextInstruction) {
                var result;
                if (!this.currentInstruction ||
                    this.currentInstruction.componentType !== nextInstruction.componentType) {
                    result = false;
                }
                else if (this.currentController && this.currentController.$routerCanReuse) {
                    result = this.currentController.$routerCanReuse(nextInstruction, this.currentInstruction);
                }
                else {
                    result = nextInstruction === this.currentInstruction ||
                        angular.equals(nextInstruction.params, this.currentInstruction.params);
                }
                return $q.when(result);
            };
            Outlet.prototype.routerCanDeactivate = function (instruction) {
                if (this.currentController && this.currentController.$routerCanDeactivate) {
                    return $q.when(this.currentController.$routerCanDeactivate(instruction, this.currentInstruction));
                }
                return $q.when(true);
            };
            Outlet.prototype.deactivate = function (instruction) {
                if (this.currentController && this.currentController.$routerOnDeactivate) {
                    return $q.when(this.currentController.$routerOnDeactivate(instruction, this.currentInstruction));
                }
                return $q.when();
            };
            Outlet.prototype.activate = function (instruction) {
                var _this = this;
                this.previousInstruction = this.currentInstruction;
                this.currentInstruction = instruction;
                var componentName = this.controller.$$componentName = instruction.componentType;
                if (typeof componentName !== 'string') {
                    throw new Error('Component is not a string for ' + instruction.urlPath);
                }
                this.controller.$$template = '<' + dashCase(componentName) + ' $router="::$$router"></' +
                    dashCase(componentName) + '>';
                this.controller.$$router = this.router.childRouter(instruction.componentType);
                this.controller.$$outlet = this;
                var newScope = scope.$new();
                newScope.$$router = this.controller.$$router;
                this.deferredActivation = $q.defer();
                var clone = $transclude(newScope, function (clone) {
                    $animate.enter(clone, null, _this.currentElement || element);
                    _this.cleanupLastView();
                });
                this.currentElement = clone;
                this.currentScope = newScope;
                return this.deferredActivation.promise;
            };
            return Outlet;
        })();
        var parentCtrl = ctrls[0], myCtrl = ctrls[1], router = (parentCtrl && parentCtrl.$$router) || rootRouter;
        myCtrl.$$currentComponent = null;
        router.registerPrimaryOutlet(new Outlet(myCtrl, router));
    }
}
/**
 * This directive is responsible for compiling the contents of ng-outlet
 */
function ngOutletFillContentDirective($compile) {
    return {
        restrict: 'EA',
        priority: -400,
        require: 'ngOutlet',
        link: function (scope, element, attrs, ctrl) {
            var template = ctrl.$$template;
            element.html(template);
            $compile(element.contents())(scope);
        }
    };
}
function routerTriggerDirective($q) {
    return {
        require: '^ngOutlet',
        priority: -1000,
        link: function (scope, element, attr, ngOutletCtrl) {
            var promise = $q.when();
            var outlet = ngOutletCtrl.$$outlet;
            var currentComponent = outlet.currentController =
                element.controller(ngOutletCtrl.$$componentName);
            if (currentComponent.$routerOnActivate) {
                promise = $q.when(currentComponent.$routerOnActivate(outlet.currentInstruction, outlet.previousInstruction));
            }
            promise.then(outlet.deferredActivation.resolve, outlet.deferredActivation.reject);
        }
    };
}
/**
 * @name ngLink
 * @description
 * Lets you link to different parts of the app, and automatically generates hrefs.
 *
 * ## Use
 * The directive uses a simple syntax: `ng-link="componentName({ param: paramValue })"`
 *
 * ### Example
 *
 * ```js
 * angular.module('myApp', ['ngComponentRouter'])
 *   .controller('AppController', ['$rootRouter', function($rootRouter) {
 *     $rootRouter.config({ path: '/user/:id', component: 'user' });
 *     this.user = { name: 'Brian', id: 123 };
 *   });
 * ```
 *
 * ```html
 * <div ng-controller="AppController as app">
 *   <a ng-link="user({id: app.user.id})">{{app.user.name}}</a>
 * </div>
 * ```
 */
function ngLinkDirective($rootRouter, $parse) {
    return { require: '?^^ngOutlet', restrict: 'A', link: ngLinkDirectiveLinkFn };
    function ngLinkDirectiveLinkFn(scope, element, attrs, ctrl) {
        var router = (ctrl && ctrl.$$router) || $rootRouter;
        if (!router) {
            return;
        }
        var instruction = null;
        var link = attrs.ngLink || '';
        function getLink(params) {
            instruction = router.generate(params);
            return './' + angular.stringifyInstruction(instruction);
        }
        var routeParamsGetter = $parse(link);
        // we can avoid adding a watcher if it's a literal
        if (routeParamsGetter.constant) {
            var params = routeParamsGetter();
            element.attr('href', getLink(params));
        }
        else {
            scope.$watch(function () { return routeParamsGetter(scope); }, function (params) { return element.attr('href', getLink(params)); }, true);
        }
        element.on('click', function (event) {
            if (event.which !== 1 || !instruction) {
                return;
            }
            $rootRouter.navigateByInstruction(instruction);
            event.preventDefault();
        });
    }
}
function dashCase(str) {
    return str.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
}
/*
 * A module for adding new a routing system Angular 1.
 */
angular.module('ngComponentRouter', [])
    .directive('ngOutlet', ['$animate', '$q', '$rootRouter', ngOutletDirective])
    .directive('ngOutlet', ['$compile', ngOutletFillContentDirective])
    .directive('ngLink', ['$rootRouter', '$parse', ngLinkDirective])
    .directive('$router', ['$q', routerTriggerDirective]);
/*
 * A module for inspecting controller constructors
 */
angular.module('ng')
    .provider('$$directiveIntrospector', DirectiveIntrospectorProvider)
    .config(['$compileProvider', '$$directiveIntrospectorProvider', compilerProviderDecorator]);

angular.module('ngComponentRouter').
    value('$route', null). // can be overloaded with ngRouteShim
    // Because Angular 1 has no notion of a root component, we use an object with unique identity
    // to represent this. Can be overloaded with a component name
    value('$routerRootComponent', new Object()).
    factory('$rootRouter', ['$q', '$location', '$$directiveIntrospector', '$browser', '$rootScope', '$injector', '$routerRootComponent', routerFactory]);

function routerFactory($q, $location, $$directiveIntrospector, $browser, $rootScope, $injector, $routerRootComponent) {

  // When this file is processed, the line below is replaced with
  // the contents of `../lib/facades.es5`.
  function CONST() {
  return (function(target) {
    return target;
  });
}

function CONST_EXPR(expr) {
  return expr;
}

function isPresent (x) {
  return !!x;
}

function isBlank (x) {
  return !x;
}

function isString(obj) {
  return typeof obj === 'string';
}

function isType (x) {
  return typeof x === 'function';
}

function isStringMap(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isArray(obj) {
  return Array.isArray(obj);
}

function getTypeNameForDebugging (fn) {
  return fn.name || 'Root';
}

var PromiseWrapper = {
  resolve: function (reason) {
    return $q.when(reason);
  },

  reject: function (reason) {
    return $q.reject(reason);
  },

  catchError: function (promise, fn) {
    return promise.then(null, fn);
  },
  all: function (promises) {
    return $q.all(promises);
  }
};

var RegExpWrapper = {
  create: function(regExpStr, flags) {
    flags = flags ? flags.replace(/g/g, '') : '';
    return new RegExp(regExpStr, flags + 'g');
  },
  firstMatch: function(regExp, input) {
    regExp.lastIndex = 0;
    return regExp.exec(input);
  },
  matcher: function (regExp, input) {
    regExp.lastIndex = 0;
    return { re: regExp, input: input };
  }
};

var reflector = {
  annotations: function (fn) {
    //TODO: implement me
    return fn.annotations || [];
  }
};

var MapWrapper = {
  create: function() {
    return new Map();
  },

  get: function(m, k) {
    return m.get(k);
  },

  set: function(m, k, v) {
    return m.set(k, v);
  },

  contains: function (m, k) {
    return m.has(k);
  },

  forEach: function (m, fn) {
    return m.forEach(fn);
  }
};

var StringMapWrapper = {
  create: function () {
    return {};
  },

  set: function (m, k, v) {
    return m[k] = v;
  },

  get: function (m, k) {
    return m.hasOwnProperty(k) ? m[k] : undefined;
  },

  contains: function (m, k) {
    return m.hasOwnProperty(k);
  },

  keys: function(map) {
    return Object.keys(map);
  },

  isEmpty: function(map) {
    for (var prop in map) {
      if (map.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  delete: function(map, key) {
    delete map[key];
  },

  forEach: function (m, fn) {
    for (var prop in m) {
      if (m.hasOwnProperty(prop)) {
        fn(m[prop], prop);
      }
    }
  },

  equals: function (m1, m2) {
    var k1 = Object.keys(m1);
    var k2 = Object.keys(m2);
    if (k1.length != k2.length) {
      return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
      key = k1[i];
      if (m1[key] !== m2[key]) {
        return false;
      }
    }
    return true;
  },

  merge: function(m1, m2) {
    var m = {};
    for (var attr in m1) {
      if (m1.hasOwnProperty(attr)) {
        m[attr] = m1[attr];
      }
    }
    for (var attr in m2) {
      if (m2.hasOwnProperty(attr)) {
        m[attr] = m2[attr];
      }
    }
    return m;
  }
};

var List = Array;
var ListWrapper = {
  toJSON: function(l) {
    return JSON.stringify(l);
  },

  clear: function (l) {
    l.length = 0;
  },

  create: function () {
    return [];
  },

  push: function (l, v) {
    return l.push(v);
  },

  forEach: function (l, fn) {
    return l.forEach(fn);
  },

  first: function(array) {
    if (!array)
      return null;
    return array[0];
  },

  last: function(array) {
    return (array && array.length) > 0 ? array[array.length - 1] : null;
  },

  map: function (l, fn) {
    return l.map(fn);
  },

  join: function (l, str) {
    return l.join(str);
  },

  reduce: function(list, fn, init) {
    return list.reduce(fn, init);
  },

  filter: function(array, pred) {
    return array.filter(pred);
  },

  concat: function(a, b) {
    return a.concat(b);
  },

  slice: function(l) {
    var from = arguments[1] !== (void 0) ? arguments[1] : 0;
    var to = arguments[2] !== (void 0) ? arguments[2] : null;
    return l.slice(from, to === null ? undefined : to);
  },

  maximum: function(list, predicate) {
    if (list.length == 0) {
      return null;
    }
    var solution = null;
    var maxValue = -Infinity;
    for (var index = 0; index < list.length; index++) {
      var candidate = list[index];
      if (isBlank(candidate)) {
        continue;
      }
      var candidateValue = predicate(candidate);
      if (candidateValue > maxValue) {
        solution = candidate;
        maxValue = candidateValue;
      }
    }
    return solution;
  }
};

var StringWrapper = {
  charCodeAt: function(s, i) {
    return s.charCodeAt(i);
  },

  equals: function (s1, s2) {
    return s1 === s2;
  },

  split: function(s, re) {
    return s.split(re);
  },

  replaceAll: function(s, from, replace) {
    return s.replace(from, replace);
  },

  replaceAllMapped: function(s, from, cb) {
    return s.replace(from, function(matches) {
      // Remove offset & string from the result array
      matches.splice(-2, 2);
      // The callback receives match, p1, ..., pn
      return cb.apply(null, matches);
    });
  },

  contains: function(s, substr) {
    return s.indexOf(substr) != -1;
  }

};

//TODO: implement?
// I think it's too heavy to ask 1.x users to bring in Rx for the router...
function EventEmitter() {}

var BaseException = Error;

var ObservableWrapper = {
  callNext: function(ob, val) {
    ob.fn(val);
  },
  callEmit: function(ob, val) {
    ob.fn(val);
  },

  subscribe: function(ob, fn) {
    ob.fn = fn;
  }
};

// TODO: https://github.com/angular/angular.js/blob/master/src/ng/browser.js#L227-L265
var $__router_47_location__ = {
  Location: Location
};

function Location(){}
Location.prototype.subscribe = function () {
  //TODO: implement
};
Location.prototype.path = function () {
  return $location.url();
};
Location.prototype.go = function (path, query) {
  return $location.url(path + query);
};


  var exports = {
    Injectable: function () {},
    OpaqueToken: function () {},
    Inject: function () {}
  };
  var require = function () {return exports;};

  // When this file is processed, the line below is replaced with
  // the contents of the compiled TypeScript classes.
  var TouchMap = (function () {
    function TouchMap(map) {
        var _this = this;
        this.map = {};
        this.keys = {};
        if (isPresent(map)) {
            StringMapWrapper.forEach(map, function (value, key) {
                _this.map[key] = isPresent(value) ? value.toString() : null;
                _this.keys[key] = true;
            });
        }
    }
    TouchMap.prototype.get = function (key) {
        StringMapWrapper.delete(this.keys, key);
        return this.map[key];
    };
    TouchMap.prototype.getUnused = function () {
        var _this = this;
        var unused = {};
        var keys = StringMapWrapper.keys(this.keys);
        keys.forEach(function (key) { return unused[key] = StringMapWrapper.get(_this.map, key); });
        return unused;
    };
    return TouchMap;
})();
exports.TouchMap = TouchMap;
function normalizeString(obj) {
    if (isBlank(obj)) {
        return null;
    }
    else {
        return obj.toString();
    }
}
exports.normalizeString = normalizeString;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function convertUrlParamsToArray(urlParams) {
    var paramsArray = [];
    if (isBlank(urlParams)) {
        return [];
    }
    StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
    return paramsArray;
}
exports.convertUrlParamsToArray = convertUrlParamsToArray;
// Convert an object of url parameters into a string that can be used in an URL
function serializeParams(urlParams, joiner) {
    if (joiner === void 0) { joiner = '&'; }
    return convertUrlParamsToArray(urlParams).join(joiner);
}
exports.serializeParams = serializeParams;
/**
 * This class represents a parsed URL
 */
var Url = (function () {
    function Url(path, child, auxiliary, params) {
        if (child === void 0) { child = null; }
        if (auxiliary === void 0) { auxiliary = CONST_EXPR([]); }
        if (params === void 0) { params = CONST_EXPR({}); }
        this.path = path;
        this.child = child;
        this.auxiliary = auxiliary;
        this.params = params;
    }
    Url.prototype.toString = function () {
        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
    };
    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
    /** @internal */
    Url.prototype._auxToString = function () {
        return this.auxiliary.length > 0 ?
            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
            '';
    };
    Url.prototype._matrixParamsToString = function () {
        var paramString = serializeParams(this.params, ';');
        if (paramString.length > 0) {
            return ';' + paramString;
        }
        return '';
    };
    /** @internal */
    Url.prototype._childString = function () { return isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
    return Url;
})();
exports.Url = Url;
var RootUrl = (function (_super) {
    __extends(RootUrl, _super);
    function RootUrl(path, child, auxiliary, params) {
        if (child === void 0) { child = null; }
        if (auxiliary === void 0) { auxiliary = CONST_EXPR([]); }
        if (params === void 0) { params = null; }
        _super.call(this, path, child, auxiliary, params);
    }
    RootUrl.prototype.toString = function () {
        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
    };
    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
    RootUrl.prototype._queryParamsToString = function () {
        if (isBlank(this.params)) {
            return '';
        }
        return '?' + serializeParams(this.params);
    };
    return RootUrl;
})(Url);
exports.RootUrl = RootUrl;
function pathSegmentsToUrl(pathSegments) {
    var url = new Url(pathSegments[pathSegments.length - 1]);
    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
        url = new Url(pathSegments[i], url);
    }
    return url;
}
exports.pathSegmentsToUrl = pathSegmentsToUrl;
var SEGMENT_RE = RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
function matchUrlSegment(str) {
    var match = RegExpWrapper.firstMatch(SEGMENT_RE, str);
    return isPresent(match) ? match[0] : '';
}
var UrlParser = (function () {
    function UrlParser() {
    }
    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
    UrlParser.prototype.capture = function (str) {
        if (!this._remaining.startsWith(str)) {
            throw new BaseException("Expected \"" + str + "\".");
        }
        this._remaining = this._remaining.substring(str.length);
    };
    UrlParser.prototype.parse = function (url) {
        this._remaining = url;
        if (url == '' || url == '/') {
            return new Url('');
        }
        return this.parseRoot();
    };
    // segment + (aux segments) + (query params)
    UrlParser.prototype.parseRoot = function () {
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var path = matchUrlSegment(this._remaining);
        this.capture(path);
        var aux = [];
        if (this.peekStartsWith('(')) {
            aux = this.parseAuxiliaryRoutes();
        }
        if (this.peekStartsWith(';')) {
            // TODO: should these params just be dropped?
            this.parseMatrixParams();
        }
        var child = null;
        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
            this.capture('/');
            child = this.parseSegment();
        }
        var queryParams = null;
        if (this.peekStartsWith('?')) {
            queryParams = this.parseQueryParams();
        }
        return new RootUrl(path, child, aux, queryParams);
    };
    // segment + (matrix params) + (aux segments)
    UrlParser.prototype.parseSegment = function () {
        if (this._remaining.length == 0) {
            return null;
        }
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var path = matchUrlSegment(this._remaining);
        this.capture(path);
        var matrixParams = null;
        if (this.peekStartsWith(';')) {
            matrixParams = this.parseMatrixParams();
        }
        var aux = [];
        if (this.peekStartsWith('(')) {
            aux = this.parseAuxiliaryRoutes();
        }
        var child = null;
        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
            this.capture('/');
            child = this.parseSegment();
        }
        return new Url(path, child, aux, matrixParams);
    };
    UrlParser.prototype.parseQueryParams = function () {
        var params = {};
        this.capture('?');
        this.parseParam(params);
        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
            this.capture('&');
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseMatrixParams = function () {
        var params = {};
        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
            this.capture(';');
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseParam = function (params) {
        var key = matchUrlSegment(this._remaining);
        if (isBlank(key)) {
            return;
        }
        this.capture(key);
        var value = true;
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var valueMatch = matchUrlSegment(this._remaining);
            if (isPresent(valueMatch)) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[key] = value;
    };
    UrlParser.prototype.parseAuxiliaryRoutes = function () {
        var routes = [];
        this.capture('(');
        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
            routes.push(this.parseSegment());
            if (this.peekStartsWith('//')) {
                this.capture('//');
            }
        }
        this.capture(')');
        return routes;
    };
    return UrlParser;
})();
exports.UrlParser = UrlParser;
exports.parser = new UrlParser();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RouteLifecycleHook = (function () {
    function RouteLifecycleHook(name) {
        this.name = name;
    }
    RouteLifecycleHook = __decorate([
        CONST()
    ], RouteLifecycleHook);
    return RouteLifecycleHook;
})();
exports.RouteLifecycleHook = RouteLifecycleHook;
var CanActivate = (function () {
    function CanActivate(fn) {
        this.fn = fn;
    }
    CanActivate = __decorate([
        CONST()
    ], CanActivate);
    return CanActivate;
})();
exports.CanActivate = CanActivate;
exports.routerCanReuse = CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
exports.routerCanDeactivate = CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
exports.routerOnActivate = CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
exports.routerOnReuse = CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
exports.routerOnDeactivate = CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));
var lifecycle_annotations_impl_1 = require('./lifecycle_annotations_impl');
function hasLifecycleHook(e, type) {
    if (!(type instanceof Type))
        return false;
    return e.name in type.prototype;
}
exports.hasLifecycleHook = hasLifecycleHook;
function getCanActivateHook(type) {
    var annotations = reflector.annotations(type);
    for (var i = 0; i < annotations.length; i += 1) {
        var annotation = annotations[i];
        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
            return annotation.fn;
        }
    }
    return null;
}
exports.getCanActivateHook = getCanActivateHook;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var route_definition_1 = require('../route_definition');
exports.RouteDefinition = route_definition_1.RouteDefinition;
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
var RouteConfig = (function () {
    function RouteConfig(configs) {
        this.configs = configs;
    }
    RouteConfig = __decorate([
        CONST()
    ], RouteConfig);
    return RouteConfig;
})();
exports.RouteConfig = RouteConfig;
var AbstractRoute = (function () {
    function AbstractRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data;
        this.name = name;
        this.useAsDefault = useAsDefault;
        this.path = path;
        this.regex = regex;
        this.serializer = serializer;
        this.data = data;
    }
    AbstractRoute = __decorate([
        CONST()
    ], AbstractRoute);
    return AbstractRoute;
})();
exports.AbstractRoute = AbstractRoute;
/**
 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route} from 'angular2/router';
 *
 * @RouteConfig([
 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
 * ])
 * class MyApp {}
 * ```
 */
var Route = (function (_super) {
    __extends(Route, _super);
    function Route(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.component = component;
    }
    Route = __decorate([
        CONST()
    ], Route);
    return Route;
})(AbstractRoute);
exports.Route = Route;
/**
 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
 *
 * It takes an object with the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 *
 * ### Example
 * ```
 * import {RouteConfig, AuxRoute} from 'angular2/router';
 *
 * @RouteConfig([
 *   new AuxRoute({path: '/home', component: HomeCmp})
 * ])
 * class MyApp {}
 * ```
 */
var AuxRoute = (function (_super) {
    __extends(AuxRoute, _super);
    function AuxRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.component = component;
    }
    AuxRoute = __decorate([
        CONST()
    ], AuxRoute);
    return AuxRoute;
})(AbstractRoute);
exports.AuxRoute = AuxRoute;
/**
 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
 * loaded component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `loader` is a function that returns a promise that resolves to a component.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, AsyncRoute} from 'angular2/router';
 *
 * @RouteConfig([
 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
 * 'MyLoadedCmp'})
 * ])
 * class MyApp {}
 * ```
 */
var AsyncRoute = (function (_super) {
    __extends(AsyncRoute, _super);
    function AsyncRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, loader = _a.loader;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.loader = loader;
    }
    AsyncRoute = __decorate([
        CONST()
    ], AsyncRoute);
    return AsyncRoute;
})(AbstractRoute);
exports.AsyncRoute = AsyncRoute;
/**
 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `redirectTo` is an array representing the link DSL.
 *
 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
 * option.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route, Redirect} from 'angular2/router';
 *
 * @RouteConfig([
 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
 * ])
 * class MyApp {}
 * ```
 */
var Redirect = (function (_super) {
    __extends(Redirect, _super);
    function Redirect(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, redirectTo = _a.redirectTo;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.redirectTo = redirectTo;
    }
    Redirect = __decorate([
        CONST()
    ], Redirect);
    return Redirect;
})(AbstractRoute);
exports.Redirect = Redirect;
var route_config_decorator_1 = require('./route_config_decorator');
/**
 * Given a JS Object that represents a route config, returns a corresponding Route, AsyncRoute,
 * AuxRoute or Redirect object.
 *
 * Also wraps an AsyncRoute's loader function to add the loaded component's route config to the
 * `RouteRegistry`.
 */
function normalizeRouteConfig(config, registry) {
    if (config instanceof route_config_decorator_1.AsyncRoute) {
        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
        return new route_config_decorator_1.AsyncRoute({
            path: config.path,
            loader: wrappedLoader,
            name: config.name,
            data: config.data,
            useAsDefault: config.useAsDefault
        });
    }
    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AuxRoute) {
        return config;
    }
    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
        throw new BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
    }
    if (config.as && config.name) {
        throw new BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
    }
    if (config.as) {
        config.name = config.as;
    }
    if (config.loader) {
        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
        return new route_config_decorator_1.AsyncRoute({
            path: config.path,
            loader: wrappedLoader,
            name: config.name,
            data: config.data,
            useAsDefault: config.useAsDefault
        });
    }
    if (config.aux) {
        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
    }
    if (config.component) {
        if (typeof config.component == 'object') {
            var componentDefinitionObject = config.component;
            if (componentDefinitionObject.type == 'constructor') {
                return new route_config_decorator_1.Route({
                    path: config.path,
                    component: componentDefinitionObject.constructor,
                    name: config.name,
                    data: config.data,
                    useAsDefault: config.useAsDefault
                });
            }
            else if (componentDefinitionObject.type == 'loader') {
                return new route_config_decorator_1.AsyncRoute({
                    path: config.path,
                    loader: componentDefinitionObject.loader,
                    name: config.name,
                    data: config.data,
                    useAsDefault: config.useAsDefault
                });
            }
            else {
                throw new BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
            }
        }
        return new route_config_decorator_1.Route(config);
    }
    if (config.redirectTo) {
        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
    }
    return config;
}
exports.normalizeRouteConfig = normalizeRouteConfig;
function wrapLoaderToReconfigureRegistry(loader, registry) {
    return function () {
        return loader().then(function (componentType) {
            registry.configFromComponent(componentType);
            return componentType;
        });
    };
}
function assertComponentExists(component, path) {
    if (!isType(component)) {
        throw new BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
    }
}
exports.assertComponentExists = assertComponentExists;
var instruction_1 = require('../../instruction');
var AsyncRouteHandler = (function () {
    function AsyncRouteHandler(_loader, data) {
        if (data === void 0) { data = null; }
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    AsyncRouteHandler.prototype.resolveComponentType = function () {
        var _this = this;
        if (isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then(function (componentType) {
            _this.componentType = componentType;
            return componentType;
        });
    };
    return AsyncRouteHandler;
})();
exports.AsyncRouteHandler = AsyncRouteHandler;
var instruction_1 = require('../../instruction');
var SyncRouteHandler = (function () {
    function SyncRouteHandler(componentType, data) {
        this.componentType = componentType;
        /** @internal */
        this._resolvedComponent = null;
        this._resolvedComponent = PromiseWrapper.resolve(componentType);
        this.data = isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
    return SyncRouteHandler;
})();
exports.SyncRouteHandler = SyncRouteHandler;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var url_parser_1 = require('../url_parser');
var instruction_1 = require('../instruction');
// RouteMatch objects hold information about a match between a rule and a URL
var RouteMatch = (function () {
    function RouteMatch() {
    }
    return RouteMatch;
})();
exports.RouteMatch = RouteMatch;
var PathMatch = (function (_super) {
    __extends(PathMatch, _super);
    function PathMatch(instruction, remaining, remainingAux) {
        _super.call(this);
        this.instruction = instruction;
        this.remaining = remaining;
        this.remainingAux = remainingAux;
    }
    return PathMatch;
})(RouteMatch);
exports.PathMatch = PathMatch;
var RedirectMatch = (function (_super) {
    __extends(RedirectMatch, _super);
    function RedirectMatch(redirectTo, specificity) {
        _super.call(this);
        this.redirectTo = redirectTo;
        this.specificity = specificity;
    }
    return RedirectMatch;
})(RouteMatch);
exports.RedirectMatch = RedirectMatch;
var RedirectRule = (function () {
    function RedirectRule(_pathRecognizer, redirectTo) {
        this._pathRecognizer = _pathRecognizer;
        this.redirectTo = redirectTo;
        this.hash = this._pathRecognizer.hash;
    }
    Object.defineProperty(RedirectRule.prototype, "path", {
        get: function () { return this._pathRecognizer.toString(); },
        set: function (val) { throw new BaseException('you cannot set the path of a RedirectRule directly'); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns `null` or a `ParsedUrl` representing the new path to match
     */
    RedirectRule.prototype.recognize = function (beginningSegment) {
        var match = null;
        if (isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
            match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
        }
        return PromiseWrapper.resolve(match);
    };
    RedirectRule.prototype.generate = function (params) {
        throw new BaseException("Tried to generate a redirect.");
    };
    return RedirectRule;
})();
exports.RedirectRule = RedirectRule;
// represents something like '/foo/:bar'
var RouteRule = (function () {
    // TODO: cache component instruction instances by params and by ParsedUrl instance
    function RouteRule(_routePath, handler) {
        this._routePath = _routePath;
        this.handler = handler;
        this._cache = new Map();
        this.specificity = this._routePath.specificity;
        this.hash = this._routePath.hash;
        this.terminal = this._routePath.terminal;
    }
    Object.defineProperty(RouteRule.prototype, "path", {
        get: function () { return this._routePath.toString(); },
        set: function (val) { throw new BaseException('you cannot set the path of a RouteRule directly'); },
        enumerable: true,
        configurable: true
    });
    RouteRule.prototype.recognize = function (beginningSegment) {
        var _this = this;
        var res = this._routePath.matchUrl(beginningSegment);
        if (isBlank(res)) {
            return null;
        }
        return this.handler.resolveComponentType().then(function (_) {
            var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
            return new PathMatch(componentInstruction, res.rest, res.auxiliary);
        });
    };
    RouteRule.prototype.generate = function (params) {
        var generated = this._routePath.generateUrl(params);
        var urlPath = generated.urlPath;
        var urlParams = generated.urlParams;
        return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
    };
    RouteRule.prototype.generateComponentPathValues = function (params) {
        return this._routePath.generateUrl(params);
    };
    RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
        if (isBlank(this.handler.componentType)) {
            throw new BaseException("Tried to get instruction before the type was loaded.");
        }
        var hashKey = urlPath + '?' + urlParams.join('&');
        if (this._cache.has(hashKey)) {
            return this._cache.get(hashKey);
        }
        var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params);
        this._cache.set(hashKey, instruction);
        return instruction;
    };
    return RouteRule;
})();
exports.RouteRule = RouteRule;
var rules_1 = require('./rules');
var route_config_impl_1 = require('../route_config/route_config_impl');
var async_route_handler_1 = require('./route_handlers/async_route_handler');
var sync_route_handler_1 = require('./route_handlers/sync_route_handler');
var param_route_path_1 = require('./route_paths/param_route_path');
var regex_route_path_1 = require('./route_paths/regex_route_path');
/**
 * A `RuleSet` is responsible for recognizing routes for a particular component.
 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
 * components.
 */
var RuleSet = (function () {
    function RuleSet() {
        this.rulesByName = new Map();
        // map from name to rule
        this.auxRulesByName = new Map();
        // map from starting path to rule
        this.auxRulesByPath = new Map();
        // TODO: optimize this into a trie
        this.rules = [];
        // the rule to use automatically when recognizing or generating from this rule set
        this.defaultRule = null;
    }
    /**
     * Configure additional rules in this rule set from a route definition
     * @returns {boolean} true if the config is terminal
     */
    RuleSet.prototype.config = function (config) {
        var handler;
        if (isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
            throw new BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
        }
        if (config instanceof route_config_impl_1.AuxRoute) {
            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
            var routePath_1 = this._getRoutePath(config);
            var auxRule = new rules_1.RouteRule(routePath_1, handler);
            this.auxRulesByPath.set(routePath_1.toString(), auxRule);
            if (isPresent(config.name)) {
                this.auxRulesByName.set(config.name, auxRule);
            }
            return auxRule.terminal;
        }
        var useAsDefault = false;
        if (config instanceof route_config_impl_1.Redirect) {
            var routePath_2 = this._getRoutePath(config);
            var redirector = new rules_1.RedirectRule(routePath_2, config.redirectTo);
            this._assertNoHashCollision(redirector.hash, config.path);
            this.rules.push(redirector);
            return true;
        }
        if (config instanceof route_config_impl_1.Route) {
            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        else if (config instanceof route_config_impl_1.AsyncRoute) {
            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        var routePath = this._getRoutePath(config);
        var newRule = new rules_1.RouteRule(routePath, handler);
        this._assertNoHashCollision(newRule.hash, config.path);
        if (useAsDefault) {
            if (isPresent(this.defaultRule)) {
                throw new BaseException("Only one route can be default");
            }
            this.defaultRule = newRule;
        }
        this.rules.push(newRule);
        if (isPresent(config.name)) {
            this.rulesByName.set(config.name, newRule);
        }
        return newRule.terminal;
    };
    /**
     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
     */
    RuleSet.prototype.recognize = function (urlParse) {
        var solutions = [];
        this.rules.forEach(function (routeRecognizer) {
            var pathMatch = routeRecognizer.recognize(urlParse);
            if (isPresent(pathMatch)) {
                solutions.push(pathMatch);
            }
        });
        // handle cases where we are routing just to an aux route
        if (solutions.length == 0 && isPresent(urlParse) && urlParse.auxiliary.length > 0) {
            return [PromiseWrapper.resolve(new rules_1.PathMatch(null, null, urlParse.auxiliary))];
        }
        return solutions;
    };
    RuleSet.prototype.recognizeAuxiliary = function (urlParse) {
        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
        if (isPresent(routeRecognizer)) {
            return [routeRecognizer.recognize(urlParse)];
        }
        return [PromiseWrapper.resolve(null)];
    };
    RuleSet.prototype.hasRoute = function (name) { return this.rulesByName.has(name); };
    RuleSet.prototype.componentLoaded = function (name) {
        return this.hasRoute(name) && isPresent(this.rulesByName.get(name).handler.componentType);
    };
    RuleSet.prototype.loadComponent = function (name) {
        return this.rulesByName.get(name).handler.resolveComponentType();
    };
    RuleSet.prototype.generate = function (name, params) {
        var rule = this.rulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    };
    RuleSet.prototype.generateAuxiliary = function (name, params) {
        var rule = this.auxRulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    };
    RuleSet.prototype._assertNoHashCollision = function (hash, path) {
        this.rules.forEach(function (rule) {
            if (hash == rule.hash) {
                throw new BaseException("Configuration '" + path + "' conflicts with existing route '" + rule.path + "'");
            }
        });
    };
    RuleSet.prototype._getRoutePath = function (config) {
        if (isPresent(config.regex)) {
            if (isFunction(config.serializer)) {
                return new regex_route_path_1.RegexRoutePath(config.regex, config.serializer);
            }
            else {
                throw new BaseException("Route provides a regex property, '" + config.regex + "', but no serializer property");
            }
        }
        if (isPresent(config.path)) {
            // Auxiliary routes do not have a slash at the start
            var path = (config instanceof route_config_impl_1.AuxRoute && config.path.startsWith('/')) ?
                config.path.substring(1) :
                config.path;
            return new param_route_path_1.ParamRoutePath(path);
        }
        throw new BaseException('Route must provide either a path or regex property');
    };
    return RuleSet;
})();
exports.RuleSet = RuleSet;
var MatchedUrl = (function () {
    function MatchedUrl(urlPath, urlParams, allParams, auxiliary, rest) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
        this.allParams = allParams;
        this.auxiliary = auxiliary;
        this.rest = rest;
    }
    return MatchedUrl;
})();
exports.MatchedUrl = MatchedUrl;
var GeneratedUrl = (function () {
    function GeneratedUrl(urlPath, urlParams) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
    }
    return GeneratedUrl;
})();
exports.GeneratedUrl = GeneratedUrl;
var utils_1 = require('../../utils');
var url_parser_1 = require('../../url_parser');
var route_path_1 = require('./route_path');
/**
 * Identified by a `...` URL segment. This indicates that the
 * Route will continue to be matched by child `Router`s.
 */
var ContinuationPathSegment = (function () {
    function ContinuationPathSegment() {
        this.name = '';
        this.specificity = '';
        this.hash = '...';
    }
    ContinuationPathSegment.prototype.generate = function (params) { return ''; };
    ContinuationPathSegment.prototype.match = function (path) { return true; };
    return ContinuationPathSegment;
})();
/**
 * Identified by a string not starting with a `:` or `*`.
 * Only matches the URL segments that equal the segment path
 */
var StaticPathSegment = (function () {
    function StaticPathSegment(path) {
        this.path = path;
        this.name = '';
        this.specificity = '2';
        this.hash = path;
    }
    StaticPathSegment.prototype.match = function (path) { return path == this.path; };
    StaticPathSegment.prototype.generate = function (params) { return this.path; };
    return StaticPathSegment;
})();
/**
 * Identified by a string starting with `:`. Indicates a segment
 * that can contain a value that will be extracted and provided to
 * a matching `Instruction`.
 */
var DynamicPathSegment = (function () {
    function DynamicPathSegment(name) {
        this.name = name;
        this.specificity = '1';
        this.hash = ':';
    }
    DynamicPathSegment.prototype.match = function (path) { return path.length > 0; };
    DynamicPathSegment.prototype.generate = function (params) {
        if (!StringMapWrapper.contains(params.map, this.name)) {
            throw new BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
        }
        return utils_1.normalizeString(params.get(this.name));
    };
    DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
    return DynamicPathSegment;
})();
/**
 * Identified by a string starting with `*` Indicates that all the following
 * segments match this route and that the value of these segments should
 * be provided to a matching `Instruction`.
 */
var StarPathSegment = (function () {
    function StarPathSegment(name) {
        this.name = name;
        this.specificity = '0';
        this.hash = '*';
    }
    StarPathSegment.prototype.match = function (path) { return true; };
    StarPathSegment.prototype.generate = function (params) { return utils_1.normalizeString(params.get(this.name)); };
    StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
    return StarPathSegment;
})();
/**
 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
 */
var ParamRoutePath = (function () {
    /**
     * Takes a string representing the matcher DSL
     */
    function ParamRoutePath(routePath) {
        this.routePath = routePath;
        this.terminal = true;
        this._assertValidPath(routePath);
        this._parsePathString(routePath);
        this.specificity = this._calculateSpecificity();
        this.hash = this._calculateHash();
        var lastSegment = this._segments[this._segments.length - 1];
        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
    }
    ParamRoutePath.prototype.matchUrl = function (url) {
        var nextUrlSegment = url;
        var currentUrlSegment;
        var positionalParams = {};
        var captured = [];
        for (var i = 0; i < this._segments.length; i += 1) {
            var pathSegment = this._segments[i];
            currentUrlSegment = nextUrlSegment;
            if (pathSegment instanceof ContinuationPathSegment) {
                break;
            }
            if (isPresent(currentUrlSegment)) {
                // the star segment consumes all of the remaining URL, including matrix params
                if (pathSegment instanceof StarPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
                    captured.push(currentUrlSegment.toString());
                    nextUrlSegment = null;
                    break;
                }
                captured.push(currentUrlSegment.path);
                if (pathSegment instanceof DynamicPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.path;
                }
                else if (!pathSegment.match(currentUrlSegment.path)) {
                    return null;
                }
                nextUrlSegment = currentUrlSegment.child;
            }
            else if (!pathSegment.match('')) {
                return null;
            }
        }
        if (this.terminal && isPresent(nextUrlSegment)) {
            return null;
        }
        var urlPath = captured.join('/');
        var auxiliary = [];
        var urlParams = [];
        var allParams = positionalParams;
        if (isPresent(currentUrlSegment)) {
            // If this is the root component, read query params. Otherwise, read matrix params.
            var paramsSegment = url instanceof url_parser_1.RootUrl ? url : currentUrlSegment;
            if (isPresent(paramsSegment.params)) {
                allParams = StringMapWrapper.merge(paramsSegment.params, positionalParams);
                urlParams = url_parser_1.convertUrlParamsToArray(paramsSegment.params);
            }
            else {
                allParams = positionalParams;
            }
            auxiliary = currentUrlSegment.auxiliary;
        }
        return new route_path_1.MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
    };
    ParamRoutePath.prototype.generateUrl = function (params) {
        var paramTokens = new utils_1.TouchMap(params);
        var path = [];
        for (var i = 0; i < this._segments.length; i++) {
            var segment = this._segments[i];
            if (!(segment instanceof ContinuationPathSegment)) {
                path.push(segment.generate(paramTokens));
            }
        }
        var urlPath = path.join('/');
        var nonPositionalParams = paramTokens.getUnused();
        var urlParams = nonPositionalParams;
        return new route_path_1.GeneratedUrl(urlPath, urlParams);
    };
    ParamRoutePath.prototype.toString = function () { return this.routePath; };
    ParamRoutePath.prototype._parsePathString = function (routePath) {
        // normalize route as not starting with a "/". Recognition will
        // also normalize.
        if (routePath.startsWith("/")) {
            routePath = routePath.substring(1);
        }
        var segmentStrings = routePath.split('/');
        this._segments = [];
        var limit = segmentStrings.length - 1;
        for (var i = 0; i <= limit; i++) {
            var segment = segmentStrings[i], match;
            if (isPresent(match = RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
                this._segments.push(new DynamicPathSegment(match[1]));
            }
            else if (isPresent(match = RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
                this._segments.push(new StarPathSegment(match[1]));
            }
            else if (segment == '...') {
                if (i < limit) {
                    throw new BaseException("Unexpected \"...\" before the end of the path for \"" + routePath + "\".");
                }
                this._segments.push(new ContinuationPathSegment());
            }
            else {
                this._segments.push(new StaticPathSegment(segment));
            }
        }
    };
    ParamRoutePath.prototype._calculateSpecificity = function () {
        // The "specificity" of a path is used to determine which route is used when multiple routes
        // match
        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
        // (like
        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
        // specific
        // than proceeding ones.
        //
        // The code below uses place values to combine the different types of segments into a single
        // string that we can sort later. Each static segment is marked as a specificity of "2," each
        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
        var i, length = this._segments.length, specificity;
        if (length == 0) {
            // a single slash (or "empty segment" is as specific as a static segment
            specificity += '2';
        }
        else {
            specificity = '';
            for (i = 0; i < length; i++) {
                specificity += this._segments[i].specificity;
            }
        }
        return specificity;
    };
    ParamRoutePath.prototype._calculateHash = function () {
        // this function is used to determine whether a route config path like `/foo/:id` collides with
        // `/foo/:name`
        var i, length = this._segments.length;
        var hashParts = [];
        for (i = 0; i < length; i++) {
            hashParts.push(this._segments[i].hash);
        }
        return hashParts.join('/');
    };
    ParamRoutePath.prototype._assertValidPath = function (path) {
        if (StringWrapper.contains(path, '#')) {
            throw new BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
        }
        var illegalCharacter = RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
        if (isPresent(illegalCharacter)) {
            throw new BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
        }
    };
    ParamRoutePath.RESERVED_CHARS = RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
    return ParamRoutePath;
})();
exports.ParamRoutePath = ParamRoutePath;
var route_path_1 = require('./route_path');
var RegexRoutePath = (function () {
    function RegexRoutePath(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = RegExpWrapper.create(this._reString);
    }
    RegexRoutePath.prototype.matchUrl = function (url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = RegExpWrapper.matcher(this._regex, urlPath);
        var match = RegExpMatcherWrapper.next(matcher);
        if (isBlank(match)) {
            return null;
        }
        for (var i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
    };
    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
    RegexRoutePath.prototype.toString = function () { return this._reString; };
    return RegexRoutePath;
})();
exports.RegexRoutePath = RegexRoutePath;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * `RouteParams` is an immutable map of parameters for the given route
 * based on the url matcher and optional parameters for that route.
 *
 * You can inject `RouteParams` into the constructor of a component to use it.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
 * 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp'},
 * ])
 * class AppCmp {}
 *
 * @Component({ template: 'user: {{id}}' })
 * class UserCmp {
 *   id: string;
 *   constructor(params: RouteParams) {
 *     this.id = params.get('id');
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var RouteParams = (function () {
    function RouteParams(params) {
        this.params = params;
    }
    RouteParams.prototype.get = function (param) { return normalizeBlank(StringMapWrapper.get(this.params, param)); };
    return RouteParams;
})();
exports.RouteParams = RouteParams;
/**
 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
 *
 * You can inject `RouteData` into the constructor of a component to use it.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from
 * 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp', data: {isAdmin: true}},
 * ])
 * class AppCmp {}
 *
 * @Component({...})
 * @View({ template: 'user: {{isAdmin}}' })
 * class UserCmp {
 *   string: isAdmin;
 *   constructor(data: RouteData) {
 *     this.isAdmin = data.get('isAdmin');
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var RouteData = (function () {
    function RouteData(data) {
        if (data === void 0) { data = CONST_EXPR({}); }
        this.data = data;
    }
    RouteData.prototype.get = function (key) { return normalizeBlank(StringMapWrapper.get(this.data, key)); };
    return RouteData;
})();
exports.RouteData = RouteData;
exports.BLANK_ROUTE_DATA = new RouteData();
/**
 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
 * to transition each component in the app to a given route, including all auxiliary routes.
 *
 * `Instruction`s can be created using {@link Router#generate}, and can be used to
 * perform route changes with {@link Router#navigateByInstruction}.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *   constructor(router: Router) {
 *     var instruction = router.generate(['/MyRoute']);
 *     router.navigateByInstruction(instruction);
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var Instruction = (function () {
    function Instruction(component, child, auxInstruction) {
        this.component = component;
        this.child = child;
        this.auxInstruction = auxInstruction;
    }
    Object.defineProperty(Instruction.prototype, "urlPath", {
        get: function () { return isPresent(this.component) ? this.component.urlPath : ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "urlParams", {
        get: function () { return isPresent(this.component) ? this.component.urlParams : []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "specificity", {
        get: function () {
            var total = '';
            if (isPresent(this.component)) {
                total += this.component.specificity;
            }
            if (isPresent(this.child)) {
                total += this.child.specificity;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * converts the instruction into a URL string
     */
    Instruction.prototype.toRootUrl = function () { return this.toUrlPath() + this.toUrlQuery(); };
    /** @internal */
    Instruction.prototype._toNonRootUrl = function () {
        return this._stringifyPathMatrixAuxPrefixed() +
            (isPresent(this.child) ? this.child._toNonRootUrl() : '');
    };
    Instruction.prototype.toUrlQuery = function () { return this.urlParams.length > 0 ? ('?' + this.urlParams.join('&')) : ''; };
    /**
     * Returns a new instruction that shares the state of the existing instruction, but with
     * the given child {@link Instruction} replacing the existing child.
     */
    Instruction.prototype.replaceChild = function (child) {
        return new ResolvedInstruction(this.component, child, this.auxInstruction);
    };
    /**
     * If the final URL for the instruction is ``
     */
    Instruction.prototype.toUrlPath = function () {
        return this.urlPath + this._stringifyAux() +
            (isPresent(this.child) ? this.child._toNonRootUrl() : '');
    };
    // default instructions override these
    Instruction.prototype.toLinkUrl = function () {
        return this.urlPath + this._stringifyAux() +
            (isPresent(this.child) ? this.child._toLinkUrl() : '');
    };
    // this is the non-root version (called recursively)
    /** @internal */
    Instruction.prototype._toLinkUrl = function () {
        return this._stringifyPathMatrixAuxPrefixed() +
            (isPresent(this.child) ? this.child._toLinkUrl() : '');
    };
    /** @internal */
    Instruction.prototype._stringifyPathMatrixAuxPrefixed = function () {
        var primary = this._stringifyPathMatrixAux();
        if (primary.length > 0) {
            primary = '/' + primary;
        }
        return primary;
    };
    /** @internal */
    Instruction.prototype._stringifyMatrixParams = function () {
        return this.urlParams.length > 0 ? (';' + this.urlParams.join(';')) : '';
    };
    /** @internal */
    Instruction.prototype._stringifyPathMatrixAux = function () {
        if (isBlank(this.component)) {
            return '';
        }
        return this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
    };
    /** @internal */
    Instruction.prototype._stringifyAux = function () {
        var routes = [];
        StringMapWrapper.forEach(this.auxInstruction, function (auxInstruction, _) {
            routes.push(auxInstruction._stringifyPathMatrixAux());
        });
        if (routes.length > 0) {
            return '(' + routes.join('//') + ')';
        }
        return '';
    };
    return Instruction;
})();
exports.Instruction = Instruction;
/**
 * a resolved instruction has an outlet instruction for itself, but maybe not for...
 */
var ResolvedInstruction = (function (_super) {
    __extends(ResolvedInstruction, _super);
    function ResolvedInstruction(component, child, auxInstruction) {
        _super.call(this, component, child, auxInstruction);
    }
    ResolvedInstruction.prototype.resolveComponent = function () {
        return PromiseWrapper.resolve(this.component);
    };
    return ResolvedInstruction;
})(Instruction);
exports.ResolvedInstruction = ResolvedInstruction;
/**
 * Represents a resolved default route
 */
var DefaultInstruction = (function (_super) {
    __extends(DefaultInstruction, _super);
    function DefaultInstruction(component, child) {
        _super.call(this, component, child, {});
    }
    DefaultInstruction.prototype.toLinkUrl = function () { return ''; };
    /** @internal */
    DefaultInstruction.prototype._toLinkUrl = function () { return ''; };
    return DefaultInstruction;
})(ResolvedInstruction);
exports.DefaultInstruction = DefaultInstruction;
/**
 * Represents a component that may need to do some redirection or lazy loading at a later time.
 */
var UnresolvedInstruction = (function (_super) {
    __extends(UnresolvedInstruction, _super);
    function UnresolvedInstruction(_resolver, _urlPath, _urlParams) {
        if (_urlPath === void 0) { _urlPath = ''; }
        if (_urlParams === void 0) { _urlParams = CONST_EXPR([]); }
        _super.call(this, null, null, {});
        this._resolver = _resolver;
        this._urlPath = _urlPath;
        this._urlParams = _urlParams;
    }
    Object.defineProperty(UnresolvedInstruction.prototype, "urlPath", {
        get: function () {
            if (isPresent(this.component)) {
                return this.component.urlPath;
            }
            if (isPresent(this._urlPath)) {
                return this._urlPath;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnresolvedInstruction.prototype, "urlParams", {
        get: function () {
            if (isPresent(this.component)) {
                return this.component.urlParams;
            }
            if (isPresent(this._urlParams)) {
                return this._urlParams;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    UnresolvedInstruction.prototype.resolveComponent = function () {
        var _this = this;
        if (isPresent(this.component)) {
            return PromiseWrapper.resolve(this.component);
        }
        return this._resolver().then(function (resolution) {
            _this.child = resolution.child;
            return _this.component = resolution.component;
        });
    };
    return UnresolvedInstruction;
})(Instruction);
exports.UnresolvedInstruction = UnresolvedInstruction;
var RedirectInstruction = (function (_super) {
    __extends(RedirectInstruction, _super);
    function RedirectInstruction(component, child, auxInstruction, _specificity) {
        _super.call(this, component, child, auxInstruction);
        this._specificity = _specificity;
    }
    Object.defineProperty(RedirectInstruction.prototype, "specificity", {
        get: function () { return this._specificity; },
        enumerable: true,
        configurable: true
    });
    return RedirectInstruction;
})(ResolvedInstruction);
exports.RedirectInstruction = RedirectInstruction;
/**
 * A `ComponentInstruction` represents the route state for a single component.
 *
 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
 * to route lifecycle hooks, like {@link CanActivate}.
 *
 * `ComponentInstruction`s are [hash consed](https://en.wikipedia.org/wiki/Hash_consing). You should
 * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
 * construct `ComponentInstruction`s.
 *
 * You should not modify this object. It should be treated as immutable.
 */
var ComponentInstruction = (function () {
    /**
     * @internal
     */
    function ComponentInstruction(urlPath, urlParams, data, componentType, terminal, specificity, params) {
        if (params === void 0) { params = null; }
        this.urlPath = urlPath;
        this.urlParams = urlParams;
        this.componentType = componentType;
        this.terminal = terminal;
        this.specificity = specificity;
        this.params = params;
        this.reuse = false;
        this.routeData = isPresent(data) ? data : exports.BLANK_ROUTE_DATA;
    }
    return ComponentInstruction;
})();
exports.ComponentInstruction = ComponentInstruction;
var core_1 = require('angular2/core');
var route_config_impl_1 = require('./route_config/route_config_impl');
var rules_1 = require('./rules/rules');
var rule_set_1 = require('./rules/rule_set');
var instruction_1 = require('./instruction');
var route_config_normalizer_1 = require('./route_config/route_config_normalizer');
var url_parser_1 = require('./url_parser');
var _resolveToNull = PromiseWrapper.resolve(null);
// A LinkItemArray is an array, which describes a set of routes
// The items in the array are found in groups:
// - the first item is the name of the route
// - the next items are:
//   - an object containing parameters
//   - or an array describing an aux route
// export type LinkRouteItem = string | Object;
// export type LinkItem = LinkRouteItem | Array<LinkRouteItem>;
// export type LinkItemArray = Array<LinkItem>;
/**
 * Token used to bind the component with the top-level {@link RouteConfig}s for the
 * application.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {
 *   ROUTER_DIRECTIVES,
 *   ROUTER_PROVIDERS,
 *   RouteConfig
 * } from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *   // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_PRIMARY_COMPONENT = CONST_EXPR(new core_1.OpaqueToken('RouterPrimaryComponent'));
/**
 * The RouteRegistry holds route configurations for each component in an Angular app.
 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
 * parameters.
 */
var RouteRegistry = (function () {
    function RouteRegistry(_rootComponent) {
        this._rootComponent = _rootComponent;
        this._rules = new Map();
    }
    /**
     * Given a component and a configuration object, add the route to this registry
     */
    RouteRegistry.prototype.config = function (parentComponent, config) {
        config = route_config_normalizer_1.normalizeRouteConfig(config, this);
        // this is here because Dart type guard reasons
        if (config instanceof route_config_impl_1.Route) {
            route_config_normalizer_1.assertComponentExists(config.component, config.path);
        }
        else if (config instanceof route_config_impl_1.AuxRoute) {
            route_config_normalizer_1.assertComponentExists(config.component, config.path);
        }
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            rules = new rule_set_1.RuleSet();
            this._rules.set(parentComponent, rules);
        }
        var terminal = rules.config(config);
        if (config instanceof route_config_impl_1.Route) {
            if (terminal) {
                assertTerminalComponent(config.component, config.path);
            }
            else {
                this.configFromComponent(config.component);
            }
        }
    };
    /**
     * Reads the annotations of a component and configures the registry based on them
     */
    RouteRegistry.prototype.configFromComponent = function (component) {
        var _this = this;
        if (!isType(component)) {
            return;
        }
        // Don't read the annotations from a type more than once –
        // this prevents an infinite loop if a component routes recursively.
        if (this._rules.has(component)) {
            return;
        }
        var annotations = reflector.annotations(component);
        if (isPresent(annotations)) {
            for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof route_config_impl_1.RouteConfig) {
                    var routeCfgs = annotation.configs;
                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
                }
            }
        }
    };
    /**
     * Given a URL and a parent component, return the most specific instruction for navigating
     * the application into the state specified by the url
     */
    RouteRegistry.prototype.recognize = function (url, ancestorInstructions) {
        var parsedUrl = url_parser_1.parser.parse(url);
        return this._recognize(parsedUrl, []);
    };
    /**
     * Recognizes all parent-child routes, but creates unresolved auxiliary routes
     */
    RouteRegistry.prototype._recognize = function (parsedUrl, ancestorInstructions, _aux) {
        var _this = this;
        if (_aux === void 0) { _aux = false; }
        var parentInstruction = ListWrapper.last(ancestorInstructions);
        var parentComponent = isPresent(parentInstruction) ? parentInstruction.component.componentType :
            this._rootComponent;
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            return _resolveToNull;
        }
        // Matches some beginning part of the given URL
        var possibleMatches = _aux ? rules.recognizeAuxiliary(parsedUrl) : rules.recognize(parsedUrl);
        var matchPromises = possibleMatches.map(function (candidate) { return candidate.then(function (candidate) {
            if (candidate instanceof rules_1.PathMatch) {
                var auxParentInstructions = ancestorInstructions.length > 0 ? [ListWrapper.last(ancestorInstructions)] : [];
                var auxInstructions = _this._auxRoutesToUnresolved(candidate.remainingAux, auxParentInstructions);
                var instruction = new instruction_1.ResolvedInstruction(candidate.instruction, null, auxInstructions);
                if (isBlank(candidate.instruction) || candidate.instruction.terminal) {
                    return instruction;
                }
                var newAncestorInstructions = ancestorInstructions.concat([instruction]);
                return _this._recognize(candidate.remaining, newAncestorInstructions)
                    .then(function (childInstruction) {
                    if (isBlank(childInstruction)) {
                        return null;
                    }
                    // redirect instructions are already absolute
                    if (childInstruction instanceof instruction_1.RedirectInstruction) {
                        return childInstruction;
                    }
                    instruction.child = childInstruction;
                    return instruction;
                });
            }
            if (candidate instanceof rules_1.RedirectMatch) {
                var instruction = _this.generate(candidate.redirectTo, ancestorInstructions.concat([null]));
                return new instruction_1.RedirectInstruction(instruction.component, instruction.child, instruction.auxInstruction, candidate.specificity);
            }
        }); });
        if ((isBlank(parsedUrl) || parsedUrl.path == '') && possibleMatches.length == 0) {
            return PromiseWrapper.resolve(this.generateDefault(parentComponent));
        }
        return PromiseWrapper.all(matchPromises).then(mostSpecific);
    };
    RouteRegistry.prototype._auxRoutesToUnresolved = function (auxRoutes, parentInstructions) {
        var _this = this;
        var unresolvedAuxInstructions = {};
        auxRoutes.forEach(function (auxUrl) {
            unresolvedAuxInstructions[auxUrl.path] = new instruction_1.UnresolvedInstruction(function () { return _this._recognize(auxUrl, parentInstructions, true); });
        });
        return unresolvedAuxInstructions;
    };
    /**
     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
     * generates a url with a leading slash relative to the provided `parentComponent`.
     *
     * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
     * route boundary.
     */
    RouteRegistry.prototype.generate = function (linkParams, ancestorInstructions, _aux) {
        if (_aux === void 0) { _aux = false; }
        var params = splitAndFlattenLinkParams(linkParams);
        var prevInstruction;
        // The first segment should be either '.' (generate from parent) or '' (generate from root).
        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
        if (ListWrapper.first(params) == '') {
            params.shift();
            prevInstruction = ListWrapper.first(ancestorInstructions);
            ancestorInstructions = [];
        }
        else {
            prevInstruction = ancestorInstructions.length > 0 ? ancestorInstructions.pop() : null;
            if (ListWrapper.first(params) == '.') {
                params.shift();
            }
            else if (ListWrapper.first(params) == '..') {
                while (ListWrapper.first(params) == '..') {
                    if (ancestorInstructions.length <= 0) {
                        throw new BaseException("Link \"" + ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
                    }
                    prevInstruction = ancestorInstructions.pop();
                    params = ListWrapper.slice(params, 1);
                }
            }
            else {
                // we must only peak at the link param, and not consume it
                var routeName = ListWrapper.first(params);
                var parentComponentType = this._rootComponent;
                var grandparentComponentType = null;
                if (ancestorInstructions.length > 1) {
                    var parentComponentInstruction = ancestorInstructions[ancestorInstructions.length - 1];
                    var grandComponentInstruction = ancestorInstructions[ancestorInstructions.length - 2];
                    parentComponentType = parentComponentInstruction.component.componentType;
                    grandparentComponentType = grandComponentInstruction.component.componentType;
                }
                else if (ancestorInstructions.length == 1) {
                    parentComponentType = ancestorInstructions[0].component.componentType;
                    grandparentComponentType = this._rootComponent;
                }
                // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
                // If both exist, we throw. Otherwise, we prefer whichever exists.
                var childRouteExists = this.hasRoute(routeName, parentComponentType);
                var parentRouteExists = isPresent(grandparentComponentType) &&
                    this.hasRoute(routeName, grandparentComponentType);
                if (parentRouteExists && childRouteExists) {
                    var msg = "Link \"" + ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
                    throw new BaseException(msg);
                }
                if (parentRouteExists) {
                    prevInstruction = ancestorInstructions.pop();
                }
            }
        }
        if (params[params.length - 1] == '') {
            params.pop();
        }
        if (params.length > 0 && params[0] == '') {
            params.shift();
        }
        if (params.length < 1) {
            var msg = "Link \"" + ListWrapper.toJSON(linkParams) + "\" must include a route name.";
            throw new BaseException(msg);
        }
        var generatedInstruction = this._generate(params, ancestorInstructions, prevInstruction, _aux, linkParams);
        // we don't clone the first (root) element
        for (var i = ancestorInstructions.length - 1; i >= 0; i--) {
            var ancestorInstruction = ancestorInstructions[i];
            if (isBlank(ancestorInstruction)) {
                break;
            }
            generatedInstruction = ancestorInstruction.replaceChild(generatedInstruction);
        }
        return generatedInstruction;
    };
    /*
     * Internal helper that does not make any assertions about the beginning of the link DSL.
     * `ancestorInstructions` are parents that will be cloned.
     * `prevInstruction` is the existing instruction that would be replaced, but which might have
     * aux routes that need to be cloned.
     */
    RouteRegistry.prototype._generate = function (linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink) {
        var _this = this;
        if (_aux === void 0) { _aux = false; }
        var parentComponentType = this._rootComponent;
        var componentInstruction = null;
        var auxInstructions = {};
        var parentInstruction = ListWrapper.last(ancestorInstructions);
        if (isPresent(parentInstruction) && isPresent(parentInstruction.component)) {
            parentComponentType = parentInstruction.component.componentType;
        }
        if (linkParams.length == 0) {
            var defaultInstruction = this.generateDefault(parentComponentType);
            if (isBlank(defaultInstruction)) {
                throw new BaseException("Link \"" + ListWrapper.toJSON(_originalLink) + "\" does not resolve to a terminal instruction.");
            }
            return defaultInstruction;
        }
        // for non-aux routes, we want to reuse the predecessor's existing primary and aux routes
        // and only override routes for which the given link DSL provides
        if (isPresent(prevInstruction) && !_aux) {
            auxInstructions = StringMapWrapper.merge(prevInstruction.auxInstruction, auxInstructions);
            componentInstruction = prevInstruction.component;
        }
        var rules = this._rules.get(parentComponentType);
        if (isBlank(rules)) {
            throw new BaseException("Component \"" + getTypeNameForDebugging(parentComponentType) + "\" has no route config.");
        }
        var linkParamIndex = 0;
        var routeParams = {};
        // first, recognize the primary route if one is provided
        if (linkParamIndex < linkParams.length && isString(linkParams[linkParamIndex])) {
            var routeName = linkParams[linkParamIndex];
            if (routeName == '' || routeName == '.' || routeName == '..') {
                throw new BaseException("\"" + routeName + "/\" is only allowed at the beginning of a link DSL.");
            }
            linkParamIndex += 1;
            if (linkParamIndex < linkParams.length) {
                var linkParam = linkParams[linkParamIndex];
                if (isStringMap(linkParam) && !isArray(linkParam)) {
                    routeParams = linkParam;
                    linkParamIndex += 1;
                }
            }
            var routeRecognizer = (_aux ? rules.auxRulesByName : rules.rulesByName).get(routeName);
            if (isBlank(routeRecognizer)) {
                throw new BaseException("Component \"" + getTypeNameForDebugging(parentComponentType) + "\" has no route named \"" + routeName + "\".");
            }
            // Create an "unresolved instruction" for async routes
            // we'll figure out the rest of the route when we resolve the instruction and
            // perform a navigation
            if (isBlank(routeRecognizer.handler.componentType)) {
                var generatedUrl = routeRecognizer.generateComponentPathValues(routeParams);
                return new instruction_1.UnresolvedInstruction(function () {
                    return routeRecognizer.handler.resolveComponentType().then(function (_) {
                        return _this._generate(linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink);
                    });
                }, generatedUrl.urlPath, url_parser_1.convertUrlParamsToArray(generatedUrl.urlParams));
            }
            componentInstruction = _aux ? rules.generateAuxiliary(routeName, routeParams) :
                rules.generate(routeName, routeParams);
        }
        // Next, recognize auxiliary instructions.
        // If we have an ancestor instruction, we preserve whatever aux routes are active from it.
        while (linkParamIndex < linkParams.length && isArray(linkParams[linkParamIndex])) {
            var auxParentInstruction = [parentInstruction];
            var auxInstruction = this._generate(linkParams[linkParamIndex], auxParentInstruction, null, true, _originalLink);
            // TODO: this will not work for aux routes with parameters or multiple segments
            auxInstructions[auxInstruction.component.urlPath] = auxInstruction;
            linkParamIndex += 1;
        }
        var instruction = new instruction_1.ResolvedInstruction(componentInstruction, null, auxInstructions);
        // If the component is sync, we can generate resolved child route instructions
        // If not, we'll resolve the instructions at navigation time
        if (isPresent(componentInstruction) && isPresent(componentInstruction.componentType)) {
            var childInstruction = null;
            if (componentInstruction.terminal) {
                if (linkParamIndex >= linkParams.length) {
                }
            }
            else {
                var childAncestorComponents = ancestorInstructions.concat([instruction]);
                var remainingLinkParams = linkParams.slice(linkParamIndex);
                childInstruction = this._generate(remainingLinkParams, childAncestorComponents, null, false, _originalLink);
            }
            instruction.child = childInstruction;
        }
        return instruction;
    };
    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            return false;
        }
        return rules.hasRoute(name);
    };
    RouteRegistry.prototype.generateDefault = function (componentCursor) {
        var _this = this;
        if (isBlank(componentCursor)) {
            return null;
        }
        var rules = this._rules.get(componentCursor);
        if (isBlank(rules) || isBlank(rules.defaultRule)) {
            return null;
        }
        var defaultChild = null;
        if (isPresent(rules.defaultRule.handler.componentType)) {
            var componentInstruction = rules.defaultRule.generate({});
            if (!rules.defaultRule.terminal) {
                defaultChild = this.generateDefault(rules.defaultRule.handler.componentType);
            }
            return new instruction_1.DefaultInstruction(componentInstruction, defaultChild);
        }
        return new instruction_1.UnresolvedInstruction(function () {
            return rules.defaultRule.handler.resolveComponentType().then(function (_) { return _this.generateDefault(componentCursor); });
        });
    };
    return RouteRegistry;
})();
exports.RouteRegistry = RouteRegistry;
/*
 * Given: ['/a/b', {c: 2}]
 * Returns: ['', 'a', 'b', {c: 2}]
 */
function splitAndFlattenLinkParams(linkParams) {
    var accumulation = [];
    linkParams.forEach(function (item) {
        if (isString(item)) {
            var strItem = item;
            accumulation = accumulation.concat(strItem.split('/'));
        }
        else {
            accumulation.push(item);
        }
    });
    return accumulation;
}
/*
 * Given a list of instructions, returns the most specific instruction
 */
function mostSpecific(instructions) {
    instructions = instructions.filter(function (instruction) { return isPresent(instruction); });
    if (instructions.length == 0) {
        return null;
    }
    if (instructions.length == 1) {
        return instructions[0];
    }
    var first = instructions[0];
    var rest = instructions.slice(1);
    return rest.reduce(function (instruction, contender) {
        if (compareSpecificityStrings(contender.specificity, instruction.specificity) == -1) {
            return contender;
        }
        return instruction;
    }, first);
}
/*
 * Expects strings to be in the form of "[0-2]+"
 * Returns -1 if string A should be sorted above string B, 1 if it should be sorted after,
 * or 0 if they are the same.
 */
function compareSpecificityStrings(a, b) {
    var l = Math.min(a.length, b.length);
    for (var i = 0; i < l; i += 1) {
        var ai = StringWrapper.charCodeAt(a, i);
        var bi = StringWrapper.charCodeAt(b, i);
        var difference = bi - ai;
        if (difference != 0) {
            return difference;
        }
    }
    return a.length - b.length;
}
function assertTerminalComponent(component, path) {
    if (!isType(component)) {
        return;
    }
    var annotations = reflector.annotations(component);
    if (isPresent(annotations)) {
        for (var i = 0; i < annotations.length; i++) {
            var annotation = annotations[i];
            if (annotation instanceof route_config_impl_1.RouteConfig) {
                throw new BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
            }
        }
    }
}
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_lifecycle_reflector_1 = require('./lifecycle/route_lifecycle_reflector');
var _resolveToTrue = PromiseWrapper.resolve(true);
var _resolveToFalse = PromiseWrapper.resolve(false);
/**
 * The `Router` is responsible for mapping URLs to components.
 *
 * You can see the state of the router by inspecting the read-only field `router.navigating`.
 * This may be useful for showing a spinner, for instance.
 *
 * ## Concepts
 *
 * Routers and component instances have a 1:1 correspondence.
 *
 * The router holds reference to a number of {@link RouterOutlet}.
 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
 *
 * When the router navigates from a URL, it must first recognize it and serialize it into an
 * `Instruction`.
 * The router uses the `RouteRegistry` to get an `Instruction`.
 */
var Router = (function () {
    function Router(registry, parent, hostComponent) {
        this.registry = registry;
        this.parent = parent;
        this.hostComponent = hostComponent;
        this.navigating = false;
        this._currentInstruction = null;
        this._currentNavigation = _resolveToTrue;
        this._outlet = null;
        this._auxRouters = new Map();
        this._subject = new EventEmitter();
    }
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    Router.prototype.childRouter = function (hostComponent) {
        return this._childRouter = new ChildRouter(this, hostComponent);
    };
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
    /**
     * Register an outlet to be notified of primary route changes.
     *
     * You probably don't need to use this unless you're writing a reusable component.
     */
    Router.prototype.registerPrimaryOutlet = function (outlet) {
        if (isPresent(outlet.name)) {
            throw new BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
        }
        if (isPresent(this._outlet)) {
            throw new BaseException("Primary outlet is already registered.");
        }
        this._outlet = outlet;
        if (isPresent(this._currentInstruction)) {
            return this.commit(this._currentInstruction, false);
        }
        return _resolveToTrue;
    };
    /**
     * Unregister an outlet (because it was destroyed, etc).
     *
     * You probably don't need to use this unless you're writing a custom outlet implementation.
     */
    Router.prototype.unregisterPrimaryOutlet = function (outlet) {
        if (isPresent(outlet.name)) {
            throw new BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
        }
        this._outlet = null;
    };
    /**
     * Register an outlet to notified of auxiliary route changes.
     *
     * You probably don't need to use this unless you're writing a reusable component.
     */
    Router.prototype.registerAuxOutlet = function (outlet) {
        var outletName = outlet.name;
        if (isBlank(outletName)) {
            throw new BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
        }
        var router = this.auxRouter(this.hostComponent);
        this._auxRouters.set(outletName, router);
        router._outlet = outlet;
        var auxInstruction;
        if (isPresent(this._currentInstruction) &&
            isPresent(auxInstruction = this._currentInstruction.auxInstruction[outletName])) {
            return router.commit(auxInstruction);
        }
        return _resolveToTrue;
    };
    /**
     * Given an instruction, returns `true` if the instruction is currently active,
     * otherwise `false`.
     */
    Router.prototype.isRouteActive = function (instruction) {
        var router = this;
        while (isPresent(router.parent) && isPresent(instruction.child)) {
            router = router.parent;
            instruction = instruction.child;
        }
        return isPresent(this._currentInstruction) &&
            this._currentInstruction.component == instruction.component;
    };
    /**
     * Dynamically update the routing configuration and trigger a navigation.
     *
     * ### Usage
     *
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     */
    Router.prototype.config = function (definitions) {
        var _this = this;
        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
        return this.renavigate();
    };
    /**
     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
     * over `navigateByUrl`.
     *
     * ### Usage
     *
     * This method takes an array representing the Route Link DSL:
     * ```
     * ['./MyCmp', {param: 3}]
     * ```
     * See the {@link RouterLink} directive for more.
     */
    Router.prototype.navigate = function (linkParams) {
        var instruction = this.generate(linkParams);
        return this.navigateByInstruction(instruction, false);
    };
    /**
     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
     *
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        return this._currentNavigation = this._currentNavigation.then(function (_) {
            _this.lastNavigationAttempt = url;
            _this._startNavigating();
            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
                if (isBlank(instruction)) {
                    return false;
                }
                return _this._navigate(instruction, _skipLocationChange);
            }));
        });
    };
    /**
     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
     * complete.
     */
    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        if (isBlank(instruction)) {
            return _resolveToFalse;
        }
        return this._currentNavigation = this._currentNavigation.then(function (_) {
            _this._startNavigating();
            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
        });
    };
    /** @internal */
    Router.prototype._settleInstruction = function (instruction) {
        var _this = this;
        return instruction.resolveComponent().then(function (_) {
            var unsettledInstructions = [];
            if (isPresent(instruction.component)) {
                instruction.component.reuse = false;
            }
            if (isPresent(instruction.child)) {
                unsettledInstructions.push(_this._settleInstruction(instruction.child));
            }
            StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
                unsettledInstructions.push(_this._settleInstruction(instruction));
            });
            return PromiseWrapper.all(unsettledInstructions);
        });
    };
    /** @internal */
    Router.prototype._navigate = function (instruction, _skipLocationChange) {
        var _this = this;
        return this._settleInstruction(instruction)
            .then(function (_) { return _this._routerCanReuse(instruction); })
            .then(function (_) { return _this._canActivate(instruction); })
            .then(function (result) {
            if (!result) {
                return false;
            }
            return _this._routerCanDeactivate(instruction)
                .then(function (result) {
                if (result) {
                    return _this.commit(instruction, _skipLocationChange)
                        .then(function (_) {
                        _this._emitNavigationFinish(instruction.toRootUrl());
                        return true;
                    });
                }
            });
        });
    };
    Router.prototype._emitNavigationFinish = function (url) { ObservableWrapper.callEmit(this._subject, url); };
    Router.prototype._afterPromiseFinishNavigating = function (promise) {
        var _this = this;
        return PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
            _this._finishNavigating();
            throw err;
        });
    };
    /*
     * Recursively set reuse flags
     */
    /** @internal */
    Router.prototype._routerCanReuse = function (instruction) {
        var _this = this;
        if (isBlank(this._outlet)) {
            return _resolveToFalse;
        }
        if (isBlank(instruction.component)) {
            return _resolveToTrue;
        }
        return this._outlet.routerCanReuse(instruction.component)
            .then(function (result) {
            instruction.component.reuse = result;
            if (result && isPresent(_this._childRouter) && isPresent(instruction.child)) {
                return _this._childRouter._routerCanReuse(instruction.child);
            }
        });
    };
    Router.prototype._canActivate = function (nextInstruction) {
        return canActivateOne(nextInstruction, this._currentInstruction);
    };
    Router.prototype._routerCanDeactivate = function (instruction) {
        var _this = this;
        if (isBlank(this._outlet)) {
            return _resolveToTrue;
        }
        var next;
        var childInstruction = null;
        var reuse = false;
        var componentInstruction = null;
        if (isPresent(instruction)) {
            childInstruction = instruction.child;
            componentInstruction = instruction.component;
            reuse = isBlank(instruction.component) || instruction.component.reuse;
        }
        if (reuse) {
            next = _resolveToTrue;
        }
        else {
            next = this._outlet.routerCanDeactivate(componentInstruction);
        }
        // TODO: aux route lifecycle hooks
        return next.then(function (result) {
            if (result == false) {
                return false;
            }
            if (isPresent(_this._childRouter)) {
                return _this._childRouter._routerCanDeactivate(childInstruction);
            }
            return true;
        });
    };
    /**
     * Updates this router and all descendant routers according to the given instruction
     */
    Router.prototype.commit = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        this._currentInstruction = instruction;
        var next = _resolveToTrue;
        if (isPresent(this._outlet) && isPresent(instruction.component)) {
            var componentInstruction = instruction.component;
            if (componentInstruction.reuse) {
                next = this._outlet.reuse(componentInstruction);
            }
            else {
                next =
                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
            }
            if (isPresent(instruction.child)) {
                next = next.then(function (_) {
                    if (isPresent(_this._childRouter)) {
                        return _this._childRouter.commit(instruction.child);
                    }
                });
            }
        }
        var promises = [];
        this._auxRouters.forEach(function (router, name) {
            if (isPresent(instruction.auxInstruction[name])) {
                promises.push(router.commit(instruction.auxInstruction[name]));
            }
        });
        return next.then(function (_) { return PromiseWrapper.all(promises); });
    };
    /** @internal */
    Router.prototype._startNavigating = function () { this.navigating = true; };
    /** @internal */
    Router.prototype._finishNavigating = function () { this.navigating = false; };
    /**
     * Subscribe to URL updates from the router
     */
    Router.prototype.subscribe = function (onNext) {
        return ObservableWrapper.subscribe(this._subject, onNext);
    };
    /**
     * Removes the contents of this router's outlet and all descendant outlets
     */
    Router.prototype.deactivate = function (instruction) {
        var _this = this;
        var childInstruction = null;
        var componentInstruction = null;
        if (isPresent(instruction)) {
            childInstruction = instruction.child;
            componentInstruction = instruction.component;
        }
        var next = _resolveToTrue;
        if (isPresent(this._childRouter)) {
            next = this._childRouter.deactivate(childInstruction);
        }
        if (isPresent(this._outlet)) {
            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
        }
        // TODO: handle aux routes
        return next;
    };
    /**
     * Given a URL, returns an instruction representing the component graph
     */
    Router.prototype.recognize = function (url) {
        var ancestorComponents = this._getAncestorInstructions();
        return this.registry.recognize(url, ancestorComponents);
    };
    Router.prototype._getAncestorInstructions = function () {
        var ancestorInstructions = [this._currentInstruction];
        var ancestorRouter = this;
        while (isPresent(ancestorRouter = ancestorRouter.parent)) {
            ancestorInstructions.unshift(ancestorRouter._currentInstruction);
        }
        return ancestorInstructions;
    };
    /**
     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
     * router has yet to successfully navigate.
     */
    Router.prototype.renavigate = function () {
        if (isBlank(this.lastNavigationAttempt)) {
            return this._currentNavigation;
        }
        return this.navigateByUrl(this.lastNavigationAttempt);
    };
    /**
     * Generate an `Instruction` based on the provided Route Link DSL.
     */
    Router.prototype.generate = function (linkParams) {
        var ancestorInstructions = this._getAncestorInstructions();
        return this.registry.generate(linkParams, ancestorInstructions);
    };
    return Router;
})();
exports.Router = Router;
var RootRouter = (function (_super) {
    __extends(RootRouter, _super);
    function RootRouter(registry, location, primaryComponent) {
        var _this = this;
        _super.call(this, registry, null, primaryComponent);
        this._location = location;
        this._locationSub = this._location.subscribe(function (change) {
            // we call recognize ourselves
            _this.recognize(change['url'])
                .then(function (instruction) {
                _this.navigateByInstruction(instruction, isPresent(change['pop']))
                    .then(function (_) {
                    // this is a popstate event; no need to change the URL
                    if (isPresent(change['pop']) && change['type'] != 'hashchange') {
                        return;
                    }
                    var emitPath = instruction.toUrlPath();
                    var emitQuery = instruction.toUrlQuery();
                    if (emitPath.length > 0 && emitPath[0] != '/') {
                        emitPath = '/' + emitPath;
                    }
                    // Because we've opted to use All hashchange events occur outside Angular.
                    // However, apps that are migrating might have hash links that operate outside
                    // angular to which routing must respond.
                    // To support these cases where we respond to hashchanges and redirect as a
                    // result, we need to replace the top item on the stack.
                    if (change['type'] == 'hashchange') {
                        if (instruction.toRootUrl() != _this._location.path()) {
                            _this._location.replaceState(emitPath, emitQuery);
                        }
                    }
                    else {
                        _this._location.go(emitPath, emitQuery);
                    }
                });
            });
        });
        this.registry.configFromComponent(primaryComponent);
        this.navigateByUrl(location.path());
    }
    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        var emitPath = instruction.toUrlPath();
        var emitQuery = instruction.toUrlQuery();
        if (emitPath.length > 0 && emitPath[0] != '/') {
            emitPath = '/' + emitPath;
        }
        var promise = _super.prototype.commit.call(this, instruction);
        if (!_skipLocationChange) {
            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
        }
        return promise;
    };
    RootRouter.prototype.dispose = function () {
        if (isPresent(this._locationSub)) {
            ObservableWrapper.dispose(this._locationSub);
            this._locationSub = null;
        }
    };
    return RootRouter;
})(Router);
exports.RootRouter = RootRouter;
var ChildRouter = (function (_super) {
    __extends(ChildRouter, _super);
    function ChildRouter(parent, hostComponent) {
        _super.call(this, parent.registry, parent, hostComponent);
        this.parent = parent;
    }
    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        // Delegate navigation to the root router
        return this.parent.navigateByUrl(url, _skipLocationChange);
    };
    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        // Delegate navigation to the root router
        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
    };
    return ChildRouter;
})(Router);
function canActivateOne(nextInstruction, prevInstruction) {
    var next = _resolveToTrue;
    if (isBlank(nextInstruction.component)) {
        return next;
    }
    if (isPresent(nextInstruction.child)) {
        next = canActivateOne(nextInstruction.child, isPresent(prevInstruction) ? prevInstruction.child : null);
    }
    return next.then(function (result) {
        if (result == false) {
            return false;
        }
        if (nextInstruction.component.reuse) {
            return true;
        }
        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
        if (isPresent(hook)) {
            return hook(nextInstruction.component, isPresent(prevInstruction) ? prevInstruction.component : null);
        }
        return true;
    });
}


  //TODO: this is a hack to replace the exiting implementation at run-time
  exports.getCanActivateHook = function (directiveName) {
    var factory = $$directiveIntrospector.getTypeByName(directiveName);
    return factory && factory.$canActivate && function (next, prev) {
      return $injector.invoke(factory.$canActivate, null, {
        $nextInstruction: next,
        $prevInstruction: prev
      });
    };
  };

  // This hack removes assertions about the type of the "component"
  // property in a route config
  exports.assertComponentExists = function () {};

  angular.stringifyInstruction = function (instruction) {
    return instruction.toRootUrl();
  };

  var RouteRegistry = exports.RouteRegistry;
  var RootRouter = exports.RootRouter;

  var registry = new RouteRegistry($routerRootComponent);
  var location = new Location();

  $$directiveIntrospector(function (name, factory) {
    if (angular.isArray(factory.$routeConfig)) {
      factory.$routeConfig.forEach(function (config) {
        registry.config(name, config);
      });
    }
  });

  var router = new RootRouter(registry, location, $routerRootComponent);
  $rootScope.$watch(function () { return $location.url(); }, function (path) {
    if (router.lastNavigationAttempt !== path) {
      router.navigateByUrl(path);
    }
  });

  router.subscribe(function () {
    $rootScope.$broadcast('$routeChangeSuccess', {});
  });

  return router;
}

}());
;angular.module("SignalR",[]).constant("$",window.jQuery).factory("Hub",["$",function($){var globalConnections=[];function initNewConnection(options){var connection=null;if(options&&options.rootPath){connection=$.hubConnection(options.rootPath,{useDefaultPath:false})}else{connection=$.hubConnection()}connection.logging=options&&options.logging?true:false;return connection}function getConnection(options){var useSharedConnection=!(options&&options.useSharedConnection===false);if(useSharedConnection){return typeof globalConnections[options.rootPath]==="undefined"?globalConnections[options.rootPath]=initNewConnection(options):globalConnections[options.rootPath]}else{return initNewConnection(options)}}return function(hubName,options){var Hub=this;Hub.connection=getConnection(options);Hub.proxy=Hub.connection.createHubProxy(hubName);Hub.on=function(event,fn){Hub.proxy.on(event,fn)};Hub.invoke=function(method,args){return Hub.proxy.invoke.apply(Hub.proxy,arguments)};Hub.disconnect=function(){Hub.connection.stop()};Hub.connect=function(queryParams){var startOptions={};if(options.transport)startOptions.transport=options.transport;if(options.jsonp)startOptions.jsonp=options.jsonp;if(options.pingInterval!==undefined)startOptions.pingInterval=options.pingInterval;if(angular.isDefined(options.withCredentials))startOptions.withCredentials=options.withCredentials;if(queryParams)Hub.connection.qs=queryParams;return Hub.connection.start(startOptions)};if(options&&options.listeners){Object.getOwnPropertyNames(options.listeners).filter(function(propName){return typeof options.listeners[propName]==="function"}).forEach(function(propName){Hub.on(propName,options.listeners[propName])})}if(options&&options.methods){angular.forEach(options.methods,function(method){Hub[method]=function(){var args=$.makeArray(arguments);args.unshift(method);return Hub.invoke.apply(Hub,args)}})}if(options&&options.queryParams){Hub.connection.qs=options.queryParams}if(options&&options.errorHandler){Hub.connection.error(options.errorHandler)}if(options&&options.stateChanged){Hub.connection.stateChanged(options.stateChanged)}if(options.autoConnect===undefined||options.autoConnect){Hub.promise=Hub.connect()}return Hub}}]);if(typeof module!=="undefined"&&typeof exports!=="undefined"&&module.exports===exports){module.exports="SignalR"};!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(n){var r=t[o][1][n];return s(r||n)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,n,r){(function(n){"use strict";function define(t,n,e){t[n]||Object[r](t,n,{writable:!0,configurable:!0,value:e})}if(t(327),t(328),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0;var r="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&define(Array,t,Function.call.bind([][t]))})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,327:327,328:328}],2:[function(t,n,r){t(130),n.exports=t(23).RegExp.escape},{130:130,23:23}],3:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,r){var e=t(18);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{18:18}],5:[function(t,n,r){var e=t(128)("unscopables"),i=Array.prototype;void 0==i[e]&&t(42)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{128:128,42:42}],6:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],7:[function(t,n,r){var e=t(51);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{51:51}],8:[function(t,n,r){"use strict";var e=t(119),i=t(114),o=t(118);n.exports=[].copyWithin||function copyWithin(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-a,u-c),l=1;for(a<c&&c<a+s&&(l=-1,a+=s-1,c+=s-1);s-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},{114:114,118:118,119:119}],9:[function(t,n,r){"use strict";var e=t(119),i=t(114),o=t(118);n.exports=function fill(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:i(a,r);f>c;)n[c++]=t;return n}},{114:114,118:118,119:119}],10:[function(t,n,r){var e=t(39);n.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},{39:39}],11:[function(t,n,r){var e=t(117),i=t(118),o=t(114);n.exports=function(t){return function(n,r,u){var c,a=e(n),f=i(a.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},{114:114,117:117,118:118}],12:[function(t,n,r){var e=t(25),i=t(47),o=t(119),u=t(118),c=t(15);n.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,y,g=o(n),m=i(g),b=e(c,p,3),x=u(m.length),S=0,w=r?v(n,x):a?v(n,0):void 0;x>S;S++)if((h||S in m)&&(d=m[S],y=b(d,S,g),t))if(r)w[S]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:w.push(d)}else if(s)return!1;return l?-1:f||s?s:w}}},{118:118,119:119,15:15,25:25,47:47}],13:[function(t,n,r){var e=t(3),i=t(119),o=t(47),u=t(118);n.exports=function(t,n,r,c,a){e(n);var f=i(t),s=o(f),l=u(f.length),h=a?l-1:0,v=a?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,f));return c}},{118:118,119:119,3:3,47:47}],14:[function(t,n,r){var e=t(51),i=t(49),o=t(128)("species");n.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},{128:128,49:49,51:51}],15:[function(t,n,r){var e=t(14);n.exports=function(t,n){return new(e(t))(n)}},{14:14}],16:[function(t,n,r){"use strict";var e=t(3),i=t(51),o=t(46),u=[].slice,c={},a=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?a(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{3:3,46:46,51:51}],17:[function(t,n,r){var e=t(18),i=t(128)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{128:128,18:18}],18:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],19:[function(t,n,r){"use strict";var e=t(72).f,i=t(71),o=t(93),u=t(25),c=t(6),a=t(39),f=t(55),s=t(57),l=t(100),h=t(29),v=t(66).fastKey,p=t(125),d=h?"_s":"size",y=function(t,n){var r,e=v(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,f){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[f],t)});return o(s.prototype,{clear:function clear(){for(var t=p(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=p(this,n),e=y(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function forEach(t){p(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function has(t){return!!y(p(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return p(this,n)[d]}}),s},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=v(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){f(t,n,function(t,r){this._t=p(t,n),this._k=r,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?s(0,r.k):"values"==n?s(0,r.v):s(0,[r.k,r.v]):(t._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},{100:100,125:125,25:25,29:29,39:39,55:55,57:57,6:6,66:66,71:71,72:72,93:93}],20:[function(t,n,r){var e=t(17),i=t(10);n.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},{10:10,17:17}],21:[function(t,n,r){"use strict";var e=t(93),i=t(66).getWeak,o=t(7),u=t(51),c=t(6),a=t(39),f=t(12),s=t(41),l=t(125),h=f(5),v=f(6),p=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,n){return h(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var r=g(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=v(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=p++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function has(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},{12:12,125:125,39:39,41:41,51:51,6:6,66:66,7:7,93:93}],22:[function(t,n,r){"use strict";var e=t(40),i=t(33),o=t(94),u=t(93),c=t(66),a=t(39),f=t(6),s=t(51),l=t(35),h=t(56),v=t(101),p=t(45);n.exports=function(t,n,r,d,y,g){var m=e[t],b=m,x=y?"set":"add",S=b&&b.prototype,w={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(g||S.forEach&&!l(function(){(new b).entries().next()}))){var E=new b,O=E[x](g?{}:-0,1)!=E,P=l(function(){E.has(1)}),M=h(function(t){new b(t)}),F=!g&&l(function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)});M||(b=n(function(n,r){f(n,b,t);var e=p(new m,n,b);return void 0!=r&&a(r,y,e[x],e),e}),b.prototype=S,S.constructor=b),(P||F)&&(_("delete"),_("has"),y&&_("get")),(F||O)&&_(x),g&&S.clear&&delete S.clear}else b=d.getConstructor(n,t,y,x),u(b.prototype,r),c.NEED=!0;return v(b,t),w[t]=b,i(i.G+i.W+i.F*(b!=m),w),g||d.setStrong(b,t,y),b}},{101:101,33:33,35:35,39:39,40:40,45:45,51:51,56:56,6:6,66:66,93:93,94:94}],23:[function(t,n,r){var e=n.exports={version:"2.5.0"};"number"==typeof __e&&(__e=e)},{}],24:[function(t,n,r){"use strict";var e=t(72),i=t(92);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{72:72,92:92}],25:[function(t,n,r){var e=t(3);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{3:3}],26:[function(t,n,r){"use strict";var e=t(35),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};n.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},{35:35}],27:[function(t,n,r){"use strict";var e=t(7),i=t(120);n.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},{120:120,7:7}],28:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],29:[function(t,n,r){n.exports=!t(35)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{35:35}],30:[function(t,n,r){var e=t(51),i=t(40).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{40:40,51:51}],31:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],32:[function(t,n,r){var e=t(81),i=t(78),o=t(82);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},{78:78,81:81,82:82}],33:[function(t,n,r){var e=t(40),i=t(23),o=t(42),u=t(94),c=t(25),a=function(t,n,r){var f,s,l,h,v=t&a.F,p=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,m=p?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,b=p?i:i[n]||(i[n]={}),x=b.prototype||(b.prototype={});p&&(r=n);for(f in r)s=!v&&m&&void 0!==m[f],l=(s?m:r)[f],h=g&&s?c(l,e):y&&"function"==typeof l?c(Function.call,l):l,m&&u(m,f,l,t&a.U),b[f]!=l&&o(b,f,h),y&&x[f]!=l&&(x[f]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{23:23,25:25,40:40,42:42,94:94}],34:[function(t,n,r){var e=t(128)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{128:128}],35:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],36:[function(t,n,r){"use strict";var e=t(42),i=t(94),o=t(35),u=t(28),c=t(128);n.exports=function(t,n,r){var a=c(t),f=r(u,a,""[t]),s=f[0],l=f[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,a,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},{128:128,28:28,35:35,42:42,94:94}],37:[function(t,n,r){"use strict";var e=t(7);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{7:7}],38:[function(t,n,r){"use strict";function flattenIntoArray(t,n,r,a,f,s,l,h){for(var v,p,d=f,y=0,g=!!l&&u(l,h,3);y<a;){if(y in r){if(v=g?g(r[y],y,n):r[y],p=!1,i(v)&&(p=v[c],p=void 0!==p?!!p:e(v)),p&&s>0)d=flattenIntoArray(t,n,v,o(v.length),d,s-1)-1;else{if(d>=9007199254740991)throw TypeError();t[d]=v}d++}y++}return d}var e=t(49),i=t(51),o=t(118),u=t(25),c=t(128)("isConcatSpreadable");n.exports=flattenIntoArray},{118:118,128:128,25:25,49:49,51:51}],39:[function(t,n,r){var e=t(25),i=t(53),o=t(48),u=t(7),c=t(118),a=t(129),f={},s={},r=n.exports=function(t,n,r,l,h){var v,p,d,y,g=h?function(){return t}:a(t),m=e(r,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=c(t.length);v>b;b++)if((y=n?m(u(p=t[b])[0],p[1]):m(t[b]))===f||y===s)return y}else for(d=g.call(t);!(p=d.next()).done;)if((y=i(d,m,p.value,n))===f||y===s)return y};r.BREAK=f,r.RETURN=s},{118:118,129:129,25:25,48:48,53:53,7:7}],40:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],41:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],42:[function(t,n,r){var e=t(72),i=t(92);n.exports=t(29)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{29:29,72:72,92:92}],43:[function(t,n,r){var e=t(40).document;n.exports=e&&e.documentElement},{40:40}],44:[function(t,n,r){n.exports=!t(29)&&!t(35)(function(){return 7!=Object.defineProperty(t(30)("div"),"a",{get:function(){return 7}}).a})},{29:29,30:30,35:35}],45:[function(t,n,r){var e=t(51),i=t(99).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{51:51,99:99}],46:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],47:[function(t,n,r){var e=t(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{18:18}],48:[function(t,n,r){var e=t(58),i=t(128)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{128:128,58:58}],49:[function(t,n,r){var e=t(18);n.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},{18:18}],50:[function(t,n,r){var e=t(51),i=Math.floor;n.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},{51:51}],51:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],52:[function(t,n,r){var e=t(51),i=t(18),o=t(128)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{128:128,18:18,51:51}],53:[function(t,n,r){var e=t(7);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{7:7}],54:[function(t,n,r){"use strict";var e=t(71),i=t(92),o=t(101),u={};t(42)(u,t(128)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{101:101,128:128,42:42,71:71,92:92}],55:[function(t,n,r){"use strict";var e=t(60),i=t(33),o=t(94),u=t(42),c=t(41),a=t(58),f=t(54),s=t(101),l=t(79),h=t(128)("iterator"),v=!([].keys&&"next"in[].keys()),p=function(){return this};n.exports=function(t,n,r,d,y,g,m){f(r,n,d);var b,x,S,w=function(t){if(!v&&t in P)return P[t];switch(t){case"keys":return function keys(){return new r(this,t)};case"values":return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},_=n+" Iterator",E="values"==y,O=!1,P=t.prototype,M=P[h]||P["@@iterator"]||y&&P[y],F=M||w(y),I=y?E?w("entries"):F:void 0,A="Array"==n?P.entries||M:M;if(A&&(S=l(A.call(new t)))!==Object.prototype&&S.next&&(s(S,_,!0),e||c(S,h)||u(S,h,p)),E&&M&&"values"!==M.name&&(O=!0,F=function values(){return M.call(this)}),e&&!m||!v&&!O&&P[h]||u(P,h,F),a[n]=F,a[_]=p,y)if(b={values:E?F:w("values"),keys:g?F:w("keys"),entries:I},m)for(x in b)x in P||o(P,x,b[x]);else i(i.P+i.F*(v||O),n,b);return b}},{101:101,128:128,33:33,41:41,42:42,54:54,58:58,60:60,79:79,94:94}],56:[function(t,n,r){var e=t(128)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{128:128}],57:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],58:[function(t,n,r){n.exports={}},{}],59:[function(t,n,r){var e=t(81),i=t(117);n.exports=function(t,n){for(var r,o=i(t),u=e(o),c=u.length,a=0;c>a;)if(o[r=u[a++]]===n)return r}},{117:117,81:81}],60:[function(t,n,r){n.exports=!1},{}],61:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],62:[function(t,n,r){var e=t(65),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126),f=function(t){return t+1/o-1/o};n.exports=Math.fround||function fround(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*f(i/a/u)*a*u:(n=(1+u/o)*i,r=n-(n-i),r>c||r!=r?s*(1/0):s*r)}},{65:65}],63:[function(t,n,r){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],64:[function(t,n,r){n.exports=Math.scale||function scale(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},{}],65:[function(t,n,r){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],66:[function(t,n,r){var e=t(124)("meta"),i=t(51),o=t(41),u=t(72).f,c=0,a=Object.isExtensible||function(){return!0},f=!t(35)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},v=function(t){return f&&p.NEED&&a(t)&&!o(t,e)&&s(t),t},p=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},{124:124,35:35,41:41,51:51,72:72}],67:[function(t,n,r){var e=t(160),i=t(33),o=t(103)("metadata"),u=o.store||(o.store=new(t(266))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},a=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},f=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},l=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},v=function(t){i(i.S,"Reflect",t)};n.exports={store:u,map:c,has:a,get:f,set:s,keys:l,key:h,exp:v}},{103:103,160:160,266:266,33:33}],68:[function(t,n,r){var e=t(40),i=t(113).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==t(18)(u);n.exports=function(){var t,n,r,f=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(o){var s=!0,l=document.createTextNode("");new o(f).observe(l,{characterData:!0}),r=function(){l.data=s=!s}}else if(c&&c.resolve){var h=c.resolve();r=function(){h.then(f)}}else r=function(){i.call(e,f)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{113:113,18:18,40:40}],69:[function(t,n,r){"use strict";function PromiseCapability(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}var e=t(3);n.exports.f=function(t){return new PromiseCapability(t)}},{3:3}],70:[function(t,n,r){"use strict";var e=t(81),i=t(78),o=t(82),u=t(119),c=t(47),a=Object.assign;n.exports=!a||t(35)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),a=arguments.length,f=1,s=i.f,l=o.f;a>f;)for(var h,v=c(arguments[f++]),p=s?e(v).concat(s(v)):e(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(r[h]=v[h]);return r}:a},{119:119,35:35,47:47,78:78,81:81,82:82}],71:[function(t,n,r){var e=t(7),i=t(73),o=t(31),u=t(102)("IE_PROTO"),c=function(){},a=function(){var n,r=t(30)("iframe"),e=o.length;for(r.style.display="none",t(43).appendChild(r),r.src="javascript:",n=r.contentWindow.document,n.open(),n.write("<script>document.F=Object<\/script>"),n.close(),a=n.F;e--;)delete a.prototype[o[e]];return a()};n.exports=Object.create||function create(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{102:102,30:30,31:31,43:43,7:7,73:73}],72:[function(t,n,r){var e=t(7),i=t(44),o=t(120),u=Object.defineProperty;r.f=t(29)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{120:120,29:29,44:44,7:7}],73:[function(t,n,r){var e=t(72),i=t(7),o=t(81);n.exports=t(29)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},{29:29,7:7,72:72,81:81}],74:[function(t,n,r){"use strict";n.exports=t(60)||!t(35)(function(){var n=Math.random();__defineSetter__.call(null,n,function(){}),delete t(40)[n]})},{35:35,40:40,60:60}],75:[function(t,n,r){var e=t(82),i=t(92),o=t(117),u=t(120),c=t(41),a=t(44),f=Object.getOwnPropertyDescriptor;r.f=t(29)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{117:117,120:120,29:29,41:41,44:44,82:82,92:92}],76:[function(t,n,r){var e=t(117),i=t(77).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{117:117,77:77}],77:[function(t,n,r){var e=t(80),i=t(31).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},{31:31,80:80}],78:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],79:[function(t,n,r){var e=t(41),i=t(119),o=t(102)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{102:102,119:119,41:41}],80:[function(t,n,r){var e=t(41),i=t(117),o=t(11)(!1),u=t(102)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(f,r)||f.push(r));return f}},{102:102,11:11,117:117,41:41}],81:[function(t,n,r){var e=t(80),i=t(31);n.exports=Object.keys||function keys(t){return e(t,i)}},{31:31,80:80}],82:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],83:[function(t,n,r){var e=t(33),i=t(23),o=t(35);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{23:23,33:33,35:35}],84:[function(t,n,r){var e=t(81),i=t(117),o=t(82).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,f=0,s=[];a>f;)o.call(u,r=c[f++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{117:117,81:81,82:82}],85:[function(t,n,r){var e=t(77),i=t(78),o=t(7),u=t(40).Reflect;n.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{40:40,7:7,77:77,78:78}],86:[function(t,n,r){var e=t(40).parseFloat,i=t(111).trim;n.exports=1/e(t(112)+"-0")!=-1/0?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{111:111,112:112,40:40}],87:[function(t,n,r){var e=t(40).parseInt,i=t(111).trim,o=t(112),u=/^[-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{111:111,112:112,40:40}],88:[function(t,n,r){"use strict";var e=t(89),i=t(46),o=t(3);n.exports=function(){for(var t=o(this),n=arguments.length,r=Array(n),u=0,c=e._,a=!1;n>u;)(r[u]=arguments[u++])===c&&(a=!0);return function(){var e,o=this,u=arguments.length,f=0,s=0;if(!a&&!u)return i(t,r,o);if(e=r.slice(),a)for(;n>f;f++)e[f]===c&&(e[f]=arguments[s++]);for(;u>s;)e.push(arguments[s++]);return i(t,e,o)}}},{3:3,46:46,89:89}],89:[function(t,n,r){n.exports=t(40)},{40:40}],90:[function(t,n,r){n.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},{}],91:[function(t,n,r){var e=t(69);n.exports=function(t,n){var r=e.f(t);return(0,r.resolve)(n),r.promise}},{69:69}],92:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],93:[function(t,n,r){var e=t(94);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{94:94}],94:[function(t,n,r){var e=t(40),i=t(42),o=t(41),u=t(124)("src"),c=Function.toString,a=(""+c).split("toString");t(23).inspectSource=function(t){return c.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function toString(){return"function"==typeof this&&this[u]||c.call(this)})},{124:124,23:23,40:40,41:41,42:42}],95:[function(t,n,r){n.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},{}],96:[function(t,n,r){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},{}],97:[function(t,n,r){"use strict";var e=t(33),i=t(3),o=t(25),u=t(39);n.exports=function(t){e(e.S,t,{from:function from(t){var n,r,e,c,a=arguments[1];return i(this),n=void 0!==a,n&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},{25:25,3:3,33:33,39:39}],98:[function(t,n,r){"use strict";var e=t(33);n.exports=function(t){e(e.S,t,{of:function of(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},{33:33}],99:[function(t,n,r){var e=t(51),i=t(7),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{e=t(25)(Function.call,t(75).f(Object.prototype,"__proto__").set,2),e(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{25:25,51:51,7:7,75:75}],100:[function(t,n,r){"use strict";var e=t(40),i=t(72),o=t(29),u=t(128)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{128:128,29:29,40:40,72:72}],101:[function(t,n,r){var e=t(72).f,i=t(41),o=t(128)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{128:128,41:41,72:72}],102:[function(t,n,r){var e=t(103)("keys"),i=t(124);n.exports=function(t){return e[t]||(e[t]=i(t))}},{103:103,124:124}],103:[function(t,n,r){var e=t(40),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});n.exports=function(t){return i[t]||(i[t]={})}},{40:40}],104:[function(t,n,r){var e=t(7),i=t(3),o=t(128)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{128:128,3:3,7:7}],105:[function(t,n,r){"use strict";var e=t(35);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{35:35}],106:[function(t,n,r){var e=t(116),i=t(28);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536)}}},{116:116,28:28}],107:[function(t,n,r){var e=t(52),i=t(28);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{28:28,52:52}],108:[function(t,n,r){var e=t(33),i=t(35),o=t(28),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{28:28,33:33,35:35}],109:[function(t,n,r){var e=t(118),i=t(110),o=t(28);n.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,f=void 0===r?" ":String(r),s=e(n);if(s<=a||""==f)return c;var l=s-a,h=i.call(f,Math.ceil(l/f.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{110:110,118:118,28:28}],110:[function(t,n,r){"use strict";var e=t(116),i=t(28);n.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{116:116,28:28}],111:[function(t,n,r){var e=t(33),i=t(28),o=t(35),u=t(112),c="["+u+"]",a="​",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||a[t]()!=a}),f=i[t]=c?n(h):u[t];r&&(i[r]=f),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{112:112,28:28,33:33,35:35}],112:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],113:[function(t,n,r){var e,i,o,u=t(25),c=t(46),a=t(43),f=t(30),s=t(40),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,d=s.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};h&&v||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},v=function clearImmediate(t){delete g[t]},"process"==t(18)(l)?e=function(t){l.nextTick(u(m,t,1))}:d&&d.now?e=function(t){d.now(u(m,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=b,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",b,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),n.exports={set:h,clear:v}},{18:18,25:25,30:30,40:40,43:43,46:46}],114:[function(t,n,r){var e=t(116),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{116:116}],115:[function(t,n,r){var e=t(116),i=t(118);n.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},{116:116,118:118}],116:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],117:[function(t,n,r){var e=t(47),i=t(28);n.exports=function(t){return e(i(t))}},{28:28,47:47}],118:[function(t,n,r){var e=t(116),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{116:116}],
119:[function(t,n,r){var e=t(28);n.exports=function(t){return Object(e(t))}},{28:28}],120:[function(t,n,r){var e=t(51);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{51:51}],121:[function(t,n,r){"use strict";if(t(29)){var e=t(60),i=t(40),o=t(35),u=t(33),c=t(123),a=t(122),f=t(25),s=t(6),l=t(92),h=t(42),v=t(93),p=t(116),d=t(118),y=t(115),g=t(114),m=t(120),b=t(41),x=t(17),S=t(51),w=t(119),_=t(48),E=t(71),O=t(79),P=t(77).f,M=t(129),F=t(124),I=t(128),A=t(12),k=t(11),N=t(104),j=t(141),T=t(58),R=t(56),L=t(100),G=t(9),D=t(8),C=t(72),W=t(75),U=C.f,B=W.f,V=i.RangeError,z=i.TypeError,q=i.Uint8Array,K=Array.prototype,Y=a.ArrayBuffer,J=a.DataView,H=A(0),X=A(2),$=A(3),Z=A(4),Q=A(5),tt=A(6),nt=k(!0),rt=k(!1),et=j.values,it=j.keys,ot=j.entries,ut=K.lastIndexOf,ct=K.reduce,at=K.reduceRight,ft=K.join,st=K.sort,lt=K.slice,ht=K.toString,vt=K.toLocaleString,pt=I("iterator"),dt=I("toStringTag"),yt=F("typed_constructor"),gt=F("def_constructor"),mt=c.CONSTR,bt=c.TYPED,xt=c.VIEW,St=A(1,function(t,n){return Pt(N(t,t[gt]),n)}),wt=o(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),_t=!!q&&!!q.prototype.set&&o(function(){new q(1).set({})}),Et=function(t,n){var r=p(t);if(r<0||r%n)throw V("Wrong offset!");return r},Ot=function(t){if(S(t)&&bt in t)return t;throw z(t+" is not a typed array!")},Pt=function(t,n){if(!(S(t)&&yt in t))throw z("It is not a typed array constructor!");return new t(n)},Mt=function(t,n){return Ft(N(t,t[gt]),n)},Ft=function(t,n){for(var r=0,e=n.length,i=Pt(t,e);e>r;)i[r]=n[r++];return i},It=function(t,n,r){U(t,n,{get:function(){return this._d[r]}})},At=function from(t){var n,r,e,i,o,u,c=w(t),a=arguments.length,s=a>1?arguments[1]:void 0,l=void 0!==s,h=M(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(s=f(s,arguments[2],2)),n=0,r=d(c.length),i=Pt(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},kt=function of(){for(var t=0,n=arguments.length,r=Pt(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!q&&o(function(){vt.call(new q(1))}),jt=function toLocaleString(){return vt.apply(Nt?lt.call(Ot(this)):Ot(this),arguments)},Tt={copyWithin:function copyWithin(t,n){return D.call(Ot(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function every(t){return Z(Ot(this),t,arguments.length>1?arguments[1]:void 0)},fill:function fill(t){return G.apply(Ot(this),arguments)},filter:function filter(t){return Mt(this,X(Ot(this),t,arguments.length>1?arguments[1]:void 0))},find:function find(t){return Q(Ot(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function findIndex(t){return tt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function forEach(t){H(Ot(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function indexOf(t){return rt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},includes:function includes(t){return nt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},join:function join(t){return ft.apply(Ot(this),arguments)},lastIndexOf:function lastIndexOf(t){return ut.apply(Ot(this),arguments)},map:function map(t){return St(Ot(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function reduce(t){return ct.apply(Ot(this),arguments)},reduceRight:function reduceRight(t){return at.apply(Ot(this),arguments)},reverse:function reverse(){for(var t,n=this,r=Ot(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return $(Ot(this),t,arguments.length>1?arguments[1]:void 0)},sort:function sort(t){return st.call(Ot(this),t)},subarray:function subarray(t,n){var r=Ot(this),e=r.length,i=g(t,e);return new(N(r,r[gt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:g(n,e))-i))}},Rt=function slice(t,n){return Mt(this,lt.call(Ot(this),t,n))},Lt=function set(t){Ot(this);var n=Et(arguments[1],1),r=this.length,e=w(t),i=d(e.length),o=0;if(i+n>r)throw V("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Gt={entries:function entries(){return ot.call(Ot(this))},keys:function keys(){return it.call(Ot(this))},values:function values(){return et.call(Ot(this))}},Dt=function(t,n){return S(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Ct=function getOwnPropertyDescriptor(t,n){return Dt(t,n=m(n,!0))?l(2,t[n]):B(t,n)},Wt=function defineProperty(t,n,r){return!(Dt(t,n=m(n,!0))&&S(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?U(t,n,r):(t[n]=r.value,t)};mt||(W.f=Ct,C.f=Wt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Ct,defineProperty:Wt}),o(function(){ht.call({})})&&(ht=vt=function toString(){return ft.call(this)});var Ut=v({},Tt);v(Ut,Gt),h(Ut,pt,Gt.values),v(Ut,{slice:Rt,set:Lt,constructor:function(){},toString:ht,toLocaleString:jt}),It(Ut,"buffer","b"),It(Ut,"byteOffset","o"),It(Ut,"byteLength","l"),It(Ut,"length","e"),U(Ut,dt,{get:function(){return this[bt]}}),n.exports=function(t,n,r,a){a=!!a;var f=t+(a?"Clamped":"")+"Array",l="get"+t,v="set"+t,p=i[f],g=p||{},m=p&&O(p),b=!p||!c.ABV,w={},_=p&&p.prototype,M=function(t,r){var e=t._d;return e.v[l](r*n+e.o,wt)},F=function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[v](r*n+i.o,e,wt)},I=function(t,n){U(t,n,{get:function(){return M(this,n)},set:function(t){return F(this,n,t)},enumerable:!0})};b?(p=r(function(t,r,e,i){s(t,p,f,"_d");var o,u,c,a,l=0,v=0;if(S(r)){if(!(r instanceof Y||"ArrayBuffer"==(a=x(r))||"SharedArrayBuffer"==a))return bt in r?Ft(p,r):At.call(p,r);o=r,v=Et(e,n);var g=r.byteLength;if(void 0===i){if(g%n)throw V("Wrong length!");if((u=g-v)<0)throw V("Wrong length!")}else if((u=d(i)*n)+v>g)throw V("Wrong length!");c=u/n}else c=y(r),u=c*n,o=new Y(u);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new J(o)});l<c;)I(t,l++)}),_=p.prototype=E(Ut),h(_,"constructor",p)):o(function(){p(1)})&&o(function(){new p(-1)})&&R(function(t){new p,new p(null),new p(1.5),new p(t)},!0)||(p=r(function(t,r,e,i){s(t,p,f);var o;return S(r)?r instanceof Y||"ArrayBuffer"==(o=x(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Et(e,n),i):void 0!==e?new g(r,Et(e,n)):new g(r):bt in r?Ft(p,r):At.call(p,r):new g(y(r))}),H(m!==Function.prototype?P(g).concat(P(m)):P(g),function(t){t in p||h(p,t,g[t])}),p.prototype=_,e||(_.constructor=p));var A=_[pt],k=!!A&&("values"==A.name||void 0==A.name),N=Gt.values;h(p,yt,!0),h(_,bt,f),h(_,xt,!0),h(_,gt,p),(a?new p(1)[dt]==f:dt in _)||U(_,dt,{get:function(){return f}}),w[f]=p,u(u.G+u.W+u.F*(p!=g),w),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){g.of.call(p,1)}),f,{from:At,of:kt}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,f,Tt),L(f),u(u.P+u.F*_t,f,{set:Lt}),u(u.P+u.F*!k,f,Gt),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new p(1).slice()}),f,{slice:Rt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),f,{toLocaleString:jt}),T[f]=k?A:N,e||k||h(_,pt,N)}}else n.exports=function(){}},{100:100,104:104,11:11,114:114,115:115,116:116,118:118,119:119,12:12,120:120,122:122,123:123,124:124,128:128,129:129,141:141,17:17,25:25,29:29,33:33,35:35,40:40,41:41,42:42,48:48,51:51,56:56,58:58,6:6,60:60,71:71,72:72,75:75,77:77,79:79,8:8,9:9,92:92,93:93}],122:[function(t,n,r){"use strict";function packIEEE754(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?M(2,-24)-M(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=P(t),t!=t||t===E?(i=t!=t?1:0,e=a):(e=F(I(t)/A),t*(o=M(2,-e))<1&&(e--,o*=2),t+=e+f>=1?s/o:s*M(2,1-f),t*o>=2&&(e++,o/=2),e+f>=a?(i=0,e=a):e+f>=1?(i=(t*o-1)*M(2,n),e+=f):(i=t*M(2,f-1)*M(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;c>0;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-E:E;e+=M(2,n),s-=u}return(f?-1:1)*e*M(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){d(t[m],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=+r,o=v(i);if(o+n>t[N])throw _(b);var u=t[k]._b,c=o+t[j],a=u.slice(c,c+n);return e?a:a.reverse()}function set(t,n,r,e,i,o){var u=+r,c=v(u);if(c+n>t[N])throw _(b);for(var a=t[k]._b,f=c+t[j],s=e(+i),l=0;l<n;l++)a[f+l]=s[o?l:n-l-1]}var e=t(40),i=t(29),o=t(60),u=t(123),c=t(42),a=t(93),f=t(35),s=t(6),l=t(116),h=t(118),v=t(115),p=t(77).f,d=t(72).f,y=t(9),g=t(101),m="prototype",b="Wrong index!",x=e.ArrayBuffer,S=e.DataView,w=e.Math,_=e.RangeError,E=e.Infinity,O=x,P=w.abs,M=w.pow,F=w.floor,I=w.log,A=w.LN2,k=i?"_b":"buffer",N=i?"_l":"byteLength",j=i?"_o":"byteOffset";if(u.ABV){if(!f(function(){x(1)})||!f(function(){new x(-1)})||f(function(){return new x,new x(1.5),new x(NaN),"ArrayBuffer"!=x.name})){x=function ArrayBuffer(t){return s(this,x),new O(v(t))};for(var T,R=x[m]=O[m],L=p(O),G=0;L.length>G;)(T=L[G++])in x||c(x,T,O[T]);o||(R.constructor=x)}var D=new S(new x(2)),C=S[m].setInt8;D.setInt8(0,2147483648),D.setInt8(1,2147483649),!D.getInt8(0)&&D.getInt8(1)||a(S[m],{setInt8:function setInt8(t,n){C.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){C.call(this,t,n<<24>>24)}},!0)}else x=function ArrayBuffer(t){s(this,x,"ArrayBuffer");var n=v(t);this._b=y.call(Array(n),0),this[N]=n},S=function DataView(t,n,r){s(this,S,"DataView"),s(t,x,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw _("Wrong length!");this[k]=t,this[j]=i,this[N]=r},i&&(addGetter(x,"byteLength","_l"),addGetter(S,"buffer","_b"),addGetter(S,"byteLength","_l"),addGetter(S,"byteOffset","_o")),a(S[m],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});g(x,"ArrayBuffer"),g(S,"DataView"),c(S[m],u.VIEW,!0),r.ArrayBuffer=x,r.DataView=S},{101:101,115:115,116:116,118:118,123:123,29:29,35:35,40:40,42:42,6:6,60:60,72:72,77:77,9:9,93:93}],123:[function(t,n,r){for(var e,i=t(40),o=t(42),u=t(124),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;n.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},{124:124,40:40,42:42}],124:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],125:[function(t,n,r){var e=t(51);n.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},{51:51}],126:[function(t,n,r){var e=t(40),i=t(23),o=t(60),u=t(127),c=t(72).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{127:127,23:23,40:40,60:60,72:72}],127:[function(t,n,r){r.f=t(128)},{128:128}],128:[function(t,n,r){var e=t(103)("wks"),i=t(124),o=t(40).Symbol,u="function"==typeof o;(n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},{103:103,124:124,40:40}],129:[function(t,n,r){var e=t(17),i=t(128)("iterator"),o=t(58);n.exports=t(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{128:128,17:17,23:23,58:58}],130:[function(t,n,r){var e=t(33),i=t(95)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},{33:33,95:95}],131:[function(t,n,r){var e=t(33);e(e.P,"Array",{copyWithin:t(8)}),t(5)("copyWithin")},{33:33,5:5,8:8}],132:[function(t,n,r){"use strict";var e=t(33),i=t(12)(4);e(e.P+e.F*!t(105)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],133:[function(t,n,r){var e=t(33);e(e.P,"Array",{fill:t(9)}),t(5)("fill")},{33:33,5:5,9:9}],134:[function(t,n,r){"use strict";var e=t(33),i=t(12)(2);e(e.P+e.F*!t(105)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],135:[function(t,n,r){"use strict";var e=t(33),i=t(12)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,33:33,5:5}],136:[function(t,n,r){"use strict";var e=t(33),i=t(12)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function find(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("find")},{12:12,33:33,5:5}],137:[function(t,n,r){"use strict";var e=t(33),i=t(12)(0),o=t(105)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],138:[function(t,n,r){"use strict";var e=t(25),i=t(33),o=t(119),u=t(53),c=t(48),a=t(118),f=t(24),s=t(129);i(i.S+i.F*!t(56)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,m=s(h);if(y&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==m||v==Array&&c(m))for(n=a(h.length),r=new v(n);n>g;g++)f(r,g,y?d(h[g],g):h[g]);else for(l=m.call(h),r=new v;!(i=l.next()).done;g++)f(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{118:118,119:119,129:129,24:24,25:25,33:33,48:48,53:53,56:56}],139:[function(t,n,r){"use strict";var e=t(33),i=t(11)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(105)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{105:105,11:11,33:33}],140:[function(t,n,r){var e=t(33);e(e.S,"Array",{isArray:t(49)})},{33:33,49:49}],141:[function(t,n,r){"use strict";var e=t(5),i=t(57),o=t(58),u=t(117);n.exports=t(55)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{117:117,5:5,55:55,57:57,58:58}],142:[function(t,n,r){"use strict";var e=t(33),i=t(117),o=[].join;e(e.P+e.F*(t(47)!=Object||!t(105)(o)),"Array",{join:function join(t){return o.call(i(this),void 0===t?",":t)}})},{105:105,117:117,33:33,47:47}],143:[function(t,n,r){"use strict";var e=t(33),i=t(117),o=t(116),u=t(118),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!t(105)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{105:105,116:116,117:117,118:118,33:33}],144:[function(t,n,r){"use strict";var e=t(33),i=t(12)(1);e(e.P+e.F*!t(105)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],145:[function(t,n,r){"use strict";var e=t(33),i=t(24);e(e.S+e.F*t(35)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{24:24,33:33,35:35}],146:[function(t,n,r){"use strict";var e=t(33),i=t(13);e(e.P+e.F*!t(105)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},{105:105,13:13,33:33}],147:[function(t,n,r){"use strict";var e=t(33),i=t(13);e(e.P+e.F*!t(105)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},{105:105,13:13,33:33}],148:[function(t,n,r){"use strict";var e=t(33),i=t(43),o=t(18),u=t(114),c=t(118),a=[].slice;e(e.P+e.F*t(35)(function(){i&&a.call(i)}),"Array",{slice:function slice(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=c(f-i),l=Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{114:114,118:118,18:18,33:33,35:35,43:43}],149:[function(t,n,r){"use strict";var e=t(33),i=t(12)(3);e(e.P+e.F*!t(105)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},{105:105,12:12,33:33}],150:[function(t,n,r){"use strict";var e=t(33),i=t(3),o=t(119),u=t(35),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!t(105)(c)),"Array",{sort:function sort(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{105:105,119:119,3:3,33:33,35:35}],151:[function(t,n,r){t(100)("Array")},{100:100}],152:[function(t,n,r){var e=t(33);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{33:33}],153:[function(t,n,r){var e=t(33),i=t(26);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},{26:26,33:33}],154:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120);e(e.P+e.F*t(35)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{119:119,120:120,33:33,35:35}],155:[function(t,n,r){var e=t(128)("toPrimitive"),i=Date.prototype;e in i||t(42)(i,e,t(27))},{128:128,27:27,42:42}],156:[function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&t(94)(e,"toString",function toString(){var t=o.call(this);return t===t?i.call(this):"Invalid Date"})},{94:94}],157:[function(t,n,r){var e=t(33);e(e.P,"Function",{bind:t(16)})},{16:16,33:33}],158:[function(t,n,r){"use strict";var e=t(51),i=t(79),o=t(128)("hasInstance"),u=Function.prototype;o in u||t(72).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{128:128,51:51,72:72,79:79}],159:[function(t,n,r){var e=t(72).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||t(29)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},{29:29,72:72}],160:[function(t,n,r){"use strict";var e=t(19),i=t(125);n.exports=t(22)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},{125:125,19:19,22:22}],161:[function(t,n,r){var e=t(33),i=t(63),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{33:33,63:63}],162:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(33),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{33:33}],163:[function(t,n,r){var e=t(33),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{33:33}],164:[function(t,n,r){var e=t(33),i=t(65);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{33:33,65:65}],165:[function(t,n,r){var e=t(33);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{33:33}],166:[function(t,n,r){var e=t(33),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},{33:33}],167:[function(t,n,r){var e=t(33),i=t(61);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{33:33,61:61}],168:[function(t,n,r){var e=t(33);e(e.S,"Math",{fround:t(62)})},{33:33,62:62}],169:[function(t,n,r){var e=t(33),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)r=i(arguments[u++]),a<r?(e=a/r,o=o*e*e+1,a=r):r>0?(e=r/a,o+=e*e):o+=r;return a===1/0?1/0:a*Math.sqrt(o)}})},{33:33}],170:[function(t,n,r){var e=t(33),i=Math.imul;e(e.S+e.F*t(35)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},{33:33,35:35}],171:[function(t,n,r){var e=t(33);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},{33:33}],172:[function(t,n,r){var e=t(33);e(e.S,"Math",{log1p:t(63)})},{33:33,63:63}],173:[function(t,n,r){var e=t(33);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{33:33}],174:[function(t,n,r){var e=t(33);e(e.S,"Math",{sign:t(65)})},{33:33,65:65}],175:[function(t,n,r){var e=t(33),i=t(61),o=Math.exp;e(e.S+e.F*t(35)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{33:33,35:35,61:61}],176:[function(t,n,r){var e=t(33),i=t(61),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{33:33,61:61}],177:[function(t,n,r){var e=t(33);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{33:33}],178:[function(t,n,r){"use strict";var e=t(40),i=t(41),o=t(18),u=t(45),c=t(120),a=t(35),f=t(77).f,s=t(75).f,l=t(72).f,h=t(111).trim,v=e.Number,p=v,d=v.prototype,y="Number"==o(t(71)(d)),g="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():h(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof v&&(y?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new p(m(n)),r,v):m(n)};for(var b,x=t(29)?f(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)i(p,b=x[S])&&!i(v,b)&&l(v,b,s(p,b));v.prototype=d,d.constructor=v,t(94)(e,"Number",v)}},{111:111,120:120,18:18,29:29,35:35,40:40,41:41,45:45,71:71,72:72,75:75,77:77,94:94}],179:[function(t,n,r){var e=t(33);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{33:33}],180:[function(t,n,r){var e=t(33),i=t(40).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},{33:33,40:40}],181:[function(t,n,r){var e=t(33);e(e.S,"Number",{isInteger:t(50)})},{33:33,50:50}],182:[function(t,n,r){var e=t(33);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{33:33}],183:[function(t,n,r){var e=t(33),i=t(50),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},{33:33,50:50}],184:[function(t,n,r){var e=t(33);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{33:33}],185:[function(t,n,r){var e=t(33);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{33:33}],186:[function(t,n,r){var e=t(33),i=t(86);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{33:33,86:86}],187:[function(t,n,r){var e=t(33),i=t(87);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{33:33,87:87}],188:[function(t,n,r){"use strict";var e=t(33),i=t(116),o=t(4),u=t(110),c=1..toFixed,a=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=a(r/t),r=r%t*1e7},v=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},p=function(t,n,r){return 0===n?r:n%2==1?p(t,n-1,r*t):p(t*t,n/2,r)},d=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(35)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,a=o(this,s),f=i(t),y="",g="0";if(f<0||f>20)throw RangeError(s);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(y="-",a=-a),a>1e-21)if(n=d(a*p(2,69,1))-69,r=n<0?a*p(2,-n,1):a/p(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=f;e>=7;)l(1e7,0),e-=7;for(l(p(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=v()}else l(0,r),l(1<<-n,0),g=v()+u.call("0",f);return f>0?(c=g.length,g=y+(c<=f?"0."+u.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=y+g,g}})},{110:110,116:116,33:33,35:35,4:4}],189:[function(t,n,r){"use strict";var e=t(33),i=t(35),o=t(4),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{33:33,35:35,4:4}],190:[function(t,n,r){var e=t(33);e(e.S+e.F,"Object",{assign:t(70)})},{33:33,70:70}],191:[function(t,n,r){var e=t(33);e(e.S,"Object",{create:t(71)})},{33:33,71:71}],192:[function(t,n,r){var e=t(33);e(e.S+e.F*!t(29),"Object",{defineProperties:t(73)})},{29:29,33:33,73:73}],193:[function(t,n,r){var e=t(33);e(e.S+e.F*!t(29),"Object",{defineProperty:t(72).f})},{29:29,33:33,72:72}],194:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],195:[function(t,n,r){var e=t(117),i=t(75).f;t(83)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},{117:117,75:75,83:83}],196:[function(t,n,r){t(83)("getOwnPropertyNames",function(){return t(76).f})},{76:76,83:83}],197:[function(t,n,r){var e=t(119),i=t(79);t(83)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},{119:119,79:79,83:83}],198:[function(t,n,r){var e=t(51);t(83)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},{51:51,83:83}],199:[function(t,n,r){var e=t(51);t(83)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},{51:51,83:83}],200:[function(t,n,r){var e=t(51);t(83)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},{51:51,83:83}],201:[function(t,n,r){var e=t(33);e(e.S,"Object",{is:t(96)})},{33:33,96:96}],202:[function(t,n,r){var e=t(119),i=t(81);t(83)("keys",function(){return function keys(t){return i(e(t))}})},{119:119,81:81,83:83}],203:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],204:[function(t,n,r){var e=t(51),i=t(66).onFreeze;t(83)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},{51:51,66:66,83:83}],205:[function(t,n,r){var e=t(33);e(e.S,"Object",{setPrototypeOf:t(99).set})},{33:33,99:99}],206:[function(t,n,r){"use strict";var e=t(17),i={};i[t(128)("toStringTag")]="z",i+""!="[object z]"&&t(94)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},{128:128,17:17,94:94}],207:[function(t,n,r){var e=t(33),i=t(86);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{33:33,86:86}],208:[function(t,n,r){var e=t(33),i=t(87);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{33:33,87:87}],209:[function(t,n,r){"use strict";var e,i,o,u,c=t(60),a=t(40),f=t(25),s=t(17),l=t(33),h=t(51),v=t(3),p=t(6),d=t(39),y=t(104),g=t(113).set,m=t(68)(),b=t(69),x=t(90),S=t(91),w=a.TypeError,_=a.process,E=a.Promise,O="process"==s(_),P=function(){},M=i=b.f,F=!!function(){try{var n=E.resolve(1),r=(n.constructor={})[t(128)("species")]=function(t){t(P,P)};return(O||"function"==typeof PromiseRejectionEvent)&&n.then(P)instanceof r}catch(t){}}(),I=c?function(t,n){return t===n||t===E&&n===u}:function(t,n){return t===n},A=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,a=n.reject,f=n.domain;try{u?(i||(2==t._h&&T(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&f.exit()),r===n.promise?a(w("Promise-chain cycle")):(o=A(r))?o.call(r,c,a):c(r)):a(e)}catch(t){a(t)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&N(t)})}},N=function(t){g.call(a,function(){var n,r,e,i=t._v,o=j(t);if(o&&(n=x(function(){O?_.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=O||j(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},j=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if(n=r[e++],n.fail||!j(n.promise))return!1;return!0},T=function(t){g.call(a,function(){var n;O?_.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},L=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw w("Promise can't be resolved itself");(n=A(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,f(L,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,k(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};F||(E=function Promise(t){p(this,E,"Promise","_h"),v(t),e.call(this);try{t(f(L,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(93)(E.prototype,{then:function then(t,n){var r=M(y(this,E));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=O?_.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&k(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(L,t,1),this.reject=f(R,t,1)},b.f=M=function(t){return I(E,t)?new o(t):i(t)}),l(l.G+l.W+l.F*!F,{Promise:E}),t(101)(E,"Promise"),t(100)("Promise"),u=t(23).Promise,l(l.S+l.F*!F,"Promise",{reject:function reject(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!F),"Promise",{resolve:function resolve(t){return t instanceof E&&I(t.constructor,this)?t:S(this,t)}}),l(l.S+l.F*!(F&&t(56)(function(t){E.all(t).catch(P)})),"Promise",{all:function all(t){var n=this,r=M(n),e=r.resolve,i=r.reject,o=x(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function race(t){var n=this,r=M(n),e=r.reject,i=x(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},{100:100,101:101,104:104,113:113,128:128,17:17,23:23,25:25,
3:3,33:33,39:39,40:40,51:51,56:56,6:6,60:60,68:68,69:69,90:90,91:91,93:93}],210:[function(t,n,r){var e=t(33),i=t(3),o=t(7),u=(t(40).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(35)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},{3:3,33:33,35:35,40:40,7:7}],211:[function(t,n,r){var e=t(33),i=t(71),o=t(3),u=t(7),c=t(51),a=t(35),f=t(16),s=(t(40).Reflect||{}).construct,l=a(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!a(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var a=r.prototype,v=i(c(a)?a:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},{16:16,3:3,33:33,35:35,40:40,51:51,7:7,71:71}],212:[function(t,n,r){var e=t(72),i=t(33),o=t(7),u=t(120);i(i.S+i.F*t(35)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{120:120,33:33,35:35,7:7,72:72}],213:[function(t,n,r){var e=t(33),i=t(75).f,o=t(7);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{33:33,7:7,75:75}],214:[function(t,n,r){"use strict";var e=t(33),i=t(7),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(54)(o,"Object",function(){var t,n=this,r=n._k;do{if(n._i>=r.length)return{value:void 0,done:!0}}while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},{33:33,54:54,7:7}],215:[function(t,n,r){var e=t(75),i=t(33),o=t(7);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},{33:33,7:7,75:75}],216:[function(t,n,r){var e=t(33),i=t(79),o=t(7);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},{33:33,7:7,79:79}],217:[function(t,n,r){function get(t,n){var r,u,f=arguments.length<3?t:arguments[2];return a(t)===f?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(f):void 0:c(u=i(t))?get(u,n,f):void 0}var e=t(75),i=t(79),o=t(41),u=t(33),c=t(51),a=t(7);u(u.S,"Reflect",{get:get})},{33:33,41:41,51:51,7:7,75:75,79:79}],218:[function(t,n,r){var e=t(33);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},{33:33}],219:[function(t,n,r){var e=t(33),i=t(7),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},{33:33,7:7}],220:[function(t,n,r){var e=t(33);e(e.S,"Reflect",{ownKeys:t(85)})},{33:33,85:85}],221:[function(t,n,r){var e=t(33),i=t(7),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{33:33,7:7}],222:[function(t,n,r){var e=t(33),i=t(99);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{33:33,99:99}],223:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],v=i.f(f(t),n);if(!v){if(s(l=o(t)))return set(l,n,r,h);v=a(0)}return u(v,"value")?!(!1===v.writable||!s(h))&&(c=i.f(h,n)||a(0),c.value=r,e.f(h,n,c),!0):void 0!==v.set&&(v.set.call(h,r),!0)}var e=t(72),i=t(75),o=t(79),u=t(41),c=t(33),a=t(92),f=t(7),s=t(51);c(c.S,"Reflect",{set:set})},{33:33,41:41,51:51,7:7,72:72,75:75,79:79,92:92}],224:[function(t,n,r){var e=t(40),i=t(45),o=t(72).f,u=t(77).f,c=t(52),a=t(37),f=e.RegExp,s=f,l=f.prototype,h=/a/g,v=/a/g,p=new f(h)!==h;if(t(29)&&(!p||t(35)(function(){return v[t(128)("match")]=!1,f(h)!=h||f(v)==v||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?a.call(t):n),r?this:l,f)};for(var d=u(s),y=0;d.length>y;)!function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}(d[y++]);l.constructor=f,f.prototype=l,t(94)(e,"RegExp",f)}t(100)("RegExp")},{100:100,128:128,29:29,35:35,37:37,40:40,45:45,52:52,72:72,77:77,94:94}],225:[function(t,n,r){t(29)&&"g"!=/./g.flags&&t(72).f(RegExp.prototype,"flags",{configurable:!0,get:t(37)})},{29:29,37:37,72:72}],226:[function(t,n,r){t(36)("match",1,function(t,n,r){return[function match(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{36:36}],227:[function(t,n,r){t(36)("replace",2,function(t,n,r){return[function replace(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},{36:36}],228:[function(t,n,r){t(36)("search",1,function(t,n,r){return[function search(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{36:36}],229:[function(t,n,r){t(36)("split",2,function(n,r,e){"use strict";var i=t(52),o=e,u=[].push,c="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[c]||2!="ab".split(/(?:ab)*/)[c]||4!=".".split(/(.?)(.?)/)[c]||".".split(/()()/)[c]>1||"".split(/.?/)[c]){var a=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,f,s,l,h,v=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,y=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,p+"g");for(a||(e=new RegExp("^"+g.source+"$(?!\\s)",p));(f=g.exec(r))&&!((s=f.index+f[0][c])>d&&(v.push(r.slice(d,f.index)),!a&&f[c]>1&&f[0].replace(e,function(){for(h=1;h<arguments[c]-2;h++)void 0===arguments[h]&&(f[h]=void 0)}),f[c]>1&&f.index<r[c]&&u.apply(v,f.slice(1)),l=f[0][c],d=s,v[c]>=y));)g.lastIndex===f.index&&g.lastIndex++;return d===r[c]?!l&&g.test("")||v.push(""):v.push(r.slice(d)),v[c]>y?v.slice(0,y):v}}else"0".split(void 0,0)[c]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function split(t,i){var o=n(this),u=void 0==t?void 0:t[r];return void 0!==u?u.call(t,o,i):e.call(String(o),t,i)},e]})},{36:36,52:52}],230:[function(t,n,r){"use strict";t(225);var e=t(7),i=t(37),o=t(29),u=/./.toString,c=function(n){t(94)(RegExp.prototype,"toString",n,!0)};t(35)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function toString(){return u.call(this)})},{225:225,29:29,35:35,37:37,7:7,94:94}],231:[function(t,n,r){"use strict";var e=t(19),i=t(125);n.exports=t(22)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},{125:125,19:19,22:22}],232:[function(t,n,r){"use strict";t(108)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},{108:108}],233:[function(t,n,r){"use strict";t(108)("big",function(t){return function big(){return t(this,"big","","")}})},{108:108}],234:[function(t,n,r){"use strict";t(108)("blink",function(t){return function blink(){return t(this,"blink","","")}})},{108:108}],235:[function(t,n,r){"use strict";t(108)("bold",function(t){return function bold(){return t(this,"b","","")}})},{108:108}],236:[function(t,n,r){"use strict";var e=t(33),i=t(106)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},{106:106,33:33}],237:[function(t,n,r){"use strict";var e=t(33),i=t(118),o=t(107),u="".endsWith;e(e.P+e.F*t(34)("endsWith"),"String",{endsWith:function endsWith(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},{107:107,118:118,33:33,34:34}],238:[function(t,n,r){"use strict";t(108)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},{108:108}],239:[function(t,n,r){"use strict";t(108)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},{108:108}],240:[function(t,n,r){"use strict";t(108)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},{108:108}],241:[function(t,n,r){var e=t(33),i=t(114),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},{114:114,33:33}],242:[function(t,n,r){"use strict";var e=t(33),i=t(107);e(e.P+e.F*t(34)("includes"),"String",{includes:function includes(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{107:107,33:33,34:34}],243:[function(t,n,r){"use strict";t(108)("italics",function(t){return function italics(){return t(this,"i","","")}})},{108:108}],244:[function(t,n,r){"use strict";var e=t(106)(!0);t(55)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{106:106,55:55}],245:[function(t,n,r){"use strict";t(108)("link",function(t){return function link(n){return t(this,"a","href",n)}})},{108:108}],246:[function(t,n,r){var e=t(33),i=t(117),o=t(118);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{117:117,118:118,33:33}],247:[function(t,n,r){var e=t(33);e(e.P,"String",{repeat:t(110)})},{110:110,33:33}],248:[function(t,n,r){"use strict";t(108)("small",function(t){return function small(){return t(this,"small","","")}})},{108:108}],249:[function(t,n,r){"use strict";var e=t(33),i=t(118),o=t(107),u="".startsWith;e(e.P+e.F*t(34)("startsWith"),"String",{startsWith:function startsWith(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},{107:107,118:118,33:33,34:34}],250:[function(t,n,r){"use strict";t(108)("strike",function(t){return function strike(){return t(this,"strike","","")}})},{108:108}],251:[function(t,n,r){"use strict";t(108)("sub",function(t){return function sub(){return t(this,"sub","","")}})},{108:108}],252:[function(t,n,r){"use strict";t(108)("sup",function(t){return function sup(){return t(this,"sup","","")}})},{108:108}],253:[function(t,n,r){"use strict";t(111)("trim",function(t){return function trim(){return t(this,3)}})},{111:111}],254:[function(t,n,r){"use strict";var e=t(40),i=t(41),o=t(29),u=t(33),c=t(94),a=t(66).KEY,f=t(35),s=t(103),l=t(101),h=t(124),v=t(128),p=t(127),d=t(126),y=t(59),g=t(32),m=t(49),b=t(7),x=t(117),S=t(120),w=t(92),_=t(71),E=t(76),O=t(75),P=t(72),M=t(81),F=O.f,I=P.f,A=E.f,k=e.Symbol,N=e.JSON,j=N&&N.stringify,T=v("_hidden"),R=v("toPrimitive"),L={}.propertyIsEnumerable,G=s("symbol-registry"),D=s("symbols"),C=s("op-symbols"),W=Object.prototype,U="function"==typeof k,B=e.QObject,V=!B||!B.prototype||!B.prototype.findChild,z=o&&f(function(){return 7!=_(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=F(W,n);e&&delete W[n],I(t,n,r),e&&t!==W&&I(W,n,e)}:I,q=function(t){var n=D[t]=_(k.prototype);return n._k=t,n},K=U&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},Y=function defineProperty(t,n,r){return t===W&&Y(C,n,r),b(t),n=S(n,!0),b(r),i(D,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:w(0,!1)})):(i(t,T)||I(t,T,w(1,{})),t[T][n]=!0),z(t,n,r)):I(t,n,r)},J=function defineProperties(t,n){b(t);for(var r,e=g(n=x(n)),i=0,o=e.length;o>i;)Y(t,r=e[i++],n[r]);return t},H=function create(t,n){return void 0===n?_(t):J(_(t),n)},X=function propertyIsEnumerable(t){var n=L.call(this,t=S(t,!0));return!(this===W&&i(D,t)&&!i(C,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,T)&&this[T][t])||n)},$=function getOwnPropertyDescriptor(t,n){if(t=x(t),n=S(n,!0),t!==W||!i(D,n)||i(C,n)){var r=F(t,n);return!r||!i(D,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var n,r=A(x(t)),e=[],o=0;r.length>o;)i(D,n=r[o++])||n==T||n==a||e.push(n);return e},Q=function getOwnPropertySymbols(t){for(var n,r=t===W,e=A(r?C:x(t)),o=[],u=0;e.length>u;)!i(D,n=e[u++])||r&&!i(W,n)||o.push(D[n]);return o};U||(k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(C,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),z(this,t,w(1,r))};return o&&V&&z(W,t,{configurable:!0,set:n}),q(t)},c(k.prototype,"toString",function toString(){return this._k}),O.f=$,P.f=Y,t(77).f=E.f=Z,t(82).f=X,t(78).f=Q,o&&!t(60)&&c(W,"propertyIsEnumerable",X,!0),p.f=function(t){return q(v(t))}),u(u.G+u.W+u.F*!U,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)v(tt[nt++]);for(var rt=M(v.store),et=0;rt.length>et;)d(rt[et++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(G,t+="")?G[t]:G[t]=k(t)},keyFor:function keyFor(t){if(K(t))return y(G,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!U,"Object",{create:H,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),N&&u(u.S+u.F*(!U||f(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){if(void 0!==t&&!K(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return n=e[1],"function"==typeof n&&(r=n),!r&&m(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!K(n))return n}),e[1]=n,j.apply(N,e)}}}),k.prototype[R]||t(42)(k.prototype,R,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{101:101,103:103,117:117,120:120,124:124,126:126,127:127,128:128,29:29,32:32,33:33,35:35,40:40,41:41,42:42,49:49,59:59,60:60,66:66,7:7,71:71,72:72,75:75,76:76,77:77,78:78,81:81,82:82,92:92,94:94}],255:[function(t,n,r){"use strict";var e=t(33),i=t(123),o=t(122),u=t(7),c=t(114),a=t(118),f=t(51),s=t(40).ArrayBuffer,l=t(104),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW;e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function isView(t){return p&&p(t)||f(t)&&y in t}}),e(e.P+e.U+e.F*t(35)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function slice(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),f=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,f.getUint8(e++));return o}}),t(100)("ArrayBuffer")},{100:100,104:104,114:114,118:118,122:122,123:123,33:33,35:35,40:40,51:51,7:7}],256:[function(t,n,r){var e=t(33);e(e.G+e.W+e.F*!t(123).ABV,{DataView:t(122).DataView})},{122:122,123:123,33:33}],257:[function(t,n,r){t(121)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],258:[function(t,n,r){t(121)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},{121:121}],259:[function(t,n,r){t(121)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},{121:121}],260:[function(t,n,r){t(121)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],261:[function(t,n,r){t(121)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},{121:121}],262:[function(t,n,r){t(121)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},{121:121}],263:[function(t,n,r){t(121)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},{121:121}],264:[function(t,n,r){t(121)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},{121:121}],265:[function(t,n,r){t(121)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},{121:121}],266:[function(t,n,r){"use strict";var e,i=t(12)(0),o=t(94),u=t(66),c=t(70),a=t(21),f=t(51),s=t(35),l=t(125),h=u.getWeak,v=Object.isExtensible,p=a.ufstore,d={},y=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function get(t){if(f(t)){var n=h(t);return!0===n?p(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function set(t,n){return a.def(l(this,"WeakMap"),t,n)}},m=n.exports=t(22)("WeakMap",y,g,a,!0,!0);s(function(){return 7!=(new m).set((Object.freeze||Object)(d),7).get(d)})&&(e=a.getConstructor(y,"WeakMap"),c(e.prototype,g),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=m.prototype,r=n[t];o(n,t,function(n,i){if(f(n)&&!v(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{12:12,125:125,21:21,22:22,35:35,51:51,66:66,70:70,94:94}],267:[function(t,n,r){"use strict";var e=t(21),i=t(125);t(22)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},{125:125,21:21,22:22}],268:[function(t,n,r){"use strict";var e=t(33),i=t(38),o=t(119),u=t(118),c=t(3),a=t(15);e(e.P,"Array",{flatMap:function flatMap(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),t(5)("flatMap")},{118:118,119:119,15:15,3:3,33:33,38:38,5:5}],269:[function(t,n,r){"use strict";var e=t(33),i=t(38),o=t(119),u=t(118),c=t(116),a=t(15);e(e.P,"Array",{flatten:function flatten(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),t(5)("flatten")},{116:116,118:118,119:119,15:15,33:33,38:38,5:5}],270:[function(t,n,r){"use strict";var e=t(33),i=t(11)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("includes")},{11:11,33:33,5:5}],271:[function(t,n,r){var e=t(33),i=t(68)(),o=t(40).process,u="process"==t(18)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},{18:18,33:33,40:40,68:68}],272:[function(t,n,r){var e=t(33),i=t(18);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},{18:18,33:33}],273:[function(t,n,r){var e=t(33);e(e.G,{global:t(40)})},{33:33,40:40}],274:[function(t,n,r){t(97)("Map")},{97:97}],275:[function(t,n,r){t(98)("Map")},{98:98}],276:[function(t,n,r){var e=t(33);e(e.P+e.R,"Map",{toJSON:t(20)("Map")})},{20:20,33:33}],277:[function(t,n,r){var e=t(33);e(e.S,"Math",{clamp:function clamp(t,n,r){return Math.min(r,Math.max(n,t))}})},{33:33}],278:[function(t,n,r){var e=t(33);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},{33:33}],279:[function(t,n,r){var e=t(33),i=180/Math.PI;e(e.S,"Math",{degrees:function degrees(t){return t*i}})},{33:33}],280:[function(t,n,r){var e=t(33),i=t(64),o=t(62);e(e.S,"Math",{fscale:function fscale(t,n,r,e,u){return o(i(t,n,r,e,u))}})},{33:33,62:62,64:64}],281:[function(t,n,r){var e=t(33);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},{33:33}],282:[function(t,n,r){var e=t(33);e(e.S,"Math",{imulh:function imulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},{33:33}],283:[function(t,n,r){var e=t(33);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},{33:33}],284:[function(t,n,r){var e=t(33);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},{33:33}],285:[function(t,n,r){var e=t(33),i=Math.PI/180;e(e.S,"Math",{radians:function radians(t){return t*i}})},{33:33}],286:[function(t,n,r){var e=t(33);e(e.S,"Math",{scale:t(64)})},{33:33,64:64}],287:[function(t,n,r){var e=t(33);e(e.S,"Math",{signbit:function signbit(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},{33:33}],288:[function(t,n,r){var e=t(33);e(e.S,"Math",{umulh:function umulh(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},{33:33}],289:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(3),u=t(72);t(29)&&e(e.P+t(74),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},{119:119,29:29,3:3,33:33,72:72,74:74}],290:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(3),u=t(72);t(29)&&e(e.P+t(74),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},{119:119,29:29,3:3,33:33,72:72,74:74}],291:[function(t,n,r){var e=t(33),i=t(84)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},{33:33,84:84}],292:[function(t,n,r){var e=t(33),i=t(85),o=t(117),u=t(75),c=t(24);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=o(t),a=u.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=a(e,n=f[l++]))&&c(s,n,r);return s}})},{117:117,24:24,33:33,75:75,85:85}],293:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120),u=t(79),c=t(75).f;t(29)&&e(e.P+t(74),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},{119:119,120:120,29:29,33:33,74:74,75:75,79:79}],294:[function(t,n,r){"use strict";var e=t(33),i=t(119),o=t(120),u=t(79),c=t(75).f;t(29)&&e(e.P+t(74),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},{119:119,120:120,29:29,33:33,74:74,75:75,79:79}],295:[function(t,n,r){var e=t(33),i=t(84)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},{33:33,84:84}],296:[function(t,n,r){"use strict";var e=t(33),i=t(40),o=t(23),u=t(68)(),c=t(128)("observable"),a=t(3),f=t(7),s=t(6),l=t(93),h=t(42),v=t(39),p=v.RETURN,d=function(t){return null==t?void 0:a(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},m=function(t){g(t)||(t._o=void 0,y(t))},b=function(t,n){f(t),this._c=void 0,this._o=t,t=new x(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};b.prototype=l({},{unsubscribe:function unsubscribe(){m(this)}});var x=function(t){this._s=t};x.prototype=l({},{next:function next(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{m(n)}finally{throw t}}}},error:function error(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function complete(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var S=function Observable(t){s(this,S,"Observable","_f")._f=a(t)};l(S.prototype,{subscribe:function subscribe(t){return new b(t,this._f)},forEach:function forEach(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(S,{from:function from(t){var n="function"==typeof this?this:S,r=d(f(t)[c]);if(r){var e=f(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:S)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(S.prototype,c,function(){return this}),e(e.G,{Observable:S}),t(100)("Observable")},{100:100,128:128,23:23,3:3,33:33,39:39,40:40,42:42,6:6,68:68,7:7,93:93}],297:[function(t,n,r){"use strict";var e=t(33),i=t(23),o=t(40),u=t(104),c=t(91);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},{104:104,23:23,33:33,40:40,91:91}],298:[function(t,n,r){"use strict";var e=t(33),i=t(69),o=t(90);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},{33:33,69:69,90:90}],299:[function(t,n,r){var e=t(67),i=t(7),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},{67:67,7:7}],300:[function(t,n,r){var e=t(67),i=t(7),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},{67:67,7:7}],301:[function(t,n,r){var e=t(231),i=t(10),o=t(67),u=t(7),c=t(79),a=o.keys,f=o.key,s=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function getMetadataKeys(t){return s(u(t),arguments.length<2?void 0:f(arguments[1]))}})},{10:10,231:231,67:67,7:7,79:79}],302:[function(t,n,r){var e=t(67),i=t(7),o=t(79),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):void 0};e.exp({getMetadata:function getMetadata(t,n){return f(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},{67:67,7:7,79:79}],303:[function(t,n,r){var e=t(67),i=t(7),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},{67:67,7:7}],304:[function(t,n,r){var e=t(67),i=t(7),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{67:67,7:7}],305:[function(t,n,r){var e=t(67),i=t(7),o=t(79),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function hasMetadata(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},{67:67,7:7,79:79}],306:[function(t,n,r){var e=t(67),i=t(7),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{67:67,7:7}],307:[function(t,n,r){var e=t(67),i=t(7),o=t(3),u=e.key,c=e.set;e.exp({metadata:function metadata(t,n){return function decorator(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},{3:3,67:67,7:7}],308:[function(t,n,r){t(97)("Set")},{97:97}],309:[function(t,n,r){t(98)("Set")},{98:98}],310:[function(t,n,r){var e=t(33);e(e.P+e.R,"Set",{toJSON:t(20)("Set")})},{20:20,33:33}],311:[function(t,n,r){"use strict";var e=t(33),i=t(106)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},{106:106,33:33}],312:[function(t,n,r){"use strict";var e=t(33),i=t(28),o=t(118),u=t(52),c=t(37),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};t(54)(f,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},{118:118,28:28,33:33,37:37,52:52,54:54}],313:[function(t,n,r){"use strict";var e=t(33),i=t(109);e(e.P,"String",{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{109:109,33:33}],314:[function(t,n,r){"use strict";var e=t(33),i=t(109);e(e.P,"String",{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{109:109,33:33}],315:[function(t,n,r){"use strict";t(111)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},{111:111}],316:[function(t,n,r){"use strict";t(111)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},{111:111}],317:[function(t,n,r){t(126)("asyncIterator")},{126:126}],318:[function(t,n,r){t(126)("observable")},{126:126}],319:[function(t,n,r){var e=t(33);e(e.S,"System",{global:t(40)})},{33:33,40:40}],320:[function(t,n,r){t(97)("WeakMap")},{97:97}],321:[function(t,n,r){t(98)("WeakMap")},{98:98}],322:[function(t,n,r){t(97)("WeakSet")},{97:97}],323:[function(t,n,r){t(98)("WeakSet")},{98:98}],324:[function(t,n,r){for(var e=t(141),i=t(81),o=t(94),u=t(40),c=t(42),a=t(58),f=t(128),s=f("iterator"),l=f("toStringTag"),h=a.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),d=0;d<p.length;d++){var y,g=p[d],m=v[g],b=u[g],x=b&&b.prototype;if(x&&(x[s]||c(x,s,h),x[l]||c(x,l,g),a[g]=h,m))for(y in e)x[y]||o(x,y,e[y],!0)}},{128:128,141:141,40:40,42:42,58:58,81:81,94:94}],325:[function(t,n,r){var e=t(33),i=t(113);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{113:113,33:33}],326:[function(t,n,r){var e=t(40),i=t(33),o=t(46),u=t(88),c=e.navigator,a=!!c&&/MSIE .\./.test(c.userAgent),f=function(t){return a?function(n,r){return t(o(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),r)}:t};i(i.G+i.B+i.F*a,{setTimeout:f(e.setTimeout),setInterval:f(e.setInterval)})},{33:33,40:40,46:46,88:88}],327:[function(t,n,r){t(254),t(191),t(193),t(192),t(195),t(197),t(202),t(196),t(194),t(204),t(203),t(199),t(200),t(198),t(190),t(201),t(205),t(206),t(157),t(159),t(158),t(208),t(207),t(178),t(188),t(189),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(187),t(161),t(162),t(163),t(164),t(165),t(166),t(167),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(177),t(241),t(246),t(253),t(244),t(236),t(237),t(242),t(247),t(249),t(232),t(233),t(234),t(235),t(238),t(239),t(240),t(243),t(245),t(248),t(250),t(251),t(252),t(152),t(154),t(153),t(156),t(155),t(140),t(138),t(145),t(142),t(148),t(150),t(137),t(144),t(134),t(149),t(132),t(147),t(146),t(139),t(143),t(131),t(133),t(136),t(135),t(151),t(141),t(224),t(230),t(225),t(226),t(227),t(228),t(229),t(209),t(160),t(231),t(266),t(267),t(255),t(256),t(261),t(264),t(265),t(259),t(262),t(260),t(263),t(257),t(258),t(210),t(211),t(212),t(213),t(214),t(217),t(215),t(216),t(218),t(219),t(220),t(221),t(223),t(222),t(270),t(268),t(269),t(311),t(314),t(313),t(315),t(316),t(312),t(317),t(318),t(292),t(295),t(291),t(289),t(290),t(293),t(294),t(276),t(310),t(275),t(309),t(321),t(323),t(274),t(308),t(320),t(322),t(273),t(319),t(272),t(277),t(278),t(279),t(280),t(281),t(283),t(282),t(284),t(285),t(286),t(288),t(287),t(297),t(298),t(299),t(300),t(302),t(301),t(304),t(303),t(305),t(306),t(307),t(271),t(296),t(326),t(325),t(324),n.exports=t(23)},{131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,
186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,23:23,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,268:268,269:269,270:270,271:271,272:272,273:273,274:274,275:275,276:276,277:277,278:278,279:279,280:280,281:281,282:282,283:283,284:284,285:285,286:286,287:287,288:288,289:289,290:290,291:291,292:292,293:293,294:294,295:295,296:296,297:297,298:298,299:299,300:300,301:301,302:302,303:303,304:304,305:305,306:306,307:307,308:308,309:309,310:310,311:311,312:312,313:313,314:314,315:315,316:316,317:317,318:318,319:319,320:320,321:321,322:322,323:323,324:324,325:325,326:326}],328:[function(t,n,r){(function(t){!function(t){"use strict";function wrap(t,n,r,e){var i=n&&n.prototype instanceof Generator?n:Generator,o=Object.create(i.prototype),u=new Context(e||[]);return o._invoke=makeInvokeMethod(t,r,u),o}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AsyncIterator(n){function invoke(t,r,e,o){var u=tryCatch(n[t],n,r);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&i.call(a,"__await")?Promise.resolve(a.__await).then(function(t){invoke("next",t,e,o)},function(t){invoke("throw",t,e,o)}):Promise.resolve(a).then(function(t){c.value=t,e(c)},o)}o(u.arg)}function enqueue(t,n){function callInvokeWithMethodAndArg(){return new Promise(function(r,e){invoke(t,n,r,e)})}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof t.process&&t.process.domain&&(invoke=t.process.domain.bind(invoke));var r;this._invoke=enqueue}function makeInvokeMethod(t,n,r){var e=l;return function invoke(i,o){if(e===v)throw new Error("Generator is already running");if(e===p){if("throw"===i)throw o;return doneResult()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=maybeInvokeDelegate(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=v;var a=tryCatch(t,n,r);if("normal"===a.type){if(e=r.done?p:h,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=p,r.method="throw",r.arg=a.arg)}}}function maybeInvokeDelegate(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,maybeInvokeDelegate(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=tryCatch(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function next(){for(;++e<t.length;)if(i.call(t,e))return next.value=t[e],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",f="object"==typeof n,s=t.regeneratorRuntime;if(s)return void(f&&(n.exports=s));s=t.regeneratorRuntime=f?n.exports:{},s.wrap=wrap;var l="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},y={};y[u]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(values([])));m&&m!==e&&i.call(m,u)&&(y=m);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(y);GeneratorFunction.prototype=b.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[a]=GeneratorFunction.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[c]=function(){return this},s.AsyncIterator=AsyncIterator,s.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return s.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(b),b[a]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},s.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(e,i){return u.type="throw",u.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}if(this.done)throw t;for(var n=this,e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],u=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),a=i.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:values(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);
