(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{583:(e,t,r)=>{"use strict";e.exports=r(6531)},859:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1996:(e,t,r)=>{e.exports=r(5192)()},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},n=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function o(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,i]of Object.entries(t)){if(!t.hasOwnProperty(a)||n.includes(a)||void 0===i)continue;let s=r[a]||a.toLowerCase();"SCRIPT"===e.tagName&&o(s)?e[s]=!!i:e.setAttribute(s,String(i)),(!1===i||"SCRIPT"===e.tagName&&o(s)&&(!i||"false"===i))&&(e.setAttribute(s,""),e.removeAttribute(s))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return m}});let n=r(306),o=r(9955),a=r(5155),i=n._(r(7650)),s=o._(r(2115)),c=r(1147),l=r(2815),d=r(8571),u=new Map,p=new Set,f=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:s="afterInteractive",onError:c,stylesheets:d}=e,h=r||t;if(h&&p.has(h))return;if(u.has(t)){p.add(h),u.get(t).then(n,c);return}let y=()=>{o&&o(),p.add(h)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),n&&n.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});a?(m.innerHTML=a.__html||"",y()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(m.src=t,u.set(t,b)),(0,l.setAttributesFromProps)(m,e),"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),d&&f(d),document.body.appendChild(m)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:u,stylesheets:f,...y}=e,{updateScripts:m,scripts:b,getIsSsr:g,appDir:v,nonce:x}=(0,s.useContext)(c.HeadManagerContext),_=(0,s.useRef)(!1);(0,s.useEffect)(()=>{let e=t||r;_.current||(o&&e&&p.has(e)&&o(),_.current=!0)},[o,t,r]);let w=(0,s.useRef)(!1);if((0,s.useEffect)(()=>{if(!w.current){if("afterInteractive"===l)h(e);else if("lazyOnload"===l)"complete"===document.readyState?(0,d.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>h(e))});w.current=!0}},[e,l]),("beforeInteractive"===l||"worker"===l)&&(m?(b[l]=(b[l]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:u,...y}]),m(b)):g&&g()?p.add(t||r):g&&!g()&&h(e)),v){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return r?(i.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:x,crossOrigin:y.crossOrigin}:{as:"script",nonce:x,crossOrigin:y.crossOrigin}),(0,a.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===l&&r&&i.default.preload(r,y.integrity?{as:"script",integrity:y.integrity,nonce:x,crossOrigin:y.crossOrigin}:{as:"script",nonce:x,crossOrigin:y.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4739:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j});var n=r(5155),o=r(3704),a=r.n(o),i=r(2115),s=r(1996),c=r.n(s),l=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(u(t)),t.handleErrored=t.handleErrored.bind(u(t)),t.handleChange=t.handleChange.bind(u(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(u(t)),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e);var r=t.prototype;return r.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},r.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise(function(t,r){e.executionResolve=t,e.executionReject=r,e.execute()})},r.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},r.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,l));return i.createElement("div",d({},t,{ref:this.handleRecaptchaRef}))},t}(i.Component);f.displayName="ReCAPTCHA",f.propTypes={sitekey:c().string.isRequired,onChange:c().func,grecaptcha:c().object,theme:c().oneOf(["dark","light"]),type:c().oneOf(["image","audio"]),tabindex:c().number,onExpired:c().func,onErrored:c().func,size:c().oneOf(["compact","normal","invisible"]),stoken:c().string,hl:c().string,badge:c().oneOf(["bottomright","bottomleft","inline"]),isolated:c().bool},f.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var h=r(8250),y=r.n(h);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b={},g=0,v="onloadcallback";function x(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}let _=(function(e,t){return t=t||{},function(r){var n=r.displayName||r.name||"Component",o=function(n){function o(e,t){var r;return(r=n.call(this,e,t)||this).state={},r.__scriptURL="",r}o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var a=o.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+g++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"==typeof e?e():e,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)})},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=b[this.__scriptURL];if(!e||!e.loaded)throw Error("Script is not loaded.");for(var r in e.observers)e.observers[r](e);delete window[t.callbackName]},a.componentDidMount=function(){var e=this,r=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),o=t,a=o.globalName,i=o.callbackName,s=o.scriptId;if(a&&void 0!==window[a]&&(b[r]={loaded:!0,observers:{}}),b[r]){var c=b[r];if(c&&(c.loaded||c.errored)){this.asyncScriptLoaderHandleLoad(c);return}c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)};return}var l={};l[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},b[r]={loaded:!1,observers:l};var d=document.createElement("script");for(var u in d.src=r,d.async=!0,t.attributes)d.setAttribute(u,t.attributes[u]);s&&(d.id=s);var p=function(e){if(b[r]){var t=b[r].observers;for(var n in t)e(t[n])&&delete t[n]}};i&&"undefined"!=typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=b[r];e&&(e.loaded=!0,p(function(t){return!i&&(t(e),!0)}))},d.onerror=function(){var e=b[r];e&&(e.errored=!0,p(function(t){return t(e),!0}))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===t.removeOnUnmount)for(var r=document.getElementsByTagName("script"),n=0;n<r.length;n+=1)r[n].src.indexOf(e)>-1&&r[n].parentNode&&r[n].parentNode.removeChild(r[n]);var o=b[e];o&&(delete o.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===t.removeOnUnmount&&delete b[e])},a.render=function(){var e=t.globalName,n=this.props,o=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return e&&"undefined"!=typeof window&&(a[e]=void 0!==window[e]?window[e]:void 0),a.ref=o,(0,i.createElement)(r,a)},o}(i.Component),a=(0,i.forwardRef)(function(e,t){return(0,i.createElement)(o,m({},e,{forwardedRef:t}))});return a.displayName="AsyncScriptLoader("+n+")",a.propTypes={asyncScriptOnLoad:c().func},y()(a,r)}})(function(){var e=x(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+v+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+v+"&render=explicit"},{callbackName:v,globalName:"grecaptcha",attributes:x().nonce?{nonce:x().nonce}:{}})(f),w=()=>{let[e,t]=(0,i.useState)(),[r,o]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[f,h]=(0,i.useState)(""),[y,m]=(0,i.useState)(!1),[b,g]=(0,i.useState)(!1),v="https://api.alpha2omega.nz/contactus";return(0,n.jsxs)("div",{className:"mx-1 mb-2",children:[(0,n.jsx)(a(),{src:"https://www.google.com/recaptcha/api.js",async:!0,defer:!0}),(0,n.jsxs)("form",{className:"".concat(b&&"hidden"),action:v,onSubmit:t=>{if(m(!0),t.preventDefault(),!e){console.log("Recaptcha value was not provided.");return}if(0===r.length||r.length>256){alert("A First Name between 1 and 256 characters is required.");return}if(0===s.length||s.length>256){alert("A Last Name between 1 and 256 characters is required.");return}if(0===l.length||l.length>256){alert("An Email Address between 1 and 256 characters is required.");return}if(0===u.length||u.length>1024||0===f.length||f.length>1024){alert("A Subject between 1 and 1024 characters is required.");return}fetch(v,{method:"POST",mode:"cors",cache:"no-cache",body:JSON.stringify({firstName:r,lastName:s,email:l,subject:u,message:f,recaptcha:e})}).then(e=>e.json()).then(e=>{m(!1),g(!0),console.log(e)})},method:"POST",children:[(0,n.jsxs)("div",{className:"text-lg",children:[(0,n.jsxs)("span",{children:["Name ",(0,n.jsx)("span",{className:"text-sm",children:"(required)"})]}),(0,n.jsxs)("div",{className:"md:flex text-sm",children:[(0,n.jsxs)("div",{className:"pr-2",children:[(0,n.jsx)("h3",{children:"First Name"}),(0,n.jsx)("input",{type:"text",className:"form-control h-9 w-72 p-1 border-2 border-slate-300",value:r,onChange:e=>o(e.target.value),maxLength:256,required:!0}),(0,n.jsx)("br",{})]}),(0,n.jsxs)("div",{className:"md:pl-2",children:[(0,n.jsx)("h3",{children:"Last Name"}),(0,n.jsx)("input",{type:"text",className:"form-control h-9 w-72 p-1 border-2 border-slate-300",value:s,onChange:e=>c(e.target.value),maxLength:256,required:!0}),(0,n.jsx)("br",{})]})]})]}),(0,n.jsxs)("p",{className:"text-lg mt-2",children:["Email Address ",(0,n.jsx)("span",{className:"text-sm",children:"(required)"})]}),(0,n.jsx)("input",{type:"email",className:"form-control h-9 w-72 p-1 border-2 border-slate-300",value:l,onChange:e=>d(e.target.value),maxLength:256,required:!0}),(0,n.jsx)("br",{}),(0,n.jsxs)("p",{className:"text-lg mt-2",children:["Subject ",(0,n.jsx)("span",{className:"text-sm",children:"(required)"})]}),(0,n.jsx)("input",{type:"text",className:"form-control h-9 md:w-96 w-80 p-1 border-2 border-slate-300",value:u,onChange:e=>p(e.target.value),maxLength:1024,required:!0}),(0,n.jsx)("br",{}),(0,n.jsxs)("p",{className:"text-lg mt-2",children:["Message ",(0,n.jsx)("span",{className:"text-sm",children:"(required)"})]}),(0,n.jsx)("textarea",{rows:3,className:"form-control md:w-96 w-80 p-1 border-2 border-slate-300",value:f,onChange:e=>h(e.target.value),maxLength:10240,required:!0}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{className:"grid grid-cols-[auto_auto] w-min mt-1",children:[(0,n.jsx)(_,{className:"col-start-1 mr-0",sitekey:"6Lc0jhwqAAAAABLh_I3tv2wqjqCIZMAVHu5_NPTZ",onChange:e=>t(e)}),(0,n.jsx)("span",{className:"col-start-2 text-2xl text-red-600 text-left ".concat(e&&"hidden"," block"),children:"*"})]}),(0,n.jsx)("button",{type:"submit",className:"clear-both border border-black bg-white px-2 py-1 rounded mt-1 hover:bg-yellow-50 disabled:bg-gray-300",disabled:null==e||y,children:y?"Sending...":"Send"})]}),(0,n.jsx)("div",{className:"mt-2 text-lg ".concat(!b&&"hidden"),children:"Thank you. Your message has been sent."})]})};function j(){return(0,n.jsx)("div",{children:(0,n.jsx)(w,{})})}},5192:(e,t,r)=>{"use strict";var n=r(859);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5692:(e,t,r)=>{Promise.resolve().then(r.bind(r,4739))},6531:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case u:case a:case s:case i:case f:return e;default:switch(e=e&&e.$$typeof){case l:case p:case m:case y:case c:return e;default:return t}}case o:return t}}}function w(e){return _(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=f,t.isAsyncMode=function(e){return w(e)||_(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return _(e)===l},t.isContextProvider=function(e){return _(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===p},t.isFragment=function(e){return _(e)===a},t.isLazy=function(e){return _(e)===m},t.isMemo=function(e){return _(e)===y},t.isPortal=function(e){return _(e)===o},t.isProfiler=function(e){return _(e)===s},t.isStrictMode=function(e){return _(e)===i},t.isSuspense=function(e){return _(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===s||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===v||e.$$typeof===x||e.$$typeof===b)},t.typeOf=_},8250:(e,t,r)=>{"use strict";var n=r(583),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var o=f(r);o&&o!==h&&e(t,o,n)}var i=d(r);u&&(i=i.concat(u(r)));for(var s=c(t),y=c(r),m=0;m<i.length;++m){var b=i[m];if(!a[b]&&!(n&&n[b])&&!(y&&y[b])&&!(s&&s[b])){var g=p(r,b);try{l(t,b,g)}catch(e){}}}}return t}},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}},e=>{var t=t=>e(e.s=t);e.O(0,[441,587,358],()=>t(5692)),_N_E=e.O()}]);