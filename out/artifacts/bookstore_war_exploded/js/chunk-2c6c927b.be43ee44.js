(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6c927b"],{"159d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search order time","single-line":"","hide-details":""},model:{value:t.search2,callback:function(e){t.search2=e},expression:"search2"}},[s("template",{slot:"append"},[s("v-icon",[t._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{xs4:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("template",{slot:"append"},[s("v-icon",[t._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[s("td",[t._v("\n            "+t._s(a.id)+"\n          ")]),s("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.date)+"\n          ")]),s("td",[t._v("\n            "+t._s(a.totPrice)+"\n          ")]),s("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.name)+"\n          ")]),s("td",{staticClass:"text-xs"}),s("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.bNum)+"\n          ")]),s("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.price)+"\n          ")])]}}])})],1)],1)],1)},r=[],i=s("f499"),n=s.n(i),o={data:function(){return{search:"",search2:"",publicPath:"/",headers:[{sortable:!1,text:"OrderID",value:"id"},{sortable:!1,text:"OrderTime",value:"date"},{sortable:!1,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[]}},mounted:function(){var t=this,e="http://localhost:8080/orders_show";this.axios.get(e).then(function(e){t.orders=e.data,console.log(e.data)}).catch(function(t){n()(t),console.log(t)})},methods:{clear:function(){for(var t=0,e=0;e<this.orders.length;e++)this.orders[e].id===t?(t=this.orders[e].id,this.orders[e].id="",this.orders[e].date="",this.orders[e].totprice=""):t=this.orders[e].id;return sum}}},l=o,c=s("2877"),d=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=d.exports},a21f:function(t,e,s){var a=s("584a"),r=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-2c6c927b.be43ee44.js.map