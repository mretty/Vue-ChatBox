(function(t){function e(e){for(var r,i,u=e[0],c=e[1],o=e[2],l=0,h=[];l<u.length;l++)i=u[l],s[i]&&h.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(h.length)h.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Vue-ChatBox/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"12d6":function(t,e,n){"use strict";var r=n("d555"),s=n.n(r);s.a},"14b6":function(t,e,n){},"24fd":function(t,e,n){"use strict";var r=n("310d"),s=n.n(r);s.a},"310d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("xf-chat-box",{attrs:{threads:t.chatThreads,users:t.users}})],1)},a=[],i=[{id:1,name:"Severin_Hasselhof"},{id:2,name:"Johan_Hamburger"},{id:3,name:"Thomas_Brokeback"},{id:4,name:"Erik_Ender"},{id:5,name:"Jeremiah_Unsullied"},{id:6,name:"Priscila_Kearney"},{id:7,name:"Alonso_Winsett"},{id:8,name:"Diedre_Wills"},{id:9,name:"Collin_Pecoraro"},{id:10,name:"Kip_Nicks"},{id:11,name:"Margorie_Saffer"},{id:12,name:"Cary_Eisenstein"},{id:13,name:"Peg_Espinal"}],u={name:"app",data:function(){return{chatThreads:[{text:"Hi There!",author:"Bob",date:"1/1 10:00",replyThread:[],reply:!1}],users:i}}},c=u,o=(n("034f"),n("2877")),p=Object(o["a"])(c,s,a,!1,null,null,null),l=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-box"},[n("div",{staticClass:"text-area"},t._l(t.threads,function(e){return n("xf-chat-thread",{key:e.id,attrs:{chatThread:e,users:t.users}})}),1),n("xf-chat-input",{attrs:{chatInput:t.chatInput,users:t.users},on:{"update:chatInput":function(e){t.chatInput=e},"update:chat-input":function(e){t.chatInput=e},btnClick:t.hdlSend,itemSelected:t.hdlSelected}})],1)},d=[],f=n("f499"),m=n.n(f),y=(n("7514"),n("a481"),n("4917"),n("7f7f"),n("3b2b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"x-input"},[n("input",{ref:"input",attrs:{type:"search",placeholder:"Type @ to mention someone"},domProps:{value:t.chatInput},on:{input:function(e){return t.$emit("update:chatInput",e.target.value)},keyup:function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("btnClick")},keydown:[function(e){return"keyCode"in e&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.up(e)},function(e){return"keyCode"in e&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.down(e)},function(e){return"keyCode"in e&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.esc(e)}]}}),n("button",{on:{click:function(e){return t.$emit("btnClick")}}},[t._v("Send")]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.popUp||t.matches==[],expression:"popUp || matches==[]"}],ref:"optionsList",staticClass:"pop-up"},t._l(t.matches,function(e,r){return n("li",{key:e["name"],class:{selected:t.selected==r},on:{click:function(e){return t.itemClicked(r)}}},[t._v(t._s(e.name))])}),0)])}),v=[],b=(n("28a5"),n("6762"),n("2fdb"),n("75fc")),I=(n("aef6"),{props:["chatInput","users"],data:function(){return{popUp:!1,selected:0,selectedItems:null,itemHeight:22.9}},watch:{chatInput:function(){this.chatInput.endsWith(" @")?this.popUp=!0:this.chatInput.match("@")||(this.popUp=!1),this.chatInput.match("@ ")&&(this.popUp=!1)}},computed:{matches:function(){var t=this;if(""==this.chatInput)return[];if(this.popUp){var e=Object(b["a"])(this.chatInput).filter(function(t){return"@"===t}).length;if(e>=1)return this.users.filter(function(n){return n["name"].toLowerCase().includes(t.chatInput.split("@")[e].toLowerCase())})}return this.users.filter(function(e){return e["name"].toLowerCase().includes(t.chatInput.toLowerCase())})}},methods:{itemClicked:function(t){this.selected=t,this.selectItem(),this.popUp=!1},selectItem:function(){var t=this.matches[this.selected];this.$emit("itemSelected",t),this.inputFocus()},esc:function(){this.popUp=!1},up:function(){0!=this.selected&&(this.selected-=1,this.scrollToItem())},down:function(){this.selected>=this.matches.length-1||(this.selected+=1,this.scrollToItem())},inputFocus:function(){this.$refs.input.focus()},scrollToItem:function(){this.$refs.optionsList.scrollTop=this.selected*this.itemHeight}}}),_=I,g=(n("12d6"),Object(o["a"])(_,y,v,!1,null,"4496767f",null)),k=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thread"},[n("div",{staticClass:"message-box"},[n("div",{staticClass:"chat-header"},[t._v(" "+t._s(t.chatThread.author)+" "),n("span",[t._v(t._s(t.chatThread.date))])]),n("p",{domProps:{innerHTML:t._s(t.chatThread.text)}})]),t._l(t.chatThread.replyThread,function(e){return n("div",{key:e.id,staticClass:"reply-box"},[n("div",{staticClass:"chat-header"},[t._v(t._s(e.author)+" "),n("span",[t._v(t._s(e.date))])]),n("p",{domProps:{innerHTML:t._s(e.text)}})])}),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.replybtn,expression:"!replybtn"}],staticClass:"reply-btn",on:{click:t.hdlbtn}},[t._v("Reply")]),n("xf-chat-input",{directives:[{name:"show",rawName:"v-show",value:t.replybtn,expression:"replybtn"}],ref:"customInput",attrs:{chatInput:t.replyInput,users:t.users},on:{"update:chatInput":function(e){t.replyInput=e},"update:chat-input":function(e){t.replyInput=e},btnClick:t.hdlReply,itemSelected:t.hdlSelected}})],2)},x=[],C={components:{XfChatInput:k},props:["chatThread","users"],data:function(){return{replybtn:!1,replyInput:""}},methods:{hdlbtn:function(){var t=this;this.replybtn=!this.replybtn,this.$nextTick(function(){t.$refs.customInput.inputFocus()})},hdlReply:function(){var t=this;this.replybtn=!this.replybtn;var e=new Date,n=e.getMonth()+1+"/"+e.getDay()+" "+e.getHours()+":"+e.getMinutes();if(""===this.replyInput)console.log("write a message",this.replyInput);else{var r=new RegExp(this.users.map(function(t){return"@"+t.name}).join("|"),"g");if(this.replyInput.match(r)){var s=this.replyInput.match(r),a=-1;this.replyInput=this.replyInput.replace(r,function(){return"<b>"+s[++a]+"</b>"});var i=s.map(function(e){return t.users.find(function(t){return t.name==e.substring(1)})});console.log("selected mentions are: ",JSON.parse(m()(i)))}this.chatThread.replyThread.push({text:this.replyInput,author:"you",date:n,reply:!1}),this.replyInput=""}},hdlSelected:function(t){var e=this.replyInput.slice(0,this.replyInput.lastIndexOf("@")),n=e+"@"+JSON.parse(m()(t)).name;this.replyInput=n}}},T=C,S=(n("24fd"),Object(o["a"])(T,w,x,!1,null,null,null)),O=S.exports,j={name:"xf-chat-box",components:{XfChatInput:k,XfChatThread:O},props:["threads","users"],data:function(){return{chatInput:""}},computed:{},methods:{hdlSend:function(){var t=this,e=new Date,n=e.getMonth()+1+"/"+e.getDay()+" "+e.getHours()+":"+e.getMinutes();if(""===this.chatInput)console.log("write a message",this.chatInput);else{var r=new RegExp(this.users.map(function(t){return"@"+t.name}).join("|"),"g");if(this.chatInput.match(r)){var s=this.chatInput.match(r),a=-1;this.chatInput=this.chatInput.replace(r,function(){return"<b>"+s[++a]+"</b>"});var i=s.map(function(e){return t.users.find(function(t){return t.name==e.substring(1)})});console.log("selected mentions are: ",JSON.parse(m()(i)))}this.threads.push({text:this.chatInput,author:"you",date:n,replyThread:[],reply:!1}),this.chatInput=""}},hdlSelected:function(t){var e=this.chatInput.slice(0,this.chatInput.lastIndexOf("@")),n=e+"@"+JSON.parse(m()(t)).name;this.chatInput=n}}},E=j,$=(n("81c8"),Object(o["a"])(E,h,d,!1,null,"24f965d8",null)),P=$.exports;r["a"].component("xf-chat-box",P),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"81c8":function(t,e,n){"use strict";var r=n("14b6"),s=n.n(r);s.a},d555:function(t,e,n){}});
//# sourceMappingURL=app.bf082bde.js.map