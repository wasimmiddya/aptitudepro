import{r,j as s,R as d}from"./index-d344998d.js";import{Q as x}from"./ExamLayout-0bb9f5c6.js";function m(){const[o,c]=r.useState({}),{currentQuestion:e,paper:a}=r.useContext(x),{questionSet:i}=a,l=({target:{name:t,value:n}})=>{c({...o,[t]:n}),a.questionSet[e].selected=n};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"px-12",children:[s.jsx("div",{children:s.jsxs("h3",{className:"text-xl font-semibold my-2",children:["Question: ",i[e].questionNo]})}),s.jsx("div",{children:s.jsx("p",{className:"transition-all",children:i[e].questionBody})}),s.jsx("div",{className:"mt-4",children:s.jsx("ul",{className:"space-y-2",children:i[e].options.map((t,n)=>s.jsxs(d.Fragment,{children:[console.log("option render"),s.jsxs("li",{children:[s.jsx("input",{type:"radio",name:e,value:t,className:"text-pink-500 focus:ring-1 focus:ring-pink-500 cursor-pointer",onChange:l,checked:t===o[e]}),s.jsx("span",{className:"mx-2",children:t})]})]},n))})})]})})}export{m as default};