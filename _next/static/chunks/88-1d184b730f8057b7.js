(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88],{2703:function(a,b,c){"use strict";var d=c(414);function e(){}function f(){}f.resetWarningCache=e,a.exports=function(){function a(a,b,c,e,f,g){if(g!==d){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function b(){return a}a.isRequired=a;var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:e};return c.PropTypes=c,c}},5697:function(a,b,c){a.exports=c(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7385:function(a,b,c){"use strict";var d=c(7294),e=c(9227),f=c.n(e),g=function(a,b){return(g=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)};function h(a,b){function c(){this.constructor=a}g(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c())}var i=function(){return(i=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function j(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d.throw(a))}catch(b){f(b)}}function i(a){a.done?e(a.value):new c(function(b){b(a.value)}).then(g,h)}i((d=d.apply(a,b||[])).next())})}function k(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),"throw":h(1),"return":h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw new TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var l={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(a,b){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},m=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.handleGoogleChartsLoaderScriptLoaded=function(a){var c=b.props,d=c.chartVersion,e=c.chartPackages,f=c.chartLanguage,g=c.mapsApiKey,h=c.onLoad;a.charts.load(d||"current",{packages:e||["corechart","controls"],language:f||"en",mapsApiKey:g}),a.charts.setOnLoadCallback(function(){h(a)})},b}return h(b,a),b.prototype.shouldComponentUpdate=function(a){return a.chartPackages===this.props.chartPackages},b.prototype.render=function(){var a=this,b=this.props.onError;return(0,d.createElement)(f(),{url:"https://www.gstatic.com/charts/loader.js",onError:b,onLoad:function(){var b=window;b.google&&a.handleGoogleChartsLoaderScriptLoaded(b.google)}})},b}(d.Component),n=0,o=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],p=void 0,q=(0,d.createContext)(l),r=q.Provider,s=q.Consumer,t=function(a){var b=a.children,c=a.value;return(0,d.createElement)(r,{value:c},b)},u=function(a){var b=a.render;return(0,d.createElement)(s,null,function(a){return b(a)})},v=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.state={hiddenColumns:[]},b.listenToLegendToggle=function(){var a=b.props,c=a.google,d=a.googleChartWrapper;c.visualization.events.addListener(d,"select",function(){var a=d.getChart().getSelection(),c=d.getDataTable();if(0!==a.length&&null===a[0].row&&null!==c){var e=a[0].column,f=b.getColumnID(c,e);b.state.hiddenColumns.includes(f)?b.setState(function(a){return i({},a,{hiddenColumns:a.hiddenColumns.filter(function(a){return a!==f}).slice()})}):b.setState(function(a){return i({},a,{hiddenColumns:a.hiddenColumns.concat([f])})})}})},b.applyFormatters=function(a,c){for(var d=b.props.google,e=0,f=c;e<f.length;e++){var g=f[e];switch(g.type){case"ArrowFormat":var h=new d.visualization.ArrowFormat(g.options);h.format(a,g.column);break;case"BarFormat":var h=new d.visualization.BarFormat(g.options);h.format(a,g.column);break;case"ColorFormat":for(var h=new d.visualization.ColorFormat(g.options),i=g.ranges,j=0,k=i;j<k.length;j++){var l=k[j];h.addRange.apply(h,l)}h.format(a,g.column);break;case"DateFormat":var h=new d.visualization.DateFormat(g.options);h.format(a,g.column);break;case"NumberFormat":var h=new d.visualization.NumberFormat(g.options);h.format(a,g.column);break;case"PatternFormat":var h=new d.visualization.PatternFormat(g.options);h.format(a,g.column);break}}},b.getColumnID=function(a,b){return a.getColumnId(b)||a.getColumnLabel(b)},b.draw=function(a){var c=a.data,d=a.diffdata,e=a.rows,f=a.columns,g=a.options,h=a.legend_toggle,i=a.legendToggle,l=a.chartType,m=a.formatters,n=a.spreadSheetUrl,o=a.spreadSheetQueryParameters;return j(b,void 0,void 0,function(){var a,b,q,r,s,t,u,v,w,x,y,z,A,B;return k(this,function(C){switch(C.label){case 0:if(b=(a=this.props).google,q=a.googleChartWrapper,s=null,null!==d&&(t=b.visualization.arrayToDataTable(d.old),u=b.visualization.arrayToDataTable(d.new),s=b.visualization[l].prototype.computeDiff(t,u)),!(null!==c))return[3,1];return r=Array.isArray(c)?b.visualization.arrayToDataTable(c):new b.visualization.DataTable(c),[3,5];case 1:if(!(null!==e&&null!==f))return[3,2];return r=b.visualization.arrayToDataTable([f].concat(e)),[3,5];case 2:var D,E,F;if(!(null!==n))return[3,4];return[4,(D=b,E=n,void 0===(F=o)&&(F={}),j(p,void 0,void 0,function(){return k(this,function(a){return[2,new Promise(function(a,b){var c=F.headers?"headers="+F.headers:"headers=0",d=F.query?"&tq="+encodeURIComponent(F.query):"",e=F.gid?"&gid="+F.gid:"",f=F.sheet?"&sheet="+F.sheet:"",g=F.access_token?"&access_token="+F.access_token:"";new D.visualization.Query(E+"/gviz/tq?"+(""+c+e+f+d+g)).send(function(c){c.isError()?b("Error in query:  "+c.getMessage()+" "+c.getDetailedMessage()):a(c.getDataTable())})})]})}))];case 3:return r=C.sent(),[3,5];case 4:r=b.visualization.arrayToDataTable([]),C.label=5;case 5:for(w=0,v=r.getNumberOfColumns();w<v;w+=1)x=this.getColumnID(r,w),this.state.hiddenColumns.includes(x)&&(y=r.getColumnLabel(w),z=r.getColumnId(w),A=r.getColumnType(w),r.removeColumn(w),r.addColumn({label:y,id:z,type:A}));return B=q.getChart(),"Timeline"===q.getChartType()&&B&&B.clearChart(),q.setChartType(l),q.setOptions(g),q.setDataTable(r),q.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(r),null!==s&&(q.setDataTable(s),q.draw()),null!==m&&(this.applyFormatters(r,m),q.setDataTable(r),q.draw()),(!0===i|| !0===h)&&this.grayOutHiddenColumns({options:g}),[2]}})})},b.grayOutHiddenColumns=function(a){var c=a.options,d=b.props.googleChartWrapper,e=d.getDataTable();if(null!==e){var f=e.getNumberOfColumns();if(!1!=b.state.hiddenColumns.length>0){var g=Array.from({length:f-1}).map(function(a,d){var f=b.getColumnID(e,d+1);return b.state.hiddenColumns.includes(f)?"#CCCCCC":void 0!==c.colors&&null!==c.colors?c.colors[d]:o[d]});d.setOptions(i({},c,{colors:g})),d.draw()}}},b.onResize=function(){b.props.googleChartWrapper.draw()},b}return h(b,a),b.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},b.prototype.componentWillUnmount=function(){var a=this.props,b=a.google,c=a.googleChartWrapper;window.removeEventListener("resize",this.onResize),b.visualization.events.removeAllListeners(c),"Timeline"===c.getChartType()&&c.getChart()&&c.getChart().clearChart()},b.prototype.componentDidUpdate=function(){this.draw(this.props)},b.prototype.render=function(){return null},b}(d.Component),w=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}return h(b,a),b.prototype.componentDidMount=function(){},b.prototype.componentWillUnmount=function(){},b.prototype.shouldComponentUpdate=function(){return!1},b.prototype.render=function(){var a=this.props,b=a.google,c=a.googleChartWrapper,e=a.googleChartDashboard;return(0,d.createElement)(u,{render:function(a){return(0,d.createElement)(v,i({},a,{google:b,googleChartWrapper:c,googleChartDashboard:e}))}})},b}(d.Component),x=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}return h(b,a),b.prototype.shouldComponentUpdate=function(){return!1},b.prototype.listenToEvents=function(a){var b=this,c=a.chartEvents,d=a.google,e=a.googleChartWrapper;if(null!==c){d.visualization.events.removeAllListeners(e);for(var f=0,g=c;f<g.length;f++)!function(a){var c=a.eventName,f=a.callback;d.visualization.events.addListener(e,c,function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];f({chartWrapper:e,props:b.props,google:d,eventArgs:a})})}(g[f])}},b.prototype.render=function(){var a=this,b=this.props,c=b.google,e=b.googleChartWrapper;return(0,d.createElement)(u,{render:function(b){return a.listenToEvents({chartEvents:b.chartEvents||null,google:c,googleChartWrapper:e}),null}})},b}(d.Component),y=0,z=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},b.graphID=null,b.dashboard_ref=(0,d.createRef)(),b.toolbar_ref=(0,d.createRef)(),b.getGraphID=function(){var a,c=b.props,d=c.graphID,e=c.graph_id;return a=null===d&&null===e?null===b.graphID?"reactgooglegraph-"+(n+=1):b.graphID:null!==d&&null===e?d:null!==e&&null===d?e:d,b.graphID=a,b.graphID},b.getControlID=function(a,b){return y+=1,void 0===a?"googlechart-control-"+b+"-"+y:a},b.addControls=function(a,c){var d=b.props,e=d.google,f=d.controls,g=null===f?null:f.map(function(a,c){var d=a.controlID,f=a.controlType,g=a.options,h=a.controlWrapperParams,j=b.getControlID(d,c);return{controlProp:a,control:new e.visualization.ControlWrapper(i({containerId:j,controlType:f,options:g},h))}});if(null===g)return null;c.bind(g.map(function(a){return a.control}),a);for(var h=0,j=g;h<j.length;h++)!function(c){for(var d=c.control,f=c.controlProp.controlEvents,g=0,h=void 0===f?[]:f;g<h.length;g++)!function(c){var f=c.callback,g=c.eventName;e.visualization.events.removeListener(d,g,f),e.visualization.events.addListener(d,g,function(){for(var c=[],g=0;g<arguments.length;g++)c[g]=arguments[g];f({chartWrapper:a,controlWrapper:d,props:b.props,google:e,eventArgs:c})})}(h[g])}(j[h]);return g},b.renderChart=function(){var a=b.props,c=a.width,e=a.height,f=a.options,g=a.style,h=a.className,j=a.rootProps,k=a.google,l=i({height:e||f&&f.height,width:c||f&&f.width},g);return(0,d.createElement)("div",i({id:b.getGraphID(),style:l,className:h},j),b.state.isReady&&null!==b.state.googleChartWrapper?(0,d.createElement)(d.Fragment,null,(0,d.createElement)(w,{googleChartWrapper:b.state.googleChartWrapper,google:k,googleChartDashboard:b.state.googleChartDashboard}),(0,d.createElement)(x,{googleChartWrapper:b.state.googleChartWrapper,google:k})):null)},b.renderControl=function(a){return void 0===a&&(a=function(a){return a.control,a.controlProp,!0}),b.state.isReady&&null!==b.state.googleChartControls?(0,d.createElement)(d.Fragment,null,b.state.googleChartControls.filter(function(b){var c=b.controlProp,d=b.control;return a({control:d,controlProp:c})}).map(function(a){var b=a.control;return a.controlProp,(0,d.createElement)("div",{key:b.getContainerId(),id:b.getContainerId()})})):null},b.renderToolBar=function(){return null===b.props.toolbarItems?null:(0,d.createElement)("div",{ref:b.toolbar_ref})},b}return h(b,a),b.prototype.componentDidMount=function(){var a=this.props,b=a.options,c=a.google,d=a.chartType,e=a.chartWrapperParams,f=a.toolbarItems,g=a.getChartEditor,h=a.getChartWrapper,j=i({chartType:d,options:b,containerId:this.getGraphID()},e),k=new c.visualization.ChartWrapper(j);k.setOptions(b),h(k,c);var l=new c.visualization.Dashboard(this.dashboard_ref),m=this.addControls(k,l);null!==f&&c.visualization.drawToolbar(this.toolbar_ref.current,f);var n=null;null!==g&&g({chartEditor:n=new c.visualization.ChartEditor(),chartWrapper:k,google:c}),this.setState({googleChartEditor:n,googleChartControls:m,googleChartDashboard:l,googleChartWrapper:k,isReady:!0})},b.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var a=this.props.controls,b=0;b<a.length;b+=1){var c=a[b],d=c.controlType,e=c.options,f=c.controlWrapperParams;f&&"state"in f&&this.state.googleChartControls[b].control.setState(f.state),this.state.googleChartControls[b].control.setOptions(e),this.state.googleChartControls[b].control.setControlType(d)}},b.prototype.shouldComponentUpdate=function(a,b){return this.state.isReady!==b.isReady||a.controls!==this.props.controls},b.prototype.render=function(){var a=this.props,b=a.width,c=a.height,e=a.options,f=a.style,g=i({height:c||e&&e.height,width:b||e&&e.width},f);return null!==this.props.render?(0,d.createElement)("div",{ref:this.dashboard_ref,style:g},(0,d.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):(0,d.createElement)("div",{ref:this.dashboard_ref,style:g},this.renderControl(function(a){return"bottom"!==a.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(a){return"bottom"===a.controlProp.controlPosition}),this.renderToolBar())},b}(d.Component),A=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;return b._isMounted=!1,b.state={loadingStatus:"loading",google:null},b.onLoad=function(a){if(b.isFullyLoaded(a))b.onSuccess(a);else var c=setInterval(function(){var a=window.google;b._isMounted?a&&b.isFullyLoaded(a)&&(clearInterval(c),b.onSuccess(a)):clearInterval(c)},1e3)},b.onSuccess=function(a){b.setState({loadingStatus:"ready",google:a})},b.onError=function(){b.setState({loadingStatus:"errored"})},b}return h(b,a),b.prototype.render=function(){var a=this.props,b=a.chartLanguage,c=a.chartPackages,e=a.chartVersion,f=a.mapsApiKey,g=a.loader,h=a.errorElement;return(0,d.createElement)(t,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?(0,d.createElement)(z,i({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&h?h:g,(0,d.createElement)(m,i({},{chartLanguage:b,chartPackages:c,chartVersion:e,mapsApiKey:f},{onLoad:this.onLoad,onError:this.onError})))},b.prototype.componentDidMount=function(){this._isMounted=!0},b.prototype.componentWillUnmount=function(){this._isMounted=!1},b.prototype.isFullyLoaded=function(a){var b=this.props,c=b.controls,d=b.toolbarItems,e=b.getChartEditor;return a&&a.visualization&&a.visualization.ChartWrapper&&a.visualization.Dashboard&&(!c||a.visualization.ChartWrapper)&&(!e||a.visualization.ChartEditor)&&(!d||a.visualization.drawToolbar)},b.defaultProps=l,b}(d.Component);b.Z=A},9227:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d,e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=(d=c(7294))&&d.__esModule?d:{default:d},g=c(5697),h=function(a){function b(a){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,b);var c=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.scriptLoaderId="id"+c.constructor.idCount++,c}return!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}(b,a),e(b,[{key:"componentDidMount",value:function(){var a,b,c,d=this.props,e=d.onError,f=d.onLoad,g=d.url;if(this.constructor.loadedScripts[g]){f();return}if(this.constructor.erroredScripts[g]){e();return}if(this.constructor.scriptObservers[g]){this.constructor.scriptObservers[g][this.scriptLoaderId]=this.props;return}a={},b=this.scriptLoaderId,c=this.props,b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,this.constructor.scriptObservers[g]=a,this.createScript()}},{key:"componentWillUnmount",value:function(){var a=this.props.url,b=this.constructor.scriptObservers[a];b&&delete b[this.scriptLoaderId]}},{key:"createScript",value:function(){var a=this,b=this.props,c=b.onCreate,d=b.url,e=b.attributes,f=document.createElement("script");c(),e&&Object.keys(e).forEach(function(a){return f.setAttribute(a,e[a])}),f.src=d,f.hasAttribute("async")||(f.async=1);var g=function(b){var c=a.constructor.scriptObservers[d];Object.keys(c).forEach(function(e){b(c[e])&&delete a.constructor.scriptObservers[d][a.scriptLoaderId]})};f.onload=function(){a.constructor.loadedScripts[d]=!0,g(function(a){return a.onLoad(),!0})},f.onerror=function(){a.constructor.erroredScripts[d]=!0,g(function(a){return a.onError(),!0})},document.body.appendChild(f)}},{key:"render",value:function(){return null}}]),b}(f.default.Component);h.propTypes={attributes:g.PropTypes.object,onCreate:g.PropTypes.func,onError:g.PropTypes.func.isRequired,onLoad:g.PropTypes.func.isRequired,url:g.PropTypes.string.isRequired},h.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},h.scriptObservers={},h.loadedScripts={},h.erroredScripts={},h.idCount=0,b.default=h,a.exports=b.default},2587:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}c.d(b,{Z:function(){return d}})},6835:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(2937);function e(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||(0,d.Z)(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}},7812:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(2587),e=c(2937);function f(a){return(function(a){if(Array.isArray(a))return(0,d.Z)(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||(0,e.Z)(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}},2937:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(2587);function e(a,b){if(a){if("string"==typeof a)return(0,d.Z)(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return(0,d.Z)(a,b)}}},8100:function(a,b,c){"use strict";c.d(b,{ZP:function(){return T}});var d=c(7294);function e(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d.throw(a))}catch(b){f(b)}}function i(a){var b;a.done?e(a.value):((b=a.value)instanceof c?b:new c(function(a){a(b)})).then(g,h)}i((d=d.apply(a,b||[])).next())})}function f(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),"throw":h(1),"return":h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw new TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var g=function(){},h=g(),i=Object,j=function(a){return a===h},k=function(a){return"function"==typeof a},l=function(a,b){return i.assign({},a,b)},m="undefined",n=function(){return typeof window!=m},o=new WeakMap(),p=0,q=function(a){var b,c,d=typeof a,e=a&&a.constructor,f=e==Date;if(i(a)!==a||f||e==RegExp)b=f?a.toJSON():"symbol"==d?a.toString():"string"==d?JSON.stringify(a):""+a;else{if(b=o.get(a))return b;if(b=++p+"~",o.set(a,b),e==Array){for(c=0,b="@";c<a.length;c++)b+=q(a[c])+",";o.set(a,b)}if(e==i){b="#";for(var g=i.keys(a).sort();!j(c=g.pop());)j(a[c])||(b+=c+":"+q(a[c])+",");o.set(a,b)}}return b},r=!0,s=n(),t=typeof document!=m,u=s&&window.addEventListener?window.addEventListener.bind(window):g,v=t?document.addEventListener.bind(document):g,w=s&&window.removeEventListener?window.removeEventListener.bind(window):g,x=t?document.removeEventListener.bind(document):g,y={initFocus:function(a){return v("visibilitychange",a),u("focus",a),function(){x("visibilitychange",a),w("focus",a)}},initReconnect:function(a){var b=function(){r=!0,a()},c=function(){r=!1};return u("online",b),u("offline",c),function(){w("online",b),w("offline",c)}}},z=!n()||"Deno"in window,A=z?d.useEffect:d.useLayoutEffect,B="undefined"!=typeof navigator&&navigator.connection,C=!z&&B&&(["slow-2g","2g"].includes(B.effectiveType)||B.saveData),D=function(a){if(k(a))try{a=a()}catch(b){a=""}var c=[].concat(a);return[a="string"==typeof a?a:(Array.isArray(a)?a.length:a)?q(a):"",c,a?"$swr$"+a:""]},E=new WeakMap(),F=function(a,b,c,d,e,f,g){void 0===g&&(g=!0);var h=E.get(a),i=h[0],j=h[1],k=h[3],l=i[b],m=j[b];if(g&&m)for(var n=0;n<m.length;++n)m[n](c,d,e);return f&&(delete k[b],l&&l[0])?l[0](2).then(function(){return a.get(b)}):a.get(b)},G=0,H=function(){return++G},I=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return e(void 0,void 0,void 0,function(){var b,c,d,e,g,i,m,n,o,p,q,r,s,t,u,v,w,x,y,z;return f(this,function(f){switch(f.label){case 0:if(b=a[0],c=a[1],d=a[2],i=!1!==(g="boolean"==typeof(e=a[3])?{revalidate:e}:e||{}).populateCache,m=!1!==g.revalidate,n=!1!==g.rollbackOnError,o=g.optimisticData,q=(p=D(c))[0],r=p[2],!q)return[2];if(t=(s=E.get(b))[2],a.length<3)return[2,F(b,q,b.get(q),h,h,m,i)];if(u=d,w=H(),t[q]=[w,0],x=!j(o),y=b.get(q),x&&(b.set(q,o),F(b,q,o)),k(u))try{u=u(b.get(q))}catch(A){v=A}if(!(u&&k(u.then)))return[3,2];return[4,u.catch(function(a){v=a})];case 1:if(u=f.sent(),w!==t[q][0]){if(v)throw v;return[2,u]}v&&x&&n&&(i=!0,u=y,b.set(q,y)),f.label=2;case 2:return i&&(v||b.set(q,u),b.set(r,l(b.get(r),{error:v}))),t[q][1]=H(),[4,F(b,q,u,v,h,m,i)];case 3:if(z=f.sent(),v)throw v;return[2,i?z:u]}})})},J=function(a,b){for(var c in a)a[c][0]&&a[c][0](b)},K=function(a,b){if(!E.has(a)){var c=l(y,b),d={},e=I.bind(h,a),f=g;if(E.set(a,[d,{},{},{},e]),!z){var i=c.initFocus(setTimeout.bind(h,J.bind(h,d,0))),j=c.initReconnect(setTimeout.bind(h,J.bind(h,d,1)));f=function(){i&&i(),j&&j(),E.delete(a)}}return[a,e,f]}return[a,E.get(a)[4]]},L=K(new Map()),M=L[0],N=l({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:function(a,b,c,d,e){var f=c.errorRetryCount,g=e.retryCount,h=~~((Math.random()+.5)*(1<<(g<8?g:8)))*c.errorRetryInterval;!j(f)&&g>f||setTimeout(d,h,e)},onDiscarded:g,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:function(a,b){return q(a)==q(b)},isPaused:function(){return!1},cache:M,mutate:L[1],fallback:{}},{isOnline:function(){return r},isVisible:function(){var a=t&&document.visibilityState;return j(a)||"hidden"!==a}}),O=function(a,b){var c=l(a,b);if(b){var d=a.use,e=a.fallback,f=b.use,g=b.fallback;d&&f&&(c.use=d.concat(f)),e&&g&&(c.fallback=l(e,g))}return c},P=(0,d.createContext)({}),Q=function(a,b){var c=(0,d.useState)({})[1],e=(0,d.useRef)(a),f=(0,d.useRef)({data:!1,error:!1,isValidating:!1}),g=(0,d.useCallback)(function(a){var d=!1,g=e.current;for(var h in a){var i=h;g[i]!==a[i]&&(g[i]=a[i],f.current[i]&&(d=!0))}d&&!b.current&&c({})},[]);return A(function(){e.current=a}),[e,f.current,g]},R=function(a,b,c){var d=b[a]||(b[a]=[]);return d.push(c),function(){var a=d.indexOf(c);a>=0&&(d[a]=d[d.length-1],d.pop())}},S={dedupe:!0};i.defineProperty(function(a){var b=a.value,c=O((0,d.useContext)(P),b),e=b&&b.provider,f=(0,d.useState)(function(){return e?K(e(c.cache||M),b):h})[0];return f&&(c.cache=f[0],c.mutate=f[1]),A(function(){return f?f[2]:h},[]),(0,d.createElement)(P.Provider,l(a,{value:c}))},"default",{value:N});var T=function(a){return function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];var e,f=l(N,(0,d.useContext)(P)),g=k((e=b)[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],h=g[0],i=g[1],j=g[2],m=O(f,j),n=a,o=m.use;if(o)for(var p=o.length;p-- >0;)n=o[p](n);return n(h,i||m.fetcher,m)}}(function(a,b,c){var g=c.cache,i=c.compare,o=c.fallbackData,p=c.suspense,q=c.revalidateOnMount,r=c.refreshInterval,s=c.refreshWhenHidden,t=c.refreshWhenOffline,u=E.get(g),v=u[0],w=u[1],x=u[2],y=u[3],B=D(a),C=B[0],G=B[1],J=B[2],K=(0,d.useRef)(!1),L=(0,d.useRef)(!1),M=(0,d.useRef)(C),N=(0,d.useRef)(b),O=(0,d.useRef)(c),P=function(){return O.current},T=function(){return P().isVisible()&&P().isOnline()},U=function(a){return g.set(J,l(g.get(J),a))},V=g.get(C),W=j(o)?c.fallback[C]:o,X=j(V)?W:V,Y=g.get(J)||{},Z=Y.error,$=function(){return j(q)?!P().isPaused()&&(p?!j(X):j(X)||c.revalidateIfStale):q},_=!!C&&!!b&&(!!Y.isValidating|| !K.current&&$()),aa=Q({data:X,error:Z,isValidating:_},L),ba=aa[0],ca=aa[1],da=aa[2],ea=(0,d.useCallback)(function(a){return e(void 0,void 0,void 0,function(){var b,d,e,l,m,n,o,p,q,r,s,t,u;return f(this,function(f){switch(f.label){case 0:if(b=N.current,!C||!b||L.current||P().isPaused())return[2,!1];l=!0,m=a||{},n=!y[C]||!m.dedupe,o=function(){return!L.current&&C===M.current&&K.current},p=function(){var a=y[C];a&&a[1]===e&&delete y[C]},q={isValidating:!1},r=function(){U({isValidating:!1}),o()&&da(q)},U({isValidating:!0}),da({isValidating:!0}),f.label=1;case 1:return f.trys.push([1,3,,4]),n&&(F(g,C,ba.current.data,ba.current.error,!0),c.loadingTimeout&&!g.get(C)&&setTimeout(function(){l&&o()&&P().onLoadingSlow(C,c)},c.loadingTimeout),y[C]=[b.apply(void 0,G),H()]),d=(u=y[C])[0],e=u[1],[4,d];case 2:if(d=f.sent(),n&&setTimeout(p,c.dedupingInterval),!y[C]||y[C][1]!==e)return n&&o()&&P().onDiscarded(C),[2,!1];if(U({error:h}),q.error=h,!j(s=x[C])&&(e<=s[0]||e<=s[1]||0===s[1]))return r(),n&&o()&&P().onDiscarded(C),[2,!1];return i(ba.current.data,d)?q.data=ba.current.data:q.data=d,i(g.get(C),d)||g.set(C,d),n&&o()&&P().onSuccess(d,C,c),[3,4];case 3:return t=f.sent(),p(),!P().isPaused()&&(U({error:t}),q.error=t,n&&o()&&(P().onError(t,C,c),("boolean"==typeof c.shouldRetryOnError&&c.shouldRetryOnError||k(c.shouldRetryOnError)&&c.shouldRetryOnError(t))&&T()&&P().onErrorRetry(t,C,c,ea,{retryCount:(m.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return l=!1,r(),o()&&n&&F(g,C,q.data,q.error,!1),[2,!0]}})})},[C]),fa=(0,d.useCallback)(I.bind(h,g,function(){return M.current}),[]);if(A(function(){N.current=b,O.current=c}),A(function(){if(C){var a,b=K.current,c=ea.bind(h,S),d=function(a,b,c){da(l({error:b,isValidating:c},i(ba.current.data,a)?h:{data:a}))},e=0,f=function(a){if(0==a){var b=Date.now();P().revalidateOnFocus&&b>e&&T()&&(e=b+P().focusThrottleInterval,c())}else if(1==a)P().revalidateOnReconnect&&T()&&c();else if(2==a)return ea()},g=R(C,w,d),k=R(C,v,f);return L.current=!1,M.current=C,K.current=!0,b&&da({data:X,error:Z,isValidating:_}),$()&&(j(X)||z?c():(a=c,n()&& typeof window.requestAnimationFrame!=m?window.requestAnimationFrame(a):setTimeout(a,1))),function(){L.current=!0,g(),k()}}},[C,ea]),A(function(){var a;function b(){var b=k(r)?r(X):r;b&& -1!==a&&(a=setTimeout(c,b))}function c(){!ba.current.error&&(s||P().isVisible())&&(t||P().isOnline())?ea(S).then(b):b()}return b(),function(){a&&(clearTimeout(a),a=-1)}},[r,s,t,ea]),(0,d.useDebugValue)(X),p&&j(X)&&C)throw N.current=b,O.current=c,j(Z)?ea(S):Z;return{mutate:fa,get data(){return ca.data=!0,X},get error(){return ca.error=!0,Z},get isValidating(){return ca.isValidating=!0,_}}})}}])