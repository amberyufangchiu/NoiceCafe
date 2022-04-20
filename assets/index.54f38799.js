import{r as c,j as x,s as r,A,R as w,B as E,S as B,a as f,b as D,c as S,H as I}from"./vendor.3ca879c7.js";const k=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function p(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};k();var h=c.exports.createContext();const e=x.exports.jsx,a=x.exports.jsxs;r.span`
  background-color: red;
  position: absolute;
  margin: 0 9px;
`;const j=r.a`
  font-size: 20px;
  /* margin-bottom: 10px; */
  padding: 0;
`,O=r.span`
  background-color: rgb(224, 50, 50);
  padding: 2px 5px;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  margin: 0 0 50px 5px;
  font-weight: 600;
`,q=()=>{const{cartNum:d}=c.exports.useContext(h),{setCartNum:i}=c.exports.useContext(h);return c.exports.useEffect(()=>{i(localStorage.getItem("cartNum"))},[]),e("nav",{className:"navbar navbar-expand-lg navbar-light m-4",children:a("div",{className:"container-fluid",children:[e("a",{className:"navbar-brand m-2",href:"/",children:"Noice Cafe"}),e("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:e("span",{className:"navbar-toggler-icon"})}),e("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:a("ul",{className:"navbar-nav",children:[e("li",{className:"nav-item m-2",children:e("a",{className:"nav-link",href:"/#coffee",children:"\u5178\u85CF\u5496\u5561"})}),a("li",{className:"nav-item dropdown m-2",children:[e("a",{className:"nav-link dropdown-toggle",href:"/Product",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"\u7DDA\u4E0A\u9078\u8CFC"}),e("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:e("li",{children:e("a",{className:"dropdown-item",href:"/Product",children:"\u6FFE\u639B\u5F0F\u5496\u5561"})})})]}),e("li",{className:"nav-item m-2",children:e("a",{className:"nav-link",href:"/#contactUs",children:"\u806F\u7D61\u6211\u5011"})}),e("li",{className:"nav-item m-2",children:a(j,{className:"nav-link ",href:"/Cart",children:[e(A,{}),e(O,{children:d})]})})]})})]})})},L=r.div`
  width: 100%;
  height: 50vh;
  background-image: url("https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10%;
`,M=r.h1`
  font-size: 50px;
  color: white;
`,P=r.p`
  font-size: 24px;
  color: white;
`,z=r.div`
  display: flex;
`,b=r.button`
  font-size: 16px;
  padding: 10px;
  background-color: white;
  color: #080808;
  border: none;
  margin-right: 15px;
  border-radius: 20px;
`,J=()=>a(L,{children:[e(M,{children:"Noice Cafe"}),e(P,{children:"\u597D\u7684\u5496\u5561\u5E36\u7D66\u4F60\u975E\u51E1\u7684\u4E00\u5929"}),a(z,{children:[e(b,{children:"\u6DFA\u5690\u6D41\u5149"}),e(b,{children:"\u66A2\u98F2\u9187\u82B3"})]})]}),R=r.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,_=r.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0px 80px;
`,$=r.div`
  display: flex;
  flex-direction: column;
`,W=r.p`
  line-height: 28px;
  width: 30vw;
  height: auto;
  margin-top: 10px;
`,H=()=>a(R,{id:"coffee",children:[e(_,{src:"https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_960_720.jpg",alt:""}),a($,{children:[e("h3",{children:"\u95DC\u65BCNoice"}),e(W,{children:"\u5F9E\u539F\u7522\u5730\u7684\u4E00\u682A\u5496\u5561\u6A39\uFF0C\u6700\u7D42\u6210\u70BA\u60A8\u624B\u4E2D\u7684\u4E00\u676F\u5496\u5561\uFF1B\u6211\u5011\u5805\u6301\u63A1\u8CFC\u4E26\u4E14\u70D8\u7119\u6700\u9AD8\u54C1\u8CEA\u7684\u5496\u5561\uFF0C\u9019\u662F\u6211\u5011\u4E00\u76F4\u52AA\u529B\u7684\u57FA\u672C\u539F\u5247\uFF1B\u6700\u521D\u7684\u5341\u82F1\u544E\u5230\u6700\u5F8C\u5341\u82F1\u544E\u7684\u73CD\u8CB4\u9AD4\u9A57\uFF0C\u70BA\u5496\u5561\u7684\u6545\u4E8B\u505A\u4E86\u6700\u4F73\u7684\u8A3B\u89E3\uFF0C\u540C\u6642\u4E5F\u5851\u9020\u51FA\u5496\u5561\u5BB6\u65CF\u7684\u7368\u7279\u98A8\u5473\u53CA\u53E3\u611F\u7279\u6027\uFF0C\u95B1\u8B80\u5496\u5561\u7684\u6545\u4E8B\uFF0C\u53EF\u4EE5\u8B93\u60A8\u66F4\u77AD\u89E3\u5496\u5561\uFF0C\u8C50\u5BCC\u60A8\u7684\u5496\u5561\u9AD4\u9A57\u3002"})]})]}),G=r.div`
  width: 100%;
  height: 50vh;
  padding: 0px 50px;
`,T=()=>e(G,{children:a("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[a("div",{className:"carousel-indicators",children:[e("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":0,className:"active","aria-current":"true","aria-label":"Slide 1"}),e("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":1,"aria-label":"Slide 2"}),e("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":2,"aria-label":"Slide 3"})]}),a("div",{className:"carousel-inner",children:[e("div",{className:"carousel-item active",children:e("img",{src:"https://cdn.pixabay.com/photo/2017/08/06/07/09/coffee-2589759_960_720.jpg",className:"d-block w-100",alt:"..."})}),e("div",{className:"carousel-item",children:e("img",{src:"https://cdn.pixabay.com/photo/2021/09/06/01/13/coffee-6600644_960_720.jpg",className:"d-block w-100",alt:"..."})}),e("div",{className:"carousel-item",children:e("img",{src:"https://cdn.pixabay.com/photo/2019/07/13/11/44/coffee-4334647_960_720.jpg",className:"d-block w-100",alt:"..."})})]}),a("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[e("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Previous"})]}),a("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[e("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),e("span",{className:"visually-hidden",children:"Next"})]})]})}),Z=r.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;r.h3`
  /* margin: 50px; */
`;const U=r.div`
  display: flex;
  flex-direction: row;
`,V=r.div`
  display: flex;
  flex-direction: column;
`,K=()=>e(Z,{id:"contactUs",className:"container",children:a("div",{className:"row",children:[e("h3",{className:"col-12 text-center",children:"\u806F\u7D61\u6211\u5011"}),a(U,{className:"row",children:[e("iframe",{className:"p-3 col-6",src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10224.83598413843!2d120.6382787110568!3d24.165765776572254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dec4ca3a271%3A0xd8b5a337271e60e2!2z6Ie65Lit5ZyL5a625q2M5YqH6ZmiIE5hdGlvbmFsIFRhaWNodW5nIFRoZWF0ZXI!5e0!3m2!1szh-TW!2stw!4v1647277432766!5m2!1szh-TW!2stw",width:"600",height:"400",style:{border:0},allowFullScreen:"",loading:"lazy"}),a(V,{className:"p-3 col-6",children:[a("form",{children:[a("div",{className:"form-group m-3",children:[e("label",{htmlFor:"formGroupExampleInput",children:"\u60A8\u7684\u59D3\u540D"}),e("input",{type:"text",className:"form-control",id:"formGroupExampleInput"})]}),a("div",{className:"form-group m-3",children:[e("label",{htmlFor:"formGroupExampleInput2",children:"\u60A8\u7684\u4FE1\u7BB1"}),e("input",{type:"text",className:"form-control",id:"formGroupExampleInput2"})]}),a("div",{className:"form-group m-3",children:[e("label",{htmlFor:"comment",children:"\u60F3\u5C0D\u6211\u5011\u8AAA\u4EC0\u9EBC"}),e("textarea",{className:"form-control",rows:3,id:"comment",defaultValue:""})]})]}),e("button",{type:"button",class:"btn btn-primary m-3",children:"\u5BC4\u9001"})]})]})]})}),X=r.div`
  background-color: #f8f8f8;
  height: 10vh;
  color: gray;
  padding-top: 2%;
  /* position: absolute;
  bottom: 0;
  left: 0; */
`,Y=()=>e(X,{className:"text-center align-bottom",children:e("p",{children:"Copyright \xA9 Noice caf\xE9 \u8457\u4F5C\u6B0A\u6240\u6709. All rights reserved."})}),Q=()=>a("div",{children:[e(J,{}),e(H,{}),e(T,{}),e(K,{})]}),ee=()=>e("div",{children:e(Q,{})}),ae=[{id:1,name:"CAFE!N \u51A0\u8ECD\u6FFE\u639B\u5496\u5561",img:"https://diz36nn4q02zr.cloudfront.net/webapi/imagesV3/Original/SalePage/7430667/0/637822687920400000?v=1",price:500,quantity:1},{id:2,name:"\u767E\u871C\u82B1\u5712\u5496\u5561\u8C46",img:"http://sc04.alicdn.com/kf/H128c4fdb36fa47208f034c8a961e72d6w.jpg",price:550,quantity:1},{id:3,name:"\u5370\u5C3C\u706B\u5C71\u5496\u5561\u8C46\u6FFE\u639B\u5496\u5561",img:"https://shoplineimg.com/56f26782e37ec6b62e000084/5ecb9db4a63c9c0027efb3d9/800x.jpg?",price:600,quantity:1},{id:4,name:"\u6FFE\u639B\u5F0F\u5496\u5561-\u884C\u5BB6\u9996\u9078\u7D9C\u5408",img:"https://cf.shopee.co.id/file/8827c7da9ba6a060f9f8b6cfa488fe5e",price:770,quantity:1},{id:5,name:"\u6FFE\u639B\u5F0F\u5496\u5561-\u838A\u5712\u55AE\u54C1\u7D9C\u5408",img:"https://auresso.com.my/wp-content/uploads/2020/03/MW-DB_1024x1024@2x.jpg",price:850,quantity:1},{id:6,name:"\u54E5\u502B\u7FE1\u7389\u7CBE\u54C1\u5496\u5561\u8C46",img:"https://42coffeeroasters.com/wp-content/uploads/sites/3/2020/12/WhatsApp-Image-2021-02-06-at-13.24.18-600x600.jpeg",price:200,quantity:1}],te=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,re=JSON.parse(localStorage.getItem("cart")||"[]"),oe=()=>{const{cartNum:d}=c.exports.useContext(h),{setCartNum:i}=c.exports.useContext(h),[t,p]=c.exports.useState(re),o=s=>{if(t===null)console.log("im empty"),localStorage.setItem("cart","[]"),localStorage.setItem("cartNum",1),p(s);else if(t.length!==0&&t.some(u=>u.id===s.id)){for(let u=0;u<t.length;u++)if(t[u].id===s.id)return console.log("u\u5594"),t[u].quantity++,localStorage.setItem("cart",JSON.stringify(t))}else return console.log("\u6C92\u91CD\u8907"),p([...t,s])};localStorage.setItem("cart",JSON.stringify(t));const n=localStorage.getItem("cart"),m=JSON.parse(n);return c.exports.useEffect(()=>{i(m!=null?m.length:0)},[t]),localStorage.setItem("cartNum",d),e("div",{className:"col-lg-9 col-12 py-3 px-5",children:e("div",{className:"row",children:ae.map((s,u)=>e("div",{className:"col-lg-4 pb-5",children:a("div",{className:"card",style:{width:"18rem"},children:[e("img",{className:"card-img-top",src:s.img,alt:"Card image cap"}),a("div",{className:"card-body",children:[e("h5",{className:"card-title",children:s.name}),a(te,{children:[a("p",{className:"m-1",children:["$",s.price]}),e("button",{className:"btn btn-primary ",onClick:()=>o(s),children:"\u52A0\u5165\u8CFC\u7269\u8ECA"})]})]})]})},u))})})},le=()=>e("div",{className:"container",children:a("div",{className:"row",children:[e("div",{className:"col-3 vertical-nav py-5",children:a("nav",{className:"nav flex-column",children:[e("a",{className:"nav-link active text-body all-product border-left-color",href:"#",children:"\u6240\u6709\u5546\u54C1"}),e("a",{className:"nav-link text-secondary",href:"#",children:"\u6FFE\u639B\u5496\u5561"})]})}),e(oe,{})]})}),ne=()=>e("div",{children:e(le,{})}),N=r.button`
  background-color: white;
  color: gray;
  padding: 5px;
  font-size: 26px;
  border: none;
  margin: auto;
`,ce=r.div`
  /* background-color: #9f9d9d;
  width: 40vw;
  height: 55vh;
  text-align: center;
  border-radius: 50px;
  color: white; */
`,ie=()=>{c.exports.useContext(h);const{setCartNum:d}=c.exports.useContext(h),i=localStorage.getItem("cart"),t=JSON.parse(i),p=JSON.parse(localStorage.getItem("cart")||"[]"),[o,n]=c.exports.useState(p),s=t.map(l=>l.price*l.quantity).reduce((l,g)=>l+g,0),u=l=>{l.quantity++,localStorage.setItem("cart",JSON.stringify(t)),n(t)},v=l=>{l.quantity!==1?l.quantity--:console.log("needtoremove"),localStorage.setItem("cart",JSON.stringify(t)),n(t)},C=l=>{const g=t.filter(F=>F!==l);localStorage.setItem("cart",JSON.stringify(g)),n(g)},y=()=>{localStorage.setItem("cart",JSON.stringify([])),n([])};return c.exports.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(t)),d(t!=null?t.length:0)},[o]),e("div",{className:"container d-flex justify-content-center",style:{minHeight:70+"vh"},children:e("div",{className:"row",children:a("div",{className:"col-lg-12 px-5 ",children:[e("h3",{className:"font-weight-bold",children:"\u8CFC\u7269\u8ECA\u6E05\u55AE"}),e("div",{children:t===null||t.length===0&&e(ce,{children:"\u60A8\u7684\u8CFC\u7269\u8ECA\u88E1\u6C92\u6709\u5546\u54C1\uFF0C\u8ACB\u81F3\u7DDA\u4E0A\u9078\u8CFC\u5340\u9078\u53D6"})}),Array.isArray(t)&&t.map((l,g)=>e("div",{className:"cart-list my-3 row",children:a("div",{className:"cart-product ",children:[e("img",{className:"card-img-top w-25",src:l.img,alt:"Card image cap"}),a("div",{className:"row my-4 ",children:[a("div",{className:"col-6",children:[e("p",{className:"card-title",children:l.name}),a("p",{className:"m-1",children:["$",l.price]})]}),a("div",{className:"col-6",children:[a("div",{className:"d-flex align-items-center",children:[e(N,{onClick:()=>v(l),children:" - "}),e("p",{className:"h5 m-0",children:l.quantity}),e(N,{onClick:()=>u(l),children:" + "}),e(w,{"data-toggle":"modal","data-target":"#exampleModal"})]}),e("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:e("div",{className:"modal-dialog",role:"document",children:a("div",{className:"modal-content",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u79FB\u9664\u8CFC\u7269\u8ECA\u5546\u54C1"}),e("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:e("span",{"aria-hidden":"true",children:"\xD7"})})]}),e("div",{className:"modal-body",children:"\u60A8\u78BA\u5B9A\u522A\u9664\u5546\u54C1\u55CE\uFF1F"}),a("div",{className:"modal-footer",children:[e("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"\u53D6\u6D88"}),e("button",{type:"button",className:"btn btn-primary",onClick:()=>C(l),"data-dismiss":"modal",children:"\u78BA\u8A8D"})]})]})})})]})]})]})},g)),e("hr",{}),a("div",{className:"d-flex flex-row justify-content-between my-4",children:[a("p",{children:["\u5546\u54C1\u7E3D\u91D1\u984D: $",s]}),e("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#purchase",onClick:()=>y(),children:"\u78BA\u5B9A\u8CFC\u8CB7"}),e("div",{className:"modal fade",id:"purchase",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:e("div",{className:"modal-dialog",role:"document",children:a("div",{className:"modal-content",children:[e("div",{className:"modal-header",children:e("h5",{className:"modal-title",id:"exampleModalLabel",children:"\u611F\u8B1D\u60A8\u7684\u8CFC\u8CB7\u5537"})}),e("div",{className:"modal-footer",children:e("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",children:"\u95DC\u9589"})})]})})})]})]})})})},se=()=>{const[d,i]=c.exports.useState(0);return e(h.Provider,{value:{cartNum:d,setCartNum:i},children:a(E,{children:[e(q,{}),a(B,{children:[e(f,{path:"/",component:ee,exact:!0}),e(f,{path:"/Product",component:ne}),e(f,{path:"/Cart",component:ie})]}),e(Y,{})]})})};D.render(e(S.StrictMode,{children:e(I,{children:e(se,{})})}),document.getElementById("root"));
