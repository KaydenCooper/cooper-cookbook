import{r as e,c as t,o as a,a as s,b as o,F as r,d as n,w as c,t as i,e as l,f as d,C as u,i as p,S as m,g,p as b,h,j as f,k as S,l as v,m as E}from"./vendor.33a26869.js";const y=e({user:[],account:{},recipe:[],categories:[{url:"/assets/appetizer.55020a0d.jpg",name:"APPETIZERS"},{url:"/assets/bread.4a01c324.jpg",name:"BREAD"},{url:"/assets/muffin.61a6f7f6.jpg",name:"MUFFINS"},{url:"/assets/pancake.09ca9fd7.jpg",name:"PANCAKES"},{url:"/assets/rolls.f1e5fdec.jpg",name:"ROLLS"},{url:"/assets/scones.cb549752.jpg",name:"SCONES"},{url:"/assets/cake.befbed79.jpg",name:"CAKES"},{url:"/assets/candy.4342e777.jpg",name:"CANDY"},{url:"/assets/snacks.5b46dff5.jpg",name:"SNACKS"},{url:"/assets/canning.517484d1.jpg",name:"CANNING"},{url:"/assets/casserole.287bdd2b.jpg",name:"CASSEROLES"},{url:"/assets/cookies.86f2d6a1.jpg",name:"COOKIES"},{url:"/assets/brownies.80c43b55.jpg",name:"BROWNIES"},{url:"/assets/frosting.76610d85.jpg",name:"FROSTINGS"},{url:"/assets/main.92ca5736.jpg",name:"MAIN DISHES"},{url:"/assets/side.9bd25e17.jpg",name:"SIDE DISHES"},{url:"/assets/pie.e8eec809.jpg",name:"PIES & CRUSTS"},{url:"/assets/soup.d223a845.jpg",name:"SOUPS & SALADS"},{url:"/assets/dips.3770f736.jpg",name:"DIPS | SAUCES | DRESSINGS"},{url:"/assets/pastries.005fe81b.jpg",name:"DESSERTS | PASTRIES | PUDDINGS"},{url:"/assets/misc.9c60bf08.jpg",name:"MISC"}]});const _={name:"App",setup:()=>({appState:t((()=>y))})},A={class:"justify-content-center"};_.render=function(e,t,c,i,l,d){const u=n("Navbar"),p=n("router-view");return a(),s(r,null,[o("header",null,[o(u)]),o("main",A,[o(p)])],64)};const C={name:"Categories",props:["category"],setup:()=>({}),computed:{},methods:{},components:{}},T={class:"categories rounded col-5 col-md-2 mx-2 my-4 px-0 card shadow"},w={class:"embed-responsive embed-responsive-4by3  d-flex justify-content-center align-items-end"},j={class:" col-12 p-1 card card-background"},I={class:"text-light my-2"};C.render=function(e,t,r,l,d,u){const p=n("router-link");return a(),s("div",T,[o(p,{to:{name:"RecipesPage",params:{categoryName:r.category.name}}},{default:c((()=>[o("div",w,[o("img",{src:r.category.url,class:"card-img-top embed-responsive-item",alt:"image"},null,8,["src"]),o("div",j,[o("h5",I,i(r.category.name),1)])])])),_:1},8,["to"])])};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const k=window.location.origin.includes("localhost"),P=k?"http://localhost:3000":"";let x;const O={},N=function(e,t){if(!t||0===t.length)return e();if(void 0===x){const e=document.createElement("link").relList;x=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in O)return;O[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":x,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function D(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return N((()=>import("./AboutPage.88cdfa7d.js")),["/assets/AboutPage.88cdfa7d.js","/assets/vendor.33a26869.js"]);case"./pages/AccountPage.vue":return N((()=>import("./AccountPage.6eab265f.js")),["/assets/AccountPage.6eab265f.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.33a26869.js"]);case"./pages/HomePage.vue":return N((()=>import("./HomePage.274e7c52.js")),["/assets/HomePage.274e7c52.js","/assets/HomePage.adefa902.css","/assets/vendor.33a26869.js"]);case"./pages/RecipesPage.vue":return N((()=>import("./RecipesPage.4f325d98.js")),["/assets/RecipesPage.4f325d98.js","/assets/RecipesPage.6b4a7ada.css","/assets/vendor.33a26869.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./pages/${e}.vue`)}const L=[{path:"/",name:"Home",component:D("HomePage")},{path:"/about",name:"About",component:D("AboutPage")},{path:"/account",name:"Account",component:D("AccountPage")},{path:"/recipesPage/:categoryName",name:"RecipesPage",component:D("RecipesPage")}],U=l({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:d(),routes:L});function M(e,t){if(k)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const B={log(){M("log",arguments)},error(){M("error",arguments)},warn(){M("warn",arguments)},assert(){M("assert",arguments)},trace(){M("trace",arguments)}},H=u.create({baseURL:P,timeout:8e3});let $=!1,K=[];const z="connected",F="authenticate",G="authenticated",W="error";const V=new class extends class{constructor(e=P){this.socket=p(e||P),this.on(z,this.onConnected).on(G,this.onAuthenticated).on(W,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){B.log("[SOCKET_CONNECTION]",e),$=!0}onAuthenticated(e){B.log("[SOCKET_AUTHENTICATED]",e);const t=[...K];K=[],t.forEach((e=>{this.emit(e.action,e.payload)}))}authenticate(e){this.socket.emit(F,e)}onError(e){B.error("[SOCKET_ERROR]",e)}emit(e,t){if(!$)return B.log("[ENQUEING_ACTION]",{action:e,payload:t}),K.push({action:e,payload:t});this.socket.emit(e,t)}}{constructor(){super(),this.on("error",this.onError)}onError(e){B.error("[SOCKET_ERROR]",e),class{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",s="Yes, delete it!"){try{return!!(await m.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:s})).isConfirmed}catch(o){return!1}}static toast(e="Warning!",t="warning",a="top-end",s=3e3,o=!0){m.fire({title:e,icon:t,position:a,timer:s,timerProgressBar:o,toast:!0,showConfirmButton:!1})}}.toast(e.message,"error")}},q=g({domain:"dev-m9h6hdbs.us.auth0.com",clientId:"7XOq5IhNoYgfdg51vdXxFyxxQSKWqX56",audience:"https://cooperfamilycookbook.com",useRefreshTokens:!0,onRedirectCallback:e=>{U.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function Y(e){if(!q.isAuthenticated)return e;const t=1e3*q.identity.exp,a=t<Date.now(),s=t<Date.now()+432e5;return a?await q.loginWithPopup():s&&(await q.getTokenSilently(),H.defaults.headers.authorization=q.bearer,V.authenticate(q.bearer)),e}q.on(q.AUTH_EVENTS.AUTHENTICATED,(async function(){H.defaults.headers.authorization=q.bearer,H.interceptors.request.use(Y),V.authenticate(q.bearer)}));const X={setup:()=>({state:e({dropOpen:!1}),user:t((()=>y.user)),async login(){q.loginWithPopup()},async logout(){q.logout({returnTo:window.location.origin})}})},Q=f("data-v-8cb5e402");b("data-v-8cb5e402");const Z={class:"navbar navbar-expand-lg navbar-light table-bg shadow"},J=o("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1),ee={class:"collapse navbar-collapse text-center",id:"navbarText"},te={class:"navbar-nav mr-auto"},ae={class:"nav-item"},se=S(" Cooper Family Cookbook "),oe=o("form",{class:"form-inline mr-sm-4 justify-content-center"},[o("input",{class:"form-control border border-dark border-radius",type:"search",placeholder:"Search","aria-label":"Search"}),o("button",{class:"btn cuttingboard-bg my-2 my-sm-0 border border-rounded border-dark",type:"submit"}," Search ")],-1);h();const re=Q(((e,t,r,c,i,l)=>{const d=n("router-link");return a(),s("nav",Z,[J,o("div",ee,[o("ul",te,[o("li",ae,[o(d,{to:{name:"Home"},class:"nav-link text-dark navTitle card cuttingboard-bg px-4 my-2 py-0 shadow text-center"},{default:Q((()=>[se])),_:1})])]),oe])])}));X.render=re,X.__scopeId="data-v-8cb5e402";var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});const ce={name:"Recipe",props:["recipe"],setup:()=>({}),computed:{},methods:{},components:{}},ie={class:"font"},le={class:"list-unstyled mb-0 card table-bg col-12 shadow px-5 font-small"},de={class:" pt-2 px-2"},ue={class:" mb-2 mx-2"},pe={class:"card card-body table-bg text-dark p-1  shadow"},me={class:"list-group"},ge={class:"list-group-item p-1"},be=o("p",{class:"font-weight-bold"},[o("u",{class:"font-small"},"INGREDIENTS:")],-1),he={class:"inputIngredient"},fe={class:"list-group-item p-1"},Se=o("p",{class:"font-weight-bold"},[o("u",{class:"font-small"},"DIRECTIONS:")],-1),ve={class:"inputDirections"};ce.render=function(e,t,r,l,d,u){const p=n("RecipeModal");return a(),s("div",null,[o("div",{type:"button",class:"recipe rounded col-12 my-4 mr-md-5 p-4  card table-bg border border-dark  shadow text-center","data-toggle":"modal","data-target":"#recipeModal-"+r.recipe.id},[o("h5",ie,i(r.recipe.title),1)],8,["data-target"]),o(p,{id:"recipeModal-"+r.recipe.id},{"modal-header":c((()=>[o("ul",le,[o("li",null,[o("h1",de,i(r.recipe.title),1)]),o("p",ue," Created By: "+i(r.recipe.createdBy),1)])])),"modal-body":c((()=>[o("div",null,[o("div",pe,[o("ul",me,[o("li",ge,[be,o("p",he,i(r.recipe.ingredients),1)]),o("li",fe,[Se,o("p",ve,i(r.recipe.directions),1)])])])])])),_:1},8,["id"])])};var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce});const ye={name:"Modal",props:["modalActive"],setup:()=>({})},_e={class:"modal",tabindex:"-1"},Ae={class:"modal-dialog"},Ce={class:"modal-content"},Te={class:"modal-header justify-content-center cuttingboard-bg p-4"},we={class:"modal-body cuttingboard-bg pt-0 px-4 pb-4"},je=o("button",{type:"button",class:"btn table-bg col-12 px-4 mt-4 shadow ","data-dismiss":"modal","aria-label":"Close"}," CLOSE ",-1);ye.render=function(e,t,r,n,c,i){return a(),s("div",_e,[o("div",Ae,[o("div",Ce,[o("div",Te,[v(e.$slots,"modal-header")]),o("div",we,[v(e.$slots,"modal-body"),je])])])])};var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const Re=E(_);!function(e){const t={"./components/Categories.vue":R,"./components/Navbar.vue":ne,"./components/Recipe.vue":Ee,"./components/RecipeModal.vue":Ie};Object.entries(t).forEach((([t,a])=>{const s=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,a.default)}))}(Re),Re.use(U).mount("#app");export{y as A,C as _,H as a,ce as b,B as l,U as r};
