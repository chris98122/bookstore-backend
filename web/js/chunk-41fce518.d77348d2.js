(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41fce518"],{a21f:function(t,e,o){var i=o("584a"),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},b789:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[o("v-layout",{attrs:{"justify-center":"",wrap:""}},[o("v-flex",{attrs:{md12:""}},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"select-all":"","item-key":"name"},scopedSlots:t._u([{key:"headers",fn:function(e){return[o("tr",[o("th",[o("v-checkbox",{attrs:{primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll()}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t._l(e.headers,function(e){return o("th",{key:e.text},[t._v("\n                "+t._s(e.text)+"\n              ")])})],2)]}},{key:"items",fn:function(e){return[o("tr",[o("td",[o("v-checkbox",{attrs:{"input-value":"true",primary:"","hide-details":""},model:{value:e.item.selected,callback:function(o){t.$set(e.item,"selected",o)},expression:"props.item.selected"}})],1),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.name))]),o("td",[o("img",{attrs:{src:e.item.url,width:"80px"}})]),o("td",{attrs:{width:1}},[o("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(t){e.item.bNum>1&&(e.item.bNum-=1)}}},[o("v-icon",{attrs:{small:""}},[t._v("\n                    mdi-minus\n                  ")])],1)],1),o("td",{attrs:{width:1}},[o("v-text-field",{attrs:{required:"",solo:""},model:{value:e.item.bNum,callback:function(o){t.$set(e.item,"bNum",o)},expression:"props.item.bNum"}})],1),o("td",{attrs:{width:1}},[o("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(t){e.item.bNum<e.item.stock&&(e.item.bNum+=1)}}},[o("v-icon",{attrs:{small:""}},[t._v("\n                    mdi-plus\n                  ")])],1)],1),o("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.price*e.item.bNum))]),o("td",[o("v-tooltip",{attrs:{top:"","content-class":"top"}},[o("v-btn",{staticClass:"v-btn--simple",attrs:{slot:"activator",color:"danger",icon:""},on:{click:function(o){return t.moveout(e.item.id)}},slot:"activator"},[o("v-icon",{attrs:{color:"error"}},[t._v("mdi-close")])],1),o("span",[t._v("Move out of cart")])],1)],1)])]}},{key:"footer",fn:function(){return[o("td"),o("td"),o("td"),o("td"),o("td",[t._v("Total Price:")]),o("td",{staticClass:"text-xs"},[t._v("$"+t._s(t.total_price()))]),o("td",{attrs:{width:1}},[o("v-btn",{attrs:{icon:"",color:"blue lighten-2"},on:{click:function(e){return t.buy()}}},[t._v("\n                buy\n              ")])],1)]},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)},s=[],n=(o("7f7f"),o("f499")),r=o.n(n),a={data:function(){return{publicPath:"/",selected:!0,headers:[{sortable:!1,text:"BookName",value:"name"},{sortable:!1,text:"BookPic",value:"pic"},{sortable:!1,text:" "},{sortable:!1,text:"Number",value:"bNum"},{sortable:!1,text:"  "},{sortable:!1,text:"Price",value:"price"},{sortable:!1,text:"Action",value:"action",align:"right"}],items:[]}},mounted:function(){var t=this,e="http://localhost:8080/cart_show";this.axios.get(e).then(function(e){t.items=e.data,t.set_select(),console.log(e.data)}).catch(function(t){r()(t),console.log(t)})},methods:{toggleAll:function(){if(this.selected){this.selected=!1;for(var t=0;t<this.items.length;t++)this.items[t].selected=!1}else for(this.selected=!0,t=0;t<this.items.length;t++)this.items[t].selected=!0},total_price:function(){for(var t=0,e=0;e<this.items.length;e++)this.items[e].selected&&(t+=this.items[e].bNum*this.items[e].price);return t},buy:function(){var t=this;console.log(this.total_price());var e="http://localhost:8080/cart_buy";this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:e,data:this.$qs.stringify({item:r()(this.items),totprice:this.total_price()},{arrayFormat:"brackets"})}).then(function(e){console.log(t.items),console.log(t.total_price()),alert(e.data)}).catch(function(t){r()(t),console.log(t)})},moveout:function(t){var e="http://localhost:8080/cart_moveout";this.axios({headers:{"Content-type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"post",url:e,data:this.$qs.stringify({bid:t},{arrayFormat:"brackets"})}).then(function(t){alert(t.data)}).catch(function(t){r()(t),console.log(t)})},set_select:function(){for(var t=[],e=0;e<this.items[0]["orderContent"].length;e++){var o=this.items[0]["orderContent"][e].book.id,i=this.items[0]["orderContent"][e].bNum,s=this.items[0]["orderContent"][e].book.name,n=this.items[0]["orderContent"][e].book.price,r=this.items[0]["orderContent"][e].book.stock,a={id:o,bNum:i,name:s,price:n,stock:r,selected:!0};console.log(a),t[e]=a}this.items=t}}},l=a,c=o("2877"),u=Object(c["a"])(l,i,s,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,o){t.exports=o("a21f")}}]);
//# sourceMappingURL=chunk-41fce518.d77348d2.js.map