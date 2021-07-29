(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{3367:function(e,r,t){"use strict";var n;r.__esModule=!0,r.AmpStateContext=void 0;var i=((n=t(7294))&&n.__esModule?n:{default:n}).default.createContext({});r.AmpStateContext=i},7845:function(e,r,t){"use strict";r.__esModule=!0,r.isInAmpMode=s,r.useAmp=function(){return s(i.default.useContext(a.AmpStateContext))};var n,i=(n=t(7294))&&n.__esModule?n:{default:n},a=t(3367);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ampFirst,t=void 0!==r&&r,n=e.hybrid,i=void 0!==n&&n,a=e.hasQuery,s=void 0!==a&&a;return t||i&&s}},7947:function(e,r,t){"use strict";var n=t(1682);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}r.__esModule=!0,r.defaultHead=f,r.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=u();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=n?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(t,i,a):t[i]=e[i]}t.default=e,r&&r.set(e,t);return t}(t(7294)),o=(a=t(617))&&a.__esModule?a:{default:a},c=t(3367),l=t(4287),d=t(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[s.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function p(e,r){return"string"===typeof r||"number"===typeof r?e:r.type===s.default.Fragment?e.concat(s.default.Children.toArray(r.props.children).reduce((function(e,r){return"string"===typeof r||"number"===typeof r?e:e.concat(r)}),[])):e.concat(r)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,r){return e.reduce((function(e,r){var t=s.default.Children.toArray(r.props.children);return e.concat(t)}),[]).reduce(p,[]).reverse().concat(f(r.inAmpMode)).filter(function(){var e=new Set,r=new Set,t=new Set,n={};return function(i){var a=!0,s=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){s=!0;var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?a=!1:e.add(o)}switch(i.type){case"title":case"base":r.has(i.type)?a=!1:r.add(i.type);break;case"meta":for(var c=0,l=m.length;c<l;c++){var d=m[c];if(i.props.hasOwnProperty(d))if("charSet"===d)t.has(d)?a=!1:t.add(d);else{var u=i.props[d],f=n[d]||new Set;"name"===d&&s||!f.has(u)?(f.add(u),n[d]=f):a=!1}}}return a}}()).reverse().map((function(e,t){var a=e.key||t;if(!r.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(r){return e.props.href.startsWith(r)}))){var o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,s.default.cloneElement(e,o)}return s.default.cloneElement(e,{key:a})}))}function g(e){var r=e.children,t=(0,s.useContext)(c.AmpStateContext),n=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(t)},r)}g.rewind=function(){};var v=g;r.default=v},617:function(e,r,t){"use strict";var n=t(3115),i=t(2553),a=t(2012),s=(t(450),t(9807)),o=t(7690),c=t(9828);function l(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=c(e);if(r){var i=c(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)}}r.__esModule=!0,r.default=void 0;var d=t(7294),u=function(e){s(t,e);var r=l(t);function t(e){var a;return i(this,t),(a=r.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(d.Component);r.default=u},1894:function(e,r,t){"use strict";t.d(r,{W:function(){return n}});var n=t(9163).ZP.div.withConfig({displayName:"partnerCardstyle__TextCard",componentId:"sc-z9y0rn-0"})(["height:max-content;"])},4452:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),i=t(1894),a=t(9163).ZP.div.withConfig({displayName:"resourceCardstyle__TextCard",componentId:"sc-1aj2279-0"})(["height:280px;"]);t(7294);var s=function(e){var r=e.image,t=e.title,i=e.description,s=e.fileLink;return(0,n.jsxs)("div",{className:"fr-card",children:[(0,n.jsxs)("div",{className:"fr-p-3w",children:[(0,n.jsxs)(a,{children:[(0,n.jsx)("p",{className:"fr-card__detail",children:"Brochure PDF"}),(0,n.jsx)("h3",{className:"fr-card__title",dangerouslySetInnerHTML:{__html:t}}),(0,n.jsx)("p",{className:"fr-card__desc",children:i})]}),(0,n.jsx)("div",{className:"fr-grid-row fr-grid-row--gutters fr-grid-row--right",children:(0,n.jsx)("div",{className:"fr-col-",children:(0,n.jsxs)("a",{className:"fr-btn",href:s,target:"_blank",download:!0,rel:"noreferrer nofollow",children:["Consulter",(0,n.jsx)("span",{className:"fr-fi-arrow-right-s-line fr-pl-2w","aria-hidden":"true"})]})})})]}),(0,n.jsx)("div",{className:"fr-card__img",children:(0,n.jsx)("img",{src:r.url,className:"fr-responsive-img",alt:r.title})})]})},o=JSON.parse('{"T":"Ressources","J":[{"title":"Informations sur le raccordement \xe0 un r\xe9seau de chaleur","items":[{"image":{"url":"./raccorder-ADEME.png","title":""},"title":"Se raccorder \xe0 r\xe9seau de chaleur","description":"Fiche de sensibilisation de l\'ADEME sur le raccordement des copropri\xe9t\xe9s","fileLink":"https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-se-raccorder-reseau-chaleur.pdf"},{"image":{"url":"./Raccordement-CEREMA.png","title":""},"title":"Raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur <br/> Guide m\xe9thodologique","description":"Guide m\xe9thodologique pratique du CEREMA pour \xe9tudier tr\xe8s concr\xe8tement la faisabilit\xe9 d\'un raccordement d\'une copropri\xe9t\xe9","fileLink":"http://reseaux-chaleur.cerema.fr/guide-de-raccordement-des-coproprietes-aux-reseaux-de-chaleur"},{"image":{"url":"./adieu- fioul.png","title":""},"title":"Gagnez en confort et faites des \xe9conomies <br/>Dites adieu au fioul","description":"Fiche de l\'Agence Parisienne du Climat pr\xe9sentant les 8 bonnes raisons de quitter rapidement le fioul","fileLink":"https://www.apc-paris.com/system/files/file_fields/2019/03/15/plaquette-apc-web.pdf"}]},{"title":"Aides publiques pour faciliter les raccordements et donn\xe9es \xe9conomiques","items":[{"image":{"url":"./Aides-ADEME.png","title":""},"title":"Aides financi\xe8res","description":"Guide ADEME de janvier 2021 des aides financi\xe8res publiques accessibles aux copropri\xe9t\xe9s et m\xe9nages int\xe9grant les derni\xe8res \xe9volutions sur MaPrimeR\xe9nov\' et les Certificats d\'\xe9conomie d\'\xe9nergie","fileLink":"https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-aides-financieres-renovation-habitat-2021.pdf"},{"image":{"url":"./Nouveaut\xe9s-2021-aides-publiques.png","title":""},"title":"Nouveaut\xe9s 2021 sur les aides publiques","description":"Fiche DRIEAT r\xe9sumant les nouveaut\xe9s 2021 sur les aides aux copropri\xe9t\xe9s pour le raccordement \xe0 un r\xe9seau de chaleur","fileLink":"./aides_2021.pdf"},{"image":{"url":"./Comparaison-AMORCE.png","title":""},"title":"Comparaison \xe9conomique des modes de chauffage  en 2018","description":"Rapport AMORCE / ADEME comparant la comp\xe9titivit\xe9 des r\xe9seaux de chaleur par rapport aux autres modes de chauffage des logements collectifs","fileLink":"https://amorce.asso.fr/publications/comparaison-economique-des-modes-de-chauffage-en-2018-rce35"}]},{"title":"Relations contractuelles avec les exploitants de r\xe9seaux de chaleur","items":[{"image":{"url":"./R\xe9seaux-chaleur-froid-FNCCR.png","title":""},"title":"R\xe9seaux de chaleur et de froid","description":"Guide de la FNCCR (F\xe9d\xe9ration nationale des collectivit\xe9s conc\xe9dantes et r\xe9gies) sur les r\xe8glements de service et polices d\'abonnement","fileLink":"https://www.fnccr.asso.fr/article/le-reglement-de-service-et-sa-police-dabonnement-type-sont-en-ligne/"},{"image":{"url":"./Prix-chaleur-CEREMA.png","title":""},"title":"Prix de la chaleur et facturation","description":"Fiche du CEREMA pour comprendre sa facture de chauffage urbain","fileLink":"http://reseaux-chaleur.cerema.fr/prix-de-la-chaleur-et-facturation"},{"image":{"url":"./Reseaux-chaleur-froid.png","title":""},"title":"R\xe9seaux de chaleur et de froid","description":"Guide de la FNCCR (F\xe9d\xe9ration nationale des collectivit\xe9s conc\xe9dantes et r\xe9gies) pour pr\xe9venir les litiges","fileLink":"https://www.fnccr.asso.fr/article/guide-reseaux-de-chaleur/"}]},{"title":"R\xe9glementations","items":[{"image":{"url":"./Code-energie.png","title":""},"title":"Code de l\u2019energie","description":"Fiche DRIEAT listant les textes l\xe9gislatifs et r\xe9glementaires sur les r\xe9seaux de chaleur (Extraction du sommaire du code de l\'Energie)","fileLink":"./Fiche_code_de_Energie.pdf"},{"image":{"url":"./Enqu\xeate-classement-reseaux.png","title":""},"title":"Enqu\xeate sur le classement des r\xe9seaux de chaleur et de froid","description":"Guide CEREMA/AMORCE sur les \xe9volutions en 2021 et 2022 concernant le classement des r\xe9seaux de chaleur et l\'obligation de raccordement des b\xe2timents.","fileLink":"https://amorce.asso.fr/publications/enquete-sur-le-classement-des-reseaux-de-chaleur-et-de-froid-comprendre-et-appliquer-la-procedure-en-vue-de-sa-generalisation-en-2022-rcp32"},{"image":{"url":"./Arrete-24-juillet.png","title":""},"title":"Arr\xe9t\xe9 du 24 juillet 2020","description":"Arr\xeat\xe9 du 24 juillet 2020 pour l\u2019information du propri\xe9taire ou du syndicat de copropri\xe9taires pour un b\xe2timent raccord\xe9 \xe0 un r\xe9seau de chaleur ou de froid","fileLink":"https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042176809"}]}]}');var c=function(e){var r=e.title,t=e.children;return(0,n.jsx)("div",{className:"fr-container fr-my-8w",children:(0,n.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters",children:[(0,n.jsx)("div",{className:"fr-col-12",children:(0,n.jsx)("h2",{children:r})}),null===t||void 0===t?void 0:t.map((function(e,r){return(0,n.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-6",children:e},r)}))]})})},l=t(1809),d=t(9008);var u=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.default,{children:(0,n.jsx)("title",{children:"Ressources : France Chaleur Urbaine"})}),(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("div",{className:"fr-container fr-mt-2w",children:(0,n.jsx)("div",{className:"fr-grid-row",children:(0,n.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-12",children:(0,n.jsx)("h1",{children:o.T})})})}),o.J.map((function(e,r){return(0,n.jsx)(c,{title:e.title,children:e.items.map((function(e,r){return(0,n.jsx)(s,{image:e.image,title:e.title,description:e.description,fileLink:e.fileLink},r)}))},r)})),(0,n.jsx)("div",{className:"fr-container fr-my-8w",children:(0,n.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters",children:[(0,n.jsx)("div",{className:"fr-col-12",children:(0,n.jsx)("h3",{children:"Cartographie et donn\xe9es"})}),(0,n.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-6",children:(0,n.jsxs)("div",{className:"fr-card fr-enlarge-link",children:[(0,n.jsxs)(i.W,{className:"fr-card__body",children:[(0,n.jsx)("p",{className:"fr-card__detail",children:"Site internet"}),(0,n.jsx)("h4",{className:"fr-card__title",children:(0,n.jsx)("a",{href:"https://carto.viaseva.org/public/viaseva/map/",target:"_blank",className:"fr-card__link",rel:"noreferrer",children:"Portail des r\xe9seaux de chaleur et de froid"})}),(0,n.jsx)("p",{className:"fr-card__desc",children:"Site ViaSeva pour visualiser les trac\xe9s des r\xe9seaux fran\xe7ais et leurs caract\xe9ristiques principales"})]}),(0,n.jsx)("div",{className:"fr-card__img",children:(0,n.jsx)("img",{src:"./cart-france.png",className:"fr-responsive-img",alt:"carte"})})]})})]})})]})]})}},3549:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ressources",function(){return t(4452)}])},9008:function(e,r,t){e.exports=t(7947)},8164:function(e,r,t){var n=t(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,r,t){var n=t(8164),i=t(7381),a=t(3585),s=t(5725);e.exports=function(e){return n(e)||i(e)||a(e)||s()}}},function(e){e.O(0,[774,407,809,888,179],(function(){return r=3549,e(e.s=r);var r}));var r=e.O();_N_E=r}]);