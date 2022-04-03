"use strict";(self["webpackChunkbeer_shop_vue_2"]=self["webpackChunkbeer_shop_vue_2"]||[]).push([[897],{8378:function(e,t,r){r.r(t),r.d(t,{default:function(){return V}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{class:["beer-cart-view"]},[e.cartList.length>0&&e.filteredList.length>0?r("v-row",{class:["my-6"]},e._l(e.cartList,(function(e,t){return r("v-col",{key:t,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[r("BeerCartComponent",{attrs:{beer:e}})],1)})),1):0==e.cartList.length?r("v-row",{class:["my-6"]},[r("v-col",{class:["text-center"],attrs:{cols:"12"}},[r("h1",[e._v("You have not added any beers to your cart!")])])],1):r("v-row",{class:["my-6"]},[r("v-col",{class:["text-center"],attrs:{cols:"12"}},[r("h1",[e._v("No result from search")])])],1)],1)},n=[],o=r(4367),c=(r(7327),r(1539),r(6699),r(2023),r(8309),r(629)),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{class:["beer-cart-component"]},[r("v-img",{class:["white--text","align-end"],attrs:{gradient:"to bottom, rgba(0,0,0,.17) 40%, rgba(0,0,0,.8)","aspect-ratio":1,src:e.beer.image_url}},[r("v-card-title",{style:e.titleStyle,domProps:{textContent:e._s(e.beer.name)}})],1)],1)},s=[],i={name:"BeerCartComponent",computed:{titleStyle:function(){return{color:this.$vuetify.theme.themes.light.title}}},props:{beer:{type:Object,required:!0,default:function(){return{name:"",image_url:""}}}}},u=i,h=r(1001),m=r(3453),v=r.n(m),d=r(3237),f=r(7118),p=r(2829),b=(0,h.Z)(u,l,s,!1,null,"3588549e",null),C=b.exports;v()(b,{VCard:d.Z,VCardTitle:f.EB,VImg:p.Z});var g={name:"BeerCartView",components:{BeerCartComponent:C},computed:(0,o.Z)((0,o.Z)({},(0,c.Se)({cartList:"beer/getCartList",valueToSearch:"beer/getValueToSearch"})),{},{conditionEmptyValueSearchBeer:function(){return""!=this.valueToSearch&&null!=this.valueToSearch&&void 0!=this.valueToSearch},filteredList:function(){var e=this;return this.cartList.filter((function(t){return e.conditionEmptyValueSearchBeer?t.name.toLowerCase().includes(e.valueToSearch.toLowerCase()):t}))}}),watch:{valueToSearch:function(e){console.log("valueToSearch:",e)}}},_=g,y=r(2102),S=r(9846),w=r(2877),L=(0,h.Z)(_,a,n,!1,null,"0ad446f3",null),V=L.exports;v()(L,{VCol:y.Z,VContainer:S.Z,VRow:w.Z})}}]);
//# sourceMappingURL=BeerCart-legacy.f9cba8d6.js.map