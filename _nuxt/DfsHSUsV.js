import{g as Q}from"./rIQXTI0U.js";import{I as j,e as f,o as m,h as _,w as t,r as F,f as e,c as $,n as T,J as Y,K as G,g as c,b as s,a as M,L as q,d as p,m as N,i as R,F as z,k as K,t as P,v as J}from"./C1mGvpVk.js";import{X,c as w,h as W}from"./DS1vFCdY.js";import{F as Z,u as ee,a as se,b as ae,c as te,E as oe,t as ne,o as ie,s as h,d as re,e as de,f as v}from"./XLghWbM2.js";import{_ as le}from"./BhvA7b7P.js";import{_ as me}from"./BWMx8VcQ.js";import{_ as ue}from"./DDuQuFCI.js";import{_ as ce,a as pe,b as fe,c as _e,d as ge,e as be}from"./i4YO_Fr_.js";import{_ as Ie}from"./Bv2SXxW5.js";import{L as $e}from"./DpVB0IKE.js";const Ne=Q`
  mutation createQuestion($subject: Subjects! $description: String!, $image: Upload) {
    createQuestion(form: {
      subject: $subject
      description: $description
      image: $image
    }) {
      description
      subject
      image
      authorizedResource
      id
      status
      assignedAt
      acceptedAt
      rejectedAt
      solvedAt
      chatroom {
        type
        authorizedResource
        id
        chatroomId
        created
        updated
        owner {
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
      assignedBy {
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
      assignee {
        email
        account
        name
        suspended
        password
        photo
        id
        created
        updated
      }
    }
  }
`,k=Symbol();function y(){const d=j(Z),i=j(k);if(!d)throw new Error("useFormField should be used within <FormField>");const{name:a}=d,o=i,l={valid:ee(a),isDirty:se(a),isTouched:ae(a),error:te(a)};return{id:o,name:a,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...l}}const S=f({__name:"FormControl",setup(d){const{error:i,formItemId:a,formDescriptionId:o,formMessageId:l}=y();return(g,O)=>(m(),_(e(X),{id:e(a),"aria-describedby":e(i)?`${e(o)} ${e(l)}`:`${e(o)}`,"aria-invalid":!!e(i)},{default:t(()=>[F(g.$slots,"default")]),_:3},8,["id","aria-describedby","aria-invalid"]))}}),Fe=["id"],ye=f({__name:"FormDescription",props:{class:{}},setup(d){const i=d,{formDescriptionId:a}=y();return(o,l)=>(m(),$("p",{id:e(a),class:T(e(w)("text-sm text-muted-foreground",i.class))},[F(o.$slots,"default")],10,Fe))}}),C=f({__name:"FormItem",props:{class:{}},setup(d){const i=d,a=W();return Y(k,a),(o,l)=>(m(),$("div",{class:T(e(w)("space-y-2",i.class))},[F(o.$slots,"default")],2))}}),x=f({__name:"FormLabel",props:{for:{},asChild:{type:Boolean},as:{},class:{}},setup(d){const i=d,{error:a,formItemId:o}=y();return(l,g)=>(m(),_(e(le),{class:T(e(w)(e(a)&&"text-destructive",i.class)),for:e(o)},{default:t(()=>[F(l.$slots,"default")]),_:3},8,["class","for"]))}}),E=f({__name:"FormMessage",setup(d){const{name:i,formMessageId:a}=y();return(o,l)=>(m(),_(e(oe),{id:e(a),as:"p",name:G(e(i)),class:"text-sm font-medium text-destructive"},null,8,["id","name"]))}}),he=["src"],ve={class:"flex gap-2 justify-start"},Re=f({__name:"AskQuestionForm",props:{isLoading:Boolean},emits:["handlerAskQuestion","resetForm"],setup(d,{emit:i}){const a=d,o=c([{name:"英文",enum:"ENGLISH"},{name:"數學",enum:"MATH"},{name:"國文",enum:"CHINESE"},{name:"物理",enum:"PHYSICS"},{name:"化學",enum:"CHEMISTRY"},{name:"地科",enum:"EARTH_SCIENCE"},{name:"生物",enum:"BIOLOGY"},{name:"歷史",enum:"HISTORY"},{name:"地理",enum:"GEOGRAPHY"},{name:"公民",enum:"CIVICS"}]),l=c(["歷史","地理","公民"]),g=ne(ie({title:h({required_error:"輸入您的問題"}).max(30,{message:"題目最多不超過30個字"}),subject:h({required_error:"請選擇科目"}),description:h().max(160,{message:"最多不超過160字"}),image:re().optional()})),{handleSubmit:O,resetForm:Se,setFieldValue:B}=de({validationSchema:g}),b=c(""),I=c(""),L=c(""),A=c(null),H=async({target:V})=>{const{validity:n,files:u}=V;if(u&&u.length>0){const r=u[0];n.valid&&(L.value=URL.createObjectURL(r),A.value=r,B("image",r),console.log("File:",r))}},U=i,D=()=>{U("handlerAskQuestion",{subject:b.value,description:I.value,image:A.value})};return(V,n)=>(m(),$("form",{class:"space-y-8 md:w-[30rem] w-[80vw]",onSubmit:q(D,["prevent"])},[s(e(v),{name:"subject"},{default:t(({componentField:u})=>[s(e(C),null,{default:t(()=>[s(e(x),null,{default:t(()=>n[2]||(n[2]=[p("科目")])),_:1}),s(e(ce),N(u,{modelValue:e(b),"onUpdate:modelValue":n[0]||(n[0]=r=>R(b)?b.value=r:null),disabled:a.isLoading}),{default:t(()=>[s(e(S),null,{default:t(()=>[s(e(pe),null,{default:t(()=>[s(e(fe),{placeholder:"選擇科目"})]),_:1})]),_:1}),s(e(_e),null,{default:t(()=>[s(e(ge),null,{default:t(()=>[(m(!0),$(z,null,K(e(o),r=>(m(),_(e(be),{key:r.name,value:r.enum,disabled:e(l).includes(r.name)},{default:t(()=>[p(P(r.name),1)]),_:2},1032,["value","disabled"]))),128))]),_:1})]),_:1})]),_:2},1040,["modelValue","disabled"]),s(e(E))]),_:2},1024)]),_:1}),s(e(v),{name:"description"},{default:t(({componentField:u})=>[s(e(C),null,{default:t(()=>[s(e(x),null,{default:t(()=>n[3]||(n[3]=[p("問題說明")])),_:1}),s(e(S),null,{default:t(()=>[s(e(Ie),N({placeholder:"詳細說明您的問題"},u,{modelValue:e(I),"onUpdate:modelValue":n[1]||(n[1]=r=>R(I)?I.value=r:null),disabled:a.isLoading}),null,16,["modelValue","disabled"])]),_:2},1024),s(e(E))]),_:2},1024)]),_:1}),s(e(v),{name:"image"},{default:t(()=>[s(e(C),null,{default:t(()=>[s(e(x),null,{default:t(()=>n[4]||(n[4]=[p("上傳圖片")])),_:1}),s(e(S),null,{default:t(()=>[s(e(ue),{type:"file",placeholder:"輸入您的問題",onChange:H,disabled:a.isLoading},null,8,["disabled"]),M("img",{src:e(L),alt:"",class:"w-[200px] rounded-lg"},null,8,he)]),_:1}),s(e(ye),{class:"text-sm pl-2 text-gray-600"},{default:t(()=>n[5]||(n[5]=[p(" *圖片限制一張 ")])),_:1}),s(e(E))]),_:1})]),_:1}),M("div",ve,[s(e(me),{type:"submit",disabled:a.isLoading,class:"disabled:opacity-50"},{default:t(()=>[a.isLoading?(m(),_(e($e),{key:0,class:"mr-2 h-4 w-4 animate-spin"})):J("",!0),n[6]||(n[6]=p(" 送出問題 "))]),_:1},8,["disabled"])])],32))}});export{Ne as C,Re as _};
