(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab565"],{"159d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-text-field",t._g({attrs:{readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{staticClass:"dt",attrs:{dark:"","no-title":"",color:"green lighten-1",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),n("v-btn",{attrs:{color:"blue"},on:{click:function(e){return t.searchdate(t.date)}}},[t._v("search")])],1),n("v-text-field",{attrs:{"append-icon":"search",label:"Search  ","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("template",{slot:"append"},[n("v-icon",[t._v("mdi-magnify")])],1)],2),n("v-flex",{attrs:{md12:""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,search:t.search,pagination:t.pagination,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right","sort-icon":"mdi-menu-down"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headerCell",fn:function(e){var a=e.header;return[n("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(a.text)}})]}},{key:"items",fn:function(e){var a=e.item;return[n("td",[t._v("\n            "+t._s(a.id)+"\n          ")]),n("td",{staticClass:"text-xs"},[t._v("\n            "+t._s(a.date)+"\n          ")]),n("td",[t._v("\n            "+t._s(a.totPrice)+"\n          ")]),n("td",t._l(a.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["book"]["name"])+"\n            ")])}),0),n("td"),n("td",t._l(a.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["bNum"])+"\n            ")])}),0),n("td",t._l(a.orderContent,function(e){return n("tr",{key:e.id},[t._v("\n              "+t._s(e["book"]["price"])+"\n            ")])}),0)]}}])})],1)],1)],1)},r=[],o={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,search:"",publicPath:"/",headers:[{sortable:!1,text:"OrderID",value:"id"},{sortable:!1,text:"OrderTime",value:"date"},{sortable:!1,text:"TotalPrice",value:"totPrice"},{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"Price",value:"price"}],orders:[]}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{},mounted:function(){var t=this,e="http://localhost:8080/orders_show";this.axios.get(e).then(function(e){"用户未登录"===e.data?t.orders=["你还没有登录哦"]:t.orders=e.data,console.log(t.orders)}).catch(function(t){JSON.stringify(t),console.log(t)})},methods:{searchdate:function(t){var e=this;this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:"http://localhost:8080/order_search",data:this.$qs.stringify({date:t})}).then(function(t){e.orders=t.data,console.log(t.data)}).catch(function(t){JSON.stringify(t),console.log(t)})},getDate:function(){var t=function(t){return t<10?"0"+t:t},e=new Date,n=e.getFullYear(),a=t(e.getMonth()+1),r=t(e.getDate());return"".concat(r,"/").concat(a,"/").concat(n)}}},i=o,s=n("17cc"),c=Object(s["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ab565.0440fa65.js.map