define("mix/core/util/dom/selector/1.0.0/selector",[],function(e,t,n){function O(e){return N.call(e)=="[object Function]"}function M(e){return e instanceof Object}function _(e){return M(e)&&e.__proto__==Object.prototype}function D(e){return e instanceof Array}function P(e){return typeof e.length=="number"}function H(e){return e.filter(function(e){return e!==r&&e!==null})}function B(e){return e.length>0?s.fn.concat.apply([],e):e}function j(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function F(e){return e in c?c[e]:c[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function I(e,t){return typeof t=="number"&&!p[j(e)]?t+"px":t}function q(e){var t,n;return l[e]||(t=f.createElement(e),f.body.appendChild(t),n=h(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),l[e]=n),l[e]}function R(e,t){return t===r?s(e):s(e).filter(t)}function U(e,t,n,r){return O(t)?t.call(e,n,r):t}function z(e,t,n){var r=e%2?t:t.parentNode;r?r.insertBefore(n,e?e==1?r.firstChild:e==2?t:null:t.nextSibling):s(n).remove()}function W(e,t){t(e);for(var n in e.childNodes)W(e.childNodes[n],t)}var r,i,s,o,u=[],a=u.slice,f=window.document,l={},c={},h=f.defaultView.getComputedStyle,p={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},d=/^\s*<(\w+|!)[^>]*>/,v=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,m=[1,3,8,9,11],g=["after","prepend","before","append"],y=f.createElement("table"),b=f.createElement("tr"),w={tr:f.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:b,th:b,"*":f.createElement("div")},E=/complete|loaded|interactive/,S=/^\.([\w-]+)$/,x=/^#([\w-]+)$/,T=/^[\w-]+$/,N={}.toString,C={},k,L,A=f.createElement("div");C.matches=function(e,t){if(!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=A).appendChild(e),r=~C.qsa(i,t).indexOf(e),s&&A.removeChild(e),r},k=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},L=function(e){return e.filter(function(t,n){return e.indexOf(t)==n})},C.fragment=function(e,t){e.replace&&(e=e.replace(v,"<$1></$2>")),t===r&&(t=d.test(e)&&RegExp.$1),t in w||(t="*");var n=w[t];return n.innerHTML=""+e,s.each(a.call(n.childNodes),function(){n.removeChild(this)})},C.Z=function(e,t){return e=e||[],e.__proto__=arguments.callee.prototype,e.selector=t||"",e},C.isZ=function(e){return e instanceof C.Z},C.init=function(e,t){if(!e)return C.Z();if(O(e))return s(f).ready(e);if(C.isZ(e))return e;var n;if(D(e))n=H(e);else if(_(e))n=[s.extend({},e)],e=null;else if(m.indexOf(e.nodeType)>=0||e===window)n=[e],e=null;else if(d.test(e))n=C.fragment(e.trim(),RegExp.$1),e=null;else{if(t!==r)return s(t).find(e);n=C.qsa(f,e)}return C.Z(n,e)},s=function(e,t){return C.init(e,t)},s.extend=function(e){return a.call(arguments,1).forEach(function(t){for(i in t)t[i]!==r&&(e[i]=t[i])}),e},C.qsa=function(e,t){var n;return e===f&&x.test(t)?(n=e.getElementById(RegExp.$1))?[n]:u:e.nodeType!==1&&e.nodeType!==9?u:a.call(S.test(t)?e.getElementsByClassName(RegExp.$1):T.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},s.isFunction=O,s.isObject=M,s.isArray=D,s.isPlainObject=_,s.inArray=function(e,t,n){return u.indexOf.call(t,e,n)},s.trim=function(e){return e.trim()},s.uuid=0,s.map=function(e,t){var n,r=[],i,s;if(P(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return B(r)},s.each=function(e,t){var n,r;if(P(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},window.JSON&&(s.parseJSON=JSON.parse),s.fn={forEach:u.forEach,reduce:u.reduce,push:u.push,indexOf:u.indexOf,concat:u.concat,map:function(e){return s.map(this,function(t,n){return e.call(t,n,t)})},slice:function(){return s(a.apply(this,arguments))},ready:function(e){return E.test(f.readyState)?e(s):f.addEventListener("DOMContentLoaded",function(){e(s)},!1),this},get:function(e){return e===r?a.call(this):this[e]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return this.forEach(function(t,n){e.call(t,n,t)}),this},filter:function(e){return O(e)?this.not(this.not(e)):s([].filter.call(this,function(t){return C.matches(t,e)}))},add:function(e,t){return s(L(this.concat(s(e,t))))},is:function(e){return this.length>0&&C.matches(this[0],e)},not:function(e){var t=[];if(O(e)&&e.call!==r)this.each(function(n){e.call(this,n)||t.push(this)});else{var n=typeof e=="string"?this.filter(e):P(e)&&O(e.item)?a.call(e):s(e);this.forEach(function(e){n.indexOf(e)<0&&t.push(e)})}return s(t)},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!M(e)?e:s(e)},last:function(){var e=this[this.length-1];return e&&!M(e)?e:s(e)},find:function(e){var t;return this.length==1?t=C.qsa(this[0],e):t=this.map(function(){return C.qsa(this,e)}),s(t)},closest:function(e,t){var n=this[0];while(n&&!C.matches(n,e))n=n!==t&&n!==f&&n.parentNode;return s(n)},parents:function(e){var t=[],n=this;while(n.length>0)n=s.map(n,function(e){if((e=e.parentNode)&&e!==f&&t.indexOf(e)<0)return t.push(e),e});return R(t,e)},parent:function(e){return R(L(this.pluck("parentNode")),e)},children:function(e){return R(this.map(function(){return a.call(this.children)}),e)},contents:function(){return s(this.map(function(){return a.call(this.childNodes)}))},siblings:function(e){return R(this.map(function(e,t){return a.call(t.parentNode.children).filter(function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return this.map(function(){return this[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),h(this,"").getPropertyValue("display")=="none"&&(this.style.display=q(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return this.each(function(){s(this).wrapAll(s(e)[0].cloneNode(!1))})},wrapAll:function(e){return this[0]&&(s(this[0]).before(e=s(e)),e.append(this)),this},wrapInner:function(e){return this.each(function(){var t=s(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},unwrap:function(){return this.parent().each(function(){s(this).replaceWith(s(this).children())}),this},clone:function(){return s(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(e){return(e===r?this.css("display")=="none":e)?this.show():this.hide()},prev:function(e){return s(this.pluck("previousElementSibling")).filter(e||"*")},next:function(e){return s(this.pluck("nextElementSibling")).filter(e||"*")},html:function(e){return e===r?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;s(this).empty().append(U(this,e,t,n))})},text:function(e){return e===r?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,t){var n;return typeof e=="string"&&t===r?this.length==0||this[0].nodeType!==1?r:e=="value"&&this[0].nodeName=="INPUT"?this.val():!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n:this.each(function(n){if(this.nodeType!==1)return;if(M(e))for(i in e)this.setAttribute(i,e[i]);else this.setAttribute(e,U(this,t,n,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&this.removeAttribute(e)})},prop:function(e,t){return t===r?this[0]?this[0][e]:r:this.each(function(n){this[e]=U(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+j(e),t);return n!==null?n:r},val:function(e){return e===r?this.length>0?this[0].multiple?s(this[0]).find("option").filter(function(e){return this.selected}).pluck("value"):this[0].value:r:this.each(function(t){this.value=U(this,e,t,this.value)})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(e,t){if(t===r&&typeof e=="string")return this.length==0?r:this[0].style[k(e)]||h(this[0],"").getPropertyValue(e);var n="";for(i in e)typeof e[i]=="string"&&e[i]==""?this.each(function(){this.style.removeProperty(j(i))}):n+=j(i)+":"+I(i,e[i])+";";return typeof e=="string"&&(t==""?this.each(function(){this.style.removeProperty(j(e))}):n=j(e)+":"+I(e,t)),this.each(function(){this.style.cssText+=";"+n})},index:function(e){return e?this.indexOf(s(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return this.length<1?!1:F(e).test(this[0].className)},addClass:function(e){return this.each(function(t){o=[];var n=this.className,r=U(this,e,t,n);r.split(/\s+/g).forEach(function(e){s(this).hasClass(e)||o.push(e)},this),o.length&&(this.className+=(n?" ":"")+o.join(" "))})},removeClass:function(e){return this.each(function(t){if(e===r)return this.className="";o=this.className,U(this,e,t,o).split(/\s+/g).forEach(function(e){o=o.replace(F(e)," ")}),this.className=o.trim()})},toggleClass:function(e,t){return this.each(function(n){var i=U(this,e,n,this.className);(t===r?!s(this).hasClass(i):t)?s(this).addClass(i):s(this).removeClass(i)})}},["width","height"].forEach(function(e){s.fn[e]=function(t){var n,i=e.replace(/./,function(e){return e[0].toUpperCase()});return t===r?this[0]==window?window["inner"+i]:this[0]==f?f.documentElement["offset"+i]:(n=this.offset())&&n[e]:this.each(function(n){var r=s(this);r.css(e,U(this,t,n,r[e]()))})}}),g.forEach(function(e,t){s.fn[e]=function(){var e=s.map(arguments,function(e){return M(e)?e:C.fragment(e)});if(e.length<1)return this;var n=this.length,r=n>1,i=t<2;return this.each(function(s,o){for(var u=0;u<e.length;u++){var a=e[i?e.length-u-1:u];W(a,function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&window.eval.call(window,e.innerHTML)}),r&&s<n-1&&(a=a.cloneNode(!0)),z(t,o,a)}})},s.fn[t%2?e+"To":"insert"+(t?"Before":"After")]=function(t){return s(t)[e](this),this}}),C.Z.prototype=s.fn,C.camelize=k,C.uniq=L,s.zepto=C,n.exports=s});