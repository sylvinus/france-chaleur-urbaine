(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{6271:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(6835),e=c(8121);c(7294);var f=c(7379),g=f.ZP.section.withConfig({displayName:"Slicestyle__SliceSection",componentId:"sc-c4kejs-0"})(["",""],function(a){var b=a.theme;switch(b){case"color":return(0,f.iv)(["background-color:#4550e5;color:#fff;"]);case"grey":return(0,f.iv)(["background-color:#f9f8f6;"])}}),h=(0,f.iv)(["",""],function(a){var b=a.bleedColors,c=a.bgWidth,d=void 0===c?0:c;return null!=b&&b[0]?"\n  linear-gradient(\n    to left,\n    transparent calc(50% + ".concat(d/2,"px - 80px),\n    ").concat(b[0]," calc(50% + ").concat(d/2,"px)\n  ),"):""}),i=(0,f.iv)(["",""],function(a){var b=a.bleedColors,c=a.bgWidth,d=void 0===c?0:c;return null!=b&&b[1]?"\n  linear-gradient(\n    to right,\n    transparent calc(50% + ".concat(d/2,"px - 80px),\n    ").concat(b[1]," calc(50% + ").concat(d/2,"px)\n  ),"):""}),j=(0,f.iv)(["",""],function(a){var b=a.bg;return b?"url(".concat(b,")"):""}),k=f.ZP.div.withConfig({displayName:"Slicestyle__SliceContainerWrapper",componentId:"sc-c4kejs-1"})(["max-width:100%;",";",";background-repeat:no-repeat;background-size:",";background-position:",";",""],function(a){var b=a.bg,c=a.bleedColors;return b||c?(0,f.iv)(["background-image:"," "," ",";"],h,i,j):""},function(a){var b=a.bgColor;return b?(0,f.iv)(["background-color:",";"],b):""},function(a){return a.bgSize||"auto"},function(a){return a.bgPos||"center"},function(a){var b=a.bgWidth,c=void 0===b?0:b;return c&&(0,f.iv)(["background-size:",";background-position:left center;@media (min-width:","px){background-size:contain;background-position:center;}"],"cover",c)}),l=f.ZP.div.withConfig({displayName:"Slicestyle__SliceContainer",componentId:"sc-c4kejs-2"})(["max-width:78rem;.slice-header{text-align:center;padding:1.5rem 0 2rem;}"]),m=c(5893),n=function(a){var b=a.className,c=a.header,f=a.children,h=a.theme,i=a.padding,j=a.bg,n=a.bgPos,o=a.bgSize,p=a.bgWidth,q=a.bgColor,r=a.bleedColor,s=Array.isArray(r)?r:[r,r],t=(0,d.Z)(s,2),u=t[0],v=t[1];return(0,m.jsx)(g,{className:"fr-container--fluid ".concat(b),theme:h,children:(0,m.jsx)("div",{className:"fr-grid-row fr-grid-row--center",children:(0,m.jsx)(k,{className:"fr-col-lg-12 ".concat(i?"fr-py-".concat(i,"w"):""),bg:j,bgPos:n,bgSize:o,bgWidth:p,bgColor:q,bleedColors:[void 0===u?"":u,void 0===v?"":v],children:(0,m.jsxs)(l,{className:"fr-container",children:[c&&(0,m.jsx)("header",{children:(0,m.jsx)(e.Z,{value:c,className:"slice-header"})}),f]})})})})}},3261:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return y}});var d=c(6835),e=c(7812),f=c(9499),g=c(5045),h=c(6271),i=c(7294),j=c(7379),k=j.ZP.div.withConfig({displayName:"TextListstyle__DataCard",componentId:"sc-1nbmwop-0"})(["display:flex;flex-direction:column;align-items:flex-start;padding:32px;overflow:visible;flex:1;"]),l=c(5893),m=function(a){var b=a.data,c=void 0===b?[]:b;return(0,l.jsx)("div",{className:"fr-grid-row fr-grid-row--gutters",children:null==c?void 0:c.map(function(a,b){return(0,l.jsx)("div",{className:"fr-col-lg-3 fr-col-sm-6",children:(0,l.jsxs)(k,{children:[(0,l.jsx)("h2",{children:a.title}),(0,l.jsx)("div",{children:a.body})]})},"".concat(b,"-").concat(a.title))})})},n=c(6047),o=c(9008),p=c(7385),q=c(8100);function r(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function s(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?r(Object(c),!0).forEach(function(b){(0,f.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var t=j.ZP.div.withConfig({displayName:"stats__GraphWrapper",componentId:"sc-ryz84h-0"})(["width:100%;height:400px;"]),u=n.He.map(function(a){var b=a.value,c=a.description;return{title:b,body:c}}),v=n.OO.map(function(a){var b=a.value,c=a.description;return{title:b,body:c}}),w=["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Dec"],x=function(a){return fetch(a).then(function(a){return a.json()})},y=function(){var a=(0,q.ZP)("/api/statistiques/getActions",x),b=a.data,c=a.error,j=(0,q.ZP)("/api/statistiques/getVisitsSummary",x),k=j.data,n=j.error;c&&console.warn("errorActions >>",c);var r=(0,i.useMemo)(function(){var a;return null!==(a=null==b?void 0:b.result.values.map(function(a,c){return a.reduce(function(a,b){return s(s({},a),{},(0,f.Z)({},b.label,b))},{filters:null==b?void 0:b.result.filters[c]})}).reverse())&& void 0!==a?a:[]},[null==b?void 0:b.result]),y=r,z=r;n&&console.warn("errorVisits >>",n);var A=(0,i.useMemo)(function(){var a;return null!==(a=null==k?void 0:k.result.values.map(function(a,b){return s({filters:k.result.filters[b]},a)}).reverse())&& void 0!==a?a:[]},[null==k?void 0:k.result]),B=[["x","Visiteurs"]].concat((0,e.Z)(A.map(function(){var a,b,c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},e=(null==c?void 0:null===(a=c.filters)|| void 0===a?void 0:null===(b=a.date)|| void 0===b?void 0:b.split("-"))||["YYYY","MM"],f=(0,d.Z)(e,2),g=f[0],h=f[1],i="".concat(isNaN(Number(h))?h:w[parseInt(h)-1]," ").concat(g);return[i,(null==c?void 0:c.nb_uniq_visitors)||0]}))),C=[["x","Total des tests","Adresse non \xe9ligibles","Adresse \xe9ligibles"]].concat((0,e.Z)(y.map(function(){var a,b,c,e,f,g=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},h=(null==g?void 0:null===(a=g.filters)|| void 0===a?void 0:null===(b=a.date)|| void 0===b?void 0:b.split("-"))||["YYYY","MM"],i=(0,d.Z)(h,2),j=i[0],k=i[1],l="".concat(isNaN(Number(k))?k:w[Number(k)-1]," ").concat(j);return[l,(null==g?void 0:null===(c=g["Formulaire de test - Envoi"])|| void 0===c?void 0:c.nb_visits)||0,(null==g?void 0:null===(e=g["Formulaire de test - Adresse In\xe9ligible"])|| void 0===e?void 0:e.nb_visits)||0,(null==g?void 0:null===(f=g["Formulaire de test - Adresse \xc9ligible"])|| void 0===f?void 0:f.nb_visits)||0]}))),D=[["x","Total des prises de contact","Contact pour adresse non \xe9ligibles","Contact pour adresse \xe9ligibles"]].concat((0,e.Z)(z.map(function(){var a,b,c,e,f=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},g=(null==f?void 0:null===(a=f.filters)|| void 0===a?void 0:null===(b=a.date)|| void 0===b?void 0:b.split("-"))||["YYYY","MM"],h=(0,d.Z)(g,2),i=h[0],j=h[1],k="".concat(isNaN(Number(j))?j:w[Number(j)-1]," ").concat(i),l=(null==f?void 0:null===(c=f["Formulaire de contact \xe9ligible - Envoi"])|| void 0===c?void 0:c.nb_visits)||0,m=(null==f?void 0:null===(e=f["Formulaire de contact in\xe9ligible - Envoi"])|| void 0===e?void 0:e.nb_visits)||0,n=Number(l)+Number(m);return[k,n,m,l]})));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{children:(0,l.jsx)("title",{children:"Statistiques - France Chaleur Urbaine"})}),(0,l.jsx)(g.Z,{children:(0,l.jsx)("div",{className:"fr-container fr-mt-2w",children:(0,l.jsx)("div",{className:"fr-grid-row",children:(0,l.jsxs)("div",{className:"fr-col-12",children:[(0,l.jsx)("h2",{children:"Statistiques"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Ouverture nationale de la plateforme\xa0: juillet 2021"}),(0,l.jsx)("li",{children:"Mise en place des mesures statistiques automatis\xe9es\xa0: d\xe9cembre 2021"}),(0,l.jsx)("li",{children:"Fr\xe9quence de mise \xe0 jour des statistiques automatis\xe9es\xa0: Mensuelle"})]}),(0,l.jsx)("p",{}),(0,l.jsx)("h3",{children:"Nombre de visiteurs"}),(0,l.jsx)(t,{children:n?(0,l.jsx)("div",{children:"Erreur lors du chargement des donn\xe9es statistique, veuillez nous excuser et re-essayer plus tard."}):A&&B?(0,l.jsx)(p.Z,{height:"400px",chartType:"LineChart",loader:(0,l.jsx)("div",{children:"Loading Chart"}),data:B,options:{legend:"none",colors:["#0078f3","#f60700","#1f8d49"],hAxis:{slantedText:!0,slantedTextAngle:30},vAxis:{title:"Visiteurs",viewWindow:{min:-50}},animation:{startup:!0,easing:"out",duration:500}},rootProps:{"data-testid":"1"}}):"Chargement des donn\xe9es..."}),(0,l.jsx)("p",{}),(0,l.jsx)("h3",{children:"Adresses test\xe9es"}),(0,l.jsx)("p",{children:(0,l.jsx)("em",{children:"Les adresses test\xe9es avant d\xe9cembre 2021 n’\xe9tant pas comptabilis\xe9es de fa\xe7on automatis\xe9e, elles ne sont pas affich\xe9es sur ce graphique. Cependant, une solution permettant d’exposer ces donn\xe9es est en cours d’\xe9tude."})}),(0,l.jsx)(t,{children:c?(0,l.jsx)("div",{children:"Erreur lors du chargement des donn\xe9es statistique, veuillez nous excuser et re-essayer plus tard."}):y?(0,l.jsx)(p.Z,{height:"400px",chartType:"LineChart",loader:(0,l.jsx)("div",{children:"Loading Chart"}),data:C,options:{colors:["#0078f3","#f60700","#1f8d49","#009099"],hAxis:{slantedText:!0,slantedTextAngle:30},vAxis:{viewWindow:{min:-8}},animation:{startup:!0,easing:"out",duration:500}},rootProps:{"data-testid":"2"}}):"Chargement des donn\xe9es..."}),(0,l.jsx)("p",{}),(0,l.jsx)("h3",{children:"Demandes de contacts"}),(0,l.jsx)("p",{children:(0,l.jsx)("em",{children:"Les demandes de contacts effectu\xe9es avant d\xe9cembre 2021 n’\xe9tant pas comptabilis\xe9es de fa\xe7on automatis\xe9e, elles ne sont pas affich\xe9es sur ce graphique. Cependant, une solution permettant d’exposer ces donn\xe9es est en cours d’\xe9tude."})}),(0,l.jsx)("p",{children:(0,l.jsxs)("em",{children:[(0,l.jsx)("strong",{children:"Donn\xe9es ant\xe9rieures \xe0 d\xe9cembre 2021\xa0:"}),(0,l.jsx)("br",{}),(0,l.jsx)("strong",{children:"Nombre de demandes de contacts\xa0:"}),(0,l.jsx)("span",{children:"\xa0• juillet\xa0:\xa02 "}),(0,l.jsx)("span",{children:"\xa0• septembre\xa0:\xa05 "}),(0,l.jsx)("span",{children:"\xa0• octobre\xa0:\xa06 "}),(0,l.jsx)("span",{children:"\xa0• novembre\xa0:\xa04 "})]})}),(0,l.jsx)(t,{children:c?(0,l.jsx)("div",{children:"Erreur lors du chargement des donn\xe9es statistique, veuillez nous excuser et re-essayer plus tard."}):z?(0,l.jsx)(p.Z,{height:"400px",chartType:"LineChart",loader:(0,l.jsx)("div",{children:"Loading Chart"}),data:D,options:{colors:["#0078f3","#f60700","#1f8d49"],hAxis:{slantedText:!0,slantedTextAngle:30},vAxis:{viewWindow:{min:-0.08},gridlines:{multiple:1},minorGridlines:{multiple:.25}},animation:{startup:!0,easing:"out",duration:500}},rootProps:{"data-testid":"3"}}):"Chargement des donn\xe9es..."}),(0,l.jsx)("p",{}),(0,l.jsx)("h3",{children:"Taux de conversion d’un chauffage fossile vers les r\xe9seaux de chaleur"}),(0,l.jsx)(h.Z,{padding:0,children:(0,l.jsx)(m,{data:v})}),(0,l.jsx)("p",{}),(0,l.jsx)("h3",{children:"\xc0 propos des r\xe9seaux de chaleur"}),(0,l.jsx)("div",{children:(0,l.jsx)("em",{children:"Source : SNCU, Enqu\xeate annuelle sur les r\xe9seaux de chaleur et de froid 2021"})}),(0,l.jsx)(h.Z,{padding:0,children:(0,l.jsx)(m,{data:u})}),(0,l.jsx)("p",{})]})})})})]})}},1013:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return c(3261)}])}},function(a){a.O(0,[27,562,88,443,774,888,179],function(){return a(a.s=1013)}),_N_E=a.O()}])