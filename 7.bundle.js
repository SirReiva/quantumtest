(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{18:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var s=n(3),a=n(1);const o=[{resolve:()=>n.e(0).then(n.bind(null,20)).then(t=>t.default)},{resolve:()=>n.e(2).then(n.bind(null,22)).then(t=>t.default)},{resolve:()=>n.e(0).then(n.bind(null,20)).then(t=>t.default)}],b=[{icon:"adjust",text:"Settings"},{icon:"bar-chart",text:"Stats"},{icon:"book",text:"History"}];class c extends s.q{constructor(){super({num:0})}template(){return Object(a.b)("q-scafold",null,Object(a.b)("q-appbar",{shadow:!0},Object(a.b)("q-toolbarbutton",{onClick:()=>{s.j.instances.main.open()},slot:"start"},Object(a.b)("q-icon",{icon:"bars"})),Object(a.b)("span",null,"TABS "+this.props.num)),Object(a.b)("q-content",null,Object(a.b)("q-tabstack",{animated:!0,hidebars:!0,ref:"tabs",index:this.props.num,onChange:t=>this.onchangeTab(t),routes:o})),Object(a.b)("q-tabbar",{items:b,top:!0,topshadow:!0,index:this.props.num,onChange:t=>this.onchangeTab(t)}))}styles(){return super.styles()+""}onchangeTab(t){this.props.num=t.detail}}c.tagName="q-page3"}}]);