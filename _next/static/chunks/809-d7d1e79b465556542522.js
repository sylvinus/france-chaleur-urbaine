(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1809:function(e,r,t){"use strict";t.d(r,{Z:function(){return A}});var s=t(5893),n=t(9163),a=n.ZP.div.withConfig({displayName:"bannerstyle__BannerContainer",componentId:"sc-15vihfd-0"})(["background:#f9f8f6;"]),i=n.ZP.div.withConfig({displayName:"bannerstyle__ImageContainer",componentId:"sc-15vihfd-1"})(["> img{width:100%;}"]),l=t(809),c=t.n(l),o=t(2447),f=t(9227),d=t(7939),u=t(7294),m=function(e){var r=e.placeholder,t=void 0===r?"5 avenue Anatole 75007 Paris":r,n=e.onChange;return(0,s.jsx)(d.gA,{className:"fr-input",type:"text",id:"address",name:"address",placeholder:t,onChange:n})},h=function(){return(0,s.jsx)("p",{style:{margin:0,color:"#454545",padding:"0.25rem 1rem 0.75rem 1rem",fontStyle:"italic"},children:"Aucune adresse trouv\xe9e :("})},p=function(e){var r=e.suggestions;return(0,s.jsx)(d.Gk,{children:r.map((function(e,r){var t=e.properties;return(0,s.jsx)(d.O2,{value:t.label},t.id+r)}))})},_=t(7954),g=t.n(_),x=t(2735),v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:5,autocomplete:!1,debounceTime:300},t=r.limit,s=r.autocomplete,n=r.debounceTime,a=u.useState([]),i=(0,f.Z)(a,2),l=i[0],d=i[1],m=u.useState("idle"),h=(0,f.Z)(m,2),p=h[0],_=h[1],v=3,j=(0,x.Su)(),b=j.suggestionService,N=e.trim(),y=u.useCallback(g()(function(){var e=(0,o.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _("loading"),e.prev=1,e.next=4,b.fetchSuggestions(r,{limit:t.toString(),autocomplete:s.toString()});case 4:n=e.sent,d(n.features),_("success"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),_("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),n),[]);return u.useEffect((function(){!N||N.length<=v||y(N)}),[b,N,y]),{suggestions:l,displaySuggestions:"idle"!==p&&!!l,status:p}},j=function(e){var r=e.onAddressSelected,t=(0,u.useState)(""),n=t[0],a=t[1],i=v(n),l=i.suggestions,c=i.displaySuggestions;return(0,s.jsxs)("div",{className:"fr-input-group",children:[(0,s.jsx)("label",{className:"fr-label",htmlFor:"address",children:(0,s.jsx)("span",{className:"fr-hint-text",children:"Adresse du logement \xe0 raccorder"})}),(0,s.jsxs)(d.hQ,{"aria-label":"address","aria-labelledby":"address",className:"fr-input-wrap fr-fi-search-line",onSelect:function(e){r(e,function(e){var r=l.find((function(r){return r.properties.label===e}));return(null===r||void 0===r?void 0:r.geometry.coordinates)||[0,0]}(e))},children:[(0,s.jsx)(m,{onChange:function(e){a(e.currentTarget.value)}}),c&&(0,s.jsx)(d.SF,{children:l.length?(0,s.jsx)(p,{suggestions:l}):(0,s.jsx)(h,{})})]})]})},b=n.ZP.h3.withConfig({displayName:"checkElegibilitystyle__PageTitle",componentId:"sc-q80dm4-0"})(["color:#4550e5;font-size:40px;line-height:48px;"]),N=t(8728),y=t(1163),k=t(6265);function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,k.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=function(e){return(0,s.jsx)("div",{className:"fr-callout",children:(0,s.jsx)("header",S({className:"fr-callout__title"},e))})},C=function(e){var r=e.isEligible;return(0,s.jsxs)(O,{children:["Cette adresse ",r?"est":"n'est pas"," \xe9ligible \xe0 un r\xe9seau de chaleur urbaine"]})};function P(e,r){return e.distPointReseau<=r}var Z=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,r=u.useState("idle"),t=(0,f.Z)(r,2),s=t[0],n=t[1],a=u.useState(null),i=(0,f.Z)(a,2),l=i[0],d=i[1],m=(0,x.Su)().heatNetworkService,h=u.useCallback(function(){var e=(0,o.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n("loading"),e.prev=1,e.next=4,m.findByCoords(r);case 4:t=e.sent,d(t),n("success"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),[m]);return{checkEligibility:function(){var e=(0,o.Z)(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),isEligible:!!l&&P(l,e),status:s}}(),r=e.status,t=e.checkEligibility,n=e.isEligible,a="success"===r,i=(0,y.useRouter)().push,l=(0,N.R)(""),d=(0,f.Z)(l,2)[1],m=function(){var e=(0,o.Z)(c().mark((function e(r,s){var a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h(s),e.next=3,t(a);case 3:return d({coords:[a.lat,a.lon],label:r}),e.next=6,i({pathname:"/demande-de-contact",query:{isEligible:n}});case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),h=function(e){return{lon:e[0],lat:e[1]}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{className:"fr-mb-4w",children:"Votre copropri\xe9t\xe9 peut-elle \xeatre raccord\xe9e \xe0 un r\xe9seau de chaleur ? Un chauffage \xe9conomique et \xe9cologique"}),a&&(0,s.jsx)(C,{isEligible:n}),(0,s.jsx)(j,{onAddressSelected:m})]})};var E=function(){return(0,s.jsx)(a,{className:"fr-container--fluid fr-py-11w",children:(0,s.jsx)("div",{className:"fr-grid-row fr-grid-row--center",children:(0,s.jsx)("div",{className:"fr-col-lg-8",children:(0,s.jsx)("div",{className:"fr-container--fluid",children:(0,s.jsxs)("div",{className:"fr-grid-row fr-grid-row--center",children:[(0,s.jsx)(i,{className:"fr-col-lg-4",children:(0,s.jsx)("img",{src:"./pictoBuilding.png",alt:""})}),(0,s.jsx)("div",{className:"fr-col-lg-6 fr-col-md-12 fr-ml-6w",children:(0,s.jsx)(Z,{})})]})})})})})},q=t(1664),I=n.ZP.section.withConfig({displayName:"MainLayout__Main",componentId:"sc-4z5cbf-0"})(["margin:2em 0;min-height:70vh;"]),A=function(e){var r=e.children,t=e.banner,n=void 0!==t&&t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{role:"banner",className:"fr-header",children:[(0,s.jsx)("div",{className:"fr-header__body",children:(0,s.jsx)("div",{className:"fr-container",children:(0,s.jsx)("div",{className:"fr-header__body-row",children:(0,s.jsxs)("div",{className:"fr-header__brand fr-enlarge-link",children:[(0,s.jsxs)("div",{className:"fr-header__brand-top",children:[(0,s.jsx)("div",{className:"fr-header__logo",children:(0,s.jsxs)("p",{className:"fr-logo",children:["R\xe9publique",(0,s.jsx)("br",{}),"Fran\xe7aise"]})}),(0,s.jsx)("div",{className:"fr-header__operator",children:(0,s.jsx)("img",{className:"fr-footer__logo",src:"./defaultPic.jpeg",alt:"logo france chaleur urbaine"})})]}),(0,s.jsx)("div",{className:"fr-header__service",children:(0,s.jsx)(q.default,{href:"/",children:(0,s.jsx)("a",{title:"Accueil - [\xc0 MODIFIER | Nom du site / service]",children:(0,s.jsx)("p",{className:"fr-header__service-title",children:"France Chaleur Urbaine"})})})})]})})})}),(0,s.jsx)("div",{className:"fr-header__menu fr-modal",id:"modal-870","aria-labelledby":"fr-btn-menu-mobile-2",children:(0,s.jsxs)("div",{className:"fr-container",children:[(0,s.jsx)("button",{className:"fr-link--close fr-link","aria-controls":"modal-870",children:"Fermer"}),(0,s.jsx)("div",{className:"fr-header__menu-links"}),(0,s.jsx)("nav",{className:"fr-nav",id:"header-navigation",role:"navigation","aria-label":"Menu principal",children:(0,s.jsxs)("ul",{className:"fr-nav__list",children:[(0,s.jsx)("li",{className:"fr-nav__item",children:(0,s.jsx)("a",{className:"fr-nav__link",href:"ressources",target:"_self",children:"Ressources"})}),(0,s.jsx)("li",{className:"fr-nav__item",children:(0,s.jsx)("a",{className:"fr-nav__link",href:"partenaires",target:"_self",children:"Partenaires"})}),(0,s.jsx)("li",{className:"fr-nav__item",children:(0,s.jsx)("a",{className:"fr-nav__link",href:"https://carto.viaseva.org/public/viaseva/map/",target:"_blank",rel:"noreferrer",children:"Cartographie"})})]})})]})})]}),n&&(0,s.jsx)(E,{}),(0,s.jsx)("div",{className:"fr-container",children:(0,s.jsx)(I,{className:"fr-grid-row fr-grid-row--center",children:r})}),(0,s.jsx)("footer",{className:"fr-footer",role:"contentinfo",id:"footer",children:(0,s.jsxs)("div",{className:"fr-container",children:[(0,s.jsxs)("div",{className:"fr-footer__body fr-footer__body--operator",children:[(0,s.jsxs)("div",{className:"fr-footer__brand fr-enlarge-link",children:[(0,s.jsxs)("p",{className:"fr-logo",title:"r\xe9publique fran\xe7aise",children:["r\xe9publique",(0,s.jsx)("br",{}),"fran\xe7aise"]}),(0,s.jsx)("a",{className:"fr-footer__brand-link",href:"/",title:"Retour \xe0 l\u2019accueil",children:(0,s.jsx)("img",{className:"fr-footer__logo",src:"./defaultPic.jpeg",alt:"logo france chaleur urbaine"})})]}),(0,s.jsxs)("div",{className:"fr-footer__content",children:[(0,s.jsxs)("p",{className:"fr-footer__content-desc",children:["Texte optionnel 3 lignes maximum.",(0,s.jsx)("br",{})," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et vel quam auctor semper. Cras si amet mollis dolor."]}),(0,s.jsxs)("ul",{className:"fr-footer__content-list",children:[(0,s.jsx)("li",{className:"fr-footer__content-item",children:(0,s.jsx)("a",{className:"fr-footer__content-link",href:"https://legifrance.gouv.fr",children:"legifrance.gouv.fr"})}),(0,s.jsx)("li",{className:"fr-footer__content-item",children:(0,s.jsx)("a",{className:"fr-footer__content-link",href:"https://gouvernement.fr",children:"gouvernement.fr"})}),(0,s.jsx)("li",{className:"fr-footer__content-item",children:(0,s.jsx)("a",{className:"fr-footer__content-link",href:"https://service-public.fr",children:"service-public.fr"})}),(0,s.jsx)("li",{className:"fr-footer__content-item",children:(0,s.jsx)("a",{className:"fr-footer__content-link",href:"https://data.gouv.fr",children:"data.gouv.fr"})})]})]})]}),(0,s.jsxs)("div",{className:"fr-footer__bottom",children:[(0,s.jsxs)("ul",{className:"fr-footer__bottom-list",children:[(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"#",children:"Plan du site"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"#",children:"Accessibilit\xe9: partiellement"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"mentions-legales",children:"Mentions l\xe9gales"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"#",children:"Donn\xe9es personnelles"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"#",children:"Gestion des cookies"})}),(0,s.jsx)("li",{className:"fr-footer__bottom-item",children:(0,s.jsx)("a",{className:"fr-footer__bottom-link",href:"politique-de-confidentialite",children:"Politique de confidentialit\xe9"})})]}),(0,s.jsx)("div",{className:"fr-footer__bottom-copy",children:(0,s.jsxs)("p",{children:["Sauf mention contraire, tous les textes de ce site sont sous"," ",(0,s.jsx)("a",{href:"https://github.com/etalab/licence-ouverte/blob/master/LO.md",target:"_blank",rel:"noreferrer",children:"licence etalab-2.0"})]})})]})]})})]})}},8728:function(e,r,t){"use strict";t.d(r,{R:function(){return a}});var s=t(9227),n=t(7294);function a(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.serialize,a=void 0===t?JSON.stringify:t,i=r.deserialize,l=void 0===i?JSON.parse:i,c="__FCU:App__",o=n.useState((function(){if(e)return e;var r=window.localStorage.getItem(c);return r?l(r):{}})),f=(0,s.Z)(o,2),d=f[0],u=f[1],m=n.useRef(c);return(0,n.useEffect)((function(){var e=m.current;e!==c&&window.localStorage.removeItem(e),m.current=c,window.localStorage.setItem(c,a(d))}),[c,d,a]),[d,u]}}}]);