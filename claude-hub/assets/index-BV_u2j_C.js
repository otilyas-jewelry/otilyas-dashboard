(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nu={exports:{}},yl={},Pu={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),bc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),rd=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),od=Symbol.for("react.memo"),sd=Symbol.for("react.lazy"),us=Symbol.iterator;function ud(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_u=Object.assign,ju={};function vn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Au}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mu(){}Mu.prototype=vn.prototype;function ao(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Au}var co=ao.prototype=new Mu;co.constructor=ao;_u(co,vn.prototype);co.isPureReactComponent=!0;var as=Array.isArray,Iu=Object.prototype.hasOwnProperty,fo={current:null},Tu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Iu.call(t,r)&&!Tu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),a=0;a<s;a++)u[a]=arguments[a+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:sr,type:e,key:i,ref:o,props:l,_owner:fo.current}}function ad(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function po(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function cd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cs=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cd(""+e.key):t.toString(36)}function Tr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sr:case bc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Fl(o,0):r,as(l)?(n="",e!=null&&(n=e.replace(cs,"$&/")+"/"),Tr(l,t,n,"",function(a){return a})):l!=null&&(po(l)&&(l=ad(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(cs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",as(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Fl(i,s);o+=Tr(i,t,n,u,l)}else if(u=ud(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Fl(i,s++),o+=Tr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hr(e,t,n){if(e==null)return e;var r=[],l=0;return Tr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Dr={transition:null},fd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:fo};function Lu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:hr,forEach:function(e,t,n){hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hr(e,function(){t++}),t},toArray:function(e){return hr(e,function(t){return t})||[]},only:function(e){if(!po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=vn;D.Fragment=qc;D.Profiler=td;D.PureComponent=ao;D.StrictMode=ed;D.Suspense=id;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd;D.act=Lu;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_u({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=fo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Iu.call(t,u)&&!Tu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var a=0;a<u;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:sr,type:e.type,key:l,ref:i,props:r,_owner:o}};D.createContext=function(e){return e={$$typeof:rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nd,_context:e},e.Consumer=e};D.createElement=Du;D.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ld,render:e}};D.isValidElement=po;D.lazy=function(e){return{$$typeof:sd,_payload:{_status:-1,_result:e},_init:dd}};D.memo=function(e,t){return{$$typeof:od,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};D.unstable_act=Lu;D.useCallback=function(e,t){return fe.current.useCallback(e,t)};D.useContext=function(e){return fe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};D.useEffect=function(e,t){return fe.current.useEffect(e,t)};D.useId=function(){return fe.current.useId()};D.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return fe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};D.useRef=function(e){return fe.current.useRef(e)};D.useState=function(e){return fe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return fe.current.useTransition()};D.version="18.3.1";Pu.exports=D;var z=Pu.exports;const Dn=Jc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=z,hd=Symbol.for("react.element"),md=Symbol.for("react.fragment"),gd=Object.prototype.hasOwnProperty,yd=pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function Fu(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)gd.call(t,r)&&!vd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:hd,type:e,key:i,ref:o,props:l,_owner:yd.current}}yl.Fragment=md;yl.jsx=Fu;yl.jsxs=Fu;Nu.exports=yl;var c=Nu.exports,ui={},zu={exports:{}},Ne={},Ru={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var T=N.length;N.push(I);e:for(;0<T;){var G=T-1>>>1,J=N[G];if(0<l(J,I))N[G]=I,N[T]=J,T=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],T=N.pop();if(T!==I){N[0]=T;e:for(var G=0,J=N.length,fr=J>>>1;G<fr;){var At=2*(G+1)-1,Ll=N[At],_t=At+1,pr=N[_t];if(0>l(Ll,T))_t<J&&0>l(pr,Ll)?(N[G]=pr,N[_t]=T,G=_t):(N[G]=Ll,N[At]=T,G=At);else if(_t<J&&0>l(pr,T))N[G]=pr,N[_t]=T,G=_t;else break e}}return I}function l(N,I){var T=N.sortIndex-I.sortIndex;return T!==0?T:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],a=[],f=1,p=null,h=3,y=!1,v=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var I=n(a);I!==null;){if(I.callback===null)r(a);else if(I.startTime<=N)r(a),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(a)}}function x(N){if(k=!1,g(N),!v)if(n(u)!==null)v=!0,lt(w);else{var I=n(a);I!==null&&Vt(x,I.startTime-N)}}function w(N,I){v=!1,k&&(k=!1,m(S),S=-1),y=!0;var T=h;try{for(g(I),p=n(u);p!==null&&(!(p.expirationTime>I)||N&&!ee());){var G=p.callback;if(typeof G=="function"){p.callback=null,h=p.priorityLevel;var J=G(p.expirationTime<=I);I=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(u)&&r(u),g(I)}else r(u);p=n(u)}if(p!==null)var fr=!0;else{var At=n(a);At!==null&&Vt(x,At.startTime-I),fr=!1}return fr}finally{p=null,h=T,y=!1}}var A=!1,P=null,S=-1,F=5,j=-1;function ee(){return!(e.unstable_now()-j<F)}function Ge(){if(P!==null){var N=e.unstable_now();j=N;var I=!0;try{I=P(!0,N)}finally{I?Ae():(A=!1,P=null)}}else A=!1}var Ae;if(typeof d=="function")Ae=function(){d(Ge)};else if(typeof MessageChannel<"u"){var Dl=new MessageChannel,ke=Dl.port2;Dl.port1.onmessage=Ge,Ae=function(){ke.postMessage(null)}}else Ae=function(){_(Ge,0)};function lt(N){P=N,A||(A=!0,Ae())}function Vt(N,I){S=_(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,lt(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var T=h;h=I;try{return N()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=h;h=N;try{return I()}finally{h=T}},e.unstable_scheduleCallback=function(N,I,T){var G=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,N={id:f++,callback:I,priorityLevel:N,startTime:T,expirationTime:J,sortIndex:-1},T>G?(N.sortIndex=T,t(a,N),n(u)===null&&N===n(a)&&(k?(m(S),S=-1):k=!0,Vt(x,T-G))):(N.sortIndex=J,t(u,N),v||y||(v=!0,lt(w))),N},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(N){var I=h;return function(){var T=h;h=I;try{return N.apply(this,arguments)}finally{h=T}}}})(Ou);Ru.exports=Ou;var xd=Ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=z,Ee=xd;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,Wn={};function Ht(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ai=Object.prototype.hasOwnProperty,Cd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ds={},fs={};function wd(e){return ai.call(fs,e)?!0:ai.call(ds,e)?!1:Cd.test(e)?fs[e]=!0:(ds[e]=!0,!1)}function Sd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ed(e,t,n,r){if(t===null||typeof t>"u"||Sd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ho=/[\-:]([a-z])/g;function mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ho,mo);re[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ho,mo);re[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ho,mo);re[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function go(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ed(t,n,l,r)&&(n=null),r||l===null?wd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),yo=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),$u=Symbol.for("react.context"),vo=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),xo=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Hu=Symbol.for("react.offscreen"),ps=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,zl;function jn(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var Rl=!1;function Ol(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var l=a.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Nd(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Ol(e.type,!1),e;case 11:return e=Ol(e.type.render,!1),e;case 1:return e=Ol(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Gt:return"Portal";case ci:return"Profiler";case yo:return"StrictMode";case di:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $u:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case vo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xo:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function Pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e){var t=Wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=Ad(e))}function Vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hi(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qu(e,t){t=t.checked,t!=null&&go(e,"checked",t,!1)}function mi(e,t){Qu(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ms(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function yi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Mn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function Gu(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ys(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_d=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){_d.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function Yu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function Zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Yu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,on=null,sn=null;function vs(e){if(e=cr(e)){if(typeof wi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=wl(t),wi(e.stateNode,e.type,t))}}function Ju(e){on?sn?sn.push(e):sn=[e]:on=e}function bu(){if(on){var e=on,t=sn;if(sn=on=null,vs(e),t)for(e=0;e<t.length;e++)vs(t[e])}}function qu(e,t){return e(t)}function ea(){}var Bl=!1;function ta(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return qu(e,t,n)}finally{Bl=!1,(on!==null||sn!==null)&&(ea(),bu())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Si=!1;if(be)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Si=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Si=!1}function Md(e,t,n,r,l,i,o,s,u){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(f){this.onError(f)}}var Fn=!1,Gr=null,Kr=!1,Ei=null,Id={onError:function(e){Fn=!0,Gr=e}};function Td(e,t,n,r,l,i,o,s,u){Fn=!1,Gr=null,Md.apply(Id,arguments)}function Dd(e,t,n,r,l,i,o,s,u){if(Td.apply(this,arguments),Fn){if(Fn){var a=Gr;Fn=!1,Gr=null}else throw Error(C(198));Kr||(Kr=!0,Ei=a)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xs(e){if(Wt(e)!==e)throw Error(C(188))}function Ld(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return xs(l),e;if(i===r)return xs(l),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function ra(e){return e=Ld(e),e!==null?la(e):null}function la(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=la(e);if(t!==null)return t;e=e.sibling}return null}var ia=Ee.unstable_scheduleCallback,ks=Ee.unstable_cancelCallback,Fd=Ee.unstable_shouldYield,zd=Ee.unstable_requestPaint,K=Ee.unstable_now,Rd=Ee.unstable_getCurrentPriorityLevel,Co=Ee.unstable_ImmediatePriority,oa=Ee.unstable_UserBlockingPriority,Xr=Ee.unstable_NormalPriority,Od=Ee.unstable_LowPriority,sa=Ee.unstable_IdlePriority,vl=null,Ve=null;function Bd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Hd,Ud=Math.log,$d=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(Ud(e)/$d|0)|0}var vr=64,xr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=In(s):(i&=o,i!==0&&(r=In(i)))}else o=n&~l,o!==0?r=In(o):i!==0&&(r=In(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Wd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Oe(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=Wd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ua(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function wo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function aa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ca,So,da,fa,pa,Pi=!1,kr=[],ft=null,pt=null,ht=null,Gn=new Map,Kn=new Map,ut=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Sn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=cr(t),t!==null&&So(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Kd(e,t,n,r,l){switch(t){case"focusin":return ft=Sn(ft,e,t,n,r,l),!0;case"dragenter":return pt=Sn(pt,e,t,n,r,l),!0;case"mouseover":return ht=Sn(ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Gn.set(i,Sn(Gn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Kn.set(i,Sn(Kn.get(i)||null,e,t,n,r,l)),!0}return!1}function ha(e){var t=Tt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=na(n),t!==null){e.blockedOn=t,pa(e.priority,function(){da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ci=r,n.target.dispatchEvent(r),Ci=null}else return t=cr(n),t!==null&&So(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){Lr(e)&&n.delete(t)}function Xd(){Pi=!1,ft!==null&&Lr(ft)&&(ft=null),pt!==null&&Lr(pt)&&(pt=null),ht!==null&&Lr(ht)&&(ht=null),Gn.forEach(ws),Kn.forEach(ws)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Pi||(Pi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Xd)))}function Xn(e){function t(l){return En(l,e)}if(0<kr.length){En(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&En(ft,e),pt!==null&&En(pt,e),ht!==null&&En(ht,e),Gn.forEach(t),Kn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)ha(n),n.blockedOn===null&&ut.shift()}var un=nt.ReactCurrentBatchConfig,Zr=!0;function Yd(e,t,n,r){var l=R,i=un.transition;un.transition=null;try{R=1,Eo(e,t,n,r)}finally{R=l,un.transition=i}}function Zd(e,t,n,r){var l=R,i=un.transition;un.transition=null;try{R=4,Eo(e,t,n,r)}finally{R=l,un.transition=i}}function Eo(e,t,n,r){if(Zr){var l=Ai(e,t,n,r);if(l===null)Zl(e,t,r,Jr,n),Cs(e,r);else if(Kd(l,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<Gd.indexOf(e)){for(;l!==null;){var i=cr(l);if(i!==null&&ca(i),i=Ai(e,t,n,r),i===null&&Zl(e,t,r,Jr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var Jr=null;function Ai(e,t,n,r){if(Jr=null,e=ko(r),e=Tt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case Co:return 1;case oa:return 4;case Xr:case Od:return 16;case sa:return 536870912;default:return 16}default:return 16}}var ct=null,No=null,Fr=null;function ga(){if(Fr)return Fr;var e,t=No,n=t.length,r,l="value"in ct?ct.value:ct.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Fr=l.slice(e,1<r?1-r:void 0)}function zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function Ss(){return!1}function Pe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cr:Ss,this.isPropagationStopped=Ss,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Pe(xn),ar=V({},xn,{view:0,detail:0}),Jd=Pe(ar),$l,Hl,Nn,xl=V({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ao,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?($l=e.screenX-Nn.screenX,Hl=e.screenY-Nn.screenY):Hl=$l=0,Nn=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Es=Pe(xl),bd=V({},xl,{dataTransfer:0}),qd=Pe(bd),ef=V({},ar,{relatedTarget:0}),Wl=Pe(ef),tf=V({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),nf=Pe(tf),rf=V({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lf=Pe(rf),of=V({},xn,{data:0}),Ns=Pe(of),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},af={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=af[e])?!!t[e]:!1}function Ao(){return cf}var df=V({},ar,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ao,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=Pe(df),pf=V({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=Pe(pf),hf=V({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ao}),mf=Pe(hf),gf=V({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yf=Pe(gf),vf=V({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=Pe(vf),kf=[9,13,27,32],_o=be&&"CompositionEvent"in window,zn=null;be&&"documentMode"in document&&(zn=document.documentMode);var Cf=be&&"TextEvent"in window&&!zn,ya=be&&(!_o||zn&&8<zn&&11>=zn),As=" ",_s=!1;function va(e,t){switch(e){case"keyup":return kf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function wf(e,t){switch(e){case"compositionend":return xa(t);case"keypress":return t.which!==32?null:(_s=!0,As);case"textInput":return e=t.data,e===As&&_s?null:e;default:return null}}function Sf(e,t){if(Xt)return e==="compositionend"||!_o&&va(e,t)?(e=ga(),Fr=No=ct=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ya&&t.locale!=="ko"?null:t.data;default:return null}}var Ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ef[e.type]:t==="textarea"}function ka(e,t,n,r){Ju(r),t=br(t,"onChange"),0<t.length&&(n=new Po("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Yn=null;function Nf(e){Ia(e,0)}function kl(e){var t=Jt(e);if(Vu(t))return e}function Pf(e,t){if(e==="change")return t}var Ca=!1;if(be){var Vl;if(be){var Ql="oninput"in document;if(!Ql){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Ql=typeof Ms.oninput=="function"}Vl=Ql}else Vl=!1;Ca=Vl&&(!document.documentMode||9<document.documentMode)}function Is(){Rn&&(Rn.detachEvent("onpropertychange",wa),Yn=Rn=null)}function wa(e){if(e.propertyName==="value"&&kl(Yn)){var t=[];ka(t,Yn,e,ko(e)),ta(Nf,t)}}function Af(e,t,n){e==="focusin"?(Is(),Rn=t,Yn=n,Rn.attachEvent("onpropertychange",wa)):e==="focusout"&&Is()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Yn)}function jf(e,t){if(e==="click")return kl(t)}function Mf(e,t){if(e==="input"||e==="change")return kl(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:If;function Zn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ai.call(t,l)||!Ue(e[l],t[l]))return!1}return!0}function Ts(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ds(e,t){var n=Ts(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ts(n)}}function Sa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ea(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=Ea(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sa(n.ownerDocument.documentElement,n)){if(r!==null&&jo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ds(n,i);var o=Ds(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=be&&"documentMode"in document&&11>=document.documentMode,Yt=null,_i=null,On=null,ji=!1;function Ls(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Yt==null||Yt!==Qr(r)||(r=Yt,"selectionStart"in r&&jo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Zn(On,r)||(On=r,r=br(_i,"onSelect"),0<r.length&&(t=new Po("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Gl={},Na={};be&&(Na=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Cl(e){if(Gl[e])return Gl[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Na)return Gl[e]=t[n];return e}var Pa=Cl("animationend"),Aa=Cl("animationiteration"),_a=Cl("animationstart"),ja=Cl("transitionend"),Ma=new Map,Fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Ma.set(e,t),Ht(t,[e])}for(var Kl=0;Kl<Fs.length;Kl++){var Xl=Fs[Kl],Lf=Xl.toLowerCase(),Ff=Xl[0].toUpperCase()+Xl.slice(1);wt(Lf,"on"+Ff)}wt(Pa,"onAnimationEnd");wt(Aa,"onAnimationIteration");wt(_a,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(ja,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function zs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dd(r,t,void 0,e),e.currentTarget=null}function Ia(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,a=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;zs(l,s,a),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,a=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;zs(l,s,a),i=u}}}if(Kr)throw e=Ei,Kr=!1,Ei=null,e}function B(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(Ta(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Ta(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Sr]){e[Sr]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Yl("selectionchange",!1,t))}}function Ta(e,t,n,r){switch(ma(t)){case 1:var l=Yd;break;case 4:l=Zd;break;default:l=Eo}n=l.bind(null,t,n,e),l=void 0,!Si||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Tt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}ta(function(){var a=i,f=ko(n),p=[];e:{var h=Ma.get(e);if(h!==void 0){var y=Po,v=e;switch(e){case"keypress":if(zr(n)===0)break e;case"keydown":case"keyup":y=ff;break;case"focusin":v="focus",y=Wl;break;case"focusout":v="blur",y=Wl;break;case"beforeblur":case"afterblur":y=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=mf;break;case Pa:case Aa:case _a:y=nf;break;case ja:y=yf;break;case"scroll":y=Jd;break;case"wheel":y=xf;break;case"copy":case"cut":case"paste":y=lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ps}var k=(t&4)!==0,_=!k&&e==="scroll",m=k?h!==null?h+"Capture":null:h;k=[];for(var d=a,g;d!==null;){g=d;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=Qn(d,m),x!=null&&k.push(bn(d,x,g)))),_)break;d=d.return}0<k.length&&(h=new y(h,v,null,n,f),p.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Ci&&(v=n.relatedTarget||n.fromElement)&&(Tt(v)||v[qe]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=a,v=v?Tt(v):null,v!==null&&(_=Wt(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=a),y!==v)){if(k=Es,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ps,x="onPointerLeave",m="onPointerEnter",d="pointer"),_=y==null?h:Jt(y),g=v==null?h:Jt(v),h=new k(x,d+"leave",y,n,f),h.target=_,h.relatedTarget=g,x=null,Tt(f)===a&&(k=new k(m,d+"enter",v,n,f),k.target=g,k.relatedTarget=_,x=k),_=x,y&&v)t:{for(k=y,m=v,d=0,g=k;g;g=Qt(g))d++;for(g=0,x=m;x;x=Qt(x))g++;for(;0<d-g;)k=Qt(k),d--;for(;0<g-d;)m=Qt(m),g--;for(;d--;){if(k===m||m!==null&&k===m.alternate)break t;k=Qt(k),m=Qt(m)}k=null}else k=null;y!==null&&Rs(p,h,y,k,!1),v!==null&&_!==null&&Rs(p,_,v,k,!0)}}e:{if(h=a?Jt(a):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var w=Pf;else if(js(h))if(Ca)w=Mf;else{w=_f;var A=Af}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=jf);if(w&&(w=w(e,a))){ka(p,w,n,f);break e}A&&A(e,h,a),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&gi(h,"number",h.value)}switch(A=a?Jt(a):window,e){case"focusin":(js(A)||A.contentEditable==="true")&&(Yt=A,_i=a,On=null);break;case"focusout":On=_i=Yt=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Ls(p,n,f);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Ls(p,n,f)}var P;if(_o)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Xt?va(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(ya&&n.locale!=="ko"&&(Xt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Xt&&(P=ga()):(ct=f,No="value"in ct?ct.value:ct.textContent,Xt=!0)),A=br(a,S),0<A.length&&(S=new Ns(S,e,null,n,f),p.push({event:S,listeners:A}),P?S.data=P:(P=xa(n),P!==null&&(S.data=P)))),(P=Cf?wf(e,n):Sf(e,n))&&(a=br(a,"onBeforeInput"),0<a.length&&(f=new Ns("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:a}),f.data=P))}Ia(p,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qn(e,n),i!=null&&r.unshift(bn(e,i,l)),i=Qn(e,t),i!=null&&r.push(bn(e,i,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,a=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&a!==null&&(s=a,l?(u=Qn(n,i),u!=null&&o.unshift(bn(n,u,s))):l||(u=Qn(n,i),u!=null&&o.push(bn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Rf=/\r\n?/g,Of=/\u0000|\uFFFD/g;function Os(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Of,"")}function Er(e,t,n){if(t=Os(t),Os(e)!==t&&n)throw Error(C(425))}function qr(){}var Mi=null,Ii=null;function Ti(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(e){return Bs.resolve(null).then(e).catch($f)}:Di;function $f(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Us(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),We="__reactFiber$"+kn,qn="__reactProps$"+kn,qe="__reactContainer$"+kn,Li="__reactEvents$"+kn,Hf="__reactListeners$"+kn,Wf="__reactHandles$"+kn;function Tt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Us(e);e!==null;){if(n=e[We])return n;e=Us(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[We]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function wl(e){return e[qn]||null}var Fi=[],bt=-1;function St(e){return{current:e}}function U(e){0>bt||(e.current=Fi[bt],Fi[bt]=null,bt--)}function O(e,t){bt++,Fi[bt]=e.current,e.current=t}var Ct={},ue=St(Ct),ye=St(!1),Rt=Ct;function fn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function el(){U(ye),U(ue)}function $s(e,t,n){if(ue.current!==Ct)throw Error(C(168));O(ue,t),O(ye,n)}function Da(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(C(108,Pd(e)||"Unknown",l));return V({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Rt=ue.current,O(ue,e),O(ye,ye.current),!0}function Hs(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Da(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,U(ye),U(ue),O(ue,e)):U(ye),O(ye,n)}var Xe=null,Sl=!1,bl=!1;function La(e){Xe===null?Xe=[e]:Xe.push(e)}function Vf(e){Sl=!0,La(e)}function Et(){if(!bl&&Xe!==null){bl=!0;var e=0,t=R;try{var n=Xe;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Sl=!1}catch(l){throw Xe!==null&&(Xe=Xe.slice(e+1)),ia(Co,Et),l}finally{R=t,bl=!1}}return null}var qt=[],en=0,nl=null,rl=0,_e=[],je=0,Ot=null,Ye=1,Ze="";function jt(e,t){qt[en++]=rl,qt[en++]=nl,nl=e,rl=t}function Fa(e,t,n){_e[je++]=Ye,_e[je++]=Ze,_e[je++]=Ot,Ot=e;var r=Ye;e=Ze;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var i=32-Oe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ye=1<<32-Oe(t)+l|n<<l|r,Ze=i+e}else Ye=1<<i|n<<l|r,Ze=e}function Mo(e){e.return!==null&&(jt(e,1),Fa(e,1,0))}function Io(e){for(;e===nl;)nl=qt[--en],qt[en]=null,rl=qt[--en],qt[en]=null;for(;e===Ot;)Ot=_e[--je],_e[je]=null,Ze=_e[--je],_e[je]=null,Ye=_e[--je],_e[je]=null}var Se=null,we=null,$=!1,Re=null;function za(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,we=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ye,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,we=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if($){var t=we;if(t){var n=t;if(!Ws(e,t)){if(zi(e))throw Error(C(418));t=mt(n.nextSibling);var r=Se;t&&Ws(e,t)?za(r,n):(e.flags=e.flags&-4097|2,$=!1,Se=e)}}else{if(zi(e))throw Error(C(418));e.flags=e.flags&-4097|2,$=!1,Se=e}}}function Vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Nr(e){if(e!==Se)return!1;if(!$)return Vs(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ti(e.type,e.memoizedProps)),t&&(t=we)){if(zi(e))throw Ra(),Error(C(418));for(;t;)za(e,t),t=mt(t.nextSibling)}if(Vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Se?mt(e.stateNode.nextSibling):null;return!0}function Ra(){for(var e=we;e;)e=mt(e.nextSibling)}function pn(){we=Se=null,$=!1}function To(e){Re===null?Re=[e]:Re.push(e)}var Qf=nt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qs(e){var t=e._init;return t(e._payload)}function Oa(e){function t(m,d){if(e){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=xt(m,d),m.index=0,m.sibling=null,m}function i(m,d,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,g,x){return d===null||d.tag!==6?(d=ii(g,m.mode,x),d.return=m,d):(d=l(d,g),d.return=m,d)}function u(m,d,g,x){var w=g.type;return w===Kt?f(m,d,g.props.children,x,g.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ot&&Qs(w)===d.type)?(x=l(d,g.props),x.ref=Pn(m,d,g),x.return=m,x):(x=Wr(g.type,g.key,g.props,null,m.mode,x),x.ref=Pn(m,d,g),x.return=m,x)}function a(m,d,g,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=oi(g,m.mode,x),d.return=m,d):(d=l(d,g.children||[]),d.return=m,d)}function f(m,d,g,x,w){return d===null||d.tag!==7?(d=zt(g,m.mode,x,w),d.return=m,d):(d=l(d,g),d.return=m,d)}function p(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ii(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mr:return g=Wr(d.type,d.key,d.props,null,m.mode,g),g.ref=Pn(m,null,d),g.return=m,g;case Gt:return d=oi(d,m.mode,g),d.return=m,d;case ot:var x=d._init;return p(m,x(d._payload),g)}if(Mn(d)||Cn(d))return d=zt(d,m.mode,g,null),d.return=m,d;Pr(m,d)}return null}function h(m,d,g,x){var w=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:s(m,d,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case mr:return g.key===w?u(m,d,g,x):null;case Gt:return g.key===w?a(m,d,g,x):null;case ot:return w=g._init,h(m,d,w(g._payload),x)}if(Mn(g)||Cn(g))return w!==null?null:f(m,d,g,x,null);Pr(m,g)}return null}function y(m,d,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,s(d,m,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mr:return m=m.get(x.key===null?g:x.key)||null,u(d,m,x,w);case Gt:return m=m.get(x.key===null?g:x.key)||null,a(d,m,x,w);case ot:var A=x._init;return y(m,d,g,A(x._payload),w)}if(Mn(x)||Cn(x))return m=m.get(g)||null,f(d,m,x,w,null);Pr(d,x)}return null}function v(m,d,g,x){for(var w=null,A=null,P=d,S=d=0,F=null;P!==null&&S<g.length;S++){P.index>S?(F=P,P=null):F=P.sibling;var j=h(m,P,g[S],x);if(j===null){P===null&&(P=F);break}e&&P&&j.alternate===null&&t(m,P),d=i(j,d,S),A===null?w=j:A.sibling=j,A=j,P=F}if(S===g.length)return n(m,P),$&&jt(m,S),w;if(P===null){for(;S<g.length;S++)P=p(m,g[S],x),P!==null&&(d=i(P,d,S),A===null?w=P:A.sibling=P,A=P);return $&&jt(m,S),w}for(P=r(m,P);S<g.length;S++)F=y(P,m,S,g[S],x),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?S:F.key),d=i(F,d,S),A===null?w=F:A.sibling=F,A=F);return e&&P.forEach(function(ee){return t(m,ee)}),$&&jt(m,S),w}function k(m,d,g,x){var w=Cn(g);if(typeof w!="function")throw Error(C(150));if(g=w.call(g),g==null)throw Error(C(151));for(var A=w=null,P=d,S=d=0,F=null,j=g.next();P!==null&&!j.done;S++,j=g.next()){P.index>S?(F=P,P=null):F=P.sibling;var ee=h(m,P,j.value,x);if(ee===null){P===null&&(P=F);break}e&&P&&ee.alternate===null&&t(m,P),d=i(ee,d,S),A===null?w=ee:A.sibling=ee,A=ee,P=F}if(j.done)return n(m,P),$&&jt(m,S),w;if(P===null){for(;!j.done;S++,j=g.next())j=p(m,j.value,x),j!==null&&(d=i(j,d,S),A===null?w=j:A.sibling=j,A=j);return $&&jt(m,S),w}for(P=r(m,P);!j.done;S++,j=g.next())j=y(P,m,S,j.value,x),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?S:j.key),d=i(j,d,S),A===null?w=j:A.sibling=j,A=j);return e&&P.forEach(function(Ge){return t(m,Ge)}),$&&jt(m,S),w}function _(m,d,g,x){if(typeof g=="object"&&g!==null&&g.type===Kt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case mr:e:{for(var w=g.key,A=d;A!==null;){if(A.key===w){if(w=g.type,w===Kt){if(A.tag===7){n(m,A.sibling),d=l(A,g.props.children),d.return=m,m=d;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ot&&Qs(w)===A.type){n(m,A.sibling),d=l(A,g.props),d.ref=Pn(m,A,g),d.return=m,m=d;break e}n(m,A);break}else t(m,A);A=A.sibling}g.type===Kt?(d=zt(g.props.children,m.mode,x,g.key),d.return=m,m=d):(x=Wr(g.type,g.key,g.props,null,m.mode,x),x.ref=Pn(m,d,g),x.return=m,m=x)}return o(m);case Gt:e:{for(A=g.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=l(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=oi(g,m.mode,x),d.return=m,m=d}return o(m);case ot:return A=g._init,_(m,d,A(g._payload),x)}if(Mn(g))return v(m,d,g,x);if(Cn(g))return k(m,d,g,x);Pr(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=l(d,g),d.return=m,m=d):(n(m,d),d=ii(g,m.mode,x),d.return=m,m=d),o(m)):n(m,d)}return _}var hn=Oa(!0),Ba=Oa(!1),ll=St(null),il=null,tn=null,Do=null;function Lo(){Do=tn=il=null}function Fo(e){var t=ll.current;U(ll),e._currentValue=t}function Oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){il=e,Do=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(il===null)throw Error(C(308));tn=e,il.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Dt=null;function zo(e){Dt===null?Dt=[e]:Dt.push(e)}function Ua(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,zo(t)):(n.next=l.next,l.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $a(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,et(e,n)}return l=r.interleaved,l===null?(t.next=t,zo(r)):(t.next=l.next,l.next=t),r.interleaved=t,et(e,n)}function Rr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;st=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,a=u.next;u.next=null,o===null?i=a:o.next=a,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=a:s.next=a,f.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;o=0,f=a=u=null,s=i;do{var h=s.lane,y=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(h=t,y=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){p=v.call(y,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,h=typeof v=="function"?v.call(y,p,h):v,h==null)break e;p=V({},p,h);break e;case 2:st=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else y={eventTime:y,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(a=f=y,u=p):f=f.next=y,o|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(f===null&&(u=p),l.baseState=u,l.firstBaseUpdate=a,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ut|=o,e.lanes=o,e.memoizedState=p}}function Ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var dr={},Qe=St(dr),er=St(dr),tr=St(dr);function Lt(e){if(e===dr)throw Error(C(174));return e}function Oo(e,t){switch(O(tr,t),O(er,e),O(Qe,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}U(Qe),O(Qe,t)}function mn(){U(Qe),U(er),U(tr)}function Ha(e){Lt(tr.current);var t=Lt(Qe.current),n=vi(t,e.type);t!==n&&(O(er,e),O(Qe,n))}function Bo(e){er.current===e&&(U(Qe),U(er))}var H=St(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ql=[];function Uo(){for(var e=0;e<ql.length;e++)ql[e]._workInProgressVersionPrimary=null;ql.length=0}var Or=nt.ReactCurrentDispatcher,ei=nt.ReactCurrentBatchConfig,Bt=0,W=null,Y=null,b=null,ul=!1,Bn=!1,nr=0,Gf=0;function ie(){throw Error(C(321))}function $o(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function Ho(e,t,n,r,l,i){if(Bt=i,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Zf:Jf,e=n(r,l),Bn){i=0;do{if(Bn=!1,nr=0,25<=i)throw Error(C(301));i+=1,b=Y=null,t.updateQueue=null,Or.current=bf,e=n(r,l)}while(Bn)}if(Or.current=al,t=Y!==null&&Y.next!==null,Bt=0,b=Y=W=null,ul=!1,t)throw Error(C(300));return e}function Wo(){var e=nr!==0;return nr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?W.memoizedState=b=e:b=b.next=e,b}function De(){if(Y===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=b===null?W.memoizedState:b.next;if(t!==null)b=t,Y=e;else{if(e===null)throw Error(C(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},b===null?W.memoizedState=b=e:b=b.next=e}return b}function rr(e,t){return typeof t=="function"?t(e):t}function ti(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,a=i;do{var f=a.lane;if((Bt&f)===f)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var p={lane:f,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(s=u=p,o=r):u=u.next=p,W.lanes|=f,Ut|=f}a=a.next}while(a!==null&&a!==i);u===null?o=r:u.next=s,Ue(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,W.lanes|=i,Ut|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ni(e){var t=De(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ue(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wa(){}function Va(e,t){var n=W,r=De(),l=t(),i=!Ue(r.memoizedState,l);if(i&&(r.memoizedState=l,ge=!0),r=r.queue,Vo(Ka.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,lr(9,Ga.bind(null,n,r,l,t),void 0,null),q===null)throw Error(C(349));Bt&30||Qa(n,t,l)}return l}function Qa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Xa(t)&&Ya(e)}function Ka(e,t,n){return n(function(){Xa(t)&&Ya(e)})}function Xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Ya(e){var t=et(e,1);t!==null&&Be(t,e,1,-1)}function Xs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yf.bind(null,W,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Za(){return De().memoizedState}function Br(e,t,n,r){var l=He();W.flags|=e,l.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=De();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&$o(r,o.deps)){l.memoizedState=lr(t,n,i,r);return}}W.flags|=e,l.memoizedState=lr(1|t,n,i,r)}function Ys(e,t){return Br(8390656,8,e,t)}function Vo(e,t){return El(2048,8,e,t)}function Ja(e,t){return El(4,2,e,t)}function ba(e,t){return El(4,4,e,t)}function qa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ec(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,qa.bind(null,t,e),n)}function Qo(){}function tc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$o(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rc(e,t,n){return Bt&21?(Ue(n,t)||(n=ua(),W.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Kf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),t()}finally{R=n,ei.transition=r}}function lc(){return De().memoizedState}function Xf(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e))oc(t,n);else if(n=Ua(e,t,n,r),n!==null){var l=de();Be(n,e,r,l),sc(n,t,r)}}function Yf(e,t,n){var r=vt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))oc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ue(s,o)){var u=t.interleaved;u===null?(l.next=l,zo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ua(e,t,l,r),n!==null&&(l=de(),Be(n,e,r,l),sc(n,t,r))}}function ic(e){var t=e.alternate;return e===W||t!==null&&t===W}function oc(e,t){Bn=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wo(e,n)}}var al={readContext:Te,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Zf={readContext:Te,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ys,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,qa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xf.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:Qo,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=Kf.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=He();if($){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),q===null)throw Error(C(349));Bt&30||Qa(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ys(Ka.bind(null,r,i,e),[e]),r.flags|=2048,lr(9,Ga.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=q.identifierPrefix;if($){var n=Ze,r=Ye;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jf={readContext:Te,useCallback:tc,useContext:Te,useEffect:Vo,useImperativeHandle:ec,useInsertionEffect:Ja,useLayoutEffect:ba,useMemo:nc,useReducer:ti,useRef:Za,useState:function(){return ti(rr)},useDebugValue:Qo,useDeferredValue:function(e){var t=De();return rc(t,Y.memoizedState,e)},useTransition:function(){var e=ti(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Wa,useSyncExternalStore:Va,useId:lc,unstable_isNewReconciler:!1},bf={readContext:Te,useCallback:tc,useContext:Te,useEffect:Vo,useImperativeHandle:ec,useInsertionEffect:Ja,useLayoutEffect:ba,useMemo:nc,useReducer:ni,useRef:Za,useState:function(){return ni(rr)},useDebugValue:Qo,useDeferredValue:function(e){var t=De();return Y===null?t.memoizedState=e:rc(t,Y.memoizedState,e)},useTransition:function(){var e=ni(rr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Wa,useSyncExternalStore:Va,useId:lc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nl={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=vt(e),i=Je(r,l);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Be(t,e,l,r),Rr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=vt(e),i=Je(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Be(t,e,l,r),Rr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=vt(e),l=Je(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Be(t,e,r,n),Rr(t,e,r))}};function Zs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(l,i):!0}function uc(e,t,n){var r=!1,l=Ct,i=t.contextType;return typeof i=="object"&&i!==null?i=Te(i):(l=ve(t)?Rt:ue.current,r=t.contextTypes,i=(r=r!=null)?fn(e,l):Ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nl.enqueueReplaceState(t,t.state,null)}function Ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ro(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Te(i):(i=ve(t)?Rt:ue.current,l.context=fn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Bi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Nl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Nd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qf=typeof WeakMap=="function"?WeakMap:Map;function ac(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,Ji=r),$i(e,t)},n}function cc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){$i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){$i(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function bs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=pp.bind(null,e,t,n),t.then(e,e))}function qs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var ep=nt.ReactCurrentOwner,ge=!1;function ae(e,t,n,r){t.child=e===null?Ba(t,null,n,r):hn(t,e.child,n,r)}function tu(e,t,n,r,l){n=n.render;var i=t.ref;return an(t,l),r=Ho(e,t,n,r,i,l),n=Wo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):($&&n&&Mo(t),t.flags|=1,ae(e,t,r,l),t.child)}function nu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dc(e,t,i,r,l)):(e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(o,r)&&e.ref===t.ref)return tt(e,t,l)}return t.flags|=1,e=xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,tt(e,t,l)}return Hi(e,t,n,r,l)}function fc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(rn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(rn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(rn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(rn,Ce),Ce|=r;return ae(e,t,l,n),t.child}function pc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hi(e,t,n,r,l){var i=ve(n)?Rt:ue.current;return i=fn(t,i),an(t,l),n=Ho(e,t,n,r,i,l),r=Wo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,tt(e,t,l)):($&&r&&Mo(t),t.flags|=1,ae(e,t,n,l),t.child)}function ru(e,t,n,r,l){if(ve(n)){var i=!0;tl(t)}else i=!1;if(an(t,l),t.stateNode===null)Ur(e,t),uc(t,n,r),Ui(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,a=n.contextType;typeof a=="object"&&a!==null?a=Te(a):(a=ve(n)?Rt:ue.current,a=fn(t,a));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==a)&&Js(t,o,r,a),st=!1;var h=t.memoizedState;o.state=h,ol(t,r,o,l),u=t.memoizedState,s!==r||h!==u||ye.current||st?(typeof f=="function"&&(Bi(t,n,f,r),u=t.memoizedState),(s=st||Zs(t,n,s,r,h,u,a))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=a,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,$a(e,t),s=t.memoizedProps,a=t.type===t.elementType?s:Fe(t.type,s),o.props=a,p=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Te(u):(u=ve(n)?Rt:ue.current,u=fn(t,u));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==u)&&Js(t,o,r,u),st=!1,h=t.memoizedState,o.state=h,ol(t,r,o,l);var v=t.memoizedState;s!==p||h!==v||ye.current||st?(typeof y=="function"&&(Bi(t,n,y,r),v=t.memoizedState),(a=st||Zs(t,n,a,r,h,v,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=u,r=a):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wi(e,t,n,r,i,l)}function Wi(e,t,n,r,l,i){pc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Hs(t,n,!1),tt(e,t,i);r=t.stateNode,ep.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,s,i)):ae(e,t,s,i),t.memoizedState=r.state,l&&Hs(t,n,!0),t.child}function hc(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Oo(e,t.containerInfo)}function lu(e,t,n,r,l){return pn(),To(l),t.flags|=256,ae(e,t,n,r),t.child}var Vi={dehydrated:null,treeContext:null,retryLane:0};function Qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,t,n){var r=t.pendingProps,l=H.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(H,l&1),e===null)return Ri(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_l(o,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qi(n),t.memoizedState=Vi,e):Go(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return tp(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=xt(s,i):(i=zt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Qi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Vi,r}return i=e.child,e=i.sibling,r=xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Go(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&To(r),hn(t,e.child,null,n),e=Go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(C(422))),Ar(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=_l({mode:"visible",children:r.children},l,0,null),i=zt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Qi(o),t.memoizedState=Vi,i);if(!(t.mode&1))return Ar(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=ri(i,r,void 0),Ar(e,t,o,r)}if(s=(o&e.childLanes)!==0,ge||s){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,et(e,l),Be(r,e,l,-1))}return bo(),r=ri(Error(C(421))),Ar(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=hp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=mt(l.nextSibling),Se=t,$=!0,Re=null,e!==null&&(_e[je++]=Ye,_e[je++]=Ze,_e[je++]=Ot,Ye=e.id,Ze=e.overflow,Ot=t),t=Go(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oi(e.return,t,n)}function li(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function gc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ae(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),li(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}li(t,!0,n,null,i);break;case"together":li(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function np(e,t,n){switch(t.tag){case 3:hc(t),pn();break;case 5:Ha(t);break;case 1:ve(t.type)&&tl(t);break;case 4:Oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O(ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?mc(e,t,n):(O(H,H.current&1),e=tt(e,t,n),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return gc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,fc(e,t,n)}return tt(e,t,n)}var yc,Gi,vc,xc;yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gi=function(){};vc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Lt(Qe.current);var i=null;switch(n){case"input":l=hi(e,l),r=hi(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=yi(e,l),r=yi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}xi(n,r);var o;n=null;for(a in l)if(!r.hasOwnProperty(a)&&l.hasOwnProperty(a)&&l[a]!=null)if(a==="style"){var s=l[a];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wn.hasOwnProperty(a)?i||(i=[]):(i=i||[]).push(a,null));for(a in r){var u=r[a];if(s=l!=null?l[a]:void 0,r.hasOwnProperty(a)&&u!==s&&(u!=null||s!=null))if(a==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&B("scroll",e),i||s===u||(i=[])):(i=i||[]).push(a,u))}n&&(i=i||[]).push("style",n);var a=i;(t.updateQueue=a)&&(t.flags|=4)}};xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rp(e,t,n){var r=t.pendingProps;switch(Io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&el(),oe(t),null;case 3:return r=t.stateNode,mn(),U(ye),U(ue),Uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(eo(Re),Re=null))),Gi(e,t),oe(t),null;case 5:Bo(t);var l=Lt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)vc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return oe(t),null}if(e=Lt(Qe.current),Nr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[We]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":hs(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":gs(r,i),B("invalid",r)}xi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),l=["children",""+s]):Wn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":gr(r),ms(r,i,!0);break;case"textarea":gr(r),ys(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ku(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[We]=t,e[qn]=r,yc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ki(n,r),n){case"dialog":B("cancel",e),B("close",e),l=r;break;case"iframe":case"object":case"embed":B("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)B(Tn[l],e);l=r;break;case"source":B("error",e),l=r;break;case"img":case"image":case"link":B("error",e),B("load",e),l=r;break;case"details":B("toggle",e),l=r;break;case"input":hs(e,r),l=hi(e,r),B("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),B("invalid",e);break;case"textarea":gs(e,r),l=yi(e,r),B("invalid",e);break;default:l=r}xi(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Zu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vn(e,u):typeof u=="number"&&Vn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&B("scroll",e):u!=null&&go(e,i,u,o))}switch(n){case"input":gr(e),ms(e,r,!1);break;case"textarea":gr(e),ys(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ln(e,!!r.multiple,i,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Lt(tr.current),Lt(Qe.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if(U(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&we!==null&&t.mode&1&&!(t.flags&128))Ra(),pn(),t.flags|=98560,i=!1;else if(i=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[We]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Re!==null&&(eo(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):bo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),Gi(e,t),e===null&&Jn(t.stateNode.containerInfo),oe(t),null;case 10:return Fo(t.type._context),oe(t),null;case 17:return ve(t.type)&&el(),oe(t),null;case 19:if(U(H),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)An(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=sl(e),o!==null){for(t.flags|=128,An(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>yn&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!$)return oe(t),null}else 2*K()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,An(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=H.current,O(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Jo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function lp(e,t){switch(Io(t),t.tag){case 1:return ve(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),U(ye),U(ue),Uo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bo(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return mn(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return Jo(),null;case 24:return null;default:return null}}var _r=!1,se=!1,ip=typeof WeakSet=="function"?WeakSet:Set,E=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Ki(e,t,n){try{n()}catch(r){Q(e,t,r)}}var ou=!1;function op(e,t){if(Mi=Zr,e=Ea(),jo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,a=0,f=0,p=e,h=null;t:for(;;){for(var y;p!==n||l!==0&&p.nodeType!==3||(s=o+l),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++a===l&&(s=o),h===i&&++f===r&&(u=o),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},Zr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,_=v.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?k:Fe(t.type,k),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){Q(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return v=ou,ou=!1,v}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ki(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function kc(e){var t=e.alternate;t!==null&&(e.alternate=null,kc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[qn],delete t[Li],delete t[Hf],delete t[Wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}var te=null,ze=!1;function it(e,t,n){for(n=n.child;n!==null;)wc(e,t,n),n=n.sibling}function wc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:se||nn(n,t);case 6:var r=te,l=ze;te=null,it(e,t,n),te=r,ze=l,te!==null&&(ze?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(ze?(e=te,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Xn(e)):Jl(te,n.stateNode));break;case 4:r=te,l=ze,te=n.stateNode.containerInfo,ze=!0,it(e,t,n),te=r,ze=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ki(n,t,o),l=l.next}while(l!==r)}it(e,t,n);break;case 1:if(!se&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Q(n,t,s)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,it(e,t,n),se=r):it(e,t,n);break;default:it(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ip),t.forEach(function(r){var l=mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,ze=!1;break e;case 3:te=s.stateNode.containerInfo,ze=!0;break e;case 4:te=s.stateNode.containerInfo,ze=!0;break e}s=s.return}if(te===null)throw Error(C(160));wc(i,o,l),te=null,ze=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(a){Q(l,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sc(t,e),t=t.sibling}function Sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),$e(e),r&4){try{Un(3,e,e.return),Pl(3,e)}catch(k){Q(e,e.return,k)}try{Un(5,e,e.return)}catch(k){Q(e,e.return,k)}}break;case 1:Le(t,e),$e(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Le(t,e),$e(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var l=e.stateNode;try{Vn(l,"")}catch(k){Q(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qu(l,i),ki(s,o);var a=ki(s,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Zu(l,p):f==="dangerouslySetInnerHTML"?Xu(l,p):f==="children"?Vn(l,p):go(l,f,p,a)}switch(s){case"input":mi(l,i);break;case"textarea":Gu(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ln(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?ln(l,!!i.multiple,i.defaultValue,!0):ln(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(k){Q(e,e.return,k)}}break;case 6:if(Le(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){Q(e,e.return,k)}}break;case 3:if(Le(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(k){Q(e,e.return,k)}break;case 4:Le(t,e),$e(e);break;case 13:Le(t,e),$e(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=K())),r&4&&uu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(se=(a=se)||f,Le(t,e),se=a):Le(t,e),$e(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!f&&e.mode&1)for(E=e,f=e.child;f!==null;){for(p=E=f;E!==null;){switch(h=E,y=h.child,h.tag){case 0:case 11:case 14:case 15:Un(4,h,h.return);break;case 1:nn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){Q(r,n,k)}}break;case 5:nn(h,h.return);break;case 22:if(h.memoizedState!==null){cu(p);continue}}y!==null?(y.return=h,E=y):cu(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{l=p.stateNode,a?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Yu("display",o))}catch(k){Q(e,e.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(k){Q(e,e.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),$e(e),r&4&&uu(e);break;case 21:break;default:Le(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vn(l,""),r.flags&=-33);var i=su(e);Zi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=su(e);Yi(e,s,o);break;default:throw Error(C(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sp(e,t,n){E=e,Ec(e)}function Ec(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||_r;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||se;s=_r;var a=se;if(_r=o,(se=u)&&!a)for(E=l;E!==null;)o=E,u=o.child,o.tag===22&&o.memoizedState!==null?du(l):u!==null?(u.return=o,E=u):du(l);for(;i!==null;)E=i,Ec(i),i=i.sibling;E=l,_r=s,se=a}au(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):au(e)}}function au(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ks(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ks(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var f=a.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Xn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}se||t.flags&512&&Xi(t)}catch(h){Q(t,t.return,h)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function cu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function du(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var i=t.return;try{Xi(t)}catch(u){Q(t,i,u)}break;case 5:var o=t.return;try{Xi(t)}catch(u){Q(t,o,u)}}}catch(u){Q(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var up=Math.ceil,cl=nt.ReactCurrentDispatcher,Ko=nt.ReactCurrentOwner,Ie=nt.ReactCurrentBatchConfig,L=0,q=null,X=null,ne=0,Ce=0,rn=St(0),Z=0,ir=null,Ut=0,Al=0,Xo=0,$n=null,he=null,Yo=0,yn=1/0,Ke=null,dl=!1,Ji=null,yt=null,jr=!1,dt=null,fl=0,Hn=0,bi=null,$r=-1,Hr=0;function de(){return L&6?K():$r!==-1?$r:$r=K()}function vt(e){return e.mode&1?L&2&&ne!==0?ne&-ne:Qf.transition!==null?(Hr===0&&(Hr=ua()),Hr):(e=R,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e):1}function Be(e,t,n,r){if(50<Hn)throw Hn=0,bi=null,Error(C(185));ur(e,n,r),(!(L&2)||e!==q)&&(e===q&&(!(L&2)&&(Al|=n),Z===4&&at(e,ne)),xe(e,r),n===1&&L===0&&!(t.mode&1)&&(yn=K()+500,Sl&&Et()))}function xe(e,t){var n=e.callbackNode;Vd(e,t);var r=Yr(e,e===q?ne:0);if(r===0)n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ks(n),t===1)e.tag===0?Vf(fu.bind(null,e)):La(fu.bind(null,e)),Uf(function(){!(L&6)&&Et()}),n=null;else{switch(aa(r)){case 1:n=Co;break;case 4:n=oa;break;case 16:n=Xr;break;case 536870912:n=sa;break;default:n=Xr}n=Tc(n,Nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nc(e,t){if($r=-1,Hr=0,L&6)throw Error(C(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Yr(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var l=L;L|=2;var i=Ac();(q!==e||ne!==t)&&(Ke=null,yn=K()+500,Ft(e,t));do try{dp();break}catch(s){Pc(e,s)}while(!0);Lo(),cl.current=i,L=l,X!==null?t=0:(q=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=Ni(e),l!==0&&(r=l,t=qi(e,l))),t===1)throw n=ir,Ft(e,0),at(e,r),xe(e,K()),n;if(t===6)at(e,r);else{if(l=e.current.alternate,!(r&30)&&!ap(l)&&(t=pl(e,r),t===2&&(i=Ni(e),i!==0&&(r=i,t=qi(e,i))),t===1))throw n=ir,Ft(e,0),at(e,r),xe(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Mt(e,he,Ke);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Yo+500-K(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Di(Mt.bind(null,e,he,Ke),t);break}Mt(e,he,Ke);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*up(r/1960))-r,10<r){e.timeoutHandle=Di(Mt.bind(null,e,he,Ke),r);break}Mt(e,he,Ke);break;case 5:Mt(e,he,Ke);break;default:throw Error(C(329))}}}return xe(e,K()),e.callbackNode===n?Nc.bind(null,e):null}function qi(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=pl(e,t),e!==2&&(t=he,he=n,t!==null&&eo(t)),e}function eo(e){he===null?he=e:he.push.apply(he,e)}function ap(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ue(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Xo,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function fu(e){if(L&6)throw Error(C(327));cn();var t=Yr(e,0);if(!(t&1))return xe(e,K()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=Ni(e);r!==0&&(t=r,n=qi(e,r))}if(n===1)throw n=ir,Ft(e,0),at(e,t),xe(e,K()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,he,Ke),xe(e,K()),null}function Zo(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(yn=K()+500,Sl&&Et())}}function $t(e){dt!==null&&dt.tag===0&&!(L&6)&&cn();var t=L;L|=1;var n=Ie.transition,r=R;try{if(Ie.transition=null,R=1,e)return e()}finally{R=r,Ie.transition=n,L=t,!(L&6)&&Et()}}function Jo(){Ce=rn.current,U(rn)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bf(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:mn(),U(ye),U(ue),Uo();break;case 5:Bo(r);break;case 4:mn();break;case 13:U(H);break;case 19:U(H);break;case 10:Fo(r.type._context);break;case 22:case 23:Jo()}n=n.return}if(q=e,X=e=xt(e.current,null),ne=Ce=t,Z=0,ir=null,Xo=Al=Ut=0,he=$n=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Dt=null}return e}function Pc(e,t){do{var n=X;try{if(Lo(),Or.current=al,ul){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(Bt=0,b=Y=W=null,Bn=!1,nr=0,Ko.current=null,n===null||n.return===null){Z=1,ir=t,X=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,f=s,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=qs(o);if(y!==null){y.flags&=-257,eu(y,o,s,i,t),y.mode&1&&bs(i,a,t),t=y,u=a;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if(!(t&1)){bs(i,a,t),bo();break e}u=Error(C(426))}}else if($&&s.mode&1){var _=qs(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),eu(_,o,s,i,t),To(gn(u,s));break e}}i=u=gn(u,s),Z!==4&&(Z=2),$n===null?$n=[i]:$n.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=ac(i,u,t);Gs(i,m);break e;case 1:s=u;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yt===null||!yt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=cc(i,s,t);Gs(i,x);break e}}i=i.return}while(i!==null)}jc(n)}catch(w){t=w,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Ac(){var e=cl.current;return cl.current=al,e===null?al:e}function bo(){(Z===0||Z===3||Z===2)&&(Z=4),q===null||!(Ut&268435455)&&!(Al&268435455)||at(q,ne)}function pl(e,t){var n=L;L|=2;var r=Ac();(q!==e||ne!==t)&&(Ke=null,Ft(e,t));do try{cp();break}catch(l){Pc(e,l)}while(!0);if(Lo(),L=n,cl.current=r,X!==null)throw Error(C(261));return q=null,ne=0,Z}function cp(){for(;X!==null;)_c(X)}function dp(){for(;X!==null&&!Fd();)_c(X)}function _c(e){var t=Ic(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?jc(e):X=t,Ko.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=rp(n,t,Ce),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function Mt(e,t,n){var r=R,l=Ie.transition;try{Ie.transition=null,R=1,fp(e,t,n,r)}finally{Ie.transition=l,R=r}return null}function fp(e,t,n,r){do cn();while(dt!==null);if(L&6)throw Error(C(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qd(e,i),e===q&&(X=q=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,Tc(Xr,function(){return cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var o=R;R=1;var s=L;L|=4,Ko.current=null,op(e,n),Sc(n,e),Tf(Ii),Zr=!!Mi,Ii=Mi=null,e.current=n,sp(n),zd(),L=s,R=o,Ie.transition=i}else e.current=n;if(jr&&(jr=!1,dt=e,fl=l),i=e.pendingLanes,i===0&&(yt=null),Bd(n.stateNode),xe(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(dl)throw dl=!1,e=Ji,Ji=null,e;return fl&1&&e.tag!==0&&cn(),i=e.pendingLanes,i&1?e===bi?Hn++:(Hn=0,bi=e):Hn=0,Et(),null}function cn(){if(dt!==null){var e=aa(fl),t=Ie.transition,n=R;try{if(Ie.transition=null,R=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,fl=0,L&6)throw Error(C(331));var l=L;for(L|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var a=s[u];for(E=a;E!==null;){var f=E;switch(f.tag){case 0:case 11:case 15:Un(8,f,i)}var p=f.child;if(p!==null)p.return=f,E=p;else for(;E!==null;){f=E;var h=f.sibling,y=f.return;if(kc(f),f===a){E=null;break}if(h!==null){h.return=y,E=h;break}E=y}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var _=k.sibling;k.sibling=null,k=_}while(k!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Un(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,E=m;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=d;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Pl(9,s)}}catch(w){Q(s,s.return,w)}if(s===o){E=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,E=x;break e}E=s.return}}if(L=l,Et(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(vl,e)}catch{}r=!0}return r}finally{R=n,Ie.transition=t}}return!1}function pu(e,t,n){t=gn(n,t),t=ac(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(ur(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)pu(e,e,n);else for(;t!==null;){if(t.tag===3){pu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=gn(n,e),e=cc(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(ur(t,1,e),xe(t,e));break}}t=t.return}}function pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-Yo?Ft(e,0):Xo|=n),xe(e,t)}function Mc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=de();e=et(e,t),e!==null&&(ur(e,t,n),xe(e,n))}function hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mc(e,n)}function mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Mc(e,n)}var Ic;Ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,np(e,t,n);ge=!!(e.flags&131072)}else ge=!1,$&&t.flags&1048576&&Fa(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var l=fn(t,ue.current);an(t,n),l=Ho(null,t,r,e,l,n);var i=Wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,tl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ro(t),l.updater=Nl,t.stateNode=l,l._reactInternals=t,Ui(t,r,e,n),t=Wi(null,t,r,!0,i,n)):(t.tag=0,$&&i&&Mo(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=yp(r),e=Fe(r,e),l){case 0:t=Hi(null,t,r,e,n);break e;case 1:t=ru(null,t,r,e,n);break e;case 11:t=tu(null,t,r,e,n);break e;case 14:t=nu(null,t,r,Fe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Hi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),ru(e,t,r,l,n);case 3:e:{if(hc(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,l=i.element,$a(e,t),ol(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=gn(Error(C(423)),t),t=lu(e,t,r,n,l);break e}else if(r!==l){l=gn(Error(C(424)),t),t=lu(e,t,r,n,l);break e}else for(we=mt(t.stateNode.containerInfo.firstChild),Se=t,$=!0,Re=null,n=Ba(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===l){t=tt(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Ha(t),e===null&&Ri(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Ti(r,l)?o=null:i!==null&&Ti(r,i)&&(t.flags|=32),pc(e,t),ae(e,t,o,n),t.child;case 6:return e===null&&Ri(t),null;case 13:return mc(e,t,n);case 4:return Oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),tu(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O(ll,r._currentValue),r._currentValue=o,i!==null)if(Ue(i.value,o)){if(i.children===l.children&&!ye.current){t=tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Je(-1,n&-n),u.tag=2;var a=i.updateQueue;if(a!==null){a=a.shared;var f=a.pending;f===null?u.next=u:(u.next=f.next,f.next=u),a.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Oi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Oi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,an(t,n),l=Te(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Fe(r,t.pendingProps),l=Fe(r.type,l),nu(e,t,r,l,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Fe(r,l),Ur(e,t),t.tag=1,ve(r)?(e=!0,tl(t)):e=!1,an(t,n),uc(t,r,l),Ui(t,r,l,n),Wi(null,t,r,!0,e,n);case 19:return gc(e,t,n);case 22:return fc(e,t,n)}throw Error(C(156,t.tag))};function Tc(e,t){return ia(e,t)}function gp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new gp(e,t,n,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yp(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vo)return 11;if(e===xo)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")qo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kt:return zt(n.children,l,i,t);case yo:o=8,l|=8;break;case ci:return e=Me(12,n,t,l|2),e.elementType=ci,e.lanes=i,e;case di:return e=Me(13,n,t,l),e.elementType=di,e.lanes=i,e;case fi:return e=Me(19,n,t,l),e.elementType=fi,e.lanes=i,e;case Hu:return _l(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:o=10;break e;case $u:o=9;break e;case vo:o=11;break e;case xo:o=14;break e;case ot:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Me(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Hu,e.lanes=n,e.stateNode={isHidden:!1},e}function ii(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,l,i,o,s,u){return e=new vp(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(i),e}function xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ve(n))return Da(e,n,t)}return t}function Lc(e,t,n,r,l,i,o,s,u){return e=es(n,r,!0,e,l,i,o,s,u),e.context=Dc(null),n=e.current,r=de(),l=vt(n),i=Je(r,l),i.callback=t??null,gt(n,i,l),e.current.lanes=l,ur(e,l,r),xe(e,r),e}function jl(e,t,n,r){var l=t.current,i=de(),o=vt(l);return n=Dc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,o),e!==null&&(Be(e,l,o,i),Rr(e,l,o)),o}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function kp(){return null}var Fc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}Ml.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));jl(e,t,null,null)};Ml.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){jl(null,e,null,null)}),t[qe]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=fa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&ha(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function Cp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var a=hl(o);i.call(a)}}var o=Lc(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=o,e[qe]=o.current,Jn(e.nodeType===8?e.parentNode:e),$t(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var a=hl(u);s.call(a)}}var u=es(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=u,e[qe]=u.current,Jn(e.nodeType===8?e.parentNode:e),$t(function(){jl(t,u,n,r)}),u}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=hl(o);s.call(u)}}jl(t,o,e,l)}else o=Cp(n,t,e,l,r);return hl(o)}ca=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(wo(t,n|1),xe(t,K()),!(L&6)&&(yn=K()+500,Et()))}break;case 13:$t(function(){var r=et(e,1);if(r!==null){var l=de();Be(r,e,1,l)}}),ts(e,1)}};So=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=de();Be(t,e,134217728,n)}ts(e,134217728)}};da=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=de();Be(n,e,t,r)}ts(e,t)}};fa=function(){return R};pa=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};wi=function(e,t,n){switch(t){case"input":if(mi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=wl(r);if(!l)throw Error(C(90));Vu(r),mi(r,l)}}}break;case"textarea":Gu(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};qu=Zo;ea=$t;var wp={usingClientEntryPoint:!1,Events:[cr,Jt,wl,Ju,bu,Zo]},_n={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sp={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ra(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{vl=Mr.inject(Sp),Ve=Mr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(C(200));return xp(e,t,null,n)};Ne.createRoot=function(e,t){if(!rs(e))throw Error(C(299));var n=!1,r="",l=Fc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,l),e[qe]=t.current,Jn(e.nodeType===8?e.parentNode:e),new ns(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=ra(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return $t(e)};Ne.hydrate=function(e,t,n){if(!Il(t))throw Error(C(200));return Tl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Fc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,l,!1,i,o),e[qe]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};Ne.render=function(e,t,n){if(!Il(t))throw Error(C(200));return Tl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Il(e))throw Error(C(40));return e._reactRootContainer?($t(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};Ne.unstable_batchedUpdates=Zo;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Tl(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(e){console.error(e)}}zc(),zu.exports=Ne;var Ep=zu.exports,gu=Ep;ui.createRoot=gu.createRoot,ui.hydrateRoot=gu.hydrateRoot;function Nt(e){return Array.isArray?Array.isArray(e):Oc(e)==="[object Array]"}function Np(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function to(e){return e==null?"":Np(e)}function ce(e){return typeof e=="string"}function Vr(e){return typeof e=="number"}function Pp(e){return e===!0||e===!1||Ap(e)&&Oc(e)=="[object Boolean]"}function Rc(e){return typeof e=="object"}function Ap(e){return Rc(e)&&e!==null}function me(e){return e!=null}function Ir(e){return!e.trim().length}function Oc(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const _p="Incorrect 'index' type",jp=e=>`Invalid value for key ${e}`,Mp=e=>`Pattern length exceeds max of ${e}.`,Ip=e=>`Missing ${e} property in key`,Tp=e=>`Property 'weight' in key '${e}' must be a positive integer`,yu=Object.prototype.hasOwnProperty;class Dp{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{const l=Bc(r);this._keys.push(l),this._keyMap[l.id]=l,n+=l.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Bc(e){let t=null,n=null,r=null,l=1,i=null;if(ce(e)||Nt(e))r=e,t=vu(e),n=no(e);else{if(!yu.call(e,"name"))throw new Error(Ip("name"));const o=e.name;if(r=o,yu.call(e,"weight")&&(l=e.weight,l<=0))throw new Error(Tp(o));t=vu(o),n=no(o),i=e.getFn}return{path:t,id:n,weight:l,src:r,getFn:i}}function vu(e){return Nt(e)?e:e.split(".")}function no(e){return Nt(e)?e.join("."):e}function Lp(e,t){const n=[];let r=!1;const l=(i,o,s,u)=>{if(me(i))if(!o[s])n.push(u!==void 0?{v:i,i:u}:i);else{const a=o[s],f=i[a];if(!me(f))return;if(s===o.length-1&&(ce(f)||Vr(f)||Pp(f)||typeof f=="bigint"))n.push(u!==void 0?{v:to(f),i:u}:to(f));else if(Nt(f)){r=!0;for(let p=0,h=f.length;p<h;p+=1)l(f[p],o,s+1,p)}else o.length&&l(f,o,s+1,u)}};return l(e,ce(t)?t.split("."):t,0),r?n:n[0]}const Fp={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},zp={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Rp={location:0,threshold:.6,distance:100},Op={useExtendedSearch:!1,useTokenSearch:!1,getFn:Lp,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},M=Object.freeze({...zp,...Fp,...Rp,...Op}),Bp=/[^ ]+/g;function Up(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(l){const i=l.match(Bp).length;if(n.has(i))return n.get(i);const o=1/Math.pow(i,.5*e),s=parseFloat(Math.round(o*r)/r);return n.set(i,s),s},clear(){n.clear()}}}class ls{constructor({getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){this.norm=Up(n,3),this.getFn=t,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ce(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();ce(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}removeAll(t){for(let n=t.length-1;n>=0;n-=1)this.records.splice(t[n],1);for(let n=0,r=this.records.length;n<r;n+=1)this.records[n].i=n}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!me(t)||Ir(t))return;const r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){const r={i:n,$:{}};this.keys.forEach((l,i)=>{const o=l.getFn?l.getFn(t):this.getFn(t,l.path);if(me(o)){if(Nt(o)){const s=[];for(let u=0,a=o.length;u<a;u+=1){const f=o[u];if(me(f)){if(ce(f)){if(!Ir(f)){const p={v:f,i:u,n:this.norm.get(f)};s.push(p)}}else if(me(f.v)){const p=ce(f.v)?f.v:to(f.v);if(!Ir(p)){const h={v:p,i:f.i,n:this.norm.get(p)};s.push(h)}}}}r.$[i]=s}else if(ce(o)&&!Ir(o)){const s={v:o,n:this.norm.get(o)};r.$[i]=s}}}),this.records.push(r)}toJSON(){return{keys:this.keys.map(({getFn:t,...n})=>n),records:this.records}}}function Uc(e,t,{getFn:n=M.getFn,fieldNormWeight:r=M.fieldNormWeight}={}){const l=new ls({getFn:n,fieldNormWeight:r});return l.setKeys(e.map(Bc)),l.setSources(t),l.create(),l}function $p(e,{getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:r,records:l}=e,i=new ls({getFn:t,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(l),i}function Hp(e=[],t=M.minMatchCharLength){const n=[];let r=-1,l=-1,i=0;for(let o=e.length;i<o;i+=1){const s=e[i];s&&r===-1?r=i:!s&&r!==-1&&(l=i-1,l-r+1>=t&&n.push([r,l]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}const It=32;function Wp(e,t,n,{location:r=M.location,distance:l=M.distance,threshold:i=M.threshold,findAllMatches:o=M.findAllMatches,minMatchCharLength:s=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:a=M.ignoreLocation}={}){if(t.length>It)throw new Error(Mp(It));const f=t.length,p=e.length,h=Math.max(0,Math.min(r,p));let y=i,v=h;const k=(S,F)=>{const j=S/f;if(a)return j;const ee=Math.abs(h-F);return l?j+ee/l:ee?1:j},_=s>1||u,m=_?Array(p):[];let d;for(;(d=e.indexOf(t,v))>-1;){const S=k(0,d);if(y=Math.min(S,y),v=d+f,_){let F=0;for(;F<f;)m[d+F]=1,F+=1}}v=-1;let g=[],x=1,w=f+p;const A=1<<f-1;for(let S=0;S<f;S+=1){let F=0,j=w;for(;F<j;)k(S,h+j)<=y?F=j:w=j,j=Math.floor((w-F)/2+F);w=j;let ee=Math.max(1,h-j+1);const Ge=o?p:Math.min(h+j,p)+f,Ae=Array(Ge+2);Ae[Ge+1]=(1<<S)-1;for(let ke=Ge;ke>=ee;ke-=1){const lt=ke-1,Vt=n[e[lt]];if(_&&(m[lt]=+!!Vt),Ae[ke]=(Ae[ke+1]<<1|1)&Vt,S&&(Ae[ke]|=(g[ke+1]|g[ke])<<1|1|g[ke+1]),Ae[ke]&A&&(x=k(S,lt),x<=y)){if(y=x,v=lt,v<=h)break;ee=Math.max(1,2*h-v)}}if(k(S+1,h)>y)break;g=Ae}const P={isMatch:v>=0,score:Math.max(.001,x)};if(_){const S=Hp(m,s);S.length?u&&(P.indices=S):P.isMatch=!1}return P}function Vp(e){const t={};for(let n=0,r=e.length;n<r;n+=1){const l=e.charAt(n);t[l]=(t[l]||0)|1<<r-n-1}return t}function is(e){if(e.length<=1)return e;e.sort((n,r)=>n[0]-r[0]||n[1]-r[1]);const t=[e[0]];for(let n=1,r=e.length;n<r;n+=1){const l=t[t.length-1],i=e[n];i[0]<=l[1]+1?l[1]=Math.max(l[1],i[1]):t.push(i)}return t}const $c={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Qp=new RegExp("["+Object.keys($c).join("")+"]","g"),or=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Qp,t=>$c[t]):e=>e;class os{constructor(t,{location:n=M.location,threshold:r=M.threshold,distance:l=M.distance,includeMatches:i=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:s=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:a=M.ignoreDiacritics,ignoreLocation:f=M.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:l,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:u,ignoreDiacritics:a,ignoreLocation:f},t=u?t:t.toLowerCase(),t=a?or(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const p=(y,v)=>{this.chunks.push({pattern:y,alphabet:Vp(y),startIndex:v})},h=this.pattern.length;if(h>It){let y=0;const v=h%It,k=h-v;for(;y<k;)p(this.pattern.substr(y,It),y),y+=It;if(v){const _=h-It;p(this.pattern.substr(_),_)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:l}=this.options;if(t=n?t:t.toLowerCase(),t=r?or(t):t,this.pattern===t){const k={isMatch:!0,score:0};return l&&(k.indices=[[0,t.length-1]]),k}const{location:i,distance:o,threshold:s,findAllMatches:u,minMatchCharLength:a,ignoreLocation:f}=this.options,p=[];let h=0,y=!1;this.chunks.forEach(({pattern:k,alphabet:_,startIndex:m})=>{const{isMatch:d,score:g,indices:x}=Wp(t,k,_,{location:i+m,distance:o,threshold:s,findAllMatches:u,minMatchCharLength:a,includeMatches:l,ignoreLocation:f});d&&(y=!0),h+=g,d&&x&&p.push(...x)});const v={isMatch:y,score:y?h/this.chunks.length:1};return y&&l&&(v.indices=is(p)),v}}class Pt{constructor(t){this.pattern=t}static isMultiMatch(t){return xu(t,this.multiRegex)}static isSingleMatch(t){return xu(t,this.singleRegex)}search(t){return{isMatch:!1,score:1}}}function xu(e,t){const n=e.match(t);return n?n[1]:null}class Gp extends Pt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Kp extends Pt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Xp extends Pt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Yp extends Pt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Zp extends Pt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Jp extends Pt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Hc extends Pt{constructor(t,{location:n=M.location,threshold:r=M.threshold,distance:l=M.distance,includeMatches:i=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:s=M.minMatchCharLength,isCaseSensitive:u=M.isCaseSensitive,ignoreDiacritics:a=M.ignoreDiacritics,ignoreLocation:f=M.ignoreLocation}={}){super(t),this._bitapSearch=new os(t,{location:n,threshold:r,distance:l,includeMatches:i,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:u,ignoreDiacritics:a,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Wc extends Pt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const l=[],i=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+i,l.push([r,n-1]);const o=!!l.length;return{isMatch:o,score:o?0:1,indices:l}}}const ro=[Gp,Wc,Xp,Yp,Jp,Zp,Kp,Hc],ku=ro.length,bp="\0",qp="|";function eh(e){const t=[],n=e.length;let r=0;for(;r<n;){for(;r<n&&e[r]===" ";)r++;if(r>=n)break;let l=r;for(;l<n&&e[l]!==" "&&e[l]!=='"';)l++;if(l<n&&e[l]==='"'){for(l++;l<n;){if(e[l]==='"'){const i=l+1;if(i>=n||e[i]===" "){l++;break}if(e[i]==="$"&&(i+1>=n||e[i+1]===" ")){l+=2;break}}l++}t.push(e.substring(r,l)),r=l}else{for(;l<n&&e[l]!==" ";)l++;t.push(e.substring(r,l)),r=l}}return t}function th(e,t={}){return e.replace(/\\\|/g,bp).split(qp).map(r=>{const l=r.replace(/\u0000/g,"|"),i=eh(l.trim()).filter(s=>s&&!!s.trim()),o=[];for(let s=0,u=i.length;s<u;s+=1){const a=i[s];let f=!1,p=-1;for(;!f&&++p<ku;){const h=ro[p],y=h.isMultiMatch(a);y&&(o.push(new h(y,t)),f=!0)}if(!f)for(p=-1;++p<ku;){const h=ro[p],y=h.isSingleMatch(a);if(y){o.push(new h(y,t));break}}}return o})}const nh=new Set([Hc.type,Wc.type]);class rh{constructor(t,{isCaseSensitive:n=M.isCaseSensitive,ignoreDiacritics:r=M.ignoreDiacritics,includeMatches:l=M.includeMatches,minMatchCharLength:i=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:s=M.findAllMatches,location:u=M.location,threshold:a=M.threshold,distance:f=M.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:l,minMatchCharLength:i,findAllMatches:s,ignoreLocation:o,location:u,threshold:a,distance:f},t=n?t:t.toLowerCase(),t=r?or(t):t,this.pattern=t,this.query=th(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:l,ignoreDiacritics:i}=this.options;t=l?t:t.toLowerCase(),t=i?or(t):t;let o=0;const s=[];let u=0,a=!1;for(let f=0,p=n.length;f<p;f+=1){const h=n[f];s.length=0,o=0,a=!1;for(let y=0,v=h.length;y<v;y+=1){const k=h[y],{isMatch:_,indices:m,score:d}=k.search(t);if(_){o+=1,u+=d;const g=k.constructor.type;g.startsWith("inverse")&&(a=!0),r&&(nh.has(g)?s.push(...m):s.push(m))}else{u=0,o=0,s.length=0,a=!1;break}}if(o){const y={isMatch:!0,score:u/o};return a&&(y.hasInverse=!0),r&&(y.indices=is(s)),y}}return{isMatch:!1,score:1}}}const lo=[];function ss(...e){lo.push(...e)}function ml(e,t){for(let n=0,r=lo.length;n<r;n+=1){const l=lo[n];if(l.condition(e,t))return new l(e,t)}return new os(e,t)}const gl={AND:"$and",OR:"$or"},io={PATH:"$path",PATTERN:"$val"},oo=e=>!!(e[gl.AND]||e[gl.OR]),lh=e=>!!e[io.PATH],ih=e=>!Nt(e)&&Rc(e)&&!oo(e),Cu=e=>({[gl.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Vc(e,t,{auto:n=!0}={}){const r=l=>{if(ce(l)){const u={keyId:null,pattern:l};return n&&(u.searcher=ml(l,t)),u}const i=Object.keys(l),o=lh(l);if(!o&&i.length>1&&!oo(l))return r(Cu(l));if(ih(l)){const u=o?l[io.PATH]:i[0],a=o?l[io.PATTERN]:l[u];if(!ce(a))throw new Error(jp(u));const f={keyId:no(u),pattern:a};return n&&(f.searcher=ml(a,t)),f}const s={children:[],operator:i[0]};return i.forEach(u=>{const a=l[u];Nt(a)&&a.forEach(f=>{s.children.push(r(f))})}),s};return oo(e)||(e=Cu(e)),r(e)}function so(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){let n=1;return e.forEach(({key:r,norm:l,score:i})=>{const o=r?r.weight:null;n*=Math.pow(i===0&&o?Number.EPSILON:i,(o||1)*(t?1:l))}),n}function oh(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(n=>{n.score=so(n.matches,{ignoreFieldNorm:t})})}class sh{constructor(t){this.limit=t,this.heap=[]}get size(){return this.heap.length}shouldInsert(t){return this.size<this.limit||t<this.heap[0].score}insert(t){this.size<this.limit?(this.heap.push(t),this._bubbleUp(this.size-1)):t.score<this.heap[0].score&&(this.heap[0]=t,this._sinkDown(0))}extractSorted(t){return this.heap.sort(t)}_bubbleUp(t){const n=this.heap;for(;t>0;){const r=t-1>>1;if(n[t].score<=n[r].score)break;const l=n[t];n[t]=n[r],n[r]=l,t=r}}_sinkDown(t){const n=this.heap,r=n.length;let l=t;do{t=l;const i=2*t+1,o=2*t+2;if(i<r&&n[i].score>n[l].score&&(l=i),o<r&&n[o].score>n[l].score&&(l=o),l!==t){const s=n[t];n[t]=n[l],n[l]=s}}while(l!==t)}}function uh(e,t){const n=e.matches;t.matches=[],me(n)&&n.forEach(r=>{if(!me(r.indices)||!r.indices.length)return;const{indices:l,value:i}=r,o={indices:l,value:i};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),t.matches.push(o)})}function ah(e,t){t.score=e.score}function ch(e,t,{includeMatches:n=M.includeMatches,includeScore:r=M.includeScore}={}){const l=[];return n&&l.push(uh),r&&l.push(ah),e.map(i=>{const{idx:o}=i,s={item:t[o],refIndex:o};return l.length&&l.forEach(u=>{u(i,s)}),s})}const dh=/\b\w+\b/g;function uo({isCaseSensitive:e=!1,ignoreDiacritics:t=!1}={}){return{tokenize(n){return e||(n=n.toLowerCase()),t&&(n=or(n)),n.match(dh)||[]}}}function fh(e,t,n){const r=new Map,l=new Map;let i=0;function o(s,u,a,f){const p=n.tokenize(s);if(!p.length)return;i++;const h=new Map;for(const y of p)h.set(y,(h.get(y)||0)+1);for(const[y,v]of h){const k={docIdx:u,keyIdx:a,subIdx:f,tf:v};let _=r.get(y);_||(_=[],r.set(y,_)),_.push(k),l.set(y,(l.get(y)||0)+1)}}for(const s of e){const{i:u,v:a,$:f}=s;if(a!==void 0){o(a,u,-1,-1);continue}if(f)for(let p=0;p<t;p++){const h=f[p];if(h)if(Array.isArray(h))for(const y of h)o(y.v,u,p,y.i??-1);else o(h.v,u,p,-1)}}return{terms:r,fieldCount:i,df:l}}function ph(e,t,n,r){const{i:l,v:i,$:o}=t;function s(u,a,f){const p=r.tokenize(u);if(!p.length)return;e.fieldCount++;const h=new Map;for(const y of p)h.set(y,(h.get(y)||0)+1);for(const[y,v]of h){const k={docIdx:l,keyIdx:a,subIdx:f,tf:v};let _=e.terms.get(y);_||(_=[],e.terms.set(y,_)),_.push(k),e.df.set(y,(e.df.get(y)||0)+1)}}if(i!==void 0){s(i,-1,-1);return}if(o)for(let u=0;u<n;u++){const a=o[u];if(a)if(Array.isArray(a))for(const f of a)s(f.v,u,f.i??-1);else s(a.v,u,-1)}}function wu(e,t){for(const[n,r]of e.terms){const l=r.filter(o=>o.docIdx!==t),i=r.length-l.length;i>0&&(e.fieldCount-=i,e.df.set(n,(e.df.get(n)||0)-i),l.length===0?(e.terms.delete(n),e.df.delete(n)):e.terms.set(n,l))}}class rt{constructor(t,n,r){this.options={...M,...n},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Dp(this.options.keys),this._docs=t,this._myIndex=null,this._invertedIndex=null,this.setCollection(t,r),this._lastQuery=null,this._lastSearcher=null}_getSearcher(t){if(this._lastQuery===t)return this._lastSearcher;const n=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,r=ml(t,n);return this._lastQuery=t,this._lastSearcher=r,r}setCollection(t,n){if(this._docs=t,n&&!(n instanceof ls))throw new Error(_p);if(this._myIndex=n||Uc(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const r=uo({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=fh(this._myIndex.records,this._myIndex.keys.length,r)}}add(t){if(me(t)&&(this._docs.push(t),this._myIndex.add(t),this._invertedIndex)){const n=this._myIndex.records[this._myIndex.records.length-1],r=uo({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});ph(this._invertedIndex,n,this._myIndex.keys.length,r)}}remove(t=()=>!1){const n=[],r=[];for(let l=0,i=this._docs.length;l<i;l+=1)t(this._docs[l],l)&&(n.push(this._docs[l]),r.push(l));if(r.length){if(this._invertedIndex)for(const l of r)wu(this._invertedIndex,l);for(let l=r.length-1;l>=0;l-=1)this._docs.splice(r[l],1);this._myIndex.removeAll(r)}return n}removeAt(t){this._invertedIndex&&wu(this._invertedIndex,t);const n=this._docs.splice(t,1)[0];return this._myIndex.removeAt(t),n}getIndex(){return this._myIndex}search(t,n){const{limit:r=-1}=n||{},{includeMatches:l,includeScore:i,shouldSort:o,sortFn:s,ignoreFieldNorm:u}=this.options;if(ce(t)&&!t.trim()){let p=this._docs.map((h,y)=>({item:h,refIndex:y}));return Vr(r)&&r>-1&&(p=p.slice(0,r)),p}const a=Vr(r)&&r>0&&ce(t);let f;if(a){const p=new sh(r);ce(this._docs[0])?this._searchStringList(t,{heap:p,ignoreFieldNorm:u}):this._searchObjectList(t,{heap:p,ignoreFieldNorm:u}),f=p.extractSorted(s)}else f=ce(t)?ce(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t),oh(f,{ignoreFieldNorm:u}),o&&f.sort(s),Vr(r)&&r>-1&&(f=f.slice(0,r));return ch(f,this._docs,{includeMatches:l,includeScore:i})}_searchStringList(t,{heap:n,ignoreFieldNorm:r}={}){const l=this._getSearcher(t),{records:i}=this._myIndex,o=n?null:[];return i.forEach(({v:s,i:u,n:a})=>{if(!me(s))return;const{isMatch:f,score:p,indices:h}=l.searchIn(s);if(f){const y={item:s,idx:u,matches:[{score:p,value:s,norm:a,indices:h}]};n?(y.score=so(y.matches,{ignoreFieldNorm:r}),n.shouldInsert(y.score)&&n.insert(y)):o.push(y)}}),o}_searchLogical(t){const n=Vc(t,this.options),r=(s,u,a)=>{if(!("children"in s)){const{keyId:y,searcher:v}=s;let k;return y===null?(k=[],this._myIndex.keys.forEach((_,m)=>{k.push(...this._findMatches({key:_,value:u[m],searcher:v}))})):k=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(u,y),searcher:v}),k&&k.length?[{idx:a,item:u,matches:k}]:[]}const{children:f,operator:p}=s,h=[];for(let y=0,v=f.length;y<v;y+=1){const k=f[y],_=r(k,u,a);if(_.length)h.push(..._);else if(p===gl.AND)return[]}return h},l=this._myIndex.records,i=new Map,o=[];return l.forEach(({$:s,i:u})=>{if(me(s)){const a=r(n,s,u);a.length&&(i.has(u)||(i.set(u,{idx:u,item:s,matches:[]}),o.push(i.get(u))),a.forEach(({matches:f})=>{i.get(u).matches.push(...f)}))}}),o}_searchObjectList(t,{heap:n,ignoreFieldNorm:r}={}){const l=this._getSearcher(t),{keys:i,records:o}=this._myIndex,s=n?null:[];return o.forEach(({$:u,i:a})=>{if(!me(u))return;const f=[];let p=!1,h=!1;if(i.forEach((y,v)=>{const k=this._findMatches({key:y,value:u[v],searcher:l});k.length?(f.push(...k),k[0].hasInverse&&(h=!0)):p=!0}),!(h&&p)&&f.length){const y={idx:a,item:u,matches:f};n?(y.score=so(y.matches,{ignoreFieldNorm:r}),n.shouldInsert(y.score)&&n.insert(y)):s.push(y)}}),s}_findMatches({key:t,value:n,searcher:r}){if(!me(n))return[];const l=[];if(Nt(n))n.forEach(({v:i,i:o,n:s})=>{if(!me(i))return;const{isMatch:u,score:a,indices:f,hasInverse:p}=r.searchIn(i);u&&l.push({score:a,key:t,value:i,idx:o,norm:s,indices:f,hasInverse:p})});else{const{v:i,n:o}=n,{isMatch:s,score:u,indices:a,hasInverse:f}=r.searchIn(i);s&&l.push({score:u,key:t,value:i,norm:o,indices:a,hasInverse:f})}return l}}class hh{static condition(t,n){return n.useTokenSearch}constructor(t,n){this.options=n,this.analyzer=uo({isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics});const r=this.analyzer.tokenize(t),l=n._invertedIndex,{df:i,fieldCount:o}=l;this.termSearchers=[],this.idfWeights=[];for(const s of r){this.termSearchers.push(new os(s,{location:n.location,threshold:n.threshold,distance:n.distance,includeMatches:n.includeMatches,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength,isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics,ignoreLocation:!0}));const u=i.get(s)||0,a=Math.log(1+(o-u+.5)/(u+.5));this.idfWeights.push(a)}}searchIn(t){if(!this.termSearchers.length)return{isMatch:!1,score:1};const n=[];let r=0,l=0,i=0;for(let u=0;u<this.termSearchers.length;u++){const a=this.termSearchers[u].searchIn(t),f=this.idfWeights[u];l+=f,a.isMatch&&(i++,r+=f*(1-a.score),a.indices&&n.push(...a.indices))}if(i===0)return{isMatch:!1,score:1};const o=l>0?1-r/l:0,s={isMatch:!0,score:Math.max(.001,o)};return this.options.includeMatches&&n.length&&(s.indices=is(n)),s}}rt.version="7.3.0";rt.createIndex=Uc;rt.parseIndex=$p;rt.config=M;rt.match=function(e,t,n){return ml(e,{...M,...n}).searchIn(t)};rt.parseQuery=Vc;ss(rh);ss(hh);rt.use=function(...e){e.forEach(t=>ss(t))};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=z.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...s},u)=>z.createElement("svg",{ref:u,...gh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qc("lucide",l),...s},[...o.map(([a,f])=>z.createElement(a,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(e,t)=>{const n=z.forwardRef(({className:r,...l},i)=>z.createElement(yh,{ref:i,iconNode:t,className:Qc(`lucide-${mh(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=le("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=le("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=le("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=le("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=le("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=le("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=le("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=le("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=le("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=le("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=le("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),jh=[{label:"התחלה מהירה",icon:Zc,ids:["quick-start"]},{label:"יסודות",icon:xh,ids:[1,2,3,4]},{label:"כלים יומיומיים",icon:Ah,ids:[5,6,7,8]},{label:"כלים מתקדמים",icon:Su,ids:[9,10,11,12]},{label:"אג'נטים ופיתוח",icon:Su,ids:[13,14,15,16]},{label:"רפרנס",icon:Eh,ids:[17,18,19,20,21,22,23]}];function Mh({chapters:e,activeId:t,favorites:n,onSelect:r}){const l=Object.fromEntries(e.map(i=>[i.id,i]));return c.jsxs("aside",{className:"w-64 min-h-screen bg-white dark:bg-gray-800 border-l border-gray-100 dark:border-gray-700 flex flex-col",children:[c.jsx("div",{className:"p-4 border-b border-gray-100 dark:border-gray-700",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-2xl",children:"🤖"}),c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-brand-dark dark:text-brand-light text-sm",children:"Claude Hub"}),c.jsx("div",{className:"text-xs text-gray-400",children:"המדריך האינטראקטיבי"})]})]})}),c.jsxs("nav",{className:"flex-1 overflow-y-auto p-3 space-y-4",children:[c.jsxs("button",{onClick:()=>r("ask"),className:`sidebar-item w-full text-right ${t==="ask"?"active":"text-gray-600 dark:text-gray-300"}`,children:[c.jsx(Kc,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:"שאלי שאלה"})]}),c.jsxs("button",{onClick:()=>r("quick-start"),className:`sidebar-item w-full text-right ${t==="quick-start"?"active":"text-gray-600 dark:text-gray-300"}`,children:[c.jsx(Zc,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:"Quick Start"})]}),n.length>0&&c.jsxs("div",{children:[c.jsxs("div",{className:"text-xs text-gray-400 px-3 mb-1 flex items-center gap-1",children:[c.jsx(Yc,{className:"w-3 h-3"})," מועדפים"]}),n.map(i=>{const o=l[i];return o?c.jsx("button",{onClick:()=>r(i),className:`sidebar-item w-full text-right ${t===i?"active":"text-gray-600 dark:text-gray-300"}`,children:c.jsx("span",{className:"truncate text-xs",children:o.shortTitle||o.title})},i):null})]}),jh.slice(1).map(i=>c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-gray-400 px-3 mb-1",children:i.label}),i.ids.map(o=>{const s=l[o];return s?c.jsx("button",{onClick:()=>r(o),className:`sidebar-item w-full text-right ${t===o?"active":"text-gray-600 dark:text-gray-300"}`,children:c.jsx("span",{className:"text-xs truncate",children:s.shortTitle||s.title})},o):null})]},i.label))]})]})}const Ih=[{name:"Opus 4.7",id:"claude-opus-4-7",price:"$5 / $25",speed:2,power:5,cost:1,best:["קוד מורכב","ניתוח חוזים","אג'נטים ארוכים","כתיבה ספרותית"],color:"bg-purple-100 dark:bg-purple-900/30 border-purple-300",badge:"bg-purple-600"},{name:"Sonnet 4.6",id:"claude-sonnet-4-6",price:"$3 / $15",speed:4,power:4,cost:3,best:["רוב השימושים","כתיבה יומיומית","קוד רגיל","מחקר וסיכום"],color:"bg-blue-100 dark:bg-blue-900/30 border-blue-300",badge:"bg-blue-600",recommended:!0},{name:"Haiku 4.5",id:"claude-haiku-4-5",price:"$1 / $5",speed:5,power:3,cost:5,best:["צ׳אטבוטים בנפח","סיווג טקסט","תרגום מהיר","חילוץ נתונים פשוט"],color:"bg-green-100 dark:bg-green-900/30 border-green-300",badge:"bg-green-600"}],Eu=[{label:"ניתוח חוזה / מסמך משפטי",recommended:"claude-opus-4-7"},{label:"כתיבת קוד יומיומית",recommended:"claude-sonnet-4-6"},{label:"מחקר וסיכום",recommended:"claude-sonnet-4-6"},{label:"צ׳אטבוט בנפח גבוה",recommended:"claude-haiku-4-5"},{label:"אג'נט ארוך-טווח",recommended:"claude-opus-4-7"},{label:"כתיבה יצירתית",recommended:"claude-opus-4-7"},{label:"סיווג / מיון מיילים",recommended:"claude-haiku-4-5"},{label:"שאלות כלליות",recommended:"claude-sonnet-4-6"}];function si({value:e,max:t=5,color:n}){return c.jsx("div",{className:"flex gap-1",children:Array.from({length:t}).map((r,l)=>c.jsx("div",{className:`h-2 w-5 rounded-sm transition-all ${l<e?n:"bg-gray-200 dark:bg-gray-600"}`},l))})}function Th(){var r;const[e,t]=z.useState(null),n=e?(r=Eu.find(l=>l.label===e))==null?void 0:r.recommended:null;return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-200 mb-3",children:"בחר use case לקבלת המלצה:"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:Eu.map(l=>c.jsx("button",{onClick:()=>t(l.label===e?null:l.label),className:`text-xs px-3 py-1.5 rounded-full border transition-all ${l.label===e?"bg-brand-dark text-white border-brand-dark":"border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-brand-mid"}`,children:l.label},l.label))})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:Ih.map(l=>{const i=n===l.id,o=n&&!i;return c.jsxs("div",{className:`border-2 rounded-xl p-4 transition-all ${l.color} ${i?"ring-2 ring-brand-mid scale-105":""} ${o?"opacity-50":""}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("span",{className:`text-white text-xs px-2 py-0.5 rounded-full ${l.badge}`,children:l.name}),l.recommended&&c.jsx("span",{className:"text-xs text-green-600 dark:text-green-400 font-medium",children:"⭐ מומלץ"}),i&&c.jsx("span",{className:"text-xs text-brand-dark dark:text-brand-light font-bold",children:"✅ הכי מתאים"})]}),c.jsxs("div",{className:"text-lg font-bold text-gray-700 dark:text-gray-100 mb-3 ltr",children:[l.price,c.jsx("span",{className:"text-xs font-normal text-gray-400",children:" /1M tokens"})]}),c.jsxs("div",{className:"space-y-2 mb-3",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"מהירות"}),c.jsx(si,{value:l.speed,color:"bg-blue-400"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"עוצמה"}),c.jsx(si,{value:l.power,color:"bg-purple-400"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"חסכוני"}),c.jsx(si,{value:l.cost,color:"bg-green-400"})]})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"הכי טוב ל:"}),c.jsx("ul",{className:"space-y-0.5",children:l.best.map(s=>c.jsxs("li",{className:"text-xs text-gray-600 dark:text-gray-300",children:["• ",s]},s))})]})]},l.id)})})]})}const Dh=[{name:"Opus 4.7",inCost:5,outCost:25},{name:"Sonnet 4.6",inCost:3,outCost:15},{name:"Haiku 4.5",inCost:1,outCost:5}];function Lh(){const[e,t]=z.useState(1e4),[n,r]=z.useState(2e3),[l,i]=z.useState(100),o=s=>{const u=e/1e6*s.inCost*l,a=n/1e6*s.outCost*l;return(u+a).toFixed(4)};return c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-xs text-gray-500 mb-1 block",children:"Input tokens לקריאה"}),c.jsx("input",{type:"number",value:e,onChange:s=>t(Number(s.target.value)),className:"w-full border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 ltr"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-xs text-gray-500 mb-1 block",children:"Output tokens לקריאה"}),c.jsx("input",{type:"number",value:n,onChange:s=>r(Number(s.target.value)),className:"w-full border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 ltr"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-xs text-gray-500 mb-1 block",children:"מספר קריאות API"}),c.jsx("input",{type:"number",value:l,onChange:s=>i(Number(s.target.value)),className:"w-full border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 ltr"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:Dh.map(s=>c.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-center",children:[c.jsx("div",{className:"font-semibold text-sm text-gray-700 dark:text-gray-200 mb-1",children:s.name}),c.jsxs("div",{className:"text-2xl font-bold text-brand-dark dark:text-brand-light ltr",children:["$",o(s)]}),c.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["לכל ",l.toLocaleString()," קריאות"]}),c.jsxs("div",{className:"text-xs text-gray-400 ltr",children:["$",(o(s)/l).toFixed(6)," לקריאה"]})]},s.name))}),c.jsx("p",{className:"text-xs text-gray-400 text-center",children:"מחירים לפי אפריל 2026. 1,000 מילים ≈ 750 tokens."})]})}function Fh(e){return e?e.split(`
`).map((t,n)=>t.startsWith("### ")?c.jsx("h3",{className:"font-bold text-base text-gray-700 dark:text-gray-200 mt-4 mb-2",children:t.slice(4)},n):t.startsWith("## ")?c.jsx("h2",{className:"font-bold text-lg text-brand-dark dark:text-brand-light mt-5 mb-2 border-b border-gray-100 dark:border-gray-700 pb-1",children:t.slice(3)},n):t.startsWith("# ")?c.jsx("h1",{className:"font-bold text-xl mt-4 mb-2",children:t.slice(2)},n):t.startsWith("- ")||t.startsWith("* ")?c.jsx("li",{className:"text-sm text-gray-600 dark:text-gray-300 mr-4 mb-0.5",children:t.slice(2)},n):t.startsWith("> ")?c.jsx("blockquote",{className:"border-r-4 border-brand-light pr-3 text-sm text-gray-500 italic my-2",children:t.slice(2)},n):t.match(/^```/)?null:t.trim()===""?c.jsx("div",{className:"h-2"},n):c.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-1",children:t},n)):null}const zh="https://claude.ai/new";function Rh({chapter:e,isFavorite:t,onToggleFavorite:n}){const[r,l]=z.useState(!1),[i,o]=z.useState(!1);if(!e)return c.jsx("div",{className:"p-8 text-gray-400 text-center",children:"בחר פרק מהסרגל הצדדי"});const s=()=>{const u=`אני רוצה להבין לעומק את הנושא: "${e.title}". ${e.tldr||""} עזור לי ליישם זאת בעבודה שלי.`;navigator.clipboard.writeText(u),l(!0),setTimeout(()=>l(!1),1500)};return c.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[c.jsxs("div",{className:"flex items-start justify-between mb-4 gap-3",children:[c.jsxs("div",{className:"flex-1",children:[c.jsx("h1",{className:"text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight",children:e.title}),e.updatedAt&&c.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["עודכן: ",e.updatedAt]})]}),c.jsxs("div",{className:"flex gap-2 shrink-0",children:[c.jsx("button",{onClick:n,className:`btn-ghost flex items-center gap-1 ${t?"text-yellow-500 border-yellow-300":""}`,title:"הוסף למועדפים",children:c.jsx(Yc,{className:`w-4 h-4 ${t?"fill-yellow-400":""}`})}),c.jsxs("button",{onClick:s,className:"btn-ghost flex items-center gap-1 text-xs",children:[c.jsx(Sh,{className:"w-3.5 h-3.5"}),r?"הועתק!":"העתק כפרומפט"]}),c.jsxs("a",{href:zh,target:"_blank",rel:"noopener noreferrer",className:"btn-primary flex items-center gap-1 text-xs",children:[c.jsx(Gc,{className:"w-3.5 h-3.5"}),"פתח ב-Claude.ai"]})]})]}),e.tldr&&c.jsxs("div",{className:"tldr-box",children:[c.jsx("div",{className:"text-xs font-bold text-brand-dark dark:text-brand-light mb-1 uppercase tracking-wide",children:"TL;DR"}),c.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 leading-relaxed",children:e.tldr})]}),e.id===17&&c.jsxs("div",{className:"chapter-card",children:[c.jsx("h2",{className:"font-bold text-lg text-brand-dark dark:text-brand-light mb-4",children:"📊 השוואת מודלים אינטראקטיבית"}),c.jsx(Th,{})]}),e.id===16&&c.jsxs("div",{className:"chapter-card",children:[c.jsx("h2",{className:"font-bold text-lg text-brand-dark dark:text-brand-light mb-4",children:"🧮 מחשבון עלויות API"}),c.jsx(Lh,{})]}),e.content&&c.jsxs("div",{className:"chapter-card",children:[c.jsx("div",{className:`overflow-hidden transition-all ${i?"":"max-h-96"}`,children:c.jsx("div",{className:"prose-sm",children:Fh(e.content)})}),e.content.split(`
`).length>30&&c.jsx("button",{onClick:()=>o(u=>!u),className:"mt-4 flex items-center gap-1 text-brand-mid text-sm hover:underline",children:i?c.jsxs(c.Fragment,{children:[c.jsx(wh,{className:"w-4 h-4"})," הצג פחות"]}):c.jsxs(c.Fragment,{children:[c.jsx(kh,{className:"w-4 h-4"})," הצג הכל"]})})]})]})}function Oh({query:e,onChange:t}){return c.jsxs("div",{className:"relative flex-1 max-w-xl",children:[c.jsx(Xc,{className:"absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),c.jsx("input",{type:"text",value:e,onChange:n=>t(n.target.value),placeholder:"חיפוש בכל המדריך...",className:"w-full pr-10 pl-8 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-mid"}),e&&c.jsx("button",{onClick:()=>t(""),className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:c.jsx(_h,{className:"w-4 h-4"})})]})}function Bh({icon:e,title:t,description:n,badge:r}){return c.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex gap-3 items-start hover:shadow-md transition-shadow",children:[e&&c.jsx("div",{className:"text-2xl shrink-0",children:e}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[c.jsx("h4",{className:"font-semibold text-sm text-gray-800 dark:text-gray-100 truncate",children:t}),r&&c.jsx("span",{className:"text-xs bg-brand-light/30 text-brand-dark dark:text-brand-light px-2 py-0.5 rounded-full shrink-0",children:r})]}),c.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 leading-relaxed",children:n})]})]})}const Uh=[{icon:"🌐",title:"גש ל-claude.ai",description:"התחבר עם מייל / Google / Apple. חינם להתחיל."},{icon:"💬",title:"כתוב פרומפט ספציפי",description:"ספציפיות > קוצר. ציין הקשר, פורמט, טון ואורך."},{icon:"📁",title:"צור Project",description:"מקבץ שיחות סביב נושא עם הוראות קבועות וקבצי ידע."},{icon:"🔌",title:"חבר Connector",description:"Gmail, Drive, Calendar — Claude פועל ישירות בשירותים שלך."},{icon:"⚡",title:"נסה Skills",description:"docx, xlsx, pptx, pdf — יצירת קבצים מקצועיים בשנייה."},{icon:"🤖",title:"Cowork — עובד אוטונומי",description:"תן משימה, חזור שעה אחר כך עם תוצר מוכן."}],$h=[{title:"ניתוח מסמך",prompt:"קרא את הקובץ המצורף וחלץ: (1) נקודות עיקריות (2) פעולות נדרשות (3) סיכון או בעיות. פורמט: bullets קצרים."},{title:"מייל מקצועי",prompt:"כתוב מייל [טון: מקצועי/ידידותי] ל[תפקיד] בנושא [X]. מטרה: [Y]. אורך: 80-120 מילים. חתימה: [שם]."},{title:"קוד + הסבר",prompt:"כתוב [שפה] שעושה [X]. הוסף: (1) הערות בקוד (2) דוגמת קלט/פלט (3) מה לשים לב אליו."},{title:"סיכום מחקר",prompt:"חפש ברשת מידע על [נושא]. החזר: TL;DR (2 שורות), 5 נקודות מפתח, 2 מקורות אמינים."},{title:"השוואה",prompt:"השווה [A] ל-[B] בטבלה לפי הקריטריונים: [X, Y, Z]. בסוף: המלצה חד-משמעית למי מתאים מה."},{title:"תכנון פגישה",prompt:"בנה אגנדה לפגישה של [X דקות] בנושא [Y]. כלול: מטרה, נושאים, זמן לכל נושא, שאלות להחלטה."},{title:"Prompt XML",prompt:`<context>
[הקשר שלך]
</context>
<task>
[המשימה]
</task>
<constraints>
- [הגבלה 1]
- [הגבלה 2]
</constraints>`},{title:"צעד-אחר-צעד",prompt:"חשוב על [הבעיה] שלב אחר שלב לפני שאתה עונה. בסוף — תשובה סופית תמציתית."}];function Hh({onNavigate:e}){const[t,n]=Dn.useState(null),r=(l,i)=>{navigator.clipboard.writeText(l),n(i),setTimeout(()=>n(null),1500)};return c.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[c.jsxs("div",{className:"tldr-box",children:[c.jsx("h2",{className:"font-bold text-brand-dark dark:text-brand-light text-lg mb-1",children:"Quick Start — 6 צעדים לשליטה מלאה ב-Claude"}),c.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"למי שרוצה להתחיל מיד ולהבין את הכלים המרכזיים."})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",children:Uh.map((l,i)=>c.jsx(Bh,{icon:l.icon,title:l.title,description:l.description,badge:`שלב ${i+1}`},i))}),c.jsx("h3",{className:"font-bold text-gray-700 dark:text-gray-200 mb-4 text-base",children:"📋 גלריית פרומפטים מוכנים"}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:$h.map((l,i)=>c.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"font-semibold text-sm text-gray-700 dark:text-gray-200",children:l.title}),c.jsx("button",{onClick:()=>r(l.prompt,i),className:"text-xs btn-ghost",children:t===i?"✅ הועתק":"📋 העתק"})]}),c.jsx("pre",{className:"text-xs text-gray-500 dark:text-gray-400 whitespace-pre-wrap ltr bg-gray-50 dark:bg-gray-900 rounded p-2 leading-relaxed",children:l.prompt})]},i))}),c.jsx("div",{className:"mt-8 p-4 bg-brand-dark/5 dark:bg-brand-dark/20 rounded-xl text-center",children:c.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:"רוצה ללמוד לעומק? בחר פרק מהסרגל הצדדי."})})]})}function Wh(){const[e,t]=Dn.useState([]),[n,r]=Dn.useState(!1);return Dn.useEffect(()=>{t([])},[]),c.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[c.jsxs("div",{className:"tldr-box",children:[c.jsx("h2",{className:"font-bold text-lg text-brand-dark dark:text-brand-light mb-1",children:"📰 עדכונים יומיים מ-Anthropic"}),c.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:["בריפים יומיים בעברית שנשלחים למייל. להרצה ידנית: ",c.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded ltr text-xs",children:"npm run brief:dry"})]})]}),e.length===0?c.jsxs("div",{className:"chapter-card text-center py-10",children:[c.jsx("div",{className:"text-4xl mb-3",children:"📭"}),c.jsx("div",{className:"font-semibold text-gray-600 dark:text-gray-300 mb-2",children:"עדיין אין בריפים שמורים"}),c.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["הרץ ",c.jsx("code",{className:"bg-gray-100 dark:bg-gray-700 px-1 rounded ltr",children:"npm run brief:dry"})," מהטרמינל",c.jsx("br",{}),"כדי לבדוק שהמנגנון עובד, או ",c.jsx("code",{className:"ltr bg-gray-100 dark:bg-gray-700 px-1 rounded",children:"npm run brief"})," לשליחה אמיתית."]}),c.jsx("div",{className:"text-xs text-gray-400 space-y-1",children:c.jsx("p",{children:"מקורות: GitHub Claude Code Releases · Anthropic News · Help Center"})})]}):c.jsx("div",{className:"space-y-4",children:e.map((l,i)=>c.jsxs("div",{className:"chapter-card",children:[c.jsx("div",{className:"font-bold text-brand-dark dark:text-brand-light mb-2",children:l.date}),c.jsx("div",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:l.content})]},i))}),c.jsx("div",{className:"mt-6 grid grid-cols-1 md:grid-cols-3 gap-3",children:[{label:"Claude Code Releases",url:"https://github.com/anthropics/claude-code/releases",icon:"🚀"},{label:"Anthropic News",url:"https://www.anthropic.com/news",icon:"📰"},{label:"Release Notes",url:"https://platform.claude.com/docs/en/release-notes/overview",icon:"📋"}].map(l=>c.jsxs("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 p-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-sm transition-shadow text-sm",children:[c.jsx("span",{children:l.icon}),c.jsx("span",{className:"flex-1 text-gray-600 dark:text-gray-300",children:l.label}),c.jsx(Gc,{className:"w-3.5 h-3.5 text-gray-400"})]},l.label))})]})}const Vh=[{label:"מה ההבדל בין Opus, Sonnet ו-Haiku?",targetId:17},{label:"איך כותבים פרומפט טוב?",targetId:4},{label:"מה זה Projects ואיך משתמשים?",targetId:5},{label:"איך מחברים Gmail ו-Drive?",targetId:11},{label:"מה זה Skills?",targetId:9},{label:"מה זה Claude Code?",targetId:15},{label:"מה זה MCP?",targetId:12},{label:"כמה עולה Claude?",targetId:19},{label:"מה זה Artifacts?",targetId:6},{label:"Claude לעומת ChatGPT?",targetId:1}],Qh=[{icon:"🚀",label:"יסודות",ids:[1,2,3,4]},{icon:"🔧",label:"כלים יומיומיים",ids:[5,6,7,8]},{icon:"🔌",label:"קונקטורים ו-MCP",ids:[9,10,11,12]},{icon:"🤖",label:"אג'נטים ופיתוח",ids:[13,14,15,16]},{icon:"📖",label:"רפרנס",ids:[17,18,19,20]}];function Gh(e,t=3){if(!e)return[];const n=e.split(`
`).filter(i=>i.trim()),r=n.filter(i=>i.startsWith("- ")||i.startsWith("* "));return r.length>0?r.slice(0,t).map(i=>i.slice(2)):n.filter(i=>i.length>30&&!i.startsWith("#")&&!i.startsWith(">")).slice(0,t).map(i=>i.slice(0,120)+(i.length>120?"...":""))}function Kh({chapter:e,onReadMore:t}){const n=z.useMemo(()=>Gh(e.content),[e.content]);return c.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden",children:[c.jsxs("div",{className:"bg-gradient-to-l from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-5 py-4 border-b border-gray-100 dark:border-gray-700",children:[c.jsx("h3",{className:"font-bold text-gray-800 dark:text-gray-100 text-base",children:e.title}),e.updatedAt&&c.jsx("span",{className:"text-xs text-gray-400 mt-0.5 block",children:e.updatedAt})]}),c.jsxs("div",{className:"p-5",children:[e.tldr&&c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide",children:"TL;DR"}),c.jsxs("p",{className:"text-sm text-gray-700 dark:text-gray-300 leading-relaxed",children:[e.tldr.slice(0,200),e.tldr.length>200?"...":""]})]}),n.length>0&&c.jsx("ul",{className:"space-y-1.5 mb-4",children:n.map((r,l)=>c.jsxs("li",{className:"flex gap-2 text-sm text-gray-600 dark:text-gray-400",children:[c.jsx("span",{className:"text-blue-400 mt-0.5 shrink-0",children:"•"}),c.jsx("span",{children:r})]},l))}),c.jsxs("button",{onClick:()=>t(e.id),className:"flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 font-medium transition-colors",children:["הצג פרק מלא ",c.jsx(Ch,{className:"w-4 h-4"})]})]})]})}function Xh({chapters:e,onNavigate:t}){const[n,r]=z.useState(""),l=z.useRef(null);z.useEffect(()=>{var p;(p=l.current)==null||p.focus()},[]);const i=z.useMemo(()=>new rt(e.filter(p=>p.id!=="quick-start"),{keys:[{name:"title",weight:2},{name:"tldr",weight:1.5},{name:"content",weight:1}],threshold:.45,minMatchCharLength:2,includeScore:!0}),[e]),o=z.useMemo(()=>n.trim().length<2?[]:i.search(n).slice(0,3).map(p=>p.item),[n,i]),s=z.useMemo(()=>Object.fromEntries(e.map(p=>[p.id,p])),[e]),u=p=>{r(p.label)},a=p=>{p.key==="Enter"&&o.length>0&&t(o[0].id)},f=n.trim().length>=2;return c.jsxs("div",{className:"min-h-full bg-gradient-to-b from-blue-50/40 to-white dark:from-gray-900 dark:to-gray-900",children:[c.jsxs("div",{className:"max-w-2xl mx-auto px-6 pt-14 pb-8 text-center",children:[c.jsx("div",{className:"text-4xl mb-3",children:"🤖"}),c.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2",children:"שאלי כל שאלה על Claude"}),c.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm mb-8",children:"23 פרקים — תשובה מיידית לכל שאלה"}),c.jsxs("div",{className:"relative",children:[c.jsx(Xc,{className:"absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"}),c.jsx("input",{ref:l,type:"text",value:n,onChange:p=>r(p.target.value),onKeyDown:a,placeholder:'למשל: "מה ההבדל בין Opus לבין Haiku?" או "איך יוצרים Project?"',className:"w-full pr-12 pl-4 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm shadow-sm focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors text-right"}),n&&c.jsx("button",{onClick:()=>r(""),className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs",children:"✕"})]})]}),c.jsxs("div",{className:"max-w-2xl mx-auto px-6 pb-12",children:[f&&c.jsx("div",{className:"space-y-4 mb-10",children:o.length===0?c.jsxs("div",{className:"text-center py-8 text-gray-400",children:[c.jsx(Kc,{className:"w-8 h-8 mx-auto mb-2 opacity-40"}),c.jsx("p",{className:"text-sm",children:"לא נמצאה תשובה — נסי מילים אחרות"})]}):o.map(p=>c.jsx(Kh,{chapter:p,onReadMore:t},p.id))}),!f&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"mb-8",children:[c.jsx("h2",{className:"text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 text-right",children:"🔥 שאלות נפוצות — לחצי לתשובה מיידית"}),c.jsx("div",{className:"flex flex-wrap gap-2 justify-end",children:Vh.map((p,h)=>c.jsx("button",{onClick:()=>u(p),className:"text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full transition-all",children:p.label},h))})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 text-right",children:"📚 עיון לפי נושא"}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[Qh.map(p=>c.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-3",children:[c.jsx("div",{className:"text-lg mb-1",children:p.icon}),c.jsx("div",{className:"font-semibold text-xs text-gray-700 dark:text-gray-200 mb-2",children:p.label}),c.jsx("div",{className:"space-y-1",children:p.ids.map(h=>{const y=s[h];return y?c.jsx("button",{onClick:()=>t(h),className:"block w-full text-right text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 truncate transition-colors",children:y.shortTitle||y.title},h):null})})]},p.label)),c.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl p-3",children:[c.jsx("div",{className:"text-lg mb-1",children:"⚡"}),c.jsx("div",{className:"font-semibold text-xs mb-2",children:"Quick Start"}),c.jsx("p",{className:"text-xs text-blue-100 mb-2 leading-relaxed",children:"6 צעדים + 8 פרומפטים מוכנים"}),c.jsx("button",{onClick:()=>t("quick-start"),className:"text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded-lg transition-colors",children:"התחילי כאן"})]})]})]})]})]})]})}const Yh=[{id:"quick-start",title:"Quick Start",shortTitle:"⚡ Quick Start",tldr:"נקודת הכניסה למדריך — 6 צעדים לשליטה ב-Claude ו-8 פרומפטים מוכנים לשימוש מיידי.",content:"",updatedAt:"אפריל 2026"},{id:1,title:"1. מבוא — מה זה Claude ולמה זה חשוב",shortTitle:"מבוא — מה זה Claude ולמה…",tldr:'Claude הוא עוזר בינה מלאכותית שפותח על ידי Anthropic — חברת מחקר אמריקאית שהוקמה ב-2021 על ידי לשעבר חוקרים בכירים ב-OpenAI, ובראשם דריו ואמילי אמודיי. השם "Claude" הוא הוקרה לקלוד שאנון, ממציא תורת המידע. בניגוד לעוזרי AI אחרים, Claude נבנה מסביב לפילוסופיה של Constitutional AI ',content:`Claude הוא עוזר בינה מלאכותית שפותח על ידי Anthropic — חברת מחקר אמריקאית שהוקמה ב-2021 על ידי לשעבר חוקרים בכירים ב-OpenAI, ובראשם דריו ואמילי אמודיי. השם "Claude" הוא הוקרה לקלוד שאנון, ממציא תורת המידע.

בניגוד לעוזרי AI אחרים, Claude נבנה מסביב לפילוסופיה של Constitutional AI — גישת אימון שמטרתה להפיק מודל שעוזר, לא מזיק וכן. הדבר מתבטא בכך ש-Claude נוטה להיות זהיר יותר, מנמק יותר, ושקוף יותר לגבי מגבלותיו.

מה Claude יכול לעשות בפועל

שיחה וכתיבה: ניסוח מסמכים, מיילים, תוכן שיווקי, סיפורים, שירה, סיכומים.

ניתוח: פירוק טקסטים ארוכים, ניתוח חוזים, סיכום מאמרים אקדמיים, חילוץ תובנות מנתונים.

תכנות: כתיבת קוד, דיבאג, ארכיטקטורה, code review — כולל שפות נפוצות (Python, JavaScript, Go, Rust ועוד).

מחקר: חיפוש מידע ברשת, סינתזה ממקורות מרובים, השוואות, fact-checking.

יצירת תוצרים: מסמכי Word, מצגות PowerPoint, גליונות Excel, PDF, תרשימים ואתרי HTML/React.

פעולה אוטונומית (אג'נטים): ביצוע משימות מורכבות מקצה לקצה — לדוגמה, חקירה של נושא, יצירת דוח, ושליחתו במייל.

חיבור למערכות חיצוניות: Gmail, Google Drive, Slack, Notion, Jira ועוד עשרות שירותים.

מה Claude לא יכול לעשות (או עושה גרוע)

זמן אמת מבלי לחפש: ידע ה"מובנה" שלו מוגבל לתאריך מסוים (cutoff date). לצורך מידע עכשווי הוא חייב לחפש ברשת.

זיכרון בין שיחות: ברירת המחדל היא שכל שיחה עומדת בפני עצמה (יש פתרונות — ראה פרקים על Memory ו-Projects).

חישובים מתמטיים מורכבים בלי כלים: בעיות אריתמטיקה גדולות יכולות להיות לא מדויקות אם הוא לא מריץ קוד.

תוכן שמפר ערכים: לא יעזור עם תוכן מזיק, יצירת נשק, פגיעה בילדים וכו'.

רגשות אמיתיים: Claude לא חבר. הוא כלי. שימוש בריא במידה.

Claude לעומת ChatGPT ו-Gemini — בקיצור

היבט

Claude

ChatGPT

Gemini

יצרן

Anthropic

OpenAI

Google

חוזק עיקרי

כתיבה, ניתוח, קוד, אג'נטים ארוכי-טווח

כללי, יצירת תמונה (DALL-E)

אינטגרציה עמוקה ל-Google

חלון הקשר

200K-1M טוקנים

128K-1M טוקנים

1M-2M טוקנים

יצירת תמונה מובנית

לא (כן בעקיפין)

כן (DALL-E)

כן (Imagen)

סגנון תקשורת

ענייני, מנומק, זהיר

אקסטרוברטי, יצירתי

ידידותי, מובנה

טכנולוגיית סוכנים

Cowork, Computer Use, Code

Operator, GPTs

Agent Builder

ℹ️ לידיעתך: אין "מנצח" אוניברסלי. Claude נוטה להוביל בתחומי כתיבה ארוכה, ניתוח חוזים, תכנות מקצועי ועבודה אג'נטית ארוכת-טווח. זו הסיבה שמתכנתים, עורכי דין ויועצים מאמצים אותו בקצב גבוה במיוחד.`,updatedAt:"אפריל 2026"},{id:2,title:"2. המוצרים של Anthropic — מפת השטח",shortTitle:"המוצרים של Anthropic — מ…",tldr:"Anthropic מוכרת את אותו ה-AI דרך כמה ממשקים שונים, כל אחד מותאם לקהל אחר. חשוב להבין את ההבחנה הזו כדי לדעת איזה כלי מתאים לאיזו משימה: הממשק הצ'אט הקלאסי. ב-claude.ai (דפדפן), באפליקציות לאייפון/אנדרואיד, ובאפליקציית הדסקטופ ל-Mac/Windows. זה המקום שבו רוב המשתמשים מתחילים. כולל",content:`Anthropic מוכרת את אותו ה-AI דרך כמה ממשקים שונים, כל אחד מותאם לקהל אחר. חשוב להבין את ההבחנה הזו כדי לדעת איזה כלי מתאים לאיזו משימה:

Claude.ai (אתר ואפליקציה)

הממשק הצ'אט הקלאסי. ב-claude.ai (דפדפן), באפליקציות לאייפון/אנדרואיד, ובאפליקציית הדסקטופ ל-Mac/Windows. זה המקום שבו רוב המשתמשים מתחילים. כולל: שיחה, Projects, Artifacts, חיפוש ברשת, חיבור לקונקטורים, סקילים, יכולת ליצור קבצי Word/Excel/PowerPoint/PDF, וזיכרון בין שיחות (memory).

Claude API (Claude Platform)

עבור מפתחים שרוצים לבנות אפליקציות מבוססות Claude. גישה דרך HTTP REST, SDKs לפייתון/JS/Go/Java, ו-CLI חדש בשם ant. כאן מתבצע התשלום לפי טוקן — לא חבילה חודשית.

Claude Code

כלי שורת-פקודה (terminal) למפתחים — Claude שיודע את הקודבייס שלך. רץ בתוך VS Code, JetBrains, Vim — או ישירות בטרמינל. תומך ב-Skills, Plugins, Subagents, ו-MCP. אידיאלי לעבודה אג'נטית על קוד אמיתי.

Cowork

מוצר חדש (Q1 2026) שהפך ל-GA. Cowork הוא מעין "שולחן עבודה" שבו אפשר להפעיל את Claude כעובד אוטונומי — לא רק לשאול שאלה אלא לתת לו משימה ולחזור אחרי שעה. כולל computer use, plugins, scheduling של משימות, ואינטגרציה עמוקה ל-Drive, Gmail, DocuSign וכו'.

Claude in Chrome

הרחבה לדפדפן Chrome — Claude שיכול לראות את הטאב הפעיל ולסייע בעבודה ישירות עליו. מתאים למחקר ברשת, מילוי טפסים, סינתזה.

Claude for Excel ו-Claude for PowerPoint

תוספי Office רשמיים. הם מאפשרים ל-Claude לעבוד ישירות בתוך הקובץ שלך, לא רק להחזיר לך גרסה חדשה. לדוגמה — ניתוח דוח רבעוני בתוך גיליון אקסל קיים, או ניסוח מצגת ב-PowerPoint תוך שמירה על ה-template.

Claude Design

מוצר חדש שהושק עם Opus 4.7 (אפריל 2026) — סטודיו ויזואלי לעיצוב מצגות, פרוטוטיפים, one-pagers ופוסטרים. תוצר Anthropic Labs.

Claude Managed Agents

פלטפורמה ל-API שמאפשרת לבנות סוכנים אוטונומיים ארוכי-טווח עם sandboxing מאובטח, זיכרון אג'נט מובנה (agent memory), ו-streaming של אירועים. מיועד למפתחים מתקדמים.

ℹ️ לידיעתך: בקיצור: משתמש פרטי או בעל עסק קטן — כנראה תרצה Claude.ai (Pro או Max). מפתח — כנראה Claude Code + API. חברה — Cowork + Team/Enterprise plan.`,updatedAt:"אפריל 2026"},{id:3,title:"3. ממשק הצ'אט — יסודות העבודה",shortTitle:"ממשק הצ'אט — יסודות העבו…",tldr:"גש ל-claude.ai (חינם להתחיל) או הורד את האפליקציה. תיבת הקלט: שם אתה כותב. אפשר ללחוץ Shift+Enter לשורה חדשה, Enter לשליחה.",content:`איך מתחילים?

גש ל-claude.ai (חינם להתחיל) או הורד את האפליקציה.

התחבר עם מייל / Google / Apple.

התחל שיחה חדשה — פשוט הקלד שאלה.

האנטומיה של חלון הצ'אט

תיבת הקלט: שם אתה כותב. אפשר ללחוץ Shift+Enter לשורה חדשה, Enter לשליחה.

מצרף קבצים (📎): העלה PDF, Word, Excel, PowerPoint, תמונות, קבצי טקסט, CSV, JSON. עד 30MB לקובץ.

Search the web: הפעלה/כיבוי של חיפוש ברשת לשיחה הזו.

בורר מודל: בחירה בין Opus, Sonnet ו-Haiku (תלוי בחבילה שלך).

Customize / Settings: גישה ל-Projects, Custom Styles, Connectors, Skills, Memory.

היסטוריית שיחות: כל השיחות שלך נשמרות בצד שמאל. אפשר לחפש, למחוק, או להעביר ל-Project.

פעולות שכדאי להכיר

עריכת הודעה: לחיצה על הודעה שלך מאפשרת לערוך אותה — Claude יענה מחדש מהנקודה הזו. זה נשמר כעץ של שיחה.

Regenerate: לבקש את אותה תשובה מחדש — מועיל אם התשובה לא הייתה מוצלחת.

Copy / Share: להעתיק תשובה או לשתף את כל השיחה כקישור ציבורי.

Thumbs up/down: משוב — חשוב, זה איך Anthropic משפרת את המודל.

Incognito chat (שיחה פרטית): שיחה שלא נשמרת בהיסטוריה ולא משפיעה על ה-Memory.

💡 טיפ: שיחה ארוכה הופכת איטית? זה כי כל ההיסטוריה נשלחת בכל הודעה. כשהשיחה הופכת מסורבלת, פתח שיחה חדשה וסכם את מה שצריך מהקודמת.`,updatedAt:"אפריל 2026"},{id:4,title:"4. אומנות ה-Prompting — איך לדבר עם Claude",shortTitle:"אומנות ה-Prompting — איך…",tldr:'Prompting הוא הכישור החשוב ביותר. תוצאה גרועה היא כמעט תמיד תוצאה של פרומפט גרוע, לא של מודל גרוע. הנה העקרונות שעובדים: טוב: "אני יועץ פיננסי. כתוב מייל בעברית ללקוח עסקי שביטל פגישה בפעם השנייה ברצף. הטון: מקצועי אבל אישי, לא לחוץ. מטרה: לקבוע פגישה תוך שבועיים. אורך: 80-120 מי',content:`Prompting הוא הכישור החשוב ביותר. תוצאה גרועה היא כמעט תמיד תוצאה של פרומפט גרוע, לא של מודל גרוע. הנה העקרונות שעובדים:

עקרון 1: היה ספציפי, לא קצר

גרוע: "כתוב לי מייל ללקוח"

טוב: "אני יועץ פיננסי. כתוב מייל בעברית ללקוח עסקי שביטל פגישה בפעם השנייה ברצף. הטון: מקצועי אבל אישי, לא לחוץ. מטרה: לקבוע פגישה תוך שבועיים. אורך: 80-120 מילים. סיים בחתימה: 'בברכה, יוסי'."

עקרון 2: תן הקשר ודוגמאות

Claude מבצע טוב יותר כשהוא רואה דוגמה לפלט הרצוי. נסה: "הנה דוגמה לסגנון שאני מחפש: [דוגמה]. עכשיו כתוב X באותו סגנון".

עקרון 3: בקש חשיבה צעד-אחר-צעד

עבור משימות מורכבות, בקש מ-Claude לחשוב צעד-אחר-צעד לפני התשובה הסופית: "חשוב על הבעיה שלב אחר שלב, ואז תן את התשובה הסופית". זה משפר דיוק במשימות לוגיות ומתמטיות.

עקרון 4: השתמש בתגיות XML למבנה

Claude אומן עם תגיות XML ומגיב טוב להן. דוגמה:

<context>אני מנהל מוצר במוצר B2B SaaS</context><task>כתוב 5 שאלות לראיון משתמשים</task><constraints>- שאלות פתוחות, לא כן/לא- קצרות, עד 15 מילים כל אחת- בעברית</constraints>

עקרון 5: הגדר תפקיד

"אתה עורך לשון מנוסה. בדוק את הטקסט הבא ל...". זה ממקד את Claude. אבל זהירות — אל תיתן לזה ליצור תחושה של אישיות מזויפת. זה כלי להגדרת זווית התשובה.

עקרון 6: בקש פורמט מדויק

"החזר את התשובה כ-JSON עם השדות: title, summary, key_points (מערך)". כשעובדים עם API זה קריטי.

עקרון 7: אל תפחד לאתר

אם התשובה לא טובה — אל תתחיל מחדש. תגיד: "זה כמעט טוב, אבל הפסקה השנייה קצת ארוכה ויש שם משפט שמרגיש כמו פרסומת. תקן את זה תוך שמירה על שאר הטקסט".

💡 טיפ: אם תרצה לעמוק יותר — Anthropic פרסמה תיעוד מקיף ב-docs.claude.com תחת "Prompt Engineering Overview". יש שם פרקים על chain-of-thought, few-shot prompting, system prompts מתקדמים ועוד.`,updatedAt:"אפריל 2026"},{id:5,title:"5. Projects — סביבות עבודה מתמשכות",shortTitle:"Projects — סביבות עבודה …",tldr:"Project הוא תיקייה לוגית שמקבצת שיחות סביב נושא, עם הוראות מותאמות והעלאת קבצי ידע (knowledge base). זה הכלי החזק ביותר לשימוש חוזר ועקבי. מטופל ספציפי / לקוח / חברה: כל השיחות איתו במקום אחד.",content:`Project הוא תיקייה לוגית שמקבצת שיחות סביב נושא, עם הוראות מותאמות והעלאת קבצי ידע (knowledge base). זה הכלי החזק ביותר לשימוש חוזר ועקבי.

מתי להשתמש ב-Project

מטופל ספציפי / לקוח / חברה: כל השיחות איתו במקום אחד.

ספר / מאמר / תזה שאתה כותב: עם כל המסמכים הרלוונטיים זמינים.

תפקיד מקצועי שדורש הקשר חוזר: לדוגמה — "אני מורה לאנגלית בכיתה ה'". פעם אחת מסבירים, פעם אחת מעלים את תוכנית הלימודים, ומשם הכל זרם.

קודבייס: העלאת מבנה הפרויקט וקבצי ארכיטקטורה.

איך יוצרים Project

בסרגל הצד, לחץ "Projects" ואז "New Project".

תן שם תיאורי ("שיווק לקוח X", "ייעוץ זוגי — חוסר תקשורת").

ב-Project Instructions הוסף הוראות שיחולו בכל שיחה ב-Project: טון, פורמט מועדף, כללי שפה ("תמיד בעברית"), הקשר אישי.

ב-Project Knowledge העלה קבצים שאתה רוצה ש-Claude יוכל לגשת אליהם — מסמכי ייצוג, תקנות פנימיות, תמלילי פגישות, ספרי הפעלה.

Project Instructions — מה כדאי לכתוב שם

# התפקיד שלךאתה יועץ אסטרטגי שמסייע לי בניהול חברת SaaS B2B בתחום הביטוח.# סגנון- ענה בעברית, מקצועי אך לא רובוטי- השתמש בנתונים מהמסמכים שהעליתי לפני שאתה ממציא נתונים- אם אתה לא בטוח — אמור זאת במפורש# פורמט- תשובות קצרות לשאלות פשוטות- להמלצות אסטרטגיות — מבנה ברור: מצב, אופציות, המלצה, סיכונים# הקשרשם החברה: ChainGuard. צוות: 12 איש. ARR: 2.4M$. שלב: Series A.

מגבלות

ב-Pro: עד 5 פרויקטים פעילים. Max: עד 50.

Project Knowledge: יש מגבלת גודל (משתנה לפי חבילה — בדרך כלל עד 200K טוקנים של תוכן).

הזיכרון בין שיחות לא משותף בין פרויקטים — זה דווקא יתרון לבידוד הקשר.

💡 טיפ: Projects הם המקום הטבעי להעלאת "תיק האישי המקצועי שלך" — קורות חיים, תיק עבודות, סדנאות שעברת. כך כל בקשה לכתיבת LinkedIn / מייל מקצועי / הצעת מחיר תהיה ממוקדת בך, לא גנרית.`,updatedAt:"אפריל 2026"},{id:6,title:"6. Artifacts — יצירת תוצרים בתוך השיחה",shortTitle:"Artifacts — יצירת תוצרים…",tldr:`Artifact הוא תוצר שהפך לקיים בצד הצ'אט — אפשר לערוך אותו, לעדכן אותו, לשתף ולהוריד. זה מבדיל בין "סתם פלט" לבין משהו שאפשר באמת לעבוד עליו. מסמכים: Markdown, מסמכי Word (.docx), PDF, מצגות PowerPoint (.pptx), גליונות Excel (.xlsx).`,content:`Artifact הוא תוצר שהפך לקיים בצד הצ'אט — אפשר לערוך אותו, לעדכן אותו, לשתף ולהוריד. זה מבדיל בין "סתם פלט" לבין משהו שאפשר באמת לעבוד עליו.

מה אפשר ליצור כ-Artifact

מסמכים: Markdown, מסמכי Word (.docx), PDF, מצגות PowerPoint (.pptx), גליונות Excel (.xlsx).

קוד: סקריפטים בכל שפה, כולל ניתן להרצה ב-sandbox.

אתרים אינטראקטיביים: HTML/CSS/JS, רכיבי React (.jsx) — נטענים בתוך הצ'אט עצמו!

תרשימים ודיאגרמות: Mermaid (flowcharts, sequence diagrams), SVG.

תמונות גרפיות: SVG עם עיצוב, פוסטרים.

איך מבקשים Artifact?

לרוב אין צורך לבקש במפורש — Claude יוצר Artifact כשהבקשה מצדיקה זאת (קוד ארוך, מסמך, אתר). אבל אפשר לדחוף: "צור artifact של דף נחיתה ב-React", "בנה לי דשבורד אינטראקטיבי".

עריכת Artifact

פשוט בקש שינוי — "שנה את הצבע הראשי לכחול", "הוסף כפתור חיפוש". Claude יעדכן את ה-Artifact בלי ליצור עותק חדש בכל פעם. אפשר גם לעבור בין גרסאות (Versions) — חיצים בראש ה-Artifact.

דוגמאות מעולות לשימוש

דשבורד אישי לחיסכון עם React, גרפים ותחזיות.

מצגת מכירות מקצועית מתוך תיאור של הצעה ולקוח.

מחשבון רנטה / משכנתא / השקעות מותאם לעסקה ספציפית.

משחק לימודי לילדים — Tic-tac-toe, חידות, פלאשקארדס.

מסמך הסכם / חוזה — לפי תבנית.

תרשים זרימה של תהליך ארגוני.

Artifacts מבוססי-AI ב-Artifacts (Claudeception)

יכולת מתקדמת: Artifact מסוג React יכול לקרוא לעצמו ל-Claude API ולקבל תגובה. כך אפשר לבנות אפליקציות AI שלמות בתוך Claude עצמו — צ'אטבוט נושאי, מחולל סיפורים, מורה לשפה. אין צורך במפתח API — האימות מתבצע אוטומטית.

ℹ️ לידיעתך: Artifacts תומכים גם ב-שמירה מתמשכת (persistent storage): אפליקציה שאתה בונה יכולה לשמור נתונים שיישארו בין סשנים. זה הופך את Claude לכלי לבניית אפליקציות מיני אמיתיות, לא רק דמו.`,updatedAt:"אפריל 2026"},{id:7,title:"7. Custom Styles — סגנון אישי לתשובות",shortTitle:"Custom Styles — סגנון אי…",tldr:'Custom Style הוא הוראת-על שמשפיעה על האופן שבו Claude כותב — בכל הפרויקטים, בכל השיחות. במקום לחזור על "ענה קצר" או "בלי בולטים" כל פעם, מגדירים פעם אחת. Normal: ברירת המחדל — איזון בין פירוט לתמציתיות.',content:`Custom Style הוא הוראת-על שמשפיעה על האופן שבו Claude כותב — בכל הפרויקטים, בכל השיחות. במקום לחזור על "ענה קצר" או "בלי בולטים" כל פעם, מגדירים פעם אחת.

Styles מובנים

Normal: ברירת המחדל — איזון בין פירוט לתמציתיות.

Concise: תשובות קצרות, ללא הקדמות, ללא חזרות.

Explanatory: הסברים מפורטים עם דוגמאות, מתאים ללמידה.

Formal: סגנון עסקי / אקדמי, ללא סלנג.

יצירת סגנון מותאם

לחץ על בורר הסגנון בתחתית תיבת הצ'אט.

"Create a custom style"

יש שתי דרכים: תיאור ("כתוב כמו עורך הניו-יורקר — מנומס, אינטליגנטי, עם דוגמאות אנקדוטליות") או דוגמה (העלה דוגמת טקסט שכתוב באותו סגנון).

דוגמה לסגנון מותאם — "מנהל פיתוח עסקי"

- ענה תמיד באנגלית עסקית, בריטית קלאסית- התחל עם המסקנה (BLUF — Bottom Line Up Front)- משפטים קצרים, לא יותר מ-15 מילים- בלי בולטים, רק פסקאות זורמות- אם המידע לא ודאי — ציין את זה במפורש בסוגריים [estimate]

💡 טיפ: Custom Styles הם כלי הענק שאף אחד לא משתמש בו. השקעת 5 דקות בבניית סגנון אישי חוסכת אלפי תיקונים בעתיד.`,updatedAt:"אפריל 2026"},{id:8,title:"8. חיפוש ברשת, Research ו-Memory",shortTitle:"חיפוש ברשת, Research ו-M…",tldr:'Claude יכול לחפש את הרשת בזמן אמת. זה קריטי לכל שאלה שתלויה במידע עכשווי: חדשות, מחירים, אנשים בתפקיד, אירועי ספורט, חוקים. הפעלה: ברירת מחדל מופעלת. אפשר לכבות בהגדרות אם רוצים תשובות "זיכרון בלבד".',content:`Web Search (חיפוש ברשת)

Claude יכול לחפש את הרשת בזמן אמת. זה קריטי לכל שאלה שתלויה במידע עכשווי: חדשות, מחירים, אנשים בתפקיד, אירועי ספורט, חוקים.

הפעלה: ברירת מחדל מופעלת. אפשר לכבות בהגדרות אם רוצים תשובות "זיכרון בלבד".

ציטוטים: Claude מצטט מקורות עם קישורים (סימוני [1], [2] וכו'). תמיד בדוק את הקישור.

הגבלות: Claude לא יחפש תכנים מזיקים, לא יציג שמות של ילדים בחיפוש לזיהוי, ולא יציג ציטוטים ארוכים מטעמי זכויות יוצרים.

Research Mode (מצב מחקר עמוק)

Research הוא מצב נפרד שמיועד למחקר רציני — Claude יעשה עשרות חיפושים, יקרא מאמרים, יבצע cross-reference, ויחזיר דוח מקיף עם רשימת מקורות. נמשך בין 5 ל-45 דקות.

מתי: לפני קבלת החלטה גדולה (קנייה, השקעה), עבודה אקדמית, מחקר שוק, סקירה של תחום חדש.

זמינות: Pro, Max, Team, Enterprise.

איך: כפתור "Research" בתיבת הצ'אט. אפשר להשאיר ולחזור — Claude שולח התראה כשסיים.

Memory (זיכרון)

Memory מאפשר ל-Claude לזכור פרטים עליך בין שיחות. דברים כמו: השם שלך, תפקיד, תחומי עניין, פרויקטים שאתה עובד עליהם, סגנון מועדף.

הפעלה: Settings → Memory → Enable.

איך זה עובד: Claude יוצר ומעדכן רשומות זיכרון אוטומטית. אתה תראה הודעה כש-Claude זוכר משהו חדש.

שליטה: בכל רגע אפשר לעבור ל-Settings ולראות / לערוך / למחוק את הזיכרונות.

הוראות מפורשות: "זכור שאני צמחוני", "שכח את המידע על הפרויקט הישן" — Claude יבצע.

⚠️ חשוב: שיקולי פרטיות: אל תספר ל-Claude סיסמאות, מספרי כרטיסי אשראי, או מידע רפואי רגיש שאתה לא רוצה שיישמר. גם אם הסיכון נמוך — עיקרון הזהירות חשוב.`,updatedAt:"אפריל 2026"},{id:9,title:"9. Skills (סקילים) — הרחבת היכולות של Claude",shortTitle:"Skills (סקילים) — הרחבת …",tldr:'Skill הוא תיקייה עם הוראות וקוד שמלמדת את Claude איך לבצע משימה ספציפית בצורה עקבית ומקצועית. במקום לחזור בכל שיחה על "ככה אנחנו עורכים מסמכים בחברה" — בונים פעם אחת Skill וזהו. Anthropic מספקת סקילים מוכנים שעובדים אוטומטית:',content:`Skill הוא תיקייה עם הוראות וקוד שמלמדת את Claude איך לבצע משימה ספציפית בצורה עקבית ומקצועית. במקום לחזור בכל שיחה על "ככה אנחנו עורכים מסמכים בחברה" — בונים פעם אחת Skill וזהו.

ההבדל בין Skill ל-Project Instructions

היבט

Project Instructions

Skill

שימוש חוזר

בתוך Project אחד

כל השיחות, כל הפרויקטים

מורכבות

טקסט פשוט

טקסט + סקריפטים + קבצי עזר

טעינה

תמיד נטען

נטען רק כשרלוונטי (חיסכון בטוקנים)

שיתוף

אישי לפרויקט

אפשר לשתף ל-API ולחברי צוות

Built-in Skills של Anthropic

Anthropic מספקת סקילים מוכנים שעובדים אוטומטית:

docx: יצירה ועריכה של מסמכי Word — כולל TOC, headers, footers, tables, tracked changes.

xlsx: יצירת גליונות Excel עם נוסחאות, גרפים ופורמט תנאי.

pptx: יצירת מצגות PowerPoint מקצועיות עם עיצוב.

pdf: קריאה, יצירה, מילוי טפסים, מיזוג ופיצול PDF.

frontend-design: עיצוב רכיבי React/HTML מקצועיים.

canvas-design: יצירת אומנות סטטית ופוסטרים.

algorithmic-art: אומנות פרוצדורלית עם p5.js.

יצירת Skill מותאם — מבנה

Skill הוא תיקייה עם לפחות קובץ אחד: SKILL.md

my-skill/├── SKILL.md          (חובה)├── scripts/          (אופציונלי - קוד שיורץ)│   └── analyze.py├── references/       (אופציונלי - תיעוד נוסף)│   └── examples.md└── assets/           (אופציונלי - תמונות, פונטים, templates)

מבנה SKILL.md

---name: brand-guidelinesdescription: Apply Acme Corp brand guidelines to all presentations and documents. Use whenever creating external materials, marketing content, or anything representing Acme Corp.---# Acme Corp Brand Guidelines## Colors- Primary: #FF6B35- Secondary: #004E89## Typography- Headers: Montserrat Bold- Body: Open Sans Regular## When to applyWhenever creating: presentations, external documents, marketing materials.

⚠️ חשוב: הטריגר הקריטי הוא ה-description! Claude משתמש בו כדי להחליט מתי להפעיל את ה-Skill. כתוב אותו אסרטיבי — "Use whenever the user mentions X, Y, or Z". יותר טוב להיות "דחוף" מדי מאשר לא מספיק.

Progressive Disclosure

רעיון מרכזי: ה-SKILL.md לא נטען לחלוטין מההתחלה. Claude קורא קודם את התיאור (ה-frontmatter), מחליט אם רלוונטי, ורק אם כן — קורא את שאר התוכן. וגם אז, אם יש קבצי עזר, הוא קורא אותם רק במידת הצורך. כך לא נשרף חלון ההקשר.

איך מעלים Skill ל-Claude.ai

Settings → Features → Custom Skills

ארוז את התיקייה כ-zip

העלה — Claude יבדוק ויאשר

הפעל בשיחה — Claude יזהה אוטומטית מתי להפעיל

ℹ️ לידיעתך: זמינות Custom Skills: Pro, Max, Team, Enterprise. דורש שתהיה לך גישה ל-code execution. ב-Claude Code זה פשוט יותר — שמירת SKILL.md בתיקייה .claude/skills/

מאגרים ציבוריים של Skills

הרפו הרשמי של Anthropic: github.com/anthropics/skills — דוגמאות איכותיות לסקילים מוכנים.

Antigravity Awesome Skills: ספרייה קהילתית ענקית עם 1,200+ סקילים מותאמים לאג'נטים שונים. התקנה: npx antigravity-awesome-skills --claude

⚠️ חשוב: בטיחות חיונית: השתמש רק בסקילים ממקורות מהימנים. סקיל זדוני יכול לבצע פעולות מסוכנות. בדוק תמיד את ה-SKILL.md ואת הסקריפטים לפני העלאה.`,updatedAt:"אפריל 2026"},{id:10,title:"10. Connectors — חיבור לשירותים חיצוניים",shortTitle:"Connectors — חיבור לשירו…",tldr:"Connector מאפשר ל-Claude לדבר ישירות עם שירותים חיצוניים — לקרוא ממיילים, לכתוב ב-Notion, לחפש ב-Slack, לגשת ל-Google Drive. במקום לעשות העתק/הדבק, Claude מבצע את הפעולה. פרודוקטיביות: Google Drive, Gmail, Google Calendar, Outlook, Notion, Asana, Jira, Linear, ClickUp, Trello, Gi",content:`Connector מאפשר ל-Claude לדבר ישירות עם שירותים חיצוניים — לקרוא ממיילים, לכתוב ב-Notion, לחפש ב-Slack, לגשת ל-Google Drive. במקום לעשות העתק/הדבק, Claude מבצע את הפעולה.

Connectors רשמיים זמינים (אפריל 2026)

פרודוקטיביות: Google Drive, Gmail, Google Calendar, Outlook, Notion, Asana, Jira, Linear, ClickUp, Trello, GitHub, GitLab, Bitbucket.

תקשורת: Slack, Microsoft Teams, Discord.

עיצוב: Canva, Figma.

שיווק: Klaviyo, HubSpot, Mailchimp, Salesforce.

שירותים יומיומיים (השקה אפריל 2026): Uber, Uber Eats, Instacart, Resy, Booking.com, TripAdvisor, Viator, StubHub, Taskrabbit, Thumbtack.

פיתוח: Sentry, Linear, Stripe, Netlify, Vercel.

איך מחברים Connector

Settings → Connectors (או "Customize" בדסקטופ אפליקציה).

בחר את השירות מהרשימה.

"Connect" — תועבר לעמוד אישור OAuth.

אשר את ההרשאות שאתה רוצה לתת. הרשאות מינימום מומלצות — אפשר לחזור ולשנות.

חזור ל-Claude — הקונקטור פעיל.

שימוש בקונקטור

פשוט בקש: "חפש במיילים שלי הודעות מ-X בחודש האחרון וסכם", "צור אירוע ביומן ביום שלישי 10:00", "מה קורה במשימות פתוחות שלי ב-Linear?".

Claude ישאל אישור לפני פעולות שמשנות נתונים (יצירה, עריכה, מחיקה). ייתכן שתראה דיאלוג "Allow Claude to do X?". פעולות קריאה בלבד בדרך כלל לא דורשות אישור חוזר.

Deep Connectors

Anthropic השיקה ב-2026 גרסה מתקדמת בשם Deep Connectors — קונקטורים שמאפשרים ל-Claude לבצע רצפי פעולות אוטונומיים. לדוגמה: "מצא את ההסכם של לקוח X ב-Drive, חפש בו סעיפים סותרים, נסח מייל ללקוח עם הצעות לתיקון, ושמור אותו כטיוטה ב-Gmail". זה מתבצע ברצף — בלי שתאשר כל צעד.

⚠️ חשוב: ניהול הרשאות: בדוק תקופתית את ההרשאות שנתת. Settings → Connectors → לחץ על קונקטור → Manage Permissions. מומלץ לעשות revoke לקונקטורים שלא בשימוש.

הקמת קונקטור משלך (לארגונים)

ארגונים יכולים לבנות קונקטורים מותאמים אישית באמצעות MCP (פרק 12). זה מאפשר לחבר את Claude למערכות פנימיות (CRM פנימי, ERP, מסדי נתונים) בצורה מאובטחת.`,updatedAt:"אפריל 2026"},{id:11,title:"11. Google Drive, Gmail ו-Calendar",shortTitle:"Google Drive, Gmail ו-Ca…",tldr:'שלושת אלה הם הקונקטורים הפופולריים ביותר. כדאי להבין מה כל אחד מאפשר. חיפוש קבצים: "מצא את המצגת של הפגישה השנתית"',content:`שלושת אלה הם הקונקטורים הפופולריים ביותר. כדאי להבין מה כל אחד מאפשר.

Google Drive

חיפוש קבצים: "מצא את המצגת של הפגישה השנתית"

קריאת תוכן: "קרא את המסמך X וסכם אותו"

יצירת קבצים: "צור Doc חדש בתיקיית X עם תוכן Y"

הרשאות וsharing: בודקת ועדכון של הרשאות שיתוף

מטא-דאטה: מי יצר, מתי עודכן, גדלים וכו'

💡 טיפ: Drive מאפשר ל-Claude לחפש לפי תוכן — לא רק שמות קבצים. "כל מסמך שמזכיר את פרויקט X" — Claude יחפש בכל הקבצים.

Gmail

חיפוש: לפי שולח, נושא, מילות מפתח, תאריך

קריאה וסיכום: "מה היה במייל מהבוס שלי הבוקר?"

יצירת טיוטות: "כתוב לי טיוטת תשובה ל..."

ניהול תוויות: יצירת ושיוך תוויות (labels)

תזמון שליחה: עם הרשאות מתאימות

Google Calendar

הצגת לוח זמנים: "מה יש לי השבוע?"

יצירת אירועים: עם משתתפים, מיקום, תזכורות, חזרתיות

עדכון ומחיקה: "דחה את הפגישה ב-3 לשעה אחרי"

הצעת זמנים: "מצא לי שעה לפגישה של שעה השבוע, רצוי בוקר"

מענה להזמנות: אישור / סירוב לאירועים

דוגמה מורכבת — שילוב של שלושת השירותים

הבקשה: "בדוק במיילים את כל ההתכתבות עם הלקוח X בחודשיים האחרונים, צור סיכום ב-Doc חדש בתיקייה 'לקוחות', ותזמן פגישת מעקב לשבוע הבא."

מה Claude עושה:

מחפש ב-Gmail לפי דומיין הלקוח / שם, ב-60 ימים האחרונים.

קורא את ההתכתבות ומסכם נקודות מפתח.

יוצר Google Doc חדש בתיקיית "לקוחות" עם הסיכום.

מציע 3 חלונות זמן בשבוע הבא וממתין לאישור.

יוצר אירוע ביומן עם הזמנה ללקוח.

ℹ️ לידיעתך: הקסם של זה לא ב-AI — אלא בביטול הצורך לעבור בין אפליקציות. זה תהליך של 30-40 דקות עבודה ידנית, שהופך ל-3 דקות שיחה.`,updatedAt:"אפריל 2026"},{id:12,title:"12. MCP — Model Context Protocol",shortTitle:"MCP — Model Context Prot…",tldr:"MCP הוא תקן פתוח שמגדיר איך מודלים של AI מתחברים לכלים ולנתונים חיצוניים. Anthropic פיתחה אותו ופרסמה ב-2024 כקוד פתוח. היום הוא נתמך גם ב-Claude, Gemini, ChatGPT ועוד. בלי MCP: כל שילוב של Claude עם מערכת חיצונית דורש קוד ייעודי. עם MCP: יש פרוטוקול אחיד. שרת MCP מציג כלים, לקוח",content:`MCP הוא תקן פתוח שמגדיר איך מודלים של AI מתחברים לכלים ולנתונים חיצוניים. Anthropic פיתחה אותו ופרסמה ב-2024 כקוד פתוח. היום הוא נתמך גם ב-Claude, Gemini, ChatGPT ועוד.

למה MCP חשוב?

בלי MCP: כל שילוב של Claude עם מערכת חיצונית דורש קוד ייעודי. עם MCP: יש פרוטוקול אחיד. שרת MCP מציג כלים, לקוח MCP (Claude) משתמש בהם. כמו USB — חיבור אחד, הרבה ציוד היקפי.

מה זה שרת MCP

שרת MCP הוא תוכנה שחושפת כלים (tools), משאבים (resources) והוראות (prompts) דרך פרוטוקול MCP. הוא יכול להיות מקומי (רץ על המחשב שלך) או מרוחק (שירות בענן).

דוגמאות לשרתי MCP פופולריים

filesystem: גישה לקבצים מקומיים — Claude יכול לקרוא ולערוך תיקיות במחשב.

postgres / mysql: שאילתות למסד נתונים.

brave-search / google-search: מנועי חיפוש.

github: פעולות על מאגרי קוד.

slack / linear / notion: כלי עבודה (גם ככה זמינים כקונקטורים).

memory: בנקי זיכרון מתקדמים, מבוססי-גרף.

הקמת שרת MCP מקומי

ב-Claude Desktop יש תפריט הגדרות עם תמיכה ב-MCP servers. דוגמה לקובץ הגדרות שמוסיף שרת filesystem:

{  "mcpServers": {    "filesystem": {      "command": "npx",      "args": [        "-y",        "@modelcontextprotocol/server-filesystem",        "/Users/myname/Documents"      ]    }  }}

מיקום הקובץ:

macOS: ~/Library/Application Support/Claude/claude_desktop_config.json

Windows: %APPDATA%\\Claude\\claude_desktop_config.json

בניית שרת MCP משלך

Anthropic מספקת SDKs לפיתוח שרתי MCP בפייתון, TypeScript ועוד. רעיון בסיסי:

# Python example - server.pyfrom mcp.server.fastmcp import FastMCPmcp = FastMCP("my-server")@mcp.tool()def get_weather(city: str) -> str:    """Get the current weather for a city."""    # ... your code here    return f"Weather in {city}: Sunny, 22°C"if __name__ == "__main__":    mcp.run()

ℹ️ לידיעתך: אזור 2026: יש כבר מאות שרתי MCP פתוחים בקהילה. ראה github.com/modelcontextprotocol לרשימה. עבור משתמשי קצה — אל תיגע אם אין צורך. עבור מפתחים — זה כלי עוצמתי.`,updatedAt:"אפריל 2026"},{id:13,title:"13. Agents ו-Cowork — Claude כעובד אוטונומי",shortTitle:"Agents ו-Cowork — Claude…",tldr:`Agent הוא Claude שלא רק עונה לשאלה — אלא מבצע משימה מורכבת באופן עצמאי: מתכנן, מבצע, מתקן טעויות, ומחזיר תוצאה. זה ההבדל בין "עוזר" ל"עובד". Cowork הוא המוצר הראשי של Anthropic לעבודה אג'נטית. הושק ב-Q1 2026 כ-GA. נמצא בתוך Claude Desktop ובאפליקציות. דמיין: יש לך עוזר אישי שיכול`,content:`Agent הוא Claude שלא רק עונה לשאלה — אלא מבצע משימה מורכבת באופן עצמאי: מתכנן, מבצע, מתקן טעויות, ומחזיר תוצאה. זה ההבדל בין "עוזר" ל"עובד".

מה זה Cowork

Cowork הוא המוצר הראשי של Anthropic לעבודה אג'נטית. הושק ב-Q1 2026 כ-GA. נמצא בתוך Claude Desktop ובאפליקציות. דמיין: יש לך עוזר אישי שיכול לעבוד שעות, להשתמש בכל הקונקטורים שלך, ולחזור עם תוצרים.

מה Cowork יודע לעשות

משימות ארוכות: "חקור את שוק ה-EV בישראל ב-3 חודשים האחרונים, ערוך דוח של 10 עמודים, שלח אותי במייל לעצמי."

זרימות עבודה (workflows): רצף של פעולות, שכל אחת תוצר של הקודמת.

Computer Use: שליטה ישירה על המחשב — פתיחת אפליקציות, גלילה, קליק.

Plugins: חבילות מוכנות שמשלבות סקילים, slash commands וקונקטורים. למשל — plugin לתפקיד שיווק שכולל הכל מוכן.

Scheduled tasks: משימות חוזרות — "כל יום ב-8 בבוקר תעשה X".

Persistent agent thread: שיחת אג'נט שממשיכה לפעול גם כשאתה לא מסתכל. תקבל התראה כשמסתיימת.

דוגמה מעשית — "שגרת בוקר אוטומטית"

הגדרת משימה חוזרת ב-7:00 בכל יום עבודה:

סקירה ב-Gmail: סכם את 10 המיילים החשובים ביותר מהלילה.

יומן: תזכר אותי על פגישות היום ועל מי שאני לא מכיר.

Slack: מה דחוף בערוצי הדחיפות.

חדשות תעשייה: סקירה של 3 כותרות רלוונטיות.

שלח דוח לעצמי: כקובץ Notion חדש.

Claude יבצע את כל זה אוטונומי. כל יום.

Plugins

Plugin הוא חבילה ארוזה. יש marketplace עם plugins רשמיים של Anthropic ושל גורמי צד שלישי. לדוגמה — plugin ל"Account Manager" שכולל סקילים, פקודות, וקונקטורים שכל מנהל לקוח צריך.

Claude Managed Agents (API)

עבור מפתחים: Anthropic מציעה תשתית ל-API לבניית סוכנים אוטונומיים מאובטחים. כולל sandboxing, agent memory בטא, ו-streaming של אירועי הסוכן.`,updatedAt:"אפריל 2026"},{id:14,title:"14. Computer Use — Claude שולט במחשב שלך",shortTitle:"Computer Use — Claude שו…",tldr:`Computer Use היא היכולת של Claude לראות את המסך, להקליד, ללחוץ ולגלול — בדיוק כמו אדם. בלי API, בלי קונקטור — Claude משתמש במחשב שלך כפי שאתה משתמש בו. Claude מקבל צילום מסך, מנתח אותו, ומחזיר פעולה ("לחץ על קואורדינטה X,Y", "הקלד 'hello'", "גלול למטה"). מערכת ההפעלה מבצעת את הפע`,content:`Computer Use היא היכולת של Claude לראות את המסך, להקליד, ללחוץ ולגלול — בדיוק כמו אדם. בלי API, בלי קונקטור — Claude משתמש במחשב שלך כפי שאתה משתמש בו.

איך זה עובד טכנית

Claude מקבל צילום מסך, מנתח אותו, ומחזיר פעולה ("לחץ על קואורדינטה X,Y", "הקלד 'hello'", "גלול למטה"). מערכת ההפעלה מבצעת את הפעולה. מתבצע מחדש בלולאה.

מתי זה שימושי

מערכות ללא API: שירותים ישנים שאין להם דרך אחרת לאוטומציה.

מילוי טפסים: דפי ממשלה, פורמטים מסורבלים.

מחקר ויזואלי: ניווט באתרים שמייצרים דשבורדים שונים לכל ניווט.

אוטומציה של תהליכים בקבוע (RPA): רצפי פעולות שאתה חוזר עליהם.

איך מפעילים

ב-Claude.ai (Pro ו-Max): Settings → Beta features → Computer Use. תידרש לאשר הרשאות accessibility במערכת ההפעלה. אחרי הפעלה, אפשר לבקש: "תפתח לי את חשבון הבנק שלי באתר שלהם ותגיד מה היתרה" (כמובן — בזהירות).

⚠️ חשוב: שיקולים: Computer Use הוא חזק וגם מסוכן. Claude יכול בטעות ללחוץ על משהו לא רצוי. אל תפעיל אותו במהלך פעולות רגישות (העברות בנקאיות, חתימה דיגיטלית). השתמש בסביבה מבודדת אם אפשר.`,updatedAt:"אפריל 2026"},{id:15,title:"15. Claude Code — סביבת פיתוח בטרמינל",shortTitle:"Claude Code — סביבת פיתו…",tldr:'Claude Code הוא כלי שורת-הפקודה הרשמי של Anthropic למפתחים. הוא חי בטרמינל שלך, מכיר את כל הקודבייס, ויודע לבצע משימות פיתוח אגנטיות מורכבות. הבנת קודבייס: "איך עובד מנגנון ה-auth כאן?" - Claude יקרא את כל הקבצים הרלוונטיים.',content:`Claude Code הוא כלי שורת-הפקודה הרשמי של Anthropic למפתחים. הוא חי בטרמינל שלך, מכיר את כל הקודבייס, ויודע לבצע משימות פיתוח אגנטיות מורכבות.

התקנה

# התקנה גלובליתnpm install -g @anthropic-ai/claude-code# התחברותclaude login# התחלת שיחה בתוך פרויקטcd my-projectclaude

פיצ'רים מרכזיים

הבנת קודבייס: "איך עובד מנגנון ה-auth כאן?" - Claude יקרא את כל הקבצים הרלוונטיים.

ביצוע משימות: "הוסף endpoint חדש שמחזיר את כל המשתמשים הפעילים, כולל בדיקות."

Git workflows: יצירת branches, commits עם הודעות מתאימות, פתיחת PR.

Slash commands: /test, /commit, /skills, /agents — פקודות מוכנות.

Subagents: משימות מורצות בסוכן נפרד עם הקשר נקי, חוזרות עם תוצאה — חוסך טוקנים.

Plan mode: Claude מתכנן את הצעדים לפני ביצוע, ואתה מאשר.

Skills מקומיים: שמירת SKILL.md תחת .claude/skills/ - זמין לכל פרויקט.

Hooks: הרצת קוד אוטומטית בנקודות מפתח (לפני commit, אחרי edit).

CLAUDE.md - הקובץ החשוב ביותר

בכל פרויקט, צור קובץ CLAUDE.md שמכיל:

# Project: ChainGuard API## Stack- Backend: Node.js + Express + TypeScript- DB: PostgreSQL via Prisma- Tests: Jest## Conventions- Use functional style, no classes unless necessary- All endpoints validate input with Zod- Error handling: throw typed errors, caught in middleware## Commands- npm run dev - start dev server- npm test - run tests- npm run db:migrate - apply migrations## Don't do- Never commit to main directly- Never log secrets or PII

💡 טיפ: CLAUDE.md הוא כמו project instructions, אבל לפיתוח. כל פעם ש-Claude Code פועל בפרויקט, הוא קורא אותו. השקעת 30 דקות בכתיבה איכותית חוסכת שעות.

מצבי הפעלה

Interactive mode: הרצת \`claude\` ושיחה רגילה.

Agent mode (--agent): הרצת sub-agent עצמאי.

Auto mode: ביצוע פעולות בלי אישור (זהירות!)

--dangerously-skip-permissions: דילוג על אישורים — רק בסביבות בטוחות.`,updatedAt:"אפריל 2026"},{id:16,title:"16. Claude API — בנייה עם Claude",shortTitle:"Claude API — בנייה עם Cl…",tldr:"Claude API מאפשר לך לבנות אפליקציות שמשתמשות ב-Claude כמנוע — צ'אטבוט בלוגיקה משלך, מערכת לסיווג מיילים, מנוע חיפוש סמנטי. רוב יזמי הסטארט-אפים שעובדים עם AI משתמשים בזה. צור חשבון ארגוני, הוסף אמצעי תשלום (חיוב לפי שימוש).",content:`Claude API מאפשר לך לבנות אפליקציות שמשתמשות ב-Claude כמנוע — צ'אטבוט בלוגיקה משלך, מערכת לסיווג מיילים, מנוע חיפוש סמנטי. רוב יזמי הסטארט-אפים שעובדים עם AI משתמשים בזה.

התחלה

גש ל-console.anthropic.com

צור חשבון ארגוני, הוסף אמצעי תשלום (חיוב לפי שימוש).

צור API key תחת Settings → API Keys. שמור אותו — הוא מוצג פעם אחת בלבד.

התחל לקרוא — או דרך SDK או דרך HTTP ישיר.

דוגמה ב-Python

# pip install anthropicimport anthropicclient = anthropic.Anthropic(api_key="sk-ant-...")response = client.messages.create(    model="claude-opus-4-7",    max_tokens=1024,    messages=[        {"role": "user", "content": "Hello, Claude"}    ])print(response.content[0].text)

דוגמה ב-JavaScript / TypeScript

// npm install @anthropic-ai/sdkimport Anthropic from '@anthropic-ai/sdk';const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });const msg = await client.messages.create({  model: "claude-opus-4-7",  max_tokens: 1024,  messages: [    { role: "user", content: "Hello, Claude" }  ]});console.log(msg.content[0].text);

פיצ'רים חשובים ב-API

System prompt: הוראת-על שמגדירה את ההתנהגות — נפרדת מהודעות המשתמש.

Tool use: הצהרה על כלים ש-Claude יכול לקרוא להם — Claude מחזיר "קריאה לפונקציה X עם פרמטרים Y".

Streaming: קבלת התשובה במנות, לא בבת אחת — חוויית UX של "הקלדה חיה".

Vision: שליחת תמונות (base64 או URL) למודל.

PDF: שליחת קבצי PDF ישירות בלי פירוק ידני.

Batch API: עיבוד אצווה של משימות — חצי מחיר, אבל לא בזמן אמת.

Prompt caching: שמירת חלקי context קבועים — חיסכון משמעותי בטוקנים בשיחות חוזרות.

Extended thinking: מצב חשיבה מורחבת — הקצאת "זמן חשיבה" יותר ארוך לבעיות מורכבות.

ant CLI

Anthropic השיקה ב-2026 את ant - command-line client רשמי ל-API. מאפשר עבודה מהירה מהטרמינל, אינטגרציה ל-Claude Code, וגיבוי resources ל-YAML.

# התקנהnpm install -g @anthropic-ai/ant# שיחה בסיסיתant messages create --model claude-opus-4-7 --message "Hello"# יצירת skillant beta:skills create --display-title "My Skill" --file my-skill.zip

Rate limits ועלויות

רייט-לימיט: מתחיל ב-tier בסיסי, עולה אוטומטית עם זמן והוצאות. לארגונים — אפשר לבקש העלאה. Rate Limits API חדש מאפשר לבדוק את המגבלות שלך פרוגרמטית.

עלויות (Opus 4.7, אפריל 2026): $5 לכל מיליון input tokens, $25 לכל מיליון output tokens. Sonnet ו-Haiku זולים משמעותית.

ℹ️ לידיעתך: טיפ למפתחים: תמיד תתחיל עם Sonnet או Haiku. רק כשהמשימה דורשת התחל לעבור ל-Opus. ההבדל באיכות לא תמיד מצדיק את ההבדל במחיר.`,updatedAt:"אפריל 2026"},{id:17,title:"17. בחירת מודל — Opus, Sonnet, Haiku",shortTitle:"בחירת מודל — Opus, Sonne…",tldr:"Anthropic מציעה שלוש משפחות מודלים, כל אחת עם trade-off שונה. מקסימום אינטליגנציה. קוד מורכב. אג'נטים ארוכי-טווח",content:`Anthropic מציעה שלוש משפחות מודלים, כל אחת עם trade-off שונה.

המודלים העדכניים (אפריל 2026)

מודל

תאריך השקה

התמחות

מחיר In/Out (לכל 1M tokens)

Claude Opus 4.7

אפריל 2026

מקסימום אינטליגנציה. קוד מורכב. אג'נטים ארוכי-טווח

$5 / $25

Claude Opus 4.6

פברואר 2026

אינטליגנציה גבוהה. context 1M. ניתוח פיננסי

$5 / $25

Claude Sonnet 4.6

ספטמבר 2025

המודל המאוזן. הכי טוב עבור רוב המשימות

$3 / $15

Claude Haiku 4.5

אוקטובר 2025

מהיר וזול. בזמן אמת. עיבוד נפח גבוה

$1 / $5

מתי להשתמש בכל מודל

Opus 4.7

משימות הנדסיות מורכבות

ניתוח חוזים ארוכים, מסמכים משפטיים

אג'נטים ארוכי-טווח (כמה שעות עבודה)

בעיות הזויות שמחייבות חשיבה ברורה

עריכת ספרים, סיפורים ארוכים

Sonnet 4.6

90% מהשימושים הרגילים — אם לא ידוע, התחל פה

כתיבת קוד יומיומית

ניתוח, סיכום, מחקר

שיחה כללית עם איכות גבוהה

Haiku 4.5

צ'אטבוטים בנפח גבוה

סיווג טקסט (האם המייל ספאם?)

חילוץ נתונים פשוט

תרגום, סיכום קצר

עדיפות ל-latency על-פני איכות

⚠️ חשוב: Haiku 3 הישן (claude-3-haiku-20240307) הוסר ב-2026. אם יש לך קוד שעדיין משתמש בו - שדרג ל-Haiku 4.5.

Context window

Context window = כמה טקסט המודל יכול "לראות" בבת אחת. מודלים נוכחיים תומכים ב-200K טוקנים סטנדרטית, ועד 1M ב-Sonnet 4.6 ו-Opus 4.6.

ℹ️ לידיעתך: 1M tokens = ~750K מילים = ~3,000 עמודי A4. מספיק להכיל את כל ה-Game of Thrones הראשון, או ספר חוקים שלם, או קודבייס בינוני.`,updatedAt:"אפריל 2026"},{id:18,title:"18. אבטחה, פרטיות ושיקולים אתיים",shortTitle:"אבטחה, פרטיות ושיקולים א…",tldr:"Claude.ai (משתמשי קצה): כברירת מחדל, השיחות לא משמשות לאימון מודלים. אפשר לבדוק זאת ב-Settings → Privacy. API: אותו דבר — מידע API לא משמש לאימון, אלא אם הסכמת בפירוש.",content:`מה Anthropic עושה עם המידע שלך

Claude.ai (משתמשי קצה): כברירת מחדל, השיחות לא משמשות לאימון מודלים. אפשר לבדוק זאת ב-Settings → Privacy.

API: אותו דבר — מידע API לא משמש לאימון, אלא אם הסכמת בפירוש.

Zero Data Retention (ZDR): לקוחות עסקיים יכולים לבקש שלא יישמר כלום (גם לא ל-30 יום של troubleshooting).

יוצא מן הכלל: Skills לא נכלל ב-ZDR. נתוני ביצוע סקיל נשמרים לפי המדיניות הסטנדרטית.

מה לא לשתף עם Claude

סיסמאות וסודות: תוקני API, מפתחות, סיסמאות בנק.

מידע רפואי רגיש שלא תרצה שיועלה לענן: גם אם לא ילמדו ממנו, הוא עובר דרך שרתים.

מידע מסווג / מקצועי שאין לך הרשאה לחשוף: גם הסיכום של מסמך פנים-ארגוני יכול להיות בעיה.

מידע על אנשים אחרים שלא הסכימו: שיחות פרטיות, מיילים מצדדים שלישיים.

Constitutional AI - הגישה של Anthropic

Claude מאומן עם שיטה הנקראת Constitutional AI — הוא מקבל "חוקה" של עקרונות (כמו: לא לעזור בייצור נשק, להיות כן, לא להזיק לקטינים), ומאומן לדחות בקשות שמפרות אותם. זה למה Claude לפעמים נראה "זהיר מדי" - יש לו whitelist של תחומים שהוא לא ייכנס אליהם.

Hallucinations - הזיות

Claude יכול להמציא עובדות, במיוחד בנושאים נישתיים. אל תסמוך בעיוורון. תמיד:

בדוק עובדות חשובות ממקור עצמאי.

ב-API - השתמש ב-tool use לחיבור למסדי נתונים אמיתיים.

בקש ציטוטים והפנה לחיפוש ברשת.

עבור מידע משפטי / רפואי / פיננסי - תמיד התייעץ עם מומחה אנושי.

⚠️ חשוב: Claude לא תחליף לעורך דין, רופא, יועץ פיננסי או מטפל. הוא יכול לעזור להבין, לסכם, לחשוב — אבל החלטות חשובות דורשות מומחה אנושי.`,updatedAt:"אפריל 2026"},{id:19,title:"19. תמחור ומגבלות — Pro, Max, Team, Enterprise",shortTitle:"תמחור ומגבלות — Pro, Max…",tldr:"התמחור משתנה לעיתים — בדוק תמיד ב-claude.ai/pricing. נכון לאפריל 2026: ℹ️ לידיעתך: איך לבחור: התחל ב-Pro לחודש-חודשיים. אם אתה משתמש כמעט יומיומי ולעיתים נתקל בלימיטים — תשדרג ל-Max. צוות של 5+ — Team. ארגון גדול עם דרישות compliance — Enterprise.",content:`התמחור משתנה לעיתים — בדוק תמיד ב-claude.ai/pricing. נכון לאפריל 2026:

Free

גישה מוגבלת ל-Sonnet

בלי Projects, בלי Connectors, בלי Skills

מספר הודעות מצומצם בכל יום

Pro (~$20 לחודש)

גישה ל-Sonnet ול-Opus (מוגבלת)

Projects (עד 5)

Connectors מלאים

Custom Skills

Memory מלא

Research mode

הרבה יותר הודעות מ-Free

Max (~$100 או ~$200 לחודש)

הכל מ-Pro

גישה רבה משמעותית ל-Opus

Computer Use

Cowork מלא

Persistent agent threads

Projects: עד 50

עדיפות גישה (פחות בעיות בעומסים)

Team

מינימום 5 משתמשים

ניהול חשבונות מרכזי

Plugins marketplace

Admin controls

שיתוף Projects בין חברי צוות

Enterprise

התאמות אישיות

SSO, SCIM

Enterprise Analytics API

Role-Based Access Control

ZDR מלא

תמיכה ייעודית

ℹ️ לידיעתך: איך לבחור: התחל ב-Pro לחודש-חודשיים. אם אתה משתמש כמעט יומיומי ולעיתים נתקל בלימיטים — תשדרג ל-Max. צוות של 5+ — Team. ארגון גדול עם דרישות compliance — Enterprise.`,updatedAt:"אפריל 2026"},{id:20,title:"20. תקלות נפוצות ופתרונות",shortTitle:"תקלות נפוצות ופתרונות",tldr:"מודל לא מתאים - אם נסית עם Haiku משימה מורכבת, לעבור ל-Sonnet/Opus. חסר הקשר - אולי כדאי להפעיל חיפוש ברשת או להעלות קובץ.",content:`"Claude לא ענה לי טוב על המשימה"

הסיבות הנפוצות:

הפרומפט לא ברור - חזור לפרק 4.

מודל לא מתאים - אם נסית עם Haiku משימה מורכבת, לעבור ל-Sonnet/Opus.

חסר הקשר - אולי כדאי להפעיל חיפוש ברשת או להעלות קובץ.

שיחה ארוכה מדי - context מתחיל "לקרוס". פתח שיחה חדשה עם סיכום.

"הקובץ שיצרתי לא תקין"

ודא שהמודל הבין את הפורמט הרצוי - תאר בפירוש.

העלה דוגמה לפורמט הרצוי.

ב-API - בדוק שאין truncation בגלל max_tokens נמוך.

"Connector לא עובד"

בדוק שההרשאות תקפות (לפעמים פוקעות אחרי 90 יום).

נתק וחבר מחדש.

בדוק את שירות הצד השלישי - לפעמים יש downtime.

"Skill לא מופעל אוטומטית"

ה-description בפרונטמטר חלש מדי - חזק אותו ב-"Use this skill whenever..."

ב-Claude.ai - בדוק שה-Skill מאופשר בהגדרות.

בקש מפורשות: "השתמש בסקיל X לבצע Y".

"Claude מסרב לעזור עם משהו לגיטימי"

נסח מחדש - הימנע ממילים שמשמשות ב-attack scenarios.

הסבר את ההקשר - "אני רופא, אני שואל ל...".

אם Claude עדיין מסרב למשהו לגיטימי, לחץ thumbs-down ותן feedback - זה משפיע.

"Rate limit hit"

חכה ~1 שעה.

ב-API - יישם backoff exponential.

שדרג חבילה אם זה קורה לעיתים תכופות.`,updatedAt:"אפריל 2026"},{id:21,title:"21. שמירת המדריך עדכני",shortTitle:"שמירת המדריך עדכני",tldr:`הפרק הזה הוא הכי חשוב — הוא משיב על השאלה "איך אני שומר על המדריך הזה עדכני". ⚠️ חשוב: מסמך Word סטטי לא מתעדכן אוטומטית. אין דרך טכנית לגרום למסמך להתעדכן בכל שינוי שאנת'רופיק עושה. כל פתרון "אוטומטי" יחייב מבנה אחר — אפליקציה, אתר, שיחה מתמשכת.`,content:`הפרק הזה הוא הכי חשוב — הוא משיב על השאלה "איך אני שומר על המדריך הזה עדכני".

האמת על העדכון האוטומטי

⚠️ חשוב: מסמך Word סטטי לא מתעדכן אוטומטית. אין דרך טכנית לגרום למסמך להתעדכן בכל שינוי שאנת'רופיק עושה. כל פתרון "אוטומטי" יחייב מבנה אחר — אפליקציה, אתר, שיחה מתמשכת.

3 גישות מומלצות

גישה 1: עדכון תקופתי בעזרתי (הכי פשוט)

איך: כל חודש (או כל שינוי משמעותי שאתה שומע עליו), פתח שיחה ותגיד:

היי, יש לי המדריך לקלוד שכתבת לי בעבר. תבדוק עדכונים שיצאו מאז [תאריך],ותכתוב לי גרסה מעודכנת של הפרקים שהשתנו.

אני אחפש ברשת, אעדכן מה שצריך, ואחזיר את הגרסה החדשה. זה לוקח 5-10 דקות. הכי פרקטי לרוב המשתמשים.

גישה 2: Project ייעודי למדריך

איך:

צור Project חדש בשם "מדריך Claude אישי"

העלה את המסמך הזה ל-Project Knowledge

הוראות ה-Project: "זה המדריך האישי שלי לקלוד. כשאני שואל שאלות על Claude, השתמש בו כמקור. כשאתה רואה שמשהו השתנה - תציין זאת."

בכל פעם שיש שינוי - עדכן את הקובץ ב-Project.

יתרון: כל שאלה ספציפית על Claude שתשאל בתוך הפרויקט - תקבל תשובה לפי המדריך.

גישה 3: "מדריך חי" כ-Artifact (מתקדם)

איך: בקש ממני ליצור Markdown artifact עם המדריך. Markdown קל לעדכן (אתה רואה את המקור), ניתן לייצא, ויכול לחיות לאורך מספר שיחות.

יתרון: אפשר להוסיף "Changelog" ופרק מטא-מידע על מה השתנה. כל פעם מוסיפים שורה: "2026-04-29: Opus 4.7 שוחרר. עודכן פרק 17."

מקורות מידע לעדכונים

הנה המקורות שאני בודק כשאני מעדכן:

docs.claude.com/release-notes - הערות שחרור רשמיות לפלטפורמה

code.claude.com/docs - תיעוד Claude Code

anthropic.com/news - הכרזות מוצר

status.claude.com - מצב השירות

github.com/anthropics/claude-code/releases - שחרורי Claude Code

github.com/anthropics/skills - סקילים ציבוריים

Twitter/X: @AnthropicAI

שאלות עזרה ספציפיות שתוכל לשאול אותי

"מה חדש בקלוד מאז [תאריך]?"

"איזה מודלים זמינים כרגע ובמה הם שונים?"

"איך מקימים MCP server עבור [שירות ספציפי]?"

"מה ההבדל בין Skill A ו-Skill B שכבר קיימים?"

"איך אני בונה אג'נט ל[משימה ספציפית]?"

💡 טיפ: טיפ אסטרטגי: שמור את המדריך הזה ב-Project ב-claude.ai. כך תוכל בכל רגע לשאול שאלות עליו, ואם אני אזהה שמשהו במדריך לא עדכני — אציין זאת.`,updatedAt:"אפריל 2026"},{id:22,title:"22. נספח: מילון מונחים",shortTitle:"נספח: מילון מונחים",tldr:"מודל שמבצע משימות אוטונומיות מורכבות, לא רק עונה לשאלות Application Programming Interface — דרך לתוכנות לדבר עם Claude פרוגרמטית",content:`מונח

פירוש

Agent / סוכן

מודל שמבצע משימות אוטונומיות מורכבות, לא רק עונה לשאלות

Anthropic

החברה שיצרה את Claude. מטה: סן פרנסיסקו

API

Application Programming Interface — דרך לתוכנות לדבר עם Claude פרוגרמטית

Artifact

תוצר שנוצר בתוך הצ'אט וניתן לעריכה: מסמך, קוד, אתר

Claude Code

כלי שורת-פקודה למפתחים

Connector

חיבור לשירות חיצוני (Gmail, Drive וכו')

Constitutional AI

שיטת אימון של Anthropic - מודל מקבל עקרונות-על

Context Window

כמה טוקנים המודל יכול לראות בבת אחת

Cowork

מוצר אג'נט מתקדם של Anthropic

Hallucination

המצאה — כשהמודל אומר משהו שלא נכון בביטחון

MCP

Model Context Protocol — תקן פתוח לחיבור AI לכלים

Memory

זיכרון של Claude בין שיחות

Plugin

חבילה ארוזה של סקילים, פקודות וקונקטורים

Project

מרחב עבודה בקלוד עם הוראות וקבצי ידע

Prompt

ההודעה / ההוראה שאתה נותן ל-Claude

Skill

תיקייה עם הוראות שמלמדת את Claude איך לבצע משימה

Subagent

סוכן משני שמבצע משימה ממוקדת בהקשר נפרד

System Prompt

הוראת-על שמגדירה את התנהגות המודל בכל השיחה

Token

יחידת טקסט בסיסית שהמודל מעבד (~3/4 של מילה באנגלית)

Tool Use

יכולת המודל לקרוא לפונקציות חיצוניות

ZDR

Zero Data Retention — אופציה לארגונים, אין שמירת נתונים`,updatedAt:"אפריל 2026"},{id:23,title:"23. נספח: מקורות רשמיים ולינקים שימושיים",shortTitle:"נספח: מקורות רשמיים ולינ…",tldr:"docs.claude.com — תיעוד מקיף ל-API ולמוצרים anthropic.skilljar.com — קורסים רשמיים בחינם",content:`האתרים הרשמיים של Anthropic

claude.ai — ממשק הצ'אט

console.anthropic.com — קונסול ה-API

anthropic.com — אתר החברה, חדשות והכרזות

docs.claude.com — תיעוד מקיף ל-API ולמוצרים

code.claude.com/docs — תיעוד Claude Code

support.claude.com — מאמרי עזרה

status.claude.com — סטטוס השירות

מקורות לימוד

anthropic.skilljar.com — קורסים רשמיים בחינם

docs.claude.com/prompt-engineering — מדריך פרומפטינג

resources.anthropic.com — דוחות טכניים ומאמרים

מאגרים פתוחים

github.com/anthropics/skills — סקילים רשמיים

github.com/anthropics/claude-code — קוד Claude Code

github.com/modelcontextprotocol — תקן MCP

github.com/anthropics/anthropic-cookbook — דוגמאות קוד

קהילה

discord.gg/anthropic — שרת דיסקורד רשמי

reddit.com/r/Anthropic — סאב-רדיט

Twitter/X: @AnthropicAI

בדיקת חידושים

docs.claude.com/release-notes — שחרורים פלטפורמה

github.com/anthropics/claude-code/releases — שחרורי CLI

anthropic.com/news — חדשות מוצר





סוף המדריך

בהצלחה בעבודה עם Claude!

המדריך עודכן: 29 באפריל 2026

לעדכונים נוספים — שאל אותי בכל זמן`,updatedAt:"אפריל 2026"}],Zh={chapters:Yh};function Jh(){const[e,t]=z.useState(()=>{const n=localStorage.getItem("claude-hub-dark");return n?n==="true":window.matchMedia("(prefers-color-scheme: dark)").matches});return z.useEffect(()=>{document.documentElement.classList.toggle("dark",e),localStorage.setItem("claude-hub-dark",e)},[e]),[e,t]}function bh(){const[e,t]=z.useState(()=>{try{return JSON.parse(localStorage.getItem("claude-hub-favorites")||"[]")}catch{return[]}});return[e,r=>t(l=>{const i=l.includes(r)?l.filter(o=>o!==r):[...l,r];return localStorage.setItem("claude-hub-favorites",JSON.stringify(i)),i})]}function qh(){const[e,t]=Jh(),[n,r]=bh(),[l,i]=z.useState("ask"),[o,s]=z.useState(""),u=Zh.chapters||[],a=z.useMemo(()=>new rt(u,{keys:["title","content","tldr"],threshold:.4,minMatchCharLength:2}),[u]),f=z.useMemo(()=>o.trim().length>1?a.search(o).map(v=>v.item):[],[o,a]),p=z.useMemo(()=>u.find(v=>v.id===l),[u,l]),h=v=>{i(v),s("")},y=()=>o.trim().length>1?c.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[c.jsxs("div",{className:"text-sm text-gray-500 mb-4",children:["נמצאו ",f.length,' תוצאות עבור "',o,'"']}),f.length===0?c.jsx("div",{className:"text-center py-10 text-gray-400",children:"לא נמצאו תוצאות"}):c.jsx("div",{className:"space-y-3",children:f.map(v=>c.jsxs("button",{onClick:()=>h(v.id),className:"w-full text-right chapter-card hover:shadow-md transition-shadow",children:[c.jsx("div",{className:"font-semibold text-gray-800 dark:text-gray-100 mb-1",children:v.title}),v.tldr&&c.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 line-clamp-2",children:v.tldr})]},v.id))})]}):l==="ask"?c.jsx(Xh,{chapters:u,onNavigate:h}):l==="quick-start"?c.jsx(Hh,{onNavigate:h}):l==="updates"?c.jsx(Wh,{}):c.jsx(Rh,{chapter:p,isFavorite:n.includes(l),onToggleFavorite:()=>r(l)});return c.jsxs("div",{className:"flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900",children:[c.jsx(Mh,{chapters:u,activeId:l,favorites:n,onSelect:h}),c.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[c.jsxs("header",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-6 py-3 flex items-center gap-4",children:[c.jsx(Oh,{query:o,onChange:s}),c.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[c.jsx("button",{onClick:()=>h("updates"),className:`btn-ghost p-2 ${l==="updates"?"border-brand-mid text-brand-mid":""}`,title:"עדכונים",children:c.jsx(vh,{className:"w-4 h-4"})}),c.jsx("button",{onClick:()=>t(v=>!v),className:"btn-ghost p-2",title:"מצב כהה",children:e?c.jsx(Ph,{className:"w-4 h-4"}):c.jsx(Nh,{className:"w-4 h-4"})})]})]}),c.jsx("main",{className:"flex-1 overflow-y-auto",children:y()})]})]})}ui.createRoot(document.getElementById("root")).render(c.jsx(Dn.StrictMode,{children:c.jsx(qh,{})}));
