(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{1692:function(e,n,t){"use strict";t.d(n,{H:function(){return o}});t(6477);var r=t(7294),o=function(e){var n=(0,r.useState)(!1),t=n[0],o=n[1];return[function(n){return new Promise((function(t,r){var u="https://submit-form.com/"+e.formId,i=JSON.stringify(n);o(!0),fetch(u,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:i}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){r(e)})).finally((function(){o(!1)}))}))},t]}},5336:function(e,n,t){"use strict";t.d(n,{hQ:function(){return _e},gA:function(){return Le},Gk:function(){return De},O2:function(){return Pe},SF:function(){return je}});var r=t(7294);function o(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}var u=o()?r.useLayoutEffect:r.useEffect;function i(e,n){return(0,r.createContext)(n)}function a(e){return!(!e||"[object Function]"!={}.toString.call(e))}function c(){}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function s(e,n){if(null!=e)if(a(e))e(n);else try{e.current=n}catch(t){throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useCallback)((function(e){for(var t,r=f(n);!(t=r()).done;){s(t.value,e)}}),n)}function v(e,n){return function(t){if(e&&e(t),!t.defaultPrevented)return n(t)}}function p(){var e=(0,r.useState)(Object.create(null))[1];return(0,r.useCallback)((function(){e(Object.create(null))}),[])}function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var b=["element","index"];function g(e,n){void 0===n&&(n={});return(0,r.createContext)(h({descendants:[],registerDescendant:c,unregisterDescendant:c},n))}function m(e){var n=e.context,t=e.children,o=e.items,u=e.set,i=(0,r.useCallback)((function(e){var n=e.element,t=e.index,r=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,b);n&&u((function(e){var o;if(null!=t)return[].concat(e,[h({},r,{element:n,index:t})]).sort((function(e,n){return e.index-n.index}));if(0===e.length)o=[h({},r,{element:n,index:0})];else if(e.find((function(e){return e.element===n})))o=e;else{var u=e.findIndex((function(e){return!(!e.element||!n)&&Boolean(e.element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING)})),i=h({},r,{element:n,index:u});o=-1===u?[].concat(e,[i]):[].concat(e.slice(0,u),[i],e.slice(u))}return o.map((function(e,n){return h({},e,{index:n})}))}))}),[]),a=(0,r.useCallback)((function(e){e&&u((function(n){return n.filter((function(n){return e!==n.element}))}))}),[]);return(0,r.createElement)(n.Provider,{value:(0,r.useMemo)((function(){return{descendants:o,registerDescendant:i,unregisterDescendant:a}}),[o,i,a])},t)}var y=!1,E=0;function C(){return++E}var x=t(3935);var I=["unstable_skipInitialRender"],w=function(e){var n=e.children,t=e.type,o=void 0===t?"reach-portal":t,i=e.containerRef,a=(0,r.useRef)(null),c=(0,r.useRef)(null),l=p();return u((function(){if(a.current){var e=a.current.ownerDocument,n=(null==i?void 0:i.current)||e.body;return c.current=null==e?void 0:e.createElement(o),n.appendChild(c.current),l(),function(){c.current&&n&&n.removeChild(c.current)}}}),[o,l,i]),c.current?(0,x.createPortal)(n,c.current):(0,r.createElement)("span",{ref:a})},R=function(e){var n=e.unstable_skipInitialRender,t=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,I),o=(0,r.useState)(!1),u=o[0],i=o[1];return(0,r.useEffect)((function(){n&&i(!0)}),[n]),n&&!u?null:(0,r.createElement)(w,t)};var T,S=["bottom","height","left","right","top","width"],O=new Map,A=function e(){var n=[];O.forEach((function(e,t){var r,o,u=t.getBoundingClientRect();r=u,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),S.some((function(e){return r[e]!==o[e]}))&&(e.rect=u,n.push(e))})),n.forEach((function(e){e.callbacks.forEach((function(n){return n(e.rect)}))})),T=window.requestAnimationFrame(e)};var k=function(e,n){return{observe:function(){var t=0===O.size;O.has(e)?O.get(e).callbacks.push(n):O.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[n]}),t&&A()},unobserve:function(){var t=O.get(e);if(t){var r=t.callbacks.indexOf(n);r>=0&&t.callbacks.splice(r,1),t.callbacks.length||O.delete(e),O.size||cancelAnimationFrame(T)}}}};function N(e,n,t){var o,i,c;"boolean"===typeof n?o=n:(o=null==(c=null==n?void 0:n.observe)||c,i=null==n?void 0:n.onChange);a(t)&&(i=t);var l=(0,r.useState)(e.current),f=l[0],s=l[1],d=(0,r.useRef)(!1),v=(0,r.useRef)(!1),p=(0,r.useState)(null),h=p[0],b=p[1],g=(0,r.useRef)(i);return u((function(){g.current=i,e.current!==f&&s(e.current)})),u((function(){f&&!d.current&&(d.current=!0,b(f.getBoundingClientRect()))}),[f]),u((function(){if(o){var n=f;if(v.current||(v.current=!0,n=e.current),n){var t=k(n,(function(e){null==g.current||g.current(e),b(e)}));return t.observe(),function(){t.unobserve()}}}}),[o,f,e]),h}function _(e){return o()?e?e.ownerDocument:document:null}var L=t(4760),j=t.n(L);function D(){return D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var H=["unstable_skipInitialPortalRender"],U=["as","targetRef","position","unstable_observableRefs"],B=(0,r.forwardRef)((function(e,n){var t=e.unstable_skipInitialPortalRender,o=P(e,H);return(0,r.createElement)(R,{unstable_skipInitialRender:t},(0,r.createElement)(V,D({ref:n},o)))}));var V=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=e.targetRef,i=e.position,a=void 0===i?F:i,c=e.unstable_observableRefs,l=void 0===c?[]:c,f=P(e,U),s=(0,r.useRef)(null),v=N(s,{observe:!f.hidden}),p=N(u,{observe:!f.hidden}),h=d(s,n);return function(e,n){var t=_(e.current);function o(e){"Tab"===e.key&&n.current&&0===j()(n.current).length||("Tab"===e.key&&e.shiftKey?f(e)?s(e):d(e)?v(e):h(e)&&g():"Tab"===e.key&&(i()?a(e):c()?l(e):p(e)&&g()))}function u(){var r=j()(t),o=r&&e.current?r.indexOf(e.current):-1,u=r&&r[o+1];return(!n.current||!n.current.contains(u||null))&&u}function i(){return!!e.current&&e.current===t.activeElement}function a(e){var t=n.current&&j()(n.current);t&&t[0]&&(e.preventDefault(),t[0].focus())}function c(){if(!!n.current&&n.current.contains(t.activeElement||null)){var e=n.current&&j()(n.current);return Boolean(e&&e[e.length-1]===t.activeElement)}return!1}function l(e){var n=u();n&&(e.preventDefault(),n.focus())}function f(e){if(e.shiftKey){var n=u();return e.target===n}}function s(e){var t=n.current&&j()(n.current),r=t&&t[t.length-1];r&&(e.preventDefault(),r.focus())}function d(e){var t=n.current&&j()(n.current);return!!t&&(0!==t.length&&e.target===t[0])}function v(n){var t;n.preventDefault(),null==(t=e.current)||t.focus()}function p(e){var r=n.current?j()(t).filter((function(e){return!n.current.contains(e)})):null;return!!r&&e.target===r[r.length-1]}function h(e){return e.target===j()(t)[0]}(0,r.useEffect)((function(){return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o)}}),[]);var b=[];function g(){var e=n.current&&j()(n.current);e&&(e.forEach((function(e){b.push([e,e.tabIndex]),e.tabIndex=-1})),t.addEventListener("focusin",m))}function m(){t.removeEventListener("focusin",m),b.forEach((function(e){var n=e[0],t=e[1];n.tabIndex=t}))}}(u,s),(0,r.createElement)(o,D({"data-reach-popover":"",ref:h},f,{style:D({position:"absolute"},W.apply(void 0,[a,p,v].concat(l)),f.style)}))}));function W(e,n,t){for(var r=arguments.length,o=new Array(r>3?r-3:0),u=3;u<r;u++)o[u-3]=arguments[u];return t?e.apply(void 0,[n,t].concat(o.map((function(e){return e.current})))):{visibility:"hidden"}}function G(e,n,t){return{top:t?e.top-n.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var F=function(e,n){if(!e||!n)return{};var t=M(e,n),r=t.directionRight,o=t.directionUp;return D({left:r?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px"},G(e,n,o))},K=function(e,n){if(!e||!n)return{};var t=M(e,n).directionUp;return D({width:e.width,left:e.left},G(e,n,t))};function M(e,n,t,r){void 0===t&&(t=0),void 0===r&&(r=0);var o={top:e.top-n.height<0,right:window.innerWidth<e.left+n.width-t,bottom:window.innerHeight<e.bottom+n.height-r,left:e.left+e.width-n.width<0};return{directionRight:o.right&&!o.left,directionLeft:o.left&&!o.right,directionUp:o.bottom&&!o.top,directionDown:o.top&&!o.bottom}}function $(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function Z(){return Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z.apply(this,arguments)}function z(e){return e.chunks.sort((function(e,n){return e.start-n.start})).reduce((function(e,n){if(0===e.length)return[n];var t=e.pop();if(n.start<=t.end){var r=Math.max(t.end,n.end);e.push({highlight:!1,start:t.start,end:r})}else e.push(t,n);return e}),[])}function q(e){var n=e.autoEscape,t=e.caseSensitive,r=e.sanitize,o=void 0===r?X:r,u=e.searchWords,i=e.textToHighlight;return i=o(i||""),u.filter((function(e){return e})).reduce((function(e,r){r=o(r),n&&(r=r.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"));for(var u,a=new RegExp(r,t?"g":"gi");u=a.exec(i||"");){var c=u.index,l=a.lastIndex;l>c&&e.push({highlight:!1,start:c,end:l}),u.index===a.lastIndex&&a.lastIndex++}return e}),[])}function Y(e){var n=e.chunksToHighlight,t=e.totalLength,r=[];if(0===n.length)u(0,t,!1);else{var o=0;n.forEach((function(e){u(o,e.start,!1),u(e.start,e.end,!0),o=e.end})),u(o,t,!1)}return r;function u(e,n,t){n-e>0&&r.push({start:e,end:n,highlight:t})}}function X(e){return e}var J,Q,ee,ne,te,re={combineChunks:z,fillInChunks:Y,findAll:function(e){var n=e.autoEscape,t=e.caseSensitive,r=void 0!==t&&t,o=e.findChunks,u=void 0===o?q:o,i=e.sanitize,a=e.searchWords,c=e.textToHighlight;return Y({chunksToHighlight:z({chunks:u({autoEscape:n,caseSensitive:r,sanitize:i,searchWords:a,textToHighlight:c})}),totalLength:c?c.length:0})},findChunks:q},oe=["onSelect","openOnFocus","children","as","aria-label","aria-labelledby"],ue=["as","selectOnClick","autocomplete","onClick","onChange","onKeyDown","onBlur","onFocus","value"],ie=["as","children","portal","onKeyDown","onBlur","position"],ae=["persistSelection","as"],ce=["as","children","index","value","onClick"],le="IDLE",fe="SUGGESTING",se="NAVIGATING",de="INTERACTING",ve="CLEAR",pe="CHANGE",he="INITIAL_CHANGE",be="NAVIGATE",ge="SELECT_WITH_KEYBOARD",me="SELECT_WITH_CLICK",ye="ESCAPE",Ee="BLUR",Ce="INTERACT",xe="FOCUS",Ie="OPEN_WITH_BUTTON",we="OPEN_WITH_INPUT_CLICK",Re="CLOSE_WITH_BUTTON",Te={initial:le,states:(te={},te.IDLE={on:(J={},J.BLUR=le,J.CLEAR=le,J.CHANGE=fe,J.INITIAL_CHANGE=le,J.FOCUS=fe,J.NAVIGATE=se,J.OPEN_WITH_BUTTON=fe,J.OPEN_WITH_INPUT_CLICK=fe,J)},te[fe]={on:(Q={},Q.CHANGE=fe,Q.FOCUS=fe,Q.NAVIGATE=se,Q.CLEAR=le,Q.ESCAPE=le,Q.BLUR=le,Q.SELECT_WITH_CLICK=le,Q.INTERACT=de,Q.CLOSE_WITH_BUTTON=le,Q)},te[se]={on:(ee={},ee.CHANGE=fe,ee.FOCUS=fe,ee.CLEAR=le,ee.BLUR=le,ee.ESCAPE=le,ee.NAVIGATE=se,ee.SELECT_WITH_CLICK=le,ee.SELECT_WITH_KEYBOARD=le,ee.CLOSE_WITH_BUTTON=le,ee.INTERACT=de,ee)},te[de]={on:(ne={},ne.CLEAR=le,ne.CHANGE=fe,ne.FOCUS=fe,ne.BLUR=le,ne.ESCAPE=le,ne.NAVIGATE=se,ne.CLOSE_WITH_BUTTON=le,ne.SELECT_WITH_CLICK=le,ne)},te)},Se=function(e,n){var t=Z({},e,{lastEventType:n.type});switch(n.type){case pe:case he:return Z({},t,{navigationValue:null,value:n.value});case be:case Ie:case we:return Z({},t,{navigationValue:Oe(t,n)});case ve:return Z({},t,{value:"",navigationValue:null});case Ee:case ye:return Z({},t,{navigationValue:null});case me:return Z({},t,{value:n.isControlled?e.value:n.value,navigationValue:null});case ge:return Z({},t,{value:n.isControlled?e.value:e.navigationValue,navigationValue:null});case Re:return Z({},t,{navigationValue:null});case Ce:return t;case xe:return Z({},t,{navigationValue:Oe(t,n)});default:return t}};function Oe(e,n){return n.value?n.value:n.persistSelection?e.value:null}var Ae=g(),ke=i(0,{}),Ne=i(0,{}),_e=(0,r.forwardRef)((function(e,n){var t,o=e.onSelect,i=e.openOnFocus,l=void 0!==i&&i,f=e.children,s=e.as,d=void 0===s?"div":s,v=e["aria-label"],p=e["aria-labelledby"],h=$(e,oe),b=(0,r.useState)([]),g=b[0],E=b[1],x=(0,r.useRef)(),I=(0,r.useRef)(),w=(0,r.useRef)(),R=(0,r.useRef)(!1),T=(0,r.useRef)(!1),S=function(e,n,t){var o=(0,r.useState)(e.initial),u=o[0],i=o[1],a=(0,r.useReducer)(n,t),c=a[0],l=a[1];return[u,c,function(n,t){void 0===t&&(t={});var r=e.states[u],o=r&&r.on[n];if(o)return l(Z({type:n,state:u,nextState:u},t)),void i(o)}]}(Te,Se,{value:"",navigationValue:null}),O=S[0],A=S[1],k=S[2];!function(e,n){u((function(){var t;e!==be&&e!==ye&&e!==me&&e!==Ie||(null==(t=n.current)||t.focus())}),[n,e])}(A.lastEventType,x);var N=function(e){var n;if("function"===typeof r.useId){var t=(0,r.useId)(e);return null!=e?e:t}var o=null!=e?e:y?C():null,i=(0,r.useState)(o),a=i[0],c=i[1];return u((function(){null===a&&c(C())}),[]),(0,r.useEffect)((function(){!1===y&&(y=!0)}),[]),null!=(n=null!=e?e:a)?n:void 0}(h.id),_=N?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).join("--")}("listbox",N):"listbox",L=(0,r.useRef)(!1),j=function(e){return[fe,se,de].includes(e)}(O),D={ariaLabel:v,ariaLabelledby:p,autocompletePropRef:R,buttonRef:w,comboboxId:N,data:A,inputRef:x,isExpanded:j,listboxId:_,onSelect:o||c,openOnFocus:l,persistSelectionRef:T,popoverRef:I,state:O,transition:k,isControlledRef:L};return(0,r.createElement)(m,{context:Ae,items:g,set:E},(0,r.createElement)(ke.Provider,{value:D},(0,r.createElement)(d,Z({},h,{"data-reach-combobox":"","data-state":We(O),"data-expanded":j||void 0,ref:n}),a(f)?f({id:N,isExpanded:j,navigationValue:null!=(t=A.navigationValue)?t:null,state:O}):f)))}));var Le=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"input":t,i=e.selectOnClick,a=void 0!==i&&i,c=e.autocomplete,l=void 0===c||c,f=e.onClick,s=e.onChange,p=e.onKeyDown,h=e.onBlur,b=e.onFocus,g=e.value,m=$(e,ue),y=(0,r.useRef)(g).current,E=(0,r.useRef)(!1);!function(e,n){var t=(0,r.useRef)(!1);(0,r.useEffect)((function(){t.current?e():t.current=!0}),n)}((function(){E.current=!0}),[g]);var C=(0,r.useContext)(ke),x=C.data,I=x.navigationValue,w=x.value,R=x.lastEventType,T=C.inputRef,S=C.state,O=C.transition,A=C.listboxId,k=C.autocompletePropRef,N=C.openOnFocus,_=C.isExpanded,L=C.ariaLabel,j=C.ariaLabelledby,D=C.persistSelectionRef,P=C.isControlledRef,H=d(T,n),U=(0,r.useRef)(!1),B=Ue(),V=Be(),W="undefined"!==typeof g;(0,r.useEffect)((function(){P.current=W}),[W]),u((function(){k.current=l}),[l,k]);var G=(0,r.useCallback)((function(e){""===e.trim()?O(ve,{isControlled:W}):e!==y||E.current?O(pe,{value:e}):O(he,{value:e})}),[y,O,W]);(0,r.useEffect)((function(){!W||g===w||""===g.trim()&&""===(w||"").trim()||G(g)}),[g,G,W,w]);var F=!l||S!==se&&S!==de?g||w:I||g||w;return(0,r.createElement)(o,Z({"aria-activedescendant":I?String(Ve(I)):void 0,"aria-autocomplete":"both","aria-controls":A,"aria-expanded":_,"aria-haspopup":"listbox","aria-label":L,"aria-labelledby":L?void 0:j,role:"combobox"},m,{"data-reach-combobox-input":"","data-state":We(S),ref:H,onBlur:v(h,V),onChange:v(s,(function(e){var n=e.target.value;W||G(n)})),onClick:v(f,(function(){var e;U.current&&(U.current=!1,null==(e=T.current)||e.select()),N&&S===le&&O(we)})),onFocus:v(b,(function(){a&&(U.current=!0),N&&R!==me&&O(xe,{persistSelection:D.current})})),onKeyDown:v(p,B),value:F||""}))}));var je=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"div":t,u=e.children,i=e.portal,a=void 0===i||i,c=e.onKeyDown,l=e.onBlur,f=e.position,s=void 0===f?K:f,p=$(e,ie),h=(0,r.useContext)(ke),b=h.popoverRef,g=h.inputRef,m=h.isExpanded,y=h.state,E=d(b,n),C=Ue(),x=Be(),I={"data-reach-combobox-popover":"","data-state":We(y),onKeyDown:v(c,C),onBlur:v(l,x),hidden:!m,tabIndex:-1,children:u};return a?(0,r.createElement)(B,Z({as:o},p,{ref:E,"data-expanded":m||void 0,position:s,targetRef:g,unstable_skipInitialPortalRender:!0},I)):(0,r.createElement)(o,Z({ref:E},p,I))}));var De=(0,r.forwardRef)((function(e,n){var t=e.persistSelection,o=void 0!==t&&t,u=e.as,i=void 0===u?"ul":u,a=$(e,ae),c=(0,r.useContext)(ke),l=c.persistSelectionRef,f=c.listboxId;return o&&(l.current=!0),(0,r.createElement)(i,Z({role:"listbox"},a,{ref:n,"data-reach-combobox-list":"",id:f}))}));var Pe=(0,r.forwardRef)((function(e,n){var t=e.as,o=void 0===t?"li":t,i=e.children,c=e.index,l=e.value,f=e.onClick,s=$(e,ce),b=(0,r.useContext)(ke),g=b.onSelect,m=b.data.navigationValue,y=b.transition,E=b.isControlledRef,C=function(e,n){var t=(0,r.useState)(n),o=t[0],u=t[1];return[o,(0,r.useCallback)((function(n){e.current=n,u(n)}),[])]}((0,r.useRef)(null),null),x=C[0],I=C[1],w=function(e,n,t){var o=p(),i=(0,r.useContext)(n),a=i.registerDescendant,c=i.unregisterDescendant,l=i.descendants,f=null!=t?t:l.findIndex((function(n){return n.element===e.element}));return u((function(){return e.element||o(),a(h({},e,{index:f})),function(){c(e.element)}}),[e,o,f,a,c].concat(Object.values(e))),f}((0,r.useMemo)((function(){return{element:x,value:l}}),[l,x]),Ae,c),R=d(n,I),T=m===l;return(0,r.createElement)(Ne.Provider,{value:{value:l,index:w}},(0,r.createElement)(o,Z({"aria-selected":T,role:"option"},s,{"data-reach-combobox-option":"",ref:R,id:String(Ve(l)),"data-highlighted":T?"":void 0,tabIndex:-1,onClick:v(f,(function(){g&&g(l),y(me,{value:l,isControlled:E.current})}))}),i?a(i)?i({value:l,index:w}):i:(0,r.createElement)(He,null)))}));function He(){var e=(0,r.useContext)(Ne).value,n=(0,r.useContext)(ke).data.value,t=(0,r.useMemo)((function(){return re.findAll({searchWords:(t=n||"",String(t).replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")).split(/\s+/),textToHighlight:e});var t}),[n,e]);return(0,r.createElement)(r.Fragment,null,t.length?t.map((function(n,t){var o=e.slice(n.start,n.end);return(0,r.createElement)("span",{key:t,"data-reach-combobox-option-text":"","data-user-value":!!n.highlight||void 0,"data-suggested-value":!n.highlight||void 0},o)})):e)}function Ue(){var e,n=(0,r.useContext)(ke),t=n.data.navigationValue,o=n.onSelect,u=n.state,i=n.transition,a=n.autocompletePropRef,c=n.persistSelectionRef,l=n.isControlledRef,f=(e=Ae,(0,r.useContext)(e).descendants);return function(e){var n=f.findIndex((function(e){return e.value===t}));function r(){return f[0]}function s(){return f[f.length-1]}switch(e.key){case"ArrowDown":if(e.preventDefault(),!f||!f.length)return;if(u===le)i(be,{persistSelection:c.current});else{var d=n===f.length-1?a.current?null:r():f[(n+1)%f.length];i(be,{value:d?d.value:null})}break;case"ArrowUp":if(e.preventDefault(),!f||0===f.length)return;if(u===le)i(be);else{var v=0===n?a.current?null:s():-1===n?s():f[(n-1+f.length)%f.length];i(be,{value:v?v.value:null})}break;case"Home":case"PageUp":if(e.preventDefault(),!f||0===f.length)return;u===le?i(be):i(be,{value:r().value});break;case"End":case"PageDown":if(e.preventDefault(),!f||0===f.length)return;u===le?i(be):i(be,{value:s().value});break;case"Escape":u!==le&&i(ye);break;case"Enter":u===se&&null!==t&&(e.preventDefault(),o&&o(t),i(ge,{isControlled:l.current}))}}}function Be(){var e=(0,r.useContext)(ke),n=e.state,t=e.transition,o=e.popoverRef,u=e.inputRef,i=e.buttonRef;return function(e){var r=o.current,a=u.current,c=i.current,l=e.relatedTarget;l!==a&&l!==c&&r&&(r.contains(l)?n!==de&&t(Ce):t(Ee))}}function Ve(e){var n=0;if(0===e.length)return n;for(var t=0;t<e.length;t++){n=(n<<5)-n+e.charCodeAt(t),n&=n}return n}function We(e){return e.toLowerCase()}},7954:function(e,n,t){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return f.Date.now()};function h(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var t=u.test(e);return t||i.test(e)?a(e.slice(2),t?2:8):o.test(e)?NaN:+e}e.exports=function(e,n,t){var r,o,u,i,a,c,l=0,f=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(n){var t=r,u=o;return r=o=void 0,l=n,i=e.apply(u,t)}function y(e){return l=e,a=setTimeout(C,n),f?m(e):i}function E(e){var t=e-c;return void 0===c||t>=n||t<0||s&&e-l>=u}function C(){var e=p();if(E(e))return x(e);a=setTimeout(C,function(e){var t=n-(e-c);return s?v(t,u-(e-l)):t}(e))}function x(e){return a=void 0,g&&r?m(e):(r=o=void 0,i)}function I(){var e=p(),t=E(e);if(r=arguments,o=this,c=e,t){if(void 0===a)return y(c);if(s)return a=setTimeout(C,n),m(c)}return void 0===a&&(a=setTimeout(C,n)),i}return n=b(n)||0,h(t)&&(f=!!t.leading,u=(s="maxWait"in t)?d(b(t.maxWait)||0,n):u,g="trailing"in t?!!t.trailing:g),I.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},I.flush=function(){return void 0===a?i:x(p())},I}},6477:function(e,n){"use strict";self.Headers,self.Request,self.Response,self.fetch},4760:function(e){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],t=n.join(","),r="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,n){n=n||{};var o,i,a,f=[],s=[],d=e.querySelectorAll(t);for(n.includeContainer&&r.call(e,t)&&(d=Array.prototype.slice.apply(d)).unshift(e),o=0;o<d.length;o++)u(i=d[o])&&(0===(a=c(i))?f.push(i):s.push({documentOrder:o,tabIndex:a,node:i}));return s.sort(l).map((function(e){return e.node})).concat(f)}function u(e){return!(!i(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var n=function(e){for(var n=0;n<e.length;n++)if(e[n].checked)return e[n]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!n||n===e}(e)}(e)||c(e)<0)}function i(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,t)&&u(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,a)&&i(e)};var a=n.concat("iframe").join(",");function c(e){var n=parseInt(e.getAttribute("tabindex"),10);return isNaN(n)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:n}function l(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=o},2587:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},6835:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(2937);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,u=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7812:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(2587);var o=t(2937);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2937:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(2587);function o(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}}}]);