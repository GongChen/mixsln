define("mix/core/ui/component/0.2.0/component",["mix/core/base/reset/1.0.0/reset","mix/core/base/class/1.0.0/class","mix/core/base/message/1.0.0/message","mix/core/ui/template/0.2.0/template","mix/libs/handlebars/1.0.5/handlebars","mix/core/ui/module/0.1.0/module","mix/core/util/dom/selector/1.0.0/selector","mix/core/util/dom/event/1.0.0/event"],function(e,t,n){function v(e,t){var n=f.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("rel","stylesheet"),n.setAttribute("id","stylesheet-component-"+e),n.innerText=t,l.appendChild(n)}function m(e){var t="stylesheet-component-"+e,n=f.getElemenetById(t);l.removeChild(n)}e("mix/core/base/reset/1.0.0/reset");var r=e("mix/core/base/class/1.0.0/class"),i=e("mix/core/base/message/1.0.0/message"),s=e("mix/core/ui/template/0.2.0/template"),o=e("mix/core/ui/module/0.1.0/module"),u=e("mix/core/util/dom/selector/1.0.0/selector"),a=window,f=a.document,l=f.getElementsByTagName("head")[0],c=undefined,h={debug:!0},p={},d=o.extend({initialize:function(e,t){var n=this;d.superclass.initialize.call(n,e,t),n.__dataChanged=c},_initData:function(e){var t=this;t.__data=Object.extend({},e,!0)},_initTemplate:function(e,t,n){var r=this,i;i=r.__tmpl=new s(r.__name,"component"),t&&i.addHelper(t),n&&i.addPartial(n),r.__tmpl.compile(e)},_findDataPath:function(e,t){return Object.each(t,function(t){if(!e.hasOwnProperty(t))return c;e=e[t]}),e},getData:function(e){var t=this,n=t.__data,r;typeof e=="string"&&(e=e.split(".")),r=e.pop(),n=t._findDataPath(n,e);if(n)return n[r]},setData:function(e,t,n){var r=this,i=r.__data,s,o,u;if(!(!Object.isTypeof(u=e,"object")||u instanceof Array)){n=t,Object.each(u,function(e,t){r.setData(t,e,n)});return}if(t==c)return;typeof e=="string"&&(e=e.split(".")),o=e.pop(),i=r._findDataPath(i,e),i&&(i[o]=Object.clone(t,!0),n||(e.push(o),s=r.__dataChanged||(r.__dataChanged={}),s[e.join(".")]=i[o]))},render:function(e){var t=this,e=e||t.__data,n=t.__tmpl,r,i,s;return n.all(e),r=t.__domObj=u(n._nodeList),i=t.__domId=t.__domId||r.attr("id")||t.__name+"-"+(new Date).getTime(),s=t.__domName=t.__domName||r.attr("name")||t.__name,r.attr("id",i),r.attr("name",s),d.superclass.render.call(t,r),r},update:function(e,t){var n=this,r=n.__dataChanged,i=n.__tmpl,s=n.__domObj;e&&t&&(r={},r[e]=t),n._disattach(s),r?Object.each(r,function(e,t){i.update(t,e)}):i.update("",n.__data),s=n.__domObj=u(i._nodeList),s.attr("id",n.__domId),s.attr("name",n.__domName),n._attach(s),delete n.__dataChanged},destroy:function(){var e=this,t=e.__tmpl,n=e.getDom();n.remove(),t.destroy(),d.superclass.destroy.call(e),delete e.__data,delete e.__dataChanged}});d.register=function(e,t,n,r){if(p[e])return;v(e,r);var i=d.extend({initialize:function(r,s,o,u){var a=this;i.superclass.initialize.call(a,e,"component"),a.__domId=r,a.__domName=s,a._initOptions(t.OPTIONS||{}),a._initAttrs(t.ATTRS||{}),a._initData(t.DATA||{}),a._initEvents(t.EVENTS||[]),a._initAttach(t.ATTACH||{}),a._initTemplate(n,t.TMPL_HELPER,t.TMPL_PARTIAL),t.CONSTRUCTOR.call(a,o,u)}});return i.implement(t.METHOD),Object.extend(i,t.CONST||{}),p[e]=i},d.depos=function(e){if(!p[e])throw new Error('Component "'+e+'" has not defined');return p[e]},d.options=function(e){h=Object.extend(h,e)},n.exports=d});