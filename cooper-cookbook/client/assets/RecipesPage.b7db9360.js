import{r as e,A as t,b as a}from"./index.fcc7b6e4.js";import{r as s,c,y as r,p as o,h as l,z as i,d as p,o as n,a as d,b as m,F as f,u,j as b,x as g}from"./vendor.1ccf2d80.js";const y={name:"RecipesPage",setup(){const a=i(),o=s({recipes:c((()=>t.recipe))});return r((()=>{e.getAll()})),{state:o,AppState:t,route:a,recipes:c((()=>"all"===a.params.categoryName?t.recipe.sort(((e,t)=>e.title.localeCompare(t.title))):t.recipe.filter((e=>e.category===a.params.categoryName)).sort(((e,t)=>e.title.localeCompare(t.title)))))}},components:{Recipe:a}},x=b();o("data-v-c5a620f2");const h={class:"recipesPage row container-fluid justify-content-center  text-center table-bg  px-0"},k={class:"col-12 title  bg-image shadow px-0 py-5  mb-5"},v={class:" mb-0 my-md-5 py-md-4 text-light title-bg "},j=g(" Cooper Family Cookbook "),C=m("div",{class:"col-12 d-flex justify-content-center align-items-center"},[m("h2",{class:"card shadow border border-dark black-bg px-5 py-2 mt-4  font"},[m("u",null,"- Click The Recipe for Details -")])],-1),w={class:"col-md-8 col-12 pr-3 pr-sm-5"};l();const A=x(((e,t,a,s,c,r)=>{const o=p("router-link"),l=p("recipe");return n(),d("div",h,[m("div",k,[m("h1",v,[m(o,{to:{name:"Home"},class:"text-light  cooper"},{default:x((()=>[j])),_:1})])]),C,m("div",w,[(n(!0),d(f,null,u(s.recipes,(e=>(n(),d(l,{key:e.id,recipe:e},null,8,["recipe"])))),128))])])}));y.render=A,y.__scopeId="data-v-c5a620f2";export default y;
