import{_ as B}from"./CgGzKyyz.js";import{e as N,g as f,c as T,a as e,b as a,w as r,f as o,i as S,h as V,v as A,L as M,n as H,o as v,d as g,r as U,t as D,M as q,y as R,D as F}from"./C1mGvpVk.js";import{c as O}from"./DS1vFCdY.js";import{C as Q,_ as G,a as P,b as W}from"./BR0BVoRd.js";import{_ as J}from"./BWMx8VcQ.js";import{_ as C}from"./DDuQuFCI.js";import{_ as I}from"./BhvA7b7P.js";import{L as K}from"./DpVB0IKE.js";import{g as X}from"./rIQXTI0U.js";import{_ as Y}from"./DlAUqK2U.js";import"./DfOpl1xg.js";import"./DEtZXrsT.js";const Z=""+new URL("logo_col.ur9Rs1jq.svg",import.meta.url).href,tt={class:"grid gap-4"},et={class:"grid gap-1"},ot={class:"grid gap-1"},st=N({__name:"UserAuthForm",props:{error:String,isLoading:Boolean},emits:["submitLogin","clearErrorHandler"],setup(n,{emit:x}){const d=f(""),c=f(""),u=n,i=x,_=()=>{i("submitLogin",{account:d.value,password:c.value})},p=()=>{i("clearErrorHandler")};return(m,t)=>(v(),T("div",{class:H(o(O)("grid gap-6",m.$attrs.class??""))},[e("form",{onSubmit:M(_,["prevent"])},[e("div",tt,[e("div",et,[a(o(I),{class:"sr-only",for:"email"},{default:r(()=>t[2]||(t[2]=[g(" Email ")])),_:1}),a(o(C),{id:"email",placeholder:"輸入您的帳號",type:"text","auto-capitalize":"none","auto-complete":"email","auto-correct":"off",disabled:n.isLoading,modelValue:o(d),"onUpdate:modelValue":t[0]||(t[0]=l=>S(d)?d.value=l:null),onInput:p},null,8,["disabled","modelValue"])]),e("div",ot,[a(o(I),{class:"sr-only",for:"password"},{default:r(()=>t[3]||(t[3]=[g(" Password ")])),_:1}),a(o(C),{id:"password",placeholder:"輸入您的密碼",type:"password","auto-capitalize":"none",autocomplete:"current-password","auto-correct":"off",disabled:n.isLoading,modelValue:o(c),"onUpdate:modelValue":t[1]||(t[1]=l=>S(c)?c.value=l:null),onInput:p},null,8,["disabled","modelValue"])]),a(o(J),{disabled:n.isLoading,type:"submit"},{default:r(()=>[n.isLoading?(v(),V(o(K),{key:0,class:"mr-2 h-4 w-4 animate-spin"})):A("",!0),U(m.$slots,"default")]),_:3},8,["disabled"]),n.error?(v(),V(o(W),{key:0,variant:"destructive"},{default:r(()=>[a(o(Q),{class:"w-4 h-4"}),a(o(G),null,{default:r(()=>t[4]||(t[4]=[g("錯誤")])),_:1}),a(o(P),null,{default:r(()=>[g(D(u.error),1)]),_:1})]),_:1})):A("",!0)])],32)],2))}}),at=X`
  mutation Login($account: String!, $password: String!) {
    login(account: $account, password: $password) {
      ... on LoginSuccess {
        id
        host
        created
        expireAt
        accessToken
        remainingQuestionsToday
        resetTimeForDailyQuestions
        user {
          email
          account
          name
          suspended
          password
          photo
          id
          created
          updated
          roles {
            name
            description
            isAdmin
            id
          }
        }
      }
      ... on LoginError {
        message
      }
    }
  }
`,rt={class:"container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"},nt={class:"lg:p-8 h-[100%] flex items-center justify-center"},it={class:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"},lt=N({__name:"login",setup(n){const x=q(),d=f(""),c=f(""),u=f(""),i=f(!1),_=async({account:m,password:t})=>{var w,b,L,h,y,$,k,E;i.value=!0;const l={account:m,password:t},{mutate:j,onError:z}=R(at,{variables:l});if(!m||!t){console.error("Account or password is missing"),u.value="帳號或密碼不得為空";return}try{const s=await j();((b=(w=s==null?void 0:s.data)==null?void 0:w.login)==null?void 0:b.__typename)==="LoginSuccess"?(x.setAuthData(s.data.login),F("/home")):((h=(L=s==null?void 0:s.data)==null?void 0:L.login)==null?void 0:h.__typename)==="LoginError"&&(console.error("Login Error:",($=(y=s==null?void 0:s.data)==null?void 0:y.login)==null?void 0:$.message),u.value=(E=(k=s==null?void 0:s.data)==null?void 0:k.login)==null?void 0:E.message,i.value=!1)}catch{console.error("Mutation Error:",z),i.value=!1}},p=()=>{u.value=""};return(m,t)=>{const l=B;return v(),T("div",rt,[t[4]||(t[4]=e("div",{class:"relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"},[e("div",{class:"absolute inset-0 bg-zinc-900 image"}),e("div",{class:"relative z-20 flex items-center text-lg font-medium"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",class:"mr-2 h-6 w-6"},[e("path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"})]),e("a",{href:"/"}," 智識酷 — 線上解題平台 ")]),e("div",{class:"relative z-20 mt-auto"},[e("blockquote",{class:"space-y-2"},[e("p",{class:"text-lg"}," “It's not that I'm so smart, it's just that I stay with problems longer.” "),e("footer",{class:"text-sm"}," Albert Einstein ")])])],-1)),e("div",nt,[e("div",it,[a(l,{to:"/"},{default:r(()=>t[0]||(t[0]=[e("img",{class:"w-32 mx-auto mb-3",src:Z,alt:"logo"},null,-1)])),_:1}),t[2]||(t[2]=e("div",{class:"flex flex-col space-y-2 text-center"},[e("h1",{class:"text-xl sm:text-2xl font-semibold tracking-tight"}," 歡迎回來 ")],-1)),a(st,{onSubmitLogin:_,account:o(d),password:o(c),error:o(u),onClearErrorHandler:p,isLoading:o(i)},{default:r(()=>t[1]||(t[1]=[g(" 登入 ")])),_:1},8,["account","password","error","isLoading"]),t[3]||(t[3]=e("p",{class:"px-8 text-center text-sm text-muted-foreground"},[g(" 還沒有帳戶嗎？ "),e("a",{href:"/student-register",class:"underline underline-offset-4 hover:text-primary"}," 點此註冊 ")],-1))])])])}}}),Lt=Y(lt,[["__scopeId","data-v-26bb19de"]]);export{Lt as default};
