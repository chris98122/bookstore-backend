(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6c927b"],{"159d":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order time","single-line":"","hide-details":""},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[r("template",{slot:"append"},[r("v-icon",[e._v("mdi-magnify")])],1)],2)],1),r("v-flex",{attrs:{md12:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,search:e.search,"hide-actions":""},scopedSlots:e._u([{key:"headerCell",fn:function(t){var s=t.header;return[r("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(s.text)}})]}},{key:"items",fn:function(t){var s=t.item;return[r("td",[e._v("\n            "+e._s(s.id)+"\n          ")]),r("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(s.date)+"\n          ")]),r("td",[e._v("\n            "+e._s(s.totPrice)+"\n          ")]),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["book"]["name"])+"\n            ")])}),0),r("td"),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["bNum"])+"\n            ")])}),0),r("td",e._l(s.orderContent,function(t){return r("tr",{key:t.id},[e._v("\n              "+e._s(t["book"]["price"])+"\n            ")])}),0)]}}])})],1)],1)],1)},a=[],n=r("f499"),i=r.n(n),o={data:function(){return{search:"",search2:"",publicPath:"/",headers:[{sortable:!1,text:"OrderID",value:"id"},{sortable:!1,text:"OrderTime",value:"date"},{sortable:!1,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[]}},mounted:function(){var e=this,t="http://localhost:8080/orders_show";this.axios.get(t).then(function(t){"用户未登录"===t.data?e.orders=["你还没有登录哦"]:e.orders.push(t.data),console.log(e.orders)}).catch(function(e){i()(e),console.log(e)})},methods:{clear:function(){for(var e=0,t=0;t<this.orders.length;t++)this.orders[t].id===e?(e=this.orders[t].id,this.orders[t].id="",this.orders[t].date="",this.orders[t].totPrice=""):e=this.orders[t].id}}},l=o,d=r("2877"),c=Object(d["a"])(l,s,a,!1,null,null,null);t["default"]=c.exports},a21f:function(e,t,r){var s=r("584a"),a=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},f499:function(e,t,r){e.exports=r("a21f")}}]);
//# sourceMappingURL=chunk-2c6c927b.0d8346f5.js.map