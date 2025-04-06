import{_ as l,a as c}from"./DvkLQqzE.js";import{g as d}from"./rIQXTI0U.js";import{e as m,E as p,c as u,a as s,b as g,f as n,F as _,H as h,o as f}from"./C1mGvpVk.js";import"./DDuQuFCI.js";import"./DEtZXrsT.js";import"./DS1vFCdY.js";import"./DfOpl1xg.js";import"./CUEojBMn.js";import"./C5QIhlXO.js";import"./DjrNghCc.js";const k={class:"container"},b={class:"shadow-lg rounded-lg h-screen"},I=m({__name:"question-pool-bak",async setup(v){let e,t;const r=d`
  query listOpenQuestion {
    listOpenQuestions {
      description
      image
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
`,{data:o}=([e,t]=p(()=>h(r)),e=await e,t(),e);return console.log(o.value),(w,a)=>{var i;return f(),u(_,null,[a[0]||(a[0]=s("div",{class:"md:hidden"},[s("image",{src:"/examples/mail-dark.png",width:1280,height:727,alt:"Mail",class:"hidden dark:block"}),s("image",{src:"/examples/mail-light.png",width:1280,height:727,alt:"Mail",class:"block dark:hidden"})],-1)),a[1]||(a[1]=s("div",{class:"absolute bg-gray-950 z-[-1] h-screen"},null,-1)),s("div",k,[s("div",b,[g(l,{accounts:n(c),messages:((i=n(o))==null?void 0:i.listOpenQuestions)||[],"nav-collapsed-size":4},null,8,["accounts","messages"])])])],64)}}});export{I as default};
