(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ef25"],{b210:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",{staticClass:"text-lg-left",attrs:{width:"200px"}},[a("router-link",{attrs:{to:"/book_detail"}},[t._v("\n                "+t._s(s.name)+"\n            ")])],1),a("td",[a("router-link",{attrs:{to:"/book_detail"}},[a("img",{attrs:{src:s.url,width:"80px"}})])],1),a("td",{staticClass:"text-xs"},[t._v(t._s(s.author))]),a("td",{staticClass:"text-xs"},[t._v(t._s(s.stock))]),a("td",{staticClass:"text-xs"},[t._v(t._s(s.ISBN))]),a("td",{staticClass:"text-xs"},[t._v("$"+t._s(s.price))]),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-cart")])],1),a("span",[t._v("Move in cart")])],1)],1)]}}])})],1)],1)],1)},r=[],o={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!1,text:"ISBN",value:"ISBN"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[{name:"javascript tutorial",author:"author one",stock:7,ISBN:9787111216332,price:35,url:"1.jpg",detail_url:"/book_detail"},{name:"javascript tutorial second version",author:"author two",stock:9,ISBN:9787111216322,price:12,url:"4.jpg"},{name:"Python Crash Course",author:"埃里",stock:9,ISBN:9787115428028,price:10,url:"2.jpg"}]}}},i=o,l=a("2877"),n=Object(l["a"])(i,s,r,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d20ef25.6e6cd516.js.map