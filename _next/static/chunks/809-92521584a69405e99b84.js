(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{1809:function(e,r,s){"use strict";s.d(r,{Z:function(){return q}});var n=s(5893),a=s(9163),i=a.ZP.div.withConfig({displayName:"bannerstyle__BannerContainer",componentId:"sc-15vihfd-0"})(["background:#f9f8f6;"]),t=a.ZP.div.withConfig({displayName:"bannerstyle__ImageContainer",componentId:"sc-15vihfd-1"})(["> img{width:100%;}"]),l=a.ZP.div.withConfig({displayName:"bannerstyle__Container",componentId:"sc-15vihfd-2"})(["@media (max-width:576px){margin:0;}"]),c=s(809),o=s.n(c),d=s(2447),u=s(9227),f=s(7939),h=s(7294),m=function(e){var r=e.placeholder,s=void 0===r?"Exemple: 5 avenue Anatole 75007 Paris":r,a=e.onChange;return(0,n.jsx)(f.gA,{className:"fr-input",type:"text",id:"address",name:"address",placeholder:s,onChange:a})},p=function(){return(0,n.jsx)("p",{style:{margin:0,color:"#454545",padding:"0.25rem 1rem 0.75rem 1rem",fontStyle:"italic"},children:"Aucune adresse trouv\xe9e :("})},g=function(e){var r=e.suggestions;return(0,n.jsx)(f.Gk,{children:r.map((function(e,r){var s=e.properties;return(0,n.jsx)(f.O2,{value:s.label},s.id+r)}))})},x=s(7954),j=s.n(x),v=s(2735),b=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:5,autocomplete:!1,debounceTime:300},s=r.limit,n=r.autocomplete,a=r.debounceTime,i=h.useState([]),t=(0,u.Z)(i,2),l=t[0],c=t[1],f=h.useState("idle"),m=(0,u.Z)(f,2),p=m[0],g=m[1],x=3,b=(0,v.Su)(),_=b.suggestionService,N=e.trim(),y=h.useCallback(j()(function(){var e=(0,d.Z)(o().mark((function e(r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g("loading"),e.prev=1,e.next=4,_.fetchSuggestions(r,{limit:s.toString(),autocomplete:n.toString()});case 4:a=e.sent,c(a.features),g("success"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),a),[]);return h.useEffect((function(){!N||N.length<=x||y(N)}),[_,N,y]),{suggestions:l,displaySuggestions:"idle"!==p&&!!l,status:p}},_=function(e){var r=e.onAddressSelected,s=(0,h.useState)(""),a=s[0],i=s[1],t=b(a),l=t.suggestions,c=t.displaySuggestions;return(0,n.jsxs)("div",{className:"fr-input-group",children:[(0,n.jsx)("label",{className:"fr-label",htmlFor:"address",children:(0,n.jsx)("span",{className:"fr-hint-text fr-text--sm",children:"Renseignez ci-dessous l'adresse de votre logement"})}),(0,n.jsxs)(f.hQ,{"aria-label":"address","aria-labelledby":"address",className:"fr-input-wrap fr-fi-search-line",onSelect:function(e){r(e,function(e){var r=l.find((function(r){return r.properties.label===e}));return(null===r||void 0===r?void 0:r.geometry.coordinates)||[0,0]}(e))},children:[(0,n.jsx)(m,{onChange:function(e){i(e.currentTarget.value)}}),c&&(0,n.jsx)(f.SF,{children:l.length?(0,n.jsx)(g,{suggestions:l}):(0,n.jsx)(p,{})})]})]})},N=a.ZP.h1.withConfig({displayName:"checkElegibilitystyle__PageTitle",componentId:"sc-q80dm4-0"})(["color:#4550e5;font-size:40px;line-height:48px;span{font-size:32px;line-height:40px;}"]),y=s(8728),w=s(1163),k=s(6265);function S(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}function O(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?S(Object(s),!0).forEach((function(r){(0,k.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):S(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}var C=function(e){return(0,n.jsx)("div",{className:"fr-callout",children:(0,n.jsx)("header",O({className:"fr-callout__title"},e))})},E=function(e){var r=e.isEligible;return(0,n.jsxs)(C,{children:["Cette adresse ",r?"est":"n'est pas"," \xe9ligible \xe0 un r\xe9seau de chaleur urbaine"]})},P=function(){var e=function(){var e=h.useState("idle"),r=(0,u.Z)(e,2),s=r[0],n=r[1],a=h.useState(!1),i=(0,u.Z)(a,2),t=i[0],l=i[1],c=(0,v.Su)().heatNetworkService;return{checkEligibility:h.useCallback(function(){var e=(0,d.Z)(o().mark((function e(r){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n("loading"),e.next=4,c.findByCoords(r);case 4:s=e.sent,l(s.isEligible),n("success"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),[c]),isEligible:t,status:s}}(),r=e.status,s=e.checkEligibility,a=e.isEligible,i="success"===r,t=(0,w.useRouter)().push,l=(0,y.R)(""),c=(0,u.Z)(l,2)[1],f=function(){var e=(0,d.Z)(o().mark((function e(r,n){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m(n),e.next=3,s(a);case 3:c({coords:[a.lat,a.lon],label:r});case 4:case"end":return e.stop()}}),e)})));return function(r,s){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){"success"===r&&t({pathname:"/demande-de-contact",query:{isEligible:a}})}),[a,t,r]);var m=function(e){return{lon:e[0],lat:e[1]}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(N,{className:"fr-mb-4w",children:["Votre copropri\xe9t\xe9 peut-elle \xeatre raccord\xe9e \xe0 un r\xe9seau de chaleur ?"," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{children:"Un chauffage \xe9conomique et \xe9cologique"})]}),i&&(0,n.jsx)(E,{isEligible:a}),(0,n.jsx)(_,{onAddressSelected:f})]})};var Z=function(){return(0,n.jsx)(i,{className:"fr-container--fluid fr-py-6w",children:(0,n.jsx)("div",{className:"fr-grid-row fr-grid-row--center",children:(0,n.jsx)("div",{className:"fr-col-lg-12",children:(0,n.jsx)("div",{className:"fr-container",children:(0,n.jsxs)("div",{className:"fr-grid-row fr-grid-row--center",children:[(0,n.jsx)(t,{className:"fr-col-lg-4",children:(0,n.jsx)("img",{src:"./pictoBuilding.png",alt:"pictogram"})}),(0,n.jsx)(l,{className:"fr-col-lg-7 fr-col-md-12 fr-ml-1w fr-mt-2w",children:(0,n.jsx)(P,{})})]})})})})})},F=s(1664),I=a.ZP.section.withConfig({displayName:"MainLayout__Main",componentId:"sc-4z5cbf-0"})(["margin:2em 0;min-height:70vh;"]),q=function(e){var r=e.children,s=e.banner,a=void 0!==s&&s;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{className:"fr-header",children:[(0,n.jsx)("div",{className:"fr-header__body",children:(0,n.jsx)("div",{className:"fr-container",children:(0,n.jsx)("div",{className:"fr-header__body-row",children:(0,n.jsxs)("div",{className:"fr-header__brand",children:[(0,n.jsxs)("div",{className:"fr-header__brand-top",children:[(0,n.jsx)("div",{className:"fr-header__logo",children:(0,n.jsxs)("p",{className:"fr-logo",children:["R\xe9publique",(0,n.jsx)("br",{}),"Fran\xe7aise"]})}),(0,n.jsx)("div",{className:"fr-header__navbar",children:(0,n.jsx)("button",{className:"fr-btn--menu fr-btn","data-fr-opened":"false","aria-controls":"modal-870","aria-haspopup":"menu",title:"Menu",id:"fr-btn-menu-mobile-4",children:"Menu"})}),(0,n.jsx)("div",{className:"fr-header__operator",children:(0,n.jsx)(F.default,{href:"/",children:(0,n.jsx)("a",{title:"france chaleur urbaine",children:(0,n.jsx)("img",{className:"fr-footer__logo",src:"./logo-fcu.jpg",alt:"logo france chaleur urbaine"})})})})]}),(0,n.jsx)("div",{className:"fr-header__service",children:(0,n.jsx)(F.default,{href:"/",children:(0,n.jsx)("a",{title:"france chaleur urbaine",children:(0,n.jsx)("p",{className:"fr-header__service-title",children:"France Chaleur Urbaine"})})})})]})})})}),(0,n.jsx)("div",{className:"fr-header__menu fr-modal",id:"modal-870",children:(0,n.jsxs)("div",{className:"fr-container",children:[(0,n.jsx)("button",{className:"fr-link--close fr-link","aria-controls":"modal-870",children:"Fermer"}),(0,n.jsx)("div",{className:"fr-header__menu-links"}),(0,n.jsx)("nav",{className:"fr-nav",id:"header-navigation","aria-label":"Menu principal",children:(0,n.jsxs)("ul",{className:"fr-nav__list",children:[(0,n.jsx)("li",{className:"fr-nav__item",children:(0,n.jsx)("a",{className:"fr-nav__link",href:"/",children:"Accueil"})}),(0,n.jsx)("li",{className:"fr-nav__item",children:(0,n.jsx)("a",{className:"fr-nav__link",href:"ressources",children:"Ressources"})}),(0,n.jsx)("li",{className:"fr-nav__item",children:(0,n.jsx)("a",{className:"fr-nav__link",href:"partenaires",children:"Partenaires"})})]})})]})})]}),a&&(0,n.jsx)(Z,{}),(0,n.jsx)("div",{className:"fr-container",children:(0,n.jsx)(I,{className:"fr-grid-row fr-grid-row--center",children:r})}),(0,n.jsx)("footer",{className:"fr-footer",id:"footer",children:(0,n.jsxs)("div",{className:"fr-container",children:[(0,n.jsxs)("div",{className:"fr-footer__body fr-footer__body--operator",children:[(0,n.jsxs)("div",{className:"fr-footer__brand fr-enlarge-link",children:[(0,n.jsxs)("p",{className:"fr-logo",title:"r\xe9publique fran\xe7aise",children:["r\xe9publique",(0,n.jsx)("br",{}),"fran\xe7aise"]}),(0,n.jsx)("a",{className:"fr-footer__brand-link",href:"/",title:"Retour \xe0 l\u2019accueil",children:(0,n.jsx)("img",{className:"fr-footer__logo",src:"./logo-fcu.jpg",alt:"logo france chaleur urbaine"})})]}),(0,n.jsx)("div",{className:"fr-footer__content",children:(0,n.jsxs)("p",{className:"fr-footer__content-desc",children:["France Chaleur Urbaine est un projet d'innovation pour acc\xe9l\xe9rer le raccordement des copropri\xe9t\xe9s aux r\xe9seaux de chaleur en vue de l'atteinte des objectifs de d\xe9veloppement de la chaleur d'origine renouvelable.",(0,n.jsx)("br",{}),(0,n.jsxs)("strong",{children:["Faites nous part de vos propositions pour am\xe9liorer ce service : ",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"mailto:france-chaleur-urbaine@beta.gouv.fr",children:"france-chaleur-urbaine@beta.gouv.fr"})]})]})})]}),(0,n.jsxs)("div",{className:"fr-footer__bottom",children:[(0,n.jsxs)("ul",{className:"fr-footer__bottom-list",children:[(0,n.jsx)("li",{className:"fr-footer__bottom-item",children:(0,n.jsx)("a",{className:"fr-footer__bottom-link",href:"accessibilite",children:"Accessibilit\xe9: non conforme"})}),(0,n.jsx)("li",{className:"fr-footer__bottom-item",children:(0,n.jsx)("a",{className:"fr-footer__bottom-link",href:"mentions-legales",children:"Mentions l\xe9gales"})}),(0,n.jsx)("li",{className:"fr-footer__bottom-item",children:(0,n.jsx)("a",{className:"fr-footer__bottom-link",href:"politique-de-confidentialite",children:"Donn\xe9es personnelles"})})]}),(0,n.jsx)("div",{className:"fr-footer__bottom-copy",children:(0,n.jsxs)("p",{children:["Sauf mention contraire, tous les textes de ce site sont sous"," ",(0,n.jsx)("a",{href:"https://github.com/etalab/licence-ouverte/blob/master/LO.md",target:"_blank",rel:"noreferrer",children:"licence etalab-2.0"})]})})]})]})})]})}},8728:function(e,r,s){"use strict";s.d(r,{R:function(){return i}});var n=s(9227),a=s(7294);function i(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r.serialize,i=void 0===s?JSON.stringify:s,t=r.deserialize,l=void 0===t?JSON.parse:t,c="__FCU:App__",o=a.useState((function(){if(e)return e;var r=window.localStorage.getItem(c);return r?l(r):{}})),d=(0,n.Z)(o,2),u=d[0],f=d[1],h=a.useRef(c);return(0,a.useEffect)((function(){var e=h.current;e!==c&&window.localStorage.removeItem(e),h.current=c,window.localStorage.setItem(c,i(u))}),[c,u,i]),[u,f]}}}]);