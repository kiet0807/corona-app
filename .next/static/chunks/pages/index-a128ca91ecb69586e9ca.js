_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("23aj")}])},"23aj":function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),o=i("q1tI"),s=i("nf+V"),c=i("20a2"),r=function(e){var t=e.object,i=e.onClick,o=e.onSkip;return Object(n.jsxs)(s.c,{bg:"#ED3D3D",sx:{flexDirection:"column",justifyContent:"space-between"},children:[Object(n.jsx)(s.c,{mt:50,sx:{height:"40%",alignItems:"center",justifyContent:"center"},children:Object(n.jsx)(s.e,{src:t.image,variant:"boarding"})}),Object(n.jsxs)(s.c,{sx:{flexDirection:"column"},children:[Object(n.jsx)(s.g,{color:"white",mx:26,mb:10,sx:{fontSize:22,fontWeight:"heading"},children:t.title}),Object(n.jsx)(s.g,{color:"white",mx:26,sx:{fontSize:1,fontWeight:"body",lineHeight:"24px"},children:t.content})]}),Object(n.jsxs)(s.c,{mx:20,mb:30,sx:{justifyContent:"space-between",alignItems:"center"},children:[Object(n.jsx)(s.g,{color:"white",onClick:o,sx:{fontSize:15,fontWeight:"heading",cursor:"pointer",transition:"all 0.3s ease-in-out 0s",opacity:.8,":hover":{opacity:1},":active":{transform:"scale(0.95)"}},children:"Skip"}),Object(n.jsxs)(s.c,{ml:35,children:[Object(n.jsx)(s.a,{bg:1===t.id?"white":"#870000",m:"2px",sx:{borderRadius:999,width:7,height:7}}),Object(n.jsx)(s.a,{bg:2===t.id?"white":"#870000",m:"2px",sx:{borderRadius:999,width:7,height:7}}),Object(n.jsx)(s.a,{m:"2px",bg:3===t.id?"white":"#870000",sx:{borderRadius:999,width:7,height:7}})]}),Object(n.jsx)(s.b,{onClick:i,variant:"primary",children:Object(n.jsx)(s.g,{color:"chelseaCucumber",sx:{fontWeight:"heading",fontSize:15},children:"Next"})})]})]})},a=[{id:1,image:"/images/boarding1.PNG",title:"Fever",content:"He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic  medical conditions."},{id:2,image:"/images/boarding2.PNG",title:"Cough",content:"such as heart or lung disease or diabetes, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such as influenza."},{id:3,image:"/images/boarding3.PNG",title:"Breathing Difficulty",content:"Contact your doctor or clinic right away if you have COVID-19 symptoms, you've been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19"}];t.default=function(){var e=Object(c.useRouter)(),t=Object(o.useState)(0),i=t[0],h=t[1],d=Object(o.useState)(!1),l=d[0],u=d[1];Object(o.useEffect)((function(){var e=setTimeout((function(){u(!0)}),2e3);return function(){return clearTimeout(e)}}),[]);return Object(n.jsx)(s.c,{sx:{width:"100%",justifyContent:"center",alignItems:"center"},children:Object(n.jsxs)(s.c,{sx:{width:360,height:680},children:[Object(n.jsx)(s.c,{sx:{position:"absolute",width:360,height:680,opacity:l?0:1,transition:"all 1.5s ease-in-out 0s",zIndex:l?-1:1},children:Object(n.jsx)(s.e,{src:"/images/covid.png",alt:"image"})}),l&&Object(n.jsx)(r,{object:a[i],onClick:function(){2===i?e.push("/dashboard"):h(i+1)},onSkip:function(){e.push("/dashboard")}})]})})}}},[["/EDR",0,2,1,3,4]]]);