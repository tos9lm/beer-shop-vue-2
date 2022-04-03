"use strict";(self["webpackChunkbeer_shop_vue_2"]=self["webpackChunkbeer_shop_vue_2"]||[]).push([[787],{5909:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{class:["beer-list-view"]},[e.filteredList.length>0&&e.beerListData.length>0?r("v-row",{class:["my-6"],attrs:{justify:"center"}},[r("v-col",{class:["d-flex","justify-center","paginated-class"],attrs:{cols:"12"}},[r("jw-pagination",{attrs:{items:e.beerListData},on:{changePage:e.onChangePage}})],1),e._l(e.filteredList,(function(t,a){return r("v-col",{key:a,attrs:{cols:"12",sm:"6",md:"3",lg:"2"}},[r("BeerListComponent",{attrs:{beer:t,"cart-include-beer":e.cartIncludeBeer(t)}})],1)}))],2):0==e.beerListData.length?r("v-row",{class:["my-6"]},[r("v-col",{attrs:{cols:"12"}},[e._v(" No beers available ")])],1):0==e.filteredList.length?r("v-row",{class:["my-6"]},[r("v-col",{class:["text-center"],attrs:{cols:"12"}},[r("h1",[e._v("No result from search")])])],1):e._e()],1)},n=[],s=r(4367),i=(r(7327),r(1539),r(6699),r(2023),r(8309),r(629)),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{class:["beer-list-component"],attrs:{elevation:"3"}},[r("v-responsive",{attrs:{"aspect-ratio":e.cardRatio}},[r("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","aspect-ratio":"1",src:e.beer.image_url}}),r("v-card-title",{domProps:{textContent:e._s(e.beer.name)}}),r("v-card-text",{staticClass:"text--primary"},[r("div",[r("b",[e._v("Volume:")]),e._v(" "+e._s(e.beerVolume))])]),r("v-card-actions",{class:["actions-style"]},[r("p",{class:["my-0","mx-3","font-weight-medium",e.classTextOrdered]},[e._v(" "+e._s(e.orderedMessage)+" ")]),r("v-spacer"),e.beerInCard?r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.pushBeerToCartList(e.beer)}}},[r("v-icon",[e._v("mdi-plus")])],1):r("v-btn",{attrs:{icon:""},on:{click:function(t){return e.deleteBeerToCartList(e.beer)}}},[r("v-icon",[e._v("mdi-minus")])],1)],1)],1)],1)},c=[],u=(r(9826),{name:"BeerListComponent",props:{beer:{type:Object,required:!1,default:function(){return{name:"",description:"",image_url:"",volume:{value:0,unit:""}}}},cartIncludeBeer:{type:Boolean,required:!1,default:!1}},computed:(0,s.Z)((0,s.Z)({},(0,i.Se)({cartList:"beer/getCartList"})),{},{cardRatio:function(){switch(this.$vuetify.breakpoint.name){case"xs":return.75;case"sm":return.6;case"xl":return 9/16;default:return 9/19}},classTextOrdered:function(){return this.cartIncludeBeer?"textOrdered":"textNotOrdered"},orderedMessage:function(){return this.cartIncludeBeer?"Ordered":"Not ordered"},beerInCard:function(){var e=this;return void 0===this.cartList.find((function(t){return t.id===e.beer.id}))},beerVolume:function(){return this.beer.volume.value+" "+this.beer.volume.unit}}),methods:(0,s.Z)({},(0,i.nv)({pushBeerToCartList:"beer/pushBeerToCartList",deleteBeerToCartList:"beer/deleteBeerToCartList"}))}),l=u,d=r(1001),v=r(3453),m=r.n(v),h=r(3150),b=r(3237),f=r(7118),p=r(6428),L=r(2829),g=r(3857),C=r(9762),_=(0,d.Z)(l,o,c,!1,null,"8ea8f5bc",null),B=_.exports;m()(_,{VBtn:h.Z,VCard:b.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VIcon:p.Z,VImg:L.Z,VResponsive:g.Z,VSpacer:C.Z});var T={name:"BeerListView",components:{BeerListComponent:B},computed:(0,s.Z)((0,s.Z)({},(0,i.Se)({beerListData:"beer/getBeerList",cartList:"beer/getCartList",valueToSearch:"beer/getValueToSearch"})),{},{conditionEmptyValueSearchBeer:function(){return""!=this.valueToSearch&&null!=this.valueToSearch&&void 0!=this.valueToSearch},filteredList:function(){var e=this;return this.beerListDataToUse.filter((function(t){return e.conditionEmptyValueSearchBeer?t.name.toLowerCase().includes(e.valueToSearch.toLowerCase()):t}))}}),methods:{cartIncludeBeer:function(e){var t=this.cartList.some((function(t){return t.id===e.id}));return!!t},onChangePage:function(e){this.beerListDataToUse=e}},data:function(){return{beerListDataToUse:[]}},watch:{beerListData:{immediate:!0,handler:function(e){this.beerListDataToUse=e}}}},V=T,Z=r(2102),x=r(9846),w=r(2877),y=(0,d.Z)(V,a,n,!1,null,null,null),S=y.exports;m()(y,{VCol:Z.Z,VContainer:x.Z,VRow:w.Z})}}]);
//# sourceMappingURL=BeerList-legacy.d8e9ccdc.js.map