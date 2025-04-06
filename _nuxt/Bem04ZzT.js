import{e as se,h as C,w as d,f as e,o as r,b as a,r as xe,a as n,t as S,c as u,C as ye,M as ve,g as m,E as G,x as we,q as ke,N as Ie,O as Ce,y as J,j as Y,n as g,v as k,F as Se,k as $e,P as Me,L as Re,i as Ae,H as Te,d as I}from"./C1mGvpVk.js";import{I as j}from"./COF9i6B0.js";import{e as je}from"./BwRMJ7H9.js";import{_ as De}from"./Bv2SXxW5.js";import{f as ze,_ as Ee,a as Fe,b as Le,c as Oe,d as Ve,e as Ne,g as Ue}from"./BWcMhmHg.js";import{_ as Be}from"./CdQVZIS9.js";import{_ as Qe,a as He,b as Pe}from"./CVaYniYW.js";import{_ as qe}from"./DjrNghCc.js";import{_ as X}from"./CUEojBMn.js";import{_ as D}from"./DlAUqK2U.js";import{u as Ke}from"./DAaF4xsA.js";import{L as ee}from"./DmqdqtFV.js";import{g as We}from"./rIQXTI0U.js";import{S as Ze,a as Ge}from"./CotXGpjj.js";import{t as Je,o as Ye,d as Xe,e as et}from"./XLghWbM2.js";import{c as tt}from"./DfOpl1xg.js";import{u as st}from"./DEtZXrsT.js";import"./CgGzKyyz.js";import"./BWMx8VcQ.js";import"./DS1vFCdY.js";import"./B1BkOJfh.js";import"./DgZD5969.js";import"./Cx9m3wYf.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=tt("ArchiveIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]),te=se({__name:"Tooltip",props:{content:{}},setup($){return(c,b)=>(r(),C(e(qe),null,{default:d(()=>[a(e(Pe),null,{default:d(()=>[a(e(Qe),{"as-child":""},{default:d(()=>[xe(c.$slots,"default")]),_:3}),a(e(He),{class:"bg-black text-white text-xs"},{default:d(()=>[n("p",null,S(c.content),1)]),_:1})]),_:3})]),_:3}))}}),ot={},nt={class:"shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"};function rt($,c){return r(),u("svg",nt,c[0]||(c[0]=[n("path",{d:"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"},null,-1)]))}const lt=D(ot,[["render",rt]]),it={},ct={class:"shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"};function dt($,c){return r(),u("svg",ct,c[0]||(c[0]=[n("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"},null,-1)]))}const ut=D(it,[["render",dt]]),mt=We`
subscription Chatroom($chatroomId: UUID!, $authorizedResource: Int, $lastMessageId: Int) {
  chatroom(
    form: {
      chatroomId: $chatroomId, 
      authorizedResource: $authorizedResource, 
      lastMessageId: $lastMessageId
    }
  ){
    ... on ChatRoomMessageData {
      id
      chatroomId
      content
      created
      mime
      user {
        account
        email
        created
        id
        password
        name
        photo
        roles {
          description
          id
          isAdmin
          name
        }
        suspended
        updated
      }
    }
    ... on ChatRoomCommandData {
      __typename
      chatroomId
      command
      created
      user {
        account
        created
        id
        email
        password
        photo
        name
        roles {
          description
          id
          isAdmin
          name
          }
        suspended
        updated
        }
    }
  }
}
`,ft={class:"h-[100vh] bg-background"},pt={class:"bg-white h-[60vh] max-h-[calc(100vh-305px)] max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto overflow-y-scroll flex flex-col-reverse border-b-gray-100 border-b-[1px]"},ht={class:"space-y-5"},_t={key:0,class:"grow text-end space-y-3"},gt={class:"inline-block bg-[#e7be46] rounded-lg p-4 shadow-sm"},bt={key:1,class:"text-sm text-white"},xt={key:1,class:"grow text-end space-y-3"},yt={key:2,class:"bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700"},vt={key:1,class:"text-sm text-gray-900 dark:text-white"},wt={class:"relative bg-white max-w-4xl mx-auto h-[150px] rounded-b-xl"},kt={class:"absolute bottom-px inset-x-px p-2 rounded-b-lg bg-transparent dark:bg-neutral-900"},It={class:"flex justify-between items-center"},Ct={class:"flex justify-start gap-3"},St={key:0},$t={class:"p-2 hover:bg-gray-100 rounded-md"},Mt={class:"flex items-center"},Rt=["disabled"],At={class:"flex items-center gap-x-1"},Tt=["disabled"],jt=se({__name:"[id]",async setup($){var N,U,B;let c,b;const ae=ye(),h=(N=ve().loginResult)==null?void 0:N.user,f=h==null?void 0:h.id,z=((B=(U=h==null?void 0:h.roles)==null?void 0:U[0])==null?void 0:B.name)??"Jhon Doe",x=ae.params.id,v=m(0),E=m(0),l=m(null),_=m(!1),F=m([]),{data:L}=([c,b]=G(()=>Te(ee)),c=await c,b(),c),{result:M,refetch:oe}=we(ee,{fetchPolicy:"network-only"});ke(()=>{var o;M.value&&(L.value=M.value,l.value=((o=L.value)==null?void 0:o.listMyQuestions.find(t=>t.chatroom.chatroomId===x))??null)});const ne=async()=>{var o;oe(),l.value=((o=M.value)==null?void 0:o.listMyQuestions.find(t=>t.chatroom.chatroomId===x))??null};[c,b]=G(()=>ne()),await c,b(),l.value&&(v.value=l.value.authorizedResource??0,E.value=l.value.id),Ie(()=>{const{onResult:o}=Ce(mt,{chatroomId:x,authorizedResource:v.value,lastMessageId:null});o(t=>{var y;const s=(y=t.data)==null?void 0:y.chatroom;if(s)switch(s.__typename){case"ChatRoomMessageData":F.value.push({id:s.id,content:s.content,created:s.created,chatroomId:s.chatroomId,mime:s.mime,user:s.user});break;case"ChatRoomCommandData":re(s);break;default:console.warn("Unknown chatroom data type:",s.__typename)}})});function re(o){o.command==="SOLVED"&&(_.value=!0,console.log("Chatroom marked as solved"))}const p=m(""),{mutate:O}=J(Ze),w=m(!1),le=async o=>{if(w.value){console.warn("Message is already being sent. Please wait.");return}w.value=!0;try{await O({chatroomId:x,authorizedResource:v.value,content:o}),p.value=""}catch(t){console.error("Failed to send message",t)}finally{w.value=!1}},R=st(()=>{const o=p.value;o.trim()!==""&&le(o)},300),ie=Y(()=>p.value.trim()===""||w.value),ce=Y(()=>ie.value||_.value),de=Ke(),{mutate:ue}=J(Ge),me=async()=>{try{await ue({questionId:E.value}),de.triggerRefetch()}catch(o){console.error("Failed to close chatroom",o)}},fe=Je(Ye({image:Xe().optional()})),{setFieldValue:pe}=et({validationSchema:fe}),A=m(null),he=()=>{A.value&&A.value.click()},_e=m(""),V=m(null),ge=async o=>{const t=o.target;if(t.files&&t.files.length>0){const s=t.files[0];t.validity.valid&&s&&(_e.value=URL.createObjectURL(s),V.value=s,pe("image",s),console.log("File:",s.type))}try{const s=await O({chatroomId:x,authorizedResource:v.value,file:V.value,content:""});console.log("Image sent successfully:",s),p.value=""}catch(s){console.error("Failed to send message",s)}},T=m("");return z=="TEACHER"?T.value="請輸入您的回覆":T.value="請輸入您要問的內容",(o,t)=>{var s,y,Q,H,P,q,K,W,Z;return r(),u("div",ft,[a(je),n("div",pt,[n("ul",ht,[(s=e(l))!=null&&s.image?(r(),u("li",{key:0,class:g(((y=e(l))==null?void 0:y.chatroom.owner.id)==e(f)?"max-w-2xl ms-auto flex justify-end items-center gap-x-2 sm:gap-x-4":"flex items-center justify-start gap-x-2 sm:gap-x-4")},[n("div",{class:g(((Q=e(l))==null?void 0:Q.chatroom.owner.id)==e(f)?"text-end space-y-3 inline-block bg-[#e7be46] rounded-lg p-4 shadow-sm":"bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700")},[a(j,{src:(H=e(l))==null?void 0:H.image,alt:"Sended image"},null,8,["src"])],2)],2)):k("",!0),(P=e(l))!=null&&P.description?(r(),u("li",{key:1,class:g(((q=e(l))==null?void 0:q.chatroom.owner.id)==e(f)?"max-w-2xl ms-auto flex justify-end items-center gap-x-2 sm:gap-x-4":"flex items-center justify-start gap-x-2 sm:gap-x-4")},[n("div",{class:g(((K=e(l))==null?void 0:K.chatroom.owner.id)==e(f)?"text-end space-y-3 inline-block bg-[#e7be46] rounded-lg p-4 shadow-sm":"bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700")},[n("p",{class:g(((W=e(l))==null?void 0:W.chatroom.owner.id)==e(f)?"text-sm text-white":"text-sm text-gray-900")},S((Z=e(l))==null?void 0:Z.description),3)],2)],2)):k("",!0),(r(!0),u(Se,null,$e(e(F),(i,be)=>(r(),u("li",{key:be,class:g(i.user.id===e(f)?"max-w-2xl ms-auto flex justify-end items-center gap-x-2 sm:gap-x-4":"flex items-center justify-start gap-x-2 sm:gap-x-4")},[i.user.id===e(f)?(r(),u("div",_t,[n("div",gt,[i.mime&&i.mime.startsWith("image/")?(r(),C(j,{key:0,src:i.content,alt:"Sended image"},null,8,["src"])):(r(),u("p",bt,S(i.content),1))])])):i.user.account==="admin"?(r(),u("div",xt,[a(e(X),{class:"my-4",label:i.content},null,8,["label"])])):(r(),u("div",yt,[i.mime&&i.mime.startsWith("image/")?(r(),C(j,{key:0,src:i.content,alt:"Received image"},null,8,["src"])):(r(),u("p",vt,S(i.content),1))]))],2))),128)),e(_)?(r(),C(e(X),{key:2,class:"my-4",label:"對話已結束"})):k("",!0)])]),n("div",wt,[a(De,{onKeydown:Me(Re(e(R),["prevent"]),["enter"]),class:"max-w-4xl rounded-none border-none bg-white p-4 pb-20 text-base focus-visible:border-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5",placeholder:e(T),modelValue:e(p),"onUpdate:modelValue":t[0]||(t[0]=i=>Ae(p)?p.value=i:null),disabled:e(_)},null,8,["onKeydown","placeholder","modelValue","disabled"]),n("div",kt,[n("div",It,[n("div",Ct,[e(z)==="TEACHER"&&e(l)&&e(l).status!=="SOLVED"&&!e(_)?(r(),u("div",St,[a(e(Ue),null,{default:d(()=>[a(e(Be),null,{default:d(()=>[a(te,{content:"結束對話"},{default:d(()=>[n("button",$t,[a(e(at),{class:"h-4 w-4 text-gray-500"})])]),_:1})]),_:1}),a(e(ze),{class:"sm:max-w-[425px] max-w-[350px]"},{default:d(()=>[a(e(Ee),null,{default:d(()=>[a(e(Fe),null,{default:d(()=>t[2]||(t[2]=[I("你確定要結束對話嗎？")])),_:1}),a(e(Le),null,{default:d(()=>t[3]||(t[3]=[I(" 此動作無法復原 ")])),_:1})]),_:1}),a(e(Oe),null,{default:d(()=>[a(e(Ve),{class:"bg-white"},{default:d(()=>t[4]||(t[4]=[I(" 取消 ")])),_:1}),a(e(Ne),{onClick:me},{default:d(()=>t[5]||(t[5]=[I(" 確定結束 ")])),_:1})]),_:1})]),_:1})]),_:1})])):k("",!0),n("div",Mt,[a(te,{content:"附件檔案"},{default:d(()=>[n("button",{type:"button",disabled:e(_),onClick:he,class:"inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-60 disabled:cursor-not-allowed"},[a(ut)],8,Rt)]),_:1}),n("input",{type:"file",ref_key:"fileInput",ref:A,class:"hidden",onChange:ge},null,544)])]),n("div",At,[n("button",{disabled:e(ce),type:"button",onClick:t[1]||(t[1]=(...i)=>e(R)&&e(R)(...i)),class:"inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-[#f2c94c] hover:bg-[#f2c94c/90] focus:z-10 focus:outline-none focus:bg-[#f2c94c/90] disabled:opacity-40 disabled:cursor-not-allowed"},[a(lt)],8,Tt)])])])])])}}}),as=D(jt,[["__scopeId","data-v-31957c77"]]);export{as as default};
