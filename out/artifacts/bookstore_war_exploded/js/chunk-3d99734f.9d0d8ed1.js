(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d99734f"],{a21f:function(t,e,a){var s=a("584a"),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},ba51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("template",{slot:"append"},[a("v-icon",[t._v("mdi-magnify")])],1)],2)],1),a("v-flex",{attrs:{md12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-actions":""},scopedSlots:t._u([{key:"headerCell",fn:function(e){var s=e.header;return[a("span",{staticClass:"subheading font-weight-light text-success text--darken-3",domProps:{textContent:t._s(s.text)}})]}},{key:"items",fn:function(e){var s=e.item;return[a("td",{staticClass:"text-md-left"},[t._v("\n              "+t._s(s.name)+"\n            ")]),a("td",{staticClass:"text-md-left"},[t._v(t._s(s.id))]),a("td",{staticClass:"right"},[a("toggle-button",{attrs:{labels:{checked:"启用",unchecked:"禁用"}},model:{value:s.isActive,callback:function(e){t.$set(s,"isActive",e)},expression:"item.isActive"}})],1),a("td")]}}])})],1)],1)],1)},n=[],i=a("f499"),l=a.n(i),r={data:function(){return{search:"",publicPath:"/",headers:[{sortable:!1,text:"UserName",value:"name"},{sortable:!1,text:"UserID",value:"id"},{sortable:!1,text:"Action",value:"isActive",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/manageuser";this.axios.get(e).then(function(e){t.items=e.data,console.log(e.data)}).catch(function(t){l()(t),console.log(t)})}},c=r,o=a("2877"),d=Object(o["a"])(c,s,n,!1,null,null,null);e["default"]=d.exports},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-3d99734f.9d0d8ed1.js.map