(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b23b6"],{"22dd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("router-link",{attrs:{to:"/on_shelf"}},[t._v("On shelf\n\n      ")])],1),a("v-flex",{attrs:{xs3:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",{staticClass:"text-lg-left",attrs:{width:"200px"}},[a("router-link",{attrs:{to:"/book_detail"}},[t._v("\n                "+t._s(s.name)+"\n            ")])],1),a("td",[a("router-link",{attrs:{to:"/book_detail"}},[a("img",{attrs:{src:s.url,width:"80px"}})])],1),a("td",{staticClass:"text-xs"},[t._v(t._s(s.author))]),a("td",[a("v-text-field",{attrs:{required:"",solo:""},model:{value:s.stock,callback:function(e){t.$set(s,"stock",e)},expression:"item.stock"}})],1),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),a("span",[t._v("submit")])],1)],1),a("td",{staticClass:"text-xs"},[t._v(t._s(s.ISBN))]),a("td",[a("v-text-field",{attrs:{required:"",solo:""},model:{value:s.price,callback:function(e){t.$set(s,"price",e)},expression:"item.price"}})],1),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple right",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-upload")])],1),a("span",[t._v("submit")])],1)],1),a("td",[a("v-tooltip",{attrs:{top:"","content-class":"top"}},[a("v-btn",{staticClass:"v-btn--simple right",attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",{attrs:{color:"blue"}},[t._v("mdi-download")])],1),a("span",[t._v("Off Shelf")])],1)],1)]}}])})],1)],1)],1)},o=[],r={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:"Author",value:"author"},{sortable:!1,text:"Stock",value:"stock"},{sortable:!1,text:" ",value:"stock"},{sortable:!1,text:"ISBN",value:"ISBN"},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"    ",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[{name:"javascript tutorial",author:"author one",stock:7,ISBN:9787111216332,price:35,url:"1.jpg"},{name:"javascript tutorial second version",author:"author two",stock:9,ISBN:9787111216322,price:12,url:"4.jpg"},{name:"Python Crash Course",author:"埃里",stock:9,ISBN:9787115428028,price:10,url:"2.jpg"}]}}},l=r,i=a("2877"),n=Object(i["a"])(l,s,o,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0b23b6.4dcd55f9.js.map