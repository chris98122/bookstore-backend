(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fce518"],{a21f:function(t,e,s){var i=s("584a"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},b789:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{"justify-center":"",wrap:""}},[s("v-flex",{attrs:{md12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"select-all":"","item-key":"name"},scopedSlots:t._u([{key:"headers",fn:function(e){return[s("tr",[s("th",[s("v-checkbox",{attrs:{primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._l(e.headers,function(e){return s("th",{key:e.text},[t._v("\n                "+t._s(e.text)+"\n              ")])})],2)]}},{key:"items",fn:function(e){return[s("tr",[s("td",[s("v-checkbox",{attrs:{"input-value":"true",primary:"","hide-details":""},model:{value:e.item.selected,callback:function(s){t.$set(e.item,"selected",s)},expression:"props.item.selected"}})],1),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.name))]),s("td",[s("img",{attrs:{src:e.item.url,width:"80px"}})]),s("td",{attrs:{width:1}},[s("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(t){e.item.bNum>1&&(e.item.bNum-=1)}}},[s("v-icon",{attrs:{small:""}},[t._v("\n                    mdi-minus\n                  ")])],1)],1),s("td",{attrs:{width:1}},[s("v-text-field",{attrs:{required:"",solo:""},model:{value:e.item.bNum,callback:function(s){t.$set(e.item,"bNum",s)},expression:"props.item.bNum"}})],1),s("td",{attrs:{width:1}},[s("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(t){e.item.bNum<e.item.stock&&(e.item.bNum+=1)}}},[s("v-icon",{attrs:{small:""}},[t._v("\n                    mdi-plus\n                  ")])],1)],1),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.price*e.item.bNum))]),s("td",[s("v-tooltip",{attrs:{top:"","content-class":"top"}},[s("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},slot:"activator"},[s("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),s("span",[t._v("Move out of cart")])],1)],1)])]}},{key:"footer",fn:function(){return[s("td"),s("td"),s("td"),s("td"),s("td",[t._v("Total Price:")]),s("td",{staticClass:"text-xs"},[t._v("$"+t._s(t.total_price()))]),s("td",{attrs:{width:1}},[s("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(e){return t.buy()}}},[t._v("\n                buy\n              ")])],1)]},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},o=[],n=(s("7f7f"),s("f499")),l=s.n(n),r={data:function(){return{publicPath:"/",selected:!0,headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:" "},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"  "},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/cart_show";this.axios.get(e).then(function(e){t.items=e.data,t.set_select(),console.log(e.data)}).catch(function(t){l()(t),console.log(t)})},methods:{toggleAll:function(){if(this.selected){this.selected=!1;for(var t=0;t<this.items.length;t++)this.items[t].selected=!1}else for(this.selected=!0,t=0;t<this.items.length;t++)this.items[t].selected=!0},total_price:function(){for(var t=0,e=0;e<this.items.length;e++)this.items[e].selected&&(t+=this.items[e].bNum*this.items[e].price);return t},buy:function(){var t=this;console.log(this.total_price());var e="http://localhost:8080/cart_buy";this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:e,data:{items:l()(this.items),tot_price:this.total_price()}}).then(function(e){console.log(t.items),console.log(t.total_price()),alert(e.data)}).catch(function(t){l()(t),console.log(t)})},set_select:function(){for(var t=[],e=0;e<this.items[0]["orderContent"].length;e++){var s=this.items[0]["orderContent"][e].bNum,i=this.items[0]["orderContent"][e].book.name,o=this.items[0]["orderContent"][e].book.price,n=this.items[0]["orderContent"][e].book.stock,l={bNum:s,name:i,price:o,stock:n,selected:!0};console.log(l),t[e]=l}this.items=t}}},a=r,c=s("2877"),u=Object(c["a"])(a,i,o,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-41fce518.b09885b5.js.map