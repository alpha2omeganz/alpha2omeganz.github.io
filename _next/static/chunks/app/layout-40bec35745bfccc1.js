(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4465:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8346,23)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,97))},97:(e,t,s)=>{"use strict";s.d(t,{default:()=>N});var a=s(5155),l=s(5565),r=s(7396),o=s(6046),c=s(2115);function n(){let e=(0,o.usePathname)(),t=(0,o.useSearchParams)();return(0,c.useEffect)(()=>{console.log("".concat(e,"?").concat(t)),document.getElementById("about-nav-details").removeAttribute("open")},[e,t]),null}var i=s(6308),d=s(5683),h=s(6899),m=s(8763),u=s(6084),x=s(2888),f=s(1536),b=s(648),p=s(6280);let g=[{title:"Home",href:"/",Icon:u.y2w},{title:"About The Gospel",href:"/about/gospel",Icon:f.C2k},{title:"About the ministry",href:"/about/ministry",Icon:f.C2k},{title:"About the series",href:"/about/series",Icon:p.ItZ},{title:"About the author",href:"/about/author",Icon:x.CKj},{title:"Catalogue",href:"/catalogue",Icon:f.vd0},{title:"Contact",href:"/contact",Icon:b.mm2}];function j(){let[e,t]=(0,c.useState)(!1),s=(0,c.useRef)(null);return(0,i.A)(s,()=>t(!1)),(0,a.jsxs)("div",{ref:s,className:"md:hidden ml-auto mr-0 w-[55%] ".concat(e&&"bg-[rgb(206,200,183)] bg-no-repeat bg-cover"),children:[(0,a.jsx)("div",{className:"ml-auto mr-0 w-12 h-12",children:(0,a.jsx)(m.o,{toggled:e,size:20,toggle:t})}),(0,a.jsx)(d.N,{children:e&&(0,a.jsx)(h.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed left-[45%] shadow-4xl right-0 p-2 bg-[rgb(206,200,183)] bg-no-repeat bg-cover border-b rounded-xl rounded-t-none border-b-white/20",children:(0,a.jsx)("ul",{className:"grid gap-2",children:g.map((e,s)=>{let{Icon:l}=e;return(0,a.jsx)(h.P.li,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",stiffness:260,damping:20,delay:.1+s/10},className:"w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-300",children:(0,a.jsxs)("a",{onClick:()=>t(e=>!e),className:"flex items-center justify-between w-full p-2 rounded-xl bg-slate-100",href:e.href,children:[(0,a.jsx)("span",{className:"flex gap-1 text-md",children:e.title}),(0,a.jsx)(l,{className:"text-xl"})]})},e.title)})})})})]})}function N(){let e=(0,o.usePathname)(),t=t=>e.includes(t)&&"/"!==t||e===t?"text-shadow":"",s=e.includes("/about"),i=e.includes("/about/gospel"),d=e.includes("/about/ministry"),h=e.includes("/about/series"),m=e.includes("/about/author");return(0,a.jsxs)("div",{className:"flex align-middle",children:[(0,a.jsx)(c.Suspense,{children:(0,a.jsx)(n,{})}),(0,a.jsx)("div",{className:"w-36 h-36 relative flex-none md:mt-3 mt-1",children:(0,a.jsx)(l.default,{src:"/alpha2omega-logo.png",className:"rounded-full border-2 border-black ml-1 md:ml-0",fill:!0,alt:"Alpha2Omega logo"})}),(0,a.jsx)(j,{}),(0,a.jsx)("div",{className:"flex-1 md:block hidden",children:(0,a.jsxs)("div",{className:"w-120 mt-5 ml-2 text-lg grid grid-cols-15 text-center",children:[(0,a.jsx)("div",{className:"col-start-1 col-span-3",children:(0,a.jsx)(r.default,{href:"/",className:"".concat(t("/")," hover:text-shadow"),children:"HOME"})}),(0,a.jsx)("span",{className:"col-start-4",children:"|"}),(0,a.jsxs)("details",{id:"about-nav-details",className:"col-start-5 col-span-3 flex flex-col",children:[(0,a.jsx)("summary",{children:(0,a.jsx)("span",{className:"".concat(t("/about")," cursor-pointer hover:text-shadow"),children:"ABOUT"})}),(0,a.jsx)(r.default,{href:"/about/gospel",className:"text-sm text-left ml-1 mr-0 hover:text-shadow",children:"The Gospel"}),(0,a.jsx)(r.default,{href:"/about/ministry",className:"text-sm text-left ml-1 mr-0 hover:text-shadow",children:"Ministry"}),(0,a.jsx)(r.default,{href:"/about/series",className:"text-sm text-left ml-1 mr-0 hover:text-shadow",children:"Series"}),(0,a.jsx)(r.default,{href:"/about/author",className:"text-sm text-left ml-1 mr-0 hover:text-shadow",children:"Author"})]}),(0,a.jsx)("span",{className:"col-start-8",children:"|"}),(0,a.jsx)("div",{className:"col-start-9 col-span-3",children:(0,a.jsx)(r.default,{href:"/catalogue",className:"".concat(t("/catalogue")," hover:text-shadow"),children:"CATALOGUE"})}),(0,a.jsx)("span",{className:"col-start-12",children:"|"}),(0,a.jsx)("div",{className:"col-start-13 col-span-3",children:(0,a.jsx)(r.default,{href:"/contact",className:"".concat(t("/contact")," hover:text-shadow"),children:"CONTACT"})})]})}),!s&&(0,a.jsx)("div",{className:"w-36 h-36 relative flex-none mt-3 md:block hidden",children:(0,a.jsx)(l.default,{src:"/alpha6-logo.png",className:"rounded-full border-2 border-black",fill:!0,alt:"Alpha6 logo"})}),m&&(0,a.jsxs)("div",{className:"md:block hidden",children:[(0,a.jsx)(l.default,{src:"/peter-at-pinatubo.jpg",className:"mt-2",width:300,height:180,alt:"Peter Dennis at Pinotubo, 2024"}),(0,a.jsx)("span",{className:"absolute text-2xs font-bold text-white ml-32 -mt-7",children:"Peter Dennis"}),(0,a.jsx)("span",{className:"absolute text-2xs text-white ml-32 -mt-4",children:"Pinatubo, 2024"})]}),(i||h)&&(0,a.jsx)("div",{className:"md:block hidden",children:(0,a.jsx)(l.default,{src:"/sunset-cropped.jpg",className:"mt-2",width:290,height:170,alt:"Sunset, Doughboy Bay, Stewart Island"})}),d&&(0,a.jsx)("div",{className:"md:block hidden",children:(0,a.jsx)(l.default,{src:"/creation-experience-genesis.jpg",className:"mt-2",width:290,height:170,alt:"Creation Experience Genesis"})})]})}},347:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[838,479,512,844,711,873,970,835,441,517,358],()=>t(4465)),_N_E=e.O()}]);