!function(a,b){var c=a.document,d=(b.config,50);b.plugin.pullbounce={_options:null,_page:null,_pullType:!1,_onPullStart:function(){var a=this._page,b=this._options,c=a.el.parentNode;b.onPullDown&&(c.querySelector("#J_pullRefresh").style.visibility="visible"),b.onPullUp&&(c.querySelector("#J_pullUpdate").style.visibility="visible")},_onPullDown:function(a){var b=this._page,c=b.el.parentNode.querySelector("#J_pullRefresh span"),d=c.innerText;a>50&&"松开即刷新"!==d?c.innerText="松开即刷新":50>a&&"下拉可刷新"!==d&&(c.innerText="下拉可刷新")},_onPullUp:function(a){var b=this._page,c=b.el.parentNode.querySelector("#J_pullUpdate span"),d=c.innerText;a>50&&"松开即加载更多"!==d?c.innerText="松开即加载更多":50>a&&"上拉可加载更多"!==d&&(c.innerText="上拉可加载更多")},_onPullEnd:function(){b.scroll.refresh(),b.scroll.resumeBounce()},handleEvent:function(a){var c=this,e=this._page,f=this._options,g=b.scroll.getBoundaryOffset();"panstart"===a.type?this._onPullStart():"pulldown"===a.type?(this._pullType=g>d?"PullDown":!1,this._onPullDown(g)):"pullup"===a.type?(this._pullType=g>d?"PullUp":!1,this._onPullUp(g)):"panend"===a.type&&g&&this._pullType&&(b.scroll.stopBounce(),setTimeout(function(){var a=f["on"+c._pullType];"string"==typeof a&&(a=e[a]),a?a.call(e,c._onPullEnd):c._onPullEnd()},400))},onAppStart:function(){var a=c.styleSheets[0];a.addRule("#J_pullRefresh, #J_pullUpdate",["visibility: hidden;","width: 100%;","padding: 10px;","height: "+d+"px;","line-height: 30px;","box-sizing: border-box;","background-color: #FFF;","font-size: 12px;","color: #999;"].join(""))},onPageDefine:function(a,b){a.scroll={bounceTop:b.onPullDown?d:0,bounceBottom:b.onPullUp?d:0}},onPageStartup:function(a,b){a.el.innerHTML=(b.onPullDown?'<section id="J_pullRefresh"><span>下拉可刷新</span></section>':"")+'<section id="J_pullContent"></section>'+(b.onPullUp?'<section id="J_pullUpdate"><span>上拉可加载更多</span></section>':""),a.el=a.el.querySelector("#J_pullContent")},onPageShow:function(a,c){"J_pullContent"!==a.el.getAttribute("id")&&(a.el=a.el.querySelector("#J_pullContent")),this._page=a,this._options=c,this._pullType=!1,c.onPullDown&&b.scroll.addEventListener("pulldown",this,!1),c.onPullUp&&b.scroll.addEventListener("pullup",this,!1),b.scroll.addEventListener("panstart",this,!1),b.scroll.addEventListener("panend",this,!1)},onPageHide:function(a,c){c.onPullDown&&b.scroll.removeEventListener("pulldown",this,!1),c.onPullUp&&b.scroll.removeEventListener("pullup",this,!1),b.scroll.removeEventListener("panstart",this,!1),b.scroll.removeEventListener("panend",this,!1)}}}(window,window.app);