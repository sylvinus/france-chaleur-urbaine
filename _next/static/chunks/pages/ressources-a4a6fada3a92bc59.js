(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{7942:function(e,r,a){"use strict";var i=a(5696);r.default=void 0;var t,s=(t=a(7294))&&t.__esModule?t:{default:t},n=a(4957),l=a(9898),c=a(639);var o={};function d(e,r,a,i){if(e&&n.isLocalURL(r)){e.prefetch(r,a,i).catch((function(e){0}));var t=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;o[r+"%"+a+(t?"%"+t:"")]=!0}}var u=function(e){var r,a=!1!==e.prefetch,t=l.useRouter(),u=s.default.useMemo((function(){var r=n.resolveHref(t,e.href,!0),a=i(r,2),s=a[0],l=a[1];return{href:s,as:e.as?n.resolveHref(t,e.as):l||s}}),[t,e.href,e.as]),f=u.href,h=u.as,m=e.children,p=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var _=(r=s.default.Children.only(m))&&"object"===typeof r&&r.ref,j=c.useIntersection({rootMargin:"200px"}),b=i(j,2),N=b[0],w=b[1],E=s.default.useCallback((function(e){N(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,N]);s.default.useEffect((function(){var e=w&&a&&n.isLocalURL(f),r="undefined"!==typeof v?v:t&&t.locale,i=o[f+"%"+h+(r?"%"+r:"")];e&&!i&&d(t,f,h,{locale:r})}),[h,f,w,v,a,t]);var C={ref:E,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,a,i,t,s,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(a))&&(e.preventDefault(),r[t?"replace":"push"](a,i,{shallow:s,locale:c,scroll:l}))}(e,t,f,h,p,g,x,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),n.isLocalURL(f)&&d(t,f,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof v?v:t&&t.locale,y=t&&t.isLocaleDomain&&n.getDomainLocale(h,k,t&&t.locales,t&&t.domainLocales);C.href=y||n.addBasePath(n.addLocale(h,k,t&&t.defaultLocale))}return s.default.cloneElement(r,C)};r.default=u},639:function(e,r,a){"use strict";var i=a(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,a=e.rootMargin,o=e.disabled||!n,d=t.useRef(),u=t.useState(!1),f=i(u,2),h=f[0],m=f[1],p=t.useState(r?r.current:null),g=i(p,2),x=g[0],v=g[1],_=t.useCallback((function(e){d.current&&(d.current(),d.current=void 0),o||h||e&&e.tagName&&(d.current=function(e,r,a){var i=function(e){var r,a={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===a.root&&e.margin===a.margin}));i?r=l.get(i):(r=l.get(a),c.push(a));if(r)return r;var t=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;r&&a&&r(a)}))}),e);return l.set(a,r={id:a,observer:s,elements:t}),r}(a),t=i.id,s=i.observer,n=i.elements;return n.set(e,r),s.observe(e),function(){if(n.delete(e),s.unobserve(e),0===n.size){s.disconnect(),l.delete(t);var r=c.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&m(e)}),{root:x,rootMargin:a}))}),[o,x,a,h]);return t.useEffect((function(){if(!n&&!h){var e=s.requestIdleCallback((function(){return m(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[h]),t.useEffect((function(){r&&v(r.current)}),[r]),[_,h]};var t=a(7294),s=a(6286),n="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},5045:function(e,r,a){"use strict";a.d(r,{EV:function(){return n},YG:function(){return l},Ji:function(){return c}});var i=a(1664),t=(a(7294),a(7379)),s=a(5893),n="210px",l="calc(214px - 10rem)",c="98px",o=t.ZP.section.withConfig({displayName:"MainLayout__Main",componentId:"sc-4z5cbf-0"})(["min-height:calc(100vh - ",");@media (min-width:992px){min-height:calc(100vh - "," - ",");","}"],n,"214px","291px",(function(e){return e.fullscreen&&"min-height: calc(100vh - ".concat(l," - ").concat(c,");")})),d=t.ZP.img.withConfig({displayName:"MainLayout__HeaderLogo",componentId:"sc-4z5cbf-1"})(["width:auto;height:auto;max-height:110px;max-width:200px;"]),u=t.ZP.p.withConfig({displayName:"MainLayout__HeaderLabel",componentId:"sc-4z5cbf-2"})(["font-size:1.9rem;color:#069368;"]),f=t.ZP.p.withConfig({displayName:"MainLayout__HeaderSubLabel",componentId:"sc-4z5cbf-3"})(["margin:0;"]),h=t.ZP.img.withConfig({displayName:"MainLayout__GithubLogo",componentId:"sc-4z5cbf-4"})(["shape-rendering:crispEdges;width:0.7rem;height:0.7rem;"]),m=[{label:"Accueil",url:"/"},{label:"Documentation",url:"/ressources"},{label:"Partenaires",url:"/partenaires"},{label:"Carte des r\xe9seaux",url:"/carte"}];r.ZP=function(e){var r=e.children,a=e.currentMenu,t=e.fullscreen;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{className:"fr-header ".concat(t?"fullscreen":""),children:[(0,s.jsx)("div",{className:"fr-header__body",children:(0,s.jsx)("div",{className:"fr-container",children:(0,s.jsx)("div",{className:"fr-header__body-row",children:(0,s.jsxs)("div",{className:"fr-header__brand",children:[(0,s.jsxs)("div",{className:"fr-header__brand-top",children:[(0,s.jsx)("div",{className:"fr-header__logo",children:(0,s.jsxs)("p",{className:"fr-logo",children:["R\xe9publique",(0,s.jsx)("br",{}),"Fran\xe7aise"]})}),(0,s.jsx)("div",{className:"fr-header__navbar",children:(0,s.jsx)("button",{className:"fr-btn--menu fr-btn","data-fr-opened":"false","aria-controls":"modal-870","aria-haspopup":"menu",title:"Menu",id:"fr-btn-menu-mobile-4",children:"Menu"})}),(0,s.jsx)("div",{className:"fr-header__operator",children:(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)("a",{title:"france chaleur urbaine",children:(0,s.jsx)(d,{className:"fr-footer__logo",src:"./logo-fcu.png",alt:"logo france chaleur urbaine"})})})})]}),(0,s.jsx)("div",{className:"fr-header__service",children:(0,s.jsx)(i.default,{href:"/",children:(0,s.jsxs)("a",{title:"france chaleur urbaine",children:[(0,s.jsx)(u,{className:"fr-header__service-title",children:"France Chaleur Urbaine"}),(0,s.jsx)(f,{children:"Service public pour le raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur"})]})})})]})})})}),(0,s.jsx)("div",{className:"fr-header__menu fr-modal",id:"modal-870",children:(0,s.jsxs)("div",{className:"fr-container",children:[(0,s.jsx)("button",{className:"fr-link--close fr-link","aria-controls":"modal-870",children:"Fermer"}),(0,s.jsx)("div",{className:"fr-header__menu-links"}),(0,s.jsx)("nav",{className:"fr-nav",id:"header-navigation","aria-label":"Menu principal",children:(0,s.jsxs)("ul",{className:"fr-nav__list",children:[(0,s.jsx)("li",{className:"fr-nav__Logo-Entry",children:(0,s.jsx)("img",{className:"fr-nav__logo",src:"./logo-fcu.png",alt:"logo france chaleur urbaine"})}),m.map((function(e){var r=e.label,t=e.url;return(0,s.jsx)("li",{className:"fr-nav__item ".concat(a===t?"fr-nav__item--active":""),children:(0,s.jsx)(i.default,{href:t,prefetch:!1,children:(0,s.jsx)("a",{className:"fr-nav__link","aria-current":a===t?"page":void 0,children:r})})},t)}))]})})]})})]}),(0,s.jsx)(o,{fullscreen:t,children:r}),(0,s.jsx)("footer",{className:"fr-footer ".concat(t?"fullscreen":""),id:"footer",children:(0,s.jsxs)("div",{className:"fr-container",children:[(0,s.jsxs)("div",{className:"fr-footer__body fr-footer__body--operator",children:[(0,s.jsxs)("div",{className:"fr-footer__brand fr-enlarge-link",children:[(0,s.jsxs)("p",{className:"fr-logo",title:"r\xe9publique fran\xe7aise",children:["r\xe9publique",(0,s.jsx)("br",{}),"fran\xe7aise"]}),(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)("a",{className:"fr-footer__brand-link",title:"Retour \xe0 l\u2019accueil",children:(0,s.jsx)("img",{className:"fr-footer__logo",src:"./logo-fcu-with-typo.jpg",alt:"logo france chaleur urbaine"})})})]}),(0,s.jsx)("div",{className:"fr-footer__content",children:(0,s.jsxs)("p",{className:"fr-footer__content-desc",children:["France Chaleur Urbaine est un projet d'innovation pour acc\xe9l\xe9rer le raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur en vue de l'atteinte des objectifs de d\xe9veloppement de la chaleur d'origine renouvelable.",(0,s.jsx)("br",{}),(0,s.jsxs)("strong",{children:["Faites nous part de vos propositions pour am\xe9liorer ce service : ",(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"mailto:france-chaleur-urbaine@beta.gouv.fr",target:"_blank",rel:"noreferrer",children:"france-chaleur-urbaine@beta.gouv.fr"})]})]})})]}),(0,s.jsxs)("div",{className:"fr-footer__bottom",children:[(0,s.jsxs)("ul",{className:"fr-footer__bottom-list",children:[(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)(i.default,{href:"/accessibilite",prefetch:!1,children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",children:"Accessibilit\xe9: non conforme"})})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)(i.default,{href:"/mentions-legales",prefetch:!1,children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",children:"Mentions l\xe9gales & CGU"})})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"#consentement",children:"Cookies & Consentements"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)(i.default,{href:"/politique-de-confidentialite",prefetch:!1,children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",children:"Donn\xe9es personnelles"})})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)(i.default,{href:"/stats",prefetch:!1,children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",children:"Statistiques"})})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)(i.default,{href:"https://github.com/betagouv/france-chaleur-urbaine",prefetch:!1,children:(0,s.jsxs)("a",{className:"fr-footer__bottom-link",target:"_blank",children:[(0,s.jsx)(h,{src:"./icons/github-brands.svg",alt:"","aria-disabled":"true"})," ","Github"]})})})]}),(0,s.jsx)("div",{className:"fr-footer__bottom-copy",children:(0,s.jsxs)("p",{children:["Sauf mention contraire, tous les textes de ce site sont sous"," ",(0,s.jsx)("a",{href:"https://github.com/etalab/licence-ouverte/blob/master/LO.md",target:"_blank",rel:"noopener noreferrer",children:"licence etalab-2.0"})]})})]})]})})]})}},3827:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return d}});var i=a(7379).ZP.div.withConfig({displayName:"resourceCardstyle__TextCard",componentId:"sc-1aj2279-0"})(["height:",";"],(function(e){return e.height||"max-content"})),t=(a(7294),a(5893));var s=function(e){var r=e.image,a=e.title,s=e.description,n=e.fileLink;return(0,t.jsxs)("div",{className:"fr-card",children:[(0,t.jsxs)("div",{className:"fr-p-3w",children:[(0,t.jsxs)(i,{height:"280px",children:[(0,t.jsx)("p",{className:"fr-card__detail",children:"Brochure PDF"}),(0,t.jsx)("h3",{className:"fr-card__title",dangerouslySetInnerHTML:{__html:a}}),(0,t.jsx)("p",{className:"fr-card__desc",children:s})]}),(0,t.jsx)("div",{className:"fr-grid-row fr-grid-row--gutters fr-grid-row--right",children:(0,t.jsx)("div",{className:"fr-col-",children:(0,t.jsxs)("a",{className:"fr-btn",href:n,target:"_blank",download:!0,rel:"noopener noreferrer nofollow",children:["Consulter",(0,t.jsx)("span",{className:"fr-fi-arrow-right-s-line fr-pl-2w","aria-hidden":"true"})]})})})]}),(0,t.jsx)("div",{className:"fr-card__img",children:(0,t.jsx)("img",{src:r.url,className:"fr-responsive-img",alt:r.title})})]})},n=JSON.parse('{"T":"Ressources","J":[{"title":"Informations sur le raccordement \xe0 un r\xe9seau de chaleur","items":[{"image":{"url":"./raccorder-ADEME.jpg","title":""},"title":"Se raccorder \xe0 r\xe9seau de chaleur","description":"Fiche de sensibilisation de l\'ADEME sur le raccordement des copropri\xe9t\xe9s","fileLink":"https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-se-raccorder-reseau-chaleur.pdf"},{"image":{"url":"./Raccordement-CEREMA.jpg","title":""},"title":"Raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur <br/> Guide m\xe9thodologique","description":"Guide m\xe9thodologique pratique du CEREMA pour \xe9tudier tr\xe8s concr\xe8tement la faisabilit\xe9 d\'un raccordement d\'une copropri\xe9t\xe9","fileLink":"http://reseaux-chaleur.cerema.fr/guide-de-raccordement-des-coproprietes-aux-reseaux-de-chaleur"},{"image":{"url":"./adieu-fioul.jpg","title":""},"title":"Gagnez en confort et faites des \xe9conomies <br/>Dites adieu au fioul","description":"Fiche de l\'Agence Parisienne du Climat pr\xe9sentant les 8 bonnes raisons de quitter rapidement le fioul","fileLink":"https://www.apc-paris.com/system/files/file_fields/2019/03/15/plaquette-apc-web.pdf"}]},{"title":"Aides publiques pour faciliter les raccordements et donn\xe9es \xe9conomiques","items":[{"image":{"url":"./Aides-ADEME.jpg","title":""},"title":"Aides financi\xe8res","description":"Guide ADEME de janvier 2021 des aides financi\xe8res publiques accessibles aux copropri\xe9t\xe9s et m\xe9nages int\xe9grant les derni\xe8res \xe9volutions sur MaPrimeR\xe9nov\' et les Certificats d\'\xe9conomie d\'\xe9nergie","fileLink":"https://www.ademe.fr/sites/default/files/assets/documents/guide-pratique-aides-financieres-renovation-habitat-2021.pdf"},{"image":{"url":"./Nouveaut\xe9s-2021-aides-publiques.jpg","title":""},"title":"Nouveaut\xe9s 2021 sur les aides publiques","description":"Fiche DRIEAT r\xe9sumant les nouveaut\xe9s 2021 sur les aides aux copropri\xe9t\xe9s pour le raccordement \xe0 un r\xe9seau de chaleur","fileLink":"./aides_2021.pdf"},{"image":{"url":"./Comparaison-AMORCE.jpg","title":""},"title":"Comparaison \xe9conomique des modes de chauffage  en 2018","description":"Rapport AMORCE / ADEME comparant la comp\xe9titivit\xe9 des r\xe9seaux de chaleur par rapport aux autres modes de chauffage des logements collectifs","fileLink":"https://amorce.asso.fr/publications/comparaison-economique-des-modes-de-chauffage-en-2018-rce35"}]},{"title":"Relations contractuelles avec les exploitants de r\xe9seaux de chaleur","items":[{"image":{"url":"./R\xe9seaux-chaleur-froid-FNCCR.jpg","title":""},"title":"R\xe9seaux de chaleur et de froid","description":"Guide de la FNCCR (F\xe9d\xe9ration nationale des collectivit\xe9s conc\xe9dantes et r\xe9gies) sur les r\xe8glements de service et polices d\'abonnement","fileLink":"https://www.fnccr.asso.fr/article/le-reglement-de-service-et-sa-police-dabonnement-type-sont-en-ligne/"},{"image":{"url":"./Prix-chaleur-CEREMA.jpg","title":""},"title":"Prix de la chaleur et facturation","description":"Fiche du CEREMA pour comprendre sa facture de chauffage urbain","fileLink":"http://reseaux-chaleur.cerema.fr/prix-de-la-chaleur-et-facturation"},{"image":{"url":"./Reseaux-chaleur-froid.jpg","title":""},"title":"R\xe9seaux de chaleur et de froid","description":"Guide de la FNCCR (F\xe9d\xe9ration nationale des collectivit\xe9s conc\xe9dantes et r\xe9gies) pour pr\xe9venir les litiges","fileLink":"https://www.fnccr.asso.fr/article/guide-reseaux-de-chaleur/"}]},{"title":"R\xe9glementations","items":[{"image":{"url":"./Code-energie.jpg","title":""},"title":"Code de l\u2019energie","description":"Fiche DRIEAT listant les textes l\xe9gislatifs et r\xe9glementaires sur les r\xe9seaux de chaleur (Extraction du sommaire du code de l\'Energie)","fileLink":"./Fiche_code_de_Energie.pdf"},{"image":{"url":"./Enqu\xeate-classement-reseaux.jpg","title":""},"title":"Enqu\xeate sur le classement des r\xe9seaux de chaleur et de froid","description":"Guide CEREMA/AMORCE sur les \xe9volutions en 2021 et 2022 concernant le classement des r\xe9seaux de chaleur et l\'obligation de raccordement des b\xe2timents.","fileLink":"https://amorce.asso.fr/publications/enquete-sur-le-classement-des-reseaux-de-chaleur-et-de-froid-comprendre-et-appliquer-la-procedure-en-vue-de-sa-generalisation-en-2022-rcp32"},{"image":{"url":"./Arrete-24-juillet.jpg","title":""},"title":"Arr\xe9t\xe9 du 24 juillet 2020","description":"Arr\xeat\xe9 du 24 juillet 2020 pour l\u2019information du propri\xe9taire ou du syndicat de copropri\xe9taires pour un b\xe2timent raccord\xe9 \xe0 un r\xe9seau de chaleur ou de froid","fileLink":"https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042176809"}]}]}');var l=function(e){var r=e.title,a=e.children;return(0,t.jsx)("div",{className:"fr-container fr-my-8w",children:(0,t.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters",children:[(0,t.jsx)("div",{className:"fr-col-12",children:(0,t.jsx)("h2",{children:r})}),null===a||void 0===a?void 0:a.map((function(e,r){return(0,t.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-6",children:e},r)}))]})})},c=a(5045),o=a(9008);var d=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Ressources : France Chaleur Urbaine"})}),(0,t.jsxs)(c.ZP,{currentMenu:"/ressources",children:[(0,t.jsx)("div",{className:"fr-container fr-mt-2w",children:(0,t.jsx)("div",{className:"fr-grid-row",children:(0,t.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-12",children:(0,t.jsx)("h1",{children:n.T})})})}),n.J.map((function(e,r){return(0,t.jsx)(l,{title:e.title,children:e.items.map((function(e,r){return(0,t.jsx)(s,{image:e.image,title:e.title,description:e.description,fileLink:e.fileLink},r)}))},r)})),(0,t.jsx)("div",{className:"fr-container fr-my-8w",children:(0,t.jsxs)("div",{className:"fr-grid-row fr-grid-row--gutters",children:[(0,t.jsx)("div",{className:"fr-col-12",children:(0,t.jsx)("h3",{children:"Cartographie et donn\xe9es"})}),(0,t.jsx)("div",{className:"fr-col-lg-4 fr-col-sm-6",children:(0,t.jsxs)("div",{className:"fr-card fr-enlarge-link",children:[(0,t.jsxs)(i,{className:"fr-card__body",children:[(0,t.jsx)("p",{className:"fr-card__detail",children:"Site internet"}),(0,t.jsx)("h4",{className:"fr-card__title",children:(0,t.jsx)("a",{href:"https://carto.viaseva.org/public/viaseva/map/",target:"_blank",className:"fr-card__link",rel:"noopener noreferrer",children:"Portail des r\xe9seaux de chaleur et de froid"})}),(0,t.jsx)("p",{className:"fr-card__desc",children:"Site ViaSeva pour visualiser les trac\xe9s des r\xe9seaux fran\xe7ais et leurs caract\xe9ristiques principales"})]}),(0,t.jsx)("div",{className:"fr-card__img",children:(0,t.jsx)("img",{src:"./cart-france.png",className:"fr-responsive-img",alt:"carte"})})]})})]})})]})]})}},3549:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ressources",function(){return a(3827)}])},1664:function(e,r,a){e.exports=a(7942)}},function(e){e.O(0,[774,888,179],(function(){return r=3549,e(e.s=r);var r}));var r=e.O();_N_E=r}]);