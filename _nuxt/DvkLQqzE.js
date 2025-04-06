import{_ as j}from"./DDuQuFCI.js";import{x as w,c as k,am as _,an as T,ao as B}from"./DS1vFCdY.js";import{c as x}from"./DfOpl1xg.js";import{e as p,j as f,o as u,h as g,w as n,c as z,b as t,f as e,v as L,m as I,r as W,g as h,a as m,d as b}from"./C1mGvpVk.js";import{_ as P}from"./CUEojBMn.js";import{b as R,_ as S,a as v}from"./C5QIhlXO.js";import{_ as A}from"./DjrNghCc.js";/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=x("GripVerticalIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-vue-next v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=x("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),M={key:0,class:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"},y=p({__name:"ResizableHandle",props:{id:{},hitAreaMargins:{},tabindex:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{},withHandle:{type:Boolean}},emits:["dragging"],setup(c,{emit:o}){const i=c,l=o,d=f(()=>{const{class:a,...s}=i;return s}),r=w(d,l);return(a,s)=>(u(),g(e(_),I(e(r),{class:e(k)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90",i.class)}),{default:n(()=>[i.withHandle?(u(),z("div",M,[t(e(C),{class:"h-2.5 w-2.5"})])):L("",!0)]),_:1},16,["class"]))}}),$=p({__name:"ResizablePanelGroup",props:{id:{},autoSaveId:{},direction:{},keyboardResizeBy:{},storage:{},asChild:{type:Boolean},as:{},class:{}},emits:["layout"],setup(c,{emit:o}){const i=c,l=o,d=f(()=>{const{class:a,...s}=i;return s}),r=w(d,l);return(a,s)=>(u(),g(e(T),I(e(r),{class:e(k)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",i.class)}),{default:n(()=>[W(a.$slots,"default")]),_:3},16,["class"]))}}),q={class:"flex items-center px-4 py-2"},E={class:"bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"},H={class:"relative"},O=p({__name:"Mail",props:{accounts:{},messages:{},defaultLayout:{default:()=>[265,440,655]},defaultCollapsed:{type:Boolean,default:!1},navCollapsedSize:{}},setup(c){var d;const o=c;h(o.defaultCollapsed);const i=h(o.messages.length>0?String((d=o.messages[0])==null?void 0:d.id)??void 0:void 0),l=h("");return f(()=>o.messages.find(r=>r.chatroom.id===Number(i.value))),(r,a)=>(u(),g(e(A),{"delay-duration":0},{default:n(()=>[t(e($),{id:"resize-panel-group-1",direction:"horizontal",class:"h-full pb-5 items-stretch"},{default:n(()=>[t(e(y),{id:"resize-handle-1","with-handle":""}),t(e(B),{id:"resize-panel-2","default-size":r.defaultLayout[1],"min-size":30},{default:n(()=>[t(e(R),{"default-value":"all"},{default:n(()=>[m("div",q,[a[3]||(a[3]=m("h1",{class:"text-xl font-bold"}," Inbox ",-1)),t(e(S),{class:"ml-auto"},{default:n(()=>[t(e(v),{value:"all",class:"text-zinc-600 dark:text-zinc-200"},{default:n(()=>a[1]||(a[1]=[b(" All mail ")])),_:1}),t(e(v),{value:"unread",class:"text-zinc-600 dark:text-zinc-200"},{default:n(()=>a[2]||(a[2]=[b(" Unread ")])),_:1})]),_:1})]),t(e(P)),m("div",E,[m("form",null,[m("div",H,[t(e(V),{class:"absolute left-2 top-2.5 size-4 text-muted-foreground"}),t(e(j),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value=s),placeholder:"Search",class:"pl-8"},null,8,["modelValue"])])])])]),_:1})]),_:1},8,["default-size"]),t(e(y),{id:"resiz-handle-2","with-handle":""})]),_:1})]),_:1}))}}),Q=[{id:"6c84fb90-12c4-11e1-840d-7b25c5ee775a",name:"William Smith",email:"williamsmith@example.com",subject:"Meeting Tomorrow",text:`Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,date:"2023-10-22T09:00:00",read:!0,labels:["meeting","work","important"]},{id:"110e8400-e29b-11d4-a716-446655440000",name:"Alice Smith",email:"alicesmith@example.com",subject:"Re: Project Update",text:`Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.

I have a few minor suggestions that I'll include in the attached document.

Let's discuss these during our next meeting. Keep up the excellent work!

Best regards, Alice`,date:"2023-10-22T10:30:00",read:!0,labels:["work","important"]},{id:"3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",name:"Bob Johnson",email:"bobjohnson@example.com",subject:"Weekend Plans",text:`Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.

Looking forward to your response!

Best, Bob`,date:"2023-04-10T11:45:00",read:!0,labels:["personal"]},{id:"61c35085-72d7-42b4-8d62-738f700d4b92",name:"Emily Davis",email:"emilydavis@example.com",subject:"Re: Question about Budget",text:`I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.

I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.

I've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.

Thanks, Emily`,date:"2023-03-25T13:15:00",read:!1,labels:["work","budget"]},{id:"8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",name:"Michael Wilson",email:"michaelwilson@example.com",subject:"Important Announcement",text:`I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.

This change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.

Regards, Michael`,date:"2023-03-10T15:00:00",read:!1,labels:["meeting","work","important"]},{id:"1f0f2c02-e299-40de-9b1d-86ef9e42126b",name:"Sarah Brown",email:"sarahbrown@example.com",subject:"Re: Feedback on Proposal",text:`Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.

I've attached the revised proposal for your review.

Please let me know if you have any further comments or suggestions. Looking forward to your response.

Best regards, Sarah`,date:"2023-02-15T16:30:00",read:!0,labels:["work"]},{id:"17c0a96d-4415-42b1-8b4f-764efab57f66",name:"David Lee",email:"davidlee@example.com",subject:"New Project Idea",text:`I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.

I've prepared a detailed proposal outlining the potential benefits and the strategy for execution.

This project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.

Best regards, David`,date:"2023-01-28T17:45:00",read:!1,labels:["meeting","work","important"]},{id:"2f0130cb-39fc-44c4-bb3c-0a4337edaaab",name:"Olivia Wilson",email:"oliviawilson@example.com",subject:"Vacation Plans",text:`Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.

I believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.

We can start making arrangements to ensure a smooth and enjoyable trip.

Excited to hear your thoughts! Olivia`,date:"2022-12-20T18:30:00",read:!0,labels:["personal"]},{id:"de305d54-75b4-431b-adb2-eb6b9e546014",name:"James Martin",email:"jamesmartin@example.com",subject:"Re: Conference Registration",text:`I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.

I've also attached the conference schedule for your reference.

If there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.

Best regards, James`,date:"2022-11-30T19:15:00",read:!0,labels:["work","conference"]},{id:"7dd90c63-00f6-40f3-bd87-5060a24e8ee7",name:"Sophia White",email:"sophiawhite@example.com",subject:"Team Dinner",text:`Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.

I've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.

Please confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!

Best, Sophia`,date:"2022-11-05T20:30:00",read:!1,labels:["meeting","work"]},{id:"99a88f78-3eb4-4d87-87b7-7b15a49a0a05",name:"Daniel Johnson",email:"danieljohnson@example.com",subject:"Feedback Request",text:`I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.

I've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.

Your feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.

Regards, Daniel`,date:"2022-10-22T09:30:00",read:!1,labels:["work"]},{id:"f47ac10b-58cc-4372-a567-0e02b2c3d479",name:"Ava Taylor",email:"avataylor@example.com",subject:"Re: Meeting Agenda",text:`Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.

If you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.

It's essential that our meeting is productive and addresses all relevant matters.

Looking forward to our meeting! Ava`,date:"2022-10-10T10:45:00",read:!0,labels:["meeting","work"]},{id:"c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",name:"William Anderson",email:"williamanderson@example.com",subject:"Product Launch Update",text:`The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.

I'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.

Let's make this product launch a resounding success!

Best regards, William`,date:"2022-09-20T12:00:00",read:!1,labels:["meeting","work","important"]},{id:"ba54eefd-4097-4949-99f2-2a9ae4d1a836",name:"Mia Harris",email:"miaharris@example.com",subject:"Re: Travel Itinerary",text:`I've received the travel itinerary. It looks great! Thank you for your prompt assistance in arranging the details. I've reviewed the schedule and the accommodations, and everything seems to be in order. I'm looking forward to the trip, and I'm confident it'll be a smooth and enjoyable experience.

If there are any specific activities or attractions you recommend at our destination, please feel free to share your suggestions.

Excited for the trip! Mia`,date:"2022-09-10T13:15:00",read:!0,labels:["personal","travel"]},{id:"df09b6ed-28bd-4e0c-85a9-9320ec5179aa",name:"Ethan Clark",email:"ethanclark@example.com",subject:"Team Building Event",text:`Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.

Please let me know your thoughts and availability. We want this event to be both enjoyable and productive.

Together, we'll strengthen our team and boost our performance.

Regards, Ethan`,date:"2022-08-25T15:30:00",read:!1,labels:["meeting","work"]},{id:"d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",name:"Chloe Hall",email:"chloehall@example.com",subject:"Re: Budget Approval",text:`The budget has been approved. We can proceed with the project. I'm delighted to inform you that our budget proposal has received the green light from the finance department. This is a significant milestone, and it means we can move forward with the project as planned.

I've attached the finalized budget for your reference. Let's ensure that we stay on track and deliver the project on time and within budget.

It's an exciting time for us! Chloe`,date:"2022-08-10T16:45:00",read:!0,labels:["work","budget"]},{id:"6c9a7f94-8329-4d70-95d3-51f68c186ae1",name:"Samuel Turner",email:"samuelturner@example.com",subject:"Weekend Hike",text:`Who's up for a weekend hike in the mountains? I've been craving some outdoor adventure, and a hike in the mountains sounds like the perfect escape. If you're up for the challenge, we can explore some scenic trails and enjoy the beauty of nature.

I've done some research and have a few routes in mind.

Let me know if you're interested, and we can plan the details.

It's sure to be a memorable experience! Samuel`,date:"2022-07-28T17:30:00",read:!1,labels:["personal"]}],Y=[{label:"Alicia Koch",email:"alicia@example.com",icon:"ion:logo-vercel"},{label:"Alicia Koch",email:"alicia@gmail.com",icon:"mdi:google"},{label:"Alicia Koch",email:"alicia@me.com",icon:"bx:bxl-gmail"}];export{O as _,Y as a,Q as m};
