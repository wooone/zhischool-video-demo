import{I as K}from"./COF9i6B0.js";import{e as W,g as X}from"./BwRMJ7H9.js";import{p as Z}from"./BfF1afV6.js";import{_ as g}from"./BWMx8VcQ.js";import{c as w,m as ee,b as se,y as ae,C as te,w as le,g as ne,e as oe,v as re}from"./DS1vFCdY.js";import{E as ce}from"./CeOc2pPt.js";import{e as $,j as h,o as c,h as _,w as a,r as k,m as ue,f as e,b as s,n as E,T as S,U as j,E as ie,x as de,g as x,y as me,N as fe,q as pe,p as _e,c as C,a as m,i as ve,F as P,k as O,H as ge,d as f,t as b,v as he,D as ye}from"./C1mGvpVk.js";import{c as N}from"./DfOpl1xg.js";import{a as Ce,b as be,c as $e,d as xe,e as we,_ as ke}from"./i4YO_Fr_.js";import{_ as Ie}from"./BHDqqyDz.js";import{f as Pe,_ as Ee,a as Se,b as je,c as Ne,d as Ae,e as Oe,g as Qe}from"./BWcMhmHg.js";import{_ as Be}from"./CdQVZIS9.js";import{a as Le}from"./D4NO1POk.js";import{g as D}from"./rIQXTI0U.js";import"./DlAUqK2U.js";import"./CgGzKyyz.js";import"./B1BkOJfh.js";import"./DgZD5969.js";import"./Cx9m3wYf.js";import"./3tH5B2MA.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=N("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=N("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=N("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=N("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]),Me=$({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(d){const l=d,u=h(()=>{const{class:n,...r}=l;return r});return(n,r)=>(c(),_(e(ee),ue(u.value,{class:e(w)("w-9 h-9 flex items-center justify-center",l.class)}),{default:a(()=>[k(n.$slots,"default",{},()=>[s(e(ce))])]),_:3},16,["class"]))}}),ze=$({__name:"PaginationFirst",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(d){const l=d,u=h(()=>{const{class:n,...r}=l;return r});return(n,r)=>(c(),_(e(se),S(j(u.value)),{default:a(()=>[s(e(g),{class:E(e(w)("w-10 h-10 p-0",l.class)),variant:"outline"},{default:a(()=>[k(n.$slots,"default",{},()=>[s(e(Ve),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),Ue=$({__name:"PaginationLast",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(d){const l=d,u=h(()=>{const{class:n,...r}=l;return r});return(n,r)=>(c(),_(e(ae),S(j(u.value)),{default:a(()=>[s(e(g),{class:E(e(w)("w-10 h-10 p-0",l.class)),variant:"outline"},{default:a(()=>[k(n.$slots,"default",{},()=>[s(e(He),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),De=$({__name:"PaginationNext",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(d){const l=d,u=h(()=>{const{class:n,...r}=l;return r});return(n,r)=>(c(),_(e(te),S(j(u.value)),{default:a(()=>[s(e(g),{class:E(e(w)("w-10 h-10 p-0",l.class)),variant:"outline"},{default:a(()=>[k(n.$slots,"default",{},()=>[s(e(Re),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),Fe=$({__name:"PaginationPrev",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(d){const l=d,u=h(()=>{const{class:n,...r}=l;return r});return(n,r)=>(c(),_(e(le),S(j(u.value)),{default:a(()=>[s(e(g),{class:E(e(w)("w-10 h-10 p-0",l.class)),variant:"outline"},{default:a(()=>[k(n.$slots,"default",{},()=>[s(e(Te),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16))}}),z=D`
query listOpenQuestion {
  listOpenQuestions {
    description
    image
    id
    chatroom {
      authorizedResource
      id
      chatroomId
      owner {
        id
        name
      }
    }
    solvedAt
    subject
    assignee {
      account
      id
      name
    }
  }
}
`,Ye={class:"h-screen"},Ge={class:"max-w-6xl mx-auto"},qe={class:"flex items-center justify-start gap-3 my-5"},Je=["onClick"],Ke=["src"],We={class:"text-sm text-gray-500"},Xe={class:"flex flex-1 flex-col gap-1"},Ze={class:"font-semibold md:text-xl text-base"},es={class:"text-sm font-medium my-1"},U=10,$s=$({__name:"question-pool",async setup(d){let l,u;const{data:n}=([l,u]=ie(()=>ge(z)),l=await l,u(),l),{result:r,refetch:Q}=de(z,null,{fetchPolicy:"network-only"}),B=x(1),L=h(()=>{var t;const i=(B.value-1)*U;return((t=n.value)==null?void 0:t.listOpenQuestions.slice(i,i+U))||[]}),T=x(!1),F=D`
  mutation acceptQuestion($questionId: Int!) {
    acceptQuestion(questionId: $questionId)
  }
`,{mutate:Y}=me(F),G=async i=>{try{await Y({questionId:i}),T.value=!0,Q(),ye("/home")}catch(t){console.error("Accept failed",t)}};fe(()=>{Q()}),pe(()=>{r.value&&(n.value=r.value)});const q=x([{label:"全部",value:"All"},{label:"英文",value:"ENGLISH"},{label:"數學",value:"MATH"},{label:"中文",value:"CHINESE"},{label:"物理",value:"PHYSICS"},{label:"化學",value:"CHEMISTRY"},{label:"地科",value:"EARTH_SCIENCE"},{label:"生物",value:"BIOLOGY"}]),y=x(""),A=h(()=>y.value==="All"||y.value===""?L.value:L.value.filter(i=>i.subject===y.value)),I=x([]),R=()=>{I.value=A.value.map(()=>!1)};R(),_e(()=>A.value,R);const V=i=>{I.value[i]=!1},J=i=>{I.value[i]=!0};return(i,t)=>{var H;return c(),C("div",Ye,[s(W),m("div",Ge,[m("div",qe,[t[2]||(t[2]=m("label",{class:"pl-4 font-bold text-sm"},"篩選科目:",-1)),s(e(ke),{modelValue:e(y),"onUpdate:modelValue":t[0]||(t[0]=o=>ve(y)?y.value=o:null)},{default:a(()=>[s(e(Ce),{class:"w-[180px]"},{default:a(()=>[s(e(be),{placeholder:"All"})]),_:1}),s(e($e),null,{default:a(()=>[s(e(xe),null,{default:a(()=>[s(e(Ie),null,{default:a(()=>t[1]||(t[1]=[f("請選擇科目")])),_:1}),(c(!0),C(P,null,O(e(q),o=>(c(),_(e(we),{value:o.value},{default:a(()=>[f(b(o.label),1)]),_:2},1032,["value"]))),256))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),(c(!0),C(P,null,O(e(A),(o,v)=>(c(),C("div",{key:v,class:"bg-white flex items-center justify-between gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent mx-3 my-3"},[m("button",{onClick:p=>J(v),class:"w-[100px] h-[100px] p-0 m-0 flex flex-shrink-0"},[m("img",{src:o.image&&o.image!=="None"?o.image:e(Z),alt:"question image",class:"h-[100px] w-[100px] object-cover rounded-xl"},null,8,Ke)],8,Je),s(X,{isOpen:e(I)[v],onClose:p=>V(v)},{title:a(()=>[f("問題 "+b(o.id),1)]),content:a(()=>[m("p",We,b(o.description),1),o.image?(c(),_(K,{key:0,src:o.image,alt:"question image",class:"w-full h-auto rounded-lg object-cover mt-2"},null,8,["src"])):he("",!0)]),footer:a(()=>[s(e(g),{onClick:p=>V(v)},{default:a(()=>t[3]||(t[3]=[f(" 關閉 ")])),_:2},1032,["onClick"])]),_:2},1032,["isOpen","onClose"]),m("div",Xe,[m("h1",Ze,b(o.description.substring(0,12))+"... ",1),m("p",es," 科目: "+b(e(Le)[o.subject]||o.subject),1)]),m("div",null,[s(e(Qe),null,{default:a(()=>[s(e(Be),{"as-child":""},{default:a(()=>[s(e(g),null,{default:a(()=>t[4]||(t[4]=[f(" 我要承接 ")])),_:1})]),_:1}),s(e(Pe),null,{default:a(()=>[s(e(Ee),null,{default:a(()=>[s(e(Se),null,{default:a(()=>t[5]||(t[5]=[f("確定要承接此問題嗎？")])),_:1}),s(e(je),null,{default:a(()=>t[6]||(t[6]=[f(" 確認承接後問題會移至我的問題（進行中） ")])),_:1})]),_:1}),s(e(Ne),null,{default:a(()=>[s(e(Ae),null,{default:a(()=>t[7]||(t[7]=[f(" 取消 ")])),_:1}),s(e(Oe),{onClick:p=>G(o.id),disabled:e(T)},{default:a(()=>t[8]||(t[8]=[f(" 確定承接 ")])),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128)),s(e(re),{total:(H=e(n))==null?void 0:H.listOpenQuestions.length,"sibling-count":1,"show-edges":"","default-page":1,class:"py-10 px-2"},{default:a(({page:o})=>[s(e(ne),{class:"flex items-center gap-1"},{default:a(({items:v})=>[s(e(ze)),s(e(Fe)),(c(!0),C(P,null,O(v,(p,M)=>(c(),C(P,{key:M},[p.type==="page"?(c(),_(e(oe),{key:0,value:p.value,"as-child":""},{default:a(()=>[s(e(g),{onClick:ss=>B.value=p.value,class:"w-10 h-10 p-0",variant:p.value===o?"default":"outline"},{default:a(()=>[f(b(p.value),1)]),_:2},1032,["onClick","variant"])]),_:2},1032,["value"])):(c(),_(e(Me),{key:1,index:M},null,8,["index"]))],64))),128)),s(e(De)),s(e(Ue))]),_:2},1024)]),_:1},8,["total"])])])}}});export{$s as default};
