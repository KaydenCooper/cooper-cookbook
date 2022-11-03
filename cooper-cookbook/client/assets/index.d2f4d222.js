import{r as e,c as t,o as a,a as s,b as o,F as r,d as n,w as c,t as i,e as l,f as u,g as d,C as p,i as m,S as g,h as b,p as h,j as f,k as S,l as v,m as E,n as y}from"./vendor.b51a37cd.js";const _=e({user:[],account:{},recipe:[],categories:[{url:"../src/assets/img/appetizer.jpg",name:"APPETIZERS"},{url:"../src/assets/img/bread.jpg",name:"BREAD"},{url:"../src/assets/img/muffin.jpg",name:"MUFFINS"},{url:"../src/assets/img/pancake.jpg",name:"PANCAKES"},{url:"../src/assets/img/rolls.jpg",name:"ROLLS"},{url:"../src/assets/img/scones.jpg",name:"SCONES"},{url:"../src/assets/img/cake.jpg",name:"CAKES"},{url:"../src/assets/img/candy.jpg",name:"CANDY"},{url:"../src/assets/img/snacks.jpg",name:"SNACKS"},{url:"../src/assets/img/canning.jpg",name:"CANNING"},{url:"../src/assets/img/casserole.jpg",name:"CASSEROLES"},{url:"../src/assets/img/cookies.jpg",name:"COOKIES"},{url:"../src/assets/img/brownies.jpg",name:"BROWNIES"},{url:"../src/assets/img/frosting.jpg",name:"FROSTINGS"},{url:"../src/assets/img/main.jpg",name:"MAIN DISHES"},{url:"../src/assets/img/side.jpg",name:"SIDE DISHES"},{url:"../src/assets/img/pie.jpg",name:"PIES & CRUSTS"},{url:"../src/assets/img/soup.jpg",name:"SOUPS & SALADS"},{url:"../src/assets/img/dips.jpg",name:"DIPS | SAUCES | DRESSINGS"},{url:"../src/assets/img/pastries.jpg",name:"DESSERTS | PASTRIES | PUDDINGS"},{url:"../src/assets/img/misc.jpg",name:"MISC"}]});const A={name:"App",setup:()=>({appState:t((()=>_))})},T={class:"justify-content-center"};A.render=function(e,t,c,i,l,u){const d=n("Navbar"),p=n("router-view");return a(),s(r,null,[o("header",null,[o(d)]),o("main",T,[o(p)])],64)};const w={name:"Categories",props:["category"],setup:()=>({}),computed:{},methods:{},components:{}},C={class:"categories rounded col-5 col-md-2 mx-2 my-4 px-0 card shadow"},k={class:"embed-responsive embed-responsive-4by3  d-flex justify-content-center align-items-end"},R={class:" col-12 p-1 card card-background"},j={class:"text-light my-2"};w.render=function(e,t,r,l,u,d){const p=n("router-link");return a(),s("div",C,[o(p,{to:{name:"RecipesPage",params:{categoryName:r.category.name}}},{default:c((()=>[o("div",k,[o("img",{src:r.category.url,class:"card-img-top embed-responsive-item",alt:"image"},null,8,["src"]),o("div",R,[o("h5",j,i(r.category.name),1)])])])),_:1},8,["to"])])};var x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const I=window.location.origin.includes("localhost"),O=I?"http://localhost:3000":"";let P;const N={},D=function(e,t){if(!t||0===t.length)return e();if(void 0===P){const e=document.createElement("link").relList;P=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in N)return;N[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":P,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function L(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return D((()=>import("./AboutPage.c387a608.js")),["/assets/AboutPage.c387a608.js","/assets/vendor.b51a37cd.js"]);case"./pages/AccountPage.vue":return D((()=>import("./AccountPage.bdfc8ffb.js")),["/assets/AccountPage.bdfc8ffb.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.b51a37cd.js"]);case"./pages/HomePage.vue":return D((()=>import("./HomePage.61149c52.js")),["/assets/HomePage.61149c52.js","/assets/HomePage.adefa902.css","/assets/vendor.b51a37cd.js"]);case"./pages/RecipesPage.vue":return D((()=>import("./RecipesPage.a9739804.js")),["/assets/RecipesPage.a9739804.js","/assets/RecipesPage.6b4a7ada.css","/assets/vendor.b51a37cd.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./pages/${e}.vue`)}const U=[{path:"/",name:"Home",component:L("HomePage")},{path:"/about",name:"About",component:L("AboutPage")},{path:"/account",name:"Account",component:L("AccountPage"),beforeEnter:d},{path:"/recipesPage/:categoryName",name:"RecipesPage",component:L("RecipesPage")}],M=l({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:u(),routes:U});function H(e,t){if(I)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const B={log(){H("log",arguments)},error(){H("error",arguments)},warn(){H("warn",arguments)},assert(){H("assert",arguments)},trace(){H("trace",arguments)}},$=p.create({baseURL:O,timeout:8e3});const K=new class{async getAccount(){try{const e=await $.get("/account");_.account=e.data}catch(e){B.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}};let z=!1,V=[];const Y="connected",F="authenticate",G="authenticated",W="error";const q=new class extends class{constructor(e=O){this.socket=m(e||O),this.on(Y,this.onConnected).on(G,this.onAuthenticated).on(W,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){B.log("[SOCKET_CONNECTION]",e),z=!0}onAuthenticated(e){B.log("[SOCKET_AUTHENTICATED]",e);const t=[...V];V=[],t.forEach((e=>{this.emit(e.action,e.payload)}))}authenticate(e){this.socket.emit(F,e)}onError(e){B.error("[SOCKET_ERROR]",e)}emit(e,t){if(!z)return B.log("[ENQUEING_ACTION]",{action:e,payload:t}),V.push({action:e,payload:t});this.socket.emit(e,t)}}{constructor(){super(),this.on("error",this.onError)}onError(e){B.error("[SOCKET_ERROR]",e),class{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",s="Yes, delete it!"){try{return!!(await g.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:s})).isConfirmed}catch(o){return!1}}static toast(e="Warning!",t="warning",a="top-end",s=3e3,o=!0){g.fire({title:e,icon:t,position:a,timer:s,timerProgressBar:o,toast:!0,showConfirmButton:!1})}}.toast(e.message,"error")}},X=b({domain:"dev-m9h6hdbs.us.auth0.com",clientId:"7XOq5IhNoYgfdg51vdXxFyxxQSKWqX56",audience:"https://cooperfamilycookbook.com",useRefreshTokens:!0,onRedirectCallback:e=>{M.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function Q(e){if(!X.isAuthenticated)return e;const t=1e3*X.identity.exp,a=t<Date.now(),s=t<Date.now()+432e5;return a?await X.loginWithPopup():s&&(await X.getTokenSilently(),$.defaults.headers.authorization=X.bearer,q.authenticate(X.bearer)),e}X.on(X.AUTH_EVENTS.AUTHENTICATED,(async function(){$.defaults.headers.authorization=X.bearer,$.interceptors.request.use(Q),_.user=X.user,await K.getAccount(),q.authenticate(X.bearer)}));const Z={setup:()=>({state:e({dropOpen:!1}),user:t((()=>_.user)),async login(){X.loginWithPopup()},async logout(){X.logout({returnTo:window.location.origin})}})},J=S("data-v-709a95b8");h("data-v-709a95b8");const ee={class:"navbar navbar-expand-lg navbar-light table-bg shadow"},te=o("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"navbar-toggler-icon"})],-1),ae={class:"collapse navbar-collapse text-center",id:"navbarText"},se={class:"navbar-nav mr-auto"},oe={class:"nav-item"},re=v(" Cooper Family Cookbook "),ne=o("form",{class:"form-inline mr-sm-4 justify-content-center"},[o("input",{class:"form-control border border-dark border-radius",type:"search",placeholder:"Search","aria-label":"Search"}),o("button",{class:"btn cuttingboard-bg my-2 my-sm-0 border border-rounded border-dark",type:"submit"}," Search ")],-1),ce={class:"navbar-text"};f();const ie=J(((e,t,r,c,i,l)=>{const u=n("router-link");return a(),s("nav",ee,[te,o("div",ae,[o("ul",se,[o("li",oe,[o(u,{to:{name:"Home"},class:"nav-link text-dark navTitle card cuttingboard-bg px-4 my-2 py-0 shadow text-center"},{default:J((()=>[re])),_:1})])]),ne,o("span",ce,[c.user.isAuthenticated?(a(),s("button",{key:1,class:"btn  border border-dark cuttingboard-bg text-uppercase",onClick:t[2]||(t[2]=(...e)=>c.logout&&c.logout(...e))}," Logout ")):(a(),s("button",{key:0,class:"btn  cuttingboard-bg border border-dark text-uppercase",onClick:t[1]||(t[1]=(...e)=>c.login&&c.login(...e))}," Login "))])])])}));Z.render=ie,Z.__scopeId="data-v-709a95b8";var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});const ue={name:"Recipe",props:["recipe"],setup:()=>({}),computed:{},methods:{},components:{}},de={class:"font"},pe={class:"list-unstyled mb-0 card table-bg col-12 shadow px-5 font-small"},me={class:" pt-2 px-2"},ge={class:" mb-2 mx-2"},be={class:"card card-body table-bg text-dark p-1  shadow"},he={class:"list-group"},fe={class:"list-group-item p-1"},Se=o("p",{class:"font-weight-bold"},[o("u",{class:"font-small"},"INGREDIENTS:")],-1),ve={class:"inputIngredient"},Ee={class:"list-group-item p-1"},ye=o("p",{class:"font-weight-bold"},[o("u",{class:"font-small"},"DIRECTIONS:")],-1),_e={class:"inputDirections"};ue.render=function(e,t,r,l,u,d){const p=n("RecipeModal");return a(),s("div",null,[o("div",{type:"button",class:"recipe rounded col-12 my-4 mr-md-5 p-4  card table-bg border border-dark  shadow text-center","data-toggle":"modal","data-target":"#recipeModal-"+r.recipe.id},[o("h5",de,i(r.recipe.title),1)],8,["data-target"]),o(p,{id:"recipeModal-"+r.recipe.id},{"modal-header":c((()=>[o("ul",pe,[o("li",null,[o("h1",me,i(r.recipe.title),1)]),o("p",ge," Created By: "+i(r.recipe.createdBy),1)])])),"modal-body":c((()=>[o("div",null,[o("div",be,[o("ul",he,[o("li",fe,[Se,o("p",ve,i(r.recipe.ingredients),1)]),o("li",Ee,[ye,o("p",_e,i(r.recipe.directions),1)])])])])])),_:1},8,["id"])])};var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const Te={name:"Modal",props:["modalActive"],setup:()=>({})},we={class:"modal",tabindex:"-1"},Ce={class:"modal-dialog"},ke={class:"modal-content"},Re={class:"modal-header justify-content-center cuttingboard-bg p-4"},je={class:"modal-body cuttingboard-bg pt-0 px-4 pb-4"},xe=o("button",{type:"button",class:"btn table-bg col-12 px-4 mt-4 shadow ","data-dismiss":"modal","aria-label":"Close"}," CLOSE ",-1);Te.render=function(e,t,r,n,c,i){return a(),s("div",we,[o("div",Ce,[o("div",ke,[o("div",Re,[E(e.$slots,"modal-header")]),o("div",je,[E(e.$slots,"modal-body"),xe])])])])};var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const Oe=y(A);!function(e){const t={"./components/Categories.vue":x,"./components/Navbar.vue":le,"./components/Recipe.vue":Ae,"./components/RecipeModal.vue":Ie};Object.entries(t).forEach((([t,a])=>{const s=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,a.default)}))}(Oe),Oe.use(M).mount("#app");export{_ as A,w as _,$ as a,ue as b,B as l,M as r};
