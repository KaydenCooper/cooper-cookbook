import{r as e,c as t,o as a,a as s,b as r,F as o,d as n,w as c,t as i,e as l,f as d,g as u,C as p,i as m,S as g,h as b,p as h,j as f,k as E,l as S,m as v,n as y}from"./vendor.97225bb9.js";const A=e({user:[],account:{},recipe:[],categories:[{url:"/assets/appetizer.55020a0d.jpg",name:"APPETIZERS"},{url:"/assets/bread.4a01c324.jpg",name:"BREAD"},{url:"/assets/muffin.61a6f7f6.jpg",name:"MUFFINS"},{url:"/assets/pancake.09ca9fd7.jpg",name:"PANCAKES"},{url:"/assets/rolls.f1e5fdec.jpg",name:"ROLLS"},{url:"/assets/scones.cb549752.jpg",name:"SCONES"},{url:"/assets/cake.befbed79.jpg",name:"CAKES"},{url:"/assets/candy.4342e777.jpg",name:"CANDY"},{url:"/assets/snacks.5b46dff5.jpg",name:"SNACKS"},{url:"/assets/canning.517484d1.jpg",name:"CANNING"},{url:"/assets/casserole.287bdd2b.jpg",name:"CASSEROLES"},{url:"/assets/cookies.86f2d6a1.jpg",name:"COOKIES"},{url:"/assets/brownies.80c43b55.jpg",name:"BROWNIES"},{url:"/assets/frosting.76610d85.jpg",name:"FROSTINGS"},{url:"/assets/main.92ca5736.jpg",name:"MAIN DISHES"},{url:"/assets/side.9bd25e17.jpg",name:"SIDE DISHES"},{url:"/assets/pie.e8eec809.jpg",name:"PIES & CRUSTS"},{url:"/assets/soup.d223a845.jpg",name:"SOUPS & SALADS"},{url:"/assets/dips.3770f736.jpg",name:"DIPS | SAUCES | DRESSINGS"},{url:"/assets/pastries.005fe81b.jpg",name:"DESSERTS | PASTRIES | PUDDINGS"},{url:"/assets/misc.9c60bf08.jpg",name:"MISC"}]});const _={name:"App",setup:()=>({appState:t((()=>A))})},w=r("header",null,null,-1),T={class:"justify-content-center"};_.render=function(e,t,c,i,l,d){const u=n("router-view");return a(),s(o,null,[w,r("main",T,[r(u)])],64)};const C={name:"Categories",props:["category"],setup:()=>({}),computed:{},methods:{},components:{}},R={class:"categories rounded col-5 col-md-2 mx-2 my-4 px-0 card shadow"},j={class:"embed-responsive embed-responsive-4by3  d-flex justify-content-center align-items-end"},k={class:" col-12 p-1 card card-background"},I={class:"text-light my-2"};C.render=function(e,t,o,l,d,u){const p=n("router-link");return a(),s("div",R,[r(p,{to:{name:"RecipesPage",params:{categoryName:o.category.name}}},{default:c((()=>[r("div",j,[r("img",{src:o.category.url,class:"card-img-top embed-responsive-item",alt:"image"},null,8,["src"]),r("div",k,[r("h5",I,i(o.category.name),1)])])])),_:1},8,["to"])])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const P=window.location.origin.includes("localhost"),x=P?"http://localhost:3000":"";let N;const D={},L=function(e,t){if(!t||0===t.length)return e();if(void 0===N){const e=document.createElement("link").relList;N=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in D)return;D[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":N,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))};function U(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return L((()=>import("./AboutPage.019e0ef5.js")),["/assets/AboutPage.019e0ef5.js","/assets/vendor.97225bb9.js"]);case"./pages/AccountPage.vue":return L((()=>import("./AccountPage.3d35a7dd.js")),["/assets/AccountPage.3d35a7dd.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.97225bb9.js"]);case"./pages/HomePage.vue":return L((()=>import("./HomePage.340805bd.js")),["/assets/HomePage.340805bd.js","/assets/HomePage.4309841d.css","/assets/vendor.97225bb9.js"]);case"./pages/RecipesPage.vue":return L((()=>import("./RecipesPage.f9116d82.js")),["/assets/RecipesPage.f9116d82.js","/assets/RecipesPage.6b4a7ada.css","/assets/vendor.97225bb9.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./pages/${e}.vue`)}const M=[{path:"/",name:"Home",component:U("HomePage")},{path:"/about",name:"About",component:U("AboutPage")},{path:"/account",name:"Account",component:U("AccountPage"),beforeEnter:u},{path:"/recipesPage/:categoryName",name:"RecipesPage",component:U("RecipesPage")}],$=l({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:d(),routes:M});function B(e,t){if(P)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const H={log(){B("log",arguments)},error(){B("error",arguments)},warn(){B("warn",arguments)},assert(){B("assert",arguments)},trace(){B("trace",arguments)}},K=p.create({baseURL:x,timeout:8e3});const z=new class{async getAccount(){try{const e=await K.get("/account");A.account=e.data}catch(e){H.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}};const G=new class{async getbyId(e){try{const t=await K.get(`api/recipes/${e}`);A.recipe=t.data.data}catch(t){H.err("WRONG",t)}}async getAll(){try{const e=await K.get("api/recipes");A.recipe=e.data.data}catch(e){H.error("Error Error Error???",e)}}async create(e){try{const t=await K.post("api/recipes",e);A.recipe.push(t.data)}catch(t){H.error("Error Error Error???",t)}}};let V=!1,W=[];const Y="connected",F="authenticate",q="authenticated",X="error";const Q=new class extends class{constructor(e=x){this.socket=m(e||x),this.on(Y,this.onConnected).on(q,this.onAuthenticated).on(X,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){H.log("[SOCKET_CONNECTION]",e),V=!0}onAuthenticated(e){H.log("[SOCKET_AUTHENTICATED]",e);const t=[...W];W=[],t.forEach((e=>{this.emit(e.action,e.payload)}))}authenticate(e){this.socket.emit(F,e)}onError(e){H.error("[SOCKET_ERROR]",e)}emit(e,t){if(!V)return H.log("[ENQUEING_ACTION]",{action:e,payload:t}),W.push({action:e,payload:t});this.socket.emit(e,t)}}{constructor(){super(),this.on("error",this.onError)}onError(e){H.error("[SOCKET_ERROR]",e),class{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",s="Yes, delete it!"){try{return!!(await g.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:s})).isConfirmed}catch(r){return!1}}static toast(e="Warning!",t="warning",a="top-end",s=3e3,r=!0){g.fire({title:e,icon:t,position:a,timer:s,timerProgressBar:r,toast:!0,showConfirmButton:!1})}}.toast(e.message,"error")}},Z=b({domain:"dev-m9h6hdbs.us.auth0.com",clientId:"7XOq5IhNoYgfdg51vdXxFyxxQSKWqX56",audience:"https://cooperfamilycookbook.com",useRefreshTokens:!0,onRedirectCallback:e=>{$.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function J(e){if(!Z.isAuthenticated)return e;const t=1e3*Z.identity.exp,a=t<Date.now(),s=t<Date.now()+432e5;return a?await Z.loginWithPopup():s&&(await Z.getTokenSilently(),K.defaults.headers.authorization=Z.bearer,Q.authenticate(Z.bearer)),e}Z.on(Z.AUTH_EVENTS.AUTHENTICATED,(async function(){K.defaults.headers.authorization=Z.bearer,K.interceptors.request.use(J),A.user=Z.user,await z.getAccount(),Q.authenticate(Z.bearer),await G.getAll()}));const ee={setup:()=>({state:e({dropOpen:!1}),user:t((()=>A.user)),async login(){Z.loginWithPopup()},async logout(){Z.logout({returnTo:window.location.origin})}})},te=E("data-v-978e25fe");h("data-v-978e25fe");const ae={class:"navbar navbar-expand-lg navbar-light table-bg shadow"},se=r("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[r("span",{class:"navbar-toggler-icon"})],-1),re={class:"collapse navbar-collapse text-center",id:"navbarText"},oe=S('<ul class="navbar-nav mr-auto" data-v-978e25fe><li class="nav-item" data-v-978e25fe></li></ul><form class="form-inline mr-sm-4 justify-content-center" data-v-978e25fe><input class="form-control border border-dark border-radius" type="search" placeholder="Search" aria-label="Search" data-v-978e25fe><button class="btn cuttingboard-bg my-2 my-sm-0 border border-rounded border-dark" type="submit" data-v-978e25fe> Search </button></form>',2),ne={class:"navbar-text"};f();const ce=te(((e,t,o,n,c,i)=>(a(),s("nav",ae,[se,r("div",re,[oe,r("span",ne,[n.user.isAuthenticated?(a(),s("button",{key:1,class:"btn  border border-dark cuttingboard-bg text-uppercase",onClick:t[2]||(t[2]=(...e)=>n.logout&&n.logout(...e))}," Logout ")):(a(),s("button",{key:0,class:"btn  cuttingboard-bg border border-dark text-uppercase",onClick:t[1]||(t[1]=(...e)=>n.login&&n.login(...e))}," Login "))])])]))));ee.render=ce,ee.__scopeId="data-v-978e25fe";var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const le={name:"Recipe",props:["recipe"],setup:()=>({}),computed:{},methods:{},components:{}},de={class:"font"},ue={class:"list-unstyled mb-0 card bg-light col-12 shadow px-5 font-small"},pe={class:" pt-2 px-2"},me={class:" mb-2 mx-2"},ge={class:"card card-body bg-light text-dark p-1  shadow"},be={class:"list-group"},he={class:"list-group-item p-1"},fe=r("p",{class:"font-weight-bold"},[r("u",{class:"font-small"},"INGREDIENTS:")],-1),Ee={class:"inputIngredient"},Se={class:"list-group-item p-1"},ve=r("p",{class:"font-weight-bold"},[r("u",{class:"font-small"},"DIRECTIONS:")],-1),ye={class:"inputDirections"};le.render=function(e,t,o,l,d,u){const p=n("RecipeModal");return a(),s("div",null,[r("div",{type:"button",class:"recipe rounded col-12 my-4 mr-md-5 p-4  card black-bg border border-dark  shadow text-center","data-toggle":"modal","data-target":"#recipeModal-"+o.recipe.id},[r("h5",de,i(o.recipe.title),1)],8,["data-target"]),r(p,{id:"recipeModal-"+o.recipe.id},{"modal-header":c((()=>[r("ul",ue,[r("li",null,[r("h1",pe,i(o.recipe.title),1)]),r("p",me," Created By: "+i(o.recipe.createdBy),1)])])),"modal-body":c((()=>[r("div",null,[r("div",ge,[r("ul",be,[r("li",he,[fe,r("p",Ee,i(o.recipe.ingredients),1)]),r("li",Se,[ve,r("p",ye,i(o.recipe.directions),1)])])])])])),_:1},8,["id"])])};var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const _e={name:"Modal",props:["modalActive"],setup:()=>({})},we={class:"modal",tabindex:"-1"},Te={class:"modal-dialog"},Ce={class:"modal-content"},Re={class:"modal-header justify-content-center table-bg p-4"},je={class:"modal-body table-bg pt-0 px-4 pb-4"},ke=r("button",{type:"button",class:"btn bg-light col-12 px-4 mt-4 shadow ","data-dismiss":"modal","aria-label":"Close"}," CLOSE ",-1);_e.render=function(e,t,o,n,c,i){return a(),s("div",we,[r("div",Te,[r("div",Ce,[r("div",Re,[v(e.$slots,"modal-header")]),r("div",je,[v(e.$slots,"modal-body"),ke])])])])};var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e});const Oe=y(_);!function(e){const t={"./components/Categories.vue":O,"./components/Navbar.vue":ie,"./components/Recipe.vue":Ae,"./components/RecipeModal.vue":Ie};Object.entries(t).forEach((([t,a])=>{const s=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,a.default)}))}(Oe),Oe.use($).mount("#app");export{A,C as _,$ as a,le as b,G as r};