import{A as e,b as a}from"./index.fe45df93.js";import{r as s,c as r,p as t,j as c,y as o,d as n,o as i,a as p,b as l,F as d,u as m,k as u}from"./vendor.1a36020b.js";const f={name:"RecipesPage",setup(){const a=o();return{state:s({}),AppState:e,route:a,recipes:r((()=>"all"===a.params.categoryName?e.recipe:e.recipe.filter((e=>e.category===a.params.categoryName))))}},components:{Recipe:a}},b=u();t("data-v-31a6e278");const g={class:"recipesPage row container-fluid justify-content-center  text-center table-bg  px-md-0"},y=l("div",{class:"col-12 mt-2 d-flex justify-content-center align-items-center"},[l("h1",{class:"card shadow bg-tan px-5 py-2 mt-4 border border-dark"},[l("u",null,"- Click The Recipe for Details -")])],-1),v={class:"col-md-8 col-12 pr-5 pr-sm-0"};c();const x=b(((e,a,s,r,t,c)=>{const o=n("recipe");return i(),p("div",g,[y,l("div",v,[(i(!0),p(d,null,m(r.recipes,(e=>(i(),p(o,{key:e.id,recipe:e},null,8,["recipe"])))),128))])])}));f.render=x,f.__scopeId="data-v-31a6e278";export default f;