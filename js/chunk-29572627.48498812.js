(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29572627"],{"1be4":function(t,e,s){var n=s("d066");t.exports=n("document","documentElement")},"37e8":function(t,e,s){var n=s("83ab"),i=s("aed9"),l=s("9bf2"),o=s("825a"),r=s("fc6a"),a=s("df75");e.f=n&&!i?Object.defineProperties:function(t,e){o(t);var s,n=r(e),i=a(e),d=i.length,c=0;while(d>c)l.f(t,s=i[c++],n[s]);return t}},"44d2":function(t,e,s){var n=s("b622"),i=s("7c73"),l=s("9bf2").f,o=n("unscopables"),r=Array.prototype;void 0==r[o]&&l(r,o,{configurable:!0,value:i(null)}),t.exports=function(t){r[o][t]=!0}},6189:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},i=[],l=(s("caad"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const e=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,s=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===s)return;const n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),i=this.$refs.hContainer,l=s.offsetWidth*this.ids.length;let o=n?s.offsetLeft-i.offsetLeft:s.offsetLeft;const r=i.offsetWidth/s.offsetWidth;r>1&&l-o<i.offsetWidth&&(o=l-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-o},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}}),o=l,r=(s("ac46"),s("2877")),a=Object(r["a"])(o,n,i,!1,null,"22adfd6b",null);e["a"]=a.exports},7596:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slyder-b"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,n){return s("div",{key:"key-"+t.getId(n),staticClass:"slyder-b__slyde",attrs:{id:t.getId(n)}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[s("figure",{staticClass:"slyder-b__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",{domProps:{innerHTML:t._s(e.leyendaImagen)}}):t._e()])]),s("div",{staticClass:"col-lg-4 order-lg-1"},[e.hasOwnProperty("titulo")?s("h3",{domProps:{innerHTML:t._s(e.titulo)}}):t._e(),s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(n+1)+"/"+t._s(t.datos.length))]),n-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),n!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(n+1)},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===n?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])])})),0):t._e()],1)},i=[],l=s("c73e"),o=s("6189"),r={name:"SlyderB",components:{ScrollHorizontal:o["a"]},mixins:[l["a"]],data:()=>({mostrarIndicador:!0}),mounted(){this.selected=this.getId(0)}},a=r,d=s("2877"),c=Object(d["a"])(a,n,i,!1,null,null,null);e["default"]=c.exports},"7c73":function(t,e,s){var n,i=s("825a"),l=s("37e8"),o=s("7839"),r=s("d012"),a=s("1be4"),d=s("cc12"),c=s("f772"),u=">",f="<",h="prototype",m="script",p=c("IE_PROTO"),g=function(){},v=function(t){return f+m+u+t+f+"/"+m+u},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},_=function(){var t,e=d("iframe"),s="java"+m+":";return e.style.display="none",a.appendChild(e),e.src=String(s),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},b=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&n?y(n):_():y(n);var t=o.length;while(t--)delete b[h][o[t]];return b()};r[p]=!0,t.exports=Object.create||function(t,e){var s;return null!==t?(g[h]=i(t),s=new g,g[h]=null,s[p]=t):s=b(),void 0===e?s:l.f(s,e)}},"818d":function(t,e,s){},ac46:function(t,e,s){"use strict";s("818d")},c73e:function(t,e,s){"use strict";e["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}},caad:function(t,e,s){"use strict";var n=s("23e7"),i=s("4d64").includes,l=s("d039"),o=s("44d2"),r=l((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:r},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},df75:function(t,e,s){var n=s("ca84"),i=s("7839");t.exports=Object.keys||function(t){return n(t,i)}}}]);
//# sourceMappingURL=chunk-29572627.48498812.js.map