(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({settings:"settings"}[t]||t)+"."+{settings:"7e6d256d"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=n("bb71");n("da64");o["a"].use(r["a"],{iconfont:"fa5"});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}},[n("v-icon",{attrs:{slot:"activator",color:t.icon.color},slot:"activator"},[t._v("fa-"+t._s(t.icon.icon))]),n("span",[t._v(t._s(t.icon.tooltip))])],1)],1),n("v-content",[n("v-container",{attrs:{"grid-list-md":""}},["connected"===t.connection?n("v-layout",{attrs:{row:"",wrap:""}},[t.plotter&&"disconnected"!==t.plotter.connection&&"error"!==t.plotter.connection&&"connecting"!==t.plotter.connection?[n("v-flex",{attrs:{xs12:"",md6:"",lg4:""}},[n("status-card",{attrs:{plotter:t.plotter},on:{setHome:t.setHome}})],1),n("v-flex",{attrs:{xs12:"",md6:"",lg4:""}},[n("go-to-card",{attrs:{plotter:t.plotter},on:{goTo:t.goTo}})],1),n("v-flex",{attrs:{xs12:"",md12:"",lg4:""}},[n("live-position-card",{attrs:{plotter:t.plotter}})],1),n("v-flex",{attrs:{xs12:"",md6:""}},[n("drawing-card",{attrs:{loading:"printing"===t.plotter.connection},on:{send:t.sendArray}})],1)]:n("v-flex",{attrs:{xs12:"",sm6:"",lg4:""}},[n("connect-card",{attrs:{connecting:!!t.plotter&&"connecting"==t.plotter.connection},on:{save:t.tryConnect}})],1),n("v-flex",{attrs:{xs12:""}})],2):"loading"===t.connection?n("v-layout",[n("v-progress-linear",{attrs:{indeterminate:""}})],1):n("v-layout",[n("v-alert",{attrs:{value:!0,type:"error"}},[t._v("Could not reach backend server")])],1)],1)],1),n("v-snackbar",{attrs:{timeout:5e3},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[t._v(t._s(t.errorMsg))])],1)},i=[],s=n("8055"),c=n.n(s),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Plotter IP"},model:{value:t.plotterIp,callback:function(e){t.plotterIp=e},expression:"plotterIp"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{loading:t.connecting},on:{click:t.save}},[t._v("Save")])],1)],1)},l=[],h={props:{connecting:Boolean},data:function(){return{plotterIp:""}},methods:{save:function(){this.$emit("save",this.plotterIp)}}},d=h,p=n("2877"),v=n("6544"),f=n.n(v),m=n("8336"),x=n("b0af"),b=n("99d9"),y=n("0e8f"),g=n("a722"),w=n("9910"),O=n("2677"),P=Object(p["a"])(d,u,l,!1,null,null,null);P.options.__file="ConnectCard.vue";var j=P.exports;f()(P,{VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCardText:b["b"],VFlex:y["a"],VLayout:g["a"],VSpacer:w["a"],VTextField:O["a"]});var k=n("b699"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100%"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v("Move Printing Head")])])]),n("v-card-text",[n("v-layout",{attrs:{wrap:"",row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{type:"number",label:"X (max is "+t.maxX+")"},model:{value:t.x,callback:function(e){t.x=e},expression:"x"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{type:"number",label:"Y (max is "+t.maxY+")"},model:{value:t.y,callback:function(e){t.y=e},expression:"y"}})],1)],1)],1),n("v-card-actions",[n("v-switch",{attrs:{label:"Paint"},model:{value:t.paintState,callback:function(e){t.paintState=e},expression:"paintState"}}),n("v-spacer"),n("v-btn",{attrs:{color:"primary",loading:"printing"==t.plotter.connection},on:{click:t.move}},[t._v("Send")])],1)],1)},C=[],M=n("70f1"),S=n.n(M),_={maxX:200,maxY:300,minX:0,minY:0},V={props:{plotter:Object},data:function(){return{x:10,y:10,paintState:!1}},created:function(){this.paintState=this.plotter.pen},watch:{"plotter.pen":function(){this.paintState=this.plotter.pen}},methods:{move:function(){this.$emit("goTo",this.getSendObject)}},computed:{maxX:function(){return _.maxX},maxY:function(){return _.maxY},getSendObject:function(){var t=Math.min(S()(this.x),this.maxX)<0?0:Math.min(S()(this.x),this.maxX),e=Math.min(S()(this.y),this.maxY)<0?0:Math.min(S()(this.y),this.maxY);return{x:t,y:e,operation:this.paintState?"drawTo":"moveTo"}}}},T=V,D=n("12b2"),E=n("b73d"),B=Object(p["a"])(T,L,C,!1,null,null,null);B.options.__file="GoToCard.vue";var R=B.exports;f()(B,{VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:D["a"],VFlex:y["a"],VLayout:g["a"],VSpacer:w["a"],VSwitch:E["a"],VTextField:O["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:""}},[n("canvas",{ref:"my-canvas",staticClass:"elevation-5",attrs:{id:"canvas",width:t.maxX,height:t.maxY},on:{mousemove:t.doDrag,mousedown:t.doMouseDown,mouseup:t.doMouseUp,contextmenu:function(e){return e.preventDefault(),t.cancel(e)},mouseout:t.resetCurrent}})]),n("v-flex",{attrs:{xs12:"",md6:""}},[n("v-radio-group",{model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[n("v-radio",{attrs:{label:"One Liner",value:"oLine"}}),n("v-radio",{attrs:{label:"Continues Line",value:"cLine"}}),n("v-radio",{attrs:{label:"Circle",value:"circle"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{flat:""},on:{click:t.reset}},[t._v("Reset")]),n("v-btn",{attrs:{flat:""},on:{click:t.undo}},[t._v("Undo")]),n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.send}},[t._v("send")])],1)],1)},U=[],X=(n("ac6a"),{props:{loading:Boolean},data:function(){return{canvas:null,context:null,mode:"oLine",drawnObjects:[],currentObject:null}},computed:{maxX:function(){return _.maxX},maxY:function(){return _.maxY}},methods:{doMouseDown:function(t){switch(this.mode){case"oLine":this.oLineMouseDown(t);break;case"cLine":this.cLineMouseDown(t);break;case"circle":this.circleMouseDown(t);break}},doDrag:function(t){switch(this.mode){case"oLine":this.oLineDrag(t);break;case"cLine":this.cLineDrag(t);break;case"circle":this.circleDrag(t);break}},doMouseUp:function(t){switch(this.mode){case"oLine":this.oLineUp(t);break;case"cLine":break;case"circle":break}},oLineUp:function(){this.drawnObjects.push({type:"oLine",startPos:{x:this.currentObject.previousPos.x,y:this.currentObject.previousPos.y},endPos:{x:this.currentObject.currentPos.x,y:this.currentObject.currentPos.y}}),this.currentObject=null},oLineMouseDown:function(t){this.currentObject={type:"oLine",previousPos:this.getMousePos(this.canvas,t),currentPos:this.getMousePos(this.canvas,t)}},cLineMouseDown:function(t){this.currentObject||1!==t.which?this.currentObject&&"cLine"===this.currentObject.type&&1===t.which&&(this.currentObject.currentPos=this.getMousePos(this.canvas,t),this.currentObject.points.push(this.getMousePos(this.canvas,t))):this.currentObject={type:"cLine",currentPos:this.getMousePos(this.canvas,t),startPos:this.getMousePos(this.canvas,t),points:[this.getMousePos(this.canvas,t)]}},circleMouseDown:function(t){this.currentObject||1!==t.which?this.currentObject&&"circle"===this.currentObject.type&&1===t.which&&(this.drawnObjects.push({type:"circle",startPos:this.currentObject.startPos,radius:Math.sqrt(Math.pow(this.currentObject.startPos.x-this.currentObject.currentPos.x,2)+Math.pow(this.currentObject.startPos.y-this.currentObject.currentPos.y,2))}),this.currentObject=null):this.currentObject={type:"circle",currentPos:this.getMousePos(this.canvas,t),startPos:this.getMousePos(this.canvas,t)}},cancel:function(t){this.currentObject&&"cLine"==this.currentObject.type&&(this.currentObject.points.push(this.getMousePos(this.canvas,t)),this.drawnObjects.push({type:"cLine",startPos:this.currentObject.startPos,points:this.currentObject.points}),this.currentObject=null)},oLineDrag:function(t){this.currentObject&&"oLine"===this.currentObject.type&&(this.currentObject.currentPos=this.getMousePos(this.canvas,t),this.draw())},cLineDrag:function(t){this.currentObject&&"cLine"===this.currentObject.type&&(this.currentObject.currentPos=this.getMousePos(this.canvas,t),this.draw())},circleDrag:function(t){this.currentObject&&"circle"===this.currentObject.type&&(this.currentObject.currentPos=this.getMousePos(this.canvas,t),this.draw())},reset:function(){this.drawnObjects=[],this.currentObject=null,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},resetCurrent:function(){this.currentObject=null,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawDrawnObjects()},undo:function(){this.drawnObjects.pop(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawDrawnObjects()},send:function(){var t=[];this.drawnObjects.forEach(function(e){switch(e.type){case"circle":t.push({operation:"circle",x:Math.round(e.startPos.x),y:Math.round(e.startPos.y),radius:Math.round(e.radius)});break;case"cLine":t.push({operation:"moveTo",x:Math.round(e.startPos.x),y:Math.round(e.startPos.y)}),e.points.forEach(function(e){t.push({operation:"drawTo",x:Math.round(e.x),y:Math.round(e.y)})});break;case"oLine":t.push({operation:"moveTo",x:Math.round(e.startPos.x),y:Math.round(e.startPos.y)}),t.push({operation:"drawTo",x:Math.round(e.endPos.x),y:Math.round(e.endPos.y)})}}),t.push({operation:"moveTo",x:0,y:0}),this.$emit("send",t)},drawDrawnObjects:function(){var t=this;this.drawnObjects.forEach(function(e){switch(e.type){case"oLine":t.oLineDraw(e);break;case"cLine":t.cLineDraw(e);break;case"circle":t.circleDraw(e);break}})},draw:function(){switch(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawDrawnObjects(),this.currentObject.type){case"oLine":this.oLineDrawCurrent();break;case"cLine":this.cLineDrawCurrent();break;case"circle":this.circleDrawCurrent();break}},oLineDraw:function(t){this.ctx.beginPath(),this.ctx.moveTo(t.startPos.x,t.startPos.y),this.ctx.lineTo(t.endPos.x,t.endPos.y),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},cLineDraw:function(t){var e=this;this.ctx.beginPath(),this.ctx.moveTo(t.points[0].x,t.points[0].y),t.points.forEach(function(t){e.ctx.lineTo(t.x,t.y)}),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},circleDraw:function(t){this.ctx.beginPath(),this.ctx.moveTo(t.startPos.x+t.radius,t.startPos.y),this.ctx.arc(t.startPos.x,t.startPos.y,t.radius,0,2*Math.PI),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},oLineDrawCurrent:function(){this.ctx.beginPath(),this.ctx.moveTo(this.currentObject.previousPos.x,this.currentObject.previousPos.y),this.ctx.lineTo(this.currentObject.currentPos.x,this.currentObject.currentPos.y),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},cLineDrawCurrent:function(){var t=this;this.ctx.beginPath(),this.ctx.moveTo(this.currentObject.points[0].x,this.currentObject.points[0].y),this.currentObject.points.forEach(function(e){t.ctx.lineTo(e.x,e.y)}),this.ctx.lineTo(this.currentObject.currentPos.x,this.currentObject.currentPos.y),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},circleDrawCurrent:function(){this.ctx.beginPath(),this.ctx.moveTo(this.currentObject.startPos.x+Math.sqrt(Math.pow(this.currentObject.startPos.x-this.currentObject.currentPos.x,2)+Math.pow(this.currentObject.startPos.y-this.currentObject.currentPos.y,2)),this.currentObject.startPos.y),this.ctx.arc(this.currentObject.startPos.x,this.currentObject.startPos.y,Math.sqrt(Math.pow(this.currentObject.startPos.x-this.currentObject.currentPos.x,2)+Math.pow(this.currentObject.startPos.y-this.currentObject.currentPos.y,2)),0,2*Math.PI),this.ctx.strokeStyle="#F63E02",this.ctx.lineWidth=2,this.ctx.stroke()},getMousePos:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}},ready:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.translate(0,t.height),e.scale(1,-1),e.imageSmoothingEnabled=!1},mounted:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d")}}),Y=X,F=n("67b6"),H=n("43a6"),$=Object(p["a"])(Y,I,U,!1,null,null,null);$.options.__file="DrawingCard.vue";var A=$.exports;f()($,{VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCardText:b["b"],VFlex:y["a"],VLayout:g["a"],VRadio:F["a"],VRadioGroup:H["a"],VSpacer:w["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100%"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v("Live Position")])])]),n("v-card-text",[n("canvas",{ref:"my-canvas",staticClass:"elevation-5",attrs:{id:"c",width:t.maxX,height:t.maxY}})])],1)},W=[],q=(n("6c7b"),n("75fc")),G={props:{plotter:Object},computed:{maxX:function(){return _.maxX},maxY:function(){return _.maxY}},watch:{plotter:{handler:function(){this.draw()}},deep:!0},mounted:function(){this.draw()},methods:{draw:function(){var t=document.getElementById("c"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.beginPath(),[{operation:"moveTo",x:0,y:0}].concat(Object(q["a"])(this.plotter.printed)).forEach(function(t){"moveTo"===t.operation?e.moveTo(t.x,t.y):"drawTo"===t.operation?e.lineTo(t.x,t.y):"circle"===t.operation&&(e.moveTo(t.x+t.radius,t.y),e.arc(t.x,t.y,t.radius,0,2*Math.PI),e.moveTo(t.x,t.y))}),e.strokeStyle="#F63E02",e.lineWidth=2,e.stroke(),e.beginPath(),e.strokeStyle="#71f442",e.arc(this.plotter.x,this.plotter.y,5,0,2*Math.PI),this.plotter.pen&&(e.fillStyle="green",e.fill()),e.stroke()}}},N=G,J=Object(p["a"])(N,z,W,!1,null,null,null);J.options.__file="LivePositionCard.vue";var K=J.exports;f()(J,{VCard:x["a"],VCardText:b["b"],VCardTitle:D["a"]});var Q={name:"App",components:{ConnectCard:j,StatusCard:k["a"],GoToCard:R,DrawingCard:A,LivePositionCard:K},data:function(){return{plotter:null,socket:null,errorMsg:"",error:!1,connection:"loading"}},created:function(){var t=this;this.socket=c()("ws://localhost:3000/"),this.socket.on("plotterStatus",function(e){t.plotter=e}),this.socket.on("errorNetwork",function(e){t.errorMsg=e,t.error=!0}),this.socket.on("connect",function(){t.connection="connected"}),this.socket.on("disconnect",function(){t.connection="error"})},computed:{icon:function(){switch(this.connection){case"loading":return{color:"white",icon:"question-circle",tooltip:"Backend Connection"};case"connected":return{color:"success",icon:"check-circle",tooltip:"Backend Connection"};case"error":return{color:"error",icon:"exclamation-circle",tooltip:"Backend Connection"};default:return{color:"grey",icon:"question-circle",tooltip:"Backend Connection"}}}},methods:{tryConnect:function(t){this.plotter={connection:"connecting"},this.socket.emit("connectPlotter",t)},goTo:function(t){this.socket.emit("sendPrint",[t])},sendArray:function(t){this.socket.emit("sendPrint",t)},setHome:function(){this.socket.emit("setHome")}}},Z=Q,tt=n("0798"),et=n("7496"),nt=n("a523"),ot=n("549c"),rt=n("132d"),at=n("8e36"),it=n("2db4"),st=n("71d9"),ct=n("3a2f"),ut=Object(p["a"])(Z,a,i,!1,null,null,null);ut.options.__file="App.vue";var lt=ut.exports;f()(ut,{VAlert:tt["a"],VApp:et["a"],VContainer:nt["a"],VContent:ot["a"],VFlex:y["a"],VIcon:rt["a"],VLayout:g["a"],VProgressLinear:at["a"],VSnackbar:it["a"],VSpacer:w["a"],VToolbar:st["a"],VTooltip:ct["a"]});var ht=n("8c4f"),dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",lg6:""}},[n("drawn-card")],1),n("v-flex",{attrs:{xs12:"",lg6:""}},[n("v-card",[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{row:""}},[n("stepper-card",{attrs:{flat:""}}),n("status-card",{attrs:{flat:""}})],1)],1),n("v-flex",{attrs:{xs3:""}},[n("go-to-card",{attrs:{flat:""}})],1)],1)],1)],1)],1)],1)},pt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("canvas",{ref:"my-canvas",staticClass:"elevation-5",attrs:{id:"canvas",width:t.maxX,height:t.maxY},on:{mousemove:t.doDrag,mousedown:t.doMouseDown,mouseup:t.doMouseUp},nativeOn:{touchmove:function(e){return t.doDrag(e)},touchstart:function(e){return t.doMouseDown(e)},touchend:function(e){return t.doMouseUp(e)}}}),n("v-radio-group",{model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[n("v-radio",{attrs:{label:"One Liner",value:"oLine"}}),n("v-radio",{attrs:{label:"Continues Line",value:"cLine"}}),n("v-radio",{attrs:{label:"Circle",value:"circle"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-switch",{model:{value:t.oneline,callback:function(e){t.oneline=e},expression:"oneline"}}),n("v-btn",{attrs:{flat:""},on:{click:t.reset}},[t._v("Reset")]),n("v-btn",{attrs:{flat:""},on:{click:t.undo}},[t._v("Undo")]),n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.send}},[t._v("send")])],1)],1)},ft=[],mt={props:{loading:Boolean},data:function(){return{oneline:!1,provider:{context:null},mode:"oLine",height:0,width:0,dawingObjects:[],currenctObject:{type:null},line:null,mouse:{current:{x:0,y:0},previous:{x:0,y:0},down:!1},canvas:null}},computed:{maxX:function(){return _.maxX},maxY:function(){return _.maxY}},methods:{undo:function(){this.lines.splice(this.lines.length-1,1);var t=document.getElementById("canvas"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.drawLines(e)},drawAllObjects:function(){},drawOLine:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),this.drawAllObjects(),this.currenctObject.mouse.previous&&(e.beginPath(),e.moveTo(this.currenctObject.mouse.previous.x,this.currenctObject.mouse.previous.y),e.lineTo(this.currenctObject.mouse.current.x,this.currenctObject.mouse.current.y),e.strokeStyle="#F63E02",e.lineWidth=2,e.stroke())},send:function(){var t=[];this.lines.forEach(function(e){t.push({operation:"moveTo",x:e.from.x,y:e.from.y}),t.push({operation:"drawTo",x:e.to.x,y:e.to.y})}),this.$emit("send",t)},doDrag:function(t){switch(this.mode){case"oLine":this.doDragOLine(t);break;case"cLine":this.doDragCLine(t);break;case"circle":this.doDragCircle(t)}},doDragOLine:function(t){var e=document.getElementById("canvas");this.currentObject.mouse.current=this.getMousePos(e,t),this.drawOLine(t)},doMouseDown:function(t){switch(this.mode){case"oLine":this.doMouseDownOLine(t);break;case"cLine":this.doMouseDownCLine(t);break;case"circle":this.doMouseDownCircle(t)}},doMouseDownOLine:function(t){var e=document.getElementById("canvas");this.currentObject.type="oLine",this.currentObject.mouse.previous=this.getMousePos(e,t)},doMouseUp:function(t){switch(this.mode){case"oLine":this.doMouseUpOLine(t);break;case"cLine":this.doMouseUpCLine(t);break;case"circle":this.doMouseUpCircle(t)}},doMouseUpOLine:function(){this.mouse.down=!1,this.lines.push({type:"oLine",from:{x:this.currentObject.mouse.previous.x,y:this.currentObject.mouse.previous.y},to:{x:this.currentObject.mouse.current.x,y:this.currentObject.mouse.current.y}})},drawLines:function(t){this.lines.forEach(function(e){t.beginPath(),t.moveTo(e.from.x,e.from.y),t.lineTo(e.to.x,e.to.y),t.strokeStyle="#F63E02",t.lineWidth=2,t.stroke()})},reset:function(){this.lines=[];var t=document.getElementById("canvas"),e=t.getContext("2d");e.clearRect(0,0,t.width,t.height)},getMousePos:function(t,e){var n=t.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}},ready:function(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.translate(0,t.height),e.scale(1,-1),e.imageSmoothingEnabled=!1},mounted:function(){}},xt=mt,bt=Object(p["a"])(xt,vt,ft,!1,null,null,null);bt.options.__file="DrawnCard.vue";var yt=bt.exports;f()(bt,{VBtn:m["a"],VCard:x["a"],VCardActions:b["a"],VCardText:b["b"],VRadio:F["a"],VRadioGroup:H["a"],VSpacer:w["a"],VSwitch:E["a"]});var gt=n("8ecb"),wt={components:{DrawnCard:yt,StepperCard:gt["a"],GoToCard:R,StatusCard:k["a"]}},Ot=wt,Pt=Object(p["a"])(Ot,dt,pt,!1,null,null,null);Pt.options.__file="Home.vue";var jt=Pt.exports;f()(Pt,{VCard:x["a"],VContainer:nt["a"],VFlex:y["a"],VLayout:g["a"]}),o["a"].use(ht["a"]);var kt=new ht["a"]({routes:[{path:"/",name:"home",component:jt,meta:{title:"Home",icon:"fa-home"}},{path:"/settings",name:"settings",meta:{title:"Settings",icon:"fa-cogs"},component:function(){return n.e("settings").then(n.bind(null,"26d3"))}}]}),Lt=n("f499"),Ct=n.n(Lt),Mt=n("795b"),St=n.n(Mt),_t=n("a745"),Vt=n.n(_t),Tt=n("2f62");o["a"].use(Tt["a"]);var Dt=new Tt["a"].Store({state:{health:"unkown",plotterURL:"http://192.168.0.1/",status:{x:0,y:0,pen:!1},sendPositions:[]},mutations:{initialiseStore:function(t){localStorage.getItem("plotterURL")&&(t.plotterURL=localStorage.getItem("plotterURL"))},setHealth:function(t,e){t.health=e},setURL:function(t,e){t.plotterURL=e,localStorage.setItem("plotterURL",e),t.health="unkown"},setPlotterState:function(t,e){t.status=e},addPosition:function(t,e){Vt()(t.sendPositions)?t.sendPositions.push(e):t.sendPositions=[e]}},actions:{checkHealth:function(t){return t.dispatch("sendData",{url:t.state.plotterURL+"health"})},sendPosition:function(t,e){return t.dispatch("sendData",{data:e,url:t.state.plotterURL+"position"}).then(function(e){t.commit("addPosition",e.state)})},sendData:function(t,e){var n=e.data,o=e.url,r=e.path;return new St.a(function(e,a){fetch(o||t.state.plotterURL+r,{method:"POST",headers:{"Content-Type":"application/json"},body:Ct()(n)}).then(function(o){o.ok?(o.json().then(function(n){e(n),n.state&&t.commit("setPlotterState",n.state)}),t.commit("setHealth","connected")):(a(n),t.commit("setHealth","error"))}).catch(function(e){a(e),t.commit("setHealth","error")})})}}});o["a"].config.productionTip=!1,new o["a"]({router:kt,store:Dt,render:function(t){return t(lt)}}).$mount("#app")},"8ecb":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:t.flat,height:"100%"}},[t.title?n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v("Move Printing Head")])])]):t._e(),n("v-card-text",[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.move("up")}}},[n("v-icon",[t._v("fa-arrow-up")])],1)],1)],1),n("v-layout",{attrs:{row:"","justify-space-between":""}},[n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.move("left")}}},[n("v-icon",[t._v("fa-arrow-left")])],1)],1),n("v-flex",[n("v-btn",{attrs:{flat:!t.paintState,loading:t.isLoading,icon:"",color:t.paintState?"primary":"grey darken-2"},on:{click:t.togglePaint}},[n("v-icon",[t._v("fa-paint-brush")])],1)],1),n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.move("right")}}},[n("v-icon",[t._v("fa-arrow-right")])],1)],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:t.setHome}},[n("v-icon",[t._v("fa-bullseye")])],1)],1),n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.move("down")}}},[n("v-icon",[t._v("fa-arrow-down")])],1)],1),n("v-flex",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){t.move("home")}}},[n("v-icon",[t._v("fa-home")])],1)],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",[n("v-text-field",{attrs:{type:"number",label:"Step Size"},model:{value:t.stepSize,callback:function(e){t.stepSize=e},expression:"stepSize"}})],1)],1)],1)],1)],1)},r=[],a=n("70f1"),i=n.n(a),s=n("cebc"),c=n("2f62"),u={props:{title:Boolean,flat:Boolean},data:function(){return{stepSize:10,paintState:!1,isLoading:!1}},created:function(){this.paintState=this.status.pen},watch:{"status.pen":function(){this.paintState=this.status.pen}},computed:Object(s["a"])({},Object(c["d"])(["status"])),methods:Object(s["a"])({},Object(c["b"])(["sendPosition","sendData"]),{move:function(t){var e=this;if(this.isLoading=!0,this.stepSize&&""!==this.stepSize&&!isNaN(this.stepSize)){var n,o=i()(this.stepSize);switch(t){case"up":n=this.addMoveToState({y:o,x:0});break;case"down":n=this.addMoveToState({y:-o,x:0});break;case"left":n=this.addMoveToState({y:0,x:-o});break;case"right":n=this.addMoveToState({y:0,x:o});break;case"home":n={x:0,y:0};break}this.sendPosition(n).catch(function(){}).finally(function(){e.isLoading=!1})}},togglePaint:function(){var t=this;this.isLoading=!0,this.sendData({data:{pen:!this.paintState},path:"pen"}).then(function(){t.paintState=!t.paintState}).catch().finally(function(){t.isLoading=!1})},addMoveToState:function(t){return{x:t.x+this.status.x,y:t.y+this.status.y}},setHome:function(){var t=this;this.sendData({data:{},path:"sethome"}).catch().finally(function(){t.isLoading=!1})}})},l=u,h=n("2877"),d=n("6544"),p=n.n(d),v=n("8336"),f=n("b0af"),m=n("99d9"),x=n("12b2"),b=n("0e8f"),y=n("132d"),g=n("a722"),w=n("2677"),O=Object(h["a"])(l,o,r,!1,null,null,null);O.options.__file="StepperCard.vue";e["a"]=O.exports;p()(O,{VBtn:v["a"],VCard:f["a"],VCardText:m["b"],VCardTitle:x["a"],VFlex:b["a"],VIcon:y["a"],VLayout:g["a"],VTextField:w["a"]})},b699:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100%"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline"},[t._v("Status of the Plotter\n        "),n("v-btn",{attrs:{icon:""},on:{click:t.setHome}},[n("v-icon",[t._v("fa-power-off")])],1)],1)])]),n("v-card-text",[n("v-list",t._l(t.state,function(e){return n("v-list-tile",{key:e.key},[n("v-list-tile-content",[t._v(t._s(e.key)+":")]),n("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(e.value))])],1)}),1)],1)],1)},r=[],a=n("a4bb"),i=n.n(a),s={props:{plotter:Object},computed:{state:function(){var t=this;return i()(this.plotter).map(function(e){return{key:e,value:t.plotter[e]}})}},methods:{setHome:function(){this.$emit("setHome")}}},c=s,u=n("2877"),l=n("6544"),h=n.n(l),d=n("8336"),p=n("b0af"),v=n("99d9"),f=n("12b2"),m=n("132d"),x=n("8860"),b=n("ba95"),y=n("5d23"),g=Object(u["a"])(c,o,r,!1,null,null,null);g.options.__file="StatusCard.vue";e["a"]=g.exports;h()(g,{VBtn:d["a"],VCard:p["a"],VCardText:v["b"],VCardTitle:f["a"],VIcon:m["a"],VList:x["a"],VListTile:b["a"],VListTileContent:y["a"]})}});
//# sourceMappingURL=app.19944488.js.map