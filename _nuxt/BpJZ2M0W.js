import{e as j,g as k,M as C,q as S,o as m,c as f,a as t,t as $,f as e,b as o,w as i,d as u,F as M,x as z,p as E,j as y,v as x,D as O}from"./C1mGvpVk.js";import{_ as R,a as _,b as D}from"./C5QIhlXO.js";import{g as h}from"./CONQ9M7K.js";import{_ as L}from"./BWMx8VcQ.js";import{L as w,M as N}from"./B1BkOJfh.js";import{r as T,G as I,a as q,Y as H}from"./DgZD5969.js";import{c as V}from"./DfOpl1xg.js";import{u as B,_ as G}from"./BD1Yz8RJ.js";import{g as Y}from"./rIQXTI0U.js";import"./DS1vFCdY.js";import"./COF9i6B0.js";import"./DlAUqK2U.js";import"./i4YO_Fr_.js";import"./3tH5B2MA.js";import"./BHDqqyDz.js";import"./CVaYniYW.js";import"./DjrNghCc.js";import"./BWcMhmHg.js";import"./CdQVZIS9.js";import"./BezLyNox.js";import"./BfF1afV6.js";import"./D4NO1POk.js";import"./DBAzuQGx.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=V("HouseIcon",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),F={class:"flex items-center lg:justify-between justify-end p-6 lg:px-8","aria-label":"Global"},P={class:"hidden lg:flex justify-start items-center gap-5"},U={class:"text-3xl font-bold tracking-tight"},J={class:"hidden lg:flex items-center space-x-2"},K={class:"flex lg:hidden"},W={class:"flex items-center justify-end"},X={class:"mt-6 flow-root"},Z={class:"-my-6 divide-y divide-gray-500/10"},tt={class:"py-6"},et={class:"-mx-3 flex items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full",href:"/"},st=2,b=16,ot=j({__name:"UserHeader",setup(Q){const c=k(""),l=k(!1),p=C(),r=()=>{p.handleLogout(),alert("You have been logged out")};return S(()=>{var d;c.value=((d=p.loginResult)==null?void 0:d.user.account)||""}),(d,s)=>{const v=L;return m(),f(M,null,[t("nav",F,[t("div",P,[t("h2",U," Hi, "+$(e(c)),1),t("p",{class:"text-sm"},"今日剩下"+$(st)+"次試用")]),t("div",J,[o(v,{class:"tracking-[2px] flex items-center justify-center gap-2",onClick:r},{default:i(()=>[s[3]||(s[3]=u(" 登出 ")),o(e(w),{size:b})]),_:1})]),t("div",K,[t("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:s[0]||(s[0]=g=>l.value=!0)},[s[4]||(s[4]=t("span",{class:"sr-only"},"Open main menu",-1)),o(e(T),{class:"h-6 w-6","aria-hidden":"true"})])])]),o(e(H),{class:"lg:hidden",onClose:s[2]||(s[2]=g=>l.value=!1),open:e(l)},{default:i(()=>[s[8]||(s[8]=t("div",{class:"fixed inset-0 z-50"},null,-1)),o(e(I),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:i(()=>[t("div",W,[t("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:s[1]||(s[1]=g=>l.value=!1)},[s[5]||(s[5]=t("span",{class:"sr-only"},"Close menu",-1)),o(e(q),{class:"h-6 w-6","aria-hidden":"true"})])]),t("div",X,[t("div",Z,[t("div",tt,[t("a",et,[o(e(A),{size:b}),s[6]||(s[6]=u(" 回首頁 "))]),t("button",{onClick:r,class:"-mx-3 flex items-center justify-start gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full"},[o(e(w),{size:b}),s[7]||(s[7]=u(" 登出 "))])])])])]),_:1})]),_:1},8,["open"])],64)}}}),at={class:"container"},nt={class:"flex flex-col"},it={class:"flex-1 space-y-4 p-8 pt-6"},lt={key:0},rt={key:0},ut={key:0},dt={class:"fixed bottom-14 right-14"},Lt=j({__name:"student-home",setup(Q){const c=B();C();const l=k([]),p=Y`
  query listMyQuestions {
    listMyQuestions {
      subject
      description
      image
      authorizedResource
      id
      chatroom {
        authorizedResource
        chatroomId
        owner {
          id
          roles {
            name
            isAdmin
            id
          }
          account
        }
        created
      }
      status
    }
}
`,{result:r,error:d}=z(p);S(()=>{r.value&&(console.log("Query result:",r.value),l.value=r.value.listMyQuestions,c.setChatroomData(r.value.listMyQuestions))}),E(d,n=>{n&&console.error("Error fetching data:",n)});const s=y(()=>l.value.filter(n=>n.status==="OPEN"||n.status==="IN_PROGRESS")),v=y(()=>l.value.filter(n=>n.status==="REJECTED")),g=y(()=>l.value.filter(n=>n.status==="SOLVED"));return(n,a)=>(m(),f(M,null,[t("div",at,[o(ot),t("div",nt,[t("div",it,[o(e(D),{"default-value":"asking",class:"space-y-4"},{default:i(()=>[o(e(R),null,{default:i(()=>[o(e(_),{value:"asking"},{default:i(()=>a[1]||(a[1]=[u(" 提問中 ")])),_:1}),o(e(_),{value:"rejected"},{default:i(()=>a[2]||(a[2]=[u(" 已拒絕 ")])),_:1}),o(e(_),{value:"finished"},{default:i(()=>a[3]||(a[3]=[u(" 已完成 ")])),_:1})]),_:1}),o(e(h),{value:"asking",class:"space-y-4"},{default:i(()=>[e(s).length<=0?(m(),f("div",lt,a[4]||(a[4]=[t("h3",{class:"mt-4 text-lg font-semibold"}," 目前尚無任何提問 ",-1),t("p",{class:"mb-4 mt-2 text-sm text-muted-foreground"}," 立即點擊右下角來提問 ",-1)]))):x("",!0),o(G,{questions:e(s)},null,8,["questions"])]),_:1}),o(e(h),{value:"rejected",class:"space-y-4"},{default:i(()=>[e(v).length<=0?(m(),f("div",rt,a[5]||(a[5]=[t("h3",{class:"mt-4 text-lg font-semibold"}," 目前尚無已拒絕的提問 ",-1)]))):x("",!0)]),_:1}),o(e(h),{value:"finished",class:"space-y-4"},{default:i(()=>[e(g).length<=0?(m(),f("div",ut,a[6]||(a[6]=[t("h3",{class:"mt-4 text-lg font-semibold"}," 目前尚無任何已完成的提問 ",-1)]))):x("",!0)]),_:1})]),_:1})])])]),t("div",dt,[t("button",{class:"flex items-center justify-center gap-2 bg-black text-white py-6 px-8 rounded-full shadow-xl hover:opacity-90",onClick:a[0]||(a[0]=mt=>("navigateTo"in n?n.navigateTo:e(O))("/ask"))},[o(e(N)),a[7]||(a[7]=u(" 立即提問 "))])])],64))}});export{Lt as default};
