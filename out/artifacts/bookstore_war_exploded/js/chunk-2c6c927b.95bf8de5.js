(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c6c927b"],{"159d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{xs4:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search order time","single-line":"","hide-details":""},model:{value:e.search2,callback:function(t){e.search2=t},expression:"search2"}},[s("template",{slot:"append"},[s("v-icon",[e._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{xs4:""}},[s("v-text-field",{attrs:{"append-icon":"search",label:"Search order id","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[s("template",{slot:"append"},[s("v-icon",[e._v("mdi-magnify")])],1)],2)],1),s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.orders,search:e.search,"hide-actions":""},scopedSlots:e._u([{key:"headerCell",fn:function(t){var a=t.header;return[s("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:e._s(a.text)}})]}},{key:"items",fn:function(t){var a=t.item;return[e.sameorder?e._e():s("td",[e._v("\n            "+e._s(e.test(a.id))+"\n            "+e._s(a.id)+"\n          ")]),e.sameorder?e._e():s("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(a.date)+"\n          ")]),e.sameorder?e._e():s("td",[e._v("\n            "+e._s(a.totPrice)+"\n          ")]),s("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(a.name)+"\n          ")]),s("td",{staticClass:"text-xs"}),s("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(a.bNum)+"\n          ")]),s("td",{staticClass:"text-xs"},[e._v("\n            "+e._s(a.price)+"\n          ")])]}}])})],1)],1)],1)},r=[],n=s("f499"),i=s.n(n),o={data:function(){return{search:"",search2:"",publicPath:"/",sameorder:!1,id:0,headers:[{sortable:!1,text:"OrderID",value:"id"},{sortable:!1,text:"OrderTime",value:"date"},{sortable:!1,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[]}},mounted:function(){var e=this,t="http://localhost:8080/orders_show";this.axios.get(t).then(function(t){e.orders=t.data,console.log(t.data)}).catch(function(e){i()(e),console.log(e)})},methods:{test:function(e){this.id==e?this.sameorder=!0:this.sameorder=!1}}},l=o,c=s("2877"),d=Object(c["a"])(l,a,r,!1,null,null,null);t["default"]=d.exports},a21f:function(e,t,s){var a=s("584a"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},f499:function(e,t,s){e.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-2c6c927b.95bf8de5.js.map