(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab565"],{"159d":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order time","single-line":"","hide-details":""},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{md12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,search:e.search,"hide-actions":""},scopedSlots:e._u([{key:"headerCell",fn:function(t){var s=t.header;return[r("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(s.text)}})]}},{key:"items",fn:function(t){var s=t.item;return[r("td",[e._v("\n            "+e._s(s.id)+"\n          ")]),r("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(s.date)+"\n          ")]),r("td",[e._v("\n            "+e._s(s.totPrice)+"\n          ")]),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["book"]["name"])+"\n            ")])}),0),r("td"),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["bNum"])+"\n            ")])}),0),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["book"]["price"])+"\n            ")])}),0)]}}])})],1)],1)],1)},a=[],n={data:function(){return{search:"",search2:"",publicPath:"/",headers:[{sortable:!1,text:"OrderID",value:"id"},{sortable:!1,text:"OrderTime",value:"date"},{sortable:!1,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[]}},mounted:function(){var e=this,t="http://localhost:8080/orders_show";this.axios.get(t).then(function(t){e.orders=t.data,console.log(t.data)}).catch(function(e){JSON.stringify(e),console.log(e)})},methods:{clear:function(){for(var e=0,t=0;t<this.orders.length;t++)this.orders[t].id===e?(e=this.orders[t].id,this.orders[t].id="",this.orders[t].date="",this.orders[t].totPrice=""):e=this.orders[t].id}}},i=n,o=r("17cc"),l=Object(o["a"])(i,s,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0ab565.33316513.js.map