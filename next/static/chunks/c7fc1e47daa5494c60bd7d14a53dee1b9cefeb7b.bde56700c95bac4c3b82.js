(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1/UH":function(t,e,n){},"1UZS":function(t,e,n){},"2LUv":function(t,e,n){var r=n("m1Oa"),a=n("o/EK"),o=n("ShTl"),i=n("sJOi");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},"5dyF":function(t,e,n){t.exports=n("9CGT")},"9CGT":function(t,e,n){"use strict";var r=n("fwM5"),a=n("bkNG"),o=n("5YB7"),i=n("Y8Bl"),c=n("7osH");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=n("mYab"),l=n("HIQq");e.__esModule=!0,e.default=void 0;var f,p=l(n("mXGw")),d=n("ly6l"),h=n("z4BS"),m=s(n("bBV7")),v=n("a4i1");function b(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var y=new Map,g=window.IntersectionObserver,w={};function O(){return f||(g?f=new g((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){o(s,t);var e,n=(e=s,function(){var t,n=c(e);if(u()){var r=c(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function s(t){var e;return r(this,s),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(a,o){if(r&&a===e&&o===n)return r;var i=t(a,o);return e=a,n=o,r=i,i}}((function(t,e){return{href:(0,v.addBasePath)(b(t)),as:e?(0,v.addBasePath)(b(e)):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,c=o.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var u=window.location.pathname;i=(0,d.resolve)(u,i),c=c?(0,d.resolve)(u,c):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return a(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,a=(0,d.resolve)(t,n);return[a,r?(0,d.resolve)(t,r):a]}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=O();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var o=p.Children.only(e),i={ref:function(e){t.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),s}(p.Component);e.default=k},"9fEB":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=s,e.default=void 0;var r=u(n("mXGw")),a=u(n("GlZI")),o=n("9rrO"),i=n("bxxT"),c=n("vI6Y");function u(t){return t&&t.__esModule?t:{default:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,a.default)();function h(t){var e=t.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var m=h;e.default=m},"9rrO":function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},A93f:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return b}));var r=n("hisu"),a=n("yBJb"),o=n("0942"),i=n("CHlC"),c=n("kMo5"),u=n("P+uj"),s=n("mXGw"),l=n.n(s),f=n("pTEG"),p=(n("CnZi"),l.a.createElement);function d(t){return function(){var e,n=Object(u.a)(t);if(h()){var r=Object(u.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(c.a)(this,e)}}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(i.a)(n,t);var e=d(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).onClick=a.onClick.bind(Object(o.a)(a)),a}return Object(a.a)(n,[{key:"onClick",value:function(t){var e,n=this,r=window.gtag,a=!1,o=function(){if(!a&&(a=!0,e)){if("subscribe"===n.props.l10nId&&window.fxaFlowParams){var t=window.fxaFlowParams,r=new URL(e,document.location.origin);r.searchParams.append("device-id",t.deviceId),r.searchParams.append("flow-begin-time",t.flowBeginTime),r.searchParams.append("flow-id",t.flowId),e=r.href}document.location.href=e}};r&&((e=this.props.href)&&t.preventDefault(),r("event","".concat(window.location.pathname," interactions"),{event_category:"button click",event_label:this.props.eventLabel,event_callback:o}),setTimeout(o,100))}}]),n}(l.a.Component),v=function(t){Object(i.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.href,n=t.target,r=t.rel,a=t.l10nId;return p("a",{href:e,target:n,rel:r,onClick:this.onClick},p(f.b,{id:a},p("button",{className:"".concat(a," cta")})))}}]),n}(m),b=function(t){Object(i.a)(n,t);var e=d(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return p(f.b,{id:"submit-button"},p("button",{className:"submit-button cta",onClick:this.onClick}))}}]),n}(m)},AxI1:function(t,e,n){},CnZi:function(t,e,n){},Dtli:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var r=n("hisu"),a=n("yBJb"),o=n("0942"),i=n("CHlC"),c=n("kMo5"),u=n("P+uj"),s=n("mK0O"),l=n("mXGw"),f=n.n(l),p=n("9fEB"),d=n.n(p),h=n("pTEG"),m=n("c8zj"),v=(n("uO2j"),f.a.createElement);function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(i.a)(o,t);var e,n=(e=o,function(){var t,n=Object(u.a)(e);if(b()){var r=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){var t=this.context.isSubscribed,e=this.props.user,n=encodeURIComponent(e.email);return v("div",{className:"account-menu-wrapper"},v(h.b,{id:"user-avatar",attrs:{"aria-label":!0}},v("div",{className:"user-avatar"},v("img",{src:e.avatar,alt:e.display_name||e.email}))),v("div",{className:"account-menu"},v("div",{className:"account-menu-links"},v("div",{className:"user-info"},v(h.b,{id:"signed-in-as",elems:{user:v("span",null)},vars:{user:e.email}},v("span",{className:"signed-in-as"}))),v(h.b,{id:"manage-account"},v("a",{href:"/r/vpn/account?email=".concat(n),target:"_blank",className:"manage-account"})),t&&v(h.b,{id:"manage-subscription"},v("a",{href:"/r/vpn/subscription?email=".concat(n),target:"_blank",className:"manage-subscription"})),v("div",{className:"separator"}),t&&v(h.b,{id:"contact-us"},v("a",{href:"/r/vpn/contact?email=".concat(n),target:"_blank",className:"support"})),v(h.b,{id:"help-and-support"},v("a",{href:"/r/vpn/support?utm_medium=referral&utm_source=fpn.firefox.com&utm_campaign=account-menu-link&email=".concat(n),target:"_blank",className:"support"})),v("div",{className:"separator"}),v(h.b,{id:"sign-out"},v("a",{href:"/oauth/logout",className:"sign-out"})))))}}]),o}(f.a.Component);Object(s.a)(y,"contextType",m.b);var g=n("owvW"),w=n("A93f"),O=(n("1/UH"),f.a.createElement);function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(i.a)(o,t);var e,n=(e=o,function(){var t,n=Object(u.a)(e);if(k()){var r=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){var t=this.context.path,e=this.props.user,n=!!e,r="/vpn";return t&&t.startsWith("/browser")&&(r="/browser"),O("header",null,O("div",{className:"header-wrapper"},O("div",{className:"guardian-logo"},O(g.a,{l10nId:"site-title",l10nAttrs:{"aria-label":!0},href:r})),"/browser"!==r&&n&&O("nav",null,O(y,{user:e})),"/browser"!==r&&!n&&O(w.a,{href:"/oauth/init",l10nId:"sign-in",eventLabel:"Sign in (vpn)"})))}}]),o}(f.a.Component);Object(s.a)(j,"contextType",m.b);n("AxI1");var C=f.a.createElement;function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=function(t){Object(i.a)(o,t);var e,n=(e=o,function(){var t,n=Object(u.a)(e);if(S()){var r=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return C("footer",null,C("ul",null,C("li",{className:"ff-link"},C("a",{href:"https://www.mozilla.org","aria-label":"Firefox"},C("img",{src:"/images/logo-firefox-svcs.svg","aria-hidden":"true",alt:""}))),C("li",null,C(h.b,{id:"footer-privacy"},C("a",{href:"https://www.mozilla.org/privacy/firefox-private-network",target:"_blank",rel:"noopener"}))),C("li",null,C(h.b,{id:"footer-terms"},C("a",{href:"https://www.mozilla.org/about/legal/terms/firefox-private-network",target:"_blank",rel:"noopener"}))),C("li",null,C(h.b,{id:"footer-cookies"},C("a",{href:"https://www.mozilla.org/privacy/websites/#cookies",target:"_blank",rel:"noopener"}))),C("li",null,C(h.b,{id:"footer-legal"},C("a",{href:"https://www.mozilla.org/about/legal/",target:"_blank",rel:"noopener"}))),C("li",{className:"moz-link"},C("a",{href:"https://www.mozilla.org","aria-label":"Mozilla"},C("img",{src:"/images/logo-mozilla.svg","aria-hidden":"true",alt:""})))))}}]),o}(f.a.Component),x=n("LdMO"),_=(n("1UZS"),n("VTQg"),f.a.createElement);function E(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var P=function(t){Object(i.a)(s,t);var e,n=(e=s,function(){var t,n=Object(u.a)(e);if(E()){var r=Object(u.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function s(t){var e;return Object(r.a)(this,s),(e=n.call(this,t)).onScroll=Object(x.debounce)(e.onScroll.bind(Object(o.a)(e)),5),e.state={isPageScrolled:!1},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.onScroll(),window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){window.pageYOffset>0&&!this.state.isPageScrolled?this.setState({isPageScrolled:!0}):0===window.pageYOffset&&this.state.isPageScrolled&&this.setState({isPageScrolled:!1})}},{key:"render",value:function(){var t=this.context,e=t.baseUrl,n=t.fxaUrl,r=t.path,a=t.noRobots,o=t.user,i=this.props,c=i.children,u=i.title,s=i.description,l=i.className,f=i.onlyContent,p=this.state.isPageScrolled,h="/images/social-fpn.png";return"/browser"===r?h="/images/social-fpn-browser.png":r&&0===r.indexOf("/vpn")&&(h="/images/social-fpn-vpn.png"),_("div",{className:"page-container ".concat(l).concat(p?" page-scrolled":"")},_(d.a,null,_("meta",{charSet:"utf-8"}),_("title",null,u),_("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, viewport-fit=cover"}),_("meta",{name:"description",content:s}),_("meta",{property:"og:description",content:s}),_("meta",{property:"og:image",content:"".concat(e).concat(h)}),_("meta",{property:"og:title",content:u}),_("meta",{property:"og:url",content:e+r}),_("meta",{name:"twitter:card",content:"summary_large_image"}),_("meta",{name:"twitter:description",content:s}),_("meta",{name:"twitter:title",content:u}),_("meta",{name:"fxa",content:n}),a&&_("meta",{name:"robots",content:"noindex,nofollow"})),!f&&_(j,{user:o}),_("main",null,c),!f&&_(R,null))}}]),s}(f.a.Component);Object(s.a)(P,"contextType",m.b)},GlZI:function(t,e,n){"use strict";var r=n("fwM5"),a=n("0pOA"),o=n("bkNG"),i=n("5YB7"),c=n("Y8Bl"),u=n("7osH"),s=n("2LUv");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}e.__esModule=!0,e.default=void 0;var f=n("mXGw"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(s){i(h,s);var f,d=(f=h,function(){var t,e=u(f);if(l()){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function h(t){var o;return r(this,h),o=d.call(this,t),p&&(e.add(a(o)),n(a(o))),o}return o(h,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),o(h,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(f.Component))}},LdMO:function(t,e){e.debounce=function(t,e,n){var r;return void 0===e&&(e=50),void 0===n&&(n={isImmediate:!1}),function(){for(var a=[],o=arguments.length;o--;)a[o]=arguments[o];var i=this,c=n.isImmediate&&void 0===r;void 0!==r&&clearTimeout(r),r=setTimeout((function(){r=void 0,n.isImmediate||t.apply(i,a)}),e),c&&t.apply(i,a)}}},VTQg:function(t,e,n){},m1Oa:function(t,e,n){var r=n("z3mR");t.exports=function(t){if(Array.isArray(t))return r(t)}},mK0O:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},"o/EK":function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},owvW:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("hisu"),a=n("yBJb"),o=n("CHlC"),i=n("kMo5"),c=n("P+uj"),u=n("mXGw"),s=n.n(u),l=n("5dyF"),f=n.n(l),p=n("pTEG"),d=s.a.createElement;function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(o.a)(u,t);var e,n=(e=u,function(){var t,n=Object(c.a)(e);if(h()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(i.a)(this,t)});function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,r=t.href,a=t.l10nAttrs,o=t.l10nId,i=d(s.a.Fragment,null);return e?i=d("a",{className:n,href:r},e):o&&(i=d("a",{className:n,href:r},d(p.b,{id:o,attrs:a},d("span",null)))),d(f.a,{href:r},i)}}]),u}(s.a.Component)},sJOi:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uO2j:function(t,e,n){},vI6Y:function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("mXGw"))&&r.__esModule?r:{default:r},o=n("9rrO");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery;return n||a&&(void 0!==o&&o)}}}]);