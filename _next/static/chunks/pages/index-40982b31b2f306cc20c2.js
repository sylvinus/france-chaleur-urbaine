(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var i=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=i},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(s.AmpStateContext))};var n,i=(n=r(7294))&&n.__esModule?n:{default:n},s=r(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,s=e.hasQuery,a=void 0!==s&&s;return r||i&&a}},7947:function(e,t,r){"use strict";var n=r(1682);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var s,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(7294)),o=(s=r(617))&&s.__esModule?s:{default:s},c=r(3367),u=r(4287),l=r(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(i){var s=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(i.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?s=!1:r.add(l);else{var d=i.props[l],p=n[l]||new Set;"name"===l&&a||!p.has(d)?(p.add(d),n[l]=p):s=!1}}}return s}}()).reverse().map((function(e,r){var s=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:s})}))}function g(e){var t=e.children,r=(0,a.useContext)(c.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}g.rewind=function(){};var x=g;t.default=x},617:function(e,t,r){"use strict";var n=r(3115),i=r(2553),s=r(2012),a=(r(450),r(9807)),o=r(7690),c=r(9828);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),d=function(e){a(r,e);var t=u(r);function r(e){var s;return i(this,r),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},5097:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),i=r(9163),s=i.ZP.div.withConfig({displayName:"adventagestyle__HighlightCard",componentId:"sc-16h3wz8-0"})(["display:flex;flex-direction:row;align-items:center;> img{min-width:75px;margin-right:32px;}> div{border-left:0.25rem solid #00eb5e;}"]),a=i.ZP.h3.withConfig({displayName:"adventagestyle__PageTitle",componentId:"sc-16h3wz8-1"})(["color:#000091;"]);r(7294);var o=function(e){var t=e.title,r=e.subTitle,i=e.description,a=e.icon,o=e.altIcon;return(0,n.jsxs)(s,{children:[(0,n.jsx)("img",{src:a,alt:o}),(0,n.jsxs)("div",{className:"fr-highlight fr-mx-4w fr-my-2w",children:[(0,n.jsx)("h4",{children:t}),(0,n.jsx)("strong",{children:r}),(0,n.jsx)("p",{children:i})]})]})};var c=function(){return(0,n.jsxs)("div",{className:"fr-my-5w",children:[(0,n.jsxs)(a,{className:"fr-mb-4w",children:["Les atouts des r\xe9seaux de chaleur ?"," "]}),(0,n.jsx)("p",{className:"fr-mb-3w",children:"Un r\xe9seau de chaleur est un syst\xe8me de distribution de chaleur produite de fa\xe7on centralis\xe9e qui permet de desservir un grand nombre d\u2019usagers (b\xe2timents tertiaires publics ou priv\xe9s, copropri\xe9t\xe9s, logements sociaux,...). Un des atouts majeurs des r\xe9seaux de chaleur est de permettre de mobiliser les \xe9nergies renouvelables pr\xe9sentes sur le territoire, difficilement distribuables autrement."}),(0,n.jsx)(o,{title:"\xc9conomique",subTitle:"Prix stables, TVA \xe0 taux r\xe9duit",description:"Le prix de la chaleur urbaine ne fluctue pas contrairement au fioul et gaz naturel. Tous les r\xe9seaux \xe0 plus de 50% d\u2019\xe9nergies locales b\xe9n\xe9ficient du taux de TVA r\xe9duit pour 100% de la facture.",icon:"./pictoEconomic.png",altIcon:"icon"}),(0,n.jsx)(o,{title:"\xc9cologique",subTitle:"Moins de gaz \xe0 effet de serre et meilleure qualit\xe9 de l\u2019air",description:"Les r\xe9seaux de chaleur sont aliment\xe9s majoritairement \xe0 plus de 50% par des \xe9nergies renouvelables comme la g\xe9othermis, le biomasse ou la chaleur produite par l\u2019incin\xe9ration de nos d\xe9chets.",icon:"./pictoEcology.png",altIcon:"icon"}),(0,n.jsx)(o,{title:"Confort",subTitle:"Fiabilit\xe9 et s\xe9curit\xe9 assur\xe9s",description:"Temp\xe9rature constante, pas de rupture de chauffage, eau chaude disponible en permanence, suppression des chaudi\xe8res et risques associ\xe9s.",icon:"./pictoConfort.png",altIcon:"icon"})]})},u=i.ZP.div.withConfig({displayName:"howIsItworkingstyle__ExplainCard",componentId:"sc-2ijw0y-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:280px;padding:32px;overflow:visible;background:#f8f8f8;box-shadow:0px 3px 5px 3px rgba(0,0,0,0.1);> h4{margin:0;font-size:18px;color:#000091;}> img{width:87px;}"]),l=i.ZP.h2.withConfig({displayName:"howIsItworkingstyle__PageTitle",componentId:"sc-2ijw0y-1"})(["color:#000091;font-size:48px;margin-bottom:32px;"]);var d=function(){return(0,n.jsxs)("div",{className:"fr-my-4w",children:[(0,n.jsx)(l,{children:"Comment \xe7a marche ?"}),(0,n.jsx)("div",{className:"fr-col-lg-12 fr-col-sm-10",children:(0,n.jsxs)("p",{children:["France Chaleur Urbaine est une solution num\xe9rique qui vise \xe0 faciliter et acc\xe9l\xe9rer le raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur."," "]})}),(0,n.jsx)("div",{className:"fr-container--fluid",children:(0,n.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters",children:[(0,n.jsx)("div",{className:"fr-col-lg-3 fr-col-sm-6",children:(0,n.jsxs)(u,{children:[(0,n.jsx)("img",{src:"./pictoMap.png",alt:""}),(0,n.jsx)("h4",{children:"Testez votre \xe9l\xe9gibilit\xe9 au raccordement \xe0 un r\xe9seau de chaleur"})]})}),(0,n.jsx)("div",{className:"fr-col-lg-3 fr-col-sm-6",children:(0,n.jsxs)(u,{children:[(0,n.jsx)("img",{src:"./pictoRelation.png",alt:""}),(0,n.jsx)("h4",{children:"Soyez mis en relation avec une collectivit\xe9 et/ou un exploitant"})]})}),(0,n.jsx)("div",{className:"fr-col-lg-3 fr-col-sm-6",children:(0,n.jsxs)(u,{children:[(0,n.jsx)("img",{src:"./pictoCopro.png",alt:""}),(0,n.jsx)("h4",{children:"Contactez d\u2019autres copropri\xe9t\xe9s d\xe9j\xe0 raccord\xe9es "})]})}),(0,n.jsx)("div",{className:"fr-col-lg-3 fr-col-sm-6",children:(0,n.jsxs)(u,{children:[(0,n.jsx)("img",{src:"./pictoResource.png",alt:""}),(0,n.jsx)("h4",{children:"Acc\xe9dez \xe0 des ressources sur les r\xe9seaux de chaleur"})]})})]})})]})},p=r(1809),f=i.ZP.h3.withConfig({displayName:"testimonystyle__PageTitle",componentId:"sc-ugegoj-0"})(["color:#000091;"]);var h=function(){return(0,n.jsxs)("div",{className:"fr-my-2w",children:[(0,n.jsx)(f,{className:"fr-mb-4w",children:"Ils t\xe9moignent..."}),(0,n.jsxs)("p",{children:["\u201cGr\xe2ce \xe0 notre raccordement au r\xe9seau g\xe9othermique, nous sommes fiers de contribuer \xe0 notre niveau \xe0 la transition \xe9nerg\xe9tique. Nous appr\xe9cions le service apport\xe9 par l\u2019exploitant du r\xe9seau depuis pr\xe8s de 20 ans d\xe9j\xe0\u201d",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"M. Maury, pr\xe9sident de conseil syndical, Le Prieur\xe9, Fresnes"})]}),(0,n.jsxs)("p",{children:["\u201cBelle satisfaction pour un confort thermique in\xe9gal\xe9, aucun probl\xe8me technique, correspondants CGCU comp\xe9tents et disponibles. Confiance totale \xe0 ce jour et promesses tenues sur l\u2019ensemble du dossier\u201d",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"M. Pierrot, membre du conseil syndical, les Peupliers, Le M\xe9e sur Seine"})]})]})},m=r(9008);function g(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{children:(0,n.jsx)("title",{children:"France Chaleur Urbaine : Une solution num\xe9rique qui facilite le raccordement \xe0 un chauffage \xe9conomique et \xe9cologique"})}),(0,n.jsx)(p.Z,{banner:!0,children:(0,n.jsx)("div",{className:"fr-container fr-mt-2w","data-hidden":"8ccEEqGt",children:(0,n.jsx)("div",{className:"fr-grid-row fr-grid-row--center",children:(0,n.jsxs)("div",{className:"fr-col-11",children:[(0,n.jsx)(d,{}),(0,n.jsx)(c,{}),(0,n.jsx)(h,{})]})})})})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5097)}])},9008:function(e,t,r){e.exports=r(7947)},8164:function(e,t,r){var n=r(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,r){var n=r(8164),i=r(7381),s=r(3585),a=r(5725);e.exports=function(e){return n(e)||i(e)||s(e)||a()}}},function(e){e.O(0,[774,407,809,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);