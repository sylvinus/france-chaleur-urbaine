(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{3367:function(e,n,t){"use strict";var r;n.__esModule=!0,n.AmpStateContext=void 0;var s=((r=t(7294))&&r.__esModule?r:{default:r}).default.createContext({});n.AmpStateContext=s},7845:function(e,n,t){"use strict";n.__esModule=!0,n.isInAmpMode=o,n.useAmp=function(){return o(s.default.useContext(i.AmpStateContext))};var r,s=(r=t(7294))&&r.__esModule?r:{default:r},i=t(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,s=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return t||s&&o}},7947:function(e,n,t){"use strict";var r=t(1682);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.__esModule=!0,n.defaultHead=p,n.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var i=r?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(t,s,i):t[s]=e[s]}t.default=e,n&&n.set(e,t);return t}(t(7294)),a=(i=t(617))&&i.__esModule?i:{default:i},u=t(3367),l=t(4287),d=t(7845);function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function f(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,n){return e.reduce((function(e,n){var t=o.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(f,[]).reverse().concat(p(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,r={};return function(s){var i=!0,o=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){o=!0;var a=s.key.slice(s.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(s.type){case"title":case"base":n.has(s.type)?i=!1:n.add(s.type);break;case"meta":for(var u=0,l=m.length;u<l;u++){var d=m[u];if(s.props.hasOwnProperty(d))if("charSet"===d)t.has(d)?i=!1:t.add(d);else{var c=s.props[d],p=r[d]||new Set;"name"===d&&o||!p.has(c)?(p.add(c),r[d]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var i=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,o.default.cloneElement(e,a)}return o.default.cloneElement(e,{key:i})}))}function v(e){var n=e.children,t=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,d.isInAmpMode)(t)},n)}v.rewind=function(){};var g=v;n.default=g},617:function(e,n,t){"use strict";var r=t(3115),s=t(2553),i=t(2012),o=(t(450),t(9807)),a=t(7690),u=t(9828);function l(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=u(e);if(n){var s=u(this).constructor;t=Reflect.construct(r,arguments,s)}else t=r.apply(this,arguments);return a(this,t)}}n.__esModule=!0,n.default=void 0;var d=t(7294),c=function(e){o(t,e);var n=l(t);function t(e){var i;return s(this,t),(i=n.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(d.Component);n.default=c},6701:function(e,n,t){"use strict";t.r(n);var r=t(5893),s=t(1809),i=t(9008);n.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Politique de confidentialit\xe9 : France Chaleur Urbaine"})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)("div",{className:"fr-container fr-mt-2w",children:(0,r.jsx)("div",{className:"fr-grid-row",children:(0,r.jsxs)("div",{className:"fr-col-12",children:[(0,r.jsx)("h2",{children:"Politique des protection des donn\xe9es personnelles"}),(0,r.jsx)("h3",{children:"Donn\xe9es \xe0 caract\xe8re personnel"}),(0,r.jsx)("p",{children:"Nous nous engageons \xe0 ce que la collecte et le traitement de vos donn\xe9es, effectu\xe9s \xe0 partir du site soient conformes au r\xe8glement g\xe9n\xe9ral sur la protection des donn\xe9es du 27 avril 2016, applicable depuis le 25 mai 2018, et \xe0 la loi informatique et libert\xe9s dans sa derni\xe8re version modifi\xe9e du 20 juin 2018. Ces dispositions fixent des r\xe8gles strictes de confidentialit\xe9 et de s\xe9curit\xe9 \xe0 toute organisation, publique et priv\xe9e, dans le cadre du traitement des donn\xe9es \xe0 caract\xe8re personnel de leurs utilisateurs, et ce afin de prot\xe9ger la vie priv\xe9e de ceux-ci."}),(0,r.jsx)("h3",{children:"Responsable du traitement"}),(0,r.jsx)("p",{children:"Le responsable du traitement de vos donn\xe9es \xe0 caract\xe8re personnel est : Le Direction des Affaires Juridiques du Minist\xe8re de la Transition Ecologique 1 place Carpeaux 92800 Puteaux"}),(0,r.jsx)("h3",{children:"Prestataires d\u2019h\xe9bergement"}),(0,r.jsxs)("ul",{className:"fr-mb-4w",children:[(0,r.jsxs)("li",{children:["H\xe9bergement du site",(0,r.jsx)("a",{href:"https://scalingo.com",children:" https://scalingo.com"})]}),(0,r.jsxs)("li",{children:["H\xe9bergement et traitement du formulaire",(0,r.jsx)("a",{href:"https://formspark.io/",children:" https://formspark.io/"})]})]}),(0,r.jsx)("h3",{children:"Traitement des donn\xe9es et utilisation"}),(0,r.jsxs)("p",{children:["Nous ne pouvons utiliser vos donn\xe9es \xe0 caract\xe8re personnel qu\u2019\xe0 des fins \xe0 la fois l\xe9gitimes et n\xe9cessaires. ",(0,r.jsx)("br",{}),"Cela signifie concr\xe8tement que nous traitons vos donn\xe9es \xe0 caract\xe8re personnel pour des finalit\xe9s de :"]}),(0,r.jsxs)("ul",{className:"fr-mb-4w",children:[(0,r.jsx)("li",{children:"transfert de vos informations \xe0 l\u2019op\xe9rateur de r\xe9seau de chaleur de votre quartier pour prise de contact commercial ;"}),(0,r.jsx)("li",{children:"communication par mail d\u2019informations ponctuelles sur l\u2019\xe9volution du service France Chaleur Urbaine ;"}),(0,r.jsx)("li",{children:"demande ponctuelle par mail d\u2019entretien t\xe9l\xe9phonique par l\u2019\xe9quipe France Chaleur Urbaine en vue de conna\xeetre votre retour d\u2019exp\xe9rience et suggestions pour am\xe9liorer le service France Chaleur Urbaine ;"}),(0,r.jsx)("li",{children:"agr\xe9gation anonymis\xe9es des donn\xe9es en vue d\u2019analyses statistiques ;"}),(0,r.jsx)("li",{children:"d\u2019enrichissement des bases de donn\xe9es de l\u2019administration publique;"})]}),(0,r.jsx)("p",{children:"La nature des op\xe9rations r\xe9alis\xe9es sur les donn\xe9es est :"}),(0,r.jsxs)("ul",{className:"fr-mb-4w",children:[(0,r.jsx)("li",{children:"Lors de l\u2019utilisation du service, les informations personnelles que vous acceptez de communiquer sont enregistr\xe9es dans France Chaleur Urbaine."}),(0,r.jsx)("li",{children:"L\u2019affectation d\u2019un utilisateur \xe0 une entit\xe9 priv\xe9e de type entreprise est supervis\xe9e par un administrateur de la plateforme France Chaleur Urbaine."}),(0,r.jsx)("li",{children:"La mise \xe0 jour et l\u2019effacement des donn\xe9es personnelles li\xe9es au compte utilisateur France Chaleur Urbaine et possible par mail \xe0 l\u2019adresse france-chaleur-urbaine@beta.gouv.fr."}),(0,r.jsx)("li",{children:"Les donn\xe9es de connexion sont utilis\xe9es pour \xe9tablir un journal d\u2019ajout et modification des donn\xe9es de France Chaleur Urbaine et de consultation des donn\xe9es non publiques ou \xe0 caract\xe8re confidentiel."}),(0,r.jsx)("li",{children:"Les donn\xe9es personnelles contenues dans les dossiers de demandes suivent un cycle de vie contraint par les proc\xe9dures d\u2019instruction et d\u2019archivage l\xe9gale."})]}),(0,r.jsx)("p",{children:"Les donn\xe9es \xe0 caract\xe8re personnel trait\xe9es sont relatives \xe0 :"}),(0,r.jsxs)("ul",{className:"fr-mb-4w",children:[(0,r.jsx)("li",{children:"Nom, Pr\xe9nom"}),(0,r.jsx)("li",{children:"Adresse g\xe9ographie"}),(0,r.jsx)("li",{children:"Adresse mail, t\xe9l\xe9phone"}),(0,r.jsx)("li",{children:"Statut dans la copropri\xe9t\xe9"})]}),(0,r.jsx)("p",{children:"Note : les autres informations collect\xe9es concernent la copropri\xe9t\xe9 et ne sont donc pas consid\xe9r\xe9es comme des informations personnelles : votre besoin, nombre de logements dans votre copropri\xe9t\xe9, type de chauffage, comment avez-vous entendu parl\xe9 de nous."}),(0,r.jsx)("p",{children:"Les donn\xe9es sont conserv\xe9es pour une dur\xe9e de :"}),(0,r.jsx)("ul",{className:"fr-mb-4w",children:(0,r.jsx)("li",{children:"Les donn\xe9es personnelles sont conserv\xe9es pendant une dur\xe9e de 36 mois."})}),(0,r.jsx)("h3",{children:"Vos droits"}),(0,r.jsx)("p",{children:"Nous nous engageons \xe0 prendre les mesures techniques et organisationnelles appropri\xe9es afin de garantir la s\xe9curit\xe9 du traitement des donn\xe9es \xe0 caract\xe8re personnel de chacun, en application du r\xe8glement g\xe9n\xe9ral sur la protection des donn\xe9es et de la loi informatique et aux libert\xe9s, vous disposez d\u2019un droit d\u2019acc\xe8s, de rectification, de suppression et d\u2019opposition."}),(0,r.jsxs)("ul",{className:"fr-mb-4w",children:[(0,r.jsx)("li",{children:"Par courriel : france-chaleur-urbaine@beta.gouv.fr"}),(0,r.jsx)("li",{children:"Par voie postale : France Chaleur Urbaine - Fabrique Num\xe9rique - Minist\xe8re de la Transition \xe9cologique et solidaire Direction G\xe9n\xe9rale de l'Am\xe9nagement, du Logement et de la Nature, Bureau de la politique des ressources min\xe9rales non \xe9nerg\xe9tiques, 1 place Carpeaux, 92800 Puteaux"})]}),(0,r.jsx)("p",{children:"Cette demande \xe9crite est accompagn\xe9e d\u2019une copie du titre d\u2019identit\xe9 avec signature du titulaire de la pi\xe8ce, en pr\xe9cisant l\u2019adresse \xe0 laquelle la r\xe9ponse doit \xeatre envoy\xe9e. Le d\xe9l\xe9gu\xe9 \xe0 la protection des donn\xe9es du minist\xe8re de la transition \xe9cologique et solidaire peut \xe9galement \xeatre contact\xe9 \xe0 l\u2019adresse suivante : dpd.daj.sg@developpement-durable.gouv.fr. Conform\xe9ment au r\xe8glement g\xe9n\xe9ral sur la protection des donn\xe9es, vous disposez du droit d\u2019introduire une r\xe9clamation aupr\xe8s de la CNIL (3 place de Fontenoy \u2013 TSA 80715 \u2013 75334 PARIS CEDEX 07). Les modalit\xe9s de r\xe9clamation sont pr\xe9cis\xe9es sur le site de la CNIL : www.cnil.fr."}),(0,r.jsx)("h3",{children:"Proc\xe9dure en cas de violations de donn\xe9es \xe0 caract\xe8re personnel"}),(0,r.jsx)("p",{children:"En cas de destruction, de perte, d'alt\xe9ration, de divulgation non autoris\xe9e de donn\xe9es \xe0 caract\xe8re personnel transmises, conserv\xe9es ou trait\xe9es d'une autre mani\xe8re, ou d'acc\xe8s non autoris\xe9 \xe0 de telles donn\xe9es, de mani\xe8re accidentelle ou illicite, susceptible d'engendrer un risque \xe9lev\xe9 pour les droits et libert\xe9s de l\u2019utilisateur, nous vous en informerons des faits et des mesures prises, dans les meilleurs d\xe9lais. Nous nous assurerons \xe9galement que le n\xe9cessaire soit fait quant \xe0 la notification de la violation en question \xe0 la CNIL dans les 72 heures apr\xe8s en avoir pris connaissance, \xe0 moins que la violation ne pr\xe9sente pas un risque \xe9lev\xe9 pour vos droits et libert\xe9s"}),(0,r.jsx)("h3",{children:"Cookies"}),(0,r.jsx)("p",{children:"Nous d\xe9posons des cookies de mesure d\u2019audience (nombre de visites, pages consult\xe9es), respectant les conditions d\u2019exemption du consentement de l\u2019internaute d\xe9finies par la recommandation \xab Cookies \xbb de la Commission nationale informatique et libert\xe9s (CNIL). Cela signifie, notamment, que ces cookies ne servent qu\u2019\xe0 la production de statistiques anonymes et ne permettent pas de suivre votre navigation sur d\u2019autres sites. Nous d\xe9posons \xe9galement des cookies de navigation, aux fins strictement techniques, qui ne sont pas conserv\xe9s (m\xe9morisation, pendant la dur\xe9e de la session, des param\xe8tres de filtrage et de pr\xe9f\xe9rence de fond cartographique). La consultation de la plateforme n\u2019est pas affect\xe9e lorsque les utilisateurs utilisent des navigateurs d\xe9sactivant les cookies. Les adresses IP sont collect\xe9es et conserv\xe9es pour une dur\xe9e de six (6) mois."}),(0,r.jsx)("h3",{children:"\xc9volution du service"}),(0,r.jsx)("p",{children:"Nous pouvons faire \xe9voluer France Chaleur Urbaine sans information pr\xe9alable ou pr\xe9avis. Nous ajoutons et corrigeons r\xe9guli\xe8rement des donn\xe9es, am\xe9liorons l\u2019interface et modifions les formulations sur la base de vos retours et des \xe9volutions r\xe9glementaires et l\xe9gislatives."}),(0,r.jsx)("h3",{children:"Disponibilit\xe9 du service"}),(0,r.jsx)("p",{children:"Nous pouvons suspendre l\u2019acc\xe8s \xe0 France Chaleur Urbaine sans information pr\xe9alable ni pr\xe9avis, notamment pour des raisons de maintenance. Nous mettons l\u2019application \xe0 jour r\xe9guli\xe8rement. L\u2019indisponibilit\xe9 ne d\xe9passe g\xe9n\xe9ralement pas une dizaine de secondes. Nous mettons France Chaleur Urbaine \xe0 disposition sans garantie sur sa disponibilit\xe9. M\xeame si nous nous effor\xe7ons de maintenir le service toujours op\xe9rationnel, cela signifie que d\u2019\xe9ventuelles indisponibilit\xe9s n\u2019ouvriront pas droit \xe0 compensation financi\xe8re. Nous nous r\xe9servons \xe9galement le droit de bloquer, sans information pr\xe9alable ni compensation financi\xe8re, les usages mettant en p\xe9ril l\u2019utilisation du logiciel par d\u2019autres usagers. Cela nous permet d\u2019anticiper d\u2019\xe9ventuelles attaques par d\xe9ni de service."}),(0,r.jsx)("h3",{children:"\xc9volution des conditions d\u2019utilisation"}),(0,r.jsx)("p",{children:"Les termes des pr\xe9sentes conditions d\u2019utilisation peuvent \xeatre modifi\xe9s ou compl\xe9t\xe9s \xe0 tout moment, sans pr\xe9avis, en fonction des modifications apport\xe9es au service, de l\u2019\xe9volution de la l\xe9gislation ou pour tout autre motif jug\xe9 n\xe9cessaire. Ces modifications et mises \xe0 jour s\u2019imposent \xe0 l\u2019utilisateur qui doit, en cons\xe9quence, se r\xe9f\xe9rer r\xe9guli\xe8rement \xe0 cette rubrique pour v\xe9rifier les conditions g\xe9n\xe9rales en vigueur."})]})})})})]})}},5376:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/politique-de-confidentialite",function(){return t(6701)}])},9008:function(e,n,t){e.exports=t(7947)},8164:function(e,n,t){var r=t(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,n,t){var r=t(8164),s=t(7381),i=t(3585),o=t(5725);e.exports=function(e){return r(e)||s(e)||i(e)||o()}}},function(e){e.O(0,[774,407,809,888,179],(function(){return n=5376,e(e.s=n);var n}));var n=e.O();_N_E=n}]);