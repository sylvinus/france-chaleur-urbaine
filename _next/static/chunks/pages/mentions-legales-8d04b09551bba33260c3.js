(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[648],{3367:function(e,r,t){"use strict";var n;r.__esModule=!0,r.AmpStateContext=void 0;var i=((n=t(7294))&&n.__esModule?n:{default:n}).default.createContext({});r.AmpStateContext=i},7845:function(e,r,t){"use strict";r.__esModule=!0,r.isInAmpMode=a,r.useAmp=function(){return a(i.default.useContext(s.AmpStateContext))};var n,i=(n=t(7294))&&n.__esModule?n:{default:n},s=t(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ampFirst,t=void 0!==r&&r,n=e.hybrid,i=void 0!==n&&n,s=e.hasQuery,a=void 0!==s&&s;return t||i&&a}},7947:function(e,r,t){"use strict";var n=t(1682);function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}r.__esModule=!0,r.defaultHead=p,r.default=void 0;var s,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(t,i,s):t[i]=e[i]}t.default=e,r&&r.set(e,t);return t}(t(7294)),o=(s=t(617))&&s.__esModule?s:{default:s},u=t(3367),l=t(4287),c=t(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[a.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function f(e,r){return"string"===typeof r||"number"===typeof r?e:r.type===a.default.Fragment?e.concat(a.default.Children.toArray(r.props.children).reduce((function(e,r){return"string"===typeof r||"number"===typeof r?e:e.concat(r)}),[])):e.concat(r)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,r){return e.reduce((function(e,r){var t=a.default.Children.toArray(r.props.children);return e.concat(t)}),[]).reduce(f,[]).reverse().concat(p(r.inAmpMode)).filter(function(){var e=new Set,r=new Set,t=new Set,n={};return function(i){var s=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var o=i.key.slice(i.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(i.type){case"title":case"base":r.has(i.type)?s=!1:r.add(i.type);break;case"meta":for(var u=0,l=h.length;u<l;u++){var c=h[u];if(i.props.hasOwnProperty(c))if("charSet"===c)t.has(c)?s=!1:t.add(c);else{var d=i.props[c],p=n[c]||new Set;"name"===c&&a||!p.has(d)?(p.add(d),n[c]=p):s=!1}}}return s}}()).reverse().map((function(e,t){var s=e.key||t;if(!r.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(r){return e.props.href.startsWith(r)}))){var o=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:s})}))}function v(e){var r=e.children,t=(0,a.useContext)(u.AmpStateContext),n=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(t)},r)}v.rewind=function(){};var b=v;r.default=b},617:function(e,r,t){"use strict";var n=t(3115),i=t(2553),s=t(2012),a=(t(450),t(9807)),o=t(7690),u=t(9828);function l(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=u(e);if(r){var i=u(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return o(this,t)}}r.__esModule=!0,r.default=void 0;var c=t(7294),d=function(e){a(t,e);var r=l(t);function t(e){var s;return i(this,t),(s=r.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(n(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(c.Component);r.default=d},5506:function(e,r,t){"use strict";t.r(r);var n=t(5893),i=t(1809),s=t(9008);t(7294);r.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{children:(0,n.jsx)("title",{children:"Mentions l\xe9gales : France Chaleur Urbaine"})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("div",{className:"fr-container fr-mt-2w",children:(0,n.jsx)("div",{className:"fr-grid-row",children:(0,n.jsxs)("div",{className:"fr-col-12",children:[(0,n.jsx)("h2",{children:"Mentions l\xe9gales"}),(0,n.jsx)("h3",{children:"\xc9diteurs"}),(0,n.jsx)("p",{children:"France Chaleur Urbaine est \xe9dit\xe9 par la Fabrique num\xe9rique du minist\xe8re de la Transition \xe9cologique, sise 1 place Carpeaux, 92800 Puteaux, avec l\u2019appui de l\u2019incubateur de services num\xe9riques beta.gouv.fr de la direction interminist\xe9rielle du num\xe9rique de l\u2019\xc9tat (DINUM)."}),(0,n.jsx)("p",{children:"Directrice et directeur de la publication : Jean-Marc Picard (Directeur adjoint de la DRIEAT Ile-de-France)"}),(0,n.jsx)("h3",{children:"Prestataires d\u2019h\xe9bergement"}),(0,n.jsxs)("ul",{className:"fr-mb-4w",children:[(0,n.jsxs)("li",{children:["H\xe9bergement du site",(0,n.jsx)("a",{href:"https://scalingo.com",children:" https://scalingo.com"})]}),(0,n.jsxs)("li",{children:["H\xe9bergement et traitement du formulaire",(0,n.jsx)("a",{href:"https://formspark.io/",children:" https://formspark.io/"})]})]}),(0,n.jsx)("h2",{children:"Conditions g\xe9n\xe9rales d\u2019utilisation"}),(0,n.jsx)("p",{children:"CGU v.1.1, valables \xe0 compter du 17 juillet 2021"}),(0,n.jsx)("p",{children:"France Chaleur Urbaine est un service num\xe9rique de l\u2019\xc9tat \xe9dit\xe9 par le Minist\xe8re de la transition \xe9cologique, avec l\u2019appui de la Direction r\xe9gionale et interd\xe9partementale de l\u2019Environnement, de l\u2019Am\xe9nagement et des Transports d\u2019\xcele-de-France (DRIEAT), la Fabrique num\xe9rique, l\u2019incubateur minist\xe9riel de services num\xe9riques innovants, et beta.gouv.fr, l\u2019incubateur de la direction interminist\xe9rielle du num\xe9rique de l\u2019\xc9tat (DINUM)."}),(0,n.jsx)("h3",{children:"Pr\xe9sentation du service"}),(0,n.jsx)("p",{children:"France Chaleur Urbaine est un service num\xe9rique de l\u2019administration qui permet de localiser les r\xe9seaux de chaleur de chauffage urbain \xe0 proximit\xe9 d\u2019une copropri\xe9t\xe9."}),(0,n.jsx)("p",{children:"Ce service a pour objectif d\u2019inciter les copropri\xe9t\xe9s encore chauff\xe9es au fioul ou au gaz \xe0 \xe9tudier l\u2019opportunit\xe9 d\u2019un raccordement \xe0 un chauffage urbain \xe0 proximit\xe9 ,en particulier lorsque leurs chaudi\xe8res existantes arrivent en fin de vie ou lorsque des travaux de r\xe9novation sont pr\xe9vus"}),(0,n.jsx)("p",{children:"Le pr\xe9sent document a pour objet de r\xe9gler les relations entre les diff\xe9rents intervenants sur le service. Il d\xe9finit les conditions et modalit\xe9s d\u2019utilisation des services france-chaleur-urbaine.beta.gouv.fr sur Internet."}),(0,n.jsxs)("ul",{className:"fr-mb-4w",children:[(0,n.jsx)("li",{children:"L\u2019utilisation du service est libre, facultative et gratuite."}),(0,n.jsx)("li",{children:"L'utilisation du service est subordonn\xe9e \xe0 l\u2019acceptation pr\xe9alable et au respect int\xe9gral des pr\xe9sentes conditions g\xe9n\xe9rales d\u2019utilisation (CGU) par l\u2019utilisateur."})]}),(0,n.jsx)("p",{children:"Vocabulaire :"}),(0,n.jsxs)("ul",{className:"fr-mb-4w",children:[(0,n.jsx)("li",{children:"\xab Nous \xbb se r\xe9f\xe8re \xe0 l\u2019\xe9diteur de France Chaleur Urbaine."}),(0,n.jsx)("li",{children:"\xab Vous \xbb se r\xe9f\xe8re \xe0 un utilisateur de France Chaleur Urbaine."})]}),(0,n.jsx)("h3",{children:"Objet"}),(0,n.jsx)("p",{children:"Le service est une application web qui vous permet de :"}),(0,n.jsxs)("ul",{className:"fr-mb-4w",children:[(0,n.jsx)("li",{children:"Saisir l\u2019adresse d\u2019un logement et savoir s\u2019il pourrait \xeatre raccord\xe9 \xe0 un r\xe9seau de chaleur. Par \u201cpourrait \xeatre raccord\xe9\u201d, le service d\xe9signe les copropri\xe9t\xe9s qui sont \xe0 moins de 300 m\xe8tres d\u2019un r\xe9seau de chaleur ce qui accro\xeet la probabilit\xe9 de pouvoir r\xe9aliser un raccordement."}),(0,n.jsx)("li",{children:"Afficher une carte centr\xe9e sur cette adresse montrant les r\xe9seaux de chaleur \xe0 proximit\xe9 (carte ViaSeva)"}),(0,n.jsx)("li",{children:"Saisir des informations concernant votre copropri\xe9t\xe9 en vue d\u2019obtenir des informations de services publics d\u2019accompagnement ou d\u2019informations techniques et commerciales de la part de l\u2019op\xe9rateur du r\xe9seau de chaleur \xe0 proximit\xe9"})]}),(0,n.jsx)("h3",{children:"Qualit\xe9 des donn\xe9es publi\xe9es"}),(0,n.jsx)("p",{children:"Nous publions sur france-chaleur-urbaine des donn\xe9es \xe0 titre informatif. Par cons\xe9quent, les informations publi\xe9es sur chauffage-urbain ne sauraient engager la responsabilit\xe9 de leur \xe9diteur ou d\u2019un quelconque service de l\u2019\xc9tat, l\u2019utilisateur y ayant recours ayant conscience des potentielles erreurs ou omissions qu\u2019elles peuvent comporter. Nous nous effor\xe7ons de livrer des donn\xe9es de la meilleure qualit\xe9 possible. Toutefois, malgr\xe9 toute notre attention, elles peuvent encore comporter des erreurs ou omissions. Si vous constatez une erreur ou omission parmi ces donn\xe9es, nous vous invitons \xe0 nous la signaler par courriel \xe0 france-chaleur-urbaine@beta.gouv.fr."}),(0,n.jsx)("h3",{children:"Propri\xe9t\xe9 intellectuelle"}),(0,n.jsxs)("p",{children:["Plusieurs aspects caract\xe9risent la propri\xe9t\xe9 intellectuelle sur France Chaleur Urbaine. Le niveau d\u2019ouverture ou de protection pour chacun est expliqu\xe9 ci-apr\xe8s avec leurs conditions particuli\xe8res.",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Le site france-chaleur-urbaine.beta.gouv.fr est prot\xe9g\xe9"}),(0,n.jsx)("br",{}),"Le site est la propri\xe9t\xe9 exclusive du minist\xe8re de la transition \xe9cologique. Toute reproduction ou repr\xe9sentation totale ou partielle de ce site par quelque proc\xe9d\xe9 que ce soit, sans l\u2019autorisation expresse de son propri\xe9taire est interdite et constituerait une contrefa\xe7on sanctionn\xe9e par les articles L. 335-2 du Code de la propri\xe9t\xe9 intellectuelle."]}),(0,n.jsx)("p",{children:"Les contenus suivants ne sont pas r\xe9utilisables :"}),(0,n.jsx)("ul",{className:"fr-mb-4w",children:(0,n.jsx)("li",{children:"l\u2019iconographie."})}),(0,n.jsx)("p",{children:"Les contenus suivants sont soumis aux conditions d\u2019utilisations des fournisseurs de donn\xe9es :"}),(0,n.jsx)("ul",{className:"fr-mb-4w",children:(0,n.jsx)("li",{children:"les fonds de carte."})}),(0,n.jsx)("p",{children:"Si vous souhaitez reproduire ou r\xe9utiliser ces contenus pr\xe9sents sur ce site, veuillez contacter le webmestre (france-chaleur-urbaine@beta.gouv.fr) ou les fournisseurs de donn\xe9es externes pour conna\xeetre les conditions particuli\xe8res de r\xe9utilisation applicables."}),(0,n.jsx)("h3",{children:"Les marques pr\xe9sent\xe9es sur le site sont prot\xe9g\xe9es"}),(0,n.jsx)("p",{children:"Les marques dont est titulaire l\u2019Etat, le minist\xe8re de la transition \xe9cologique, la Direction r\xe9gionale et interd\xe9partementale de l\u2019Environnement, de l\u2019Am\xe9nagement et des Transports d\u2019\xcele-de-France de l\u2019Ile-de-France, ainsi que les logos figurant sur le site sont des marques r\xe9guli\xe8rement d\xe9pos\xe9es aupr\xe8s de l\u2019Institut national de la propri\xe9t\xe9 industrielle (INPI). Toute reproduction totale ou partielle de ces marques ou de ces logos effectu\xe9es \xe0 partir des \xe9l\xe9ments du site sans l\u2019autorisation expresse du propri\xe9taire de ce site est prohib\xe9e au sens des articles L. 713-2 et suivants du Code de la propri\xe9t\xe9 intellectuelle. Tout contrefacteur s\u2019expose aux sanctions pr\xe9vues aux articles L. 716-1 et suivants du code de la propri\xe9t\xe9 intellectuelle."}),(0,n.jsx)("h3",{children:"Les donn\xe9es personnelles et les donn\xe9es relevant du secret des affaires sont prot\xe9g\xe9es"}),(0,n.jsx)("p",{children:"Les donn\xe9es et informations personnelles ou relevant du secret des affaires ne rel\xe8vent pas du r\xe9gime applicable \xe0 la Licence Ouverte V 2.0. Nous nous engageons \xe0 prendre toutes les mesures n\xe9cessaires pour garantir la s\xe9curit\xe9 et la confidentialit\xe9 des donn\xe9es personnelles et des donn\xe9es relevant du secret des affaires que vous nous fournissez dans le cadre de l\u2019utilisation du service."}),(0,n.jsx)("h3",{children:"Cr\xe9dits photo"}),(0,n.jsxs)("p",{children:["Les ic\xf4nes sont issues de",(0,n.jsxs)("a",{href:"https://streamlinehq.com",children:[" ","https://streamlinehq.com"," "]}),"via la licence de Rapha\xebl Yharrassarry, UX designer pour France Chaleur Urbaine."]})]})})})})]})}},8696:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mentions-legales",function(){return t(5506)}])},9008:function(e,r,t){e.exports=t(7947)},8164:function(e,r,t){var n=t(4360);e.exports=function(e){if(Array.isArray(e))return n(e)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,r,t){var n=t(8164),i=t(7381),s=t(3585),a=t(5725);e.exports=function(e){return n(e)||i(e)||s(e)||a()}}},function(e){e.O(0,[774,407,809,888,179],(function(){return r=8696,e(e.s=r);var r}));var r=e.O();_N_E=r}]);